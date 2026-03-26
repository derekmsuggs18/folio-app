// Folio PWA Service Worker
// Bump this version string any time you update the app — it triggers cache refresh
const CACHE_NAME = 'folio-v2';

// Files to cache on install (the full app shell)
const SHELL = [
  '/folio-app/',
  '/folio-app/index.html',
  '/folio-app/manifest.json',
  '/folio-app/icon-192.png',
  '/folio-app/icon-512.png'
];

// ── INSTALL: cache the app shell ──
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(SHELL))
      .then(() => self.skipWaiting())
  );
});

// ── ACTIVATE: delete old caches ──
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// ── FETCH: cache-first for shell, network-first for Anthropic API ──
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Always go to network for API calls (AI summaries)
  if (url.hostname === 'api.anthropic.com') {
    event.respondWith(fetch(event.request));
    return;
  }

  // Cache-first for everything else (app shell)
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        // Cache valid responses
        if (response && response.status === 200 && response.type === 'basic') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => {
        // Offline fallback — serve index.html for navigation requests
        if (event.request.mode === 'navigate') {
          return caches.match('/folio-app/index.html');
        }
      });
    })
  );
});
