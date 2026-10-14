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

    // l=english pulls back localized "name"/"description" per achievement
    // (in addition to apiname/achieved/unlocktime) so the frontend can show
    // remaining achievements without a second call to GetSchemaForGame.
    const url = `https://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=${appId}&key=${apiKey}&steamid=${steamId}&l=english`;

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

        // Global unlock rates ("% of players"), for showing rarity. Public
        // endpoint, but still has no CORS so it has to go through here.
        // Best-effort: if it fails, achievements just come back without
        // a percent and the frontend skips the rarity UI.
        const globalPercents = {};
        try {
            const globalRes = await fetch(`https://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0002/?gameid=${appId}`);
            const globalData = await globalRes.json();
            const list = globalData && globalData.achievementpercentages && globalData.achievementpercentages.achievements;
            (list || []).forEach((g) => {
                const pct = parseFloat(g.percent);
                if (!Number.isNaN(pct)) globalPercents[g.name] = Math.round(pct * 10) / 10;
            });
        } catch (e) {
            // ignore - rarity is optional
        }

        const unlocked = stats.achievements.filter((a) => a.achieved === 1).length;
        const achievements = stats.achievements.map((a) => ({
            apiname: a.apiname,
            achieved: a.achieved === 1,
            name: a.name || a.apiname,
            description: a.description || '',
            percent: Object.prototype.hasOwnProperty.call(globalPercents, a.apiname) ? globalPercents[a.apiname] : null,
        }));

        return {
            statusCode: 200,
            headers: CORS_HEADERS,
            body: JSON.stringify({ available: true, unlocked, achievements }),
        };
    } catch (err) {
        return {
            statusCode: 502,
            headers: CORS_HEADERS,
            body: JSON.stringify({ error: 'Failed to reach Steam API', detail: err.message }),
        };
    }
};
