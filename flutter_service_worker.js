'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "8cc324ba78418c2cb900002b3ad5afff",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "3ccaf57c4856f5e1196b3727298e2c0d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cdeeacab0caebb0bb4d663cb1f6bdd70",
".git/logs/refs/heads/main": "024881b7edc4926bf939bc0b1ede2363",
".git/objects/02/dab31dc9fe52adc1a3c0259df661ad8b27bfb9": "6368452f3425fffcdbba53eea5d7884d",
".git/objects/04/9b501b8bcb09ece615765ce7faab76c1635a98": "98c0206a4653804b3e4a9d5f62ea7a57",
".git/objects/18/27bebbbb541340dab77ea349315f77dc801d77": "1d04f260dfb2c22e21c6f32fdf3cd564",
".git/objects/18/3226630825de530e5c7c8c9fa48cc41b424f6c": "6ce22b12059f7c7e1470b970aa131b81",
".git/objects/1a/06fa9106de53c09e3253555f888533d82139e2": "614159d4f98876dcd1417b85edb1d32e",
".git/objects/25/21cd19e961ff50ec8d32aff490952d10f1977e": "7265167a15ac144169d75cd8612c40f3",
".git/objects/29/a76d42d5474e011691625727af32371d5b47ff": "9e123bf9f498fb4da246b8220d228858",
".git/objects/33/db5e92f102e5fcb8e6d9026c448e21bfb6f48e": "585e801571d79e4add9507647741a630",
".git/objects/34/71ce0bb424d52ba686d52fa3be53408bb6df9c": "84563c769b3e7e609ef1ece37eb1b816",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/39/3f8a77fc6797022e640a081290de1aa4b55397": "83b11b683d2e63a9efd95de10ac555e9",
".git/objects/3b/15885eb7d1c748997285101f86d32f44125627": "006103d2cf3a5f20693231bd96d81be5",
".git/objects/3b/525333a5fb514ff96101631a96d3fe491b5e53": "bf5df0b641268798c6ded878b1310dff",
".git/objects/41/bb0114beb205da6b8a77af89b6af827b8d5612": "5caa6dc1d55bda9d8c55c0777db75289",
".git/objects/41/ea67827f944976a18144e0b994fa59d62cf4b9": "09a3321af7c78506128185494828e03d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/52/7b2f0bb93b28d7a6ef92c34e1d8a190c4fc905": "951ac08d8c5acc1482421795f4346552",
".git/objects/53/6f3ca74a84310e750f6e699d3d04ca993c568c": "c956720a81b9582028561d34f78e5cbb",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/5d/09c7f976256c971977dba0f3c5f4bd4e68c4c0": "7d299727034ca33d29fb119e9f7a682a",
".git/objects/5d/d6d130c3bac4094e7cb643ce063f80f99e3f3f": "99c1adce8e307613eed42193b1184856",
".git/objects/68/8d699bb1dc00075e3a5025aded3a48924da1ae": "4560a9c3651a2a7cbddc194247870bdb",
".git/objects/72/3e92e9d8c8aaabe90e038f40e8ee0726b8b6fe": "51829cbd6cad31da21cf65e2cc7188d2",
".git/objects/74/6331b5a2006a4e1d2a4324e6472c0f0d86c9c3": "d3dc367719e88349fbccb053fe679bac",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/12ed62a490853361f4c202f5ff6ee2eb978fc0": "53bc969643daa277bd6b4f0fb8ac99a5",
".git/objects/7a/cd699a660862ecdb6ced748f651b26fda95cab": "30a65156816969a907cf1cdc62879776",
".git/objects/7c/8a75568af6505f78bdc675758a22c5d5480464": "0cd274a04237f79ea4ec8039e28f590f",
".git/objects/80/0c77f4638d20b24daf174fbab18c943791280e": "53802b6de90d73b3c89901598f5bf1c0",
".git/objects/86/6388ef34f63da0136efa3baac3de92d2887345": "eaf54c1c4f52418a194896da7e8acd7f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/99/e1da980180bd5d4d6dd5a0af39d091cb50a914": "7ad98eff631206dc69b4dbed672c66d9",
".git/objects/9d/2f1fee9842dbcce89f8ba62db3dc1eb9154116": "24c02b9a446659eb3575a93d05751b0d",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/a2/fe94a06e8efc3daf79f9899b347648d3275299": "1b8043a3513c15860083393fb20c9b8d",
".git/objects/b0/05331387b7bfec0099e096862e919adec649dd": "fef4af153834f6d9bfcf26a7242f4e42",
".git/objects/b1/8bf784c94f8bccad6ede5febd25d3d04521ba8": "082d5d6fb03ba4a52976aa2be3fe310b",
".git/objects/b2/ca4843454b699a6976817095a6cc74a7532a2d": "8f2f30f715c5f7f681f2ae760355dc81",
".git/objects/b4/28d80cd4fcec9c5c02e5e12cf21eb63900172a": "6ebcc0443145f37e3f409b48fae25221",
".git/objects/b4/675bef577180e5fc797204558c656bafd7fb68": "67d34acfcbf32ff126661f130b5fe3f3",
".git/objects/b5/25ff902b1a9783cca568126d394733c6192755": "1b5df5d6a99898932550cafa04b0497f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/39934430c8bbaae177a4928b547c1d09eb0790": "2baa489b1a606c4f128a1314a387a970",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bd/83ba3357bf93464de8002d0b5b2be8f4611bc0": "b3b7ed85a7a8b9f99fc272b9c69c1dbe",
".git/objects/c0/b4019e2ded6a6ec60645cef066893fa4161d49": "a279d2b0db328617993c5fb9242687c0",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/d2/95fd52d0343565abdbc84abec859772aeafc56": "a046665bf06f113d7ccc40ac085ccfa5",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/e028f3bd22510b3666a333cc6981533b7d438e": "efc7752dbb7ffef81b91fcf6ccde8b92",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/8df00ba51525342242a63b676510536d4e0aa0": "042a40e7ed5cd28705e914d226ed368c",
".git/objects/fd/b4f4a2d68a6faced07a4f225fb98e73c41fbdb": "6545ceb7fb0bb07b5b262282d730f652",
".git/objects/fe/93cc4b88d14ee48e6854847de0ba9017589312": "ed665646dae3163c6d9a93234124498d",
".git/refs/heads/main": "cd67caea795048017d02530568831fb5",
"assets/AssetManifest.bin": "ffb851125ce0e94f98595880b6fcb05c",
"assets/AssetManifest.json": "e03e4287c3a39a49b454534d1f90524c",
"assets/assets/landingdesktop.svg": "2e54d3fd8efc8aa5965c86d7d86feee0",
"assets/assets/landingmobile.svg": "790cfcedcf28b9f0394411e0b37c409f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "218b1ced4e0d2570679e7e9580ea1a69",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e8694adc98f3b9999a3caba564a486b5",
"/": "e8694adc98f3b9999a3caba564a486b5",
"main.dart.js": "f52e2d4550e779b9daca0caefb9536fc",
"manifest.json": "ce18633bb0709f029d81b59215c97b23",
"version.json": "10768b83606e380d485a3f1f72db8ee7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
