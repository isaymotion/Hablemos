/* Picture words (#/pictures, #/pictures/<id>?tab=learn|identify|label|listen|print), Hablemos 0.8.0.
   Port of the Hanashimasho 0.24.0 picture module. Spanish is plain text.
   Data: window.PICTURE_SETS (js/data/picture-sets-<group>.js), window.PICTURE_ART (pictures/art-<group>.js). Any subset of the
   group files may be loaded: the list page shows what is there.
   List page: sets by group, level seg All / A1 / A2 (state.settings.picLv), tiles with word count and best scores.
   Set page tabs: Learn (tap a pin / card: the word with its article, English, regional variant `r`, speaker, dictionary link;
   numbered word list), Identify (the word is shown and spoken, or only spoken: state.settings.picRead = 'read' | 'listen'; tap its
   pin / card), Label it (one pin / card highlighted: Choose 4 words or Type, state.settings.picLabel = 'choose' | 'type'; typing
   accepts the word with or without its article and is accent-lenient), Listen and point (a `say` sentence is spoken, its text
   hidden until answered), Print (App.picturePrint.sheet, js/picture-print.js; hidden when that is missing).
   A diagram set whose art is missing shows its words as a list (Learn) and a notice (quiz tabs).
   Scores: state.done.pictures['<mode>:<set id>'] = best % (mode identify | label | listen; numbers only, full rounds only; the
   Progress page reads them), plus state.done.pictures.miss = ['<set id>:<part id>', ...] (newest last, at most 200; a right
   answer takes the part off) for a "Practise my mistakes" round.
   API used elsewhere:
     V.pictures(el, params, q)          params.id = set id or undefined (the list); #/pictures/bodymap -> V.pictureBodymap.
     App.pictures.sets()                the valid sets; App.pictures.get(id) (= byId) one set or undefined.
     App.pictures.svg(set, opts)        svg markup of a diagram set ('' for cards sets or missing art). opts: pins 'numbers'
                                        (default) | 'dots' | 'none'; highlight = part id or array of ids; interactive (role=button
                                        pins, tabindex); quiz (aria-label = number only); cls = extra class on the svg.
     App.pictures.embed(el, setId)      the Learn picture of one set inside a lesson (.pic-embed), scoped to el, so it works
                                        several times on a page and in print. An unknown set id leaves el empty.
     App.pictures.GROUPS                [[group id, English title], ...] in menu order.
     App.pictures.check(typed, w)       'ok' | 'accents' | 'article' | false (the Type answer check, exported for tests).
     App.mountPics(root)                mounts every .pic-embed[data-pic] inside root (V.lesson calls it after drawing a lesson). */
(function () {
  const { esc, shuffle, pick } = App;
  const V = App.views, S = () => App.state;
  const crumb = (items) => '<div class="breadcrumb">' + items.map(([t, h]) => (h ? '<a href="' + h + '">' + esc(t) + '</a>' : esc(t))).join(' / ') + '</div>';
  const GROUPS = [['body', 'Body'], ['home', 'Home'], ['town', 'Town and buildings'], ['animals', 'Animals'], ['machines', 'Machines and vehicles'],
    ['food', 'Food'], ['clothes', 'Clothes and colors'], ['nature', 'Nature and weather'], ['daily', 'Daily life']];
  const MODES = [['identify', 'Identify'], ['label', 'Label it'], ['listen', 'Listen and point']];
  const LEVELS = ['A1', 'A2'];
  const ROUND = 10, MISS_MAX = 200;
  const LQ = () => (window.LANG && LANG.quiz) || { right: 'Right!', wrong: 'Not quite.', great: 'Great!', ok: 'Good.', keepGoing: 'Keep going.' };

  /* ---------- Spanish words ---------- */
  const ART_RE = /^(el|la|los|las|lo|un|una|unos|unas)\s+/;
  const base = (s) => String(s || '').normalize('NFC').toLowerCase().replace(/[’']/g, "'").replace(/[¿¡"“”]/g, '').replace(/[.!?,;:…]+\s*$/, '').replace(/\s+/g, ' ').trim();
  const articleOf = (s) => { const m = base(s).match(ART_RE); return m ? m[1] : ''; };
  const noArt = (s) => base(s).replace(ART_RE, '');
  const flat = (s) => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '');
  // The typed answer against the word: 'ok' | 'accents' (right once accents and ñ are ignored) | 'article' (right word, other
  // article) | false. With or without the article both count.
  function check(typed, w) {
    const t = noArt(typed), a = noArt(w);
    if (!t) return false;
    const same = t === a, near = !same && flat(t) === flat(a);
    if (!same && !near) return false;
    if (near) return 'accents';
    const ta = articleOf(typed), wa = articleOf(w);
    return ta && wa && ta !== wa ? 'article' : 'ok';
  }

  /* ---------- Data ---------- */
  const okPart = (s, p) => p && p.id && p.w && (s.kind === 'cards' ? !!p.pic : typeof p.x === 'number' && typeof p.y === 'number');
  const sets = () => (Array.isArray(window.PICTURE_SETS) ? window.PICTURE_SETS : []).filter((s) => s && s.id && Array.isArray(s.parts));
  const byId = (id) => sets().find((s) => s.id === id);
  const partsOf = (s) => (s.parts || []).filter((p) => okPart(s, p));
  const artOf = (s) => { if (!s || s.kind === 'cards') return null; const a = (window.PICTURE_ART || {})[s.art]; return a && Array.isArray(a.vb) && a.vb.length === 2 && typeof a.svg === 'string' ? a : null; };
  // How the set is drawn: 'svg' (diagram with art), 'cards' or 'list' (a diagram whose art is missing).
  const look = (s) => (s.kind === 'cards' ? 'cards' : artOf(s) ? 'svg' : 'list');
  const numOf = (s, pid) => (s.parts || []).findIndex((p) => p && p.id === pid) + 1;
  // The dictionary headword: the word without its article; then the singular of a plural ('los pulmones' finds 'pulmones' or 'pulmón').
  let DMAP = null;
  const dictOf = (w) => {
    const list = App.DICT || [];
    if (!DMAP || DMAP.n !== list.length) { DMAP = { n: list.length, m: new Map() }; list.forEach((e) => { if (e && e.tl && !DMAP.m.has(e.tl.toLowerCase())) DMAP.m.set(e.tl.toLowerCase(), e); }); }
    const t = noArt(w), cands = [t, base(w)];
    if (/es$/.test(t)) cands.push(t.slice(0, -2));
    if (/s$/.test(t)) cands.push(t.slice(0, -1));
    for (const c of cands) { const e = DMAP.m.get(c); if (e) return e; }
    return null;
  };
  const store = () => { const d = S().done; if (!d.pictures || typeof d.pictures !== 'object') d.pictures = {}; return d.pictures; };
  const missList = () => { const st = store(); if (!Array.isArray(st.miss)) st.miss = []; return st.miss; };
  const noteMiss = (key, ok) => { const m = missList(), at = m.indexOf(key); if (at >= 0) m.splice(at, 1); if (!ok) { m.push(key); if (m.length > MISS_MAX) m.splice(0, m.length - MISS_MAX); } };
  const missParts = (s) => { const ids = new Set(missList().filter((k) => k.indexOf(s.id + ':') === 0).map((k) => k.slice(s.id.length + 1))); return partsOf(s).filter((p) => ids.has(p.id)); };
  const best = (mode, s) => { const v = store()[mode + ':' + s.id]; return typeof v === 'number' ? v : null; };
  const saveBest = (mode, s, pct) => { const st = store(), k = mode + ':' + s.id; st[k] = Math.max(pct, typeof st[k] === 'number' ? st[k] : 0); };

  /* ---------- Drawing ---------- */
  const EMOJI_FONT = "'Apple Color Emoji','Segoe UI Emoji','Noto Color Emoji','Segoe UI Symbol',sans-serif";
  function svg(set, opts) {
    opts = opts || {};
    const a = artOf(set);
    if (!a) return '';
    const [w, h] = a.vb, k = w / 340;                       // scale so pins look the same size at any viewBox width
    const r = Math.round(11 * k * 10) / 10, hit = Math.round(23 * k), fs = Math.round(12 * k * 10) / 10;
    const mode = opts.pins || 'numbers';
    const hl = new Set([].concat(opts.highlight || []));
    const pins = mode === 'none' ? '' : (set.parts || []).map((p, i) => {
      if (!okPart(set, p)) return '';
      const n = i + 1, x = Math.min(Math.max(p.x, 0), w), y = Math.min(Math.max(p.y, 0), h);
      const lab = opts.quiz ? String(n) : n + ': ' + p.w + ', ' + (p.en || '');
      const act = opts.interactive ? ' role="button" tabindex="0" aria-label="' + esc(lab) + '"' : ' aria-hidden="true"';
      return '<g class="pic-pin' + (hl.has(p.id) ? ' hl' : '') + '" data-p="' + esc(p.id) + '" data-n="' + n + '"' + act + '>' +
        '<circle class="pic-hit" cx="' + x + '" cy="' + y + '" r="' + hit + '"/>' +
        '<circle class="pic-ring" cx="' + x + '" cy="' + y + '" r="' + Math.round(r * 1.75) + '"/>' +
        (mode === 'dots' ? '<circle class="pic-dot" cx="' + x + '" cy="' + y + '" r="' + Math.round(r * 0.55 * 10) / 10 + '"/>'
          : '<circle class="pic-dot" cx="' + x + '" cy="' + y + '" r="' + r + '"/><text class="pic-n" x="' + x + '" y="' + y + '" font-size="' + fs + '" text-anchor="middle" dominant-baseline="central">' + n + '</text>') +
        '</g>';
    }).join('');
    return '<svg class="pic-svg' + (opts.cls ? ' ' + esc(opts.cls) : '') + '" viewBox="0 0 ' + w + ' ' + h + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + esc('Picture: ' + (set.title || '')) + '" data-hit="' + hit + '">' +
      '<g class="pic-art">' + a.svg + '</g>' + pins + '</svg>';
  }
  // The emoji cards of a cards set. only = one part id (a single big card); quiz = aria-label number only.
  function cards(set, o) {
    o = o || {};
    const ps = partsOf(set).filter((p) => !o.only || p.id === o.only);
    return '<div class="pic-cards' + (o.only ? ' one' : '') + '">' + ps.map((p) => {
      const n = numOf(set, p.id), lab = o.quiz ? 'Picture ' + n : n + ': ' + p.w + ', ' + (p.en || '');
      return '<button type="button" class="pic-card' + (o.only === p.id ? ' hl' : '') + '" data-p="' + esc(p.id) + '" aria-label="' + esc(lab) + '"' + (o.only ? ' tabindex="-1"' : '') + '>' +
        '<span class="pic-cn" aria-hidden="true">' + n + '</span><span class="pic-emo" aria-hidden="true" style="font-family:' + EMOJI_FONT.replace(/'/g, '&#39;') + '">' + esc(p.pic) + '</span></button>';
    }).join('') + '</div>';
  }
  const pictureHtml = (set, o) => (look(set) === 'svg' ? '<div class="pic-wrap">' + svg(set, Object.assign({ interactive: true }, o)) + '</div>' : look(set) === 'cards' ? cards(set, o) : '');
  // Taps on pins (nearest pin inside the hit radius, so close pins never steal each other's taps), keys on pins, clicks on cards.
  function bindPick(root, onPick) {
    const sv = root.querySelector('.pic-svg');
    if (sv) {
      sv.addEventListener('click', (ev) => {
        const g = ev.target.closest('.pic-pin');
        if (!g) return;
        let id = g.dataset.p;
        try {
          const m = sv.getScreenCTM(); const pt = sv.createSVGPoint(); pt.x = ev.clientX; pt.y = ev.clientY;
          if (m && (ev.clientX || ev.clientY)) {
            const q = pt.matrixTransform(m.inverse()); let bd = Infinity;
            sv.querySelectorAll('.pic-pin').forEach((x) => { const c = x.querySelector('.pic-dot'); const d = Math.hypot(+c.getAttribute('cx') - q.x, +c.getAttribute('cy') - q.y); if (d < bd) { bd = d; id = x.dataset.p; } });
          }
        } catch (e) { /* keep the tapped pin */ }
        onPick(id);
      });
      sv.querySelectorAll('.pic-pin[tabindex]').forEach((g) => g.addEventListener('keydown', (ev) => {
        if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); ev.stopPropagation(); onPick(g.dataset.p); }
      }));
    }
    root.querySelectorAll('.pic-card').forEach((b) => b.addEventListener('click', () => onPick(b.dataset.p)));
  }
  const elOf = (root, pid) => root.querySelector('.pic-pin[data-p="' + CSS.escape(pid) + '"], .pic-card[data-p="' + CSS.escape(pid) + '"]');
  const mark = (root, pid, cls, only) => { if (only) root.querySelectorAll('.pic-pin.' + cls + ', .pic-card.' + cls).forEach((x) => x.classList.remove(cls)); const e = pid && elOf(root, pid); if (e) e.classList.add(cls); return e; };
  const shake = (e) => { if (!e) return; e.classList.remove('shake'); void e.getBoundingClientRect(); e.classList.add('shake', 'bad'); setTimeout(() => e.classList.remove('shake'), 500); };

  // The word in full: Spanish with its article, speaker, level, English, regional variant, dictionary link.
  const wordCard = (p, big) => {
    const d = dictOf(p.w);
    return '<div class="pic-word"><div class="row pic-wl"><span class="tl' + (big ? ' pic-big' : '') + '" lang="es">' + esc(p.w) + '</span>' + App.sayBtn(p.w, p.w) + (p.lv ? '<span class="pill lv">' + esc(p.lv) + '</span>' : '') + '</div>' +
      '<div class="pic-en">' + esc(p.en || '') + '</div>' + (p.r ? '<div class="pic-r small muted" lang="es">' + esc(p.r) + '</div>' : '') +
      (d ? '<div class="small"><a href="#/dict/' + esc(d.id) + '">Open in dictionary</a></div>' : '') + '</div>';
  };

  /* ---------- Learn (also the lesson embed) ---------- */
  function learnInto(box, s, opts) {
    opts = opts || {};
    const ps = partsOf(s), lk = look(s);
    if (!ps.length) { box.innerHTML = '<div class="notice info">No words in this picture yet.</div>'; return; }
    box.innerHTML = (lk === 'list' ? '<div class="notice info">The picture for this set is not ready yet. Here are its words.</div>' : pictureHtml(s, {})) +
      (lk !== 'list' ? '<div class="pic-panel" aria-live="polite"><p class="muted small" style="margin:0">Tap a ' + (lk === 'svg' ? 'numbered pin' : 'picture') + ' to hear and see the word.</p></div>' : '') +
      '<ol class="pic-list">' + (s.parts || []).map((p, i) => (okPart(s, p) ? '<li data-p="' + esc(p.id) + '"><button type="button" class="pic-row" data-p="' + esc(p.id) + '"><span class="pic-num">' + (i + 1) + '</span>' +
        (lk === 'cards' ? '<span class="pic-remo" aria-hidden="true">' + esc(p.pic) + '</span>' : '') + '<span class="pic-rw"><span class="tl" lang="es">' + esc(p.w) + '</span>' +
        (p.r ? '<span class="pic-r small muted" lang="es">' + esc(p.r) + '</span>' : '') + '</span><span class="muted small">' + esc(p.en || '') + '</span></button></li>' : '')).join('') + '</ol>' +
      (opts.link ? '<p class="noprint" style="margin:8px 0 0"><a class="btn sm" href="#/pictures/' + esc(s.id) + '?tab=identify">Practice this picture</a></p>' : '');
    const panel = box.querySelector('.pic-panel');
    const show = (pid, scroll) => {
      const p = ps.find((x) => x.id === pid); if (!p) return;
      mark(box, pid, 'on', true);
      box.querySelectorAll('.pic-row').forEach((r) => r.classList.toggle('on', r.dataset.p === pid));
      if (panel) { panel.innerHTML = '<div class="row" style="gap:8px;align-items:flex-start;flex-wrap:nowrap"><span class="pic-num">' + numOf(s, pid) + '</span>' + wordCard(p, true) + '</div>'; if (scroll && panel.scrollIntoView) panel.scrollIntoView({ block: 'nearest' }); }
      App.speak(p.w);
    };
    bindPick(box, (pid) => show(pid, true));
    box.querySelectorAll('.pic-row').forEach((b) => (b.onclick = () => { show(b.dataset.p, false); const e = elOf(box, b.dataset.p); if (e && e.scrollIntoView) e.scrollIntoView({ block: 'nearest' }); }));
  }

  function embed(el, setId) {
    if (!el) return;
    const s = byId(setId);
    if (!s) { el.innerHTML = ''; return; }
    el.innerHTML = '<div class="card stack pic-emb"><span class="eyebrow">Picture</span><h3 style="margin:0">' + esc(s.title) + '</h3><div class="pic-box"></div></div>';
    learnInto(el.querySelector('.pic-box'), s, { link: true });
  }
  // Lesson bodies: <div class="pic-embed" data-pic="<set id>"></div>. An unknown set id shows nothing, logs nothing.
  App.mountPics = (root) => {
    if (!root) return;
    root.querySelectorAll('.pic-embed[data-pic]').forEach((d) => { try { embed(d, d.dataset.pic); } catch (e) { d.innerHTML = ''; } });
  };

  /* ---------- Quiz rounds ---------- */
  // Three wrong words from the same set, the same part of speech first (from the dictionary), all different once the
  // article and the accents are set aside.
  function distractors(s, p) {
    const pos = (x) => { const d = dictOf(x.w); return d ? d.pos : ''; };
    const key = (x) => flat(noArt(x.w));
    const mine = pos(p), seen = new Set([key(p)]), out = [];
    const take = (list) => { for (const x of list) { if (out.length >= 3) break; const k = key(x); if (x === p || seen.has(k)) continue; seen.add(k); out.push(x); } };
    const others = shuffle(partsOf(s).filter((x) => x !== p));
    if (mine) take(others.filter((x) => pos(x) === mine));
    take(others);
    return out;
  }
  const saysOf = (s, ps) => (s.say || []).filter((x) => x && x.es && ps.some((p) => p.id === x.p));

  function quizTab(box, s, mode) {
    const st = S().settings, lk = look(s), ps = partsOf(s);
    if (lk === 'list') { box.innerHTML = '<div class="notice">The picture for this set is not ready yet, so this mode is not available. Learn the words on the Learn tab.</div>'; return; }
    const says = saysOf(s, ps);
    const pool = mode === 'listen' ? says : ps;
    if (!pool.length || ps.length < 2) { box.innerHTML = '<div class="notice info">' + (mode === 'listen' ? 'No listening sentences for this picture yet.' : 'Not enough words in this picture yet.') + '</div>'; return; }
    const labelMode = () => (st.picLabel === 'type' || ps.length < 4 ? 'type' : 'choose');
    const paintHead = () => {
      const b = best(mode, s), miss = missParts(s), mpool = mode === 'listen' ? says.filter((x) => miss.some((p) => p.id === x.p)) : miss;
      const segs = mode === 'identify' ? seg('Prompt', 'pread', [['read', 'Read'], ['listen', 'Listen only']], st.picRead === 'listen' ? 'listen' : 'read')
        : mode === 'label' ? seg('Answer', 'plab', [['choose', 'Choose'], ['type', 'Type']], labelMode()) : '';
      box.innerHTML = '<div class="row pic-qhead">' + segs + (b != null ? '<span class="pill' + (b >= 80 ? ' good' : '') + '">Best ' + b + '%</span>' : '') +
        '<button type="button" class="btn sm" data-act="new">New round</button>' + (mpool.length ? '<button type="button" class="btn sm" data-act="mist">Practice my mistakes (' + mpool.length + ')</button>' : '') + '</div>' +
        '<p class="muted small" style="margin:4px 0 0">' + esc(HELP[mode](lk)) + '</p><div class="pic-q" style="margin-top:10px"></div>';
      box.querySelectorAll('[data-pread]').forEach((x) => (x.onclick = () => { st.picRead = x.dataset.pread; App.save(); start(true); }));
      box.querySelectorAll('[data-plab]').forEach((x) => (x.onclick = () => { st.picLabel = x.dataset.plab; App.save(); start(true); }));
      box.querySelector('[data-act=new]').onclick = () => start(true);
      const mb = box.querySelector('[data-act=mist]'); if (mb) mb.onclick = () => start(false, mpool);
      return mpool;
    };
    const start = (scored, items) => {
      paintHead();
      run(box.querySelector('.pic-q'), s, mode, pick(items || pool, ROUND), scored, () => {
        if (!box.isConnected) return null;
        const mpool = paintHead();
        return { el: box.querySelector('.pic-q'), again: () => start(true), mist: mpool.length ? () => start(false, mpool) : null };
      });
    };
    start(true);
  }
  const HELP = {
    identify: (lk) => 'Read or hear the word, then tap its ' + (lk === 'svg' ? 'pin' : 'picture') + '. Up to ' + ROUND + ' words a round.',
    label: () => 'Which word is the highlighted thing? Choose (keys 1 to 4) or type it, with or without el / la.',
    listen: (lk) => 'Listen to the sentence (the text shows after you answer), then tap the ' + (lk === 'svg' ? 'pin' : 'picture') + ' it is about.'
  };
  const seg = (label, attr, items, cur) => '<div class="seg" role="group" aria-label="' + label + '">' + items.map(([k, t]) => '<button type="button" data-' + attr + '="' + k + '" aria-pressed="' + (cur === k) + '" class="' + (cur === k ? 'on' : '') + '">' + esc(t) + '</button>').join('') + '</div>';

  // One round. items = parts (identify, label) or say sentences (listen). scored = counts for the best score.
  function run(qel, s, mode, items, scored, onEnd) {
    const st = S().settings, lk = look(s), ps = partsOf(s);
    let i = 0, right = 0;
    const partOf = (it) => (mode === 'listen' ? ps.find((p) => p.id === it.p) : it);
    const draw = () => {
      if (!qel.isConnected) return;
      if (i >= items.length) return finish();
      const it = items[i], p = partOf(it), lab = mode === 'label', typ = lab && (st.picLabel === 'type' || ps.length < 4);
      const head = '<div class="spread"><span class="eyebrow">Question ' + (i + 1) + ' of ' + items.length + '</span><span class="muted small">' + right + ' right</span></div>' +
        '<div class="progress"><i style="width:' + Math.round((100 * i) / items.length) + '%"></i></div>';
      let prompt = '';
      if (mode === 'identify') prompt = '<div class="pic-prompt">' + (st.picRead === 'listen' ? '<span class="muted">Listen and tap the ' + (lk === 'svg' ? 'pin' : 'picture') + '.</span>' : '<span class="tl pic-big" lang="es">' + esc(p.w) + '</span>') + '</div>';
      if (mode === 'listen') prompt = '<div class="pic-prompt"><span class="muted">Listen to the sentence and tap the ' + (lk === 'svg' ? 'pin' : 'picture') + ' it is about.</span></div>';
      const again = mode !== 'label' ? '<button type="button" class="btn sm" data-act="again">Play again</button>' : '';
      const pic = lab ? (lk === 'svg' ? '<div class="pic-wrap">' + svg(s, { interactive: false, quiz: true, highlight: p.id, pins: 'dots' }) + '</div>' : cards(s, { only: p.id, quiz: true })) : pictureHtml(s, { quiz: true });
      let ans = '';
      if (lab && !typ) {
        const opts = shuffle([p].concat(distractors(s, p)));
        ans = '<div class="opts">' + opts.map((x, k) => '<button type="button" class="opt" data-k="' + k + '" data-p="' + esc(x.id) + '"><span class="pic-k" aria-hidden="true">' + (k + 1) + '</span> <span class="tl" lang="es">' + esc(x.w) + '</span></button>').join('') + '</div>';
      } else if (typ) {
        ans = '<form class="stack pic-type" autocomplete="off"><label class="small muted" for="pictype-' + i + '">Type the Spanish word (with or without el / la)</label>' +
          '<input id="pictype-' + i + '" class="pic-in" type="text" lang="es" autocapitalize="off" autocorrect="off" spellcheck="false" enterkeyhint="done">' +
          '<div class="row"><button class="btn primary" type="submit">Check</button></div></form>';
      }
      qel.innerHTML = '<div class="card stack pic-round">' + head + (prompt || again ? '<div class="pic-prow">' + prompt + again + '</div>' : '') + pic + ans + '<div data-fb></div></div>';
      const say = () => App.speak(mode === 'listen' ? it.es : p.w);
      if (mode !== 'label') say();
      const ag = qel.querySelector('[data-act=again]'); if (ag) ag.onclick = say;
      let done = false, bar = null;
      const answer = (ok, chosen, how) => {
        if (done) return; done = true;
        if (ok) right++;
        noteMiss(s.id + ':' + p.id, ok); App.recordAnswer(ok); App.save();
        qel.querySelectorAll('.opt').forEach((b) => { b.disabled = true; if (b.dataset.p === p.id) b.classList.add('right'); else if (b.dataset.p === chosen) b.classList.add('wrong'); });
        const inp = qel.querySelector('.pic-in'); if (inp) { inp.disabled = true; qel.querySelector('.pic-type button[type=submit]').disabled = true; }
        if (bar) bar.querySelectorAll('button').forEach((b) => (b.disabled = true));
        if (!lab) { mark(qel, p.id, 'good'); if (!ok) shake(elOf(qel, chosen)); }
        qel.querySelector('.pic-round').classList.add('answered');
        const ch = chosen && chosen !== p.id && !typ ? ps.find((x) => x.id === chosen) : null;
        const hint = how === 'accents' ? '<div class="small">Check the accents: <b class="tl" lang="es">' + esc(p.w) + '</b></div>'
          : how === 'article' ? '<div class="small">Check the article: <b class="tl" lang="es">' + esc(p.w) + '</b></div>' : '';
        qel.querySelector('[data-fb]').innerHTML = '<div class="feedback ' + (ok ? 'ok' : 'no') + ' stack"><b>' + (ok ? LQ().right : LQ().wrong) + '</b>' + hint +
          (mode === 'listen' ? '<div class="row pic-wl"><span class="tl" lang="es">' + esc(it.es) + '</span>' + App.sayBtn(it.es, it.es) + '</div><div class="small">' + esc(it.en || '') + '</div>' : '') +
          '<div class="row" style="gap:8px;align-items:flex-start;flex-wrap:nowrap">' + (lk === 'svg' ? '<span class="pic-num">' + numOf(s, p.id) + '</span>' : '<span class="pic-remo" aria-hidden="true">' + esc(p.pic) + '</span>') + wordCard(p) + '</div>' +
          (ch ? '<div class="small muted">You chose ' + (lk === 'svg' ? 'pin ' + numOf(s, ch.id) + ': ' : '') + '<span class="tl" lang="es">' + esc(ch.w) + '</span> (' + esc(ch.en || '') + ')</div>' : '') +
          (typ && !ok && chosen ? '<div class="small muted">You typed: ' + esc(chosen) + '</div>' : '') + '</div>' +
          '<div class="row" style="margin-top:10px"><button type="button" class="btn primary" data-act="next">' + (i + 1 < items.length ? 'Next' : 'See score') + '</button></div>';
        if (ok && mode === 'label') App.speak(p.w);
        const nx = qel.querySelector('[data-act=next]'); nx.onclick = () => { i++; draw(); }; nx.focus({ preventScroll: true });
      };
      if (!lab) bindPick(qel, (pid) => answer(pid === p.id, pid));
      qel.querySelectorAll('.opt').forEach((b) => (b.onclick = () => answer(b.dataset.p === p.id, b.dataset.p)));
      const f = qel.querySelector('.pic-type');
      if (f) {
        const inp = f.querySelector('input');
        if (typeof App.accentBar === 'function') bar = App.accentBar(inp);
        f.onsubmit = (ev) => {
          ev.preventDefault();
          if (!base(inp.value)) { inp.focus(); return; }
          const v = check(inp.value, p.w);
          answer(!!v, v ? p.id : inp.value.trim(), v);
        };
        if (i > 0) inp.focus({ preventScroll: true });
      }
    };
    const finish = () => {
      const n = items.length, pct = Math.round((100 * right) / n);
      if (scored) saveBest(mode, s, pct);
      App.activity(10); App.save();
      const end = onEnd ? onEnd() : null;            // repaints the head (new best, mistakes count); gives the new round box
      const nb = end && end.el; if (!nb) return;
      nb.innerHTML = '<div class="card stack"><h3 style="margin:0">' + (pct >= 80 ? LQ().great : pct >= 50 ? LQ().ok : LQ().keepGoing) + ' ' + right + ' / ' + n + ' · ' + pct + '%</h3><div class="progress"><i style="width:' + pct + '%"></i></div>' +
        (scored ? '' : '<p class="muted small" style="margin:0">Mistakes rounds do not change your best score.</p>') +
        '<div class="row"><button type="button" class="btn primary" data-act="new2">New round</button>' + (end.mist ? '<button type="button" class="btn" data-act="mist2">Practice my mistakes</button>' : '') + '<a class="btn" href="#/progress">Progress</a></div></div>';
      const b1 = nb.querySelector('[data-act=new2]'); b1.onclick = end.again; b1.focus({ preventScroll: true });
      const b2 = nb.querySelector('[data-act=mist2]'); if (b2) b2.onclick = end.mist;
    };
    App.keyHandler = (ev) => {
      if (!qel.isConnected || ev.altKey || ev.ctrlKey || ev.metaKey || ev.target.matches('input,textarea,select')) return;
      if (/^[1-4]$/.test(ev.key)) { const b = qel.querySelector('.opt[data-k="' + (+ev.key - 1) + '"]:not(:disabled)'); if (b) { ev.preventDefault(); b.click(); } return; }
      if (ev.key === 'Enter' && !ev.target.closest('button,a,[role=button]')) { const nx = qel.querySelector('[data-act=next]'); if (nx) { ev.preventDefault(); nx.click(); } }
    };
    draw();
  }

  /* ---------- Pages ---------- */
  function listPage(el) {
    const st = S().settings, all = sets();
    const lv = LEVELS.includes(st.picLv) ? st.picLv : 'All';
    const head = crumb([['Practice', '#/practice'], ['Picture words']]) + '<h1>Picture words</h1>' +
      '<p class="muted">Learn Spanish words from pictures: tap a part to hear it, then find it, label it and point to it when you hear a sentence.</p>';
    if (!all.length) { el.innerHTML = head + '<div class="notice info">No pictures yet. The picture sets arrive with the next data update.</div><p style="margin-top:12px"><a class="btn" href="#/pictures/bodymap">Body map</a></p>'; return; }
    const shown = all.filter((s) => lv === 'All' || s.lv === lv);
    const tile = (s) => {
      const n = partsOf(s).length, sc = MODES.map(([m, t]) => { const b = best(m, s); return b != null ? t + ' ' + b + '%' : ''; }).filter(Boolean);
      return '<a class="tile pic-tile" href="#/pictures/' + esc(s.id) + '"><div class="row" style="gap:6px"><span class="pill lv">' + esc(s.lv || '') + '</span><span class="muted small">' + n + ' word' + (n === 1 ? '' : 's') + (s.kind === 'cards' ? ' · cards' : '') + '</span></div>' +
        '<h3>' + esc(s.title) + '</h3><p>' + esc(s.intro || '') + '</p>' + (sc.length ? '<div class="meta small">Best: ' + esc(sc.join(' · ')) + '</div>' : '') + '</a>';
    };
    const known = new Set(GROUPS.map((g) => g[0]));
    const groups = GROUPS.concat(all.some((s) => !known.has(s.group)) ? [['__other', 'More pictures']] : []);
    el.innerHTML = head + seg('Level', 'plv', [['All', 'All']].concat(LEVELS.map((x) => [x, x])), lv) +
      groups.map(([g, t]) => {
        const ss = shown.filter((s) => (g === '__other' ? !known.has(s.group) : s.group === g));
        const bm = g === 'body' ? '<p style="margin:0 0 10px"><a class="btn sm" href="#/pictures/bodymap">Body map: where does it hurt?</a></p>' : '';
        if (!ss.length && !bm) return '';
        return '<h2 style="margin-top:18px">' + esc(t) + '</h2>' + bm + (ss.length ? '<div class="grid">' + ss.map(tile).join('') + '</div>' : '');
      }).join('') +
      (!shown.length ? '<div class="notice info" style="margin-top:12px">No pictures at this level yet.</div>' : '');
    el.querySelectorAll('[data-plv]').forEach((b) => (b.onclick = () => { st.picLv = b.dataset.plv; App.save(); listPage(el); }));
  }

  V.pictures = (el, p, q) => {
    p = p || {}; q = q || {};
    if (!p.id) return listPage(el);
    const s = byId(p.id);
    if (!s) { el.innerHTML = crumb([['Picture words', '#/pictures'], ['Not found']]) + '<h1>Picture set not found</h1><p><a href="#/pictures">All picture words</a></p>'; return; }
    const hasPrint = !!(App.picturePrint && typeof App.picturePrint.sheet === 'function');
    const tabs = [['learn', 'Learn']].concat(MODES).concat(hasPrint ? [['print', 'Print']] : []);
    const tab = tabs.some((t) => t[0] === q.tab) ? q.tab : 'learn';
    el.innerHTML = crumb([['Practice', '#/practice'], ['Picture words', '#/pictures'], [s.title]]) + '<h1>' + esc(s.title) + '</h1>' +
      '<p class="muted">' + esc(s.intro || '') + ' <span class="pill lv">' + esc(s.lv || '') + '</span></p>' +
      '<nav class="lvtabs pic-tabs" aria-label="View">' + tabs.map(([k, t]) => '<a href="#/pictures/' + esc(s.id) + '?tab=' + k + '" class="' + (tab === k ? 'on' : '') + '"' + (tab === k ? ' aria-current="page"' : '') + '>' + esc(t) + '</a>').join('') + '</nav>' +
      '<div id="picTab" style="margin-top:12px"></div>';
    const box = el.querySelector('#picTab');
    if (tab === 'print') return App.picturePrint.sheet(box, s, q);
    if (tab === 'learn') return learnInto(box, s, {});
    quizTab(box, s, tab);
  };

  App.pictures = { embed, GROUPS, sets, byId, get: byId, svg, check, dictOf };
})();
