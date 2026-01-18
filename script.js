// Kill switch for floating background images
const ENABLE_FLOATING_BACKGROUNDS = true;

const gamesList = [
    "Rust",
    "LOCKDOWN Protocol",
    "Counter-Strike 2",
    "Call of Duty®",
    "Crab Game",
    "Call of Duty: Black Ops II - Multiplayer",
    "Stardew Valley",
    "Terraria",
    "Wallpaper Engine",
    "Call of Duty: Black Ops III",
    "The Witcher 3: Wild Hunt",
    "Marvel Rivals",
    "Fall Guys",
    "The Witcher: Enhanced Edition",
    "Call of Duty: Black Ops II - Zombies",
    "Raft",
    "Borderlands 2",
    "Call of Duty: Black Ops",
    "South Park The Fractured But Whole",
    "MultiVersus",
    "Call of Duty: World at War",
    "Call of Duty 4: Modern Warfare (2007)",
    "Call of Duty: Black Ops II",
    "Garry's Mod",
    "Cyberpunk 2077",
    "South Park™: The Stick of Truth™",
    "Among Us",
    "Deceit",
    "Overwatch® 2",
    "LEGO® Star Wars™: The Complete Saga",
    "The Witcher 2: Assassins of Kings Enhanced Edition",
    "Borderlands GOTY",
    "Slime Rancher",
    "Assassin's Creed II",
    "Lethal Company",
    "Don't Starve Together",
    "Portal 2",
    "Call of Duty: Modern Warfare 2 (2009)",
    "Assassin's Creed",
    "Call of Duty®: Modern Warfare® 3 (2011)",
    "Destroy All Humans!",
    "Palworld",
    "The Forest",
    "Marvel's Spider-Man Remastered",
    "Mad Max",
    "Dungeon Defenders II",
    "Castle Crashers",
    "The Walking Dead",
    "Life is Strange 2",
    "Life is Strange™",
    "Cookie Clicker",
    "PUBG: BATTLEGROUNDS",
    "Unturned",
    "Call of Duty®: Modern Warfare® II - Open Beta",
    "Life is Strange: Before the Storm",
    "It Takes Two",
    "Blood and Bacon",
    "Quake Champions",
    "Detroit: Become Human",
    "The Walking Dead: A New Frontier",
    "House Party",
    "The Walking Dead: Season Two",
    "INSIDE",
    "The Quarry",
    "Golf With Your Friends",
    "Far Cry",
    "Portal",
    "HELLDIVERS™ 2",
    "A Way Out",
    "Phasmophobia",
    "Clustertruck",
    "Human Fall Flat",
    "Call of Duty: WWII - Multiplayer",
    "Call of Duty 2",
    "ARK: Survival Evolved",
    "LIMBO",
    "Chained Together",
    "Assassin's Creed Brotherhood",
    "Hello Neighbor",
    "Call of Duty (2003)",
    "Call of Duty: United Offensive",
    "Grand Theft Auto V Legacy",
    "Apex Legends",
    "Portal with RTX",
    "BattleBlock Theater",
    "STAR WARS Jedi: Fallen Order™",
    "Call of Duty: Infinite Warfare",
    "Half-Life",
    "Comedy Night",
    "Call of Duty: Ghosts",
    "PEAK",
    "BioShock",
    "Borderlands GOTY Enhanced",
    "Tom Clancy's Rainbow Six® Siege X",
    "Plants vs. Zombies™ Garden Warfare 2: Deluxe Edition",
    "Escape Memoirs: Mini Stories",
    "LEGO® Batman™: The Videogame",
    "Shower With Your Dad Simulator 2015: Do You Still Shower With Your Dad",
    "Far Cry 2",
    "Youtubers Life",
    "Fallout",
    "Hogwarts Legacy",
    "Content Warning",
    "Spyro™ Reignited Trilogy",
    "Bloons TD 6",
    "In Silence",
    "Red Dead Redemption 2",
    "LEGO® Builder's Journey",
    "Call of Duty: Ghosts - Multiplayer",
    "Splitgate",
    "Fallout 4",
    "Just Cause",
    "PowerWash Simulator",
    "Team Fortress 2",
    "Super Meat Boy",
    "Left 4 Dead 2",
    "Dungeon Defenders",
    "Pacify",
    "NBA 2K24",
    "Wizard101",
    "Never Alone (Kisima Ingitchuna)",
    "What Remains of Edith Finch",
    "MiniRoyale",
    "The Awesome Adventures of Captain Spirit",
    "Fallout: New Vegas",
    "Getting Over It with Bennett Foddy",
    "Bully: Scholarship Edition",
    "Fears to Fathom - Carson House",
    "Fears to Fathom - Home Alone",
    "Fears to Fathom - Ironbark Lookout",
    "Fears to Fathom - Norwood Hitchhike",
    "Fears to Fathom - Woodbury Getaway",
    "Devolverland Expo",
    "Donut County",
    "Until Dawn™",
    "Escape the Backrooms",
    "UNO",
    "Mage Arena",
    "God of War",
    "Halo: The Master Chief Collection",
    "Lara Croft GO",
    "Call of Duty: Advanced Warfare - Multiplayer",
    "Welcome to the Game",
    "Rec Room",
    "Tomb Raider: Underworld",
    "Call of Duty: Modern Warfare 2 (2009) - Multiplayer",
    "Dead by Daylight",
    "LEGOⓇ Indiana Jones™: The Original Adventures",
    "Tomb Raider I",
    "60 Seconds! Reatomized",
    "Hand Simulator: Survival",
    "The Walking Dead: The Final Season",
    "Little Nightmares",
    "Dead Rising",
    "Call of Duty: Black Ops - Multiplayer",
    "Due Process",
    "Tomb Raider",
    "Fallout Shelter",
    "For Honor",
    "Drug Dealer Simulator",
    "SEGA Mega Drive & Genesis Classics",
    "Goat Simulator",
    "RAGE",
    "DOOM",
    "Cuphead",
    "PC Building Simulator",
    "Geometry Dash",
    "Five Nights at Freddy's",
    "Plants vs. Zombies: Game of the Year",
    "Grand Theft Auto: Vice City",
    "Scott Pilgrim vs The World",
    "Call of Duty®: Black Ops Cold War",
    "Tomb Raider II",
    "Counter-Strike",
    "Overcooked",
    "60 Parsecs!",
    "Overcooked! 2",
    "Call of Duty: WWII",
    "Grand Theft Auto III",
    "SpeedRunners",
    "Call of Duty: Advanced Warfare",
    "Call of Duty®: Modern Warfare® 3 (2011) - Multiplayer",
    "Just Cause 3",
    "Fallout 2",
    "Rust - Staging Branch",
    "7 Days to Die",
    "Adventure Time: Pirates of the Enchiridion",
    "Alan Wake",
    "Alan Wake's American Nightmare",
    "Alice: Madness Returns",
    "Alien: Isolation",
    "American Truck Simulator",
    "Amnesia: The Dark Descent",
    "ARK: Survival Of The Fittest",
    "Arma 3",
    "Assassin's Creed Revelations",
    "Assassin's Creed® III",
    "Assassin's Creed III Remastered",
    "Assassin's Creed Liberation",
    "Assassin's Creed IV Black Flag",
    "Assassin's Creed Freedom Cry",
    "Assassin's Creed Unity",
    "Assassin's Creed Syndicate",
    "Assassin's Creed Odyssey",
    "Assassin's Creed Origins",
    "Assassin's Creed Rogue",
    "Assassin's Creed Valhalla",
    "Assassin's Creed® Chronicles: China",
    "Assassin's Creed® Chronicles: India",
    "Assassin's Creed® Chronicles: Russia",
    "Back 4 Blood",
    "Batman - The Telltale Series",
    "Batman: Arkham Asylum GOTY Edition",
    "Batman: Arkham City GOTY",
    "Batman™: Arkham Origins",
    "Batman™: Arkham Knight",
    "Batman: The Enemy Within - The Telltale Series",
    "Batman™: Arkham Origins Blackgate - Deluxe Edition",
    "BattleBit Remastered",
    "Battlefield 3™",
    "Battlefield 4™",
    "Battlefield™ 1",
    "Battlefield™ 2042",
    "Battlefield™ Hardline",
    "Battlefield™ V",
    "BioShock Remastered",
    "BioShock 2",
    "BioShock 2 Remastered",
    "BioShock Infinite",
    "Black Desert",
    "Borderlands 3",
    "Borderlands: The Pre-Sequel",
    "Brotato",
    "Burnout™ Paradise Remastered",
    "Call of Duty: Modern Warfare Remastered - Multiplayer",
    "Call of Duty: Modern Warfare Remastered (2017)",
    "Call of Duty®: Modern Warfare®",
    "Call of Duty®: Modern Warfare® II",
    "Call of Duty®: Modern Warfare® III",
    "Call of Duty®: Vanguard",
    "Capcom Fighting Collection",
    "Celeste",
    "Contra Anniversary Collection",
    "Control Ultimate Edition",
    "Counter-Strike: Condition Zero",
    "Counter-Strike: Condition Zero Deleted Scenes",
    "Counter-Strike: Source",
    "Crash Bandicoot™ N. Sane Trilogy",
    "Crusader Kings II",
    "Cult of the Lamb",
    "Darkest Dungeon®",
    "Days Gone",
    "DayZ",
    "Dead Cells",
    "Dead Island Definitive Edition",
    "Dead Island Retro Revenge",
    "Dead Island Riptide Definitive Edition",
    "Dead Rising 2",
    "Dead Rising 2: Off the Record",
    "Dead Rising 3",
    "Dead Rising 4",
    "Dead Space (2008)",
    "Dead Space 2",
    "Dead Space™ 3",
    "Deep Rock Galactic",
    "Deus Ex: Game of the Year Edition",
    "Deus Ex: Invisible War",
    "Deus Ex: Human Revolution - Director's Cut",
    "Deus Ex: The Fall",
    "Deus Ex: Mankind Divided™",
    "Dishonored",
    "Dishonored 2",
    "Don't Starve",
    "DOOM + DOOM II",
    "DOOM II",
    "DOOM 3",
    "DOOM 3: BFG Edition",
    "DOOM 3: Resurrection of Evil",
    "DOOM 64",
    "DOOM Eternal",
    "Dying Light",
    "Dying Light 2: Reloaded Edition",
    "Enter the Gungeon",
    "Escape Dead Island",
    "Euro Truck Simulator 2",
    "Exit the Gungeon",
    "Fable Anniversary",
    "Fallout 3 - Game of the Year Edition",
    "Fallout 76",
    "Fallout Tactics",
    "Far Cry 4",
    "Far Cry 5",
    "Far Cry 6",
    "Far Cry New Dawn",
    "Far Cry Primal",
    "Far Cry® 3",
    "Far Cry® 3 Blood Dragon",
    "Final DOOM",
    "FINAL FANTASY",
    "FINAL FANTASY II",
    "FINAL FANTASY III",
    "FINAL FANTASY IV",
    "FINAL FANTASY TYPE-0 HD",
    "FINAL FANTASY V",
    "FINAL FANTASY VI",
    "FINAL FANTASY VII",
    "FINAL FANTASY IX",
    "FINAL FANTASY XII THE ZODIAC AGE",
    "FINAL FANTASY XIII",
    "FINAL FANTASY XIII-2",
    "FINAL FANTASY XV WINDOWS EDITION",
    "Firewatch",
    "Five Nights at Freddy's 2",
    "Five Nights at Freddy's 3",
    "Friday the 13th: The Game",
    "Gang Beasts",
    "Garfield Kart",
    "Garfield Kart - Furious Racing",
    "Genital Jousting",
    "Golf It!",
    "Goose Goose Duck",
    "Grand Theft Auto III - The Definitive Edition",
    "Grand Theft Auto IV: The Complete Edition",
    "Grand Theft Auto V Enhanced",
    "Grand Theft Auto: San Andreas",
    "Grand Theft Auto: San Andreas - The Definitive Edition",
    "Grand Theft Auto: Vice City - The Definitive Edition",
    "Graveyard Keeper",
    "GRIS",
    "Grounded",
    "Grow Home",
    "Grow Up",
    "GTFO",
    "Hades",
    "Half-Life 2",
    "Half-Life 2: Deathmatch",
    "Half-Life Deathmatch: Source",
    "Half-Life: Blue Shift",
    "Half-Life: Opposing Force",
    "Half-Life: Source",
    "Halo Infinite",
    "Halo Wars: Definitive Edition",
    "Halo: Spartan Assault",
    "Halo: Spartan Strike",
    "Hand Simulator",
    "Heavy Rain",
    "Hellblade: Senua's Sacrifice",
    "Hellblade: Senua's Sacrifice VR Edition",
    "HELLDIVERS™",
    "Hitman: Codename 47",
    "Hitman 2: Silent Assassin",
    "Hitman: Contracts",
    "Hitman: Blood Money",
    "Hitman: Absolution",
    "Hitman GO: Definitive Edition",
    "HITMAN World of Assassination",
    "Hitman: Sniper Challenge",
    "HITMAN™",
    "HITMAN™ 2",
    "Hollow Knight",
    "Hollow Knight: Silksong",
    "Horizon Zero Dawn™ Complete Edition",
    "Hotline Miami",
    "Hotline Miami 2: Wrong Number",
    "House Flipper",
    "I Am Bread",
    "Injustice: Gods Among Us Ultimate Edition",
    "Injustice™ 2",
    "Just Cause 2",
    "Just Cause 4",
    "Keep Talking and Nobody Explodes",
    "Killing Floor",
    "Killing Floor 2",
    "Kingdom Come: Deliverance",
    "Lara Croft and the Guardian of Light",
    "Lara Croft and the Temple of Osiris",
    "Left 4 Dead",
    "LEGO® Batman™ 2: DC Super Heroes",
    "LEGO® Batman™ 3: Beyond Gotham",
    "LEGO® City Undercover",
    "LEGO® DC Super-Villains",
    "LEGO® Harry Potter: Years 1-4",
    "LEGO® Harry Potter: Years 5-7",
    "LEGO® Harry Potter™ Collection",
    "LEGO® Indiana Jones™ 2: The Adventure Continues",
    "LEGO® Jurassic World",
    "LEGO® MARVEL Super Heroes",
    "LEGO® MARVEL Super Heroes 2",
    "LEGO® MARVEL's Avengers",
    "LEGO® Pirates of the Caribbean The Video Game",
    "LEGO® Star Wars™ III: The Clone Wars™",
    "LEGO® STAR WARS™: The Force Awakens",
    "LEGO® Star Wars™: The Skywalker Saga",
    "LEGO® The Hobbit™",
    "LEGO® The Incredibles",
    "LEGO® The Lord of the Rings™",
    "LEGO® Worlds",
    "Life is Strange Remastered",
    "Life is Strange: Before the Storm Remastered",
    "Life is Strange: True Colors",
    "LIGHTNING RETURNS: FINAL FANTASY XIII",
    "Little Nightmares II",
    "Longvinter",
    "Mafia",
    "Mafia II (Classic)",
    "Mafia II: Definitive Edition",
    "Mafia III: Definitive Edition",
    "Mafia: Definitive Edition",
    "Marvel vs. Capcom: Infinite",
    "Marvel's Avengers - The Definitive Edition",
    "Marvel's Guardians of the Galaxy",
    "Marvel's Spider-Man: Miles Morales",
    "Mass Effect™ Legendary Edition",
    "Master Levels for DOOM II",
    "Max Payne",
    "Max Payne 2: The Fall of Max Payne",
    "Max Payne 3",
    "Metro 2033",
    "Metro 2033 Redux",
    "Metro Exodus",
    "Metro Exodus Enhanced Edition",
    "Metro: Last Light Complete Edition",
    "Metro: Last Light Redux",
    "Mirror's Edge",
    "Mirror's Edge™ Catalyst",
    "Monopoly Plus",
    "Moonlighter",
    "Mortal Kombat 11",
    "Mortal Kombat X",
    "My Friend Pedro",
    "Need for Speed™",
    "Need for Speed™ Heat",
    "Need for Speed™ Hot Pursuit Remastered",
    "Need for Speed™ Most Wanted",
    "Need for Speed™ Payback",
    "Need for Speed™ Rivals",
    "Need for Speed™ Unbound",
    "New Tales from the Borderlands",
    "No Man's Sky",
    "Ori and the Blind Forest",
    "Ori and the Blind Forest: Definitive Edition",
    "Ori and the Will of the Wisps",
    "Outlast",
    "Outlast 2",
    "PAYDAY 2",
    "PICO PARK",
    "Planet Coaster",
    "Plants vs. Zombies: Battle for Neighborville",
    "Portal 2 - The Final Hours",
    "Prince of Persia",
    "Prince of Persia: The Sands of Time",
    "Prince of Persia: Warrior Within",
    "Prince of Persia: The Two Thrones",
    "Prince of Persia: The Forgotten Sands",
    "Prototype",
    "PROTOTYPE 2",
    "Punch Club",
    "RAGE 2",
    "Rayman Legends",
    "Rayman Origins",
    "Rayman: Raving Rabbids",
    "Red Dead Redemption",
    "Resident Evil",
    "Resident Evil 0",
    "Resident Evil 2",
    "Resident Evil 3",
    "Resident Evil 4 (2005)",
    "Resident Evil 5",
    "Resident Evil 6",
    "Resident Evil 7 Biohazard",
    "Resident Evil Re:Verse",
    "RESIDENT EVIL RESISTANCE",
    "Resident Evil Revelations",
    "Resident Evil Revelations 2",
    "Resident Evil Village",
    "Return to Castle Wolfenstein",
    "Rise of the Tomb Raider",
    "Risk of Rain (2013)",
    "Saints Row 2",
    "Saints Row: The Third",
    "Saints Row IV",
    "Saints Row The Third Remastered",
    "Saints Row: Gat out of Hell",
    "Scooby-Doo! & Looney Tunes Cartoon Universe: Adventure",
    "Scribblenauts Unlimited",
    "Scribblenauts Unmasked",
    "Sea of Thieves",
    "Shadow of the Tomb Raider",
    "Sid Meier's Civilization VI",
    "Slay the Spire",
    "Slime Rancher 2",
    "Sniper Elite",
    "Sniper Elite V2",
    "Sniper Elite 3",
    "Sniper Elite 4",
    "Sniper Elite 5",
    "Sniper Elite V2 Remastered",
    "Sonic & All-Stars Racing Transformed Collection",
    "Sonic Adventure DX",
    "Sonic Adventure™ 2",
    "Sonic and SEGA All Stars Racing",
    "Sonic CD",
    "Sonic Forces",
    "Sonic Generations",
    "Sonic Lost World",
    "Sonic Mania",
    "SONIC THE HEDGEHOG 4 Episode I",
    "SONIC THE HEDGEHOG 4 Episode II",
    "Split Fiction",
    "SpongeBob SquarePants: Battle for Bikini Bottom - Rehydrated",
    "Spore",
    "STAR WARS Jedi: Survivor™",
    "STAR WARS™ Battlefront™",
    "STAR WARS™ Battlefront™ II",
    "STAR WARS™: Squadrons",
    "Starbound",
    "Stick Fight: The Game",
    "Street Fighter 30th Anniversary Collection",
    "Street Fighter V",
    "Subnautica",
    "Subnautica: Below Zero",
    "Suicide Squad: Kill the Justice League",
    "Sunset Overdrive",
    "Surgeon Simulator",
    "Tales from the Borderlands",
    "Team Fortress Classic",
    "Team Sonic Racing™",
    "The Binding of Isaac: Rebirth",
    "The Crew 2",
    "The Elder Scrolls III: Morrowind",
    "The Elder Scrolls IV: Oblivion Game of the Year Edition (2009)",
    "The Elder Scrolls V: Skyrim Special Edition",
    "The Evil Within",
    "The Evil Within 2",
    "THE GAME OF LIFE",
    "The Lab",
    "The Last of Us™ Part I",
    "The LEGO® Movie - Videogame",
    "The LEGO® Movie 2 - Videogame",
    "The LEGO® NINJAGO® Movie Video Game",
    "The Outer Worlds: Spacer's Choice Edition",
    "The Sims™ 4",
    "The Walking Dead: Michonne",
    "The Walking Dead: The Telltale Definitive Series",
    "The Wolf Among Us",
    "theHunter: Call of the Wild™",
    "Thief",
    "Thief Gold",
    "Thief: Deadly Shadows",
    "Thief™ II: The Metal Age",
    "Tiny Tina's Wonderlands",
    "Titanfall® 2",
    "Tom Clancy's EndWar",
    "Tom Clancy's Ghost Recon",
    "Tom Clancy's Ghost Recon: Desert Siege",
    "Tom Clancy's Ghost Recon: Island Thunder",
    "Tom Clancy's Ghost Recon Future Soldier",
    "Tom Clancy's Ghost Recon® Wildlands",
    "Tom Clancy's Rainbow Six 3: Gold Edition",
    "Tom Clancy's Rainbow Six 3: Athena Sword",
    "Tom Clancy's Rainbow Six: Lockdown",
    "Tom Clancy's Rainbow Six: Vegas",
    "Tom Clancy's Rainbow Six: Vegas 2",
    "Tom Clancy's Splinter Cell",
    "Tom Clancy's Splinter Cell: Chaos Theory",
    "Tom Clancy's Splinter Cell: Double Agent",
    "Tom Clancy's Splinter Cell: Conviction",
    "Tom Clancy's Splinter Cell Blacklist",
    "Tom Clancy's The Division",
    "Tomb Raider III: Adventures of Lara Croft",
    "Tomb Raider: The Last Revelation (1999)",
    "Tomb Raider: Chronicles (2000)",
    "Tomb Raider (VI): The Angel of Darkness (2003)",
    "Tomb Raider I-III Remastered Starring Lara Croft",
    "Tomb Raider: Anniversary",
    "Tomb Raider: Legend",
    "Town of Salem",
    "Trials Evolution Gold Edition",
    "Trials Fusion",
    "Trials Rising",
    "Ultimate Chicken Horse",
    "Ultimate Marvel vs. Capcom 3",
    "Ultra Street Fighter IV",
    "Umbrella Corps",
    "UNCHARTED™: Legacy of Thieves Collection",
    "Undertale",
    "Unravel",
    "Unravel Two",
    "Watch Dogs: Legion",
    "Watch_Dogs",
    "Watch_Dogs 2",
    "Witch It",
    "Wizard of Legend",
    "Wolfenstein 3D",
    "Wolfenstein 3D: Spear of Destiny",
    "Wolfenstein II: The New Colossus",
    "Wolfenstein: Enemy Territory",
    "Wolfenstein: The New Order",
    "Wolfenstein: The Old Blood",
    "Wolfenstein: Youngblood",
    "Worms",
    "Worms Armageddon",
    "Worms Blast",
    "Worms Clan Wars",
    "Worms Crazy Golf",
    "Worms Pinball",
    "Worms Reloaded",
    "Worms Revolution",
    "Worms Rumble",
    "Worms Ultimate Mayhem",
    "Worms W.M.D",
    "Worms World Party Remastered",
    "XCOM 2",
    "Tomb Raider IV-VI Remastered",
    "Frostpunk",
    "Company of Heroes 2",
    "Dead Space",
    "DEATHLOOP",
    "Destroy All Humans! 2 - Reprobed",
    "High on Life",
    "Prey",
    "Pummel Party",
    "R.E.P.O",
    "Saints Row",
    "Sleeping Dogs: Definitive Edition",
    "SOMA",
    "SpongeBob SquarePants: The Cosmic Shake",
    "SOUTH PARK: SNOW DAY!",
    "The Elder Scrolls® Online",
    "Yooka-Laylee",
    "Yooka-Laylee and the Impossible Lair",
    "Flight Simulator X Steam Edition",
    "Death Stranding Directors Cut",
    "Escape Simulator",
    "Five Nights at Freddy's: Sister Location",
    "Five Nights at Freddy's 4"
];

function getTimeCategory(hours) {
    if (!hours) return 'unknown';
    if (hours <= 5) return 'short';
    if (hours <= 20) return 'medium';
    return 'long';
}

// Ensure gameDatabase exists (it should be loaded from manualGameData.js)
if (typeof gameDatabase === 'undefined') {
    console.error('gameDatabase not found! Creating fallback database...');

    // Create fallback gameDatabase
    window.gameDatabase = {};
    gamesList.forEach(gameName => {
        gameDatabase[gameName] = {
            title: gameName,
            timeToBeat: manualGameTimes ? manualGameTimes[gameName] || null : null,
            category: getTimeCategory(manualGameTimes ? manualGameTimes[gameName] : null)
        };
    });
}

// Simple mapping of game names to Steam App IDs for popular games
const steamAppIds = {
    "Counter-Strike 2": 730,
    "Rust": 252490,
    "Terraria": 105600,
    "Stardew Valley": 413150,
    "The Witcher 3: Wild Hunt": 292030,
    "Cyberpunk 2077": 1091500,
    "Portal 2": 620,
    "Portal": 400,
    "Half-Life": 70,
    "Half-Life 2": 220,
    "Garry's Mod": 4000,
    "Fall Guys": 1097150,
    "Among Us": 945360,
    "Call of Duty: Black Ops III": 311210,
    "Borderlands 2": 49520,
    "Grand Theft Auto V": 271590,
    "Grand Theft Auto V Legacy": 271590,
    "Grand Theft Auto V Enhanced": 271590,
    "Palworld": 1623730,
    "Marvel Rivals": 2767030,
    "The Witcher": 20900,
    "The Witcher: Enhanced Edition": 20900,
    "The Witcher 2: Assassins of Kings Enhanced Edition": 20920,
    "Borderlands GOTY": 8980,
    "Borderlands GOTY Enhanced": 8980,
    "Assassin's Creed II": 33230,
    "Assassin's Creed": 15100,
    "Assassin's Creed Brotherhood": 48190,
    "Assassin's Creed Revelations": 201870,
    "Assassin's Creed III": 208480,
    "Assassin's Creed IV Black Flag": 242050,
    "Assassin's Creed Unity": 289650,
    "Assassin's Creed Syndicate": 368500,
    "Assassin's Creed Origins": 582160,
    "Assassin's Creed Odyssey": 812140,
    "Assassin's Creed Valhalla": 2208920,
    "INSIDE": 304430,
    "LIMBO": 48000,
    "Left 4 Dead 2": 550,
    "Left 4 Dead": 500,
    "Team Fortress 2": 440,
    "Counter-Strike": 10,
    "Counter-Strike: Source": 240,
    "Counter-Strike: Condition Zero": 80,
    "Half-Life: Source": 280,
    "Half-Life: Blue Shift": 130,
    "Half-Life: Opposing Force": 50,
    "Fallout 4": 377160,
    "Fallout: New Vegas": 22380,
    "Fallout 3 - Game of the Year Edition": 22370,
    "Fallout": 38400,
    "Fallout 2": 38410,
    "Fallout 76": 1151340,
    "The Elder Scrolls V: Skyrim Special Edition": 489830,
    "The Elder Scrolls IV: Oblivion Game of the Year Edition (2009)": 22330,
    "The Elder Scrolls III: Morrowind": 22320,
    "DOOM": 379720,
    "DOOM Eternal": 782330,
    "DOOM II": 2300,
    "DOOM 3": 9050,
    "BioShock": 7670,
    "BioShock 2": 8850,
    "BioShock Infinite": 8870,
    "BioShock Remastered": 409710,
    "Dead by Daylight": 381210,
    "Phasmophobia": 739630,
    "Lethal Company": 1966720,
    "HELLDIVERS 2": 553850,
    "HELLDIVERS": 394510,
    "Red Dead Redemption 2": 1174180,
    "Marvel's Spider-Man Remastered": 1817070,
    "Marvel's Spider-Man: Miles Morales": 1817190,
    "God of War": 1593500,
    "Horizon Zero Dawn Complete Edition": 1151640,
    "The Forest": 242760,
    "Raft": 648800,
    "Don't Starve Together": 322330,
    "Don't Starve": 219740,
    "Subnautica": 264710,
    "Subnautica: Below Zero": 848450,
    "7 Days to Die": 251570,
    "ARK: Survival Evolved": 346110,
    "No Man's Sky": 275850,
    "Grounded": 962130,
    "Slime Rancher": 433340,
    "Slime Rancher 2": 1657630,
    "It Takes Two": 1426210,
    "A Way Out": 1222700,
    "Portal": 400,
    "Overcooked": 448510,
    "Overcooked! 2": 728880,
    "Castle Crashers": 204360,
    "BattleBlock Theater": 238460,
    "Human Fall Flat": 477160,
    "Gang Beasts": 285900,
    "Golf With Your Friends": 431240,
    "Golf It!": 571740,
    "Ultimate Chicken Horse": 386940,
    "Stick Fight: The Game": 674940,
    "PUBG: BATTLEGROUNDS": 578080,
    "Apex Legends": 1172470,
    "Fortnite": 1172470,
    "Overwatch 2": 2357570,
    "Dead Rising": 427190,
    "Dead Rising 2": 45740,
    "Dead Rising 3": 265550,
    "Dead Rising 4": 543460,
    "Resident Evil 2": 883710,
    "Resident Evil 3": 952060,
    "Resident Evil 4 (2005)": 254700,
    "Resident Evil 7 Biohazard": 418370,
    "Resident Evil Village": 1196590,
    "Outlast": 238320,
    "Outlast 2": 414700,
    "Five Nights at Freddy's": 319510,
    "Five Nights at Freddy's 2": 332800,
    "Five Nights at Freddy's 3": 354140,
    "Amnesia: The Dark Descent": 57300,
    "Alien: Isolation": 214490,
    "Dead Space (2008)": 1693980,
    "Dead Space 2": 47780,
    "Dead Space 3": 1238060,
    "Until Dawn": 2172010,
    "The Quarry": 1577120,
    "Detroit: Become Human": 1222140,
    "Heavy Rain": 960910,
    "Beyond: Two Souls": 960990,
    "Life is Strange": 319630,
    "Life is Strange 2": 532210,
    "Life is Strange: Before the Storm": 554620,
    "Life is Strange: True Colors": 936790,
    "The Walking Dead": 207610,
    "The Walking Dead: Season Two": 261030,
    "The Walking Dead: A New Frontier": 536220,
    "The Walking Dead: The Final Season": 866800,
    "The Wolf Among Us": 250320,
    "Batman - The Telltale Series": 498240,
    "Batman: The Enemy Within": 757490,
    "Tales from the Borderlands": 330830,
    "Borderlands 3": 397540,
    "Borderlands: The Pre-Sequel": 261640,
    "Tiny Tina's Wonderlands": 1286680,
    "Just Cause": 6880,
    "Just Cause 2": 8190,
    "Just Cause 3": 225540,
    "Just Cause 4": 517630,
    "Mad Max": 234140,
    "Watch_Dogs": 243470,
    "Watch_Dogs 2": 447040,
    "Watch Dogs: Legion": 2239550,
    "Grand Theft Auto III": 12100,
    "Grand Theft Auto: Vice City": 12110,
    "Grand Theft Auto: San Andreas": 12120,
    "Grand Theft Auto IV: The Complete Edition": 12210,
    "Mafia": 40990,
    "Mafia II (Classic)": 50130,
    "Mafia II: Definitive Edition": 1030830,
    "Mafia III: Definitive Edition": 360430,
    "Mafia: Definitive Edition": 1030840,
    "Saints Row 2": 9480,
    "Saints Row: The Third": 55230,
    "Saints Row IV": 206420,
    "Saints Row: Gat out of Hell": 301910,
    "Hogwarts Legacy": 990080,
    "Mass Effect Legendary Edition": 1328670,
    "STAR WARS Jedi: Fallen Order": 1172380,
    "STAR WARS Jedi: Survivor": 1774580,
    "STAR WARS Battlefront": 1237980,
    "STAR WARS Battlefront II": 1237950,
    "Titanfall 2": 1237970,
    "Apex Legends": 1172470,
    "Need for Speed Heat": 1222680,
    "Need for Speed Unbound": 1846380,
    "Burnout Paradise Remastered": 1238080,
    "Battlefield 1": 1238810,
    "Battlefield V": 1238820,
    "Battlefield 2042": 1517290,
    "Mirror's Edge": 17410,
    "Mirror's Edge Catalyst": 1233570,
    "Control Ultimate Edition": 870780,
    "Alan Wake": 108710,
    "Alan Wake 2": 1329500,
    "Remedy Collection": 1329500,
    "Max Payne": 12140,
    "Max Payne 2: The Fall of Max Payne": 12150,
    "Max Payne 3": 204100,
    "Metro 2033": 43160,
    "Metro: Last Light": 43160,
    "Metro Exodus": 412020,
    "Metro 2033 Redux": 286690,
    "Metro: Last Light Redux": 287390,
    "S.T.A.L.K.E.R.: Shadow of Chernobyl": 4500,
    "S.T.A.L.K.E.R.: Clear Sky": 20510,
    "S.T.A.L.K.E.R.: Call of Pripyat": 41700,
    "Dishonored": 205100,
    "Dishonored 2": 403640,
    "Prey": 480490,
    "Deathloop": 1252330,
    "The Evil Within": 268050,
    "The Evil Within 2": 601430,
    "Wolfenstein: The New Order": 201810,
    "Wolfenstein: The Old Blood": 350080,
    "Wolfenstein II: The New Colossus": 612880,
    "Wolfenstein: Youngblood": 1056960,
    "RAGE": 9200,
    "RAGE 2": 548570,
    "Quake": 2310,
    "Quake II": 2320,
    "Quake III Arena": 2200,
    "Quake Champions": 611500,
    "Return to Castle Wolfenstein": 9010,
    "Celeste": 504230,
    "Hollow Knight": 367520,
    "Ori and the Blind Forest": 261570,
    "Ori and the Will of the Wisps": 1057090,
    "Cuphead": 268910,
    "Super Meat Boy": 40800,
    "The Binding of Isaac: Rebirth": 250900,
    "Enter the Gungeon": 311690,
    "Hades": 1145360,
    "Dead Cells": 588650,
    "Slay the Spire": 646570,
    "Darkest Dungeon": 262060,
    "FTL: Faster Than Light": 212680,
    "Into the Breach": 590380,
    "Risk of Rain 2": 632360,
    "Spelunky 2": 418530,
    "Katana ZERO": 460950,
    "Hotline Miami": 219150,
    "Hotline Miami 2: Wrong Number": 274170,
    "Payday 2": 218620,
    "Payday: The Heist": 24240,
    "Grand Theft Auto Online": 271590,
    "Rocket League": 252950,
    "Fall Guys": 1097150,
    "Among Us": 945360,
    "Phasmophobia": 739630,
    "Valheim": 892970,
    "Green Hell": 815370,
    "The Long Dark": 305620,
    "Raft": 648800,
    "Subnautica": 264710,
    "Astroneer": 361420,
    "Kerbal Space Program": 220200,
    "Cities: Skylines": 255710,
    "Planet Coaster": 493340,
    "Two Point Hospital": 535930,
    "Planet Zoo": 703080,
    "Anno 1800": 916440,
    "Sid Meier's Civilization VI": 289070,
    "Total War: Warhammer III": 1142710,
    "Europa Universalis IV": 236850,
    "Crusader Kings III": 1158310,
    "Hearts of Iron IV": 394360,
    "Stellaris": 281990,
    "Age of Empires II: Definitive Edition": 813780,
    "Age of Empires IV": 1466860,
    "Company of Heroes 3": 1677280,
    "XCOM 2": 268500,
    "XCOM: Enemy Unknown": 200510,
    "Divinity: Original Sin 2": 435150,
    "Baldur's Gate 3": 1086940,
    "Disco Elysium": 632470,
    "The Outer Worlds": 578650,
    "Pillars of Eternity": 291650,
    "Pillars of Eternity II: Deadfire": 560130,
    "Tyranny": 362960,
    "Wasteland 3": 719040,
    "Torment: Tides of Numenera": 272270,
    "Sonic CD": 200940,
    "60 Parsecs!": 646270,
    "Wizard101": 799960,
    "Deep Rock Galactic": 548430,
    "Killing Floor 2": 232090,
    "Killing Floor": 1250,
    "DayZ": 221100,
    "60 Seconds! Reatomized": 368360,
    "PowerWash Simulator": 1290000,
    "PC Building Simulator": 621060,
    "Geometry Dash": 322170,
    "Cookie Clicker": 1454400,
    "Getting Over It with Bennett Foddy": 240720,
    "I Am Bread": 327890,
    "Goat Simulator": 265930,
    "Bully: Scholarship Edition": 12200,
    "Pac-Man 256": 455400,
    "Clustertruck": 397950,
    "Chained Together": 2567870,
    "Blood and Bacon": 434570,
    "Crab Game": 1782210,
    "Content Warning": 2881650,
    "Escape the Backrooms": 1943950,
    "UNO": 470220,
    "Hand Simulator": 657200,
    "Hand Simulator: Survival": 924140,
    "Drug Dealer Simulator": 682990,
    "House Party": 611790,
    "Comedy Night": 665360,
    "Genital Jousting": 469820,
    "Shower With Your Dad Simulator 2015: Do You Still Shower With Your Dad": 359050,
    "Youtubers Life": 428690,
    "Welcome to the Game": 485380,
    "Fears to Fathom - Carson House": 2120900,
    "Fears to Fathom - Home Alone": 1671340,
    "Fears to Fathom - Ironbark Lookout": 2506160,
    "Fears to Fathom - Norwood Hitchhike": 1763050,
    "Fears to Fathom - Woodbury Getaway": 2961530,
    "Donut County": 702670,
    "Devolverland Expo": 1283220,
    "MiniRoyale": 1657090,
    "The Awesome Adventures of Captain Spirit": 845070,
    "Never Alone (Kisima Ingitchuna)": 295790,
    "What Remains of Edith Finch": 501300,
    "Brotato": 1942280,
    "Longvinter": 1635450,
    "Moonlighter": 606150,
    "Graveyard Keeper": 599140,
    "GRIS": 683320,
    "Firewatch": 383870,
    "Journey": 638230,
    "ABZU": 384190,
    "The Stanley Parable": 221910,
    "The Stanley Parable: Ultra Deluxe": 1703340,
    "Papers, Please": 239030,
    "This War of Mine": 282070,
    "Frostpunk": 323190,
    "Oxenfree": 388880,
    "Night in the Woods": 481510,
    "A Short Hike": 1055540,
    "Untitled Goose Game": 837470,
    "Fall Guys": 1097150,
    "Rocket League": 252950,
    "Splitgate": 677620,
    "Knockout City": 1128920,
    "Spellbreak": 1399780,
    "Rogue Legacy": 241600,
    "Rogue Legacy 2": 1253920,
    "The Messenger": 764790,
    "Katana ZERO": 460950,
    "Hyper Light Drifter": 257850,
    "Transistor": 237930,
    "Bastion": 107100,
    "Pyre": 462770,
    "Supergiant Games Bundle": 237930,
    "LOCKDOWN Protocol": 2780980,
    "Call of Duty®": 2519060,
    "Wallpaper Engine": 431960,
    "Call of Duty: Black Ops II - Multiplayer": 202990,
    "Call of Duty: Black Ops II - Zombies": 212910,
    "Call of Duty: Black Ops": 42700,
    "South Park The Fractured But Whole": 488790,
    "MultiVersus": 1818750,
    "Call of Duty: World at War": 10090,
    "Call of Duty 4: Modern Warfare (2007)": 7940,
    "Call of Duty: Black Ops II": 202970,
    "South Park: The Stick of Truth": 213670,
    "Deceit": 466240,
    "Overwatch 2": 2357570,
    "LEGO Star Wars: The Complete Saga": 32440,
    "Destroy All Humans!": 803330,
    "Dungeon Defenders II": 236110,
    "Call of Duty: Modern Warfare 2 (2009)": 10180,
    "Call of Duty: Modern Warfare 3 (2011)": 115300,
    "Call of Duty: Modern Warfare II - Open Beta": 1962660,
    "Hello Neighbor": 521890,
    "Call of Duty (2003)": 2620,
    "Call of Duty: United Offensive": 2640,
    "Portal with RTX": 2012840,
    "Call of Duty: Infinite Warfare": 292730,
    "Call of Duty: Ghosts": 209160,
    "PEAK": "peak.jpg",
    "Tom Clancy's Rainbow Six Siege": 359550,
    "Tom Clancy's Rainbow Six® Siege X": 359550,
    "Plants vs. Zombies™ Garden Warfare 2: Deluxe Edition": 1922560,
    "Escape Memoirs: Mini Stories": 2098350,
    "LEGO Batman: The Videogame": 21000,
    "Far Cry 2": 19900,
    "Spyro Reignited Trilogy": 996580,
    "Bloons TD 6": 960090,
    "In Silence": 1361000,
    "LEGO Builder's Journey": 1544360,
    "Call of Duty: Ghosts - Multiplayer": 209170,
    "Dungeon Defenders": 65800,
    "Pacify": 967050,
    "NBA 2K24": 2338770,
    "Mage Arena": "mageArena.jpg",
    "Halo: The Master Chief Collection": 976730,
    "Lara Croft GO": 540840,
    "Call of Duty: Advanced Warfare - Multiplayer": 209650,
    "Rec Room": 471710,
    "Tomb Raider: Underworld": 8140,
    "Call of Duty: Modern Warfare 2 (2009) - Multiplayer": 10190,
    "LEGOⓇ Indiana Jones™: The Original Adventures": 32330,
    "Tomb Raider I": 224960,
    "Little Nightmares": 424840,
    "Call of Duty: Black Ops - Multiplayer": 42710,
    "Due Process": 753650,
    "Tomb Raider": 203160,
    "Fallout Shelter": 588430,
    "For Honor": 304390,
    "SEGA Mega Drive & Genesis Classics": 34270,
    "Plants vs. Zombies: Game of the Year": 3590,
    "Scott Pilgrim vs The World": 2215260,
    "Call of Duty: Black Ops Cold War": 1985810,
    "Tomb Raider II": 225300,
    "SpeedRunners": 207140,
    "Call of Duty: Advanced Warfare": 209650,
    "Rust - Staging Branch": 252490,
    "Adventure Time: Pirates of the Enchiridion": 819500,
    "Alan Wake's American Nightmare": 202750,
    "Alice: Madness Returns": 19680,
    "American Truck Simulator": 270880,
    "ARK: Survival Of The Fittest": 407530,
    "Arma 3": 107410,
    "Assassin's Creed III": 208480,
    "Assassin's Creed III Remastered": 911400,
    "Assassin's Creed Liberation": 260210,
    "Assassin's Creed Freedom Cry": 277590,
    "Assassin's Creed Rogue": 311560,
    "Assassin's Creed Chronicles: China": 354380,
    "Assassin's Creed Chronicles: India": 359610,
    "Assassin's Creed Chronicles: Russia": 359600,
    "Back 4 Blood": 924970,
    "Batman - The Telltale Series": 498240,
    "Batman: Arkham Asylum GOTY Edition": 35140,
    "Batman: Arkham City GOTY": 200260,
    "Batman: Arkham Origins": 209000,
    "Batman: Arkham Knight": 208650,
    "Batman: The Enemy Within - The Telltale Series": 675260,
    "Batman: Arkham Origins Blackgate - Deluxe Edition": 267490,
    "BattleBit Remastered": 671860,
    "Battlefield 3": 1238820,
    "Battlefield 4": 1238860,
    "Battlefield 1": 1238840,
    "Battlefield 2042": 1517290,
    "Battlefield Hardline": 1238880,
    "Battlefield V": 1238810,
    "BioShock 2": 8850,
    "BioShock 2 Remastered": 409720,
    "Black Desert": 582660,
    "Burnout Paradise Remastered": 1238080,
    "Call of Duty 2": 2630,
    "Call of Duty: Modern Warfare Remastered - Multiplayer": 393080,
    "Call of Duty: Modern Warfare Remastered (2017)": 393080,
    "Call of Duty: Modern Warfare": 2000950,
    "Call of Duty: Modern Warfare II": 1938090,
    "Call of Duty: Modern Warfare III": 2519060,
    "Call of Duty: Vanguard": 1985820,
    "Capcom Fighting Collection": 1685750,
    "Contra Anniversary Collection": 1018020,
    "Counter-Strike: Condition Zero Deleted Scenes": 100,
    "Crash Bandicoot N. Sane Trilogy": 731490,
    "Crusader Kings II": 203770,
    "Cult of the Lamb": 1313140,
    "Darkest Dungeon": 262060,
    "Days Gone": 1259420,
    "Dead Island Definitive Edition": 383150,
    "Dead Island Retro Revenge": 337360,
    "Dead Island Riptide Definitive Edition": 383180,
    "Dead Rising 2: Off the Record": 45770,
    "Dead Space 3": 1238060,
    "Deus Ex: Game of the Year Edition": 6910,
    "Deus Ex: Invisible War": 6920,
    "Deus Ex: Human Revolution - Director's Cut": 238010,
    "Deus Ex: The Fall": 258180,
    "Deus Ex: Mankind Divided": 337000,
    "DOOM + DOOM II": 2280,
    "DOOM 3: BFG Edition": 208200,
    "DOOM 3: Resurrection of Evil": 9070,
    "DOOM 64": 1148590,
    "Dying Light": 239140,
    "Dying Light 2: Reloaded Edition": 534380,
    "Escape Dead Island": 226560,
    "Euro Truck Simulator 2": 227300,
    "Exit the Gungeon": 1209490,
    "Fable Anniversary": 288470,
    "Fallout 76": 1151340,
    "Fallout Tactics": 38420,
    "Far Cry": 13520,
    "Far Cry 4": 298110,
    "Far Cry 5": 552520,
    "Far Cry 6": 2369390,
    "Far Cry New Dawn": 939960,
    "Far Cry Primal": 371660,
    "Far Cry 3": 220240,
    "Far Cry 3 Blood Dragon": 233270,
    "Final DOOM": 2290,
    "FINAL FANTASY": 1173770,
    "FINAL FANTASY II": 1173780,
    "FINAL FANTASY III": 1173790,
    "FINAL FANTASY IV": 1173800,
    "FINAL FANTASY TYPE-0 HD": 340170,
    "FINAL FANTASY V": 1173810,
    "FINAL FANTASY VI": 382900,
    "FINAL FANTASY VII": 39140,
    "FINAL FANTASY IX": 377840,
    "FINAL FANTASY XII THE ZODIAC AGE": 595520,
    "FINAL FANTASY XIII": 292120,
    "FINAL FANTASY XIII-2": 292140,
    "FINAL FANTASY XV WINDOWS EDITION": 637650,
    "Five Nights at Freddy's 2": 332800,
    "Five Nights at Freddy's 3": 354140,
    "Friday the 13th: The Game": 438740,
    "Garfield Kart": 362930,
    "Garfield Kart - Furious Racing": 1085510,
    "Goose Goose Duck": 1568590,
    "Grand Theft Auto III - The Definitive Edition": 1546970,
    "Grand Theft Auto: San Andreas - The Definitive Edition": 1547000,
    "Grand Theft Auto: Vice City - The Definitive Edition": 1546990,
    "Grow Home": 323320,
    "Grow Up": 426790,
    "GTFO": 493520,
    "Half-Life 2: Deathmatch": 320,
    "Half-Life Deathmatch: Source": 360,
    "Halo Infinite": 1240440,
    "Halo Wars: Definitive Edition": 459220,
    "Halo: Spartan Assault": 277430,
    "Halo: Spartan Strike": 324570,
    "Hellblade: Senua's Sacrifice": 414340,
    "Hellblade: Senua's Sacrifice VR Edition": 747350,
    "Hitman: Codename 47": 6900,
    "Hitman 2: Silent Assassin": 6850,
    "Hitman: Contracts": 247430,
    "Hitman: Blood Money": 6860,
    "Hitman: Absolution": 203140,
    "Hitman GO: Definitive Edition": 427820,
    "HITMAN World of Assassination": 1659040,
    "Hitman: Sniper Challenge": 205930,
    "HITMAN": 236870,
    "HITMAN 2": 863550,
    "Hollow Knight: Silksong": 1030300,
    "House Flipper": 613100,
    "Injustice: Gods Among Us Ultimate Edition": 242700,
    "Injustice 2": 627270,
    "Keep Talking and Nobody Explodes": 341800,
    "Kingdom Come: Deliverance": 379430,
    "Lara Croft and the Guardian of Light": 35130,
    "Lara Croft and the Temple of Osiris": 289690,
    "LEGO Batman 2: DC Super Heroes": 213330,
    "LEGO Batman 3: Beyond Gotham": 313690,
    "LEGO City Undercover": 578330,
    "LEGO DC Super-Villains": 829110,
    "LEGO Harry Potter: Years 1-4": 21130,
    "LEGO Harry Potter: Years 5-7": 204120,
    "LEGO Harry Potter Collection": 21130,
    "LEGO Indiana Jones 2: The Adventure Continues": 32450,
    "LEGO Jurassic World": 352400,
    "LEGO MARVEL Super Heroes": 249130,
    "LEGO MARVEL Super Heroes 2": 647830,
    "LEGO MARVEL's Avengers": 405310,
    "LEGO Pirates of the Caribbean The Video Game": 311770,
    "LEGO Star Wars III: The Clone Wars": 32510,
    "LEGO STAR WARS: The Force Awakens": 438640,
    "LEGO Star Wars: The Skywalker Saga": 920210,
    "LEGO The Hobbit": 285160,
    "LEGO The Incredibles": 818320,
    "LEGO The Lord of the Rings": 214510,
    "LEGO Worlds": 332310,
    "Life is Strange Remastered": 1265920,
    "Life is Strange: Before the Storm Remastered": 1265930,
    "LIGHTNING RETURNS: FINAL FANTASY XIII": 345350,
    "Little Nightmares II": 860510,
    "Marvel vs. Capcom: Infinite": 493840,
    "Marvel's Avengers - The Definitive Edition": 997070,
    "Marvel's Guardians of the Galaxy": 1088850,
    "Master Levels for DOOM II": 9160,
    "Metro: Last Light Complete Edition": 43160,
    "Metro Exodus Enhanced Edition": 1449560,
    "Monopoly Plus": 562810,
    "Mortal Kombat 11": 976310,
    "Mortal Kombat X": 307780,
    "My Friend Pedro": 557340,
    "Need for Speed": 1262540,
    "Need for Speed Hot Pursuit Remastered": 1328660,
    "Need for Speed Most Wanted": 1262560,
    "Need for Speed Payback": 1262580,
    "Need for Speed Rivals": 1262600,
    "New Tales from the Borderlands": 1454970,
    "Ori and the Blind Forest: Definitive Edition": 387290,
    "PAYDAY 2": 218620,
    "PICO PARK": 1509960,
    "Plants vs. Zombies: Battle for Neighborville": 1262240,
    "Portal 2 - The Final Hours": 104600,
    "Prince of Persia": 19980,
    "Prince of Persia: The Sands of Time": 13600,
    "Prince of Persia: Warrior Within": 13500,
    "Prince of Persia: The Two Thrones": 13530,
    "Prince of Persia: The Forgotten Sands": 33320,
    "Prototype": 10150,
    "PROTOTYPE 2": 115320,
    "Punch Club": 394310,
    "Rayman Legends": 242550,
    "Rayman Origins": 207490,
    "Rayman: Raving Rabbids": 15080,
    "Red Dead Redemption": 1404210,
    "Resident Evil": 304240,
    "Resident Evil 0": 339340,
    "Resident Evil 5": 21690,
    "Resident Evil 6": 221040,
    "Resident Evil Re:Verse": 1236300,
    "RESIDENT EVIL RESISTANCE": 952070,
    "Resident Evil Revelations": 222480,
    "Resident Evil Revelations 2": 287290,
    "Rise of the Tomb Raider": 391220,
    "Risk of Rain (2013)": 248820,
    "Saints Row The Third Remastered": 978300,
    "Scooby-Doo! & Looney Tunes Cartoon Universe: Adventure": 294280,
    "Scribblenauts Unlimited": 218680,
    "Scribblenauts Unmasked": 249870,
    "Sea of Thieves": 1172620,
    "Shadow of the Tomb Raider": 750920,
    "Sniper Elite": 3700,
    "Sniper Elite V2": 63380,
    "Sniper Elite 3": 238090,
    "Sniper Elite 4": 312660,
    "Sniper Elite 5": 1029690,
    "Sniper Elite V2 Remastered": 728740,
    "Sonic & All-Stars Racing Transformed Collection": 212480,
    "Sonic Adventure DX": 71250,
    "Sonic Adventure 2": 213610,
    "Sonic and SEGA All Stars Racing": 34190,
    "Sonic Forces": 637100,
    "Sonic Generations": 71340,
    "Sonic Lost World": 329440,
    "Sonic Mania": 584400,
    "SONIC THE HEDGEHOG 4 Episode I": 202530,
    "SONIC THE HEDGEHOG 4 Episode II": 203650,
    "Split Fiction": 2001120,
    "SpongeBob SquarePants: Battle for Bikini Bottom - Rehydrated": 969990,
    "Spore": 17390,
    "STAR WARS Jedi: Survivor": 1774580,
    "STAR WARS Battlefront": 1237980,
    "STAR WARS Battlefront II": 1237950,
    "STAR WARS: Squadrons": 1222730,
    "Starbound": 211820,
    "Street Fighter 30th Anniversary Collection": 586200,
    "Street Fighter V": 310950,
    "Suicide Squad: Kill the Justice League": 315210,
    "Sunset Overdrive": 847370,
    "Surgeon Simulator": 233720,
    "Team Fortress Classic": 20,
    "Team Sonic Racing": 785260,
    "The Crew 2": 646910,
    "THE GAME OF LIFE": 403120,
    "The Lab": 450390,
    "The Last of Us Part I": 1888930,
    "The LEGO Movie - Videogame": 267530,
    "The LEGO Movie 2 - Videogame": 881320,
    "The LEGO NINJAGO Movie Video Game": 640590,
    "The Outer Worlds: Spacer's Choice Edition": 578650,
    "The Sims 4": 1222670,
    "The Walking Dead: Michonne": 429570,
    "The Walking Dead: The Telltale Definitive Series": 1449690,
    "theHunter: Call of the Wild": 518790,
    "Thief": 239160,
    "Thief Gold": 211600,
    "Thief: Deadly Shadows": 6980,
    "Thief II: The Metal Age": 211740,
    "Tom Clancy's EndWar": 21800,
    "Tom Clancy's Ghost Recon": 15300,
    "Tom Clancy's Ghost Recon: Desert Siege": 13620,
    "Tom Clancy's Ghost Recon: Island Thunder": 13630,
    "Tom Clancy's Ghost Recon Future Soldier": 212630,
    "Tom Clancy's Ghost Recon Wildlands": 460930,
    "Tom Clancy's Rainbow Six 3: Gold Edition": 19830,
    "Tom Clancy's Rainbow Six 3: Athena Sword": 19810,
    "Tom Clancy's Rainbow Six: Lockdown": 15000,
    "Tom Clancy's Rainbow Six: Vegas": 13540,
    "Tom Clancy's Rainbow Six: Vegas 2": 15120,
    "Tom Clancy's Splinter Cell": 13560,
    "Tom Clancy's Splinter Cell: Chaos Theory": 13570,
    "Tom Clancy's Splinter Cell: Double Agent": 13580,
    "Tom Clancy's Splinter Cell: Conviction": 33229,
    "Tom Clancy's Splinter Cell Blacklist": 235600,
    "Tom Clancy's The Division": 365590,
    "Tomb Raider III: Adventures of Lara Croft": 225320,
    "Tomb Raider: The Last Revelation (1999)": 224980,
    "Tomb Raider: Chronicles (2000)": 225000,
    "Tomb Raider (VI): The Angel of Darkness (2003)": 225020,
    "Tomb Raider I-III Remastered Starring Lara Croft": 2478970,
    "Tomb Raider: Anniversary": 8000,
    "Tomb Raider: Legend": 7000,
    "Town of Salem": 334230,
    "Trials Evolution Gold Edition": 220160,
    "Trials Fusion": 245490,
    "Trials Rising": 641080,
    "Ultimate Marvel vs. Capcom 3": 357190,
    "Ultra Street Fighter IV": 45760,
    "Umbrella Corps": 390340,
    "UNCHARTED: Legacy of Thieves Collection": 1659420,
    "Undertale": 391540,
    "Unravel": 1225560,
    "Unravel Two": 1225570,
    "Witch It": 559650,
    "Wizard of Legend": 445980,
    "Wolfenstein 3D": 2270,
    "Wolfenstein 3D: Spear of Destiny": 9000,
    "Wolfenstein: Enemy Territory": 9040,
    "Worms": 70640,
    "Worms Armageddon": 217200,
    "Worms Blast": 70650,
    "Worms Clan Wars": 233840,
    "Worms Crazy Golf": 70620,
    "Worms Pinball": 70660,
    "Worms Reloaded": 22600,
    "Worms Revolution": 200170,
    "Worms Rumble": 1186040,
    "Worms Ultimate Mayhem": 70600,
    "Worms W.M.D": 327030,
    "Worms World Party Remastered": 270910,
    "Unturned": 304930,
    "Call of Duty: WWII - Multiplayer": 476620,
    "Call of Duty: WWII": 476600,
    "Tomb Raider IV-VI Remastered": 2525380,
    "Frostpunk": 323190,
    "Flight Simulator X Steam Edition": 314160,
    "Death Stranding Directors Cut": 1850570,
    "Escape Simulator": 1435790,
    "Five Nights at Freddy's: Sister Location": 506610,
    "Five Nights at Freddy's 4": 388090,
    "Company of Heroes 2": 231430,
    "Dead Space": 1693980,
    "DEATHLOOP": 1252330,
    "Destroy All Humans! 2 - Reprobed": 1266700,
    "High on Life": 1583230,
    "Prey": 480490,
    "Pummel Party": 880940,
    "R.E.P.O": 3241660,
    "Saints Row": 742420,
    "Sleeping Dogs: Definitive Edition": 307690,
    "SOMA": 282140,
    "SpongeBob SquarePants: The Cosmic Shake": 1282150,
    "SOUTH PARK: SNOW DAY!": 1214650,
    "Yooka-Laylee": 360830,
    "Yooka-Laylee and the Impossible Lair": 846870,
    // Missing entries with special characters:
    "South Park™: The Stick of Truth™": 213670,
    "Overwatch® 2": 2357570,
    "LEGO® Star Wars™: The Complete Saga": 32440,
    "Call of Duty®: Modern Warfare® 3 (2011)": 115300,
    "Life is Strange™": 319630,
    "Call of Duty®: Modern Warfare® II - Open Beta": 1962660,
    "HELLDIVERS™ 2": 553850,
    "STAR WARS Jedi: Fallen Order™": 1172380,
    "LEGO® Batman™: The Videogame": 21000,
    "Spyro™ Reignited Trilogy": 996580,
    "LEGO® Builder's Journey": 1544360,
    "Until Dawn™": 2172010,
    "Call of Duty®: Black Ops Cold War": 1985810,
    "Call of Duty®: Modern Warfare® 3 (2011) - Multiplayer": 115300,
    "Assassin's Creed® III": 208480,
    "Assassin's Creed® Chronicles: China": 354380,
    "Assassin's Creed® Chronicles: India": 359610,
    "Assassin's Creed® Chronicles: Russia": 359600,
    "Batman™: Arkham Origins": 209000,
    "Batman™: Arkham Knight": 208650,
    "Batman™: Arkham Origins Blackgate - Deluxe Edition": 267490,
    "Battlefield 3™": 1238820,
    "Battlefield 4™": 1238860,
    "Battlefield™ 1": 1238840,
    "Battlefield™ 2042": 1517290,
    "Battlefield™ Hardline": 1238880,
    "Battlefield™ V": 1238810,
    "Burnout™ Paradise Remastered": 1238080,
    "Call of Duty®: Modern Warfare®": 2000950,
    "Call of Duty®: Modern Warfare® II": 1938090,
    "Call of Duty®: Modern Warfare® III": 2519060,
    "Call of Duty®: Vanguard": 1985820,
    "Crash Bandicoot™ N. Sane Trilogy": 731490,
    "Darkest Dungeon®": 262060,
    "Dead Space™ 3": 1238060,
    "Deus Ex: Mankind Divided™": 337000,
    "Far Cry® 3": 220240,
    "Far Cry® 3 Blood Dragon": 233270,
    "HELLDIVERS™": 394510,
    "HITMAN™": 236870,
    "HITMAN™ 2": 863550,
    "Horizon Zero Dawn™ Complete Edition": 1151640,
    "Injustice™ 2": 627270,
    "LEGO® Batman™ 2: DC Super Heroes": 213330,
    "LEGO® Batman™ 3: Beyond Gotham": 313690,
    "LEGO® City Undercover": 578330,
    "LEGO® DC Super-Villains": 829110,
    "LEGO® Harry Potter: Years 1-4": 21130,
    "LEGO® Harry Potter: Years 5-7": 204120,
    "LEGO® Harry Potter™ Collection": 21130,
    "LEGO® Indiana Jones™ 2: The Adventure Continues": 32450,
    "LEGO® Jurassic World": 352400,
    "LEGO® MARVEL Super Heroes": 249130,
    "LEGO® MARVEL Super Heroes 2": 647830,
    "LEGO® MARVEL's Avengers": 405310,
    "LEGO® Pirates of the Caribbean The Video Game": 311770,
    "LEGO® Star Wars™ III: The Clone Wars™": 32510,
    "LEGO® STAR WARS™: The Force Awakens": 438640,
    "LEGO® Star Wars™: The Skywalker Saga": 920210,
    "LEGO® The Hobbit™": 285160,
    "LEGO® The Incredibles": 818320,
    "LEGO® The Lord of the Rings™": 214510,
    "LEGO® Worlds": 332310,
    "Mass Effect™ Legendary Edition": 1328670,
    "Mirror's Edge™ Catalyst": 1233570,
    "Need for Speed™": 1262540,
    "Need for Speed™ Heat": 1222680,
    "Need for Speed™ Hot Pursuit Remastered": 1328660,
    "Need for Speed™ Most Wanted": 1262560,
    "Need for Speed™ Payback": 1262580,
    "Need for Speed™ Rivals": 1262600,
    "Need for Speed™ Unbound": 1846380,
    "Sonic Adventure™ 2": 213610,
    "STAR WARS Jedi: Survivor™": 1774580,
    "STAR WARS™ Battlefront™": 1237980,
    "STAR WARS™ Battlefront™ II": 1237950,
    "STAR WARS™: Squadrons": 1222730,
    "Team Sonic Racing™": 785260,
    "The Last of Us™ Part I": 1888930,
    "The LEGO® Movie - Videogame": 267530,
    "The LEGO® Movie 2 - Videogame": 881320,
    "The LEGO® NINJAGO® Movie Video Game": 640590,
    "The Sims™ 4": 1222670,
    "theHunter: Call of the Wild™": 518790,
    "Thief™ II: The Metal Age": 211740,
    "Titanfall® 2": 1237970,
    "Tom Clancy's Ghost Recon® Wildlands": 460930,
    "UNCHARTED™: Legacy of Thieves Collection": 1659420,
    "The Elder Scrolls® Online": 306130
};

function getSteamAppId(gameName) {
    // Clean up the game name for better matching
    const cleanName = gameName.replace(/[®™]/g, '').trim();
    return steamAppIds[cleanName] || steamAppIds[gameName] || null;
}

function getSteamImageUrl(appId, type = 'header') {
    if (!appId) return null;

    // If it's a local file (ends with .jpg, .png, etc.), return it as-is
    if (typeof appId === 'string' && appId.match(/\.(jpg|jpeg|png|gif|webp)$/i)) {
        return appId;
    }

    // Steam CDN image URLs
    switch(type) {
        case 'header':
            return `https://cdn.akamai.steamstatic.com/steam/apps/${appId}/header.jpg`;
        case 'capsule':
            return `https://cdn.akamai.steamstatic.com/steam/apps/${appId}/capsule_184x69.jpg`;
        case 'library':
            return `https://cdn.akamai.steamstatic.com/steam/apps/${appId}/library_600x900.jpg`;
        default:
            return `https://cdn.akamai.steamstatic.com/steam/apps/${appId}/header.jpg`;
    }
}

function getTheGamesDBImageUrl(gameName) {
    // TheGamesDB uses a different API structure, but we can construct URLs
    // This is a simplified approach - in production you'd want to use their API to search for games
    const cleanName = gameName
        .replace(/[®™©]/g, '')
        .replace(/[^\w\s]/g, '')
        .replace(/\s+/g, '-')
        .toLowerCase();

    // TheGamesDB image format (this is a simplified approach)
    return `https://cdn.thegamesdb.net/images/thumb/boxart/front/${cleanName}-1.jpg`;
}

function getGameImageUrl(game) {
    // Try Steam first, then TheGamesDB as fallback
    const steamUrl = getSteamImageUrl(game.steamAppId, 'header');
    if (steamUrl) {
        return steamUrl;
    }

    // Fallback to TheGamesDB
    return getTheGamesDBImageUrl(game.title);
}

function getGameIcon(gameName) {
    // Return appropriate icons based on game type/name
    const name = gameName.toLowerCase();

    if (name.includes('call of duty') || name.includes('battlefield') || name.includes('counter-strike')) return '🔫';
    if (name.includes('racing') || name.includes('forza') || name.includes('need for speed')) return '🏎️';
    if (name.includes('sports') || name.includes('fifa') || name.includes('nba')) return '⚽';
    if (name.includes('horror') || name.includes('dead') || name.includes('zombie') || name.includes('resident evil')) return '🧟';
    if (name.includes('rpg') || name.includes('fantasy') || name.includes('dragon') || name.includes('witcher')) return '⚔️';
    if (name.includes('space') || name.includes('star') || name.includes('alien')) return '🚀';
    if (name.includes('puzzle') || name.includes('portal')) return '🧩';
    if (name.includes('minecraft') || name.includes('building') || name.includes('craft')) return '🔨';
    if (name.includes('adventure') || name.includes('tomb raider') || name.includes('uncharted')) return '🗺️';
    if (name.includes('simulation') || name.includes('sim') || name.includes('truck')) return '🚚';

    return '🎮'; // Default gaming icon
}

// Completionist times (100% completion) - User's actual completion times
const completionistTimes = {
    "60 Parsecs!": 16.5,
    "60 Seconds! Reatomized": 34,
    "7 Days to Die": 326,
    "Adventure Time: Pirates of the Enchiridion": 11.5,
    "Alan Wake": 26.5,
    "Alan Wake's American Nightmare": 8.5,
    "Alice: Madness Returns": 22.5,
    "Alien: Isolation": 34,
    "American Truck Simulator": 115,
    "Amnesia: The Dark Descent": 11.5,
    "Among Us": 19,
    "Apex Legends": 186,
    "ARK: Survival Evolved": 230,
    "ARK: Survival of The Fittest": null, // N/A
    "Arma 3": 120,
    "Assassin's Creed": 30.5,
    "Assassin's Creed II": 35.5,
    "Assassin's Creed Brotherhood": 41.5,
    "Assassin's Creed Revelations": 34.5,
    "Assassin's Creed III": 55,
    "Assassin's Creed III Remastered": 55.5,
    "Assassin's Creed Liberation": 16,
    "Assassin's Creed IV: Black Flag": 61.5,
    "Assassin's Creed Freedom Cry": 7.5,
    "Assassin's Creed Unity": 80,
    "Assassin's Creed Syndicate": 55.5,
    "Assassin's Creed Chronicles: China": 17.5,
    "Assassin's Creed Chronicles: India": 14,
    "Assassin's Creed Chronicles: Russia": 15,
    "Assassin's Creed Odyssey": 145,
    "Assassin's Creed Origins": 85,
    "Assassin's Creed Rogue": 40,
    "Assassin's Creed Valhalla": 149,
    "The Awesome Adventures of Captain Spirit": 2,
    "Back 4 Blood": 97,
    "Batman - The Telltale Series": 9,
    "Batman: Arkham Asylum GOTY Edition": 25.5,
    "Batman: Arkham City GOTY": 58.5,
    "Batman: Arkham Origins": 41.5,
    "Batman: Arkham Knight": 51,
    "Batman: Arkham Origins Blackgate - Deluxe Edition": 19,
    "Batman: The Enemy Within - The Telltale Series": 10.5,
    "BattleBit Remastered": 30.5,
    "BattleBlock Theater": 42.5,
    "Battlefield 1": 25,
    "Battlefield 2042": 90,
    "Battlefield 3": 62,
    "Battlefield 4": 17.5,
    "Battlefield Hardline": 26.5,
    "Battlefield V": 36,
    "The Binding of Isaac: Rebirth": 370,
    "BioShock": 23,
    "BioShock Remastered": 23,
    "BioShock 2": 24,
    "BioShock 2 Remastered": 24,
    "BioShock Infinite": 28.5,
    "Black Desert": 403,
    "Blood and Bacon": 12.5,
    "Bloons TD 6": 582,
    "Borderlands 2": 130,
    "Borderlands 3": 82,
    "Borderlands GOTY": 75.5,
    "Borderlands GOTY Enhanced": 75.5,
    "Borderlands: The Pre-Sequel": 59,
    "Brotato": 61,
    "Bully: Scholarship Edition": 29,
    "Burnout Paradise Remastered": 36.5,
    "Call of Duty": 500,
    "Call of Duty 2": 11,
    "Call of Duty (2003)": 10,
    "Call of Duty 4: Modern Warfare (2007)": 16.5,
    "Call of Duty: Advanced Warfare": 18,
    "Call of Duty: Black Ops": 18,
    "Call of Duty: Black Ops Cold War": 17.5,
    "Call of Duty: Black Ops II": 30.5,
    "Call of Duty: Black Ops III": 84,
    "Call of Duty: Ghosts": 13,
    "Call of Duty: Infinite Warfare": 16.5,
    "Call of Duty: Modern Warfare": 15,
    "Call of Duty: Modern Warfare 2": 31,
    "Call of Duty: Modern Warfare 3": 39,
    "Call of Duty Modern Warfare II": 27.5,
    "Call of Duty: Modern Warfare III": 19,
    "Call of Duty: Modern Warfare Remastered (2017)": 16.5,
    "Call of Duty: United Offensive": 8,
    "Call of Duty: Vanguard": 28,
    "Call of Duty: World at War": 25.5,
    "Call of Duty: WWII": 18.5,
    "Capcom Fighting Collection": 25.5,
    "Castle Crashers": 37.5,
    "Celeste": 38.5,
    "Chained Together": 10.5,
    "Clustertruck": 8.5,
    "Comedy Night": 9.5,
    "Content Warning": 8,
    "Contra Anniversary Collection": 12,
    "Control Ultimate Edition": 38.5,
    "Cookie Clicker": 489,
    "Counter-Strike": 100,
    "Counter-Strike 2": 700,
    "Counter-Strike: Condition Zero": 17.5,
    "Counter-Strike: Condition Zero Deleted Scenes": 8.5,
    "Counter-Strike: Source": 89,
    "Crab Game": 5,
    "Crash Bandicoot N. Sane Trilogy": 46.5,
    "The Crew 2": 80.5,
    "Cult of the Lamb": 28.5,
    "Cuphead": 27,
    "Cyberpunk 2077": 125,
    "Darkest Dungeon": 128,
    "Days Gone": 65.5,
    "DayZ": 62,
    "Dead by Daylight": 250,
    "Dead Cells": 90.5,
    "Dead Island Definitive Edition": 51.5,
    "Dead Island Retro Revenge": 8,
    "Dead Island Riptide Definitive Edition": 28,
    "Dead Rising": 72.5,
    "Dead Rising 2": 50.5,
    "Dead Rising 2: Off the Record": 39.5,
    "Dead Rising 3": 44.5,
    "Dead Rising 4": 34,
    "Dead Space 2": 16.5,
    "Dead Space (2008)": 20,
    "Dead Space 3": 24.5,
    "DEATH STRANDING DIRECTOR'S CUT": 112,
    "Deceit": 40,
    "Deep Rock Galactic": 495,
    "Destroy All Humans!": 14.5,
    "Detroit: Become Human": 32,
    "Deus Ex: Game of the Year Edition": 40,
    "Deus Ex: Invisible War": 18.5,
    "Deus Ex: Human Revolution - Director's Cut": 46,
    "Deus Ex: The Fall": 8,
    "Deus Ex: Mankind Divided": 53,
    "Devolverland Expo": 1.5,
    "Discovery Tour by Assassin's Creed: Ancient Egypt": 6.5,
    "Dishonored": 37.5,
    "Dishonored 2": 46.5,
    "Don't Starve": 153,
    "Don't Starve Together": 213,
    "Donut County": 2.5,
    "DOOM": 27,
    "DOOM + DOOM II": 23.5,
    "DOOM II": 14,
    "DOOM 3": 16.5,
    "DOOM 3: BFG Edition": 38,
    "DOOM 3: Resurrection of Evil": 6,
    "DOOM 64": 10.5,
    "DOOM Eternal": 29,
    "Drug Dealer Simulator": 42.5,
    "Due Process": 11,
    "Dungeon Defenders": 459,
    "Dungeon Defenders II": 135,
    "Dying Light": 64,
    "Dying Light 2: Reloaded Edition": 100,
    "The Elder Scrolls III: Morrowind": 297,
    "The Elder Scrolls IV: Oblivion Game of the Year Edition (2009)": 175,
    "The Elder Scrolls V: Skyrim Special Edition": 237,
    "Enter the Gungeon": 161,
    "Escape Dead Island": 17,
    "Escape Memoirs: Mini Stories": 3,
    "Escape Simulator": 14.5,
    "Escape the Backrooms": 13.5,
    "Euro Truck Simulator 2": 427,
    "The Evil Within": 41,
    "The Evil Within 2": 28,
    "Exit the Gungeon": 31.5,
    "Fable Anniversary": 32,
    "Fall Guys": 44,
    "Fallout": 32.5,
    "Fallout 2": 82.5,
    "Fallout 3 - Game of the Year Edition": 106,
    "Fallout 4": 160,
    "Fallout 76": 290,
    "Fallout: New Vegas": 132,
    "Fallout Shelter": 96,
    "Fallout Tactics": 49.5,
    "Far Cry": 19.5,
    "Far Cry 2": 41,
    "Far Cry® 3": 36.5,
    "Far Cry® 3 Blood Dragon": 8.5,
    "Far Cry 4": 47,
    "Far Cry 5": 47.5,
    "Far Cry 6": 63.5,
    "Far Cry New Dawn": 29,
    "Far Cry Primal": 36.5,
    "Fears to Fathom - Carson House": 2,
    "Fears to Fathom - Home Alone": 1,
    "Fears to Fathom - Ironbark Lookout": 2,
    "Fears to Fathom - Norwood Hitchhike": 1.5,
    "Fears to Fathom - Woodbury Getaway": 2.5,
    "Final DOOM": 19,
    "FINAL FANTASY": 18.5,
    "FINAL FANTASY II": 25,
    "FINAL FANTASY III": 19,
    "FINAL FANTASY IV": 27,
    "FINAL FANTASY TYPE-0 HD": 50,
    "FINAL FANTASY V": 54,
    "FINAL FANTASY VI": 56,
    "FINAL FANTASY VII": 80,
    "FINAL FANTASY IX": 83,
    "FINAL FANTASY XII THE ZODIAC AGE": 104,
    "FINAL FANTASY XIII": 105,
    "FINAL FANTASY XIII-2": 71.5,
    "FINAL FANTASY XV WINDOWS EDITION": 95.5,
    "Firewatch": 5,
    "Five Nights at Freddy's": 5,
    "Five Nights at Freddy's 2": 11,
    "Five Nights at Freddy's 3": 5,
    "Five Nights at Freddy's 4": 6,
    "Five Nights at Freddy's: Sister Location": 12,
    "For Honor": 18,
    "The Forest": 58.5,
    "Friday the 13th: The Game": 20,
    "THE GAME OF LIFE": 6.5,
    "Gang Beasts": 7.5,
    "Garfield Kart": 22.5,
    "Garfield Kart - Furious Racing": 11,
    "Garry's Mod": 140,
    "Genital Jousting": 5,
    "Geometry Dash": 300,
    "Getting Over It with Bennett Foddy": 30,
    "Goat Simulator": 11,
    "God of War": 51,
    "Golf It!": 26.5,
    "Golf With Your Friends": 26.5,
    "Goose Goose Duck": 15,
    "Grand Theft Auto III": 37,
    "Grand Theft Auto III - The Definitive Edition": 37,
    "Grand Theft Auto IV: The Complete Edition": 101,
    "Grand Theft Auto: San Andreas": 72,
    "Grand Theft Auto: San Andreas - The Definitive Edition": 72,
    "Grand Theft Auto V Enhanced": 88,
    "Grand Theft Auto V Legacy": 88,
    "Grand Theft Auto: Vice City": 38,
    "Grand Theft Auto: Vice City - The Definitive Edition": 38,
    "Graveyard Keeper": 73,
    "GRIS": 6.5,
    "Grounded": 102,
    "Grow Home": 8,
    "Grow Up": 9.5,
    "GTFO": 501,
    "Hades": 95.5,
    "Half-Life": 15.5,
    "Half-Life 2": 20,
    "Half-Life 2: Deathmatch": 1,
    "Half-Life: Blue Shift": 3.5,
    "Half-Life Deathmatch: Source": 1,
    "Half-Life: Opposing Force": 7,
    "Half-Life: Source": 14,
    "Halo Infinite": 29.5,
    "Halo: Spartan Assault": 17.5,
    "Halo: Spartan Strike": 12.5,
    "Halo: The Master Chief Collection": 500,
    "Halo Wars: Definitive Edition": 45.5,
    "Hand Simulator": 4,
    "Hand Simulator: Survival": 2.5,
    "Heavy Rain": 22,
    "Hellblade: Senua's Sacrifice": 9,
    "HELLDIVERS": 92.5,
    "HELLDIVERS™ 2": 100,
    "Hello Neighbor": 16.5,
    "HITMAN™": 91.5,
    "Hitman: Codename 47": 15,
    "HITMAN™ 2": 128,
    "Hitman 2: Silent Assassin": 19,
    "Hitman: Contracts": 16,
    "Hitman: Blood Money": 20.5,
    "Hitman: Absolution": 37,
    "Hitman GO: Definitive Edition": 7.5,
    "Hitman: Sniper Challenge": 3,
    "HITMAN World of Assassination": 280,
    "Hogwarts Legacy": 71.5,
    "Hollow Knight": 64.5,
    "Hollow Knight: Silksong": 55.5,
    "Horizon Zero Dawn™ Complete Edition": 61,
    "Hotline Miami": 15,
    "Hotline Miami 2: Wrong Number": 33.5,
    "House Flipper": 47,
    "House Party": 8.5,
    "Human Fall Flat": 25,
    "I Am Bread": 10.5,
    "In Silence": 36,
    "Injustice™ 2": 54,
    "Injustice: Gods Among Us Ultimate Edition": 24.5,
    "INSIDE": 4.5,
    "It Takes Two": 14,
    "Just Cause": 8.5,
    "Just Cause 2": 86,
    "Just Cause 3": 63,
    "Just Cause 4": 54.5,
    "Keep Talking and Nobody Explodes": 6,
    "Killing Floor": 288,
    "Killing Floor 2": 102,
    "Kingdom Come: Deliverance": 136,
    "The Lab": 1.5,
    "Lara Croft and the Guardian of Light": 16.5,
    "Lara Croft and the Temple of Osiris": 13,
    "Lara Croft GO": 7,
    "The Last of Us™ Part I": 24.5,
    "Left 4 Dead": 60.5,
    "Left 4 Dead 2": 58,
    "LEGO® Batman™: The Videogame": 29.5,
    "LEGO® Batman™ 2: DC Super Heroes": 24.5,
    "LEGO® Batman™ 3: Beyond Gotham": 36.5,
    "LEGO® Builder's Journey": 2.5,
    "LEGO® City Undercover": 49,
    "LEGO® DC Super-Villains": 42,
    "LEGO® Harry Potter™ Collection": 50,
    "LEGO® Harry Potter: Years 1-4": 27.5,
    "LEGO® Harry Potter: Years 5-7": 25,
    "LEGOⓇ Indiana Jones™: The Original Adventures": 19.5,
    "LEGO® Indiana Jones™ 2: The Adventure Continues": 20.5,
    "LEGO® Jurassic World": 30,
    "LEGO® MARVEL Super Heroes": 40,
    "LEGO® MARVEL Super Heroes 2": 60,
    "LEGO® MARVEL's Avengers": 37,
    "The LEGO® Movie - Videogame": 17.5,
    "The LEGO® Movie 2 - Videogame": 16.5,
    "The LEGO® NINJAGO® Movie Video Game": 18,
    "LEGO® Pirates of the Caribbean The Video Game": 23.5,
    "LEGO® Star Wars™: The Complete Saga": 40.5,
    "LEGO® Star Wars™ III: The Clone Wars™": 30,
    "LEGO® STAR WARS™: The Force Awakens": 31,
    "LEGO® Star Wars™: The Skywalker Saga": 90,
    "LEGO® The Hobbit™": 37,
    "LEGO® The Incredibles": 20,
    "LEGO® The Lord of the Rings™": 33.5,
    "LEGO® Worlds": 35.5,
    "Lethal Company": 1966720,
    "Life is Strange™": 18.5,
    "Life is Strange 2": 20,
    "Life is Strange: Before the Storm": 13,
    "Life is Strange: Before the Storm Remastered": 13,
    "Life is Strange Remastered": 18.5,
    "Life is Strange: True Colors": 13,
    "LIGHTNING RETURNS: FINAL FANTASY XIII": 66.5,
    "LIMBO": 6.5,
    "Little Nightmares": 9,
    "Little Nightmares II": 9,
    "LOCKDOWN Protocol": 2780980,
    "Longvinter": 1635450,
    "Mad Max": 61.5,
    "Mafia": 21,
    "Mafia: Definitive Edition": 24.5,
    "Mafia II (Classic)": 32,
    "Mafia II: Definitive Edition": 34.5,
    "Mafia III: Definitive Edition": 70,
    "Mage Arena": "Unknown",
    "Marvel Rivals": 56,
    "Marvel vs. Capcom: Infinite": 12,
    "Marvel's Avengers - The Definitive Edition": 105,
    "Marvel's Guardians of the Galaxy": 26,
    "Marvel's Spider-Man: Miles Morales": 18.5,
    "Marvel's Spider-Man Remastered": 45,
    "Mass Effect™ Legendary Edition": 109,
    "Master Levels for DOOM II": 10.5,
    "Max Payne": 11.5,
    "Max Payne 2: The Fall of Max Payne": 9.5,
    "Max Payne 3": 32,
    "Metro 2033 Redux": 23.5,
    "Metro Exodus": 41,
    "Metro Exodus Enhanced Edition": 45,
    "Metro: Last Light Complete Edition": 37,
    "Metro: Last Light Redux": 28,
    "MiniRoyale": 1657090,
    "Mirror's Edge": 12.5,
    "Mirror's Edge™ Catalyst": 32,
    "Monopoly Plus": 5.5,
    "Moonlighter": 30,
    "Mortal Kombat 11": 62,
    "Mortal Kombat X": 66,
    "MultiVersus": 1818750,
    "My Friend Pedro": 9,
    "NBA 2K24": 500,
    "Need for Speed™": 31,
    "Need for Speed™ Hot Pursuit Remastered": 37,
    "Need for Speed™ Most Wanted": 35.5,
    "Need for Speed™ Payback": 47,
    "Need for Speed™ Rivals": 34,
    "Need for Speed™ Unbound": 51.5,
    "Never Alone (Kisima Ingitchuna)": 4.5,
    "New Tales from the Borderlands": 19.5,
    "No Man's Sky": 157,
    "Ori and the Blind Forest": 11.5,
    "Ori and the Blind Forest: Definitive Edition": 12.5,
    "Ori and the Will of the Wisps": 18,
    "The Outer Worlds: Spacer's Choice Edition": 60,
    "Outlast": 11.5,
    "Outlast 2": 14,
    "Overcooked": 12,
    "Overcooked! 2": 24.5,
    "Overwatch® 2": 155,
    "Pacify": 10,
    "Palworld": 87.5,
    "PAYDAY 2": 500,
    "PC Building Simulator": 93.5,
    "PEAK": 40,
    "Phasmophobia": 40,
    "PICO PARK": 3,
    "Planet Coaster": 86,
    "Plants vs. Zombies: Battle for Neighborville": 160,
    "Plants vs. Zombies: Game of the Year": 40,
    "Plants vs. Zombies™ Garden Warfare 2: Deluxe Edition": 100,
    "Portal": 10.5,
    "Portal 2": 22.5,
    "Portal 2 - The Final Hours": 104600,
    "Portal with RTX": 10.5,
    "PowerWash Simulator": 60,
    "Prince of Persia": 30,
    "Prince of Persia: The Sands of Time": 10.5,
    "Prince of Persia: Warrior Within": 17,
    "Prince of Persia: The Two Thrones": 12,
    "Prince of Persia: The Forgotten Sands": 10.5,
    "Prototype": 32,
    "PROTOTYPE 2": 19.5,
    "PUBG: BATTLEGROUNDS": 150,
    "Punch Club": 24,
    "Quake Champions": 16.5,
    "The Quarry": 33,
    "Raft": 35,
    "RAGE": 23.5,
    "RAGE 2": 32,
    "Rayman Legends": 31.5,
    "Rayman Origins": 21.5,
    "Rayman: Raving Rabbids": 11,
    "Rec Room": 471710,
    "Red Dead Redemption": 46,
    "Red Dead Redemption 2": 190,
    "Resident Evil": 23.5,
    "Resident Evil 0": 16.5,
    "Resident Evil 2": 15.5,
    "Resident Evil 3": 20.5,
    "Resident Evil 4 (2005)": 31.5,
    "Resident Evil 5": 35.5,
    "Resident Evil 6": 52,
    "Resident Evil 7 Biohazard": 27.5,
    "RESIDENT EVIL RESISTANCE": 80,
    "Resident Evil Revelations": 36,
    "Resident Evil Revelations 2": 35.5,
    "Resident Evil Re:Verse": 7,
    "Resident Evil Village": 38.5,
    "Return to Castle Wolfenstein": 11,
    "Rise of the Tomb Raider": 35.5,
    "Risk of Rain (2013)": 51,
    "Rust": 188,
    "Saints Row 2": 51,
    "Saints Row: The Third": 45,
    "Saints Row: Gat out of Hell": 21,
    "Saints Row IV": 43.5,
    "Saints Row The Third Remastered": 40,
    "Scooby-Doo! & Looney Tunes Cartoon Universe: Adventure": 4,
    "Scott Pilgrim vs The World": 17.5,
    "Scribblenauts Unlimited": 13,
    "Scribblenauts Unmasked": 11.5,
    "Sea of Thieves": 226,
    "SEGA Mega Drive & Genesis Classics": 12,
    "Shadow of the Tomb Raider": 42.5,
    "Shower With Your Dad Simulator 2015: Do You Still Shower With Your Dad": 5.5,
    "Sid Meier's Civilization VI": 360,
    "The Sims™ 4": 90,
    "Slay the Spire": 185,
    "Slime Rancher": 38.5,
    "Slime Rancher 2": 28,
    "Sniper Elite": 22,
    "Sniper Elite V2": 29,
    "Sniper Elite 3": 30.5,
    "Sniper Elite 4": 44.5,
    "Sniper Elite 5": 42,
    "Sniper Elite V2 Remastered": 29,
    "Sonic & All-Stars Racing Transformed Collection": 45,
    "Sonic Adventure™ 2": 47,
    "Sonic Adventure DX": 33,
    "Sonic and SEGA All Stars Racing": 20,
    "Sonic CD": 6,
    "Sonic Forces": 27,
    "Sonic Generations": 23.5,
    "Sonic Lost World": 19.5,
    "Sonic Mania": 19,
    "SONIC THE HEDGEHOG 4 Episode I": 7,
    "SONIC THE HEDGEHOG 4 Episode II": 10,
    "South Park The Fractured But Whole": 28,
    "South Park™: The Stick of Truth™": 21,
    "SpeedRunners": 15.5,
    "Split Fiction": 14.5,
    "Splitgate": 14,
    "SpongeBob SquarePants: Battle for Bikini Bottom - Rehydrated": 14,
    "Spore": 100,
    "Spyro™ Reignited Trilogy": 34,
    "STAR WARS™ Battlefront™": 37.5,
    "STAR WARS™ Battlefront™ II": 65.5,
    "STAR WARS Jedi: Fallen Order™": 31.5,
    "STAR WARS Jedi: Survivor™": 55,
    "STAR WARS™: Squadrons": 52,
    "Starbound": 162,
    "Stardew Valley": 168,
    "Stick Fight: The Game": 15.5,
    "Street Fighter 30th Anniversary Collection": 23.5,
    "Street Fighter V": 120,
    "Subnautica": 52.5,
    "Subnautica: Below Zero": 31,
    "Suicide Squad: Kill the Justice League": 44,
    "Sunset Overdrive": 34.5,
    "Super Meat Boy": 45.5,
    "Surgeon Simulator": 15,
    "Tales from the Borderlands": 11.5,
    "Team Fortress Classic": 50,
    "Team Sonic Racing™": 26.5,
    "Terraria": 200,
    "theHunter: Call of the Wild™": 190,
    "Thief": 44,
    "Thief Gold": 36,
    "Thief: Deadly Shadows": 29,
    "Thief™ II: The Metal Age": 36,
    "Tiny Tina's Wonderlands": 52.5,
    "Titanfall® 2": 16,
    "Tom Clancy's EndWar": 72,
    "Tom Clancy's Ghost Recon": 13.5,
    "Tom Clancy's Ghost Recon Future Soldier": 17,
    "Tom Clancy's Ghost Recon: Island Thunder": 3.5,
    "Tom Clancy's Ghost Recon: Desert Siege": 4.5,
    "Tom Clancy's Ghost Recon® Wildlands": 84.5,
    "Tom Clancy's Rainbow Six 3: Gold Edition": 47.5,
    "Tom Clancy's Rainbow Six 3: Athena Sword": 19840,
    "Tom Clancy's Rainbow Six: Lockdown": 15000,
    "Tom Clancy's Rainbow Six® Siege X": 359550,
    "Tom Clancy's Rainbow Six: Vegas": 33,
    "Tom Clancy's Rainbow Six: Vegas 2": 29,
    "Tom Clancy's Splinter Cell": 16,
    "Tom Clancy's Splinter Cell: Chaos Theory": 19.5,
    "Tom Clancy's Splinter Cell: Double Agent": 15,
    "Tom Clancy's Splinter Cell: Conviction": 18,
    "Tom Clancy's Splinter Cell Blacklist": 28.5,
    "Tom Clancy's The Division": 85.5,
    "Tomb Raider": 21,
    "Tomb Raider I": 19.5,
    "Tomb Raider II": 21.5,
    "Tomb Raider III: Adventures of Lara Croft": 25,
    "Tomb Raider: The Last Revelation (1999)": 24,
    "Tomb Raider: Chronicles (2000)": 12.5,
    "Tomb Raider (VI): The Angel of Darkness (2003)": 18.5,
    "Tomb Raider: Anniversary": 20.5,
    "Tomb Raider I-III Remastered Starring Lara Croft": 62.5,
    "Tomb Raider: Legend": 15,
    "Tomb Raider: Underworld": 19,
    "Town of Salem": 90,
    "Trials Evolution Gold Edition": 74.5,
    "Trials Fusion": 115,
    "Trials Rising": 86,
    "Ultimate Chicken Horse": 13,
    "Ultimate Marvel vs. Capcom 3": 90.5,
    "Ultra Street Fighter IV": 134,
    "Umbrella Corps": 12,
    "UNCHARTED™: Legacy of Thieves Collection": 55,
    "Undertale": 20.5,
    "UNO": 16.5,
    "Unravel": 13.5,
    "Unravel Two": 13.5,
    "Until Dawn™": 19,
    "Unturned": 130,
    "The Walking Dead": 13.5,
    "The Walking Dead: A New Frontier": 8,
    "The Walking Dead: Michonne": 4,
    "The Walking Dead: Season Two": 9.5,
    "The Walking Dead: The Final Season": 13.5,
    "The Walking Dead: The Telltale Definitive Series": 46,
    "Watch Dogs: Legion": 50,
    "Watch_Dogs": 62,
    "Watch_Dogs 2": 46.5,
    "A Way Out": 6.5,
    "Welcome to the Game": 14,
    "What Remains of Edith Finch": 3,
    "Witch It": 559650,
    "The Witcher: Enhanced Edition": 63.5,
    "The Witcher 2: Assassins of Kings Enhanced Edition": 56.5,
    "The Witcher 3: Wild Hunt": 175,
    "Wizard of Legend": 26.5,
    "Wizard101": 500,
    "The Wolf Among Us": 9.5,
    "Wolfenstein 3D": 11,
    "Wolfenstein 3D: Spear of Destiny": 8.5,
    "Wolfenstein: Enemy Territory": 9020,
    "Wolfenstein II: The New Colossus": 33.5,
    "Wolfenstein: The New Order": 24.5,
    "Wolfenstein: The Old Blood": 16,
    "Wolfenstein: Youngblood": 33.5,
    "Worms": 5.5,
    "Worms Armageddon": 23,
    "Worms Blast": 14,
    "Worms Clan Wars": 18,
    "Worms Crazy Golf": 12,
    "Worms Pinball": 1.5,
    "Worms Reloaded": 52,
    "Worms Rumble": 23.5,
    "Worms Ultimate Mayhem": 21.5,
    "Worms W.M.D": 45.5,
    "Worms World Party Remastered": 24.5,
    "XCOM 2": 85,
    "Yooka-Laylee": 24.5,
    "Death Stranding Directors Cut": 112,
    "Escape Simulator": 14.5,
    "Five Nights at Freddy's 4": 6,
    "Five Nights at Freddy's: Sister Location": 12,
    "Flight Simulator X Steam Edition": 300,
    "Frostpunk": 57,
    "Tomb Raider IV-VI Remastered": 40,
    "Company of Heroes 2": 64,
    "Dead Space": 30,
    "DEATHLOOP": 36,
    "Destroy All Humans! 2 - Reprobed": 24.5,
    "High on Life": 21.5,
    "Prey": 47,
    "Pummel Party": 22.5,
    "R.E.P.O": 2,
    "Saints Row": 52.5,
    "Sleeping Dogs: Definitive Edition": 41.5,
    "SOMA": 11,
    "SpongeBob SquarePants: The Cosmic Shake": 14.5,
    "SOUTH PARK: SNOW DAY!": 10.5,
    "The Elder Scrolls® Online": 110,
    "Yooka-Laylee and the Impossible Lair": 21.5
};

function getCompletionistTime(gameName) {
    // Try exact match first
    if (completionistTimes[gameName]) {
        return completionistTimes[gameName];
    }

    // Try some common name variations
    const variations = [
        gameName.replace(/™/g, '').replace(/®/g, ''),
        gameName.replace(/ \(\d{4}\)/g, ''), // Remove year
        gameName.replace(/: Enhanced Edition|: Definitive Edition|: GOTY/g, ''),
        gameName.replace(/Call of Duty®?:? ?/g, 'Call of Duty: '),
        gameName.replace(/Grand Theft Auto V Legacy/g, 'Grand Theft Auto V')
    ];

    for (const variation of variations) {
        if (completionistTimes[variation]) {
            return completionistTimes[variation];
        }
    }

    return null;
}

// Enhance the game database with both manual and HLTB times
// Update gameDatabase to include both data sources
if (typeof gameDatabase !== 'undefined' && typeof hltbGameTimes !== 'undefined') {
    // Add HLTB times to existing games in the database
    Object.keys(gameDatabase).forEach(gameName => {
        const game = gameDatabase[gameName];

        // Try to find HLTB time for this game
        let hltbTime = null;

        // Try exact match first
        if (hltbGameTimes[gameName]) {
            hltbTime = hltbGameTimes[gameName];
        } else {
            // Try some common name variations
            const variations = [
                gameName.replace(/[™®]/g, '').trim(), // Remove trademark symbols
                gameName.replace(/ \(\d{4}\)/g, ''), // Remove year
                gameName.replace(/: Enhanced Edition|: Definitive Edition|: GOTY/g, ''),
                gameName.replace(/Call of Duty®?:? ?/g, 'Call of Duty: '),
                gameName.replace(/Grand Theft Auto V Legacy/g, 'Grand Theft Auto V'),
                gameName.replace(/Overwatch®?\s*2?/g, 'Overwatch 2').trim() // Fix Overwatch variants
            ];

            for (const variation of variations) {
                if (hltbGameTimes[variation]) {
                    hltbTime = hltbGameTimes[variation];
                    break;
                }
            }
        }

        // Add HLTB data to the game object
        game.hltbTime = hltbTime;

        // Update timeToBeat to prefer HLTB over manual, but keep both
        if (hltbTime && !game.timeToBeat) {
            game.timeToBeat = hltbTime;
        }

        // Try to get completionist time (if we have expanded HLTB data)
        game.completionistTime = getCompletionistTime(gameName);

        // Try to get Steam App ID for images (simplified approach)
        game.steamAppId = getSteamAppId(gameName);
    });
}

// Use games from gameDatabase instead of hardcoded gamesList
let currentGames = Object.keys(gameDatabase);
let filteredGames = Object.keys(gameDatabase);

const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const sortDirectionBtn = document.getElementById('sortDirectionBtn');
const gamesListContainer = document.getElementById('gamesList');
const totalGamesSpan = document.getElementById('totalGames');
const filteredGamesSpan = document.getElementById('filteredGames');

// Sort direction state: 'asc' for ascending, 'desc' for descending
let sortDirection = 'asc';

// Debug: Check if DOM elements exist
if (!gamesListContainer) console.error('gamesList element not found!');
if (!totalGamesSpan) console.error('totalGames element not found!');
if (!filteredGamesSpan) console.error('filteredGames element not found!');

function formatTime(hours) {
    if (!hours) return 'Unknown';
    if (hours < 1) return `${Math.round(hours * 60)} minutes`;
    return `${hours} hours`;
}


function formatTimeWithLabel(game) {
    const hltbTime = game.hltbTime;
    const manualTime = manualGameTimes[game.title];

    // Prefer HLTB time, fall back to manual time
    const displayTime = hltbTime || manualTime;

    if (displayTime) {
        return formatTime(displayTime);
    }

    return 'Unknown';
}

function renderGames() {
    gamesListContainer.innerHTML = '';

    if (filteredGames.length === 0) {
        gamesListContainer.innerHTML = '<div class="no-results">No games found matching your search.</div>';
        return;
    }

    filteredGames.forEach(gameName => {
        const game = gameDatabase[gameName];
        const gameCard = document.createElement('div');

        // Define completion status first
        const isCompleted = getGameCompletionStatus(game.title);
        const completedClass = isCompleted ? 'game-completed' : '';
        const gameId = game.title.replace(/[^a-zA-Z0-9]/g, '');

        gameCard.className = `game-card ${completedClass}`;

        const timeCategory = getTimeCategory(game.timeToBeat);
        const timeBadgeClass = `time-badge time-${timeCategory}`;

        const steamUrl = getSteamImageUrl(game.steamAppId, 'header');
        const fallbackUrl = getTheGamesDBImageUrl(game.title);
        const iconFallback = getGameIcon(game.title);

        const imageHtml = steamUrl
            ? `<img src="${steamUrl}" alt="${game.title}" onerror="this.onerror=null; this.src='${fallbackUrl}'; this.onerror=function(){this.parentElement.innerHTML='<div class=\\'game-placeholder\\'>${iconFallback}</div>';}">`
            : `<img src="${fallbackUrl}" alt="${game.title}" onerror="this.parentElement.innerHTML='<div class=\\'game-placeholder\\'>${iconFallback}</div>'">`;

        // Get achievement data
        const achievementData = typeof getAchievementData !== 'undefined' ? getAchievementData(game.title) : { hasAchievements: false, count: 0 };

        const steamAppId = getSteamAppId(game.title);
        const steamStoreUrl = steamAppId ? `https://store.steampowered.com/app/${steamAppId}` : '#';

        gameCard.innerHTML = `
            <a class="game-image-container" href="${steamStoreUrl}" target="_blank" rel="noopener" title="View on Steam Store">
                <div class="game-image">
                    ${imageHtml}
                </div>
                ${achievementData.hasAchievements ? `
                    <div class="achievement-badge" title="Steam Achievements: ${achievementData.count}">
                        <span class="achievement-icon">🏆</span>
                        <span class="achievement-count">${achievementData.count}</span>
                    </div>
                ` : ''}
                ${isCompleted && getGameCompletionData(game.title).completionDate ? `
                    <div class="completion-date"
                         onclick="event.preventDefault(); editCompletionDate(event, '${game.title.replace(/'/g, "\\'")}', '${formatCompletionDate(getGameCompletionData(game.title).completionDate)}')"
                         title="Click to edit completion date">
                        Completed: ${formatCompletionDate(getGameCompletionData(game.title).completionDate)}
                    </div>
                ` : ''}
            </a>
            <div class="game-content">
                <div class="game-header">
                    <div class="game-title">${game.title}</div>
                    <div class="completion-checkbox">
                        <input type="checkbox" id="complete-${gameId}" ${isCompleted ? 'checked' : ''}
                               onchange="toggleGameCompletion('${game.title.replace(/'/g, "\\'")}', this.checked)">
                        <label for="complete-${gameId}" class="completion-label" title="Mark as completed">
                            <span class="checkmark">✓</span>
                        </label>
                    </div>
                </div>
                <div class="game-stats">
                    <div class="stat-row">
                        <span class="stat-label">Main Story</span>
                        <span class="stat-time ${timeBadgeClass}">${formatTimeWithLabel(game)}</span>
                    </div>
                    ${game.completionistTime ? `
                    <div class="stat-row">
                        <span class="stat-label">100% Complete</span>
                        <span class="stat-time time-completionist">${formatTime(game.completionistTime)}</span>
                    </div>
                    ` : ''}
                    ${game.releaseYear ? `
                    <div class="stat-row">
                        <span class="stat-label">Release Year</span>
                        <span class="stat-year">${game.releaseYear}</span>
                    </div>
                    ` : ''}
                    ${isCompleted ? `
                    <div class="stat-row custom-time-row">
                        <span class="stat-label">My Time To Complete</span>
                        ${getGameCompletionData(game.title).customTime ? `
                            <span class="stat-time time-custom"
                                  onclick="editCustomTime(event, '${game.title.replace(/'/g, "\\'")}', '${getGameCompletionData(game.title).customTime}')"
                                  title="Click to edit your completion time"
                                  style="cursor: pointer;">
                                ${formatTime(getGameCompletionData(game.title).customTime)}
                            </span>
                        ` : `
                            <input type="number"
                                   step="0.5"
                                   min="0"
                                   placeholder="-- hours"
                                   class="custom-time-input"
                                   value=""
                                   onchange="updateCustomTime('${game.title.replace(/'/g, "\\'")}', this.value)"
                                   onblur="updateCustomTime('${game.title.replace(/'/g, "\\'")}', this.value)">
                        `}
                    </div>
                    ` : ''}
                </div>
            </div>
        `;


        gamesListContainer.appendChild(gameCard);
    });
}

function filterGames() {
    const searchTerm = searchInput.value.toLowerCase();
    const sortBy = sortSelect.value;

    filteredGames = currentGames.filter(gameName => {
        // Basic search filter
        if (!gameName.toLowerCase().includes(searchTerm)) {
            return false;
        }

        // When sorting by completion date or my completion time, only show completed games
        if (sortBy === 'completionDate' || sortBy === 'myCompletionTime') {
            const compData = getGameCompletionData(gameName);
            if (!compData.completed) {
                return false;
            }
        }

        return true;
    });
    updateStats();
    sortGames();
}

function toggleSortDirection() {
    sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    updateSortDirectionArrow();
    sortGames();
}

function updateSortDirectionArrow() {
    const arrow = sortDirectionBtn.querySelector('.sort-arrow');
    arrow.textContent = sortDirection === 'asc' ? '▲' : '▼';
    sortDirectionBtn.title = sortDirection === 'asc' ? 'Ascending (click to toggle)' : 'Descending (click to toggle)';
}

function sortGames() {
    const sortBy = sortSelect.value;
    const isAsc = sortDirection === 'asc';

    filteredGames.sort((a, b) => {
        const gameA = gameDatabase[a];
        const gameB = gameDatabase[b];

        let result = 0;

        switch (sortBy) {
            case 'name':
                result = gameA.title.localeCompare(gameB.title);
                break;

            case 'mainTime':
                const timeA = parseFloat(gameA.timeToBeat) || 0;
                const timeB = parseFloat(gameB.timeToBeat) || 0;

                if (!gameA.timeToBeat && !gameB.timeToBeat) { result = 0; break; }
                if (!gameA.timeToBeat) { result = 1; break; }
                if (!gameB.timeToBeat) { result = -1; break; }

                result = timeA - timeB;
                break;

            case 'completionistTime':
                const compTimeA = parseFloat(gameA.completionistTime) || 0;
                const compTimeB = parseFloat(gameB.completionistTime) || 0;

                if (!gameA.completionistTime && !gameB.completionistTime) { result = 0; break; }
                if (!gameA.completionistTime) { result = 1; break; }
                if (!gameB.completionistTime) { result = -1; break; }

                result = compTimeA - compTimeB;
                break;

            case 'releaseYear':
                const yearA = parseInt(gameA.releaseYear) || 0;
                const yearB = parseInt(gameB.releaseYear) || 0;

                if (!gameA.releaseYear && !gameB.releaseYear) { result = 0; break; }
                if (!gameA.releaseYear) { result = 1; break; }
                if (!gameB.releaseYear) { result = -1; break; }

                result = yearA - yearB;
                break;

            case 'achievements':
                const achieveDataA = getAchievementData(gameA.title);
                const achieveDataB = getAchievementData(gameB.title);
                const achieveCountA = achieveDataA.hasAchievements ? achieveDataA.count : 0;
                const achieveCountB = achieveDataB.hasAchievements ? achieveDataB.count : 0;

                if (achieveCountA === 0 && achieveCountB === 0) { result = 0; break; }
                if (achieveCountA === 0) { result = 1; break; }
                if (achieveCountB === 0) { result = -1; break; }

                result = achieveCountA - achieveCountB;
                break;

            case 'completionDate':
                const compDataA = getGameCompletionData(gameA.title);
                const compDataB = getGameCompletionData(gameB.title);
                const dateA = compDataA.completionDate ? new Date(compDataA.completionDate).getTime() : 0;
                const dateB = compDataB.completionDate ? new Date(compDataB.completionDate).getTime() : 0;

                if (!compDataA.completionDate && !compDataB.completionDate) { result = 0; break; }
                if (!compDataA.completionDate) { result = 1; break; }
                if (!compDataB.completionDate) { result = -1; break; }

                result = dateA - dateB;
                break;

            case 'myCompletionTime':
                const myDataA = getGameCompletionData(gameA.title);
                const myDataB = getGameCompletionData(gameB.title);
                const myTimeA = myDataA.customTime || 0;
                const myTimeB = myDataB.customTime || 0;

                if (!myDataA.customTime && !myDataB.customTime) { result = 0; break; }
                if (!myDataA.customTime) { result = 1; break; }
                if (!myDataB.customTime) { result = -1; break; }

                result = myTimeA - myTimeB;
                break;

            default:
                result = 0;
        }

        // Apply sort direction (reverse if descending)
        return isAsc ? result : -result;
    });

    renderGames();
}

function updateStats() {
    const completedCount = getCompletedGamesCount();
    totalGamesSpan.textContent = currentGames.length;
    filteredGamesSpan.textContent = filteredGames.length;

    const completedGamesSpan = document.getElementById('completedGames');
    if (completedGamesSpan) {
        completedGamesSpan.textContent = completedCount;
    }
}

// Game completion tracking functions
function getGameCompletionStatus(gameTitle) {
    const completedGames = JSON.parse(localStorage.getItem('completedGames') || '{}');
    const entry = completedGames[gameTitle];

    // Support both legacy boolean and new object format
    if (typeof entry === 'boolean') {
        return entry;
    }
    return entry?.completed === true;
}

function getGameCompletionData(gameTitle) {
    const completedGames = JSON.parse(localStorage.getItem('completedGames') || '{}');
    const entry = completedGames[gameTitle];

    // Normalize to object format
    if (entry === true) {
        return { completed: true, completionDate: null, customTime: null };
    }
    if (typeof entry === 'object' && entry.completed) {
        return entry;
    }
    return { completed: false, completionDate: null, customTime: null };
}

function toggleGameCompletion(gameTitle, isCompleted) {
    const completedGames = JSON.parse(localStorage.getItem('completedGames') || '{}');

    if (isCompleted) {
        // Get current MST time
        const now = new Date();
        const mstDate = new Date(now.toLocaleString('en-US', { timeZone: 'America/Denver' }));

        completedGames[gameTitle] = {
            completed: true,
            completionDate: mstDate.toISOString(),
            customTime: null
        };
    } else {
        delete completedGames[gameTitle];
    }

    localStorage.setItem('completedGames', JSON.stringify(completedGames));

    // Update the visual state of the game card
    updateGameCardVisuals(gameTitle, isCompleted);
    updateStats();
    renderGames(); // Re-render to show/hide date and custom time field

    // Update floating background highlight
    updateFloatingImageHighlight(gameTitle, isCompleted);
}

function formatCompletionDate(isoDateString) {
    if (!isoDateString) return null;

    const date = new Date(isoDateString);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

function editCompletionDate(event, gameTitle, currentDateStr) {
    event.stopPropagation(); // Prevent Steam store link from opening

    const newDate = prompt('Edit completion date (format: Jan 15, 2025):', currentDateStr);
    if (newDate && newDate !== currentDateStr) {
        updateCompletionDate(gameTitle, newDate);
    }
}

function updateCompletionDate(gameTitle, dateString) {
    const completedGames = JSON.parse(localStorage.getItem('completedGames') || '{}');
    const entry = completedGames[gameTitle];

    if (!entry || typeof entry !== 'object') return;

    try {
        const parsedDate = new Date(dateString);
        if (isNaN(parsedDate.getTime())) {
            alert('Invalid date format. Please use format like "Jan 15, 2025"');
            return;
        }

        entry.completionDate = parsedDate.toISOString();
        localStorage.setItem('completedGames', JSON.stringify(completedGames));
        renderGames();
    } catch (e) {
        alert('Invalid date format. Please use format like "Jan 15, 2025"');
    }
}

function updateCustomTime(gameTitle, timeValue) {
    const completedGames = JSON.parse(localStorage.getItem('completedGames') || '{}');
    const entry = completedGames[gameTitle];

    if (!entry || typeof entry !== 'object') return;

    const numValue = parseFloat(timeValue);
    entry.customTime = (isNaN(numValue) || numValue < 0) ? null : numValue;

    localStorage.setItem('completedGames', JSON.stringify(completedGames));
    renderGames(); // Re-render to show as static text
}

function editCustomTime(event, gameTitle, currentTime) {
    event.stopPropagation();

    const newTime = prompt('Enter your completion time in hours (decimals allowed, e.g., 45.5):', currentTime || '');
    if (newTime !== null && newTime !== currentTime) {
        updateCustomTime(gameTitle, newTime);
    }
}

function updateGameCardVisuals(gameTitle, isCompleted) {
    // Find the game card and update its visual state
    const gameCards = document.querySelectorAll('.game-card');
    gameCards.forEach(card => {
        const titleElement = card.querySelector('.game-title');
        if (titleElement && titleElement.textContent === gameTitle) {
            if (isCompleted) {
                card.classList.add('game-completed');

                // Trigger celebration animation
                card.classList.add('celebrating');
                setTimeout(() => {
                    card.classList.remove('celebrating');
                }, 1500);

                // Launch confetti from the card position
                const rect = card.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                launchConfetti(centerX, centerY);

                // Show toast notification
                showToast(gameTitle);
            } else {
                card.classList.remove('game-completed');
            }
        }
    });
}

// Screen shake effect
function triggerScreenShake() {
    document.body.classList.add('shake');
    setTimeout(() => {
        document.body.classList.remove('shake');
    }, 500);
}

// Toast notification
function showToast(gameTitle) {
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.innerHTML = `🎮 ${gameTitle} Completed!`;
    document.body.appendChild(toast);

    // Remove toast after animation completes
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Trophy celebration effect
function launchConfetti(originX, originY) {
    const canvas = document.getElementById('confetti-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const trophyCount = 15;
    const trophies = [];

    // Create trophy pieces
    for (let i = 0; i < trophyCount; i++) {
        const angle = (Math.PI * 2 * i) / trophyCount + (Math.random() - 0.5) * 0.5;
        const velocity = 4 + Math.random() * 7;

        trophies.push({
            x: originX,
            y: originY,
            vx: Math.cos(angle) * velocity,
            vy: Math.sin(angle) * velocity - Math.random() * 5,
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 15,
            size: 24,
            gravity: 0.4,
            opacity: 1
        });
    }

    let frameCount = 0;
    const maxFrames = 120;

    function animate() {
        frameCount++;

        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Update and draw trophies
        trophies.forEach(trophy => {
            // Update position
            trophy.x += trophy.vx;
            trophy.y += trophy.vy;
            trophy.vy += trophy.gravity;
            trophy.rotation += trophy.rotationSpeed;

            // Fade out towards the end
            if (frameCount > maxFrames - 40) {
                trophy.opacity -= 0.025;
            }

            // Draw trophy
            ctx.save();
            ctx.translate(trophy.x, trophy.y);
            ctx.rotate((trophy.rotation * Math.PI) / 180);
            ctx.globalAlpha = Math.max(0, trophy.opacity);
            ctx.font = `${trophy.size}px Arial`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('🏆', 0, 0);
            ctx.restore();
        });

        // Continue animation
        if (frameCount < maxFrames) {
            requestAnimationFrame(animate);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }

    requestAnimationFrame(animate);
}

function getCompletedGamesCount() {
    const completedGames = JSON.parse(localStorage.getItem('completedGames') || '{}');
    return Object.keys(completedGames).length;
}

function getCompletedGamesFromFiltered() {
    const completedGames = JSON.parse(localStorage.getItem('completedGames') || '{}');
    return filteredGames.filter(gameTitle => completedGames[gameTitle] === true).length;
}

searchInput.addEventListener('input', filterGames);
sortSelect.addEventListener('change', filterGames);
sortDirectionBtn.addEventListener('click', toggleSortDirection);

// Set default sort to "100% Complete" with ascending direction (shortest first) and apply it
sortSelect.value = 'completionistTime';
sortDirection = 'asc';
updateSortDirectionArrow();
filterGames();

console.log('About to call updateStats and renderGames...');
console.log('currentGames length:', currentGames.length);
console.log('filteredGames length:', filteredGames.length);
console.log('gameDatabase keys:', Object.keys(gameDatabase).length);

updateStats();
renderGames();

console.log(`Loaded ${currentGames.length} games!`);

// Count games with time data
const gamesWithTime = Object.values(gameDatabase).filter(game => game.timeToBeat !== null).length;
console.log(`Games with completion time data: ${gamesWithTime}/${currentGames.length}`);

// Debug function to find games without Steam images
function findGamesWithoutImages() {
    const gamesWithoutSteamId = currentGames.filter(gameName => !getSteamAppId(gameName));
    console.log(`Games without Steam App IDs (${gamesWithoutSteamId.length}):`, gamesWithoutSteamId);

    // Also create a copy-pasteable format for adding to steamAppIds
    const formatted = gamesWithoutSteamId.slice(0, 20).map(name => `    "${name}": XXXX,`).join('\n');
    console.log('Format for adding to steamAppIds:\n' + formatted);

    return gamesWithoutSteamId;
}

// Debug function to check sorting
function debugSorting() {
    console.log('=== SORTING DEBUG ===');
    const sampleGames = filteredGames.slice(0, 20);

    sampleGames.forEach(gameName => {
        const game = gameDatabase[gameName];
        const parsedTime = parseFloat(game.timeToBeat);
        console.log(`${game.title}:
            Raw timeToBeat: ${game.timeToBeat} (type: ${typeof game.timeToBeat})
            Parsed: ${parsedTime} (type: ${typeof parsedTime})
            IsNaN: ${isNaN(parsedTime)}`);
    });

    // Also check a few specific problematic games
    const problemGames = ['Portal', 'Human Fall Flat', 'Overwatch 2', 'Overwatch® 2'];
    console.log('\n=== PROBLEM GAMES ===');
    problemGames.forEach(gameName => {
        if (gameDatabase[gameName]) {
            const game = gameDatabase[gameName];
            const parsedTime = parseFloat(game.timeToBeat);
            console.log(`${game.title}: ${game.timeToBeat} → ${parsedTime}`);
        } else {
            console.log(`Game not found: ${gameName}`);
        }
    });

    // Let's also check if there are multiple entries for Overwatch
    console.log('\n=== SEARCHING FOR OVERWATCH ===');
    Object.keys(gameDatabase).forEach(gameName => {
        if (gameName.toLowerCase().includes('overwatch')) {
            const game = gameDatabase[gameName];
            console.log(`Found: ${gameName} → ${game.title}: ${game.timeToBeat} hours`);
        }
    });
}

// Function to open Steam store page for a game
function openSteamStore(gameTitle) {
    const steamAppId = steamAppIds[gameTitle];
    if (steamAppId) {
        const steamStoreUrl = `https://store.steampowered.com/app/${steamAppId}`;
        window.open(steamStoreUrl, '_blank');
    } else {
        console.log(`No Steam app ID found for: ${gameTitle}`);
    }
}

// Add debug buttons (only in development)
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    const debugButton = document.createElement('button');
    debugButton.textContent = 'Debug: Show Missing Images';
    debugButton.style.cssText = 'position: fixed; top: 10px; right: 10px; z-index: 1000; padding: 10px; background: #e74c3c; color: white; border: none; border-radius: 5px; cursor: pointer;';
    debugButton.onclick = findGamesWithoutImages;
    document.body.appendChild(debugButton);

    const sortingButton = document.createElement('button');
    sortingButton.textContent = 'Debug: Check Sorting';
    sortingButton.style.cssText = 'position: fixed; top: 60px; right: 10px; z-index: 1000; padding: 10px; background: #3498db; color: white; border: none; border-radius: 5px; cursor: pointer;';
    sortingButton.onclick = debugSorting;
    document.body.appendChild(sortingButton);
}

// Update floating background image highlight when a game's completion status changes
function updateFloatingImageHighlight(gameTitle, isCompleted) {
    const floatingImages = document.querySelectorAll('.floating-image[data-game-name]');
    floatingImages.forEach(img => {
        if (img.dataset.gameName === gameTitle) {
            if (isCompleted) {
                img.classList.add('completed-highlight');
            } else {
                img.classList.remove('completed-highlight');
            }
        }
    });
}

// Floating background images
function createFloatingBackgrounds() {
    if (!ENABLE_FLOATING_BACKGROUNDS) return;

    const container = document.getElementById('floatingBackground');
    if (!container) return;

    // Get all games that have valid Steam images (not local files)
    const gamesWithImages = Object.entries(steamAppIds)
        .filter(([name, id]) => typeof id === 'number')
        .map(([name, id]) => ({ name, id }));

    // Use all games for maximum variety and coverage
    const allGames = [...gamesWithImages];

    // Helper function to shuffle array
    function shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    // Create wrapper for animation
    const wrapper = document.createElement('div');
    wrapper.className = 'floating-background-wrapper';

    // Create two grids with DIFFERENT shuffles to avoid duplicates at seam
    for (let gridNum = 0; gridNum < 2; gridNum++) {
        const grid = document.createElement('div');
        grid.className = 'background-grid';

        // Shuffle differently for each grid
        const shuffledGames = shuffleArray(allGames);

        shuffledGames.forEach((game) => {
            const img = document.createElement('img');
            img.className = 'floating-image';
            img.src = getSteamImageUrl(game.id, 'header');
            img.dataset.gameName = game.name;

            // Check if this game is completed and add highlight
            if (getGameCompletionStatus(game.name)) {
                img.classList.add('completed-highlight');
            }

            // Handle image load errors to avoid gaps
            img.onerror = function() {
                console.log(`Failed to load image for: ${game.name} (Steam ID: ${game.id})`);
                this.style.display = 'none';
            };

            grid.appendChild(img);
        });

        wrapper.appendChild(grid);
    }

    container.appendChild(wrapper);
}

// Initialize floating backgrounds when page loads
document.addEventListener('DOMContentLoaded', () => {
    createFloatingBackgrounds();
});