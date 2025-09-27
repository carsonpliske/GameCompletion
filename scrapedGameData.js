const scrapedGameDatabase = {};

function getTimeCategory(hours) {
    if (!hours) return 'unknown';
    if (hours <= 5) return 'short';
    if (hours <= 20) return 'medium';
    return 'long';
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { scrapedGameDatabase };
} else {
    window.scrapedGameDatabase = scrapedGameDatabase;
}