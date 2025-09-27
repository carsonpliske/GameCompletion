// Simple test script
console.log('Simple script starting...');

// Check if data exists
console.log('manualGameTimes exists:', typeof manualGameTimes !== 'undefined');
console.log('hltbGameTimes exists:', typeof hltbGameTimes !== 'undefined');
console.log('gameDatabase exists:', typeof gameDatabase !== 'undefined');

if (typeof gameDatabase !== 'undefined') {
    console.log('gameDatabase keys:', Object.keys(gameDatabase).length);

    // Get first 10 games
    const games = Object.keys(gameDatabase).slice(0, 10);
    console.log('First 10 games:', games);

    // Try to render them
    const container = document.getElementById('gamesList');
    if (container) {
        console.log('Found gamesList container');
        container.innerHTML = '<h2>Test Games</h2>';

        games.forEach(gameName => {
            const game = gameDatabase[gameName];
            const div = document.createElement('div');
            div.style.border = '1px solid #ccc';
            div.style.margin = '5px';
            div.style.padding = '10px';
            div.innerHTML = `
                <strong>${game.title}</strong><br>
                Time: ${game.timeToBeat || 'Unknown'} hours
            `;
            container.appendChild(div);
        });

        console.log('Rendered games successfully');
    } else {
        console.error('gamesList container not found!');
    }
} else {
    console.error('gameDatabase not found!');
}