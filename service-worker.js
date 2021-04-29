// Choose a cache name
const cacheName = 'cache-v1';
// List the files to precache
const precacheResources = [
     '/', '/index.html', '/js/landing.js',
     '/app.css','/landing.css',
     '/video/landing-bg.mp4',
     '/fonts/Nista/BwNistaGeo-RgIt.woff','/fonts/Nista/BwNistaGeo-RgIt.woff2','/fonts/Nista/BwNistaGeo-RgIt.ttf',
     '/fonts/Nista/BwNistaGeo-Bd.woff','/fonts/Nista/BwNistaGeo-Bd.woff2','/fonts/Nista/BwNistaGeo-Bd.ttf',
     '/fonts/Nista/BwNistaGeo-Bk.woff','/fonts/Nista/BwNistaGeo-Bk.woff2','/fonts/Nista/BwNistaGeo-Bk.ttf',
     '/fonts/Nista/BwNistaGeo-Rg.woff','/fonts/Nista/BwNistaGeo-Rg.woff2','/fonts/Nista/BwNistaGeo-Rg.ttf',
     '/favicon-16x16.png','/favicon-32x32.png',
     '/android-chrome-192x192.png', '/android-chrome-256x256.png',
     '/site.webmanifest'
];

// When the service worker is installing, open the cache and add the precache resources to it
self.addEventListener('install', (event) => {
     event.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(precacheResources)));
});

self.addEventListener('activate', (event) => {
});

// When there's an incoming fetch request, try and respond with a precached resource, otherwise fall back to the network
self.addEventListener('fetch', (event) => {
     console.log('Fetch intercepted for:', event.request.url);
     event.respondWith(
          caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
               return cachedResponse;
          }
          return fetch(event.request);
          }),
     );
});
