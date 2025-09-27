// Batch 10 Release Dates - Games 305-384 alphabetically (80 games)
// Manual lookup based on reliable sources

const batch10ReleaseDates = {
    "LEGO® Batman™ 2: DC Super Heroes": 2012,
    "LEGO® Batman™ 3: Beyond Gotham": 2014,
    "LEGO® Batman™: The Videogame": 2008,
    "LEGO® Builder's Journey": 2019,
    "LEGO® City Undercover": 2017,
    "LEGO® DC Super-Villains": 2018,
    "LEGO® Harry Potter: Years 1-4": 2010,
    "LEGO® Harry Potter: Years 5-7": 2011,
    "LEGO® Harry Potter™ Collection": 2016,
    "LEGO® Indiana Jones™ 2: The Adventure Continues": 2009,
    "LEGOⓇ Indiana Jones™: The Original Adventures": 2008,
    "LEGO® Jurassic World": 2015,
    "LEGO® MARVEL Super Heroes": 2013,
    "LEGO® MARVEL Super Heroes 2": 2017,
    "LEGO® MARVEL's Avengers": 2016,
    "LEGO® Pirates of the Caribbean The Video Game": 2011,
    "LEGO® Star Wars™ III: The Clone Wars™": 2011,
    "LEGO® STAR WARS™: The Force Awakens": 2016,
    "LEGO® Star Wars™: The Complete Saga": 2007,
    "LEGO® Star Wars™: The Skywalker Saga": 2022,
    "LEGO® The Hobbit™": 2014,
    "LEGO® The Incredibles": 2018,
    "LEGO® The LEGO® Movie - Videogame": 2014,
    "LEGO® The LEGO® Movie 2 - Videogame": 2019,
    "LEGO® The Lord of the Rings™": 2012,
    "LEGO® The LEGO® NINJAGO® Movie Video Game": 2017,
    "LEGO® Worlds": 2017,
    "Lethal Company": 2023,
    "Life is Strange 2": 2018,
    "Life is Strange: Before the Storm": 2017,
    "Life is Strange: Before the Storm Remastered": 2022,
    "Life is Strange Remastered": 2021,
    "Life is Strange™": 2015,
    "Life is Strange: True Colors": 2021,
    "LIGHTNING RETURNS: FINAL FANTASY XIII": 2013,
    "LIMBO": 2010,
    "Little Nightmares": 2017,
    "Little Nightmares II": 2021,
    "LOCKDOWN Protocol": 2023,
    "Longvinter": 2021,
    "Mad Max": 2015,
    "Mage Arena": 2020,
    "Mafia": 2002,
    "Mafia II (Classic)": 2010,
    "Mafia II: Definitive Edition": 2020,
    "Mafia III: Definitive Edition": 2020,
    "Mafia: Definitive Edition": 2020,
    "Marvel Rivals": 2024,
    "Marvel vs. Capcom: Infinite": 2017,
    "Marvel's Avengers - The Definitive Edition": 2020,
    "Marvel's Guardians of the Galaxy": 2021,
    "Marvel's Spider-Man: Miles Morales": 2020,
    "Marvel's Spider-Man Remastered": 2018,
    "Mass Effect™ Legendary Edition": 2021,
    "Master Levels for DOOM II": 1995,
    "Max Payne": 2001,
    "Max Payne 2: The Fall of Max Payne": 2003,
    "Max Payne 3": 2012,
    "Metro 2033": 2010,
    "Metro 2033 Redux": 2014,
    "Metro Exodus": 2019,
    "Metro Exodus Enhanced Edition": 2021,
    "Metro: Last Light Complete Edition": 2013,
    "Metro: Last Light Redux": 2014,
    "MiniRoyale": 2021,
    "Mirror's Edge": 2008,
    "Mirror's Edge™ Catalyst": 2016,
    "Monopoly Plus": 2014,
    "Moonlighter": 2018,
    "Mortal Kombat 11": 2019,
    "Mortal Kombat X": 2015,
    "MultiVersus": 2022,
    "Murderous Pursuits": 2019,
    "My Friend Pedro": 2019,
    "NBA 2K24": 2023,
    "Need for Speed™": 2015,
    "Need for Speed™ Heat": 2019,
    "Need for Speed™ Hot Pursuit Remastered": 2020,
    "Need for Speed™ Most Wanted": 2012,
    "Need for Speed™ Payback": 2017,
    "Need for Speed™ Rivals": 2013,
    "Need for Speed™ Unbound": 2022,
    "Never Alone (Kisima Ingitchuna)": 2014,
    "New Tales from the Borderlands": 2022,
    "No Man's Sky": 2016
};

// Display results
console.log('=== BATCH 10 RELEASE DATES (MANUAL LOOKUP) ===');
Object.keys(batch10ReleaseDates).forEach(gameName => {
    console.log(`✓ ${gameName}: ${batch10ReleaseDates[gameName]}`);
});

console.log(`\nFound release dates for ${Object.keys(batch10ReleaseDates).length}/80 games`);

// Export data
const batch10Data = {
    batchNumber: 10,
    processed: new Date().toISOString(),
    totalGames: Object.keys(batch10ReleaseDates).length,
    foundDates: Object.keys(batch10ReleaseDates).length,
    source: 'manual_lookup',
    games: Object.keys(batch10ReleaseDates).map(gameName => ({
        name: gameName,
        year: batch10ReleaseDates[gameName],
        fullDate: null,
        source: 'manual_lookup',
        exactMatch: true
    }))
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { batch10ReleaseDates, batch10Data };
} else {
    window.batch10ReleaseDates = batch10ReleaseDates;
    window.batch10Data = batch10Data;
}