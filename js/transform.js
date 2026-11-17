/* Transform the sentence (#/transform, Hablemos 0.7.0, ported from Hanashimashō 0.23.0). Data: window.GRAMMAR_TRANSFORM
   (js/data/grammar-transform-*.js). Modes: choose (the model answer `to` and the three `wrong`, shuffled, keys 1–4) or type.
   Typed answers: right when, ignoring case, spaces, commas, ¿ ¡ and end punctuation, they equal `to` or an `alt`. If they match
   only once accents (and ñ, ü) are ignored, the page says "Almost: check the accents"; that counts as wrong.
   Best scores: state.done.transform['<lv>:<mode>'] = best % (lv A1 | A2 | B1 | B2 | all; mode choose | type); numbers only.
   Missed items: state.done.transform.miss = [item ids] (newest last, at most 200) for "Practise my mistakes" (no score kept).
   Settings: state.settings.transformLv, transformType (a group below or 'all'), transformMode (choose | type), transformCount (10 | 20).
   Also defines App.accentBar(inputEl) (á é í ó ú ñ ü ¿ ¡ buttons under a text box) if no other file has. Wrong sentences are never spoken. */
(function () {
  const { esc, shuffle, pick } = App;
  const V = App.views, S = () => App.state;
  const crumb = (items) => '<div class="breadcrumb">' + items.map(([t, h]) => (h ? '<a href="' + h + '">' + esc(t) + '</a>' : esc(t))).join(' / ') + '</div>';
  const LEVELS = ['A1', 'A2', 'B1', 'B2'];
  const MODES = [['choose', 'Choose'], ['type', 'Type']];
  const MISS_CAP = 200;
  const TYPES = {
    neg: 'Negative', question: 'Question word', plural: 'Plural subject', gender: 'He ↔ she', 'usted-tu': 'Usted ↔ tú', 'ir-a': 'ir a + infinitive',
    'past-pret': 'Preterite', 'past-imp': 'Imperfect', perfect: 'Present perfect', progressive: 'estar + -ndo', command: 'Command', 'neg-command': 'Negative command',
    'pronoun-do': 'Object pronoun', 'pronoun-io': 'Two pronouns (se lo)', join: 'Joining', hace: 'hace … que', compare: 'Comparing',
    'subj-wish': 'Subjunctive: wishes, feelings, doubt', 'subj-time': 'Subjunctive: cuando, para que', reported: 'Reported speech', 'se-imp': 'Impersonal se',
    'conditional-polite': 'Polite conditional', 'si-unreal': 'Unreal si-clause', 'passive-se': 'Passive', regret: 'Regret', concession: 'aunque, sin que'
  };
  // Human groups of the data's `type` values for the filter; anything unknown goes to Other.
  const GROUPS = [
    ['negq', 'Negatives and questions', ['neg', 'question']],
    ['person', 'Change the person', ['plural', 'gender', 'usted-tu']],
    ['now', 'Plans and right now', ['ir-a', 'progressive']],
    ['past', 'Past and perfect', ['past-pret', 'past-imp', 'perfect']],
    ['cmd', 'Commands', ['command', 'neg-command']],
    ['pron', 'Pronouns', ['pronoun-do', 'pronoun-io']],
    ['join', 'Joining and comparing', ['join', 'hace', 'compare', 'concession']],
    ['subj', 'Subjunctive', ['subj-wish', 'subj-time']],
    ['report', 'Reporting, se and passive', ['reported', 'se-imp', 'passive-se']],
    ['polite', 'Polite and hypothetical', ['conditional-polite', 'si-unreal', 'regret']],
    ['other', 'Other', []]
  ];
  const groupOf = (t) => { const g = GROUPS.find((x) => x[2].includes(t)); return g ? g[0] : 'other'; };
  const typeLabel = (t) => TYPES[t] || (GROUPS.find((g) => g[0] === groupOf(t)) || GROUPS[GROUPS.length - 1])[1];
  const isStr = (x) => typeof x === 'string' && x.trim() !== '';
  const usable = (x) => x && isStr(x.id) && LEVELS.includes(x.lv) && isStr(x.instr) && isStr(x.to) &&
    (isStr(x.from) || (Array.isArray(x.from) && x.from.length && x.from.every(isStr)));
  const canChoose = (x) => Array.isArray(x.wrong) && x.wrong.filter(isStr).length >= 3;
  const items = () => (Array.isArray(window.GRAMMAR_TRANSFORM) ? window.GRAMMAR_TRANSFORM : []).filter(usable);
  const alts = (x) => [x.to].concat(Array.isArray(x.alt) ? x.alt.filter(isStr) : []);

  /* ---------- Accent bar (shared: another drill may reuse it) ---------- */
  if (!App.accentBar) {
    const KEYS = ['á', 'é', 'í', 'ó', 'ú', 'ñ', 'ü', '¿', '¡'];
    // Puts a row of buttons right after inputEl; each inserts its letter at the cursor (Shift for a capital). Returns the row.
    App.accentBar = (inputEl) => {
      const bar = document.createElement('div');
      bar.className = 'tf-accents';
      bar.setAttribute('role', 'group');
      bar.setAttribute('aria-label', 'Insert a Spanish letter');
      bar.innerHTML = KEYS.map((k) => '<button type="button" class="tf-acc" data-ch="' + k + '" aria-label="Insert ' + k + '">' + k + '</button>').join('');
      bar.addEventListener('mousedown', (e) => { if (e.target.closest('.tf-acc')) e.preventDefault(); });   // keep the focus (and the phone keyboard) in the box
      bar.addEventListener('click', (e) => {
        const b = e.target.closest('.tf-acc'); if (!b || inputEl.disabled || inputEl.readOnly) return;
        const ch = e.shiftKey ? b.dataset.ch.toUpperCase() : b.dataset.ch;
        const s = inputEl.selectionStart == null ? inputEl.value.length : inputEl.selectionStart;
        const t = inputEl.selectionEnd == null ? s : inputEl.selectionEnd;
        inputEl.focus();
        if (typeof inputEl.setRangeText === 'function') inputEl.setRangeText(ch, s, t, 'end');
        else { inputEl.value = inputEl.value.slice(0, s) + ch + inputEl.value.slice(t); }
        inputEl.dispatchEvent(new Event('input', { bubbles: true }));
      });
      inputEl.insertAdjacentElement('afterend', bar);
      return bar;
    };
  }

  /* ---------- Typed answers ---------- */
  const normT = (s) => String(s || '').normalize('NFC').toLowerCase().replace(/[’']/g, "'").replace(/[¿¡?!.,;:…"]/g, ' ').replace(/\s+/g, ' ').trim();
  const bare = (s) => normT(s).normalize('NFD').replace(/[̀-ͯ]/g, '');
  // 'right' | 'almost' (right once accents are ignored) | 'wrong'
  const judge = (typed, x) => {
    const a = normT(typed); if (!a) return 'wrong';
    if (alts(x).some((t) => normT(t) === a)) return 'right';
    const b = bare(typed);
    return alts(x).some((t) => bare(t) === b) ? 'almost' : 'wrong';
  };
  App.transformMatches = (typed, t) => normT(typed) === normT(t);   // for QA
  App.transformJudge = judge;
  // Where a typed answer differs from the closest right one: common start and end kept, the middle marked.
  const diffHint = (typed, x) => {
    const A = [...normT(typed)];
    let best = null;
    alts(x).forEach((t) => {
      const B = [...normT(t)];
      let p = 0; while (p < A.length && p < B.length && A[p] === B[p]) p++;
      let q = 0; while (q < A.length - p && q < B.length - p && A[A.length - 1 - q] === B[B.length - 1 - q]) q++;
      if (!best || p + q > best.p + best.q) best = { B, p, q };
    });
    const mark = (C, p, q) => esc(C.slice(0, p).join('')) + '<mark class="tf-diff">' + (C.length - p - q > 0 ? esc(C.slice(p, C.length - q).join('')) : '‸') + '</mark>' + esc(C.slice(C.length - q).join(''));
    return '<div class="tf-hint"><div><span class="muted small">Yours:</span> <span class="tf-h tl">' + mark(A, best.p, best.q) + '</span></div>' +
      '<div><span class="muted small">Closest answer:</span> <span class="tf-h tl">' + mark(best.B, best.p, best.q) + '</span></div>' +
      '<div class="muted small">' + (best.p ? 'The start matches; the marked part differs.' : 'It differs from the start: see the marked part.') + '</div></div>';
  };

  /* ---------- State ---------- */
  const store = () => { const d = S().done; if (!d.transform || typeof d.transform !== 'object' || Array.isArray(d.transform)) d.transform = {}; return d.transform; };
  const missList = () => { const b = store(); if (!Array.isArray(b.miss)) b.miss = []; return b.miss; };
  const addMiss = (id) => { const m = missList(), i = m.indexOf(id); if (i >= 0) m.splice(i, 1); m.push(id); if (m.length > MISS_CAP) m.splice(0, m.length - MISS_CAP); };
  const dropMiss = (id) => { const m = missList(), i = m.indexOf(id); if (i >= 0) m.splice(i, 1); };
  const seg = (label, list, cur, attr) => '<div class="seg" role="group" aria-label="' + esc(label) + '">' + list.map(([k, t]) => '<button type="button" data-' + attr + '="' + esc(k) + '" class="' + (String(cur) === String(k) ? 'on' : '') + '" aria-pressed="' + (String(cur) === String(k)) + '">' + esc(t) + '</button>').join('') + '</div>';
  const lessonLink = (x) => { const l = x.l && (window.LESSONS || []).find((y) => y.id === x.l); return l ? '<a class="small" href="#/lessons/' + esc(l.id) + '">Lesson: ' + esc(l.title) + '</a>' : ''; };
  const fromHtml = (x) => (Array.isArray(x.from) ? x.from : [x.from]).map((s) => '<div class="tf-from"><span class="tl">' + esc(s) + '</span> ' + App.sayBtn(s) + '</div>').join('');

  V.transform = (el) => {
    const st = S().settings;
    const mode = () => (MODES.some((m) => m[0] === st.transformMode) ? st.transformMode : 'choose');
    const byMode = () => items().filter((x) => mode() !== 'choose' || canChoose(x));
    const levels = () => { const p = byMode(); return LEVELS.filter((lv) => p.some((x) => x.lv === lv)); };
    const level = () => (levels().includes(st.transformLv) ? st.transformLv : 'all');
    const byLevel = () => { const lv = level(); return byMode().filter((x) => lv === 'all' || x.lv === lv); };
    const groups = () => { const p = byLevel(); return GROUPS.filter((g) => p.some((x) => groupOf(x.type) === g[0])); };
    const group = () => (groups().some((g) => g[0] === st.transformType) ? st.transformType : 'all');
    const pool = () => { const g = group(); return byLevel().filter((x) => g === 'all' || groupOf(x.type) === g); };
    const count = () => (st.transformCount === 20 ? 20 : 10);
    const misses = () => { const ids = new Set(missList()); return byMode().filter((x) => ids.has(x.id)); };

    el.innerHTML = crumb([['Practice', '#/practice'], ['Transform the sentence']]) + '<h1>Transform the sentence</h1>' +
      '<p class="muted">Change a Spanish sentence the way the instruction says: make it negative, put it in the past, switch usted and tú, join two sentences, and more. <b>Choose</b> the right version from four, or <b>Type</b> it yourself.</p>' +
      '<div class="card stack" id="tfset"></div><div id="tf" style="margin-top:14px"></div>';
    const set = el.querySelector('#tfset'), box = el.querySelector('#tf');
    const drawSet = () => {
      if (!items().length) { set.innerHTML = '<div class="notice">No items yet. The practice sentences are still being written; check back after the next update.</div>'; return; }
      const b = store(), lv = level(), n = pool().length, nm = misses().length;
      const bestOf = (k) => (typeof b[k + ':' + mode()] === 'number' ? ' · ' + b[k + ':' + mode()] + '%' : '');
      set.innerHTML = '<div class="tf-ctl">' + seg('Mode', MODES, mode(), 'tm') + seg('Number of items', [[10, '10'], [20, '20']], count(), 'tc') + '</div>' +
        '<div class="tf-ctl">' + seg('Level', [['all', 'All' + bestOf('all')]].concat(levels().map((x) => [x, x + bestOf(x)])), lv, 'tl') + '</div>' +
        '<div class="tf-ctl">' + seg('Kind of change', [['all', 'All kinds']].concat(groups().map((g) => [g[0], g[1]])), group(), 'tg') + '</div>' +
        '<p class="muted small" style="margin:0">' + n + ' item' + (n === 1 ? '' : 's') + ' at this choice' + (n && n < count() ? '; the round uses all of them' : '') + '.</p>' +
        '<div class="row"><button class="btn primary" id="tfgo"' + (n ? '' : ' disabled') + '>Start</button>' +
        (nm ? '<button class="btn" id="tfmiss">Practise my mistakes (' + nm + ')</button>' : '') + '</div>';
      const on = (attr, key, num) => set.querySelectorAll('[data-' + attr + ']').forEach((x) => (x.onclick = () => { st[key] = num ? +x.dataset[attr] : x.dataset[attr]; App.save(); box.innerHTML = ''; App.keyHandler = null; drawSet(); }));
      on('tm', 'transformMode'); on('tc', 'transformCount', true); on('tl', 'transformLv'); on('tg', 'transformType');
      set.querySelector('#tfgo').onclick = () => run(pick(pool(), count()), level() + ':' + mode());
      const mm = set.querySelector('#tfmiss'); if (mm) mm.onclick = () => run(pick(misses(), count()), null);
    };

    // One round. key: '<lv>:<mode>' for the best score, or null for a mistakes round (no score kept).
    const run = (list, key) => {
      if (!list.length) return;
      const md = mode();
      let i = 0, right = 0;
      const one = () => {
        App.keyHandler = null;
        if (i >= list.length) {
          const pct = Math.round((100 * right) / list.length), b = store();
          if (key) b[key] = Math.max(pct, typeof b[key] === 'number' ? b[key] : 0);
          App.activity(10); App.save();
          box.innerHTML = '<div class="card stack" data-tfscore><h3>' + right + ' / ' + list.length + ' right</h3><div class="progress"><i style="width:' + pct + '%"></i></div>' +
            (key ? '<p class="muted small" style="margin:0">Best for this level and mode: ' + b[key] + '%.</p>' : '<p class="muted small" style="margin:0">Mistakes round. Items you get right leave the list.</p>') +
            '<div class="row"><button class="btn primary" id="tfagain">New round</button>' + (misses().length ? '<button class="btn" id="tfmiss2">Practise my mistakes</button>' : '') + '</div></div>';
          box.querySelector('#tfagain').onclick = () => (key ? run(pick(pool(), count()), level() + ':' + mode()) : run(pick(misses(), count()), null));
          const m2 = box.querySelector('#tfmiss2'); if (m2) m2.onclick = () => run(pick(misses(), count()), null);
          box.querySelector('#tfagain').focus();
          drawSet();
          return;
        }
        const x = list[i];
        const opts = md === 'choose' ? shuffle([x.to].concat(x.wrong.filter(isStr).slice(0, 3))) : [];
        let done = false;
        box.innerHTML = '<div class="card stack" data-tid="' + esc(x.id) + '"><div class="spread"><span class="eyebrow">Item ' + (i + 1) + ' of ' + list.length + '</span><span class="small muted">' + esc(x.lv) + ' · ' + esc(typeLabel(x.type)) + '</span></div>' +
          '<div class="progress"><i style="width:' + Math.round((100 * i) / list.length) + '%"></i></div>' +
          '<div class="tf-instr">' + esc(x.instr) + '</div>' +
          '<div class="tf-froms">' + fromHtml(x) + '</div>' +
          (md === 'choose'
            ? '<div class="opts">' + opts.map((o, k) => '<button class="opt tl" data-k="' + k + '"><span class="tf-key" aria-hidden="true">' + (k + 1) + '</span>' + esc(o) + '</button>').join('') + '</div>'
            : '<div class="stack tf-typebox" style="gap:8px"><label class="small" for="tftype">Type the new sentence in Spanish</label><input class="input tl" id="tftype" autocomplete="off" autocapitalize="sentences" spellcheck="false" lang="es">' +
              '<div class="row"><button class="btn primary" id="tfcheck">Check</button></div></div>') +
          '<div id="tffb"></div></div>';
        const $ = (q) => box.querySelector(q);
        const finish = (verdict, extra) => {
          done = true;
          const ok = verdict === 'right';
          if (ok) { right++; dropMiss(x.id); } else addMiss(x.id);
          App.save();
          const others = alts(x).slice(1);
          const head = ok ? '<b>' + esc(LANG.quiz.right) + '</b>'
            : verdict === 'almost' ? '<b>Almost: check the accents.</b> <span>Every letter is right; an accent, ñ or ü is missing or extra. It counts as a mistake so you see it again.</span>'
            : '<b>' + esc(LANG.quiz.wrong) + '</b>';
          $('#tffb').innerHTML = '<div class="feedback ' + (ok ? 'ok' : verdict === 'almost' ? 'mid' : 'no') + ' stack tf-fb">' + head + (extra || '') +
            '<div class="tf-to"><span class="tl">' + esc(x.to) + '</span> ' + App.sayBtn(x.to) + '</div>' +
            (others.length ? '<div class="small"><span class="muted">Also right:</span> ' + others.map((t) => '<span class="tl">' + esc(t) + '</span>').join(' · ') + '</div>' : '') +
            (isStr(x.en) ? '<div>' + esc(x.en) + '</div>' : '') + lessonLink(x) + '</div>' +
            '<div class="row" style="margin-top:10px"><button class="btn primary" id="tfnext">' + (i + 1 < list.length ? 'Next' : 'See score') + '</button></div>';
          $('#tfnext').onclick = () => { i++; one(); };
          $('#tfnext').focus();
        };
        if (md === 'choose') {
          const pickOpt = (k) => {
            if (done) return;
            const ok = opts[k] === x.to;
            box.querySelectorAll('.opt').forEach((b) => { b.disabled = true; if (opts[+b.dataset.k] === x.to) b.classList.add('right'); });
            if (!ok) box.querySelector('.opt[data-k="' + k + '"]').classList.add('wrong');
            finish(ok ? 'right' : 'wrong');
          };
          box.querySelectorAll('.opt').forEach((b) => (b.onclick = () => pickOpt(+b.dataset.k)));
          App.keyHandler = (e) => {
            if (e.target.matches('input,textarea,select')) return;
            if (!done && /^[1-4]$/.test(e.key) && +e.key <= opts.length) { e.preventDefault(); pickOpt(+e.key - 1); }
            else if (done && e.key === 'Enter' && !e.target.matches('button,a')) { e.preventDefault(); $('#tfnext').click(); }
          };
        } else {
          const inp = $('#tftype');
          const bar = App.accentBar(inp);
          const check = () => {
            if (done) return;
            const typed = inp.value.trim();
            if (!typed) { App.toast('Type the new sentence first.'); inp.focus(); return; }
            const v = judge(typed, x);
            inp.disabled = true; $('#tfcheck').disabled = true; bar.querySelectorAll('button').forEach((b) => (b.disabled = true));
            finish(v, v === 'wrong' ? diffHint(typed, x) : '');
          };
          $('#tfcheck').onclick = check;
          inp.onkeydown = (e) => { if (e.key === 'Enter' && !e.isComposing) { e.preventDefault(); check(); } };
          App.keyHandler = (e) => { if (done && e.key === 'Enter' && !e.target.matches('button,a,input')) { e.preventDefault(); $('#tfnext').click(); } };
          setTimeout(() => { if (box.contains(inp) && !done) inp.focus({ preventScroll: true }); }, 50);
        }
      };
      one();
    };
    drawSet();
  };
})();
