// Batch 2 Release Dates - Games 21-40 alphabetically
// Manual lookup based on reliable sources

const batch2ReleaseDates = {
    "Assassin's Creed IV Black Flag": 2013,
    "Assassin's Creed Freedom Cry": 2013,
    "Assassin's Creed Liberation": 2012,
    "Assassin's Creed Odyssey": 2018,
    "Assassin's Creed Origins": 2017,
    "Assassin's Creed Revelations": 2011,
    "Assassin's Creed Rogue": 2014,
    "Assassin's Creed Syndicate": 2015,
    "Assassin's Creed Unity": 2014,
    "Assassin's Creed Valhalla": 2020,
    "Assassin's Creed® Chronicles: China": 2015,
    "Assassin's Creed® Chronicles: India": 2016,
    "Assassin's Creed® Chronicles: Russia": 2016,
    "Assassin's Creed® III": 2012,
    "Back 4 Blood": 2021,
    "Batman - The Telltale Series": 2016,
    "Batman: Arkham Asylum GOTY Edition": 2009,
    "Batman: Arkham City GOTY": 2011,
    "Batman: The Enemy Within - The Telltale Series": 2017,
    "Batman™: Arkham Knight": 2015
};

// Display results
console.log('=== BATCH 2 RELEASE DATES (MANUAL LOOKUP) ===');
Object.keys(batch2ReleaseDates).forEach(gameName => {
    console.log(`✓ ${gameName}: ${batch2ReleaseDates[gameName]}`);
});

console.log(`\nFound release dates for ${Object.keys(batch2ReleaseDates).length}/20 games`);

// Export data
const batch2Data = {
    batchNumber: 2,
    processed: new Date().toISOString(),
    totalGames: Object.keys(batch2ReleaseDates).length,
    foundDates: Object.keys(batch2ReleaseDates).length,
    source: 'manual_lookup',
    games: Object.keys(batch2ReleaseDates).map(gameName => ({
        name: gameName,
        year: batch2ReleaseDates[gameName],
        fullDate: null,
        source: 'manual_lookup',
        exactMatch: true
    }))
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { batch2ReleaseDates, batch2Data };
} else {
    window.batch2ReleaseDates = batch2ReleaseDates;
    window.batch2Data = batch2Data;
}