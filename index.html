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
        icon: 'https://cdn-icons-png.flaticon.com/512/733/733585.png', // Use actual icon URL
        badge: 'https://cdn-icons-png.flaticon.com/512/733/733585.png',
        image: 'https://cdn-icons-png.flaticon.com/512/733/733585.png', // Large image for Android
        vibrate: [200, 100, 200, 100, 200], // Longer vibration
        requireInteraction: true, // Stay until user interacts
        actions: [
            {
                action: 'open',
                title: 'Open App'
            },
            {
                action: 'close',
                title: 'Close'
            }
        ],
        tag: 'message-notification', // Group similar notifications
        data: {
            url: 'https://example.com',
            timestamp: new Date().getTime()
        },
        // Android-specific options
        silent: false, // Make sure it's not silent
        timestamp: Date.now()
    };

    event.waitUntil(
        self.registration.showNotification('📱 New Message!', options)
    );
});

self.addEventListener('notificationclick', function(event) {
    console.log('Notification clicked:', event.notification.data);
    event.notification.close();
    
    const urlToOpen = event.notification.data.url || 'https://example.com';
    
    event.waitUntil(
        clients.matchAll({type: 'window'}).then(windowClients => {
            // Check if there's already a window open with the target URL
            for (let client of windowClients) {
                if (client.url === urlToOpen && 'focus' in client) {
                    return client.focus();
                }
            }
            // If no window is open, open a new one
            if (clients.openWindow) {
                return clients.openWindow(urlToOpen);
            }
        })
    );
});

// Handle notification actions (buttons)
self.addEventListener('notificationclose', function(event) {
    console.log('Notification closed');
});

// Handle messages from the main page
self.addEventListener('message', function(event) {
    if (event.data && event.data.type === 'SEND_PUSH_NOTIFICATION') {
        const { title, message, url } = event.data;
        
        self.registration.showNotification(title, {
            body: message,
            icon: 'https://cdn-icons-png.flaticon.com/512/733/733585.png',
            badge: 'https://cdn-icons-png.flaticon.com/512/733/733585.png',
            image: 'https://cdn-icons-png.flaticon.com/512/733/733585.png',
            vibrate: [200, 100, 200, 100, 200],
            requireInteraction: true,
            tag: 'web-notification',
            data: { url: url },
            actions: [
                {
                    action: 'open',
                    title: 'View'
                }
            ]
        });
    }
});
