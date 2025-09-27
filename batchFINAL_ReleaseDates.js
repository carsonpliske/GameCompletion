// FINAL BATCH - Complete all remaining games!
// Manual lookup based on reliable sources

const finalBatchReleaseDates = {
    "Tomb Raider": 2013,
    "Tomb Raider I": 1996,
    "Tomb Raider II": 1997,
    "Tomb Raider III: Adventures of Lara Croft": 1998,
    "Tomb Raider: Anniversary": 2007,
    "Tomb Raider: Chronicles (2000)": 2000,
    "Tomb Raider (VI): The Angel of Darkness (2003)": 2003,
    "Tomb Raider I-III Remastered Starring Lara Croft": 2024,
    "Tomb Raider: Legend": 2006,
    "Tomb Raider: The Last Revelation (1999)": 1999,
    "Tomb Raider: Underworld": 2008,
    "Town of Salem": 2014,
    "Trials Evolution Gold Edition": 2012,
    "Trials Fusion": 2014,
    "Trials Rising": 2019,
    "Trove": 2015,
    "Ultimate Chicken Horse": 2016,
    "Ultimate Marvel vs. Capcom 3": 2011,
    "Ultra Street Fighter IV": 2014,
    "Umbrella Corps": 2016,
    "UNCHARTED™: Legacy of Thieves Collection": 2022,
    "Undertale": 2015,
    "UNO": 2016,
    "Unravel": 2016,
    "Unravel Two": 2018,
    "Until Dawn™": 2015,
    "Unturned": 2014,
    "Wallpaper Engine": 2016,
    "Watch Dogs: Legion": 2020,
    "Watch_Dogs": 2014,
    "Watch_Dogs 2": 2016,
    "Welcome to the Game": 2016,
    "What Remains of Edith Finch": 2017,
    "Witch It": 2020,
    "Wizard of Legend": 2018,
    "Wizard101": 2008,
    "Wolfenstein 3D": 1992,
    "Wolfenstein 3D: Spear of Destiny": 1992,
    "Wolfenstein: Enemy Territory": 2003,
    "Wolfenstein II: The New Colossus": 2017,
    "Wolfenstein: The New Order": 2014,
    "Wolfenstein: The Old Blood": 2015,
    "Wolfenstein: Youngblood": 2019,
    "Worms": 1995,
    "Worms Armageddon": 1999,
    "Worms Blast": 2002,
    "Worms Clan Wars": 2013,
    "Worms Crazy Golf": 2011,
    "Worms Pinball": 2007,
    "Worms Reloaded": 2010,
    "Worms Revolution": 2012,
    "Worms Rumble": 2020,
    "Worms Ultimate Mayhem": 2011,
    "Worms W.M.D": 2016,
    "Worms World Party Remastered": 2015,
    "XCOM 2": 2016,
    "Youtubers Life": 2016
};

// Display results
console.log('=== 🏁 FINAL BATCH RELEASE DATES - MISSION COMPLETE! 🏁 ===');
Object.keys(finalBatchReleaseDates).forEach(gameName => {
    console.log(`✓ ${gameName}: ${finalBatchReleaseDates[gameName]}`);
});

console.log(`\n🎉 FINAL BATCH COMPLETE! Found release dates for ${Object.keys(finalBatchReleaseDates).length} games!`);
console.log('🚀 ALL GAMES PROCESSED! MISSION ACCOMPLISHED! 🚀');

// Export data
const finalBatchData = {
    batchNumber: 'FINAL',
    processed: new Date().toISOString(),
    totalGames: Object.keys(finalBatchReleaseDates).length,
    foundDates: Object.keys(finalBatchReleaseDates).length,
    source: 'manual_lookup',
    status: 'MISSION_COMPLETE',
    games: Object.keys(finalBatchReleaseDates).map(gameName => ({
        name: gameName,
        year: finalBatchReleaseDates[gameName],
        fullDate: null,
        source: 'manual_lookup',
        exactMatch: true
    }))
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { finalBatchReleaseDates, finalBatchData };
} else {
    window.finalBatchReleaseDates = finalBatchReleaseDates;
    window.finalBatchData = finalBatchData;
}