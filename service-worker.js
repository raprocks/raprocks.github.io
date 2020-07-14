self.addEventListener("activate",  function(event) {

  event.waitUntil(self.clients.claim().then(function() {

    self.skipWaiting();

  }));

});

self.addEventListener("fetch", function(event) {

  event.respondWith(caches.match(event.request).then(function(response) {

    if (response && response.ok) {

      return response;

    }

  }));

});

self.addEventListener("install", function(event) {

  event.waitUntil(caches.open("web-app").then(function(cache) {

    return cache.addAll([".", "/index.html", "/categories"]).then(function() {

      self.skipWaiting();

    });

  }));

});