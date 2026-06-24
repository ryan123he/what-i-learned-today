const C="jnltxkx-v1";
const U=["index.html","manifest.json","icon-192.png","icon-512.png"];
self.addEventListener("install",function(e){e.waitUntil(Promise.all([caches.open(C).then(function(c){return c.addAll(U)}),self.skipWaiting()]))});
self.addEventListener("activate",function(e){e.waitUntil(Promise.all([caches.keys().then(function(ks){return Promise.all(ks.filter(function(k){return k!==C}).map(function(k){return caches.delete(k)}))}),self.clients.claim()]))});
self.addEventListener("fetch",function(e){e.respondWith(caches.match(e.request).then(function(r){return r||fetch(e.request)}))});
