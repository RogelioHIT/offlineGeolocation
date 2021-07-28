var CACHE_NAME = "my-offline-cache";
var urslToCache = [
  "./index.html",
  "./css/normalize.css",
  "./css/styles.css",
  "./js/main.js",
  "./assets/loading.gif",
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(urslToCache);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    fetch(event.request).catch(function () {
      caches.match(event.request).then(function (response) {
        return response;
      });
    })
  );
});
