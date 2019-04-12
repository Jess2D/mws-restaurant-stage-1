const staticCache = 'restaurant-offline-01';

self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('staticCache').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/css/styles.css',
       '/js/dbhelper.js',
       '/js/register_sw.js',
       '/js/main.js',
       '/js/restaurant_info.js',
       '/data/restaurants.json',
       '/restaurant.html?id=1',
       '/restaurant.html?id=2',
       '/restaurant.html?id=3',
       '/restaurant.html?id=4',
       '/restaurant.html?id=5',
       '/restaurant.html?id=6',
       '/restaurant.html?id=7',
       '/restaurant.html?id=8',
       '/restaurant.html?id=9',
       '/restaurant.html?id=10',
     ]);
   })
 );
});