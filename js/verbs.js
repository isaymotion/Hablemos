/* Verb trainer (#/verbs, #/verbs/v/<n>, 0.7.0). Data: window.ES_VERBS (js/data/verbs.js); forms built by rule in js/conjugate.js (ESConj).
   #/verbs               list with a level filter and a search box, and the drill launcher
   #/verbs/v/<n>         one verb: forms grouped by tense (stacked rows, no wide table), speaker buttons, example sentences
   #/verbs?drill=choose  see the verb, person and tense; choose the form among four forms of the same verb
   #/verbs?drill=name    see a form; choose which tense and person it is
   #/verbs?drill=type    type the form (accent bar under the box); without the accents it is "almost" and counts as wrong
   Settings: state.settings.verbLv (all | A1 | A2 | B1 | B2 | C), verbTenses (array of ESConj group ids).
   Best scores: state.done.verbs['<lv>:<mode>'] = best % (numbers only).
   Forms that ESConj hides for safety (commands and "let's" forms of self-harm verbs) are absent from the form map, so the
   table shows a dash and the drills never ask them. */
(function () {
  const App = window.App;
  if (!App || typeof document === 'undefined' || !App.views) return;
  const { esc, shuffle } = App;
  const V = App.views, S = () => App.state;
  const C = window.ESConj, VERBS = () => (Array.isArray(window.ES_VERBS) ? window.ES_VERBS : []);
  const LVS = [['all', 'All'], ['A1', 'A1'], ['A2', 'A2'], ['B1', 'B1'], ['B2', 'B2'], ['C', 'Clinical']];
  const MODES = [['choose', 'Choose the form', 'See the verb, the person and the tense. Choose the right form.'], ['name', 'Name the form', 'See a form. Say which tense and person it is.'], ['type', 'Type the form', 'Write the form yourself. Accents count.']];
  const crumb = (items) => '<div class="breadcrumb">' + items.map(([t, h]) => (h ? '<a href="' + h + '">' + esc(t) + '</a>' : esc(t))).join(' / ') + '</div>';
  const forms = (v) => { try { return C.verb(v.inf, v) || {}; } catch (e) { return {}; } };
  const store = () => { const d = S().done; return d.verbs && typeof d.verbs === 'object' ? d.verbs : (d.verbs = {}); };
  const flat = (s) => String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  const lvOf = () => (LVS.some(([k]) => k === S().settings.verbLv) ? S().settings.verbLv : 'all');
  const groupsOf = () => { const g = S().settings.verbTenses; const ok = Array.isArray(g) ? g.filter((x) => C.GROUPS.some(([k]) => k === x)) : []; return ok.length ? ok : ['present']; };
  const pool = () => VERBS().map((v, n) => ({ v, n })).filter((x) => lvOf() === 'all' || x.v.lv === lvOf());
  const seg = (name, items, cur) => '<div class="seg vb-seg" role="group" aria-label="' + esc(name) + '">' + items.map(([k, t]) => '<button data-' + name + '="' + k + '" class="' + (cur === k ? 'on' : '') + '">' + esc(t) + '</button>').join('') + '</div>';

  V.verbs = (el, p, q) => {
    q = q || {};
    if (!C || !VERBS().length) return App.notYet ? App.notYet(el, 'Verb trainer', 'The verb trainer') : (el.innerHTML = '<h1>Verb trainer</h1>');
    if (MODES.some(([m]) => m === q.drill)) return drill(el, q.drill);
    const st = S().settings, lv = lvOf(), gs = groupsOf(), best = store();
    el.innerHTML = crumb([['Practice', '#/practice'], ['Verb trainer']]) + '<h1>Verb trainer</h1>' +
      '<p class="muted">' + VERBS().length + ' verbs with every form built by rule. Open a verb to see and hear its forms, or drill them. Forms are drafts for review.</p>' +
      '<div class="card stack"><span class="eyebrow">Drill</span><div><div class="muted small">Verbs</div>' + seg('lv', LVS, lv) + '</div>' +
      '<div><div class="muted small">Tenses (tap to add or remove)</div><div class="seg vb-seg" role="group" aria-label="Tenses">' + C.GROUPS.map(([k, t]) => '<button data-g="' + k + '" aria-pressed="' + gs.includes(k) + '" class="' + (gs.includes(k) ? 'on' : '') + '">' + esc(t) + '</button>').join('') + '</div></div>' +
      '<div class="grid">' + MODES.map(([m, t, d]) => { const b = best[lv + ':' + m]; return '<a class="tile" href="#/verbs?drill=' + m + '"><div class="row">' + (typeof b === 'number' ? '<span class="pill' + (b >= 80 ? ' good' : '') + '">Best ' + b + '%</span>' : '') + '</div><h3>' + esc(t) + '</h3><p>' + esc(d) + '</p></a>'; }).join('') + '</div></div>' +
      '<h2>Verbs</h2><input class="input" id="vbq" type="search" placeholder="Search a verb in Spanish or English" aria-label="Search verbs" autocomplete="off" autocapitalize="off"><div id="vblist" class="grid" style="margin-top:12px"></div>';
    const list = el.querySelector('#vblist'), box = el.querySelector('#vbq');
    const draw = () => {
      const t = flat(box.value.trim());
      const rows = pool().filter((x) => !t || flat(x.v.inf).includes(t) || flat(x.v.en).includes(t));
      list.innerHTML = rows.length ? rows.map((x) => '<a class="tile" href="#/verbs/v/' + x.n + '"><div class="row"><span class="pill">' + esc(x.v.lv === 'C' ? 'Clinical' : x.v.lv) + '</span>' + (x.v.clin && x.v.lv !== 'C' ? '<span class="pill">clinical</span>' : '') + '</div><h3 class="tl" style="margin-top:6px">' + esc(x.v.inf) + '</h3><p>' + esc(x.v.en) + '</p></a>').join('') : '<p class="muted">No verb matches. Try the infinitive.</p>';
    };
    box.oninput = draw; draw();
    el.querySelectorAll('[data-lv]').forEach((b) => (b.onclick = () => { st.verbLv = b.dataset.lv; App.save(); V.verbs(el, p, q); }));
    el.querySelectorAll('[data-g]').forEach((b) => (b.onclick = () => { let g = groupsOf(); g = g.includes(b.dataset.g) ? g.filter((x) => x !== b.dataset.g) : g.concat(b.dataset.g); st.verbTenses = g.length ? g : ['present']; App.save(); V.verbs(el, p, q); }));
  };

  V.verb = (el, p) => {
    const n = +p.n, v = VERBS()[n];
    if (!v || !C) { el.innerHTML = crumb([['Verb trainer', '#/verbs'], ['Not found']]) + '<h1>Verb not found</h1>'; return; }
    const f = forms(v);
    const cell = (id, who) => '<div class="vb-row"><span class="muted small">' + esc(who) + '</span>' + (f[id] ? '<b class="tl">' + esc(f[id]) + '</b>' + App.sayBtn(f[id]) : '<span class="muted" title="Not used">–</span><span></span>') + '</div>';
    const tense = ([t, label, es]) => '<div class="card vb-tense"><h3>' + esc(label) + ' <span class="muted small tl">' + esc(es) + '</span></h3>' + C.PERSONS.map((pp) => cell(t + '.' + pp, C.SUBJ_PRON[pp])).join('') + '</div>';
    const other = C.FORMS.filter((x) => !x.p);
    el.innerHTML = crumb([['Practice', '#/practice'], ['Verb trainer', '#/verbs'], [v.inf]]) +
      '<div class="row"><span class="pill">' + esc(v.lv === 'C' ? 'Clinical' : v.lv) + '</span>' + (v.p3 ? '<span class="pill">third person only</span>' : '') + '</div>' +
      '<h1 class="tl" style="margin-top:6px">' + esc(v.inf) + '</h1><p class="muted" style="font-size:1.05rem">' + esc(v.en) + ' ' + App.sayBtn(v.inf) + '</p>' +
      '<div class="notice warn" style="margin-bottom:12px">Draft for review. The forms are built by rule and the examples are practice wording pending review by a native Spanish-speaking clinician.</div>' +
      '<h2>Examples</h2>' + (v.ex || []).map(([es, en]) => '<div class="card vb-ex"><div><b class="tl">' + esc(es) + '</b><div class="muted">' + esc(en) + '</div></div>' + App.sayBtn(es) + '</div>').join('') +
      '<h2>Forms</h2><div class="vb-grid">' + C.TENSES.map(tense).join('') +
      '<div class="card vb-tense"><h3>Commands, gerund and participle</h3>' + other.map((x) => cell(x.id, x.tenseLabel)).join('') + '</div></div>' +
      '<div class="spread" style="margin-top:16px">' + (VERBS()[n - 1] ? '<a class="btn" href="#/verbs/v/' + (n - 1) + '">← ' + esc(VERBS()[n - 1].inf) + '</a>' : '<span></span>') + (VERBS()[n + 1] ? '<a class="btn" href="#/verbs/v/' + (n + 1) + '">' + esc(VERBS()[n + 1].inf) + ' →</a>' : '') + '</div>';
  };

  // One drill item: a verb and one of its forms in the chosen tense groups.
  const makeItems = (count) => {
    const gs = groupsOf(), ids = C.FORMS.filter((x) => gs.includes(x.group));
    const out = [], seen = new Set(), vs = pool();
    let guard = 0;
    while (out.length < count && guard++ < 600 && vs.length) {
      const x = vs[Math.floor(Math.random() * vs.length)], f = forms(x.v), F = ids[Math.floor(Math.random() * ids.length)];
      if (!F || !f[F.id] || seen.has(x.n + F.id)) continue;
      seen.add(x.n + F.id); out.push({ v: x.v, n: x.n, f, F, ans: f[F.id] });
    }
    return out;
  };
  const save = (mode, right, n) => { const k = lvOf() + ':' + mode, pct = Math.round((100 * right) / n); store()[k] = Math.max(pct, typeof store()[k] === 'number' ? store()[k] : 0); App.activity && App.activity(10); App.save(); };

  function drill(el, mode) {
    const title = MODES.find(([m]) => m === mode)[1], items = makeItems(10);
    el.innerHTML = crumb([['Practice', '#/practice'], ['Verb trainer', '#/verbs'], [title]]) + '<h1>' + esc(title) + '</h1>' +
      '<p class="muted small">' + esc(LVS.find(([k]) => k === lvOf())[1]) + ' verbs · ' + esc(groupsOf().map((g) => C.GROUPS.find(([k]) => k === g)[1]).join(', ')) + ' · <a href="#/verbs">change</a></p><div id="vbd"></div>';
    const box = el.querySelector('#vbd');
    if (items.length < 4) { box.innerHTML = '<div class="card">Not enough forms for this choice. <a href="#/verbs">Choose more verbs or tenses.</a></div>'; return; }
    const after = '<a class="btn" href="#/verbs">Verb trainer</a>';
    if (mode === 'choose') {
      App.runQuiz(box, items.map((it) => {
        const others = shuffle(Object.keys(it.f).filter((id) => it.f[id] !== it.ans).sort((a, b) => (a.split('.')[0] === it.F.tense ? -1 : 1) - (b.split('.')[0] === it.F.tense ? -1 : 1)).slice(0, 8).map((id) => it.f[id]).filter((s, i, a) => a.indexOf(s) === i)).slice(0, 3);
        return { q: it.v.inf + ' · ' + it.F.label, sub: it.v.en, opts: [it.ans].concat(others), a: 0, tlo: true, say: it.ans, hideSay: true, exp: it.F.label + ' of ' + it.v.inf + ': ' + it.ans };
      }).map((x) => { delete x.say; return x; }), { onDone: (r, n) => save(mode, r, n), after });
    } else if (mode === 'name') {
      App.runQuiz(box, items.map((it) => {
        const same = new Set(C.FORMS.filter((x) => it.f[x.id] === it.ans).map((x) => x.label));
        const others = shuffle(C.FORMS.filter((x) => !same.has(x.label) && it.f[x.id]).map((x) => x.label)).slice(0, 3);
        return { q: it.ans, tlq: true, sub: it.v.inf + ': ' + it.v.en, opts: [it.F.label].concat(others), a: 0, exp: same.size > 1 ? 'This form is also: ' + [...same].filter((l) => l !== it.F.label).join('; ') + '.' : '' };
      }), { onDone: (r, n) => save(mode, r, n), after });
    } else typeRound(box, items, after);
  }

  function typeRound(box, items, after) {
    let i = 0, right = 0;
    const Q = (window.LANG && LANG.quiz) || {};
    const draw = () => {
      if (i >= items.length) {
        const pct = Math.round((100 * right) / items.length);
        box.innerHTML = '<div class="card stack"><h3>' + esc(pct >= 80 ? Q.great || 'Great.' : pct >= 50 ? Q.ok || 'Good.' : Q.keepGoing || 'Keep going.') + ' ' + right + ' / ' + items.length + '</h3><div class="progress"><i style="width:' + pct + '%"></i></div><div class="row"><a class="btn primary" href="#/verbs?drill=type" data-again>Try again</a>' + after + '</div></div>';
        box.querySelector('[data-again]').onclick = (e) => { e.preventDefault(); drill(box.closest('#view') || box.parentElement, 'type'); };
        save('type', right, items.length); return;
      }
      const it = items[i];
      box.innerHTML = '<div class="card stack"><span class="eyebrow">Question ' + (i + 1) + ' of ' + items.length + '</span>' +
        '<div style="font-size:1.12rem;font-weight:600"><span class="tl">' + esc(it.v.inf) + '</span> · ' + esc(it.F.label) + '</div><div class="muted">' + esc(it.v.en) + '</div>' +
        '<form class="stack" autocomplete="off"><input class="input tl" id="vbin" aria-label="Type the form" autocapitalize="off" autocorrect="off" spellcheck="false"><div id="vbbar"></div><button class="btn primary" type="submit">Check</button></form><div data-fb></div></div>';
      const inp = box.querySelector('#vbin'), form = box.querySelector('form'), fb = box.querySelector('[data-fb]');
      if (App.accentBar) { try { const bar = App.accentBar(inp); if (bar && bar.nodeType) box.querySelector('#vbbar').appendChild(bar); } catch (e) { /* the bar is optional */ } }
      inp.focus();
      form.onsubmit = (e) => {
        e.preventDefault();
        if (form.dataset.done) { i++; draw(); return; }
        const norm = (s) => String(s).trim().replace(/\s+/g, ' ').toLowerCase().replace(/[.!¡]/g, '');
        const typed = norm(inp.value), ok = typed === norm(it.ans), near = !ok && flat(typed) === flat(norm(it.ans));
        if (!typed) return;
        if (ok) right++;
        App.recordAnswer && App.recordAnswer(ok);
        form.dataset.done = '1'; inp.readOnly = true; inp.classList.add(ok ? 'vb-ok' : 'vb-no');
        fb.innerHTML = '<div class="notice ' + (ok ? 'good' : 'warn') + '">' + (ok ? esc(Q.right || 'Correct.') : near ? 'Almost: watch the accent.' : 'Not quite.') + ' <b class="tl">' + esc(it.ans) + '</b> ' + App.sayBtn(it.ans) + '</div>';
        form.querySelector('button[type=submit]').textContent = i + 1 < items.length ? 'Next' : 'See the score';
      };
    };
    draw();
  }
})();
