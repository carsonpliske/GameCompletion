// Returns the player's full Steam library with playtime, keyed by app id.
// GET /.netlify/functions/steam-owned-games
// -> { available: true, games: { "570": 12.5, "1326470": 3, ... } }
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

    const url = `https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${apiKey}&steamid=${steamId}&include_appinfo=false&include_played_free_games=true&format=json`;

    try {
        const res = await fetch(url);
        const data = await res.json();
        const games = data && data.response && Array.isArray(data.response.games) ? data.response.games : null;

        if (!games) {
            // Empty response usually means the profile/game-details privacy
            // setting is blocking this, not a hard error.
            return {
                statusCode: 200,
                headers: CORS_HEADERS,
                body: JSON.stringify({ available: false, reason: 'no games returned - check that "Game details" is set to Public' }),
            };
        }

        const byAppId = {};
        games.forEach((g) => {
            const minutes = g.playtime_forever || 0;
            byAppId[g.appid] = Math.round((minutes / 60) * 2) / 2; // nearest 0.5 hour
        });

        return {
            statusCode: 200,
            headers: CORS_HEADERS,
            body: JSON.stringify({ available: true, games: byAppId }),
        };
    } catch (err) {
        return {
            statusCode: 502,
            headers: CORS_HEADERS,
            body: JSON.stringify({ error: 'Failed to reach Steam API', detail: err.message }),
        };
    }
};
