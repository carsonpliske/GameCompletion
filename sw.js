// Persistent runtime cache for Steam/game cover images.
// Only intercepts image-host requests; app files (html/js/css) are left
// alone so the existing ?v= query-string cache-busting keeps working.

const CACHE_NAME = 'game-organizer-images-v1';
const IMAGE_HOSTS = ['cdn.akamai.steamstatic.com', 'cdn.thegamesdb.net'];

self.addEventListener('install', () => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((names) =>
            Promise.all(
                names
                    .filter((name) => name.startsWith('game-organizer-images-') && name !== CACHE_NAME)
                    .map((name) => caches.delete(name))
            )
        ).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET') return;

    const url = new URL(event.request.url);
    if (!IMAGE_HOSTS.includes(url.hostname)) return;

    event.respondWith(
        caches.open(CACHE_NAME).then(async (cache) => {
            const cached = await cache.match(event.request);
            if (cached) return cached;

            try {
                const response = await fetch(event.request);
                // Cross-origin <img> requests fetch in no-cors mode, which
                // yields an opaque response (status always 0, response.ok
                // always false) even on success - cache it anyway, since a
                // resolved fetch with no thrown error means it loaded fine.
                if (response.ok || response.type === 'opaque') {
                    // Keep the worker alive until the cache write finishes -
                    // otherwise it can be torn down right after respondWith
                    // resolves and the put() never completes.
                    event.waitUntil(cache.put(event.request, response.clone()));
                }
                return response;
            } catch (err) {
                return cached || Response.error();
            }
        })
    );
});
