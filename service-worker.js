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

    return cache.addAll(["./404.html",
    "./about.html",
    "./assets/apple-touch-icon-precomposed.png",
    "./assets/browser_image.png",
    "./assets/css/styles.css",
    "./assets/css/styles.css.map",
    "./assets/images",
    "./assets/images/Git-commit-branch.svg",
    "./assets/images/Github-Make-Repo.jpeg",
    "./assets/images/Github-online.jpeg",
    "./assets/images/evolution-sessions.jpg",
    "./assets/images/evolution-tabs-micro.jpg",
    "./assets/images/lets-begin1.jpg",
    "./assets/images/lets-begin2.jpg",
    "./assets/images/lets-begin3i.png",
    "./assets/images/lets-begin3ii.png",
    "./assets/images/lets-begin3iii.png",
    "./assets/images/lets-begin4.jpg",
    "./assets/images/new-ssh-key-add.png",
    "./assets/images/new-ssh-key.png",
    "./assets/manifest.json",
    "./categories/index.html",
    "./git/Using-Git-The-Basics.html",
    "./git/github/Simplify-Workings-Using-SSH.html",
    "./index.html",
    "./linux/shell scripting/startup-automation.html",
    "./tags/index.html",
    "./termux/evolution-in-psuedo-IDE.html",
    "./termux/lets-begin.html"]).then(function() {

      self.skipWaiting();

    });

  }));

});