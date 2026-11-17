/* Sentence builder (#/build, Hablemos 0.7.0, ported from Hanashimashō 0.23.0). No data of its own: it reads whatever is loaded,
   so lessons added later (js/data/lessons-*.js) join in by themselves.
   Sources: lesson examples (<div class="ex"><b>Spanish</b><span>English</span></div> in every LESSONS[].body, level of the lesson),
   dialogue lines (window.DIALOGUES, level of the dialogue), reading sentences (READING[].tl split into sentences, only where the
   English paragraph splits into the same number), and GRAMMAR_TRANSFORM[].to (level of the item). Only sentences of 4 to 10 words.
   Tiles are the words, punctuation attached (¿ ¡ stay on their word). Tiles are shown in lower case so the first word is not given
   away, except words that the sources capitalise in mid-sentence (names: Mateo, Navarro, Dallas…); the built line is capitalised.
   Right: the source order, or the order of another source sentence with the same words ("Also right"). A hint places the next
   correct tile; a hinted sentence is not counted right.
   Best scores: state.done.build['<lv>'] = best % (lv A1 | A2 | B1 | B2 | all); numbers only.
   Missed sentences: state.done.build.miss = [sentence ids] (newest last, at most 200); id = 'b' + a hash of the Spanish text.
   Settings: state.settings.buildLv, buildSrc (all | lesson | dialogue | reading | transform), buildCount (10 | 20),
   buildHear (hear the sentence first; only sentences with a recorded clip are used when the recorded voice is on). */
(function () {
  const { esc, shuffle, pick, icons } = App;
  const V = App.views, S = () => App.state;
  const crumb = (items) => '<div class="breadcrumb">' + items.map(([t, h]) => (h ? '<a href="' + h + '">' + esc(t) + '</a>' : esc(t))).join(' / ') + '</div>';
  const LEVELS = ['A1', 'A2', 'B1', 'B2'];
  const SRCS = [['all', 'All'], ['lesson', 'Lessons'], ['dialogue', 'Dialogues'], ['reading', 'Reading'], ['transform', 'Grammar drills']];
  const MIN = 4, MAX = 10, MISS_CAP = 200;

  /* ---------- Words and tiles ---------- */
  const LETTER = /[A-Za-zÁÉÍÓÚÜÑáéíóúüñ0-9]/;
  const SKIP = /[()[\]{}/_<>«»"“”…|=+*]|\.\.\./;          // blanks, alternatives, quotes: not a buildable sentence
  const ENDS = /[.?!:]$/;
  // Words: split on spaces, pure punctuation joins the word before it.
  const words = (t) => {
    const out = [];
    String(t || '').trim().split(/\s+/).forEach((w) => { if (!w) return; if (!LETTER.test(w) && out.length) out[out.length - 1] += w; else out.push(w); });
    return out;
  };
  const core = (w) => w.replace(/^[¿¡]+/, '').replace(/[.,;:?!]+$/, '');
  const startsAt = (ws, k) => k === 0 || ENDS.test(ws[k - 1]);
  const lowerFirst = (w) => w.replace(/^([¿¡]*)(.)/, (m, p, c) => p + c.toLowerCase());
  const capFirst = (w) => w.replace(/^([¿¡]*)(.)/, (m, p, c) => p + c.toUpperCase());
  const capLine = (ws) => ws.map((w, k) => (startsAt(ws, k) ? capFirst(w) : w)).join(' ');

  /* ---------- Sentences ---------- */
  const deHtml = (h) => { const d = document.createElement('div'); d.innerHTML = h; return d.textContent.replace(/\s+/g, ' ').trim(); };
  const cleanEn = (en) => { const s = String(en || '').replace(/\s*\([^()]*\)\s*$/, '').trim(); return s || String(en || '').trim(); };
  const hash = (t) => { let h = 5381; for (let i = 0; i < t.length; i++) h = ((h << 5) + h + t.charCodeAt(i)) >>> 0; return 'b' + h.toString(36); };
  const splitSent = (p) => String(p || '').trim().split(/(?<=[.?!])\s+(?=[¿¡]?[A-ZÁÉÍÓÚÑ])/).map((s) => s.trim()).filter(Boolean);
  let cache = null, cacheKey = '';
  const sentences = () => {
    const L = window.LESSONS || [], D = window.DIALOGUES || [], R = window.READING || [], G = window.GRAMMAR_TRANSFORM || [];
    const key = L.length + ':' + D.length + ':' + R.length + ':' + G.length;
    if (cache && key === cacheKey) return cache;
    const raw = [];
    const add = (es, en, lv, src, link) => {
      try {
        es = String(es || '').replace(/\s+/g, ' ').trim(); en = cleanEn(en);
        if (!es || !en || !LEVELS.includes(lv) || SKIP.test(es) || !/[.?!]$/.test(es)) return;
        const ws = words(es); if (ws.length < MIN || ws.length > MAX) return;
        raw.push({ es, en, lv, src, link, ws });
      } catch (e) { /* a broken entry is skipped */ }
    };
    const re = /<div class="ex"><b>([\s\S]*?)<\/b><span>([\s\S]*?)<\/span><\/div>/g;
    L.forEach((l) => {
      if (!l || !l.id || typeof l.body !== 'string') return;
      let m; re.lastIndex = 0;
      while ((m = re.exec(l.body))) add(deHtml(m[1]), deHtml(m[2]), l.level, 'lesson', ['#/lessons/' + l.id, 'Lesson: ' + l.title]);
    });
    D.forEach((d) => { if (d && Array.isArray(d.lines)) d.lines.forEach((ln) => Array.isArray(ln) && add(ln[1], ln[2], d.level, 'dialogue', ['#/speak/' + d.id, 'Dialogue: ' + d.title])); });
    R.forEach((r) => {
      if (!r || !Array.isArray(r.tl) || !Array.isArray(r.en)) return;
      r.tl.forEach((p, k) => { const a = splitSent(p), b = splitSent(r.en[k]); if (a.length === b.length) a.forEach((s, j) => add(s, b[j], r.level, 'reading', ['#/reading/' + r.id, 'Reading: ' + r.title])); });
    });
    G.forEach((x) => { if (x && typeof x.to === 'string') add(x.to, x.en, x.lv, 'transform', ['#/transform', 'Transform the sentence']); });
    // Names: words written with a capital in mid-sentence anywhere in the sources keep their capital on the tiles.
    const names = new Set();
    raw.forEach((s) => s.ws.forEach((w, k) => { const c = core(w); if (!startsAt(s.ws, k) && /^[A-ZÁÉÍÓÚÑ]/.test(c)) names.add(c); }));
    const out = [], seen = new Set();
    raw.forEach((s) => {
      const tiles = s.ws.map((w, k) => (startsAt(s.ws, k) && !names.has(core(w)) ? lowerFirst(w) : w));
      if (new Set(tiles).size < 2) return;
      const k = tiles.join(' ').toLowerCase(); if (seen.has(k)) return; seen.add(k);
      out.push({ id: hash(s.es), es: s.es, en: s.en, lv: s.lv, src: s.src, link: s.link, tiles, bag: tiles.slice().sort().join('\n') });
    });
    // Sentences with the same words: each order is accepted for the others.
    const byBag = new Map();
    out.forEach((s) => { if (!byBag.has(s.bag)) byBag.set(s.bag, []); byBag.get(s.bag).push(s); });
    out.forEach((s) => { s.others = byBag.get(s.bag).filter((o) => o !== s).map((o) => o.tiles.join('\n')); });
    cacheKey = key;
    return (cache = out);
  };
  // 'right' | 'alt' | 'wrong'. ans: array of tile strings.
  const judge = (ans, s) => {
    const a = ans.join('\n');
    if (a === s.tiles.join('\n')) return 'right';
    return s.others.includes(a) ? 'alt' : 'wrong';
  };
  App.buildJudge = judge;
  App.buildSentences = () => sentences();   // for QA and other pages

  /* ---------- State ---------- */
  const store = () => { const d = S().done; if (!d.build || typeof d.build !== 'object' || Array.isArray(d.build)) d.build = {}; return d.build; };
  const missList = () => { const b = store(); if (!Array.isArray(b.miss)) b.miss = []; return b.miss; };
  const addMiss = (id) => { const m = missList(), i = m.indexOf(id); if (i >= 0) m.splice(i, 1); m.push(id); if (m.length > MISS_CAP) m.splice(0, m.length - MISS_CAP); };
  const dropMiss = (id) => { const m = missList(), i = m.indexOf(id); if (i >= 0) m.splice(i, 1); };
  const seg = (label, list, cur, attr) => '<div class="seg" role="group" aria-label="' + esc(label) + '">' + list.map(([k, t]) => '<button type="button" data-' + attr + '="' + esc(k) + '" class="' + (String(cur) === String(k) ? 'on' : '') + '" aria-pressed="' + (String(cur) === String(k)) + '">' + esc(t) + '</button>').join('') + '</div>';
  // With the recorded voice on, listening mode uses only sentences that have a clip.
  const recorded = (t) => { const p = App.pack; return S().settings.voiceSource === 'device' || !p || !p.keys || !p.keys.size || App.hasClip(t); };

  V.build = (el) => {
    const st = S().settings;
    const srcs = () => SRCS.filter((x) => x[0] === 'all' || sentences().some((s) => s.src === x[0]));
    const src = () => (srcs().some((x) => x[0] === st.buildSrc) ? st.buildSrc : 'all');
    const hear = () => !!st.buildHear;
    const bySrc = () => { const s = src(), h = hear(); return sentences().filter((x) => (s === 'all' || x.src === s) && (!h || recorded(x.es))); };
    const levels = () => { const p = bySrc(); return LEVELS.filter((lv) => p.some((x) => x.lv === lv)); };
    const level = () => (levels().includes(st.buildLv) ? st.buildLv : 'all');
    const pool = () => { const lv = level(); return bySrc().filter((x) => lv === 'all' || x.lv === lv); };
    const count = () => (st.buildCount === 20 ? 20 : 10);
    const misses = () => { const ids = new Set(missList()); return sentences().filter((x) => ids.has(x.id)); };

    el.innerHTML = crumb([['Practice', '#/practice'], ['Sentence builder']]) + '<h1>Sentence builder</h1>' +
      '<p class="muted">Read the English, then put the Spanish back together: tap the words in order. Tap a placed word to send it back. The sentences come from the lessons, dialogues, reading passages and grammar drills.</p>' +
      '<div class="card stack" id="bdset"></div><div id="bd" style="margin-top:14px"></div>';
    const set = el.querySelector('#bdset'), box = el.querySelector('#bd');
    const drawSet = () => {
      if (!sentences().length) { set.innerHTML = '<div class="notice">No sentences yet. The builder uses the example sentences of the lessons and dialogues; they are not loaded.</div>'; return; }
      const lvs = levels(), lv = level(), n = pool().length, b = store(), nm = misses().length;
      set.innerHTML = '<div class="bd-ctl">' + seg('Level', [['all', 'All' + (typeof b.all === 'number' ? ' · ' + b.all + '%' : '')]].concat(lvs.map((x) => [x, x + (typeof b[x] === 'number' ? ' · ' + b[x] + '%' : '')])), lv, 'bl') + '</div>' +
        '<div class="bd-ctl">' + seg('Source', srcs(), src(), 'bs') + seg('Number of sentences', [[10, '10'], [20, '20']], count(), 'bc') + '</div>' +
        '<div class="bd-ctl"><label class="ho-chk bd-chk"><input type="checkbox" id="bdhear"' + (hear() ? ' checked' : '') + '> Hear it first (listening mode)</label></div>' +
        '<p class="muted small" style="margin:0">' + n + ' sentence' + (n === 1 ? '' : 's') + ' at this choice' + (n && n < count() ? '; the round uses all of them' : '') + '.</p>' +
        '<div class="row"><button class="btn primary" id="bdgo"' + (n ? '' : ' disabled') + '>Start</button>' +
        (nm ? '<button class="btn" id="bdmiss">Practise my mistakes (' + nm + ')</button>' : '') + '</div>';
      const on = (attr, key, num) => set.querySelectorAll('[data-' + attr + ']').forEach((x) => (x.onclick = () => { st[key] = num ? +x.dataset[attr] : x.dataset[attr]; App.save(); box.innerHTML = ''; App.keyHandler = null; drawSet(); }));
      on('bl', 'buildLv'); on('bs', 'buildSrc'); on('bc', 'buildCount', true);
      const h = set.querySelector('#bdhear'); h.onchange = () => { st.buildHear = h.checked; App.save(); box.innerHTML = ''; App.keyHandler = null; drawSet(); };
      set.querySelector('#bdgo').onclick = () => run(pick(pool(), count()), level());
      const mm = set.querySelector('#bdmiss'); if (mm) mm.onclick = () => run(pick(misses(), count()), null);
    };

    // One round. key: the level key for the best score, or null for a mistakes round (no score kept).
    const run = (list, key) => {
      if (!list.length) return;
      let i = 0, right = 0;
      const one = () => {
        App.keyHandler = null;
        if (i >= list.length) {
          const pct = Math.round((100 * right) / list.length), b = store();
          if (key) b[key] = Math.max(pct, typeof b[key] === 'number' ? b[key] : 0);
          App.activity(10); App.save();
          box.innerHTML = '<div class="card stack" data-bdscore><h3>' + right + ' / ' + list.length + ' sentences right</h3><div class="progress"><i style="width:' + pct + '%"></i></div>' +
            (key ? '<p class="muted small" style="margin:0">Best at ' + esc(key === 'all' ? 'all levels' : key) + ': ' + b[key] + '%.</p>' : '<p class="muted small" style="margin:0">Mistakes round. Sentences you build right leave the list.</p>') +
            '<div class="row"><button class="btn primary" id="bdagain">New round</button>' + (misses().length ? '<button class="btn" id="bdmiss2">Practise my mistakes</button>' : '') + '</div></div>';
          box.querySelector('#bdagain').onclick = () => (key ? run(pick(pool(), count()), level()) : run(pick(misses(), count()), null));
          const m2 = box.querySelector('#bdmiss2'); if (m2) m2.onclick = () => run(pick(misses(), count()), null);
          box.querySelector('#bdagain').focus();
          drawSet();
          return;
        }
        const s = list[i], n = s.tiles.length, listen = hear();
        // The tray order is a shuffle that is never the answer itself.
        let order = shuffle(s.tiles.map((c, k) => k));
        for (let t = 0; t < 20 && order.every((k, j) => s.tiles[k] === s.tiles[j]); t++) order = shuffle(order);
        const tiles = order.map((k) => ({ c: s.tiles[k], used: false }));
        const built = [];
        let checked = false, hinted = false, enShown = !listen;
        box.innerHTML = '<div class="card stack" data-bid="' + esc(s.id) + '"><div class="spread"><span class="eyebrow">Sentence ' + (i + 1) + ' of ' + list.length + '</span><span class="small muted">' + esc(s.lv) + ' · ' + n + ' words</span></div>' +
          '<div class="progress"><i style="width:' + Math.round((100 * i) / list.length) + '%"></i></div>' +
          (listen ? '<div class="listen-q"><button class="btn primary" id="bdplay">' + icons.sound + ' Play again</button><span class="muted small">Listen, then build what you heard.</span></div>' : '') +
          '<div class="bd-en" id="bden">' + (enShown ? esc(s.en) : '<button class="btn sm ghost" id="bdshow">Show the English</button>') + '</div>' +
          '<div class="bd-line tl" id="bdline" aria-live="polite" aria-label="Your sentence"></div>' +
          '<div class="bd-tray tl" id="bdtray" role="group" aria-label="Words to place"></div>' +
          '<div class="row"><button class="btn primary" id="bdcheck" disabled>Check</button><button class="btn sm" id="bdhint">Hint</button><button class="btn sm ghost" id="bdclear">Clear</button></div>' +
          '<div id="bdfb"></div></div>';
        const $ = (q) => box.querySelector(q);
        // After a tap the lists are redrawn; focus goes back to the same place so the keyboard keeps working.
        const paint = (focus) => {
          if (!$('#bdline')) return;
          const shown = built.map((t) => tiles[t].c);
          const disp = shown.length ? capLine(shown).split(' ') : [];
          $('#bdline').innerHTML = built.length
            ? built.map((t, k) => '<button type="button" class="bd-tile in" data-b="' + k + '"' + (checked ? ' disabled' : '') + ' aria-label="Send back: ' + esc(tiles[t].c) + '">' + esc(disp[k]) + '</button>').join('')
            : '<span class="muted small bd-ph">Tap the words below in order.</span>';
          $('#bdtray').innerHTML = tiles.map((t, k) => (t.used ? '' : '<button type="button" class="bd-tile" data-t="' + k + '"' + (checked ? ' disabled' : '') + '>' + esc(t.c) + '</button>')).join('');
          box.querySelectorAll('[data-t]').forEach((b, pos) => (b.onclick = () => { const k = +b.dataset.t; if (checked || tiles[k].used) return; tiles[k].used = true; built.push(k); paint(['tray', pos]); }));
          box.querySelectorAll('[data-b]').forEach((b) => (b.onclick = () => { if (checked) return; const k = +b.dataset.b; tiles[built[k]].used = false; built.splice(k, 1); paint(['line', k]); }));
          $('#bdcheck').disabled = checked || built.length !== n;
          $('#bdhint').disabled = checked; $('#bdclear').disabled = checked || !built.length;
          if (focus && !checked) {
            const inTray = [...box.querySelectorAll('#bdtray .bd-tile')], inLine = [...box.querySelectorAll('#bdline .bd-tile')];
            const from = focus[0] === 'tray' ? inTray : inLine, other = focus[0] === 'tray' ? inLine : inTray;
            const target = from[Math.min(focus[1], from.length - 1)] || (built.length === n ? $('#bdcheck') : other[other.length - 1]);
            if (target) target.focus({ preventScroll: true });
          }
        };
        const play = () => App.speak(s.es);
        if (listen) { $('#bdplay').onclick = play; setTimeout(() => { if ($('#bdplay')) play(); }, 150); }
        const showEn = () => { enShown = true; $('#bden').innerHTML = esc(s.en); };
        if ($('#bdshow')) $('#bdshow').onclick = showEn;
        $('#bdclear').onclick = () => { if (checked) return; built.length = 0; tiles.forEach((t) => (t.used = false)); paint(); };
        $('#bdhint').onclick = () => {
          if (checked) return;
          let k = 0; while (k < built.length && tiles[built[k]].c === s.tiles[k]) k++;
          built.splice(k).forEach((t) => (tiles[t].used = false));
          if (k < n) { const t = tiles.findIndex((x) => !x.used && x.c === s.tiles[k]); if (t >= 0) { tiles[t].used = true; built.push(t); hinted = true; } }
          paint();
        };
        $('#bdcheck').onclick = () => {
          if (checked || built.length !== n) return;
          checked = true;
          const ans = built.map((t) => tiles[t].c), v = judge(ans, s), ok = v !== 'wrong' && !hinted;
          if (ok) { right++; dropMiss(s.id); } else addMiss(s.id);
          App.save();
          if (!enShown) showEn();
          paint();
          if (v === 'wrong') box.querySelectorAll('#bdline .bd-tile').forEach((b, k) => b.classList.add(ans[k] === s.tiles[k] ? 'ok' : 'no'));
          else box.querySelectorAll('#bdline .bd-tile').forEach((b) => b.classList.add(v === 'right' ? 'ok' : 'alt'));
          const head = v === 'right' ? (hinted ? '<b>Right, with a hint.</b> A hinted sentence is not counted.' : '<b>' + esc(LANG.quiz.right) + '</b>')
            : v === 'alt' ? '<b>Also right: that is another sentence from the app.</b> This one was:' + (hinted ? ' (with a hint: not counted)' : '')
            : '<b>' + esc(LANG.quiz.wrong) + '</b> The sentence was:';
          const link = s.link ? '<a class="small" href="' + esc(s.link[0]) + '">' + esc(s.link[1]) + '</a>' : '';
          $('#bdfb').innerHTML = '<div class="feedback ' + (v === 'right' && !hinted ? 'ok' : v === 'wrong' ? 'no' : 'mid') + ' stack bd-fb">' + head +
            '<div class="bd-model"><span class="tl">' + esc(s.es) + '</span> ' + App.sayBtn(s.es) + '</div>' +
            '<div>' + esc(s.en) + '</div>' + link + '</div>' +
            '<div class="row" style="margin-top:10px"><button class="btn primary" id="bdnext">' + (i + 1 < list.length ? 'Next' : 'See score') + '</button></div>';
          $('#bdnext').onclick = () => { i++; one(); };
          $('#bdnext').focus();
        };
        App.keyHandler = (e) => {
          if (e.target.matches('input,textarea,select')) return;
          if (e.key === 'Enter' && !e.target.matches('button,a')) {
            const b = checked ? $('#bdnext') : $('#bdcheck');
            if (b && !b.disabled) { e.preventDefault(); b.click(); }
          }
        };
        paint();
      };
      one();
    };
    drawSet();
  };
})();
