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

It's fine to add a game with just #1 and #2 filled in — it'll render with a
placeholder icon and "Unknown" time/achievements (see any existing game with
no data for reference) until the rest is filled in later.

### Finding Steam App IDs and achievement counts
No Steam API key needed - both of these are public, unauthenticated endpoints:

- **App ID search**: `https://store.steampowered.com/api/storesearch/?term=<name>&cc=us&l=english`
  Returns `items[]` with `id` (App ID) and `name`. Watch for DLC/soundtrack/demo
  results mixed in, and for multiple legitimately different products under
  similar names (remasters, classic re-releases, sequels vs. definitive
  editions) - verify you're picking the right one before using it.
- **Achievement count**: `https://store.steampowered.com/api/appdetails?appids=<id>&cc=us&l=english`
  Returns `data.achievements.total` when the game has achievements. A missing
  `achievements` key means the game genuinely has none (confirmed reliable -
  it matches manually-verified existing entries in this project like
  "Fallout 3 - Game of the Year Edition").

### Two gotchas discovered adding games this way
- **Newer Steam listings need a CDN hash.** The image URL builder
  (`getSteamImageUrl` in `script.js`) constructs
  `cdn.akamai.steamstatic.com/steam/apps/{id}/header.jpg`, which 404s for
  newer App IDs - Valve now requires a per-app hash segment for those. If a
  new game's header image 404s, fetch `header_image` from the appdetails API
  above and add it to `steamImageCdnOverrides` (also in `script.js`) rather
  than changing `steamAppIds` - the App ID must stay a plain number since it's
  also used to build the "open Steam page" link.
- **Fuzzy name-matching can leak data between similarly-named games.**
  `hltbGameTimes`/`completionistTimes`/`steamAchievements` all fall back to
  stripping a trailing `" (YYYY)"` when looking up a game's data. If you add a
  classic/year-tagged edition alongside an existing modern entry (e.g.
  `"Resident Evil 2 (1998)"` next to the existing `"Resident Evil 2"`), the
  new entry will silently inherit the *other* game's time/achievement data
  unless you add an explicit entry for it (even just `null`/`{hasAchievements:
  false, count: 0}` as a placeholder - the lookups check key existence via
  `hasOwnProperty`, not truthiness, so an explicit falsy entry correctly
  blocks the fallback).

### Finding time-to-beat data (main story / 100% completion)
Main story time lives in `hltbGameTimes` in `hltbGameData.js`; 100% completion
time lives in `completionistTimes` in `script.js`. Both are plain
`"Title": hours` maps (half-hour increments, e.g. `7.5`), consumed as a
fallback only when `manualGameTimes` (in `manualGameData.js`, currently
empty) has no entry for that title.

HowLongToBeat has no official public API, and its internal API contract
changes periodically, breaking naive scrapers. Don't hand-roll a request to
it - install a actively-maintained npm wrapper instead (in a throwaway temp
directory, not this project's dependencies - this project has none):
```bash
npm init -y && npm install howlongtobeat-ts
```
Then use `HowLongToBeatService.search(name)` (or `.getById(id)` once you
know the id) - see its README for the full API. Pick whichever HLTB wrapper
package was updated most recently on npm at the time, since HLTB's contract
drifts and unmaintained wrappers silently stop working.

HLTB, like Steam, tracks classic/remaster/edition variants as separate
entries with the same disambiguation problem as the App ID search - use the
`releaseYear` field on each result to pick the right one (e.g. two entries
both named "Star Wars: Battlefront" with `releaseYear: 2004` vs `2015`).
Convert `mainTime`/`completionistTime` from seconds to hours and round to
the nearest 0.5 to match this project's existing convention. It's normal for
some titles (especially very new/low-traffic ones) to have no submitted
time data yet, or no HLTB page at all - leave those with no entry, same as
missing achievement data.

### Release year: don't trust Steam's `release_date` field blindly
The `appdetails` release year is when that Steam *listing* went live, not
necessarily the game's true original release year - this is silently wrong
for any game added to Steam well after its original launch (old console
ports, games that later left Epic exclusivity, delisted-then-relisted
classics). Found ~1 in 3 new entries wrong in an August 2026 batch this way,
including three re-released classics that showed a 2026 relisting date
instead of their real 1996/1998/1999 release years. Cross-check the
original release year (Wikipedia/WebSearch is fine) for anything that isn't
a same-generation, day-one Steam release, and prefer the *base game's*
original year over an edition-specific relaunch date for
GOTY/definitive/Ultimate-style entries (matches the precedent already in
`releaseDates`: `"Fallout 3 - Game of the Year Edition": 2008`, not the
GOTY edition's own 2009 release). Titles that already carry an explicit year
in the name (e.g. `"Resident Evil 4 (2005)"`) should just use that year
directly - no lookup needed.

### Local server gotcha (this machine)
Running `npx http-server` via the Bash tool's git-bash fails with
`'"node"' is not recognized` (a quoting bug in that environment's npx.cmd
shim). Use the PowerShell tool instead to launch it.

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