// Node.js script to fetch release dates using RAWG API
// Run with: node fetchReleaseDates.js

const https = require('https');
const fs = require('fs');

class ServerReleaseDateFetcher {
    constructor() {
        this.baseUrl = 'api.rawg.io';
        this.releaseData = {};
    }

    fetchReleaseDate(gameName) {
        return new Promise((resolve) => {
            const searchQuery = encodeURIComponent(gameName);
            const path = `/api/games?search=${searchQuery}`;

            console.log(`Fetching: ${gameName}`);

            const options = {
                hostname: this.baseUrl,
                port: 443,
                path: path,
                method: 'GET',
                headers: {
                    'User-Agent': 'GameOrganizer/1.0'
                }
            };

            const req = https.request(options, (res) => {
                let data = '';

                res.on('data', (chunk) => {
                    data += chunk;
                });

                res.on('end', () => {
                    try {
                        const response = JSON.parse(data);

                        if (response.results && response.results.length > 0) {
                            const game = response.results[0];
                            const releaseDate = game.released;
                            const year = releaseDate ? new Date(releaseDate).getFullYear() : null;

                            console.log(`✓ ${gameName}: ${year || 'Unknown'}`);
                            resolve({
                                name: gameName,
                                year: year,
                                fullDate: releaseDate,
                                rawgId: game.id,
                                exactMatch: game.name.toLowerCase() === gameName.toLowerCase()
                            });
                        } else {
                            console.log(`✗ ${gameName}: No results found`);
                            resolve({
                                name: gameName,
                                year: null,
                                fullDate: null,
                                rawgId: null,
                                exactMatch: false
                            });
                        }
                    } catch (error) {
                        console.error(`Parse error for ${gameName}:`, error.message);
                        resolve({
                            name: gameName,
                            year: null,
                            fullDate: null,
                            rawgId: null,
                            exactMatch: false,
                            error: error.message
                        });
                    }
                });
            });

            req.on('error', (error) => {
                console.error(`Request error for ${gameName}:`, error.message);
                resolve({
                    name: gameName,
                    year: null,
                    fullDate: null,
                    rawgId: null,
                    exactMatch: false,
                    error: error.message
                });
            });

            req.end();
        });
    }

    async fetchBatch(gameNames, delay = 500) {
        const results = [];

        for (let i = 0; i < gameNames.length; i++) {
            const result = await this.fetchReleaseDate(gameNames[i]);
            results.push(result);
            this.releaseData[gameNames[i]] = result;

            // Add delay to be respectful to the API
            if (i < gameNames.length - 1) {
                await new Promise(resolve => setTimeout(resolve, delay));
            }
        }

        return results;
    }

    displayResults(results) {
        console.log('\n=== BATCH RESULTS ===');
        results.forEach(result => {
            const status = result.year ? `${result.year}` : 'Unknown';
            const match = result.exactMatch ? '✓' : '~';
            console.log(`${match} ${result.name}: ${status}`);
        });

        const found = results.filter(r => r.year).length;
        console.log(`\nFound release dates for ${found}/${results.length} games`);
    }

    saveResults(results, filename = 'batch1_release_dates.json') {
        const exportData = {
            batchNumber: 1,
            processed: new Date().toISOString(),
            totalGames: results.length,
            foundDates: results.filter(r => r.year).length,
            games: results
        };

        fs.writeFileSync(filename, JSON.stringify(exportData, null, 2));
        console.log(`\n📁 Results saved to ${filename}`);
    }
}

// First 20 games alphabetically
const firstBatch = [
    "60 Parsecs!", "60 Seconds! Reatomized", "7 Days to Die", "A Story About My Uncle",
    "A Way Out", "Adventure Time: Pirates of the Enchiridion", "Alan Wake",
    "Alan Wake's American Nightmare", "Alice: Madness Returns", "Alien: Isolation",
    "American Truck Simulator", "Among Us", "Amnesia: The Dark Descent",
    "Apex Legends", "ARK: Survival Evolved", "ARK: Survival Of The Fittest",
    "Arma 3", "Assassin's Creed", "Assassin's Creed II", "Assassin's Creed III Remastered"
];

// Main execution
async function main() {
    console.log('🎮 Starting Release Date Fetch for First 20 Games\n');

    const fetcher = new ServerReleaseDateFetcher();

    try {
        const results = await fetcher.fetchBatch(firstBatch);
        fetcher.displayResults(results);
        fetcher.saveResults(results);

        console.log('\n✅ Batch processing complete!');
        console.log('Check batch1_release_dates.json for the results.');

    } catch (error) {
        console.error('❌ Error during processing:', error);
    }
}

// Run if called directly
if (require.main === module) {
    main();
}

module.exports = { ServerReleaseDateFetcher, firstBatch };