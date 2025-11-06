self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('qr-cache-v2').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './core.js',
        './aes.js',
        './sha256.js',
        './enc-base64.js',
        './html5-qrcode.min.js',
        './manifest.json',
        './icon-192.png',
        './icon-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

