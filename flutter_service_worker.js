'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "0b945b13ad511c6e6b755f4410587c3c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
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
".git/index": "8bf7adee6db9250a453e6e9465573163",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9264190f664d30d55f3ce9c9b3736311",
".git/logs/refs/heads/main": "2e941abab59e1b6ad943362b5c3971f4",
".git/logs/refs/remotes/origin/main": "d9ff9e0d46bcf24a09817b4a1bd5ab6b",
".git/objects/08/79e9f4c25e8b502e79c79ba666e0b6eb3a0ec8": "d4d37ac5edb14880ba88dfdf254d3666",
".git/objects/27/6ad41bef833341344acdfde3ce544212f16a9e": "9791eb05b25e39bdc130e36b1d1efecf",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/35/983cf97d6d1be4fe5aa8d9f42febbd0c959fea": "b12c8e8c724e16dfc19d2169a50b84c8",
".git/objects/3f/3dc13091ed919d9cf02ed2b7ba11f15192ec78": "5fa01ca2b2ca3622f25239249ceca341",
".git/objects/48/7501cdf39e4db7c535e7cc3b0d8d6388866abb": "0391792caaa4f41fd0bf0614bf5067e7",
".git/objects/49/2de046970529b6332f8fab63e24e3be95096b4": "36c0c49e5dcf43f4b2c41cdd9273ef31",
".git/objects/4d/545bd7ab8def466c6fd1b546d19ca87e2effe7": "559d984d2b2b56131171d1e0994f19bd",
".git/objects/51/f4ae5404fc79be09e69171bfc9d34d48810297": "cbccb909471e4568310a97f46dd1e258",
".git/objects/52/7db8162a753c5fecd7ba4b924925e7092a61e2": "fadfb7493927a40e49c8ae4a420db303",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/55/f3978e71ba6c39a4f910264af075562176e783": "2de0f890cbedd7eae21356dc5bbb4e5b",
".git/objects/57/81d51607d2f45786684270e3f9f888f77a5f68": "b71f20ed3b97be413bf8fea29c47bd6c",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/62/ffce82e8a67c235c9e8bec396d14f9d6290e35": "0906cf1e8ff14b280b2181a87de1f316",
".git/objects/64/3f581a7f863f1878f854aa54dc9a42c9158a8a": "b3231541981d8b3e2e7b881052d0e533",
".git/objects/65/d6c46790aa85b91fb0a4d7e48ebc0189f2fdd4": "af888b8ecce07a1fa4ce1312e7346905",
".git/objects/6f/4684e083a018fb2b9b3e3579fa83d88e00357d": "c36a0d2885d9ce067027d762572f1a49",
".git/objects/84/91dfa371fd6a337359c4020148fbd4cb2629f2": "41fee62da0c3b665f109abcf8fdd21b1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/89ca61d94924df87aec52f88a34363eeadddfa": "0c00ccd7a316e27023c517ae40e5dfb0",
".git/objects/92/e83d88ce1a4ccf41ea85732465cf32abc8a6a8": "c1c0e5347b4a4aaf820f23faf34415a5",
".git/objects/9a/ba4600d44bb3451cbb3c1089057f511eb65b83": "31abf642416ffe2eb8566fe240c0e041",
".git/objects/9b/0fa2530a15e5269237e8c95d3b7270034a56ee": "3201a0b230a8c9a49c8bab82ecac2997",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/af/fe2eb37da92776fee40dbbf461f8c602ff424b": "75563285b935dc3a61ccb003122bf7a6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c0/1c1450ba5b72d73a7d451ec83248e90cbe4491": "837d13ce106831c90aeed5af0ea85212",
".git/objects/c2/3c850b719ad5f846c97af623c03ace7ce0b283": "c9727b2349496336e69d582692063a1a",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/cd/db54fddc8b231e68213f7bf0e16ea910072d23": "0c24b38f5592989552cf45ac2b8bea1b",
".git/objects/d2/95fd52d0343565abdbc84abec859772aeafc56": "a046665bf06f113d7ccc40ac085ccfa5",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/d1c4f74678e61f438eefa7433b76a1ffb5da5a": "315826b3ad5d73713393fe707504e8e4",
".git/objects/d4/feb5269fe29d40849ca52f6580101172744a38": "08f62444f6b84bf4dd05e7cc4faee0b1",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e1/2c57be8d96af8c132ba1c54dd91f6aec79901a": "e0e4e60f2b375ae850094a6a05036800",
".git/objects/e1/6243e53f26f68e19083f5f83201e30f0826eb7": "ca7c6ae4ab69fe0dd8422c4efd8ddab2",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e3/e46f779392352ee4b67e57bb205b54e2f325a5": "cd3c73c5782b0b688882af29e17bd09d",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f6/f39405819186cd9b2fd4b05bf81303dcedd688": "98f6ffe3477ec5ab734d67f5ba11395e",
".git/objects/f9/e13635647315818bd9a5186bf1727f68f13c5e": "61753811fc2483da92fd3317bdbd1b4b",
".git/objects/fc/b84a04a4e4d038fffa8117913c626c87fd8da9": "0634f49fab94cca5f3da65072394d12a",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/b4f4a2d68a6faced07a4f225fb98e73c41fbdb": "6545ceb7fb0bb07b5b262282d730f652",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/refs/heads/main": "b359ca97f3494a242d98609ce728b00b",
".git/refs/remotes/origin/main": "b359ca97f3494a242d98609ce728b00b",
"assets/AssetManifest.bin": "36965e2ef3d10ebd2ed09703f5d59f74",
"assets/AssetManifest.json": "2db1e0665fdada50c245c1720458e404",
"assets/assets/dart.png": "81824107f13f1fdf9abd9c8d6470aafa",
"assets/assets/emamiCV.pdf": "061b52922fbc0711b84c21cf49425631",
"assets/assets/eng.png": "bb5bd06148e27dabe7c1f4dedf423a2c",
"assets/assets/figma.png": "ebe880ba05add588e0518ad30d6fe1de",
"assets/assets/firebase.png": "bb5d30fec65686babae2e8caa53666c3",
"assets/assets/flutter.png": "4262c71228b7aa391e995fe5f1d57795",
"assets/assets/freelancer.png": "9485fc7d1747138940f5135153e8411b",
"assets/assets/git.png": "728ff5a8e44d74cd0f2359ef0a9ec88a",
"assets/assets/iku.png": "c3479836540cde4b0877c5d62fa0e669",
"assets/assets/me.jpg": "9a3ff51e290044d6e6579a045e992c73",
"assets/assets/photoshop.png": "2f251de348f5854faf6b5eaf6e5d786d",
"assets/assets/python.png": "d3c746b2baa87534de255e2da8d49620",
"assets/assets/skill.png": "0bfc743afbedf346be3d7f1bbb37e031",
"assets/assets/soldier.png": "c86b62dae569562c8e19c570756e839a",
"assets/assets/tehran.png": "adde413bf3fcd057b6bb244184033a51",
"assets/FontManifest.json": "ec8a82ec184cf6cd45fbf68291b1fe6b",
"assets/fonts/MaterialIcons-Regular.otf": "fc8a3200bb9eec5dfb8b14d8c563c353",
"assets/NOTICES": "d7eb6a620bfecf2824132c1776d81aa8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/simple_icons/fonts/SimpleIcons.ttf": "36006a2aee699bab11e4562e9bd81963",
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
"index.html": "99b34b689c6e657b256f561ae68e329e",
"/": "99b34b689c6e657b256f561ae68e329e",
"main.dart.js": "71aae1b614719cec90d25f235563da56",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
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
