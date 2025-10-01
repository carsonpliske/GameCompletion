# Claude Code Notes for GameOrganizer

## Local Server
To launch the local development server:
```bash
npx http-server -p 3001
```

This will serve the static HTML files at:
- http://127.0.0.1:3001
- http://192.168.0.132:3001

The main application entry point is `index.html`.

## Adding New Games
When adding new games, make sure to update:
1. `gamesList` array in `script.js`
2. `allGames` array in `manualGameData.js`
3. `steamAppIds` object in `script.js` (for images)
4. `releaseDates` object in `manualGameData.js` (for release years)

## Removing Games
When removing games, make sure to remove from ALL locations:
1. `gamesList` array in `script.js`
2. `allGames` array in `manualGameData.js`
3. `steamAppIds` object in `script.js`
4. `releaseDates` object in `manualGameData.js`

**Important:** The game must be removed from all 4 locations or it will still appear on the site.

## Updating Achievement Counts
When updating achievement counts, the `achievementData.js` file has **MULTIPLE ENTRIES** for the same game in different sections. You MUST update ALL occurrences using `replace_all: true` or by searching for all instances and updating each one individually.

**Important:** Always use `grep` to find ALL occurrences of a game name in `achievementData.js` before updating, as games appear multiple times throughout the file.