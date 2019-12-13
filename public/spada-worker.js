
// var cacheName = 'spada-worker-cache';

// const cacheFiles = [
//   '/',
//   '/manifest.json',
//   '/ficon.ico',
//   '/icon.png'
// ];

// self.addEventListener('install', function(e) {
//   console.log('[ServiceWorker] Installed');
//   e.waitUntil(
//     caches.open(cacheName).then(function(cache) {
//     console.log('[ServiceWorker] Caching cacheFiles');
//     return cache.addAll(cacheFiles);
//     })
//   ); // end e.waitUntil
// });

// self.addEventListener('activate', event => {
//   const currentCachelist = [cacheName];
//   event.waitUntil(
//     caches.keys()
//       .then(keyList =>
//         Promise.all(keyList.map(key => {
//           if (!currentCachelist.includes(key)) {
//             return caches.delete(key);
//           }
//         }))
//       )
//   );
// });


// self.addEventListener('fetch', function(event) {
//   event.respondWith(
//     caches.match(event.request)
//       .then(function(response) {
//         if (response) {
//           return response;
//         } else {
//           return fetch(event.request)
//             .then(function(res) {
//               return caches.open(cacheName)
//                 .then(function(cache) {
//                   cache.put(event.request.url, res.clone());
//                   return res;
//                 })
//             })
//             .catch(function(err) {
//               return caches.open(cacheName)
//                 .then(function(cache) {
//                   return cache.match('./offline.html');
//                 });
//             });
//           }
//         })
//       );
//   });

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activated');
  e.waitUntil(
  caches.keys().then(function(cacheNames) {
        return Promise.all(cacheNames.map(function(thisCacheName) {
            if (thisCacheName !== cacheName) {
                console.log('[ServiceWorker] Removing Cached Files from Cache - ', thisCacheName);
                return caches.delete(thisCacheName);
            }
            }));
        })
    );
});