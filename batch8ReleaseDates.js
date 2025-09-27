// Batch 8 Release Dates - Games 181-220 alphabetically (40 games)
// Manual lookup based on reliable sources

const batch8ReleaseDates = {
    "Fallout 76": 2018,
    "Fallout 76 Public Test Server": 2018,
    "Fallout: New Vegas": 2010,
    "Fallout Shelter": 2015,
    "Fallout Tactics": 2001,
    "Far Cry": 2004,
    "Far Cry 2": 2008,
    "Far Cry 4": 2014,
    "Far Cry 5": 2018,
    "Far Cry 6": 2021,
    "Far Cry New Dawn": 2019,
    "Far Cry Primal": 2016,
    "Far Cry® 3": 2012,
    "Far Cry® 3 Blood Dragon": 2013,
    "Fears to Fathom - Woodbury Getaway": 2021,
    "Final DOOM": 1996,
    "FINAL FANTASY": 1987,
    "FINAL FANTASY II": 1988,
    "FINAL FANTASY III": 1990,
    "FINAL FANTASY IV": 1991,
    "FINAL FANTASY TYPE-0 HD": 2015,
    "FINAL FANTASY V": 1992,
    "FINAL FANTASY VI": 1994,
    "FINAL FANTASY VII": 1997,
    "FINAL FANTASY IX": 2000,
    "FINAL FANTASY XII THE ZODIAC AGE": 2017,
    "FINAL FANTASY XIII": 2009,
    "FINAL FANTASY XIII-2": 2011,
    "FINAL FANTASY XV WINDOWS EDITION": 2018,
    "Firewatch": 2016,
    "Five Nights at Freddy's": 2014,
    "Five Nights at Freddy's 2": 2014,
    "Five Nights at Freddy's 3": 2015,
    "For Honor": 2017,
    "For Honor - Public Test": 2017,
    "The Forest": 2014,
    "Friday the 13th: The Game": 2017,
    "Gang Beasts": 2017,
    "Garfield Kart": 2013,
    "Garfield Kart - Furious Racing": 2019
};

// Display results
console.log('=== BATCH 8 RELEASE DATES (MANUAL LOOKUP) ===');
Object.keys(batch8ReleaseDates).forEach(gameName => {
    console.log(`✓ ${gameName}: ${batch8ReleaseDates[gameName]}`);
});

console.log(`\nFound release dates for ${Object.keys(batch8ReleaseDates).length}/40 games`);

// Export data
const batch8Data = {
    batchNumber: 8,
    processed: new Date().toISOString(),
    totalGames: Object.keys(batch8ReleaseDates).length,
    foundDates: Object.keys(batch8ReleaseDates).length,
    source: 'manual_lookup',
    games: Object.keys(batch8ReleaseDates).map(gameName => ({
        name: gameName,
        year: batch8ReleaseDates[gameName],
        fullDate: null,
        source: 'manual_lookup',
        exactMatch: true
    }))
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { batch8ReleaseDates, batch8Data };
} else {
    window.batch8ReleaseDates = batch8ReleaseDates;
    window.batch8Data = batch8Data;
}