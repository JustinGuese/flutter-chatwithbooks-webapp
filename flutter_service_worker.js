'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "076137651e7bed658297b046e18c9ef2",
"version.json": "df6c02314b7b6cc200ba4016f2ad5c7c",
"index.html": "9c69c21bf05a0e63a5b3a3b138f3c264",
"/": "9c69c21bf05a0e63a5b3a3b138f3c264",
"main.dart.js": "1d1bc88258323b61251cccba3b628a19",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "c038ed3db61cc9ae53ca8c1f87e76b74",
"icons/Icon-192.png": "39dbf38b215dfe401c0afb41cb15481f",
"icons/Icon-maskable-192.png": "39dbf38b215dfe401c0afb41cb15481f",
"icons/app_launcher_icon.png": "1374bbcfe96372d106f9b19e699ad225",
"icons/Icon-maskable-512.png": "c51953a1812d6f4e4b208867d4030b50",
"icons/Icon-512.png": "c51953a1812d6f4e4b208867d4030b50",
"manifest.json": "d41d8cd98f00b204e9800998ecf8427e",
"assets/AssetManifest.json": "a9a979fd743bffdd9c05f53c05f5b177",
"assets/NOTICES": "f4e3a63433a2f1aef3ada576773bb1f0",
"assets/FontManifest.json": "000d52da3d8fb7a5070535271e29e3d4",
"assets/AssetManifest.bin.json": "4d6ee39ead597eecca04ef59adf622f8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "972a4bbfb44730928549feb44631d8e7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "74c9a0c407f9f0f6153bc2ba2cfff08c",
"assets/packages/devtools_app_shared/fonts/Roboto_Mono/RobotoMono-Medium.ttf": "7cfbd4284ec01b7ace2f8edb5cddae84",
"assets/packages/devtools_app_shared/fonts/Roboto_Mono/RobotoMono-Regular.ttf": "b4618f1f7f4cee0ac09873fcc5a966f9",
"assets/packages/devtools_app_shared/fonts/Roboto_Mono/RobotoMono-Light.ttf": "9d1044ccdbba0efa9a2bfc719a446702",
"assets/packages/devtools_app_shared/fonts/Roboto_Mono/RobotoMono-Bold.ttf": "7c13b04382bb3c4a6a50211300a1b072",
"assets/packages/devtools_app_shared/fonts/Roboto_Mono/RobotoMono-Thin.ttf": "288302ea531af8be59f6ac2b5bbbfdd3",
"assets/packages/devtools_app_shared/fonts/Roboto/Roboto-Medium.ttf": "d08840599e05db7345652d3d417574a9",
"assets/packages/devtools_app_shared/fonts/Roboto/Roboto-Light.ttf": "fc84e998bc29b297ea20321e4c90b6ed",
"assets/packages/devtools_app_shared/fonts/Roboto/Roboto-Regular.ttf": "3e1af3ef546b9e6ecef9f3ba197bf7d2",
"assets/packages/devtools_app_shared/fonts/Roboto/Roboto-Bold.ttf": "ee7b96fa85d8fdb8c126409326ac2d2b",
"assets/packages/devtools_app_shared/fonts/Roboto/Roboto-Thin.ttf": "89e2666c24d37055bcb60e9d2d9f7e35",
"assets/packages/devtools_app_shared/fonts/Roboto/Roboto-Black.ttf": "ec4c9962ba54eb91787aa93d361c10a8",
"assets/packages/flutterflow_debug_panel/assets/fonts/FFIcons.ttf": "2d8699d7fc799fc94f451fb871a5d2e6",
"assets/packages/flutterflow_debug_panel/assets/fonts/Product-Sans-Medium.ttf": "73b7e20983e8bcdfd1600aa7b0fe1f3c",
"assets/packages/flutterflow_debug_panel/assets/fonts/Product-Sans-Regular.ttf": "40d7a2b41de60ab0d603f5d8b744b434",
"assets/packages/flutterflow_debug_panel/assets/fonts/Product-Sans-Bold.ttf": "6604358fd7e8863a191bb23dd37b7b21",
"assets/packages/flutterflow_debug_panel/assets/fonts/NewFFIcons.ttf": "67512e85f8b2e9fedc649468c3b958cb",
"assets/packages/flutterflow_debug_panel/assets/fonts/Product-Sans-Light.ttf": "751f3fcb15ee3b0f1b83b2dcfbf09106",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "14311de68d02a48aeab5d60583b3e3de",
"assets/fonts/MaterialIcons-Regular.otf": "2c7b6e2045f5120f02c90816eaf7be6d",
"assets/assets/audios/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/jsons/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/rive_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/FLUTTERFLOW-THUMBNAILS__2_-removebg-preview.png": "4a148cf28b839ea31d564edefd064e9e",
"assets/assets/images/adaptive_foreground_icon.png": "1374bbcfe96372d106f9b19e699ad225",
"assets/assets/images/FLUTTERFLOW-THUMBNAILS__4_-removebg-preview.png": "b0b987c32121e0b8f0f6b8c637ff9e59",
"assets/assets/images/FLUTTERFLOW-THUMBNAILS-removebg-preview.png": "553c3281065f91ccbfc6f5d618d55203",
"assets/assets/images/FLUTTERFLOW-THUMBNAILS__6_-removebg-preview.png": "86f9ff878ab86b549324a6e4f0f588f7",
"assets/assets/images/app_launcher_icon.png": "1374bbcfe96372d106f9b19e699ad225",
"assets/assets/images/FLUTTERFLOW-THUMBNAILS__9_-removebg-preview.png": "6e4ee4b03f6794586991d5c7e6ea2714",
"assets/assets/images/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/image_(12).png": "d0a264196b63c4c1116187d29fbbe1c9",
"assets/assets/images/logo.png": "1374bbcfe96372d106f9b19e699ad225",
"assets/assets/images/Subtract_(4).png": "668c59a920bc4afcd5320ac1cedb8549",
"assets/assets/images/FLUTTERFLOW-THUMBNAILS__3_-removebg-preview.png": "2651652db97ffca9efdf7729d6729cfb",
"assets/assets/images/Subtract_(3).png": "52817988cdbf3fe306e7bd6e20d448f3",
"assets/assets/images/Frame.png": "3467560320b4df02a4e5912b50cd039c",
"assets/assets/videos/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/pdfs/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/Migambi--Icon--Outline.ttf": "83785b2b752c8d2bef0ef7316bb5cc21",
"assets/assets/fonts/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/Migambi-VIP-Icons.ttf": "f3c5844e62fbe2400d90a27333f7efad",
"debug.js": "5d7a759c398cf57505423fa490a78b86",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
