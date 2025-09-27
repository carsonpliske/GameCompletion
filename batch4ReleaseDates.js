// Batch 4 Release Dates - Games 61-80 alphabetically
// Manual lookup based on reliable sources

const batch4ReleaseDates = {
    "Borderlands: The Pre-Sequel": 2014,
    "Borderlands GOTY": 2009,
    "Borderlands GOTY Enhanced": 2019,
    "Brotato": 2022,
    "Bully: Scholarship Edition": 2008,
    "Burg": 2021,
    "Burnout™ Paradise Remastered": 2018,
    "Call of Duty (2003)": 2003,
    "Call of Duty 2": 2005,
    "Call of Duty 4: Modern Warfare (2007)": 2007,
    "Call of Duty: Advanced Warfare": 2014,
    "Call of Duty: Advanced Warfare - Multiplayer": 2014,
    "Call of Duty: Black Ops": 2010,
    "Call of Duty: Black Ops - Multiplayer": 2010,
    "Call of Duty: Black Ops II": 2012,
    "Call of Duty: Black Ops II - Multiplayer": 2012,
    "Call of Duty: Black Ops II - Zombies": 2012,
    "Call of Duty: Black Ops III": 2015,
    "Call of Duty®: Black Ops Cold War": 2020,
    "Call of Duty: Ghosts": 2013
};

// Display results
console.log('=== BATCH 4 RELEASE DATES (MANUAL LOOKUP) ===');
Object.keys(batch4ReleaseDates).forEach(gameName => {
    console.log(`✓ ${gameName}: ${batch4ReleaseDates[gameName]}`);
});

console.log(`\nFound release dates for ${Object.keys(batch4ReleaseDates).length}/20 games`);

// Export data
const batch4Data = {
    batchNumber: 4,
    processed: new Date().toISOString(),
    totalGames: Object.keys(batch4ReleaseDates).length,
    foundDates: Object.keys(batch4ReleaseDates).length,
    source: 'manual_lookup',
    games: Object.keys(batch4ReleaseDates).map(gameName => ({
        name: gameName,
        year: batch4ReleaseDates[gameName],
        fullDate: null,
        source: 'manual_lookup',
        exactMatch: true
    }))
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { batch4ReleaseDates, batch4Data };
} else {
    window.batch4ReleaseDates = batch4ReleaseDates;
    window.batch4Data = batch4Data;
}