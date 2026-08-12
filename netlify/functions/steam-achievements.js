// Returns how many Steam achievements have been unlocked for a given app.
// GET /.netlify/functions/steam-achievements?appid=570
//
// Requires STEAM_API_KEY and STEAM_ID64 environment variables, set in the
// Netlify dashboard (Site settings -> Environment variables) - never in
// this repo.

const CORS_HEADERS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Content-Type': 'application/json',
};

exports.handler = async (event) => {
    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 204, headers: CORS_HEADERS, body: '' };
    }

    const apiKey = process.env.STEAM_API_KEY;
    const steamId = process.env.STEAM_ID64;
    if (!apiKey || !steamId) {
        return {
            statusCode: 500,
            headers: CORS_HEADERS,
            body: JSON.stringify({ error: 'STEAM_API_KEY or STEAM_ID64 is not configured on this deployment' }),
        };
    }

    const appId = event.queryStringParameters && event.queryStringParameters.appid;
    if (!appId || !/^\d+$/.test(appId)) {
        return {
            statusCode: 400,
            headers: CORS_HEADERS,
            body: JSON.stringify({ error: 'Missing or invalid ?appid= parameter' }),
        };
    }

    const url = `https://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=${appId}&key=${apiKey}&steamid=${steamId}`;

    try {
        const res = await fetch(url);
        const data = await res.json();
        const stats = data && data.playerstats;

        if (!stats || stats.success !== true || !Array.isArray(stats.achievements)) {
            // Not necessarily an error we can fix - could be a private
            // profile, a game with no achievement schema, or one the
            // player doesn't own. Let the caller decide whether to skip it.
            return {
                statusCode: 200,
                headers: CORS_HEADERS,
                body: JSON.stringify({ available: false, reason: (stats && stats.error) || 'no achievement data returned' }),
            };
        }

        const unlocked = stats.achievements.filter((a) => a.achieved === 1).length;
        return {
            statusCode: 200,
            headers: CORS_HEADERS,
            body: JSON.stringify({ available: true, unlocked }),
        };
    } catch (err) {
        return {
            statusCode: 502,
            headers: CORS_HEADERS,
            body: JSON.stringify({ error: 'Failed to reach Steam API', detail: err.message }),
        };
    }
};
