const filesToCache = [
	"index.html",
	"intranet.css",
	"intranet.js",
	"intranet.json",
	"intranet_16x16.png",
	"intranet_192x192.png",
	"intranet_512x512.png",
	"intranetShare.png"
];

const staticCacheName = "intranet-v1";

self.addEventListener("install", event => {
	event.waitUntil(
		caches.open(staticCacheName)
		.then(cache => {
			return cache.addAll(filesToCache);
		})
	);
});

self.addEventListener("fetch", event => {
	event.respondWith(
		caches.match(event.request)
		.then(response => {
			if (response) {
				return response;
			}
			return fetch(event.request)
		}).catch(error => {
		})
	);
});