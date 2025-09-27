// Batch 5 Release Dates - Games 81-100 alphabetically
// Manual lookup based on reliable sources

const batch5ReleaseDates = {
    "Call of Duty: Ghosts - Multiplayer": 2013,
    "Call of Duty: Infinite Warfare": 2016,
    "Call of Duty: Modern Warfare 2 (2009)": 2009,
    "Call of Duty: Modern Warfare 2 (2009) - Multiplayer": 2009,
    "Call of Duty: Modern Warfare Remastered (2017)": 2016,
    "Call of Duty: Modern Warfare Remastered - Multiplayer": 2016,
    "Call of Duty®": 2019, // Modern Warfare 2019
    "Call of Duty®: Modern Warfare®": 2019,
    "Call of Duty®: Modern Warfare® II": 2022,
    "Call of Duty®: Modern Warfare® II - Open Beta": 2022,
    "Call of Duty®: Modern Warfare® 3 (2011)": 2011,
    "Call of Duty®: Modern Warfare® 3 (2011) - Multiplayer": 2011,
    "Call of Duty®: Modern Warfare® III": 2023,
    "Call of Duty: United Offensive": 2004,
    "Call of Duty®: Vanguard": 2021,
    "Call of Duty: World at War": 2008,
    "Call of Duty: WWII": 2017,
    "Call of Duty: WWII - Multiplayer": 2017,
    "Capcom Fighting Collection": 2022,
    "Castle Crashers": 2008
};

// Display results
console.log('=== BATCH 5 RELEASE DATES (MANUAL LOOKUP) ===');
Object.keys(batch5ReleaseDates).forEach(gameName => {
    console.log(`✓ ${gameName}: ${batch5ReleaseDates[gameName]}`);
});

console.log(`\nFound release dates for ${Object.keys(batch5ReleaseDates).length}/20 games`);

// Export data
const batch5Data = {
    batchNumber: 5,
    processed: new Date().toISOString(),
    totalGames: Object.keys(batch5ReleaseDates).length,
    foundDates: Object.keys(batch5ReleaseDates).length,
    source: 'manual_lookup',
    games: Object.keys(batch5ReleaseDates).map(gameName => ({
        name: gameName,
        year: batch5ReleaseDates[gameName],
        fullDate: null,
        source: 'manual_lookup',
        exactMatch: true
    }))
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { batch5ReleaseDates, batch5Data };
} else {
    window.batch5ReleaseDates = batch5ReleaseDates;
    window.batch5Data = batch5Data;
}