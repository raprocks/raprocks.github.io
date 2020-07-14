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

    return cache.addAll(['404.html', 'archive.html', 'styles.html', 'about.html', 'index.html','Branch-to-Test.html','index.html','getting-started-with-python.html','setting-up-your-blog-on-github-pages.html','startup-automation.html','evolution-in-psuedo-IDE.html', 'lets-begin.html','apple-touch-icon-precomposed.png', 'browser_image.png', 'manifest.json','/assets/css/styles.css.map', '/assets/css/styles.css','Using-Git-The-Basics.html','Simplify-Workings-Using-SSH.html']).then(function() {

      self.skipWaiting();

    });

  }));

});