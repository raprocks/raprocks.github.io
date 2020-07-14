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

    return cache.addAll(['404.html', 'archive.html', 'robots.txt', 'sitemap.xml', 'hi.html', 'styles.html', 'about.html', 'index.html','Branch-to-Test.html','index.html','getting-started-with-python.html','setting-up-your-blog-on-github-pages.html','index.html','startup-automation.html','evolution-in-psuedo-IDE.html', 'lets-begin.html','apple-touch-icon-precomposed.png', 'browser_image.png', 'manifest.json','styles.css.map', 'styles.css','lets-begin1.jpg', 'lets-begin3iii.png', 'lets-begin2.jpg', 'lets-begin4.jpg', 'evolution-sessions.jpg', 'lets-begin3i.png', 'evolution-tabs-micro.jpg', 'Git-commit-branch.svg', 'Github-online.jpeg', 'new-ssh-key.png', 'new-ssh-key-add.png', 'lets-begin3ii.png', 'Github-Make-Repo.jpeg','Using-Git-The-Basics.html','Simplify-Workings-Using-SSH.html']).then(function() {

      self.skipWaiting();

    });

  }));

});