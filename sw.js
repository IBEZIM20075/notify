// sw.js
self.addEventListener('install', function(event) {
    console.log('Service Worker installed');
    self.skipWaiting();
});

self.addEventListener('activate', function(event) {
    console.log('Service Worker activated');
    event.waitUntil(self.clients.claim());
});

self.addEventListener('push', function(event) {
    console.log('Push received');
    
    const options = {
        body: 'You have a new notification!',
        icon: '/icon.png',
        badge: '/badge.png',
        vibrate: [100, 50, 100],
        data: {
            url: 'https://example.com'
        }
    };

    event.waitUntil(
        self.registration.showNotification('Hello World!', options)
    );
});

self.addEventListener('notificationclick', function(event) {
    console.log('Notification clicked');
    event.notification.close();
    
    event.waitUntil(
        clients.openWindow('https://example.com')
    );
});