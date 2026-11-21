/* Offline support. Bump VERSION whenever any file changes so phones pick up the update.
   All isaymotion apps share one origin (isaymotion.github.io), so this worker only ever deletes caches that
   start with its own PREFIX. 'hablemos-audio' holds the recorded clips and is kept across versions. */
const PREFIX = 'hablemos-';
const VERSION = PREFIX + '0.9.1';
const KEEP = ['hablemos-audio'];
const FILES = [
  './', 'index.html', 'manifest.webmanifest', 'css/style.css',
  'data/app-meta.js', 'data/changelog.js', 'data/hospital.js', 'data/strings.js',
  'js/lang.js', 'js/core.js', 'js/views.js', 'js/psych-views.js', 'js/app.js',
  'js/data/psych-phrases.js', 'js/data/psych-shea.js', 'js/data/psych-cases.js', 'js/data/psych-flow.js', 'js/data/psych-deesc.js', 'js/deesc.js',
  'js/data/psych-discharge.js', 'js/data/psych-discharge-cases.js', 'js/discharge.js', 'js/discharge-practice.js', 'js/data/psych-admit-mse.js', 'js/data/psych-mse-cases.js', 'js/mse-practice.js',
  'js/data/psych-mse-sheet.js', 'js/mse-sheet.js', 'js/data/psych-sud.js', 'js/sud.js', 'js/data/psych-mood.js', 'js/mood.js', 'js/data/psych-withdrawal.js', 'js/withdrawal.js',
  'js/data/psych-answers.js', 'js/point-listen.js', 'js/data/dict-core.js', 'js/data/dict-everyday.js', 'js/data/dict-clinical.js', 'js/data/dict-more.js', 'js/data/lessons.js', 'js/data/lessons-2.js', 'js/data/lessons-3.js', 'js/data/lessons-4.js', 'js/data/lessons-5.js', 'js/data/lessons-zz-order.js', 'js/data/reading.js', 'js/data/dialogues.js', 'js/data/meta.js', 'js/data/grammar-cloze-a1.js', 'js/data/grammar-cloze-a2.js', 'js/data/grammar-cloze-b1.js', 'js/data/grammar-cloze-b2.js', 'js/data/grammar-transform-1.js', 'js/data/verbs.js', 'js/conjugate.js', 'js/cloze.js', 'js/transform.js', 'js/build.js', 'js/verbs.js', 'js/handout.js', 'js/audio-key.js',
  'js/data/lessons-6.js', 'js/data/lesson-extra-1.js', 'js/data/lesson-extra-2.js', 'js/data/topic-sets.js', 'js/data/word-pairs-1.js', 'js/data/word-pairs-2.js', 'js/data/numbers.js', 'js/data/reading-2.js', 'js/data/dialogues-2.js', 'js/data/examples-1.js', 'js/data/examples-2.js', 'js/data/examples-3.js', 'js/data/examples-4.js', 'js/data/sound-pairs.js', 'js/data/listen-questions.js', 'js/data/listen-questions-2.js', 'js/data/listen-questions-3.js', 'js/listen.js', 'js/leveltest.js', 'js/data/picture-sets-body.js', 'js/data/picture-sets-home.js', 'js/data/picture-sets-town.js', 'js/data/picture-sets-animals.js', 'js/data/picture-sets-machines.js', 'js/data/picture-sets-food.js', 'js/data/picture-sets-clothes.js', 'js/data/picture-sets-nature.js', 'js/data/picture-sets-daily.js', 'js/data/picture-bodymap.js', 'pictures/art-body.js', 'pictures/art-home.js', 'pictures/art-town.js', 'pictures/art-animals.js', 'pictures/art-machines.js', 'pictures/art-food.js', 'pictures/art-clothes.js', 'pictures/art-nature.js', 'pictures/art-daily.js', 'js/vocab.js', 'js/pairs.js', 'js/numbers.js', 'js/pictures.js', 'js/picture-print.js',
  'js/vendor/pdfmake.min.js', 'js/vendor/vfs_fonts.js',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/logo-96.png', 'icons/favicon-32.png', 'icons/favicon-64.png', 'icons/apple-touch-icon.png'
];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(
    keys.filter((k) => k.startsWith(PREFIX) && k !== VERSION && !KEEP.includes(k)).map((k) => caches.delete(k))
  )).then(() => self.clients.claim()));
});
// Network first for app files (so updates arrive), falling back to cache when offline.
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin === location.origin && /\/audio\/[0-9a-f]{16}\.mp3$/.test(url.pathname)) {
    // Recorded clips never change for a given name: serve from cache, store on first play.
    e.respondWith(caches.open(KEEP[0]).then((c) => c.match(req).then((r) => r || fetch(req).then((res) => { if (res.ok) c.put(req, res.clone()); return res; }))));
  } else if (url.origin === location.origin) {
    e.respondWith(fetch(req).then((res) => { const copy = res.clone(); caches.open(VERSION).then((c) => c.put(req, copy)); return res; })
      .catch(() => caches.match(req, { ignoreSearch: true }).then((r) => r || caches.match('index.html'))));
  } else if (/fonts\.(googleapis|gstatic)\.com$/.test(url.hostname)) {
    e.respondWith(caches.match(req).then((r) => r || fetch(req).then((res) => { const copy = res.clone(); caches.open(VERSION).then((c) => c.put(req, copy)); return res; })));
  }
});
