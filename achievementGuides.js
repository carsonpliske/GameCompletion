// Steam Community "100% Achievement Guide" links, one per game.
// Built by Googling each title and taking the first steamcommunity.com
// guide result that actually matches the game (see
// achievement-guides-progress.json for the batch state / decision log).
//
// Values:
//   "https://steamcommunity.com/..." - guide found and verified against title
//   null                             - no achievements (nothing to guide) or
//                                      no matching guide could be found
//   (missing key)                    - not processed by the batch job yet
const achievementGuides = {
    "Rust": "https://steamcommunity.com/sharedfiles/filedetails/?id=2301696465",
    "LOCKDOWN Protocol": null, // no dedicated achievement guide found, only task/item guides
    "Counter-Strike 2": "https://steamcommunity.com/sharedfiles/filedetails/?id=3042372302",
    "Call of Duty®": "https://steamcommunity.com/sharedfiles/filedetails/?id=3072210536", // appId 2519060 currently = Modern Warfare III (2023)
    "Crab Game": "https://steamcommunity.com/sharedfiles/filedetails/?id=2938085738",
    "Call of Duty: Black Ops II - Multiplayer": "https://steamcommunity.com/sharedfiles/filedetails/?id=2970440616",
    "Stardew Valley": "https://steamcommunity.com/sharedfiles/filedetails/?id=633984426",
    "Terraria": "https://steamcommunity.com/sharedfiles/filedetails/?id=467839963",
    "Wallpaper Engine": "https://steamcommunity.com/sharedfiles/filedetails/?id=3561009741",
    "Call of Duty: Black Ops III": "https://steamcommunity.com/sharedfiles/filedetails/?id=1823149481",
    "The Witcher 3: Wild Hunt": "https://steamcommunity.com/sharedfiles/filedetails/?id=3162226469",
    "Marvel Rivals": "https://steamcommunity.com/sharedfiles/filedetails/?id=3620513554",
    "Fall Guys": "https://steamcommunity.com/sharedfiles/filedetails/?id=2437955775",
    "The Witcher: Enhanced Edition": null, // no Steam achievements on this app (confirmed via achievement-recheck data)
    "Call of Duty: Black Ops II - Zombies": "https://steamcommunity.com/sharedfiles/filedetails/?id=2448124567",
    "Raft": "https://steamcommunity.com/sharedfiles/filedetails/?id=2257581320",
    "Borderlands 2": "https://steamcommunity.com/sharedfiles/filedetails/?id=1295175782",
    "Call of Duty: Black Ops": "https://steamcommunity.com/sharedfiles/filedetails/?id=765259351",
    "South Park The Fractured But Whole": "https://steamcommunity.com/sharedfiles/filedetails/?id=1173560636",
    "MultiVersus": "https://steamcommunity.com/sharedfiles/filedetails/?id=2837313121",

    // Batch 2 (games index 20-46 in gamesList, achievement-having only)
    "Call of Duty: Black Ops II": "https://steamcommunity.com/sharedfiles/filedetails/?id=3404598541",
    "Garry's Mod": "https://steamcommunity.com/sharedfiles/filedetails/?id=2911272652",
    "Cyberpunk 2077": "https://steamcommunity.com/sharedfiles/filedetails/?id=2314663910",
    "South Park™: The Stick of Truth™": "https://steamcommunity.com/sharedfiles/filedetails/?id=578106282",
    "Among Us": "https://steamcommunity.com/sharedfiles/filedetails/?id=2983408921",
    "Deceit": "https://steamcommunity.com/sharedfiles/filedetails/?id=1431979214",
    "Overwatch® 2": "https://steamcommunity.com/sharedfiles/filedetails/?id=3019779332",
    "The Witcher 2: Assassins of Kings Enhanced Edition": "https://steamcommunity.com/sharedfiles/filedetails/?id=2406391763",
    "Borderlands GOTY": "https://steamcommunity.com/sharedfiles/filedetails/?id=3402153333",
    "Slime Rancher": "https://steamcommunity.com/sharedfiles/filedetails/?id=2655865303",
    "Portal 2": "https://steamcommunity.com/sharedfiles/filedetails/?id=2276387013",
    "Call of Duty: Modern Warfare 2 (2009)": "https://steamcommunity.com/sharedfiles/filedetails/?id=627219750", // guide text is Russian-language despite Steam's English tag - flagged for review
    "Call of Duty®: Modern Warfare® 3 (2011)": null, // appId 115300 redirects oddly; real hub (42680) guide was removed for content violations
    "Destroy All Humans!": "https://steamcommunity.com/sharedfiles/filedetails/?id=3600546826",
    "Palworld": "https://steamcommunity.com/sharedfiles/filedetails/?id=3277054444",
    "The Forest": "https://steamcommunity.com/sharedfiles/filedetails/?id=2829834477",
    "Marvel's Spider-Man Remastered": "https://steamcommunity.com/sharedfiles/filedetails/?id=2849429351",
    "Mad Max": "https://steamcommunity.com/sharedfiles/filedetails/?id=3157776055",
    "Dungeon Defenders II": null, // no candidate guide clearly confirmed as full/100% coverage
    "Castle Crashers": "https://steamcommunity.com/sharedfiles/filedetails/?id=3488924256",

    // Batch 3 (games index 47-67 in gamesList, achievement-having only)
    "The Walking Dead": "https://steamcommunity.com/sharedfiles/filedetails/?id=3407070588",
    "Life is Strange 2": "https://steamcommunity.com/sharedfiles/filedetails/?id=2440421296",
    "Life is Strange™": "https://steamcommunity.com/sharedfiles/filedetails/?id=2437650442",
    "Cookie Clicker": "https://steamcommunity.com/sharedfiles/filedetails/?id=3028557134",
    "PUBG: BATTLEGROUNDS": "https://steamcommunity.com/sharedfiles/filedetails/?id=3372502532",
    "Unturned": "https://steamcommunity.com/sharedfiles/filedetails/?id=1111775106", // guide is titled "(Mostly Complete)" and covers fewer achievements than our current count - may be outdated
    "Call of Duty®: Modern Warfare® II - Open Beta": null, // appId 1962660 now redirects to the generic yearly Call of Duty hub, no dedicated guide for the old open beta
    "Life is Strange: Before the Storm": "https://steamcommunity.com/sharedfiles/filedetails/?id=2440365441",
    "It Takes Two": "https://steamcommunity.com/sharedfiles/filedetails/?id=3538329623",
    "Blood and Bacon": "https://steamcommunity.com/sharedfiles/filedetails/?id=616880954",
    "Quake Champions": "https://steamcommunity.com/sharedfiles/filedetails/?id=1410537814",
    "Detroit: Become Human": "https://steamcommunity.com/sharedfiles/filedetails/?id=2163004098",
    "The Walking Dead: A New Frontier": "https://steamcommunity.com/sharedfiles/filedetails/?id=827254889",
    "House Party": "https://steamcommunity.com/sharedfiles/filedetails/?id=1568769295",
    "The Walking Dead: Season Two": "https://steamcommunity.com/sharedfiles/filedetails/?id=2217271627",
    "INSIDE": "https://steamcommunity.com/sharedfiles/filedetails/?id=2147616108",
    "The Quarry": "https://steamcommunity.com/sharedfiles/filedetails/?id=3539072525",
    "Golf With Your Friends": "https://steamcommunity.com/sharedfiles/filedetails/?id=2167218162", // guide's own description cites fewer achievements than our current count - may be outdated
    "Portal": "https://steamcommunity.com/sharedfiles/filedetails/?id=2008271826",
    "HELLDIVERS™ 2": "https://steamcommunity.com/sharedfiles/filedetails/?id=3163306439",

    // Batch 4 (games index 68-94 in gamesList, achievement-having only)
    "A Way Out": null, // every EN/DE/IT guide found was removed from Steam Community for content-guideline violations
    "Phasmophobia": "https://steamcommunity.com/sharedfiles/filedetails/?id=3509941831",
    "Clustertruck": "https://steamcommunity.com/sharedfiles/filedetails/?id=2174066799",
    "Human Fall Flat": "https://steamcommunity.com/sharedfiles/filedetails/?id=3246543535",
    "Call of Duty: WWII - Multiplayer": "https://steamcommunity.com/sharedfiles/filedetails/?id=2594427791",
    "ARK: Survival Evolved": "https://steamcommunity.com/sharedfiles/filedetails/?id=2830103255", // guide relies on console commands to unlock some achievements rather than legitimate play
    "LIMBO": "https://steamcommunity.com/sharedfiles/filedetails/?id=3455894762",
    "Chained Together": "https://steamcommunity.com/sharedfiles/filedetails/?id=3287244371",
    "Hello Neighbor": "https://steamcommunity.com/sharedfiles/filedetails/?id=3357345140",
    "Grand Theft Auto V Legacy": "https://steamcommunity.com/sharedfiles/filedetails/?id=433639891",
    "Apex Legends": null, // Achievements-tagged guides page only had joke/troll guides, no real achievement guide
    "Portal with RTX": "https://steamcommunity.com/sharedfiles/filedetails/?id=3332544704",
    "BattleBlock Theater": "https://steamcommunity.com/sharedfiles/filedetails/?id=3688932687",
    "STAR WARS Jedi: Fallen Order™": "https://steamcommunity.com/sharedfiles/filedetails/?id=2853959679",
    "Call of Duty: Infinite Warfare": null, // only Zombies-map-specific guides found, no full-game achievement guide
    "Call of Duty: Ghosts": "https://steamcommunity.com/sharedfiles/filedetails/?id=3289516881",
    "PEAK": "https://steamcommunity.com/sharedfiles/filedetails/?id=3503217688", // NOTE: steamAppIds["PEAK"] in script.js is "peak.jpg" (a local image path), not a numeric App ID like every other entry - flagged separately, may affect other features (e.g. Steam page link)
    "Borderlands GOTY Enhanced": "https://steamcommunity.com/sharedfiles/filedetails/?id=3402153333", // shares appId 8980 with "Borderlands GOTY" above - same guide
    "Tom Clancy's Rainbow Six® Siege X": null, // Achievements-tagged guides page only had joke guides, no real achievement guide
    "Plants vs. Zombies™ Garden Warfare 2: Deluxe Edition": "https://steamcommunity.com/sharedfiles/filedetails/?id=2879994844",

    // Batch 5 (games index 95-118 in gamesList, achievement-having only)
    "Escape Memoirs: Mini Stories": "https://steamcommunity.com/sharedfiles/filedetails/?id=2870510571",
    "Shower With Your Dad Simulator 2015: Do You Still Shower With Your Dad": null, // only partial/ambiguous guides found, none confirmed full/100%
    "Youtubers Life": "https://steamcommunity.com/sharedfiles/filedetails/?id=2744634137",
    "Hogwarts Legacy": "https://steamcommunity.com/sharedfiles/filedetails/?id=2930315982",
    "Content Warning": "https://steamcommunity.com/sharedfiles/filedetails/?id=3639888300", // title is "100% Achievements - Content Warning"; not independently re-verified (Steam rate limit)
    "Spyro™ Reignited Trilogy": "https://steamcommunity.com/sharedfiles/filedetails/?id=1854697162",
    "Bloons TD 6": "https://steamcommunity.com/sharedfiles/filedetails/?id=2998708024",
    "In Silence": null, // only candidate guide is marked "[NOT UPDATED]" and covers only some achievements
    "Red Dead Redemption 2": "https://steamcommunity.com/sharedfiles/filedetails/?id=1929161080",
    "LEGO® Builder's Journey": "https://steamcommunity.com/sharedfiles/filedetails/?id=3497662893",
    "Call of Duty: Ghosts - Multiplayer": "https://steamcommunity.com/sharedfiles/filedetails/?id=194177055", // achievement-name reference list rather than a strategy guide, but best available
    "Splitgate": "https://steamcommunity.com/sharedfiles/filedetails/?id=2409024676",
    "Fallout 4": "https://steamcommunity.com/sharedfiles/filedetails/?id=556211099",
    "PowerWash Simulator": "https://steamcommunity.com/sharedfiles/filedetails/?id=2835339832",
    "Team Fortress 2": null, // no comprehensive guide found; top guides are class/weapon-specific (520 achievements makes a true 100% guide rare)
    "Super Meat Boy": "https://steamcommunity.com/sharedfiles/filedetails/?id=114073886",
    "Left 4 Dead 2": "https://steamcommunity.com/sharedfiles/filedetails/?id=2419666451",
    "Dungeon Defenders": "https://steamcommunity.com/sharedfiles/filedetails/?id=3412098381",
    "Pacify": "https://steamcommunity.com/sharedfiles/filedetails/?id=1690213025",
    "NBA 2K24": null, // guides page only had player-specific/general overview guides, nothing achievement-focused

    // Batch 6 (games index 119-142 in gamesList, achievement-having only)
    "Never Alone (Kisima Ingitchuna)": "https://steamcommunity.com/sharedfiles/filedetails/?id=2856222804",
    "What Remains of Edith Finch": "https://steamcommunity.com/sharedfiles/filedetails/?id=962810386",
    "MiniRoyale": null, // no achievement-focused guides exist, only codes/perks/troubleshooting guides
    "Fallout: New Vegas": "https://steamcommunity.com/sharedfiles/filedetails/?id=2523574006",
    "Getting Over It with Bennett Foddy": "https://steamcommunity.com/sharedfiles/filedetails/?id=3030118092",
    "Fears to Fathom - Carson House": "https://steamcommunity.com/sharedfiles/filedetails/?id=2916189428",
    "Fears to Fathom - Home Alone": "https://steamcommunity.com/sharedfiles/filedetails/?id=3401347941",
    "Fears to Fathom - Ironbark Lookout": "https://steamcommunity.com/sharedfiles/filedetails/?id=3055844056",
    "Fears to Fathom - Norwood Hitchhike": "https://steamcommunity.com/sharedfiles/filedetails/?id=3401375635",
    "Fears to Fathom - Woodbury Getaway": "https://steamcommunity.com/sharedfiles/filedetails/?id=3329905311",
    "Devolverland Expo": "https://steamcommunity.com/sharedfiles/filedetails/?id=2172981726",
    "Donut County": "https://steamcommunity.com/sharedfiles/filedetails/?id=1497314573",
    "Until Dawn™": "https://steamcommunity.com/sharedfiles/filedetails/?id=3634188309", // picked the guide explicitly titled for the 2024 PC remake, matching this project's appId
    "Escape the Backrooms": "https://steamcommunity.com/sharedfiles/filedetails/?id=2917649860",
    "UNO": "https://steamcommunity.com/sharedfiles/filedetails/?id=3477842646",
    "God of War": "https://steamcommunity.com/sharedfiles/filedetails/?id=2719012872",
    "Halo: The Master Chief Collection": "https://steamcommunity.com/sharedfiles/filedetails/?id=2117635055",
    "Lara Croft GO": "https://steamcommunity.com/sharedfiles/filedetails/?id=2536258468",
    "Call of Duty: Advanced Warfare - Multiplayer": "https://steamcommunity.com/sharedfiles/filedetails/?id=337130549", // steamAppIds has this mapped to the WRONG appId (209650, the base game) - guide was matched against the correct real Multiplayer appId (209660) instead; steamAppIds itself needs fixing separately
    "Welcome to the Game": null, // best candidate's own page errored on repeated fetch and a search snippet cited a mismatched achievement count (26 vs our 11) - likely wrong game/version, discarded

    // Batch 7 (games index 143-167 in gamesList, achievement-having only)
    "Call of Duty: Modern Warfare 2 (2009) - Multiplayer": null, // guides page only has tactics/technical guides, nothing achievement-focused
    "Dead by Daylight": "https://steamcommunity.com/sharedfiles/filedetails/?id=2916052837",
    "60 Seconds! Reatomized": "https://steamcommunity.com/sharedfiles/filedetails/?id=3649919946", // Turkish-language; the only English 100% guide found was removed from Steam Community
    "Hand Simulator: Survival": "https://steamcommunity.com/sharedfiles/filedetails/?id=2816716693",
    "The Walking Dead: The Final Season": "https://steamcommunity.com/sharedfiles/filedetails/?id=2085756129",
    "Little Nightmares": "https://steamcommunity.com/sharedfiles/filedetails/?id=2903326636",
    "Little Nightmares Enhanced Edition": "https://steamcommunity.com/sharedfiles/filedetails/?id=2903326636",
    "Dead Rising": "https://steamcommunity.com/sharedfiles/filedetails/?id=2976043301",
    "Call of Duty: Black Ops - Multiplayer": "https://steamcommunity.com/sharedfiles/filedetails/?id=3454676947",
    "Tomb Raider": "https://steamcommunity.com/sharedfiles/filedetails/?id=2395381409", // German-language; the English candidate found appears removed/erroring
    "Fallout Shelter": "https://steamcommunity.com/sharedfiles/filedetails/?id=2819269676",
    "For Honor": "https://steamcommunity.com/sharedfiles/filedetails/?id=2378875973",
    "Drug Dealer Simulator": "https://steamcommunity.com/sharedfiles/filedetails/?id=2957481102",
    "SEGA Mega Drive & Genesis Classics": "https://steamcommunity.com/sharedfiles/filedetails/?id=1398500429",
    "Goat Simulator": "https://steamcommunity.com/sharedfiles/filedetails/?id=243403877",
    "RAGE": "https://steamcommunity.com/sharedfiles/filedetails/?id=527061095",
    "DOOM": "https://steamcommunity.com/sharedfiles/filedetails/?id=714628370",
    "Cuphead": "https://steamcommunity.com/sharedfiles/filedetails/?id=2838114195",
    "PC Building Simulator": "https://steamcommunity.com/sharedfiles/filedetails/?id=1794584293",
    "Geometry Dash": "https://steamcommunity.com/sharedfiles/filedetails/?id=2656502034",
    "Plants vs. Zombies: Game of the Year": "https://steamcommunity.com/sharedfiles/filedetails/?id=3481227943",

    // Batch 8 (games index 169-195 in gamesList, achievement-having only)
    "Scott Pilgrim vs The World": "https://steamcommunity.com/sharedfiles/filedetails/?id=2913962771",
    "Call of Duty®: Black Ops Cold War": "https://steamcommunity.com/sharedfiles/filedetails/?id=3137442608",
    "Overcooked": "https://steamcommunity.com/sharedfiles/filedetails/?id=2996014192",
    "60 Parsecs!": "https://steamcommunity.com/sharedfiles/filedetails/?id=1554307490", // best available achievement guide; not explicitly titled "100%"
    "Overcooked! 2": "https://steamcommunity.com/sharedfiles/filedetails/?id=2252481459",
    "Call of Duty: WWII": "https://steamcommunity.com/sharedfiles/filedetails/?id=1268282732",
    "SpeedRunners": "https://steamcommunity.com/sharedfiles/filedetails/?id=2843972715",
    "Call of Duty: Advanced Warfare": "https://steamcommunity.com/sharedfiles/filedetails/?id=3327304052", // guide's own text says "WIP" (work in progress)
    "Call of Duty®: Modern Warfare® 3 (2011) - Multiplayer": null, // shares appId 115300 with the base title, which redirects to the store page instead of a guides list (same issue found in batch 2)
    "Just Cause 3": "https://steamcommunity.com/sharedfiles/filedetails/?id=567535808",
    "Rust - Staging Branch": "https://steamcommunity.com/sharedfiles/filedetails/?id=2301696465", // shares appId 252490 with "Rust" above - same guide reused
    "7 Days to Die": "https://steamcommunity.com/sharedfiles/filedetails/?id=3237304026",
    "Adventure Time: Pirates of the Enchiridion": "https://steamcommunity.com/sharedfiles/filedetails/?id=2961730890", // steamAppIds bug: mapped to 819500 ("Fear The Wolves", unrelated game); guide matched against correct real appId 728240 instead
    "Alan Wake": "https://steamcommunity.com/sharedfiles/filedetails/?id=381121751",
    "Alan Wake's American Nightmare": "https://steamcommunity.com/sharedfiles/filedetails/?id=1397385586",
    "Alien: Isolation": "https://steamcommunity.com/sharedfiles/filedetails/?id=1485774027",
    "American Truck Simulator": "https://steamcommunity.com/sharedfiles/filedetails/?id=1602526408",
    "Amnesia: The Dark Descent": "https://steamcommunity.com/sharedfiles/filedetails/?id=2981454702",
    "Arma 3": "https://steamcommunity.com/sharedfiles/filedetails/?id=2637942115",
    "Assassin's Creed Revelations": "https://steamcommunity.com/sharedfiles/filedetails/?id=3411505049",

    // Batch 9 (games index 196-215 in gamesList, achievement-having only)
    "Assassin's Creed® III": "https://steamcommunity.com/sharedfiles/filedetails/?id=3430611047",
    "Assassin's Creed III Remastered": "https://steamcommunity.com/sharedfiles/filedetails/?id=3469240607",
    "Assassin's Creed Liberation": "https://steamcommunity.com/sharedfiles/filedetails/?id=3469374668",
    "Assassin's Creed IV Black Flag": "https://steamcommunity.com/sharedfiles/filedetails/?id=3699651191",
    "Assassin's Creed Freedom Cry": "https://steamcommunity.com/sharedfiles/filedetails/?id=3574421866",
    "Assassin's Creed Unity": "https://steamcommunity.com/sharedfiles/filedetails/?id=3385538961", // not independently re-verified (guides page blocked/rate-limited); from WebSearch fallback
    "Assassin's Creed Syndicate": "https://steamcommunity.com/sharedfiles/filedetails/?id=3607669901",
    "Assassin's Creed Odyssey": "https://steamcommunity.com/sharedfiles/filedetails/?id=2707139190", // not independently re-verified (guides page blocked/rate-limited); from WebSearch fallback
    "Assassin's Creed Origins": "https://steamcommunity.com/sharedfiles/filedetails/?id=3452464548",
    "Assassin's Creed Rogue": "https://steamcommunity.com/sharedfiles/filedetails/?id=3448848242", // not independently re-verified (guides page blocked/rate-limited); from WebSearch fallback
    "Assassin's Creed Valhalla": "https://steamcommunity.com/sharedfiles/filedetails/?id=3370462114", // not independently re-verified (guides page blocked/rate-limited); from WebSearch fallback
    "Assassin's Creed® Chronicles: China": "https://steamcommunity.com/sharedfiles/filedetails/?id=3521868938", // not independently re-verified (guides page blocked/rate-limited); from WebSearch fallback
    "Assassin's Creed® Chronicles: India": "https://steamcommunity.com/sharedfiles/filedetails/?id=3442077745", // Spanish-language; no English candidate exists
    "Assassin's Creed® Chronicles: Russia": null, // only candidate (Russian) hit persistent rate-limit errors and may have been removed from Steam Community - discarded rather than risk a dead link
    "Back 4 Blood": "https://steamcommunity.com/sharedfiles/filedetails/?id=2634664014",
    "Batman - The Telltale Series": "https://steamcommunity.com/sharedfiles/filedetails/?id=3252041860",
    "Batman: Arkham Asylum GOTY Edition": "https://steamcommunity.com/sharedfiles/filedetails/?id=2434426635",
    "Batman: Arkham City GOTY": "https://steamcommunity.com/sharedfiles/filedetails/?id=2771214926", // Part 1 of 2 by the same author; Part 2 is id=2772379636
    "Batman™: Arkham Origins": "https://steamcommunity.com/sharedfiles/filedetails/?id=2406548142",
    "Batman™: Arkham Knight": "https://steamcommunity.com/sharedfiles/filedetails/?id=3534500522", // Part 1 of 2 by the same author; Part 2 is id=3534638189
    "Batman: The Enemy Within - The Telltale Series": "https://steamcommunity.com/sharedfiles/filedetails/?id=3324033669", // guide calls itself "just something quick" but is the only English candidate covering all 30
    "Batman™: Arkham Origins Blackgate - Deluxe Edition": "https://steamcommunity.com/sharedfiles/filedetails/?id=3260282318", // Russian-language; verified 30/30, no English candidate found
    "Battlefield 3™": "https://steamcommunity.com/sharedfiles/filedetails/?id=3622996191",
    "Battlefield 4™": "https://steamcommunity.com/sharedfiles/filedetails/?id=3506467914",
    "Battlefield™ 1": "https://steamcommunity.com/sharedfiles/filedetails/?id=3431824041", // Ukrainian-language, via WebSearch fallback; English guides page was mostly joke guides
    "Battlefield™ 2042": "https://steamcommunity.com/sharedfiles/filedetails/?id=2654748033",
    "Battlefield™ Hardline": "https://steamcommunity.com/sharedfiles/filedetails/?id=3312987199", // via WebSearch fallback; English guides page only had 2 unrelated technical guides
    "Battlefield™ V": "https://steamcommunity.com/sharedfiles/filedetails/?id=2594447249",
    "BioShock Remastered": "https://steamcommunity.com/sharedfiles/filedetails/?id=2228423965",
    "BioShock 2": null, // no full-coverage candidate found for the original (appId 8850); other hits were for BioShock 2 Remastered instead
    "BioShock 2 Remastered": "https://steamcommunity.com/sharedfiles/filedetails/?id=2371788689", // verified Remastered-specific guide (53 achievements)
    "BioShock Infinite": "https://steamcommunity.com/sharedfiles/filedetails/?id=2388948486",
    "Borderlands 3": "https://steamcommunity.com/sharedfiles/filedetails/?id=2023618394", // via WebSearch fallback; guides page blocked by mature-content gate
    "Borderlands: The Pre-Sequel": "https://steamcommunity.com/sharedfiles/filedetails/?id=413515219",
    "Brotato": "https://steamcommunity.com/sharedfiles/filedetails/?id=2896126855", // best available; covers winning with every character/difficulty rather than a line-by-line 179-achievement checklist
    "Burnout™ Paradise Remastered": "https://steamcommunity.com/sharedfiles/filedetails/?id=2227749512", // verified "Total: 56 achievements"
    "Call of Duty: Modern Warfare Remastered - Multiplayer": "https://steamcommunity.com/sharedfiles/filedetails/?id=794078126", // shares appId 393080 with the base title below
    "Call of Duty: Modern Warfare Remastered (2017)": "https://steamcommunity.com/sharedfiles/filedetails/?id=794078126",
    "Call of Duty®: Modern Warfare®": "https://steamcommunity.com/sharedfiles/filedetails/?id=2944398536", // verified "all 27 achievements"
    "Call of Duty®: Modern Warfare® II": "https://steamcommunity.com/sharedfiles/filedetails/?id=2877726892", // not independently re-verified (rate-limited); appId 1938090 is a shared/evolving CoD hub appId, same issue class as the "Call of Duty®" entry above
    "Call of Duty®: Modern Warfare® III": "https://steamcommunity.com/sharedfiles/filedetails/?id=3562904413", // bilingual EN/RU; verified exactly 39 achievements (14 online + 25 offline)
    "Call of Duty®: Vanguard": null, // only candidate (Russian) is campaign-only, doesn't cover all 44 (MP/Zombies missing)
    "Capcom Fighting Collection": null, // only Achievements-tagged guide is a secrets/unlockables guide, not a dedicated achievement checklist
    "Celeste": "https://steamcommunity.com/sharedfiles/filedetails/?id=3755648733",
    "Contra Anniversary Collection": "https://steamcommunity.com/sharedfiles/filedetails/?id=3163552287", // bilingual EN/RU; claims 100% but visible content only clearly covers ~9-10 of 16 achievements - best available
    "Control Ultimate Edition": "https://steamcommunity.com/sharedfiles/filedetails/?id=2407224212",
    "Counter-Strike: Source": "https://steamcommunity.com/sharedfiles/filedetails/?id=239865243", // notes a few friend/clan-based achievements are unobtainable via its method - best available
    "Crash Bandicoot™ N. Sane Trilogy": "https://steamcommunity.com/sharedfiles/filedetails/?id=3430571654", // not independently re-verified (rate-limited)
    "Crusader Kings II": null, // only candidates are single-playthrough guides; one explicitly says getting every achievement in one playthrough is impossible - no comprehensive 161-achievement catalog found
    "Cult of the Lamb": "https://steamcommunity.com/sharedfiles/filedetails/?id=3125472409",
    "Darkest Dungeon®": "https://steamcommunity.com/sharedfiles/filedetails/?id=1774409726",
    "Days Gone": "https://steamcommunity.com/sharedfiles/filedetails/?id=3241687245",
    "DayZ": "https://steamcommunity.com/sharedfiles/filedetails/?id=2928114312", // explicitly covers all 13 achievements
    "Dead Cells": "https://steamcommunity.com/sharedfiles/filedetails/?id=951106283", // highest-rated candidate but covers only 72 of the current 121 achievements (predates later DLC) - best available
    "Dead Island Definitive Edition": "https://steamcommunity.com/sharedfiles/filedetails/?id=3596979840",
    "Dead Island Retro Revenge": "https://steamcommunity.com/sharedfiles/filedetails/?id=3460851375",
    "Dead Island Riptide Definitive Edition": "https://steamcommunity.com/sharedfiles/filedetails/?id=2024213169",
    "Dead Rising 2": "https://steamcommunity.com/sharedfiles/filedetails/?id=627964407",
    "Dead Rising 2: Off the Record": "https://steamcommunity.com/sharedfiles/filedetails/?id=460877215", // explicitly covers all 50 achievements
    "Dead Rising 3": "https://steamcommunity.com/sharedfiles/filedetails/?id=538644930", // covers all 88 achievements incl. DLC
    "Dead Rising 4": "https://steamcommunity.com/sharedfiles/filedetails/?id=883710001",
    "Dead Space (2008)": "https://steamcommunity.com/sharedfiles/filedetails/?id=3389709405", // 2023 remake guide
    "Dead Space™ 3": "https://steamcommunity.com/sharedfiles/filedetails/?id=2431213320", // guide's own title says "93% Achievements Guide", not full 100% - best available
    "Deep Rock Galactic": "https://steamcommunity.com/sharedfiles/filedetails/?id=2142645355",
    "Deus Ex: Human Revolution - Director's Cut": "https://steamcommunity.com/sharedfiles/filedetails/?id=188845822", // covers base game + Missing Link DLC
    "Deus Ex: The Fall": "https://steamcommunity.com/sharedfiles/filedetails/?id=239769146",
    "Deus Ex: Mankind Divided™": "https://steamcommunity.com/sharedfiles/filedetails/?id=1237185018",
    "Dishonored": "https://steamcommunity.com/sharedfiles/filedetails/?id=3120345624",
    "Dishonored 2": "https://steamcommunity.com/sharedfiles/filedetails/?id=1319683757", // explicitly covers all 50
    "DOOM + DOOM II": "https://steamcommunity.com/sharedfiles/filedetails/?id=3305387404",
    "DOOM 3: BFG Edition": "https://steamcommunity.com/sharedfiles/filedetails/?id=951884820",
    "DOOM 64": "https://steamcommunity.com/sharedfiles/filedetails/?id=2029198216",
    "DOOM Eternal": "https://steamcommunity.com/sharedfiles/filedetails/?id=2031543270", // explicitly covers 100% including DLC
    "Dying Light": "https://steamcommunity.com/sharedfiles/filedetails/?id=2806493113",
    "Dying Light 2: Reloaded Edition": "https://steamcommunity.com/sharedfiles/filedetails/?id=2741848054",
    "Enter the Gungeon": "https://steamcommunity.com/sharedfiles/filedetails/?id=674927619",
    "Escape Dead Island": "https://steamcommunity.com/sharedfiles/filedetails/?id=2655583306", // Portuguese-language; English guides page had only a collectibles guide and a low-rated Russian one
    "Euro Truck Simulator 2": "https://steamcommunity.com/sharedfiles/filedetails/?id=2302644846",
    "Exit the Gungeon": null, // only candidates are partial quest/hat guides; the one Spanish "100%" candidate was removed from Steam Community
    "Fable Anniversary": "https://steamcommunity.com/sharedfiles/filedetails/?id=565825185",
    "Fallout 76": "https://steamcommunity.com/sharedfiles/filedetails/?id=3327753534", // covers all 72
    "Far Cry 4": "https://steamcommunity.com/sharedfiles/filedetails/?id=3407658127",
    "Far Cry 5": "https://steamcommunity.com/sharedfiles/filedetails/?id=3293256869", // explicitly covers all 72
    "Far Cry 6": "https://steamcommunity.com/sharedfiles/filedetails/?id=3557981846",
    "Far Cry New Dawn": "https://steamcommunity.com/sharedfiles/filedetails/?id=3782052370",
    "Far Cry Primal": "https://steamcommunity.com/sharedfiles/filedetails/?id=3544474421",
    "Far Cry® 3": "https://steamcommunity.com/sharedfiles/filedetails/?id=3409561575", // appId 220240, same as the unadorned "Far Cry 3" key
    "Far Cry® 3 Blood Dragon": "https://steamcommunity.com/sharedfiles/filedetails/?id=3426371707", // via WebSearch fallback; direct guides-page fetch was blocked/empty
    "FINAL FANTASY": "https://steamcommunity.com/sharedfiles/filedetails/?id=2576296631", // covers all 24
    "FINAL FANTASY II": "https://steamcommunity.com/sharedfiles/filedetails/?id=2599601129",
    "FINAL FANTASY III": "https://steamcommunity.com/sharedfiles/filedetails/?id=3258543619",
    "FINAL FANTASY IV": "https://steamcommunity.com/sharedfiles/filedetails/?id=3422443935",
    "FINAL FANTASY TYPE-0 HD": "https://steamcommunity.com/sharedfiles/filedetails/?id=502347510",
    "FINAL FANTASY V": "https://steamcommunity.com/sharedfiles/filedetails/?id=3708754395",
    "FINAL FANTASY VI": "https://steamcommunity.com/sharedfiles/filedetails/?id=576830786",
    "FINAL FANTASY VII": "https://steamcommunity.com/sharedfiles/filedetails/?id=2671340510",
    "FINAL FANTASY IX": "https://steamcommunity.com/sharedfiles/filedetails/?id=665159772",
    "FINAL FANTASY XII THE ZODIAC AGE": "https://steamcommunity.com/sharedfiles/filedetails/?id=1807312692", // Portuguese-language; cites 41 achievements matching our count, no English candidate found
    "FINAL FANTASY XIII": "https://steamcommunity.com/sharedfiles/filedetails/?id=3016426267", // not independently re-verified for full 35-achievement coverage - best available
    "FINAL FANTASY XIII-2": "https://steamcommunity.com/sharedfiles/filedetails/?id=403438295",
    "FINAL FANTASY XV WINDOWS EDITION": "https://steamcommunity.com/sharedfiles/filedetails/?id=3781508643", // explicitly routes all 97 achievements
    "Firewatch": "https://steamcommunity.com/sharedfiles/filedetails/?id=3557733116", // via WebSearch fallback; guides page blocked by content-warning gate
    "Friday the 13th: The Game": "https://steamcommunity.com/sharedfiles/filedetails/?id=934619608",
    "Gang Beasts": "https://steamcommunity.com/sharedfiles/filedetails/?id=2989788349", // bilingual ESP/ENG
    "Garfield Kart - Furious Racing": "https://steamcommunity.com/sharedfiles/filedetails/?id=2356463949", // explicitly covers all 14
    "Genital Jousting": "https://steamcommunity.com/sharedfiles/filedetails/?id=3674095836", // via WebSearch fallback; guides page blocked by content-warning gate
    "Golf It!": "https://steamcommunity.com/sharedfiles/filedetails/?id=1119640988", // bilingual FR/EN
    "Goose Goose Duck": "https://steamcommunity.com/sharedfiles/filedetails/?id=2512970732",
    "Grand Theft Auto III - The Definitive Edition": "https://steamcommunity.com/sharedfiles/filedetails/?id=2920501193",
    "Grand Theft Auto IV: The Complete Edition": "https://steamcommunity.com/sharedfiles/filedetails/?id=2030973451", // explicitly all 55 incl. both DLCs
    "Grand Theft Auto V Enhanced": "https://steamcommunity.com/sharedfiles/filedetails/?id=433639891", // same appId 271590/guide as "Grand Theft Auto V Legacy"
    "Grand Theft Auto: San Andreas - The Definitive Edition": "https://steamcommunity.com/sharedfiles/filedetails/?id=2920479716",
    "Grand Theft Auto: Vice City - The Definitive Edition": "https://steamcommunity.com/sharedfiles/filedetails/?id=3263202083",
    "Graveyard Keeper": "https://steamcommunity.com/sharedfiles/filedetails/?id=2525303394", // covers base game + all DLCs
    "GRIS": "https://steamcommunity.com/sharedfiles/filedetails/?id=1590842073",
    "Grounded": "https://steamcommunity.com/sharedfiles/filedetails/?id=3460004904",
    "Grow Home": "https://steamcommunity.com/sharedfiles/filedetails/?id=1193545865",
    "Grow Up": "https://steamcommunity.com/sharedfiles/filedetails/?id=3009285742", // user-provided link
    "GTFO": "https://steamcommunity.com/sharedfiles/filedetails/?id=3713133597", // via WebSearch fallback; guides page blocked by content-warning gate
    "Hades": "https://steamcommunity.com/sharedfiles/filedetails/?id=2231460116", // explicitly covers all 49
    "Half-Life 2": "https://steamcommunity.com/sharedfiles/filedetails/?id=2914589573",
    "Halo Infinite": "https://steamcommunity.com/sharedfiles/filedetails/?id=2655659575",
    "Halo Wars: Definitive Edition": null, // only a manual, collectibles guide, and Legendary-missions guide exist - no comprehensive achievement guide found
    "Halo: Spartan Assault": "https://steamcommunity.com/sharedfiles/filedetails/?id=2564660678",
    "Halo: Spartan Strike": "https://steamcommunity.com/sharedfiles/filedetails/?id=1540983401",
    "Hand Simulator": "https://steamcommunity.com/sharedfiles/filedetails/?id=2599589402",
    "Heavy Rain": "https://steamcommunity.com/sharedfiles/filedetails/?id=2134288186", // via WebSearch fallback; guides page blocked by content-warning gate
    "Hellblade: Senua's Sacrifice": "https://steamcommunity.com/sharedfiles/filedetails/?id=2158666832",
    "Hellblade: Senua's Sacrifice VR Edition": null, // Achievements+English filter returned zero results for this VR-specific appId; only the non-VR base game has a guide
    "HELLDIVERS™": "https://steamcommunity.com/sharedfiles/filedetails/?id=832415494",
    "Hitman: Absolution": "https://steamcommunity.com/sharedfiles/filedetails/?id=3273545143",
    "Hitman GO: Definitive Edition": "https://steamcommunity.com/sharedfiles/filedetails/?id=2040823770", // best available, not explicitly titled "100%"
    "HITMAN World of Assassination": "https://steamcommunity.com/sharedfiles/filedetails/?id=2729566346", // guide predates the HITMAN 3->World of Assassination rebrand, same 83-achievement set
    "HITMAN™": "https://steamcommunity.com/sharedfiles/filedetails/?id=1476269427",
    "HITMAN™ 2": "https://steamcommunity.com/sharedfiles/filedetails/?id=1560836609", // via WebSearch fallback; didn't surface on the direct guides-page listing
    "Hollow Knight": "https://steamcommunity.com/sharedfiles/filedetails/?id=883989558",
    "Hollow Knight: Silksong": "https://steamcommunity.com/sharedfiles/filedetails/?id=3562089042",
    "Horizon Zero Dawn™ Complete Edition": "https://steamcommunity.com/sharedfiles/filedetails/?id=2190967879",
    "Hotline Miami": "https://steamcommunity.com/sharedfiles/filedetails/?id=1301482862",
    "Hotline Miami 2: Wrong Number": "https://steamcommunity.com/sharedfiles/filedetails/?id=408025575",
    "House Flipper": "https://steamcommunity.com/sharedfiles/filedetails/?id=1429451886", // German/English, covers base+all DLC
    "I Am Bread": "https://steamcommunity.com/sharedfiles/filedetails/?id=453552152",
    "Injustice: Gods Among Us Ultimate Edition": "https://steamcommunity.com/sharedfiles/filedetails/?id=267103674",
    "Injustice™ 2": "https://steamcommunity.com/sharedfiles/filedetails/?id=3362621905", // explicitly covers all 74
    "Just Cause 2": "https://steamcommunity.com/sharedfiles/filedetails/?id=567723411",
    "Just Cause 4": "https://steamcommunity.com/sharedfiles/filedetails/?id=1582780226", // incl. DLC
    "Keep Talking and Nobody Explodes": "https://steamcommunity.com/sharedfiles/filedetails/?id=3433136362",
    "Killing Floor": "https://steamcommunity.com/sharedfiles/filedetails/?id=1386472634", // not titled "100%" but a complete achievement reference - best available
    "Killing Floor 2": "https://steamcommunity.com/sharedfiles/filedetails/?id=3240643818", // explicitly covers all 307
    "Kingdom Come: Deliverance": "https://steamcommunity.com/sharedfiles/filedetails/?id=1952662218", // via WebSearch fallback; guides page returned only a content-warning gate
    "Lara Croft and the Guardian of Light": "https://steamcommunity.com/sharedfiles/filedetails/?id=2446197682",
    "Lara Croft and the Temple of Osiris": "https://steamcommunity.com/sharedfiles/filedetails/?id=2467437214",
    "Left 4 Dead": "https://steamcommunity.com/sharedfiles/filedetails/?id=3488897745",
    "LEGO® Batman™ 3: Beyond Gotham": "https://steamcommunity.com/sharedfiles/filedetails/?id=3596714026", // explicitly covers all 70
    "LEGO® City Undercover": "https://steamcommunity.com/sharedfiles/filedetails/?id=1817634743",
    "LEGO® DC Super-Villains": "https://steamcommunity.com/sharedfiles/filedetails/?id=2516806745",
    "LEGO® Harry Potter™ Collection": null, // no guide covers the combined 84-achievement bundle; only separate partial Years 1-4/5-7 guides exist, each covering only half
    "LEGO® Jurassic World": "https://steamcommunity.com/sharedfiles/filedetails/?id=3613234063", // explicitly covers all 49
    "LEGO® MARVEL Super Heroes": "https://steamcommunity.com/sharedfiles/filedetails/?id=3560737602", // explicitly covers all 45
    "LEGO® MARVEL Super Heroes 2": "https://steamcommunity.com/sharedfiles/filedetails/?id=3681153149", // explicitly covers all 75
    "LEGO® MARVEL's Avengers": "https://steamcommunity.com/sharedfiles/filedetails/?id=832122170",
    "LEGO® STAR WARS™: The Force Awakens": "https://steamcommunity.com/sharedfiles/filedetails/?id=3490272079", // explicitly covers all 69
    "LEGO® Star Wars™: The Skywalker Saga": "https://steamcommunity.com/sharedfiles/filedetails/?id=3558538904", // explicitly covers all 45
    "LEGO® The Hobbit™": "https://steamcommunity.com/sharedfiles/filedetails/?id=372668674",
    "LEGO® The Incredibles": "https://steamcommunity.com/sharedfiles/filedetails/?id=3521192886", // explicitly covers all 51
    "LEGO® The Lord of the Rings™": "https://steamcommunity.com/sharedfiles/filedetails/?id=3538704210", // explicitly covers all 48
    "LEGO® Worlds": null, // only topic-specific guides exist (dragons/trading/codes/biomes); one "100%" candidate found via search looked like a false-positive title match, declined to guess
    "Life is Strange Remastered": "https://steamcommunity.com/sharedfiles/filedetails/?id=2745396919", // via WebSearch fallback; guides page blocked by mature-content gate
    "Life is Strange: Before the Storm Remastered": "https://steamcommunity.com/sharedfiles/filedetails/?id=1274589175", // via WebSearch fallback; guide written for the original release but covers the same 34-achievement set
    "Life is Strange: True Colors": "https://steamcommunity.com/sharedfiles/filedetails/?id=2597529176", // explicitly covers all 40
    "LIGHTNING RETURNS: FINAL FANTASY XIII": "https://steamcommunity.com/sharedfiles/filedetails/?id=629371145", // no guide explicitly labeled 100% exists - best available
    "Little Nightmares II": "https://steamcommunity.com/sharedfiles/filedetails/?id=2392144693",
    "Longvinter": null, // guides page only has unrelated topic guides (house-building/tips/cooking); no achievement guide found
    "Mafia II (Classic)": "https://steamcommunity.com/sharedfiles/filedetails/?id=178344885",
    "Mafia II: Definitive Edition": "https://steamcommunity.com/sharedfiles/filedetails/?id=2102672471", // breakdown sums to 67, matches count exactly
    "Mafia III: Definitive Edition": "https://steamcommunity.com/sharedfiles/filedetails/?id=2161216768",
    "Mafia: Definitive Edition": "https://steamcommunity.com/sharedfiles/filedetails/?id=2240984540",
    "Marvel vs. Capcom: Infinite": null, // English-filtered guides page returned zero results; web search only surfaced guides for unrelated games
    "Marvel's Avengers - The Definitive Edition": "https://steamcommunity.com/sharedfiles/filedetails/?id=3069366044",
    "Marvel's Guardians of the Galaxy": "https://steamcommunity.com/sharedfiles/filedetails/?id=2638105682",
    "Marvel's Spider-Man: Miles Morales": "https://steamcommunity.com/sharedfiles/filedetails/?id=2890318867",
    "Mass Effect™ Legendary Edition": "https://steamcommunity.com/sharedfiles/filedetails/?id=2966501519", // via WebSearch fallback; guides page blocked by mature-content gate; cites all 127 achievements matching our count
    "Max Payne 3": "https://steamcommunity.com/sharedfiles/filedetails/?id=3035455650", // explicitly covers all 67
    "Metro 2033 Redux": null, // all English "100%"-titled candidates found were removed from Steam Community; remaining non-English candidates hit persistent rate-limiting - discarded rather than risk a dead/wrong link
    "Metro Exodus": "https://steamcommunity.com/sharedfiles/filedetails/?id=2808308027",
    "Metro Exodus Enhanced Edition": "https://steamcommunity.com/sharedfiles/filedetails/?id=2808575435",
    "Metro: Last Light Complete Edition": "https://steamcommunity.com/sharedfiles/filedetails/?id=3052206720", // written specifically for this edition (appId 43160)
    "Metro: Last Light Redux": "https://steamcommunity.com/sharedfiles/filedetails/?id=3253988076", // not independently re-verified (rate-limited); via WebSearch, cites all 49 achievements matching our count
    "Mirror's Edge™ Catalyst": "https://steamcommunity.com/sharedfiles/filedetails/?id=3071412316", // explicitly covers all 49
    "Moonlighter": "https://steamcommunity.com/sharedfiles/filedetails/?id=3216712822",
    "Mortal Kombat 11": null, // exhaustively checked all Achievements+English-tagged guides - none comprehensive (all combo/farming/fatality-specific); only "100%" candidates found were Russian
    "Mortal Kombat X": "https://steamcommunity.com/sharedfiles/filedetails/?id=2694759000", // not independently re-verified (rate-limited); 5-star listing, "Complete guide to unlock all achievements"
    "My Friend Pedro": "https://steamcommunity.com/sharedfiles/filedetails/?id=1777590301",
    "Need for Speed™": "https://steamcommunity.com/sharedfiles/filedetails/?id=3404062205", // Russian-language; English guides page for this base 2015 title had no achievement-focused candidates
    "Need for Speed™ Heat": "https://steamcommunity.com/sharedfiles/filedetails/?id=2670073887",
    "Need for Speed™ Hot Pursuit Remastered": "https://steamcommunity.com/sharedfiles/filedetails/?id=2929345185",
    "Need for Speed™ Payback": "https://steamcommunity.com/sharedfiles/filedetails/?id=3393338518", // not explicitly titled "100%" but covers all achievements/collectibles/activities - best available
    "Need for Speed™ Unbound": "https://steamcommunity.com/sharedfiles/filedetails/?id=2901392530",
    "New Tales from the Borderlands": "https://steamcommunity.com/sharedfiles/filedetails/?id=2878656475", // guide's own title flags itself (WIP); via WebSearch fallback, guides page blocked by mature-content gate
    "No Man's Sky": "https://steamcommunity.com/sharedfiles/filedetails/?id=2798004733", // explicitly covers all 27
    "Ori and the Blind Forest": "https://steamcommunity.com/sharedfiles/filedetails/?id=407010955", // bilingual EN/RU title
    "Ori and the Blind Forest: Definitive Edition": "https://steamcommunity.com/sharedfiles/filedetails/?id=678813380",
    "Ori and the Will of the Wisps": "https://steamcommunity.com/sharedfiles/filedetails/?id=2383525768",
    "Outlast": "https://steamcommunity.com/sharedfiles/filedetails/?id=2035874893", // via WebSearch fallback; guides page blocked by mature-content gate
    "Outlast 2": "https://steamcommunity.com/sharedfiles/filedetails/?id=2879437705", // via WebSearch fallback; guides page blocked by mature-content gate
    "PAYDAY 2": "https://steamcommunity.com/sharedfiles/filedetails/?id=2405459100", // explicitly covers all 1328
    "Planet Coaster": "https://steamcommunity.com/sharedfiles/filedetails/?id=3399512664",
    "Plants vs. Zombies: Battle for Neighborville": "https://steamcommunity.com/sharedfiles/filedetails/?id=2629637448", // not explicitly titled 100% but a per-achievement how-to guide - best available
    "PROTOTYPE 2": "https://steamcommunity.com/sharedfiles/filedetails/?id=283495410",
    "Punch Club": "https://steamcommunity.com/sharedfiles/filedetails/?id=712674668", // title partially Chinese - moderate confidence
    "RAGE 2": "https://steamcommunity.com/sharedfiles/filedetails/?id=1749487650", // explicitly covers main game + all DLCs
    "Rayman Legends": "https://steamcommunity.com/sharedfiles/filedetails/?id=178545961",
    "Red Dead Redemption": "https://steamcommunity.com/sharedfiles/filedetails/?id=3662707887", // explicitly covers all 51
    "Resident Evil": "https://steamcommunity.com/sharedfiles/filedetails/?id=3628246224", // HD Remaster
    "Resident Evil 0": "https://steamcommunity.com/sharedfiles/filedetails/?id=3241285335", // explicitly covers all 47
    "Resident Evil 2": "https://steamcommunity.com/sharedfiles/filedetails/?id=1634239780", // 2019 remake, incl. DLC
    "Resident Evil 3": "https://steamcommunity.com/sharedfiles/filedetails/?id=2046764973",
    "Resident Evil 4 (2005)": "https://steamcommunity.com/sharedfiles/filedetails/?id=1639495868", // classic-release appId 254700
    "Resident Evil 5": "https://steamcommunity.com/sharedfiles/filedetails/?id=1388859819", // Gold Edition
    "Resident Evil 6": "https://steamcommunity.com/sharedfiles/filedetails/?id=1698811175",
    "Resident Evil Re:Verse": "https://steamcommunity.com/sharedfiles/filedetails/?id=2879668851", // explicit 100%/12-achievement match
    "RESIDENT EVIL RESISTANCE": "https://steamcommunity.com/sharedfiles/filedetails/?id=3299734427", // best available for this multiplayer-only game is a boosting-group guide, not a true "100%" guide - low confidence
    "Resident Evil Revelations": "https://steamcommunity.com/sharedfiles/filedetails/?id=2808198122",
    "Resident Evil Revelations 2": "https://steamcommunity.com/sharedfiles/filedetails/?id=934068140",
    "Resident Evil Village": "https://steamcommunity.com/sharedfiles/filedetails/?id=2479485375", // incl. DLC
    "Rise of the Tomb Raider": "https://steamcommunity.com/sharedfiles/filedetails/?id=2859683152", // incl. DLC
    "Risk of Rain (2013)": "https://steamcommunity.com/sharedfiles/filedetails/?id=237222005", // explicitly covers all 15
    "Saints Row: The Third": "https://steamcommunity.com/sharedfiles/filedetails/?id=880538309", // via WebSearch fallback; guides page blocked by mature-content gate
    "Saints Row IV": "https://steamcommunity.com/sharedfiles/filedetails/?id=174513440",
    "Saints Row The Third Remastered": "https://steamcommunity.com/sharedfiles/filedetails/?id=2494043238", // via WebSearch fallback; guides page blocked by mature-content gate
    "Saints Row: Gat out of Hell": "https://steamcommunity.com/sharedfiles/filedetails/?id=378642217",
    "Scribblenauts Unlimited": "https://steamcommunity.com/sharedfiles/filedetails/?id=179034669", // not explicitly framed as an achievement guide; covers Starites/Shards underlying 24 of 25 achievements, not the 4 trivial one-offs
    "Scribblenauts Unmasked": null, // no comprehensive achievement guide found in English on the direct guides page, only partial/specific guides
    "Sea of Thieves": "https://steamcommunity.com/sharedfiles/filedetails/?id=2418816932", // claims "All 290" vs. current count of 293 - likely predates a few recent content additions
    "Shadow of the Tomb Raider": "https://steamcommunity.com/sharedfiles/filedetails/?id=1540761279", // incl. DLC
    "Sid Meier's Civilization VI": "https://steamcommunity.com/sharedfiles/filedetails/?id=914286854", // exact 320/320 match
    "Slay the Spire": "https://steamcommunity.com/sharedfiles/filedetails/?id=2077110546",
    "Slime Rancher 2": "https://steamcommunity.com/sharedfiles/filedetails/?id=3573875490", // covers v1.0 release achievement set
    "Sniper Elite V2": "https://steamcommunity.com/sharedfiles/filedetails/?id=1280094310", // incl. DLC
    "Sniper Elite 3": "https://steamcommunity.com/sharedfiles/filedetails/?id=278770756",
    "Sniper Elite 4": "https://steamcommunity.com/sharedfiles/filedetails/?id=879362002",
    "Sniper Elite 5": "https://steamcommunity.com/sharedfiles/filedetails/?id=2812968975", // "Full Guide" (medals/achievements/collectibles/DLC), not explicitly titled "100%"
    "Sniper Elite V2 Remastered": "https://steamcommunity.com/sharedfiles/filedetails/?id=1752468844",
    "Sonic & All-Stars Racing Transformed Collection": null, // only topic-specific guides exist (controller trick, time trials, cheese methods)
    "Sonic Adventure DX": "https://steamcommunity.com/sharedfiles/filedetails/?id=294474256", // minimal description, moderate confidence - only achievement-labeled guide on the page
    "Sonic Adventure™ 2": null, // only Chao Garden / A-Rank guides, nothing achievement-focused
    "Sonic CD": "https://steamcommunity.com/sharedfiles/filedetails/?id=1646969580",
    "Sonic Forces": null, // only ring-farming/S-rank guides, nothing comprehensive
    "Sonic Generations": "https://steamcommunity.com/sharedfiles/filedetails/?id=2922981683",
    "Sonic Lost World": "https://steamcommunity.com/sharedfiles/filedetails/?id=597171610",
    "Sonic Mania": "https://steamcommunity.com/sharedfiles/filedetails/?id=1123737204",
    "SONIC THE HEDGEHOG 4 Episode I": "https://steamcommunity.com/sharedfiles/filedetails/?id=227000005",
    "SONIC THE HEDGEHOG 4 Episode II": "https://steamcommunity.com/sharedfiles/filedetails/?id=143919981",
    "Split Fiction": "https://steamcommunity.com/sharedfiles/filedetails/?id=3446290337",
    "SpongeBob SquarePants: Battle for Bikini Bottom - Rehydrated": "https://steamcommunity.com/sharedfiles/filedetails/?id=2186794483",
    "STAR WARS Jedi: Survivor™": "https://steamcommunity.com/sharedfiles/filedetails/?id=3781513584", // cites 53 achievements, matches this project's count
    "STAR WARS™ Battlefront™": null, // only 2-player-mode, AI-difficulty, and collectibles guides
    "STAR WARS™ Battlefront™ II": "https://steamcommunity.com/sharedfiles/filedetails/?id=3242462995",
    "STAR WARS™: Squadrons": null, // only secret-achievement/boost-drift/decoration guides, nothing comprehensive
    "Starbound": "https://steamcommunity.com/sharedfiles/filedetails/?id=730170954",
    "Stick Fight: The Game": "https://steamcommunity.com/sharedfiles/filedetails/?id=2292623017",
    "Street Fighter 30th Anniversary Collection": null, // no comprehensive guide exists, only single-title/multiplayer-specific guides
    "Street Fighter V": "https://steamcommunity.com/sharedfiles/filedetails/?id=625531651",
    "Subnautica": "https://steamcommunity.com/sharedfiles/filedetails/?id=3384301367",
    "Subnautica: Below Zero": "https://steamcommunity.com/sharedfiles/filedetails/?id=2100915424",
    "Suicide Squad: Kill the Justice League": "https://steamcommunity.com/sharedfiles/filedetails/?id=3170964488",
    "Sunset Overdrive": "https://steamcommunity.com/sharedfiles/filedetails/?id=1759944324",
    "Surgeon Simulator": "https://steamcommunity.com/sharedfiles/filedetails/?id=146318773", // via WebSearch fallback; top direct-fetch candidate self-admitted only covering "non-anniversary" achievements, moderate confidence, not re-verified (rate-limited)
    "Tales from the Borderlands": "https://steamcommunity.com/sharedfiles/filedetails/?id=346972664", // guides page blocked by mature-content gate, found via WebSearch; titled "All Outcomes & Full walkthrough" not explicitly achievement-branded, unverified (rate-limited)
    "Team Sonic Racing™": "https://steamcommunity.com/sharedfiles/filedetails/?id=1749890067",
    "The Binding of Isaac: Rebirth": "https://steamcommunity.com/sharedfiles/filedetails/?id=3451467085",
    "The Crew 2": "https://steamcommunity.com/sharedfiles/filedetails/?id=2388312832",
    "The Elder Scrolls V: Skyrim Special Edition": "https://steamcommunity.com/sharedfiles/filedetails/?id=3415979995", // direct guides-page fetch returned only nav chrome, found via WebSearch; matches project's 75-achievement count
    "The Evil Within": "https://steamcommunity.com/sharedfiles/filedetails/?id=332983566",
    "The Evil Within 2": "https://steamcommunity.com/sharedfiles/filedetails/?id=1172829435",
    "THE GAME OF LIFE": null, // only guide is a "how to win" strategy guide, not achievements; don't confuse with unrelated "THE GAME OF LIFE 2" (appId 1455630)
    "The Last of Us™ Part I": "https://steamcommunity.com/sharedfiles/filedetails/?id=2953930722",
    "The LEGO® Movie - Videogame": "https://steamcommunity.com/sharedfiles/filedetails/?id=3494084401",
    "The LEGO® Movie 2 - Videogame": "https://steamcommunity.com/sharedfiles/filedetails/?id=3493226868",
    "The LEGO® NINJAGO® Movie Video Game": "https://steamcommunity.com/sharedfiles/filedetails/?id=3495456195",
    "The Outer Worlds: Spacer's Choice Edition": "https://steamcommunity.com/sharedfiles/filedetails/?id=3482997768", // steamAppIds bug: entry shares base "The Outer Worlds" appId 578650, real appId is 1920490 - guide resolved against the correct one
    "The Walking Dead: Michonne": null, // only guide is a choice-tracker, not achievement-focused
    "The Walking Dead: The Telltale Definitive Series": "https://steamcommunity.com/sharedfiles/filedetails/?id=2744232377",
    "The Wolf Among Us": "https://steamcommunity.com/sharedfiles/filedetails/?id=2208141218", // guides page blocked by mature-content gate, via WebSearch fallback
    "theHunter: Call of the Wild™": "https://steamcommunity.com/sharedfiles/filedetails/?id=2754729051",
    "Thief": "https://steamcommunity.com/sharedfiles/filedetails/?id=2415644157",
    "Tiny Tina's Wonderlands": "https://steamcommunity.com/sharedfiles/filedetails/?id=2938070499",
    "Titanfall® 2": "https://steamcommunity.com/sharedfiles/filedetails/?id=2236502179",
    "Tom Clancy's Ghost Recon® Wildlands": "https://steamcommunity.com/sharedfiles/filedetails/?id=3642091272", // guides page blocked by mature-content gate, via WebSearch fallback
    "Tom Clancy's Splinter Cell Blacklist": "https://steamcommunity.com/sharedfiles/filedetails/?id=3691392764",
    "Tom Clancy's The Division": "https://steamcommunity.com/sharedfiles/filedetails/?id=3439867215",
    "Tomb Raider I-III Remastered Starring Lara Croft": "https://steamcommunity.com/sharedfiles/filedetails/?id=3161785131",
    "Town of Salem": "https://steamcommunity.com/sharedfiles/filedetails/?id=1298872926",
    "Trials Evolution Gold Edition": "https://steamcommunity.com/sharedfiles/filedetails/?id=133473196", // not explicitly "100%"-branded, moderate confidence
    "Trials Fusion": "https://steamcommunity.com/sharedfiles/filedetails/?id=2850901678", // not explicitly "100%"-branded, moderate confidence
    "Trials Rising": null, // only squirrel/ice-cream collectible guides exist, nothing achievement-comprehensive
    "Ultimate Chicken Horse": "https://steamcommunity.com/sharedfiles/filedetails/?id=952992709",
    "Ultimate Marvel vs. Capcom 3": "https://steamcommunity.com/sharedfiles/filedetails/?id=879160454", // notes "The Ultimate" achievement may be bugged/unobtainable, unrelated to guide quality
    "Ultra Street Fighter IV": "https://steamcommunity.com/sharedfiles/filedetails/?id=3609791298",
    "Umbrella Corps": "https://steamcommunity.com/sharedfiles/filedetails/?id=842077697", // Russian-language, no English comprehensive candidate found
    "UNCHARTED™: Legacy of Thieves Collection": "https://steamcommunity.com/sharedfiles/filedetails/?id=3622542283", // "Uncharted 4" guide chosen as primary; collection also bundles Lost Legacy w/ its own guide id=3622901534, 101-achievement total spans both
    "Unravel": "https://steamcommunity.com/sharedfiles/filedetails/?id=2415189686",
    "Unravel Two": "https://steamcommunity.com/sharedfiles/filedetails/?id=2902019968", // via WebSearch fallback, not independently re-fetched
    "Watch Dogs: Legion": "https://steamcommunity.com/sharedfiles/filedetails/?id=3639162527", // via WebSearch fallback, not independently re-fetched
    "Watch_Dogs": "https://steamcommunity.com/sharedfiles/filedetails/?id=3613735799",
    "Watch_Dogs 2": "https://steamcommunity.com/sharedfiles/filedetails/?id=3641420571",
    "Witch It": "https://steamcommunity.com/sharedfiles/filedetails/?id=3028956473", // via WebSearch fallback, not independently re-fetched
    "Wizard of Legend": "https://steamcommunity.com/sharedfiles/filedetails/?id=2976301955",
    "Wolfenstein II: The New Colossus": "https://steamcommunity.com/sharedfiles/filedetails/?id=2307955083", // via WebSearch fallback, not independently re-fetched
    "Wolfenstein: The New Order": "https://steamcommunity.com/sharedfiles/filedetails/?id=3142324544", // via WebSearch fallback, not independently re-fetched
    "Wolfenstein: The Old Blood": "https://steamcommunity.com/sharedfiles/filedetails/?id=3149311830",
    "Wolfenstein: Youngblood": "https://steamcommunity.com/sharedfiles/filedetails/?id=1820946093", // lower confidence, found via search snippet only, alternate candidate hit rate-limit before re-check
    "Worms Clan Wars": "https://steamcommunity.com/sharedfiles/filedetails/?id=3077375625",
    "Worms Crazy Golf": "https://steamcommunity.com/sharedfiles/filedetails/?id=3121281630",
    "Worms Reloaded": null, // no comprehensive guide exists, only single-achievement tip guides
    "Worms Revolution": "https://steamcommunity.com/sharedfiles/filedetails/?id=3303706042", // via WebSearch fallback, not independently re-fetched
    "Worms Rumble": null, // guides page shows zero English/Achievements-tagged guides at all
    "Worms Ultimate Mayhem": "https://steamcommunity.com/sharedfiles/filedetails/?id=2307308622",
    "Worms W.M.D": "https://steamcommunity.com/sharedfiles/filedetails/?id=2950340075",
    "Worms World Party Remastered": null, // only unrelated technical-fix guide exists
    "XCOM 2": "https://steamcommunity.com/sharedfiles/filedetails/?id=2362339826",
    "Tomb Raider IV-VI Remastered": "https://steamcommunity.com/sharedfiles/filedetails/?id=3429752636",
    "Frostpunk": "https://steamcommunity.com/sharedfiles/filedetails/?id=2539990900",
    "Company of Heroes 2": "https://steamcommunity.com/sharedfiles/filedetails/?id=3779063415",
    "Dead Space": "https://steamcommunity.com/sharedfiles/filedetails/?id=3389709405", // shares appId 1693980 (the 2023 remake) with "Dead Space (2008)", valid appId-sharing, same guide reused
    "DEATHLOOP": "https://steamcommunity.com/sharedfiles/filedetails/?id=2601440937", // guides page blocked by mature-content gate, via WebSearch fallback
    "Destroy All Humans! 2 - Reprobed": "https://steamcommunity.com/sharedfiles/filedetails/?id=3505471649", // only a collectibles guide, not explicitly achievement-branded, moderate confidence; guides page blocked, via WebSearch fallback
    "High on Life": "https://steamcommunity.com/sharedfiles/filedetails/?id=2901944029", // guides page blocked by mature-content gate, via WebSearch fallback
    "Prey": "https://steamcommunity.com/sharedfiles/filedetails/?id=922260918",
    "Pummel Party": "https://steamcommunity.com/sharedfiles/filedetails/?id=2428976841", // thin description despite "100%" title, low-moderate confidence
    "Saints Row": "https://steamcommunity.com/sharedfiles/filedetails/?id=3025032069", // (2022) - explicitly skips easy/story achievements, focuses on optional/missable only; guides page blocked, via WebSearch fallback
    "Sleeping Dogs: Definitive Edition": "https://steamcommunity.com/sharedfiles/filedetails/?id=384988940",
    "SOMA": "https://steamcommunity.com/sharedfiles/filedetails/?id=2874468229", // guides page blocked by mature-content gate, via WebSearch fallback
    "SpongeBob SquarePants: The Cosmic Shake": "https://steamcommunity.com/sharedfiles/filedetails/?id=3681839139",
    "SOUTH PARK: SNOW DAY!": "https://steamcommunity.com/sharedfiles/filedetails/?id=3204401619",
    "Yooka-Laylee": "https://steamcommunity.com/sharedfiles/filedetails/?id=2725038329",
    "Yooka-Laylee and the Impossible Lair": "https://steamcommunity.com/sharedfiles/filedetails/?id=1888672397", // only a collectibles video guide, not achievement-branded, best available
    "Death Stranding Directors Cut": "https://steamcommunity.com/sharedfiles/filedetails/?id=2787763309", // cites 63 achievements matching this project's count, high confidence
    "Escape Simulator": "https://steamcommunity.com/sharedfiles/filedetails/?id=2628078736",
    "Gamble With Your Friends": "https://steamcommunity.com/sharedfiles/filedetails/?id=3718699875", // cites 55 achievements matching this project's count, high confidence
    "Cloverpit": "https://steamcommunity.com/sharedfiles/filedetails/?id=3577365934",
    "KEEP GAMBLING": "https://steamcommunity.com/sharedfiles/filedetails/?id=3720335463",
    "TCG Card Shop Simulator": "https://steamcommunity.com/sharedfiles/filedetails/?id=3466977949",
    "Fears to Fathom - Scratch Creek": "https://steamcommunity.com/sharedfiles/filedetails/?id=3746298710",
    "A Game About Digging A Hole": "https://steamcommunity.com/sharedfiles/filedetails/?id=3454148773",
    "Riders Republic": "https://steamcommunity.com/sharedfiles/filedetails/?id=3657688090", // no genuine 100% guide on direct page, via WebSearch fallback, moderate confidence
    "THE GAME OF LIFE 2": "https://steamcommunity.com/sharedfiles/filedetails/?id=2664598860",
    "Planet Zoo": "https://steamcommunity.com/sharedfiles/filedetails/?id=2707585690", // no guide explicitly labeled "100%", picked the achievement-focused one, moderate confidence
    "Black Mesa": "https://steamcommunity.com/sharedfiles/filedetails/?id=2303703792", // 4 near-equal 100% guides existed, picked closest title match
    "POSTAL 2": "https://steamcommunity.com/sharedfiles/filedetails/?id=204188505", // via WebSearch fallback (direct fetch blocked), chose English guide over several Russian/Spanish alternatives
    "The Binding of Isaac": "https://steamcommunity.com/sharedfiles/filedetails/?id=113454493",
    "FINAL FANTASY VIII": "https://steamcommunity.com/sharedfiles/filedetails/?id=227529294",
    "Backrooms: Escape Together": "https://steamcommunity.com/sharedfiles/filedetails/?id=3760118834",
    "EA SPORTS Madden NFL 26": null, // genuinely no guide exists yet - very new sports title, thin community content
    "Hellblade II: Senua's Saga": "https://steamcommunity.com/sharedfiles/filedetails/?id=3257794444", // via WebSearch fallback (direct fetch blocked/empty)
    "Sonic Colors: Ultimate": "https://steamcommunity.com/sharedfiles/filedetails/?id=3644793000", // no guide explicitly claims "100%", picked the one general achievements guide, low confidence
    "Mortal Kombat 1": "https://steamcommunity.com/sharedfiles/filedetails/?id=3035596232",
    "Sonic Origins": "https://steamcommunity.com/sharedfiles/filedetails/?id=2825346338",
    "Gotham Knights": "https://steamcommunity.com/sharedfiles/filedetails/?id=2889583005",
    "Hello Neighbor 2": "https://steamcommunity.com/sharedfiles/filedetails/?id=2902005449",
    "Overcooked! All You Can Eat": "https://steamcommunity.com/sharedfiles/filedetails/?id=3448578795", // guides page returned zero results, via WebSearch fallback
    "FINAL FANTASY VIII - REMASTERED": "https://steamcommunity.com/sharedfiles/filedetails/?id=2317891260",
    "Dishonored: Death of the Outsider": "https://steamcommunity.com/sharedfiles/filedetails/?id=1135664646",
    "State of Decay 2": "https://steamcommunity.com/sharedfiles/filedetails/?id=2033399133",
    "FINAL FANTASY IV: THE AFTER YEARS": "https://steamcommunity.com/sharedfiles/filedetails/?id=441388203",
    "State of Decay: Year-One": "https://steamcommunity.com/sharedfiles/filedetails/?id=2795140722",
    "Final Fantasy IV (3D Remake)": "https://steamcommunity.com/sharedfiles/filedetails/?id=2344469741", // cross-verified against appId 312750 via appdetails API to rule out FF3 mismatch
    "The Long Dark": "https://steamcommunity.com/sharedfiles/filedetails/?id=3658079832", // only covers Wintermute story-mode achievements, not survival-mode; no single guide covers both, best available
    "Final Fantasy III (3D Remake)": "https://steamcommunity.com/sharedfiles/filedetails/?id=497316354", // picked the 5-star candidate over a 4-star alternative (id=3307377051)
    "L.A. Noire": "https://steamcommunity.com/sharedfiles/filedetails/?id=291082904",
    "Balatro": "https://steamcommunity.com/sharedfiles/filedetails/?id=3400510379",
    "Tom Clancy's The Division 2": "https://steamcommunity.com/sharedfiles/filedetails/?id=3324874792", // Ukrainian-language, no English 100% guide found (checked page + WebSearch), covers base game + both DLCs
    "F.E.A.R. 3": "https://steamcommunity.com/sharedfiles/filedetails/?id=532816422",
    "Sons Of The Forest": "https://steamcommunity.com/sharedfiles/filedetails/?id=2938016309", // guides page blocked by mature-content gate, via WebSearch fallback, independently re-verified
    "Dead Island 2": "https://steamcommunity.com/sharedfiles/filedetails/?id=3229635188",
    "Risk of Rain 2": "https://steamcommunity.com/sharedfiles/filedetails/?id=2144504869",
    "Battlefield 6": "https://steamcommunity.com/sharedfiles/filedetails/?id=3584260127",
    "Resident Evil 7 Biohazard": "https://steamcommunity.com/sharedfiles/filedetails/?id=849694457", // guides page blocked by mature-content gate, via WebSearch fallback
    "Within of Static - Ashburg Rental": "https://steamcommunity.com/sharedfiles/filedetails/?id=3758334608",
    "Within of Static - Northgate Mall": null, // no achievement/English guide exists, only a Russian localization patch guide
    "Tales Beyond The Tomb - No Witnesses": "https://steamcommunity.com/sharedfiles/filedetails/?id=3748912841",
    "Tales Beyond The Tomb - Route 86": null, // no dedicated guide found - only stats pages/discussions/reviews, page also blocked by content-warning interstitial
    "Tales Beyond The Tomb - White Silence": "https://steamcommunity.com/sharedfiles/filedetails/?id=3583170554",
    "The Texas Chain Saw Massacre": "https://steamcommunity.com/sharedfiles/filedetails/?id=3024144729",
    "Who's Your Daddy?!": "https://steamcommunity.com/sharedfiles/filedetails/?id=1129983500", // covers both classic and remake versions, no single "100%"-titled guide exists but most comprehensive available
    "Tales Beyond The Tomb - The Last Vigil": "https://steamcommunity.com/sharedfiles/filedetails/?id=3450303074", // Russian-language only, no English guide exists
    "Tales Beyond The Tomb - The Farm's Secret": "https://steamcommunity.com/sharedfiles/filedetails/?id=3391934746", // not a dedicated achievement guide, a full playthrough - only non-Russian option available
    "Tales Beyond The Tomb - Pineville Night Stalker": "https://steamcommunity.com/sharedfiles/filedetails/?id=3411719607",
    "The Stanley Parable: Ultra Deluxe": "https://steamcommunity.com/sharedfiles/filedetails/?id=2800606181"
};

function getAchievementGuideUrl(gameName) {
    if (achievementGuides.hasOwnProperty(gameName)) {
        return achievementGuides[gameName];
    }

    const variations = [
        gameName.replace(/™/g, '').replace(/®/g, '').trim(),
        gameName.replace(/ \(\d{4}\)/g, '')
    ];

    for (const variation of variations) {
        if (achievementGuides.hasOwnProperty(variation)) {
            return achievementGuides[variation];
        }
    }

    return undefined; // not processed by the batch job yet
}
