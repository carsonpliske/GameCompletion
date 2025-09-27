// Manual release date lookup for first batch of games
// Based on common knowledge and reliable sources

const manualReleaseDates = {
    "60 Parsecs!": 2018,
    "60 Seconds! Reatomized": 2019,
    "7 Days to Die": 2013,
    "A Story About My Uncle": 2014,
    "A Way Out": 2018,
    "Adventure Time: Pirates of the Enchiridion": 2018,
    "Alan Wake": 2010,
    "Alan Wake's American Nightmare": 2012,
    "Alice: Madness Returns": 2011,
    "Alien: Isolation": 2014,
    "American Truck Simulator": 2016,
    "Among Us": 2018,
    "Amnesia: The Dark Descent": 2010,
    "Apex Legends": 2019,
    "ARK: Survival Evolved": 2015,
    "ARK: Survival Of The Fittest": 2016,
    "Arma 3": 2013,
    "Assassin's Creed": 2007,
    "Assassin's Creed II": 2009,
    "Assassin's Creed III Remastered": 2019
};

// Function to create release date data structure
function createReleaseDateData() {
    const releaseData = {};

    Object.keys(manualReleaseDates).forEach(gameName => {
        releaseData[gameName] = {
            name: gameName,
            year: manualReleaseDates[gameName],
            fullDate: null, // We only have years
            source: 'manual_lookup',
            exactMatch: true
        };
    });

    return releaseData;
}

// Export data for integration
const batch1Data = {
    batchNumber: 1,
    processed: new Date().toISOString(),
    totalGames: Object.keys(manualReleaseDates).length,
    foundDates: Object.keys(manualReleaseDates).length,
    source: 'manual_lookup',
    games: Object.keys(manualReleaseDates).map(gameName => ({
        name: gameName,
        year: manualReleaseDates[gameName],
        fullDate: null,
        source: 'manual_lookup',
        exactMatch: true
    }))
};

// Display results
console.log('=== BATCH 1 RELEASE DATES (MANUAL LOOKUP) ===');
Object.keys(manualReleaseDates).forEach(gameName => {
    console.log(`✓ ${gameName}: ${manualReleaseDates[gameName]}`);
});

console.log(`\nFound release dates for ${Object.keys(manualReleaseDates).length}/20 games`);

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { manualReleaseDates, batch1Data, createReleaseDateData };
} else {
    window.manualReleaseDates = manualReleaseDates;
    window.batch1Data = batch1Data;
    window.createReleaseDateData = createReleaseDateData;
}