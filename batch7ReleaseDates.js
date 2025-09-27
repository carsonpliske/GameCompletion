// Batch 7 Release Dates - Games 141-180 alphabetically (40 games)
// Manual lookup based on reliable sources

const batch7ReleaseDates = {
    "Deep Rock Galactic": 2018,
    "Destroy All Humans!": 2020,
    "Detroit: Become Human": 2018,
    "Deus Ex: Game of the Year Edition": 2000,
    "Deus Ex: Human Revolution - Director's Cut": 2011,
    "Deus Ex: Invisible War": 2003,
    "Deus Ex: Mankind Divided™": 2016,
    "Deus Ex: The Fall": 2013,
    "Devolverland Expo": 2020,
    "Dishonored": 2012,
    "Dishonored 2": 2016,
    "Don't Starve": 2013,
    "Don't Starve Together": 2016,
    "Donut County": 2018,
    "DOOM": 2016,
    "DOOM + DOOM II": 2019,
    "DOOM 3": 2004,
    "DOOM 3: BFG Edition": 2012,
    "DOOM 3: Resurrection of Evil": 2005,
    "DOOM 64": 2020,
    "DOOM Eternal": 2020,
    "DOOM II": 1994,
    "Drug Dealer Simulator": 2020,
    "Due Process": 2020,
    "Dungeon Defenders": 2011,
    "Dungeon Defenders II": 2015,
    "Dying Light": 2015,
    "Dying Light 2: Reloaded Edition": 2022,
    "Enter the Gungeon": 2016,
    "Escape Dead Island": 2014,
    "Escape Memoirs: Mini Stories": 2021,
    "Escape the Backrooms": 2022,
    "Euro Truck Simulator 2": 2012,
    "Exit the Gungeon": 2020,
    "Fable Anniversary": 2014,
    "Fall Guys": 2020,
    "Fallout": 1997,
    "Fallout 2": 1998,
    "Fallout 3 - Game of the Year Edition": 2008,
    "Fallout 4": 2015
};

// Display results
console.log('=== BATCH 7 RELEASE DATES (MANUAL LOOKUP) ===');
Object.keys(batch7ReleaseDates).forEach(gameName => {
    console.log(`✓ ${gameName}: ${batch7ReleaseDates[gameName]}`);
});

console.log(`\nFound release dates for ${Object.keys(batch7ReleaseDates).length}/40 games`);

// Export data
const batch7Data = {
    batchNumber: 7,
    processed: new Date().toISOString(),
    totalGames: Object.keys(batch7ReleaseDates).length,
    foundDates: Object.keys(batch7ReleaseDates).length,
    source: 'manual_lookup',
    games: Object.keys(batch7ReleaseDates).map(gameName => ({
        name: gameName,
        year: batch7ReleaseDates[gameName],
        fullDate: null,
        source: 'manual_lookup',
        exactMatch: true
    }))
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { batch7ReleaseDates, batch7Data };
} else {
    window.batch7ReleaseDates = batch7ReleaseDates;
    window.batch7Data = batch7Data;
}