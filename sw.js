importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.3.0/workbox-sw.js');

if (workbox) {
    workbox.routing.registerRoute(
        new RegExp('https://api.sampleapis.com/coffee/iced'),
        new workbox.strategies.NetworkFirst()
    );
}