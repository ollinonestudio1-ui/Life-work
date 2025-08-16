const CACHE = "planner-v1";
const ASSETS = [
  "./",
  "index.html","timetable.html","expenses.html","calculator.html","notes.html",
  "style.css","manifest.json",
  "icons/icon-192.png","icons/icon-512.png"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener("activate", e => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});