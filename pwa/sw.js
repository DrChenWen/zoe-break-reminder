const CACHE = 'zoe-reminder-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
];

// Install: cache core assets
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

// Activate: clean old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch: network-first for video (updated), cache-first for everything else
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // Video file: network with cache fallback
  if (url.pathname.endsWith('.mp4')) {
    e.respondWith(
      fetch(e.request)
        .then(r => { if (r.ok) { const c = r.clone(); caches.open(CACHE).then(cache => cache.put(e.request, c)); } return r; })
        .catch(() => caches.match(e.request))
    );
    return;
  }

  // HTML and static assets: cache-first
  e.respondWith(
    caches.match(e.request).then(r => {
      if (r) return r;
      return fetch(e.request).then(r2 => {
        if (r2.ok) { const c = r2.clone(); caches.open(CACHE).then(cache => cache.put(e.request, c)); }
        return r2;
      });
    })
  );
});
