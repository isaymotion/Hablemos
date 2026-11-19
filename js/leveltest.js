/* Level review test (#/test, Hablemos 0.9.0, ported from Hanashimashō 0.24.0). A mixed test for one level (A1, A2, B1, B2),
   built at start from existing data:
     Grammar      10 from the level's lesson quizzes (LESSONS[].quiz and LESSON_EXTRA[id].quiz, spread over the lessons)
                  + 6 from GRAMMAR_CLOZE of the level (js/cloze.js item shape)
     Verbs        6 from ES_VERBS of the level or below (not the clinical set), forms of the tenses that level teaches
                  (A1 present; A2 + preterite, imperfect, present perfect, commands; B1 + future, conditional, present
                  subjunctive and the B1 commands; B2 + imperfect subjunctive). Labels as in js/verbs.js; forms come from
                  ESConj.verb, which leaves out the HIDE forms, and the HIDE verbs are not asked at all. Wrong options are
                  other persons or tenses of the same verb, four different strings.
     Vocabulary   12: 6 meaning (Spanish → English) + 6 in context (the DICT_EX sentence with hit or the headword blanked),
                  from dictionary words whose App.exampleFor(e) has the level. Wrong options: other headwords of the same pos
                  (never one with the same English, never a second sense of the right word, no conjugated forms, nothing
                  from the risk or stigma topics). When fewer than 12 words of the level have an example, the rest comes
                  from WORD_PAIRS of the level (opposites and collocations).
     Listening    4: a lesson example sentence (.ex) of the level is spoken, text hidden, replay allowed; choose the meaning
                  among 4 English lines of the same level.
     Reading      one READING passage of the level with its own q questions, then LISTEN_Q[id] questions if any (at most 6).
   There is no sentence-order section (Spanish word order is free). A section whose pool is empty is skipped and the total
   adjusts; missing globals never crash the page. No feedback until the end; optional 25-minute timer
   (state.settings.testTimer, off by default). The test in progress is kept in state.testRun (resume or discard).
   Level choice: state.settings.testLv.
   Scores: state.done.test['<lv>'] = best % ; state.done.testInfo['<lv>'] = { best, of, at, areas: { grammar: [right, of], … },
   last: { pct, right, of, at, areas } } (areas of the best run in .areas, of the last run in .last). Area keys:
   grammar, verbs, vocab, listening, reading. */
(function () {
  const App = window.App;
  if (!App || typeof document === 'undefined' || !App.views) return;
  const { esc, shuffle, pick, norm } = App;
  const V = App.views, S = () => App.state;
  const LVS = ['A1', 'A2', 'B1', 'B2'];
  const lvIdx = (lv) => LVS.indexOf(lv);
  const TIME = 25 * 60;
  const crumb = (items) => '<div class="breadcrumb">' + items.map(([t, h]) => (h ? '<a href="' + h + '">' + esc(t) + '</a>' : esc(t))).join(' / ') + '</div>';
  const AREAS = [['grammar', 'Grammar'], ['verbs', 'Verbs'], ['vocab', 'Vocabulary'], ['listening', 'Listening'], ['reading', 'Reading']];
  const AREA_NAME = Object.fromEntries(AREAS);
  const has = (name) => !!(App.views && typeof App.views[name] === 'function');
  const DRILL = {
    grammar: (lv) => ['#/cloze?lv=' + lv, 'Fill the blank (' + lv + ')'],
    verbs: (lv) => ['#/verbs', 'Verb trainer (' + lv + ' verbs)'],
    vocab: (lv, run) => (run && run.items.some((x) => x.area === 'vocab' && (x.kind === 'opp' || x.kind === 'col')) && has('pairs') ? ['#/pairs', 'Word pairs'] : ['#/vocab', 'Vocabulary quiz']),
    listening: () => (has('listen') ? ['#/listen', 'Listening practice'] : ['#/psych/listen', 'Listening drill']),
    reading: () => ['#/reading', 'Reading passages']
  };
  const arr = (x) => (Array.isArray(x) ? x : []);
  const Q = () => (window.LANG && LANG.quiz) || { great: '¡Muy bien!', ok: 'Bien.', keepGoing: 'Sigue así.' };
  const lessonsOf = (lv) => arr(window.LESSONS).filter((l) => l && l.level === lv);
  const extraOf = (id) => (window.LESSON_EXTRA && typeof window.LESSON_EXTRA === 'object' && window.LESSON_EXTRA[id] && typeof window.LESSON_EXTRA[id] === 'object' ? window.LESSON_EXTRA[id] : {});
  const okQ = (k) => Array.isArray(k) && typeof k[0] === 'string' && Array.isArray(k[1]) && k[1].length >= 2 && k[1].every((o) => typeof o === 'string' && o) &&
    Number.isInteger(k[2]) && k[2] >= 0 && k[2] < k[1].length && new Set(k[1].map((o) => o.trim())).size === k[1].length;
  const lessonLink = (l) => ['#/lessons/' + encodeURIComponent(l.id), 'Lesson: ' + l.title];
  // Shuffle options into their final order now, so a resumed test looks the same.
  const mix = (opts, a) => { const order = shuffle(opts.map((o, k) => k)); return { opts: order.map((k) => opts[k]), a: order.indexOf(a) }; };
  const words = (s) => String(s || '').trim().split(/\s+/).filter(Boolean);
  // Whole-word search, case-insensitive and accent-sensitive.
  const reEsc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const wordRe = (w) => new RegExp('(?<![\\p{L}\\p{N}])' + reEsc(w) + '(?![\\p{L}\\p{N}])', 'giu');
  const bare = (s) => String(s || '').replace(/[¿?¡!.,;:…"]/g, '').replace(/\s+/g, ' ').trim();

  /* ---------- Grammar ---------- */
  function grammarItems(lv) {
    // Round-robin over the level's lessons so the 10 quiz items spread over the grammar points.
    const per = shuffle(lessonsOf(lv)).map((l) => shuffle(arr(l.quiz).concat(arr(extraOf(l.id).quiz)).filter(okQ)).map((k) => ({ k, l }))).filter((x) => x.length);
    const qz = [];
    for (let round = 0; qz.length < 10 && per.some((x) => x.length > round); round++) per.forEach((x) => { if (qz.length < 10 && x[round]) qz.push(x[round]); });
    const out = qz.map(({ k, l }) => Object.assign({ area: 'grammar', kind: 'quiz', q: k[0], why: k[3] || '', href: lessonLink(l), lid: l.id }, mix(k[1], k[2])));
    const cl = arr(window.GRAMMAR_CLOZE).filter((x) => x && x.lv === lv && typeof x.s === 'string' && x.s.split('＿').length === 2 && Array.isArray(x.opts) && x.opts.length >= 2 && x.opts.indexOf(x.a) >= 0 && new Set(x.opts).size === x.opts.length);
    const fill = typeof App.fillBlank === 'function' ? App.fillBlank : (s, a) => s.replace('＿', a);
    pick(cl, 6).forEach((x) => {
      const l = arr(window.LESSONS).find((y) => y.id === x.l);
      out.push(Object.assign({ area: 'grammar', kind: 'cloze', q: x.s, sub: x.en || '', why: x.why || '', ja: fill(x.s, x.a), href: l ? lessonLink(l) : null, lid: l ? l.id : '' }, mix(x.opts, x.opts.indexOf(x.a))));
    });
    return out;
  }

  /* ---------- Verbs ---------- */
  const personLabel = (F, C) => F.tenseLabel + (F.p ? ' · ' + String(C.SUBJ_PRON[F.p] || F.p).replace(/, /g, ' / ') : '');
  function verbItems(lv) {
    const C = window.ESConj, VS = arr(window.ES_VERBS);
    if (!C || !Array.isArray(C.FORMS) || typeof C.verb !== 'function' || !VS.length) return [];
    const hide = C.HIDE || {};
    const allowed = C.FORMS.filter((F) => F.group !== 'nonfinite' && lvIdx(F.level) >= 0 && lvIdx(F.level) <= lvIdx(lv));
    const own = allowed.filter((F) => F.level === lv);
    const verbs = VS.filter((v) => v && v.inf && lvIdx(v.lv) >= 0 && lvIdx(v.lv) <= lvIdx(lv) && !hide[String(v.inf).trim()]);
    if (!allowed.length || !verbs.length) return [];
    const formsOf = (v) => { try { return C.verb(v.inf, v) || {}; } catch (e) { return {}; } };
    const out = [], usedV = new Set();
    const nOwn = lv === 'A1' ? 6 : 4;
    let guard = 0;
    while (out.length < 6 && guard++ < 400) {
      const v = verbs[Math.floor(Math.random() * verbs.length)];
      if (usedV.has(v.inf) && usedV.size < verbs.length) continue;
      const set = out.length < nOwn && own.length ? own : allowed;
      const F = set[Math.floor(Math.random() * set.length)], f = formsOf(v), ans = f[F.id];
      if (!ans) continue;
      // Wrong options: other persons of the same tense first, then the same person in other tenses, then any taught form.
      const ids = allowed.map((x) => x.id).filter((id) => id !== F.id && f[id]);
      const tense = (id) => id.split('.')[0] === F.tense, pers = (id) => F.p && id.split('.')[1] === F.p;
      const ordered = shuffle(ids.filter(tense)).concat(shuffle(ids.filter((id) => !tense(id) && pers(id))), shuffle(ids.filter((id) => !tense(id) && !pers(id))));
      const o = [], seen = new Set([ans]);
      // Take at most two from the same tense so the tense also matters.
      let fromTense = 0;
      for (const id of ordered) { if (o.length >= 3) break; const s = f[id]; if (seen.has(s)) continue; if (tense(id)) { if (fromTense >= 2) continue; fromTense++; } seen.add(s); o.push(s); }
      for (const id of ordered) { if (o.length >= 3) break; const s = f[id]; if (seen.has(s)) continue; seen.add(s); o.push(s); }
      if (o.length < 3) continue;
      usedV.add(v.inf);
      const n = VS.indexOf(v), lab = personLabel(F, C);
      out.push(Object.assign({ area: 'verbs', kind: 'verb', q: v.inf + ' · ' + lab, tlq: true, sub: v.en || '', why: lab + ' of ' + v.inf + ': ' + ans, ja: ans, href: ['#/verbs/v/' + n, 'Verb: ' + v.inf] }, mix([ans].concat(o), 0)));
    }
    return out;
  }

  /* ---------- Vocabulary ---------- */
  const NOUNS = new Set(['n', 'nm', 'nf']);
  const parts = (en) => new Set(String(en || '').split(/[,;/()]| or /).map((s) => norm(s).replace(/^(to|a|an|the) /, '').trim()).filter(Boolean));
  const overlap = (a, b) => { for (const x of a) if (b.has(x)) return true; return false; };
  const dictForm = (e) => !e.root || App.flat(e.root) === e.ftl;
  const usable = (e) => e && e.id && e.tl && !/＿/.test(e.tl) && words(e.tl).length <= 4 && dictForm(e) && e.cat !== 'risk' && e.cat !== 'stigma';
  // n wrong options for entry e: field 'en' (meanings) or 'tl' (headwords). Same pos first (nouns: m/f as a fallback),
  // a different topic first for headwords (fewer near-synonyms that would also fit the sentence).
  function others(e, field, n) {
    const out = [], ap = parts(e.en), ens = new Set([norm(e.en)]), tls = new Set([e.ftl]);
    (App.byHead && App.byHead.get(e.ftl) || []).forEach((x) => { ens.add(norm(x.en)); parts(x.en).forEach((p) => ap.add(p)); });   // every sense of the right word
    const take = (list) => { for (const x of list) { if (out.length >= n) break; if (!usable(x) || x === e || ens.has(norm(x.en)) || tls.has(x.ftl) || overlap(parts(x.en), ap)) continue; const v = field === 'en' ? x.en : x.tl; if (out.includes(v)) continue; out.push(v); ens.add(norm(x.en)); tls.add(x.ftl); } };
    const D = shuffle(arr(App.DICT));
    const same = D.filter((x) => x.pos === e.pos);
    if (field === 'tl') { take(same.filter((x) => x.cat !== e.cat)); take(same); }
    else take(same);
    if (out.length < n && NOUNS.has(e.pos)) take(D.filter((x) => NOUNS.has(x.pos)));
    if (out.length < n && field === 'en') take(D);
    return out.length >= n ? out : null;
  }
  function blankSentence(e, ex) {
    const target = ex[3] ? String(ex[3]).trim() : bare(e.tl);
    if (!target) return null;
    const re = wordRe(target), m = ex[0].match(re);
    if (!m || m.length !== 1) return null;
    const s = ex[0].replace(re, '＿');
    return s.split('＿').length === 2 ? { s, df: !!ex[3] } : null;
  }
  function vocabItems(lv) {
    const out = [], used = new Set();
    const href = (e) => ['#/dict/' + e.id, 'Word: ' + e.tl];
    const D = arr(App.DICT);
    const withEx = typeof App.exampleFor === 'function' ? shuffle(D.filter((e) => usable(e) && !/^[¿¡]/.test(e.tl)).map((e) => [e, App.exampleFor(e)]).filter(([, ex]) => ex && ex[0] && ex[2] === lv)) : [];
    let nm = 0, nc = 0;
    const mMax = Math.min(6, Math.ceil(withEx.length / 2));   // few words at this level: share them between the two kinds
    for (const [e, ex] of withEx) {
      if (nm >= mMax) break;
      const o = others(e, 'en', 3); if (!o) continue;
      used.add(e.ftl); nm++;
      out.push(Object.assign({ area: 'vocab', kind: 'meaning', q: e.tl, tlq: true, ja: e.tl, why: e.note || '', href: href(e) }, mix([e.en].concat(o), 0)));
    }
    for (const [e, ex] of withEx) {
      if (nc >= 6) break;
      if (used.has(e.ftl)) continue;
      const b = blankSentence(e, ex); if (!b) continue;
      const o = others(e, 'tl', 3); if (!o) continue;
      used.add(e.ftl); nc++;
      out.push(Object.assign({ area: 'vocab', kind: 'context', df: b.df, q: b.s, sub: ex[1] || '', ja: ex[0], why: e.tl + ' = ' + e.en, href: href(e) }, mix([e.tl].concat(o), 0)));
    }
    // Fill from WORD_PAIRS of the level: opposites, then collocations, alternating.
    const need = 12 - out.length;
    if (need > 0) {
      const P = arr(window.WORD_PAIRS).filter((p) => p && p.lv === lv && p.a && p.b && p.a !== p.b);
      const opp = shuffle(P.filter((p) => p.type === 'opp')), col = shuffle(P.filter((p) => p.type === 'col'));
      const pairItem = (p, pool) => {
        const o = [], seen = new Set([p.b, p.a]);
        // Wrong options that look like the answer first (infinitives with infinitives, phrases with phrases).
        const shape = (s) => (/(ar|er|ir|ír|arse|erse|irse)$/.test(s) && !/ /.test(s) ? 'v' : / /.test(s) ? 'p' : 'w');
        const cands = shuffle(pool), want = shape(p.b);
        for (const x of cands.filter((y) => shape(y.b) === want).concat(cands)) { if (o.length >= 3) break; if (x === p || seen.has(x.b) || x.a === p.a || x.b === p.a) continue; seen.add(x.b); o.push(x.b); }
        if (o.length < 3) return null;
        return p.type === 'opp'
          ? Object.assign({ area: 'vocab', kind: 'opp', q: p.a, tlq: true, sub: p.ea ? '“' + p.a + '” = ' + p.ea : '', ja: p.a + ', ' + p.b, why: p.a + ' (' + (p.ea || '') + ') ↔ ' + p.b + ' (' + (p.eb || '') + ')', href: ['#/pairs', 'Word pairs'] }, mix([p.b].concat(o), 0))
          : Object.assign({ area: 'vocab', kind: 'col', q: p.a + ' ＿', sub: p.en || '', ja: p.a + ' ' + p.b, why: p.en ? p.a + ' ' + p.b + ' = ' + p.en : '', href: ['#/pairs', 'Word pairs'] }, mix([p.b].concat(o), 0));
      };
      const add = [];
      for (let k = 0; add.length < need && (k < opp.length || k < col.length); k++) {
        [[opp[k], opp], [col[k], col]].forEach(([p, pool]) => { if (p && add.length < need) { const it = pairItem(p, pool); if (it) add.push(it); } });
      }
      out.push(...add);
    }
    const ord = { meaning: 0, opp: 1, context: 2, col: 3 };
    return out.sort((a, b) => ord[a.kind] - ord[b.kind]);
  }

  /* ---------- Listening ---------- */
  const enWords = (s) => new Set(norm(s).replace(/[^a-z' ]/g, ' ').split(/\s+/).filter((w) => w.length > 2 && !/^(the|and|you|your|for|are|was|not|did|has|have|with|this|that|she|her|his|him|they|all|any)$/.test(w)));
  const tooClose = (a, b) => { const A = enWords(a), B = enWords(b); if (!A.size || !B.size) return norm(a) === norm(b); let n = 0; A.forEach((w) => B.has(w) && n++); return n / Math.min(A.size, B.size) >= 0.6; };
  function exampleSentences(lv) {
    const out = [], seen = new Set();
    lessonsOf(lv).forEach((l) => {
      String(l.body || '').replace(/<div class="ex"><b>([^<]+)<\/b><span>([^<]*)<\/span>/g, (m, es, en) => {
        es = es.trim(); en = en.trim();
        const n = words(es).length;
        if (es && en && es !== 'Spanish' && n >= 3 && n <= 14 && !/[＿/…→=]/.test(es) && !seen.has(norm(es))) { seen.add(norm(es)); out.push({ es, en: en.replace(/&amp;/g, '&'), l }); }
        return m;
      });
    });
    return out;
  }
  function listeningItems(lv) {
    const pool = exampleSentences(lv);
    if (pool.length < 4) return [];
    const out = [];
    for (const x of shuffle(pool)) {
      if (out.length >= 4) break;
      if (out.some((y) => y.ja === x.es)) continue;
      const o = [];
      for (const y of shuffle(pool)) { if (o.length >= 3) break; if (y === x || tooClose(y.en, x.en) || o.some((z) => tooClose(z, y.en))) continue; o.push(y.en); }
      if (o.length < 3) continue;
      out.push(Object.assign({ area: 'listening', kind: 'listen', q: x.es, say: x.es, ja: x.es, why: x.es + ' = ' + x.en, href: lessonLink(x.l) }, mix([x.en].concat(o), 0)));
    }
    return out;
  }

  /* ---------- Reading ---------- */
  const readingQs = (r) => {
    const own = arr(r.q).filter(okQ).map((k) => [k, true]);
    const lq = window.LISTEN_Q && typeof window.LISTEN_Q === 'object' && Array.isArray(window.LISTEN_Q[r.id]) ? window.LISTEN_Q[r.id].filter(okQ) : [];
    const seen = new Set(own.map(([k]) => norm(k[0])));
    lq.forEach((k) => { if (!seen.has(norm(k[0]))) { seen.add(norm(k[0])); own.push([k, false]); } });
    return own.slice(0, 6);
  };
  function readingItems(lv) {
    const pool = arr(window.READING).filter((r) => r && r.id && r.level === lv && Array.isArray(r.tl) && r.tl.length && readingQs(r).length);
    if (!pool.length) return [];
    const r = pool[Math.floor(Math.random() * pool.length)];
    return readingQs(r).map(([k, es]) => Object.assign({ area: 'reading', kind: 'passage', q: k[0], tlq: es, tlo: es, passage: r.id, why: k[3] || '', href: ['#/reading/' + encodeURIComponent(r.id), 'Passage: ' + (r.titleEn || r.title || r.id)] }, mix(k[1], k[2])));
  }

  function build(lv) {
    const safe = (f) => { try { return f(lv) || []; } catch (e) { console.warn('level test', e); return []; } };
    return [].concat(safe(grammarItems), safe(verbItems), safe(vocabItems), safe(listeningItems), safe(readingItems));
  }
  const levels = () => LVS.filter((lv) => lessonsOf(lv).length || arr(window.GRAMMAR_CLOZE).some((x) => x && x.lv === lv) || arr(window.READING).some((r) => r && r.level === lv) || arr(window.WORD_PAIRS).some((p) => p && p.lv === lv));
  const store = () => { const d = S().done; return d.test && typeof d.test === 'object' ? d.test : (d.test = {}); };
  const infoStore = () => { const d = S().done; return d.testInfo && typeof d.testInfo === 'object' ? d.testInfo : (d.testInfo = {}); };
  const pctOf = (r, n) => (n ? Math.round((100 * r) / n) : 0);
  const bars = (areas) => '<div class="lt-bars">' + AREAS.filter(([k]) => areas && areas[k] && areas[k][1]).map(([k, t]) => {
    const [r, n] = areas[k], p = pctOf(r, n);
    return '<div class="lt-bar"><span class="lt-bl">' + t + '</span><span class="lt-track" role="img" aria-label="' + t + ' ' + p + '%"><i class="' + (p >= 80 ? 'good' : p < 50 ? 'low' : '') + '" style="width:' + p + '%"></i></span><span class="lt-bn">' + r + ' / ' + n + '</span></div>';
  }).join('') + '</div>';
  const validRun = (run) => run && typeof run === 'object' && LVS.includes(run.lv) && Array.isArray(run.items) && run.items.length && Array.isArray(run.ans) && run.ans.length === run.items.length &&
    run.items.every((x) => x && AREA_NAME[x.area] && Array.isArray(x.opts) && Number.isInteger(x.a));

  /* ---------- Start page ---------- */
  V.leveltest = (el) => {
    const st = S().settings, lvs = levels();
    if (S().testRun && !validRun(S().testRun)) { delete S().testRun; App.save(); }
    const run = S().testRun;
    const head = crumb([['Practice', '#/practice'], ['Level review test']]) + '<h1>Level review test</h1>' +
      '<p class="muted">A mixed test of one level: grammar, verbs, vocabulary, listening and a reading passage, one section after another. You see your answers and the reasons at the end.</p>';
    if (!lvs.length) { el.innerHTML = head + '<div class="notice info">No items yet. The test is built from the lessons, drills, dictionary and reading passages, and none are loaded.</div>'; return; }
    let lv = lvs.includes(st.testLv) ? st.testLv : lvs[0];
    const draw = () => {
      const plan = build(lv), counts = {};
      plan.forEach((x) => (counts[x.area] = (counts[x.area] || 0) + 1));
      const info = infoStore()[lv], best = store()[lv];
      const hasRun = !!run;
      const missing = AREAS.filter(([k]) => !counts[k]).map(([, t]) => t);
      el.innerHTML = head +
        (hasRun ? '<div class="card stack lt-resume" style="margin-bottom:12px"><div><b>Unfinished ' + esc(run.lv) + ' test</b><div class="muted small">' + run.ans.filter((a) => a != null).length + ' of ' + run.items.length + ' answered' + (run.timer ? ', ' + Math.max(0, Math.ceil((TIME - (run.used || 0)) / 60)) + ' min left' : '') + '.</div></div>' +
          '<div class="row" style="flex-wrap:wrap"><button class="btn primary" id="ltresume">Resume</button><button class="btn" id="ltdiscard">Discard</button></div></div>' : '') +
        '<div class="card stack"><div class="seg" role="group" aria-label="Level">' + lvs.map((k) => '<button type="button" data-lv="' + k + '" aria-pressed="' + (lv === k) + '" class="' + (lv === k ? 'on' : '') + '">' + k + (typeof store()[k] === 'number' ? ' <small class="lt-best">' + store()[k] + '%</small>' : '') + '</button>').join('') + '</div>' +
        (plan.length ? '<ol class="lt-plan small">' + AREAS.filter(([k]) => counts[k]).map(([k, t]) => '<li><b>' + t + '</b> <span class="muted">' + counts[k] + ' question' + (counts[k] === 1 ? '' : 's') + '</span></li>').join('') + '</ol>' +
          '<p class="muted small" style="margin:0">' + plan.length + ' questions in all.' + (missing.length ? ' ' + missing.join(', ') + ': nothing at this level yet, so that part is skipped.' : '') + '</p>'
          : '<div class="notice info">No items yet for ' + esc(lv) + '.</div>') +
        '<label class="row lt-check"><input type="checkbox" id="lttimer"' + (st.testTimer ? ' checked' : '') + '> Timer: 25 minutes (the test ends when time is up)</label>' +
        '<div class="row"><button class="btn primary" id="ltgo"' + (plan.length ? '' : ' disabled') + '>Start the ' + esc(lv) + ' test</button></div></div>' +
        (info || best != null ? '<div class="card stack" style="margin-top:12px"><div class="spread"><b>Your ' + esc(lv) + ' results</b><span class="small">Best ' + (best != null ? best : (info && info.best) || 0) + '%</span></div>' +
          (info && info.last && info.last.areas ? '<div class="muted small">Last test: ' + info.last.pct + '% (' + info.last.right + ' / ' + info.last.of + ')</div>' + bars(info.last.areas) : '') + '</div>' : '');
      el.querySelectorAll('[data-lv]').forEach((b) => (b.onclick = () => { lv = b.dataset.lv; st.testLv = lv; App.save(); draw(); }));
      el.querySelector('#lttimer').onchange = (e) => { st.testTimer = e.target.checked; App.save(); };
      el.querySelector('#ltgo').onclick = () => {
        if (hasRun && !confirm('Start a new test? The unfinished ' + run.lv + ' test will be discarded.')) return;
        const items = build(lv);
        if (!items.length) return;
        S().testRun = { v: 1, lv, items, ans: items.map(() => null), i: 0, timer: !!st.testTimer, used: 0, at: Date.now() };
        App.save(); play(el);
      };
      if (hasRun) {
        el.querySelector('#ltresume').onclick = () => play(el);
        el.querySelector('#ltdiscard').onclick = () => { if (!confirm('Discard the unfinished ' + run.lv + ' test?')) return; delete S().testRun; App.save(); V.leveltest(el); };
      }
    };
    draw();
  };

  /* ---------- Taking the test ---------- */
  // Links to #/test from inside the test or its result: the hash is already #/test, so render the start page ourselves.
  const sameHash = (el) => el.querySelectorAll('a[href="#/test"]').forEach((a) => (a.onclick = (e) => { if (location.hash === '#/test') { e.preventDefault(); App.go('#/test'); } }));
  const passageHTML = (id) => {
    const r = arr(window.READING).find((x) => x.id === id);
    if (!r) return '';
    return '<details class="lt-passage" open><summary>' + esc(r.titleEn || 'Passage') + '</summary><div class="lt-ptext tl"><h3 style="margin:0 0 6px">' + esc(r.title || '') + '</h3>' + arr(r.tl).map((t) => '<p>' + esc(t) + '</p>').join('') + '</div></details>';
  };
  const blankHTML = (q) => { const at = q.indexOf('＿'); return '<span>' + esc(q.slice(0, at).trim()) + '</span> <span class="cz-blank" aria-label="blank">＿＿＿</span> <span>' + esc(q.slice(at + 1).trim()) + '</span>'; };
  const promptHTML = (x) => {
    if (x.kind === 'cloze' || x.kind === 'context' || x.kind === 'col') return '<div class="lt-sent tl">' + blankHTML(x.q) + '</div>' + (x.sub ? '<div class="muted small">' + esc(x.sub) + '</div>' : '');
    if (x.kind === 'listen') return '<div class="listen-q"><button class="btn primary" data-act="play" aria-label="Play the sentence">' + App.icons.sound + ' Play</button><span class="muted small">You can play it again as often as you like.</span></div>';
    if (x.kind === 'opp') return '<div class="lt-qt">The opposite of <span class="tl">' + esc(x.q) + '</span></div>' + (x.sub ? '<div class="muted small">' + esc(x.sub) + '</div>' : '');
    return '<div class="lt-qt' + (x.tlq ? ' tl' : '') + '">' + esc(x.q) + '</div>' + (x.sub ? '<div class="muted small">' + esc(x.sub) + '</div>' : '');
  };
  const leadOf = (x) => ({ quiz: 'Choose the best answer.', cloze: 'Choose what fills the blank.', verb: 'Choose the form.', meaning: 'What does this word mean?',
    context: x.df ? 'Which word is missing? (dictionary form)' : 'Which word is missing?', opp: 'Choose the opposite.', col: 'Which word goes with it?',
    listen: 'Listen, then choose what the sentence means.', passage: '' }[x.kind] || '');
  const spanishOpt = (x) => x.tlo || ['cloze', 'verb', 'context', 'opp', 'col'].includes(x.kind);

  function play(el) {
    const run = S().testRun;
    if (!validRun(run)) { delete S().testRun; return V.leveltest(el); }
    const items = run.items, secs = AREAS.map(([k]) => k).filter((k) => items.some((x) => x.area === k));
    let timer = null, mark = Date.now();
    const stopTimer = () => { if (timer) { clearInterval(timer); timer = null; } };
    const tick = () => {
      const now = Date.now(); run.used = (run.used || 0) + (now - mark) / 1000; mark = now;
      const left = Math.max(0, TIME - run.used), t = el.querySelector('#lttime');
      if (t) { t.textContent = Math.floor(left / 60) + ':' + String(Math.floor(left % 60)).padStart(2, '0'); t.classList.toggle('low', left < 120); }
      if (left <= 0) { stopTimer(); App.save(); finish(el, true); }
    };
    App.onLeave = () => { if (run.timer && timer) tick(); stopTimer(); if (App.stopSpeech) App.stopSpeech(); App.save(); };
    const speak = (x) => { if (x && x.say && App.speak) App.speak(x.say); };
    const draw = () => {
      const i = Math.min(Math.max(0, run.i || 0), items.length - 1), x = items[i];
      run.i = i;
      const si = secs.indexOf(x.area), inSec = items.filter((y) => y.area === x.area), pos = inSec.indexOf(x) + 1;
      const first = i === 0 || items[i - 1].area !== x.area, sel = run.ans[i], nAns = run.ans.filter((a) => a != null).length;
      const showP = x.kind === 'passage' && x.passage;
      const lead = leadOf(x), so = spanishOpt(x);
      el.innerHTML = crumb([['Practice', '#/practice'], ['Level review test', '#/test'], [run.lv]]) +
        '<div class="spread lt-top"><h1 style="margin:0">' + esc(run.lv) + ' review test</h1>' + (run.timer ? '<span class="pill lt-time" id="lttime" aria-live="off">25:00</span>' : '') + '</div>' +
        '<div class="lt-prog"><div class="spread small muted"><span>Question ' + (i + 1) + ' of ' + items.length + '</span><span>' + nAns + ' answered</span></div><div class="progress" aria-hidden="true"><i style="width:' + pctOf(i, items.length) + '%"></i></div></div>' +
        '<div class="lt-sec' + (first ? ' new' : '') + '"><span class="eyebrow">Section ' + (si + 1) + ' of ' + secs.length + '</span><h2 style="margin:2px 0 0">' + AREA_NAME[x.area] + '</h2>' +
        '<div class="muted small">' + pos + ' of ' + inSec.length + (first && x.area === 'reading' ? ' · Read the passage, then answer.' : '') + (first && x.area === 'listening' ? ' · The sentence is not shown until the end.' : '') + '</div></div>' +
        (showP ? passageHTML(x.passage) : '') +
        '<div class="card stack lt-q">' + (lead ? '<div class="muted small">' + lead + '</div>' : '') + promptHTML(x) +
        '<div class="opts lt-opts">' + x.opts.map((o, k) => '<button class="opt' + (so ? ' tl' : '') + (sel === k ? ' on' : '') + '" data-k="' + k + '" aria-pressed="' + (sel === k) + '"><span class="cz-num" aria-hidden="true">' + (k + 1) + '</span> ' + esc(o) + '</button>').join('') + '</div>' +
        '<div class="row lt-nav"><button class="btn" id="ltprev"' + (i ? '' : ' disabled') + '>← Back</button>' +
        '<button class="btn primary" id="ltnext">' + (i + 1 < items.length ? (sel == null ? 'Skip' : 'Next') + ' →' : 'Finish') + '</button></div></div>' +
        '<div class="row" style="margin-top:12px;flex-wrap:wrap"><a class="btn sm" href="#/test">Save and leave</a><button class="btn sm" id="ltend">Finish now</button></div>';
      if (run.timer) tick();
      sameHash(el);
      const pb = el.querySelector('[data-act=play]');
      if (pb) { pb.onclick = () => speak(x); if (sel == null) setTimeout(() => { if (run.items[run.i] === x && el.contains(pb)) speak(x); }, 200); }
      el.querySelectorAll('.lt-opts .opt').forEach((b) => (b.onclick = () => choose(+b.dataset.k)));
      el.querySelector('#ltprev').onclick = () => { if (App.stopSpeech) App.stopSpeech(); run.i = i - 1; App.save(); draw(); };
      el.querySelector('#ltnext').onclick = next;
      el.querySelector('#ltend').onclick = () => { const left = run.ans.filter((a) => a == null).length; if (left && !confirm(left + ' question' + (left === 1 ? ' is' : 's are') + ' not answered and will count as wrong. Finish now?')) return; finish(el); };
    };
    const choose = (k) => {
      const i = run.i;
      run.ans[i] = k; App.save();
      el.querySelectorAll('.lt-opts .opt').forEach((b) => { const on = +b.dataset.k === k; b.classList.toggle('on', on); b.setAttribute('aria-pressed', on); });
      const nx = el.querySelector('#ltnext'); nx.textContent = i + 1 < items.length ? 'Next →' : 'Finish'; nx.focus();
    };
    const next = () => {
      if (App.stopSpeech) App.stopSpeech();
      if (run.i + 1 < items.length) { run.i++; App.save(); draw(); window.scrollTo(0, 0); return; }
      const left = run.ans.filter((a) => a == null).length;
      if (left && !confirm(left + ' question' + (left === 1 ? ' is' : 's are') + ' not answered and will count as wrong. Finish now?')) return;
      finish(el);
    };
    App.keyHandler = (e) => {
      if (e.target && e.target.matches && e.target.matches('input,textarea,select,summary')) return;
      if (/^[1-4]$/.test(e.key)) { const x = items[run.i]; if (+e.key <= x.opts.length) { e.preventDefault(); choose(+e.key - 1); } return; }
      if (e.key === 'Enter') { if (e.target && e.target.closest && e.target.closest('button,a')) return; e.preventDefault(); next(); }
    };
    function finish(el2, timeUp) {
      stopTimer(); App.onLeave = null; App.keyHandler = null; if (App.stopSpeech) App.stopSpeech();
      results(el2, run, timeUp);
    }
    if (run.timer) timer = setInterval(tick, 1000);
    draw();
  }

  /* ---------- Results ---------- */
  function results(el, run, timeUp) {
    const items = run.items, lv = run.lv, areas = {};
    let right = 0;
    items.forEach((x, i) => { const a = areas[x.area] || (areas[x.area] = [0, 0]); a[1]++; if (run.ans[i] === x.a) { a[0]++; right++; } });
    const pct = pctOf(right, items.length), at = Date.now();
    const t = store(), info = infoStore(), old = typeof t[lv] === 'number' ? t[lv] : null;
    const last = { pct, right, of: items.length, at, areas };
    if (old == null || pct >= old) { t[lv] = pct; info[lv] = { best: pct, of: items.length, at, areas, last }; }
    else info[lv] = Object.assign({ best: old, of: items.length, at, areas: {} }, info[lv] || {}, { last });
    delete S().testRun;
    if (App.activity) App.activity(Math.max(5, right));
    App.save();
    // Weak areas: under 80% right, weakest first (ties: the earlier section).
    const order = AREAS.map(([k]) => k);
    const weak = order.filter((k) => areas[k] && areas[k][0] / areas[k][1] < 0.8).sort((a, b) => areas[a][0] / areas[a][1] - areas[b][0] / areas[b][1] || order.indexOf(a) - order.indexOf(b));
    const wrong = items.map((x, i) => [x, run.ans[i]]).filter(([x, a]) => a !== x.a);
    // Lessons of the missed grammar items (in lesson order, each once).
    const missedL = [];
    wrong.forEach(([x]) => { if (x.area === 'grammar' && x.href && !missedL.some((h) => h[0] === x.href[0])) missedL.push(x.href); });
    const qText = (x) => {
      if (x.kind === 'cloze' || x.kind === 'context' || x.kind === 'col') { const k = x.q.indexOf('＿'); return '<span class="tl">' + esc(x.q.slice(0, k).trim()) + ' ＿＿＿ ' + esc(x.q.slice(k + 1).trim()) + '</span>'; }
      if (x.kind === 'listen') return '<span class="muted">The spoken sentence:</span>';
      if (x.kind === 'opp') return 'The opposite of <span class="tl">' + esc(x.q) + '</span>';
      return '<span class="' + (x.tlq ? 'tl' : '') + '">' + esc(x.q) + '</span>';
    };
    const so = (x) => spanishOpt(x);
    el.innerHTML = crumb([['Practice', '#/practice'], ['Level review test', '#/test'], [lv + ' result']]) + '<h1>' + esc(lv) + ' test result</h1>' +
      (timeUp ? '<div class="notice" style="margin-bottom:12px">Time is up. Unanswered questions count as wrong.</div>' : '') +
      '<div class="card stack lt-result"><div class="spread"><div><div class="lt-total">' + right + ' / ' + items.length + '</div><div class="muted small">' + pct + '%' + (old != null && pct > old ? ' · new best' : old != null ? ' · best ' + Math.max(old, pct) + '%' : '') + '</div></div>' +
      '<span class="pill ' + (pct >= 80 ? 'good' : '') + '">' + esc(pct >= 80 ? Q().great : pct >= 50 ? Q().ok : Q().keepGoing) + '</span></div>' + bars(areas) +
      (weak.length ? '<div class="notice info lt-weak stack"><b>Practise next</b><ul class="lt-links">' + weak.map((k) => { const [h, tt] = DRILL[k](lv, run); return '<li>' + AREA_NAME[k] + ' (' + areas[k][0] + ' / ' + areas[k][1] + '): <a href="' + h + '"' + (k === 'verbs' ? ' data-vlv="' + lv + '"' : '') + '>' + esc(tt) + '</a></li>'; }).join('') + '</ul>' +
        (missedL.length ? '<b>Lessons for the grammar you missed</b><ul class="lt-links">' + missedL.map(([h, tt]) => '<li><a href="' + h + '">' + esc(tt.replace(/^Lesson: /, '')) + '</a></li>').join('') + '</ul>' : '') + '</div>'
        : '<div class="notice info">Every area 80% or more. Try the next level up.</div>') +
      '<div class="row" style="flex-wrap:wrap"><a class="btn primary" href="#/test">Back to the test page</a><a class="btn" href="#/progress">Progress</a></div></div>' +
      (wrong.length ? '<h2 style="margin-top:18px">To review (' + wrong.length + ')</h2><div class="stack lt-wrong">' + wrong.map(([x, a]) => {
        const good = x.opts[x.a];
        return '<div class="card stack lt-w"><div class="row"><span class="pill">' + AREA_NAME[x.area] + '</span></div><div>' + qText(x) + '</div>' + (x.sub && x.kind !== 'listen' ? '<div class="muted small">' + esc(x.sub) + '</div>' : '') +
          '<div class="small">Your answer: ' + (a == null ? '<i>none</i>' : '<span class="' + (so(x) ? 'tl' : '') + '">' + esc(x.opts[a]) + '</span>') + '</div>' +
          '<div class="small lt-right">Answer: <b class="' + (so(x) ? 'tl' : '') + '">' + esc(good) + '</b></div>' +
          (x.ja && x.kind !== 'meaning' && x.kind !== 'opp' ? '<div class="lt-full"><span class="tl">' + esc(x.ja) + '</span>' + App.sayBtn(x.ja, x.ja) + '</div>' : '') +
          (x.why && x.kind !== 'listen' ? '<div class="muted small">' + esc(x.why) + '</div>' : '') +
          (x.href ? '<div class="small"><a href="' + x.href[0] + '">' + esc(x.href[1]) + '</a></div>' : '') + '</div>';
      }).join('') + '</div>' : '');
    sameHash(el);
    el.querySelectorAll('[data-vlv]').forEach((a) => (a.onclick = () => { S().settings.verbLv = a.dataset.vlv; App.save(); }));
    window.scrollTo(0, 0);
  }
})();
