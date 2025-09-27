// Batch 6 Release Dates - Games 101-140 alphabetically (40 games)
// Manual lookup based on reliable sources

const batch6ReleaseDates = {
    "Celeste": 2018,
    "Chained Together": 2024,
    "Clustertruck": 2016,
    "Comedy Night": 2017,
    "Content Warning": 2024,
    "Contra Anniversary Collection": 2019,
    "Control Ultimate Edition": 2019,
    "Cookie Clicker": 2013,
    "Counter-Strike": 2000,
    "Counter-Strike 2": 2023,
    "Counter-Strike: Condition Zero": 2004,
    "Counter-Strike: Condition Zero Deleted Scenes": 2004,
    "Counter-Strike: Source": 2004,
    "Crab Game": 2021,
    "Crash Bandicoot™ N. Sane Trilogy": 2017,
    "Crusader Kings II": 2012,
    "Cult of the Lamb": 2022,
    "Cuphead": 2017,
    "Cyberpunk 2077": 2020,
    "Darkest Dungeon®": 2016,
    "Darwin Project": 2018,
    "Day of Defeat": 2003,
    "Day of Defeat: Source": 2005,
    "Days Gone": 2019,
    "DayZ": 2013,
    "Dead by Daylight": 2016,
    "Dead Cells": 2017,
    "Dead Island Definitive Edition": 2016,
    "Dead Island Retro Revenge": 2016,
    "Dead Island Riptide Definitive Edition": 2016,
    "Dead Rising": 2006,
    "Dead Rising 2": 2010,
    "Dead Rising 2: Off the Record": 2011,
    "Dead Rising 3": 2013,
    "Dead Rising 4": 2016,
    "Dead Space (2008)": 2008,
    "Dead Space 2": 2011,
    "Dead Space™ 3": 2013,
    "Deathmatch Classic": 1999,
    "Deceit": 2017
};

// Display results
console.log('=== BATCH 6 RELEASE DATES (MANUAL LOOKUP) ===');
Object.keys(batch6ReleaseDates).forEach(gameName => {
    console.log(`✓ ${gameName}: ${batch6ReleaseDates[gameName]}`);
});

console.log(`\nFound release dates for ${Object.keys(batch6ReleaseDates).length}/40 games`);

// Export data
const batch6Data = {
    batchNumber: 6,
    processed: new Date().toISOString(),
    totalGames: Object.keys(batch6ReleaseDates).length,
    foundDates: Object.keys(batch6ReleaseDates).length,
    source: 'manual_lookup',
    games: Object.keys(batch6ReleaseDates).map(gameName => ({
        name: gameName,
        year: batch6ReleaseDates[gameName],
        fullDate: null,
        source: 'manual_lookup',
        exactMatch: true
    }))
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { batch6ReleaseDates, batch6Data };
} else {
    window.batch6ReleaseDates = batch6ReleaseDates;
    window.batch6Data = batch6Data;
}