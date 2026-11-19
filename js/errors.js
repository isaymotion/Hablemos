/* Find the mistake (#/errors, Hablemos 0.11.0, ported from Hanashimashō 0.25.0). Data: window.GRAMMAR_ERRORS
   (js/data/grammar-errors-*.js): { id: 'e-a1-001', lv: 'A1'|'A2'|'B1'|'B2', l?: lesson id, type, bad, i, fix, en, why }.
   `bad` has exactly one wrong word, at index `i` of its space-separated words (a missing word: `i` is the word before
   the gap; an extra word: `i` is the extra word). The wrong sentence is shown as word tiles and is NEVER spoken: no
   speaker button, no App.speak. The learner taps the wrong word; then the right word is shown in place (the changed
   words of `fix`, found by comparing the two word lists from both ends), the whole `fix` with a speaker button, the
   English, `why` and a link to the lesson `l` when it exists in window.LESSONS.
   Level seg All / A1 / A2 / B1 / B2 (only levels with items; state.settings.errorsLv, ?lv=), 10 items a round.
   Score: state.done.errors['<lv>' | 'all'] = best % (numbers only; full rounds only). Mistakes: state.done.errors.miss =
   item ids (newest last, at most 200; a right answer takes the id off) for a "Practise my mistakes" round.
   API: App.errorsQs(lv, n) → n questions at a level ('all' or null = every level), App.errorsQs([ids]) → the questions of
   those items, in the shared question shape of App.drillRun (js/drillrun.js). App.errorsItems() = the valid items (QA). */
(function () {
  if (typeof document === 'undefined' || !window.App || !App.views) return;
  const { esc, pick } = App;
  const V = App.views, S = () => App.state;
  const crumb = (items) => '<div class="breadcrumb">' + items.map(([t, h]) => (h ? '<a href="' + h + '">' + esc(t) + '</a>' : esc(t))).join(' / ') + '</div>';
  const LVS = ['A1', 'A2', 'B1', 'B2'];
  const ROUND = 10, MISS_MAX = 200;
  const TYPES = { 'ser-estar': 'Ser or estar', gender: 'Gender', agreement: 'Agreement', article: 'Article', 'verb-form': 'Verb form', tense: 'Tense',
    mood: 'Indicative or subjunctive', preposition: 'Preposition', pronoun: 'Pronoun', 'word-choice': 'Word choice', 'false-friend': 'False friend', accent: 'Accent mark' };
  const isStr = (x) => typeof x === 'string' && x.trim() !== '';
  const words = (s) => String(s || '').trim().split(/ +/);
  const plain = (s) => String(s || '').trim().replace(/\s+/g, ' ');
  const valid = (x) => x && isStr(x.id) && isStr(x.bad) && isStr(x.fix) && Number.isInteger(x.i) && x.i >= 0 && x.i < words(x.bad).length && plain(x.bad) !== plain(x.fix);
  const items = () => (Array.isArray(window.GRAMMAR_ERRORS) ? window.GRAMMAR_ERRORS : []).filter(valid);
  App.errorsItems = items;
  const lessonOf = (id) => (id && Array.isArray(window.LESSONS) ? LESSONS.find((l) => l.id === id) : null);
  const store = () => { const d = S().done; if (!d.errors || typeof d.errors !== 'object' || Array.isArray(d.errors)) d.errors = {}; return d.errors; };
  const missList = () => { const st = store(); if (!Array.isArray(st.miss)) st.miss = []; return st.miss; };
  const noteMiss = (id, ok) => { const m = missList(), at = m.indexOf(id); if (at >= 0) m.splice(at, 1); if (!ok) { m.push(id); if (m.length > MISS_MAX) m.splice(0, m.length - MISS_MAX); } };
  const bestOf = (k) => { const v = store()[k]; return typeof v === 'number' ? v : null; };

  // The words that differ between bad and fix: common start p, common end s (in words).
  const diff = (x) => {
    const a = words(x.bad), b = words(x.fix);
    let p = 0; while (p < a.length && p < b.length && a[p] === b[p]) p++;
    let s = 0; while (s < a.length - p && s < b.length - p && a[a.length - 1 - s] === b[b.length - 1 - s]) s++;
    return { a, p, was: a.slice(p, a.length - s), now: b.slice(p, b.length - s), s };
  };
  const tile = (w, k) => '<button type="button" class="er-tile tl" data-w="' + k + '"><span class="er-w">' + esc(w) + '</span></button>';
  const tilesHtml = (x) => '<div class="er-tiles" role="group" aria-label="Words of the sentence">' + words(x.bad).map((w, k) => tile(w, k)).join('') + '</div>';
  // After answering: the wrong word(s) struck through and the right word(s) in place; the tapped word marked if it was not the one.
  const revealed = (x, chosen) => {
    const d = diff(x), out = [];
    const sp = (w, cls) => '<span class="er-tile tl' + (cls ? ' ' + cls : '') + '"><span class="er-w">' + esc(w) + '</span></span>';
    const nowTiles = () => d.now.map((nw) => sp(nw, 'er-now')).join('');
    d.a.forEach((w, k) => {
      const inWas = k >= d.p && k < d.p + d.was.length;
      if (!d.was.length && k === d.p) out.push(nowTiles());      // a missing word goes in right after word p - 1 (= i)
      let cls = inWas ? 'er-was' : k === x.i ? 'er-at' : '';
      if (k === chosen && chosen !== x.i) cls += ' er-chose';
      out.push(sp(w, cls.trim()));
      if (inWas && k === d.p + d.was.length - 1) out.push(nowTiles());
    });
    if (!d.was.length && d.p >= d.a.length) out.push(nowTiles());
    return '<div class="er-tiles er-done" aria-label="The corrected sentence">' + out.join('') + '</div>';
  };

  const makeQ = (x) => ({
    drill: 'errors', id: x.id, lv: x.lv,
    html: '<div class="muted small">' + esc(TYPES[x.type] ? TYPES[x.type] + ' · ' : '') + 'One word is wrong. Tap it.</div>' + tilesHtml(x) + (isStr(x.en) ? '<div class="muted small er-en">' + esc(x.en) + '</div>' : ''),
    mount: (card, answer) => card.querySelectorAll('.er-tiles .er-tile').forEach((b) => (b.onclick = () => answer(+b.dataset.w === x.i, +b.dataset.w, b))),
    reveal: (card, ok, ch) => {
      const t = card.querySelector('.er-tiles'); if (t) t.outerHTML = revealed(x, ok ? x.i : ch);
      const e = card.querySelector('.er-en'); if (e) e.remove();
    },
    fb: (ok, ch) => {
      const ws = words(x.bad), d = diff(x), l = lessonOf(x.l);
      const what = d.was.length ? (d.now.length ? 'The wrong word is <span class="tl">' + esc(ws[x.i]) + '</span>' : 'The extra word is <span class="tl">' + esc(ws[x.i]) + '</span>') : 'A word is missing after <span class="tl">' + esc(ws[x.i]) + '</span>';
      return '<div class="small">' + what + (ok ? '.' : '. You tapped <span class="tl">' + esc(ws[ch] != null ? ws[ch] : '') + '</span>.') + '</div>' +
        '<div class="er-fix"><span class="tl">' + esc(x.fix) + '</span>' + App.sayBtn(x.fix, x.fix) + '</div>' +
        (isStr(x.en) ? '<div>' + esc(x.en) + '</div>' : '') + (isStr(x.why) ? '<div class="muted small er-why">' + esc(x.why) + '</div>' : '') +
        (l ? '<div class="small"><a href="#/lessons/' + encodeURIComponent(l.id) + '">Lesson: ' + esc(l.title) + '</a></div>' : '');
    },
    done: (ok) => noteMiss(x.id, ok)
  });
  App.errorsQs = (lv, n) => {
    const all = items();
    if (Array.isArray(lv)) return lv.map((id) => all.find((x) => x.id === id)).filter(Boolean).map(makeQ);
    const pool = all.filter((x) => !lv || lv === 'all' || x.lv === lv);
    return pick(pool, n || ROUND).map(makeQ);
  };

  V.errors = (el, p, q) => {
    q = q || {};
    const st = S().settings, all = items();
    const lvs = LVS.filter((lv) => all.some((x) => x.lv === lv));
    if (q.lv && (q.lv === 'all' || lvs.includes(q.lv))) { st.errorsLv = q.lv; App.save(); }
    const head = crumb([['Practice', '#/practice'], ['Find the mistake']]) + '<h1>Find the mistake</h1>' +
      '<p class="muted">Each sentence has one wrong word: a gender, an ending, ser or estar, a tense, a preposition and so on. Tap it. Then you see the sentence put right, with its sound, its meaning and why. The app never reads the wrong sentence aloud.</p>';
    if (!all.length) { el.innerHTML = head + '<div class="notice info">No items yet. The find-the-mistake sentences are still being written.</div>'; return; }
    let lv = st.errorsLv === 'all' || lvs.includes(st.errorsLv) ? st.errorsLv : 'all';
    el.innerHTML = head + '<div class="card stack" id="erset"></div><div id="erround" style="margin-top:14px"></div>';
    const set = el.querySelector('#erset'), box = el.querySelector('#erround');
    const inLv = () => all.filter((x) => lv === 'all' || x.lv === lv);
    const misses = () => { const ms = new Set(missList()); return inLv().filter((x) => ms.has(x.id)); };
    const drawSet = () => {
      const pool = inLv(), nm = misses().length, b = bestOf(lv);
      set.innerHTML = '<div class="seg" role="group" aria-label="Level">' + ['all'].concat(lvs).map((k) => { const bk = bestOf(k); return '<button type="button" data-lv="' + k + '" aria-pressed="' + (lv === k) + '" class="' + (lv === k ? 'on' : '') + '">' + (k === 'all' ? 'All' : k) + (bk != null ? ' <small class="er-best">' + bk + '%</small>' : '') + '</button>'; }).join('') + '</div>' +
        '<p class="muted small" style="margin:0">' + pool.length + ' sentence' + (pool.length === 1 ? '' : 's') + (lv === 'all' ? ' at all levels' : ' at ' + lv) + (nm ? ', ' + nm + ' in your mistakes' : '') + (b != null ? '. Best ' + b + '%' : '') + '. ' + ROUND + ' a round.</p>' +
        '<div class="row" style="flex-wrap:wrap"><button type="button" class="btn primary" id="ergo"' + (pool.length ? '' : ' disabled') + '>Start</button>' +
        (nm ? '<button type="button" class="btn" id="ermiss">Practise my mistakes (' + nm + ')</button>' : '') + '</div>';
      set.querySelectorAll('[data-lv]').forEach((x) => (x.onclick = () => { lv = x.dataset.lv; st.errorsLv = lv; App.save(); App.keyHandler = null; box.innerHTML = ''; drawSet(); }));
      set.querySelector('#ergo').onclick = () => run(pick(inLv(), ROUND), lv);
      const mb = set.querySelector('#ermiss'); if (mb) mb.onclick = () => run(pick(misses(), ROUND), null);
    };
    const run = (list, key) => {
      if (!list.length) return;
      App.drillRun(box, list.map(makeQ), {
        label: key ? '' : 'mistakes',
        onDone: (r, n, pct) => {
          let rec = '';
          if (key) { const old = bestOf(key); if (old == null || pct > old) { store()[key] = pct; if (old != null) rec = '<span class="pill good">New best</span>'; } }
          App.activity(Math.max(1, r)); App.save();
          drawSet();
          return rec + '<button type="button" class="btn primary" data-act="again">New round</button>' + (misses().length ? '<button type="button" class="btn" data-act="miss">Practise my mistakes</button>' : '') + '<a class="btn" href="#/progress">Progress</a>';
        },
        scoreNote: () => (key ? 'Best ' + (bestOf(key) != null ? bestOf(key) : 0) + '% ' + (key === 'all' ? 'at all levels' : 'at ' + key) + '.' : 'Mistakes rounds do not change your best score.'),
        bind: (c) => {
          const a = c.querySelector('[data-act=again]'); if (a) a.onclick = () => (key || !misses().length ? run(pick(inLv(), ROUND), lv) : run(pick(misses(), ROUND), null));
          const m = c.querySelector('[data-act=miss]'); if (m) m.onclick = () => run(pick(misses(), ROUND), null);
        }
      });
      box.scrollIntoView({ block: 'start', behavior: 'smooth' });
    };
    drawSet();
  };
})();
