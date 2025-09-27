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