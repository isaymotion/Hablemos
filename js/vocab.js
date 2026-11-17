/* Vocabulary quiz and topic matching (Hablemos 0.8.0, ported from Hanashimashō 0.24.0).
   Routes: #/vocab (Quiz tab), #/vocab?tab=match (topic sets), #/vocab?tab=match&set=<id> (Match), …&mode=quiz (set Quiz).
   Quiz: the dictionary words of one deck (My mistakes, the Vocabulary and Clinical vocabulary decks of App.decks()) in four modes:
     meaning  read the Spanish, choose the English
     recall   read the English, choose the Spanish
     context  a sentence from the app with the word blanked; choose the word (four dictionary forms of the same part of speech)
     type     read the English, the part of speech and the first letter; type the Spanish (App.accentBar)
   Wrong options never have the answer's Spanish (any sense of the same headword) or share an English gloss with it
   (glosses split on , ; / with notes in brackets and a leading "to" ignored), so there is one right answer.
   Stigmatizing words (category stigma) are offered as wrong options only in their own deck.
   In context: no example table exists, so a sentence pool is built once, lazily, from lesson .ex lines, LESSON_EXTRA[id].more,
   dialogue lines, ES_VERBS examples, completed fill-the-blank sentences (App.fillBlank) and transform answers (to). A word is
   usable when exactly one token of a 4 to 14 word sentence equals the headword (case-insensitive, accent-sensitive; nouns and
   adjectives also in the plain plural, adjectives also with -o / -a / -os / -as); the shortest such sentence is used.
   Only single words of 3 letters or more; verbs only in the infinitive; no grammar, pronoun, question or number words.
   App.exampleFor(e) is tried first if it exists. The mode is offered only for decks with 8 or more such words.
   Type it: right when the typed text matches the headword (or another headword with the same English and part of speech)
   ignoring case, a leading article and end punctuation; right with "Check the accents" when only accents (or ñ) differ.
   Scores: state.done.vocab['<deckId>:<mode>'] = best %; ['match:<setId>'] = { m: misses, t: seconds };
   ['topic:<setId>:<mode>'] = best % (set quiz, meaning | recall). Settings: vocabDeck, vocabMode, vocabCount, matchQuizMode,
   vocabShowWords. Misses go to My mistakes through App.recordAnswer. Only correct Spanish is ever spoken. */
(function () {
  const App = window.App;
  if (!App) return;
  const { esc, norm, shuffle, icons } = App;
  const V = App.views || (App.views = {}), S = () => App.state;
  const GROUPS = ['Vocabulary', 'Clinical vocabulary'];
  const MODES = [['meaning', 'Meaning'], ['recall', 'Recall'], ['context', 'In context'], ['type', 'Type it']];
  const CTX_MIN = 8;
  const Q = () => (window.LANG && LANG.quiz) || { great: '¡Muy bien!', ok: 'Bien.', keepGoing: 'Sigue así.', right: '¡Correcto!', wrong: 'No.' };
  const nWords = (s) => String(s || '').trim().split(/\s+/).filter(Boolean).length;
  const usable = (e) => !!e && !/[＿…]|\.\.\./.test(e.tl) && nWords(e.tl) <= 4;
  const best = () => S().done.vocab || (S().done.vocab = {});
  const crumb = (items) => '<div class="breadcrumb">' + items.map(([t, h]) => (h ? '<a href="' + h + '">' + esc(t) + '</a>' : esc(t))).join(' / ') + '</div>';
  const linkSeg = (label, items, cur) => '<div class="seg cz-tabs" role="group" aria-label="' + label + '">' +
    items.map(([k, t, h]) => '<a role="button" href="' + h + '" class="' + (cur === k ? 'on' : '') + '"' + (cur === k ? ' aria-current="page"' : '') + '>' + t + '</a>').join('') + '</div>';
  const tabs = (tab) => linkSeg('View', [['quiz', 'Quiz', '#/vocab'], ['match', 'Topic matching', '#/vocab?tab=match']], tab);

  /* ---------- One right answer ---------- */
  const gpCache = new Map();
  const glossParts = (en) => {
    if (gpCache.has(en)) return gpCache.get(en);
    const p = norm(en).replace(/\([^)]*\)/g, ' ').split(/[,;/]/).map((s) => s.replace(/\s+/g, ' ').trim().replace(/^(to|a|an|the) /, '')).filter(Boolean);
    gpCache.set(en, p);
    return p;
  };
  // Every gloss of every sense of e's headword: an option is judged by all it can mean (médico = physician; doctor).
  const hgCache = new Map();
  const headGloss = (e) => {
    if (hgCache.has(e.ftl)) return hgCache.get(e.ftl);
    const g = [...new Set(((App.byHead && App.byHead.get(e.ftl)) || [e]).concat(e).reduce((acc, x) => acc.concat(glossParts(x.en)), []))];
    hgCache.set(e.ftl, g);
    return g;
  };
  const tlWords = (e) => ' ' + e.ftl + ' ';
  const spaced = (e) => ' ' + norm(e.tl).replace(/[¿?¡!.,;:]/g, ' ').replace(/\s+/g, ' ').trim() + ' ';
  // Near-synonyms whose English differs (to hurt oneself / to injure oneself): never options for each other.
  const SYN = [['lastimarse', 'herirse', 'hacerse daño', 'autolesión', 'autolesión no suicida', 'cortarse'], ['matarse', 'quitarse la vida', 'suicidio', 'suicidarse'],
    ['morir', 'fallecer', 'muerte', 'muerto'], ['golpear', 'agredir', 'pelear', 'pegar'], ['hablar', 'platicar', 'conversar', 'charlar'], ['decir', 'contar'],
    ['triste', 'decaído', 'deprimido', 'desanimado', 'bajoneado', 'afligido'], ['angustiado', 'ansioso', 'nervioso', 'inquieto', 'estresado'],
    ['molesto', 'enojado', 'enfadado'], ['cansado', 'agotado', 'fatigado'], ['peligro', 'riesgo', 'amenaza'], ['mejorar', 'recuperarse', 'sanar', 'curar'],
    ['ayudar', 'apoyar'], ['alegre', 'contento', 'feliz'], ['dolor', 'molestia'], ['pastilla', 'tableta', 'píldora'], ['asustado', 'espantado'], ['hogar', 'casa'], ['cuarto', 'habitación', 'recámara', 'dormitorio']];
  const synOf = new Map();
  SYN.forEach((g, k) => g.forEach((w) => synOf.set(App.flat(w), k)));
  // Content words of a gloss, for In context (the English of the sentence is shown, so near meanings would be ambiguous).
  const STOP = new Set('to a an the of in on at for with and or i you he she it we they my your his her me him them us is am are be get have has do not no feel feeling oneself one\'s someone something very more less little all go make take up out off back from by about as what that this there here so too formal informal man woman masculine feminine plural'.split(' '));
  const content = (e) => glossParts(e.en).join(' ').split(/[^a-z']+/).filter((w) => w.length >= 4 && !STOP.has(w));
  // true when x could be read as a right answer for e (or e for x): same headword, a shared gloss, or one headword inside the other.
  function clash(e, x, strict) {
    if (e === x || e.ftl === x.ftl || e.nen === x.nen) return true;
    if (synOf.has(e.ftl) && synOf.get(e.ftl) === synOf.get(x.ftl)) return true;
    if (strict) { const ce = content(e); if (content(x).some((w) => ce.includes(w))) return true; }
    const a = headGloss(e), b = headGloss(x);
    if (a.some((p) => b.includes(p))) return true;
    const sa = spaced(e), sb = spaced(x);
    return sa.includes(sb) || sb.includes(sa) || tlWords(e) === tlWords(x);
  }
  // Method words of the risk deck are asked about only as themselves, never offered as a wrong option.
  const METHOD = new Set(['ahorcarse', 'cortarse', 'soga', 'tomarse todas las pastillas', 'balas', 'pistola', 'arma blanca', 'arma de fuego', 'saltar', 'veneno', 'medios letales', 'matarse', 'quitarse la vida', 'matar'].map((w) => App.flat(w)));
  const stigmaOk = (x, e) => (x.cat !== 'stigma' || e.cat === 'stigma') && !METHOD.has(x.ftl);
  // Three wrong options for e: same part of speech first, from the deck, then the dictionary; none clashes with e or each other.
  function others(e, words, test, strict) {
    const out = [];
    const ok = (x) => usable(x) && stigmaOk(x, e) && (!test || test(x)) && !clash(e, x, strict) && out.every((o) => !clash(o, x));
    const take = (list) => { for (const x of list) { if (out.length >= 3) break; if (ok(x)) out.push(x); } };
    const sh = shuffle(words.filter((x) => x !== e));
    take(sh.filter((x) => x.pos === e.pos)); take(sh);
    if (out.length < 3) take(shuffle(App.DICT.filter((x) => x.pos === e.pos)));
    if (out.length < 3) take(shuffle(App.DICT).slice(0, 300));
    return out;
  }

  /* ---------- Sentence pool for In context ---------- */
  const SKIP = /[()[\]{}/_<>|=+*＿]|\.\.\./;
  const TOK_RE = /^([¿¡"“«(]*)(.*?)([.,;:!?…"”»)]*)$/;
  const LETTER = /[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]/;
  const deHtml = (h) => String(h || '').replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
  const splitSent = (p) => String(p || '').trim().split(/(?<=[.?!])\s+(?=[¿¡]?[A-ZÁÉÍÓÚÑ])/).map((s) => s.trim()).filter(Boolean);
  const lc = (s) => String(s || '').normalize('NFC').toLowerCase();
  let pool = null, poolKey = '', tokIndex = null;
  function sentencePool() {
    const L = window.LESSONS || [], X = window.LESSON_EXTRA || {}, D = window.DIALOGUES || [], VB = window.ES_VERBS || [], C = window.GRAMMAR_CLOZE || [], G = window.GRAMMAR_TRANSFORM || [];
    const key = [L.length, Object.keys(X).length, D.length, VB.length, C.length, G.length].join(':');
    if (pool && key === poolKey) return pool;
    const out = [], seen = new Set();
    const add = (es, en) => {
      try {
        es = String(es || '').replace(/\s+/g, ' ').trim(); en = String(en || '').replace(/\s+/g, ' ').trim();
        if (!es || !en || SKIP.test(es) || seen.has(es)) return;
        const toks = es.split(' ').map((t) => { const m = t.match(TOK_RE) || ['', '', t, '']; return { pre: m[1], core: m[2], post: m[3], k: lc(m[2]) }; });
        const n = toks.filter((t) => LETTER.test(t.core)).length;
        if (n < 4 || n > 14) return;
        seen.add(es);
        out.push({ es, en, toks, n });
      } catch (err) { /* a broken entry is skipped */ }
    };
    const both = (es, en) => { const a = splitSent(es), b = splitSent(en); if (a.length > 1 && a.length === b.length) a.forEach((s, j) => add(s, b[j])); else add(es, en); };
    const re = /<div class="ex"><b>([\s\S]*?)<\/b><span>([\s\S]*?)<\/span><\/div>/g;
    L.forEach((l) => { if (!l || typeof l.body !== 'string') return; let m; re.lastIndex = 0; while ((m = re.exec(l.body))) add(deHtml(m[1]), deHtml(m[2])); });
    Object.keys(X).forEach((id) => { const x = X[id]; if (x && Array.isArray(x.more)) x.more.forEach((p) => Array.isArray(p) && add(p[0], p[1])); });
    D.forEach((d) => { if (d && Array.isArray(d.lines)) d.lines.forEach((ln) => Array.isArray(ln) && both(ln[1], ln[2])); });
    VB.forEach((v) => { if (v && Array.isArray(v.ex)) v.ex.forEach((p) => Array.isArray(p) && add(p[0], p[1])); });
    if (typeof App.fillBlank === 'function') C.forEach((x) => { if (x && typeof x.s === 'string' && x.a) add(App.fillBlank(x.s, x.a), x.en); });
    G.forEach((x) => { if (x && typeof x.to === 'string') add(x.to, x.en); });
    pool = out; poolKey = key; ctxCache.clear();
    tokIndex = new Map();
    out.forEach((s, i) => new Set(s.toks.map((t) => t.k)).forEach((k) => { if (!tokIndex.has(k)) tokIndex.set(k, []); tokIndex.get(k).push(i); }));
    return pool;
  }
  App.vocabSentences = sentencePool;   // for QA

  const FUNC_CATS = { grammar: 1, pronouns: 1, questions: 1, numbers: 1 };
  const CTX_POS = { nm: 1, nf: 1, n: 1, v: 1, adj: 1, adv: 1 };
  const INF_RE = /^[a-záéíóúüñ]+(ar|er|ir|ír)(se)?$/;
  const deAccentLast = (w) => w.replace(/[áéíóú](?=[^áéíóúaeiou]*$)/, (c) => c.normalize('NFD').charAt(0));
  // The tokens that count as the word e in a sentence.
  function formsOf(e) {
    const w = lc(e.tl), f = new Set([w]);
    if (e.pos === 'adj' || e.pos === 'nm' || e.pos === 'nf' || e.pos === 'n') {
      if (/[aeiouáéíóú]$/.test(w)) f.add(w + 's');
      else if (/z$/.test(w)) f.add(w.slice(0, -1) + 'ces');
      else if (!/s$/.test(w)) f.add((/[áéíóú][ns]$/.test(w) ? deAccentLast(w) : w) + 'es');
    }
    if (e.pos === 'adj' && /[oa]$/.test(w)) { const r = w.slice(0, -1); ['o', 'a', 'os', 'as'].forEach((x) => f.add(r + x)); }
    return f;
  }
  // Feminine adjective entries (cansada) are left to their masculine headword (cansado), which matches both.
  const femTwin = (e) => e.pos === 'adj' && /a$/.test(e.tl) && App.DICT.some((x) => x.pos === 'adj' && x.tl === e.tl.slice(0, -1) + 'o');
  const ctxAble = (e) => !!e && usable(e) && !femTwin(e) && !FUNC_CATS[e.cat] && e.cat !== 'stigma' && CTX_POS[e.pos] && !/\s/.test(e.tl.trim()) &&
    lc(e.tl).replace(/[^a-záéíóúüñ]/g, '').length >= 3 && LETTER.test(e.tl) && (e.pos !== 'v' || INF_RE.test(lc(e.tl)));
  const ctxCache = new Map();
  // A noun right after a clitic, yo or no is most likely a verb form (lo intento, yo trabajo, no cambio): not used.
  const VERBISH = new Set(['me', 'te', 'se', 'le', 'les', 'lo', 'la', 'los', 'las', 'nos', 'yo', 'no']);
  function blankIn(s, forms, e) {
    const hits = [];
    s.toks.forEach((t, i) => { if (forms.has(t.k)) hits.push(i); });
    if (hits.length !== 1) return null;
    const at = hits[0], prev = at > 0 ? s.toks[at - 1] : null;
    if (e && /^n/.test(e.pos) && prev && !prev.post && VERBISH.has(prev.k)) return null;
    if (e && e.ftl === 'cuarto' && prev && (prev.k === 'menos' || prev.k === 'y')) return null;   // la una y cuarto: a quarter, not a room
    return { s: s.toks.map((t, i) => (i === at ? t.pre + '＿＿＿' + t.post : t.pre + t.core + t.post)).join(' '), full: s.es, en: s.en, token: s.toks[at].core };
  }
  // { s: sentence with ＿＿＿, full, en, token } for word e, or null.
  function ctxOf(e) {
    if (!ctxAble(e)) return null;
    sentencePool();
    if (ctxCache.has(e.id)) return ctxCache.get(e.id);
    const forms = formsOf(e);
    let r = null;
    if (typeof App.exampleFor === 'function') {
      try {
        const ex = App.exampleFor(e);
        const es = Array.isArray(ex) ? ex[0] : ex && (ex.es || ex.tl), en = Array.isArray(ex) ? ex[1] : ex && ex.en;
        if (es && en && !SKIP.test(es)) {
          const toks = String(es).trim().split(/\s+/).map((t) => { const m = t.match(TOK_RE) || ['', '', t, '']; return { pre: m[1], core: m[2], post: m[3], k: lc(m[2]) }; });
          const n = toks.filter((t) => LETTER.test(t.core)).length;
          if (n >= 4 && n <= 14) r = blankIn({ es: String(es).trim(), en: String(en).trim(), toks }, forms, e);
        }
      } catch (err) { r = null; }
    }
    if (!r) {
      const cand = new Set();
      forms.forEach((k) => (tokIndex.get(k) || []).forEach((i) => cand.add(i)));
      const list = [...cand].map((i) => pool[i]).sort((a, b) => a.n - b.n || a.es.length - b.es.length || (a.es < b.es ? -1 : 1));
      for (const s of list) { r = blankIn(s, forms, e); if (r) break; }
    }
    ctxCache.set(e.id, r);
    return r;
  }
  // Three wrong options in dictionary form, same part of speech, single words (infinitives for verbs).
  const ctxOthers = (e, words) => others(e, words, (x) => x.pos === e.pos && ctxAble(x), true);
  const CTX_HINT = 'Choose the word that fits. In the sentence it may be plural or end in -a instead of -o.';
  App.vocabContextOf = ctxOf;
  // For QA and the report: words with a sentence, per deck group ({ group: [with, of] }).
  App.vocabContextCount = () => {
    const c = {};
    App.decks().filter((d) => GROUPS.includes(d.group)).forEach((d) => {
      const ws = wordsOf(d), g = c[d.group] || (c[d.group] = [0, 0, 0]);
      g[0] += ws.filter(ctxOf).length; g[1] += ws.length; g[2] += ws.filter(ctxAble).length;
    });
    return c;
  };

  /* ---------- Type it ---------- */
  const ART = /^(el|la|los|las|un|una|unos|unas) (?=\S)/;
  const cleanT = (s) => String(s || '').normalize('NFC').toLowerCase().replace(/[’']/g, "'").replace(/[¿¡]/g, '').replace(/^[\s"“«]+|[\s.,;:!?…"”»]+$/g, '').replace(/\s+/g, ' ').trim().replace(ART, '');
  const bareT = (s) => cleanT(s).normalize('NFD').replace(/[̀-ͯ]/g, '');
  const typeAble = (e) => usable(e) && nWords(e.tl) <= 3 && !/[/()]/.test(e.tl) && LETTER.test(e.tl) && cleanT(e.tl).length >= 1;
  const coreGloss = (en) => norm(en).replace(/\([^)]*\)/g, ' ').replace(/\s+/g, ' ').trim();
  const typeAlts = (e) => [e].concat(App.DICT.filter((x) => x !== e && x.ftl !== e.ftl && x.pos === e.pos && coreGloss(x.en) === coreGloss(e.en) && typeAble(x)));
  // { v: 'right' | 'accents' | 'wrong', x: the entry matched }
  function judgeTyped(typed, e) {
    const t = cleanT(typed), b = bareT(typed);
    if (!t) return { v: 'wrong' };
    const alts = typeAlts(e);
    for (const x of alts) if (cleanT(x.tl) === t) return { v: 'right', x };
    for (const x of alts) if (bareT(x.tl) === b) return { v: 'accents', x };
    return { v: 'wrong' };
  }
  App.vocabJudge = judgeTyped;   // for QA
  const firstLetter = (e) => { const m = cleanT(e.tl).match(/[a-záéíóúüñ]/); return m ? m[0] : ''; };
  function typeRun(box, words, n, onDone) {
    const qs = pickUnique(words.filter(typeAble), n);
    let i = 0, right = 0;
    const draw = () => {
      if (i >= qs.length) return onDone(right, qs.length);
      const e = qs[i];
      box.innerHTML = '<div class="card stack"><div class="spread"><span class="eyebrow">Question ' + (i + 1) + ' of ' + qs.length + '</span><span class="muted small">' + right + ' right</span></div>' +
        '<div class="progress"><i style="width:' + Math.round((100 * i) / qs.length) + '%"></i></div>' +
        '<div class="vq-en">' + esc(e.en) + '</div>' +
        '<div class="muted small">' + esc(App.POS[e.pos] || 'word') + ' · starts with <b class="tl">' + esc(firstLetter(e)) + '</b>' + (nWords(cleanT(e.tl)) > 1 ? ' · ' + nWords(cleanT(e.tl)) + ' words' : '') + '</div>' +
        '<label class="small muted" for="vqtype">Type the Spanish</label>' +
        '<input class="input tl" id="vqtype" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" lang="es" enterkeyhint="done">' +
        '<div class="row vq-tybtns"><button class="btn primary" id="vqcheck">Check</button><button class="btn" id="vqidk">I don\'t know</button></div><div data-fb></div></div>';
      const inp = box.querySelector('#vqtype');
      let bar = null;
      if (App.accentBar) { try { bar = App.accentBar(inp); } catch (err) { bar = null; } }
      const answer = (typed, gaveUp) => {
        if (!gaveUp && !cleanT(typed)) { App.toast('Type the word first, or choose I don\'t know.'); inp.focus(); return; }
        const j = gaveUp ? { v: 'wrong' } : judgeTyped(typed, e), ok = j.v !== 'wrong';
        if (ok) right++;
        App.recordAnswer(ok, e.id);
        inp.readOnly = true; box.querySelector('.vq-tybtns').hidden = true;
        if (bar && bar.querySelectorAll) bar.querySelectorAll('button').forEach((b) => (b.disabled = true));
        const also = ok && j.x && j.x !== e ? '<div class="small">Also right: <b class="tl">' + esc(j.x.tl) + '</b>. This quiz asked for <b class="tl">' + esc(e.tl) + '</b>.</div>' : '';
        const head = j.v === 'right' ? Q().right : j.v === 'accents' ? Q().right + ' Check the accents: <b class="tl">' + esc((j.x || e).tl) + '</b>' : gaveUp ? 'The answer:' : Q().wrong;
        box.querySelector('[data-fb]').innerHTML = '<div class="feedback ' + (ok ? 'ok' : 'no') + ' stack vq-fb"><div><b>' + head + '</b>' + (!ok && !gaveUp ? ' <span class="muted small">You typed: ' + esc(typed) + '</span>' : '') + '</div>' +
          '<div class="row vq-ans"><a class="tl" href="#/dict/' + esc(e.id) + '">' + esc(e.tl) + '</a>' + App.sayBtn(e.tl, e.tl) + '</div>' +
          '<div class="small">' + esc(e.en) + (e.note ? ' · ' + esc(e.note) : '') + '</div>' + also + '</div>' +
          '<div class="row" style="margin-top:10px"><button class="btn primary" data-act="next">' + (i + 1 < qs.length ? 'Next' : 'See score') + '</button></div>';
        const nx = box.querySelector('[data-act=next]');
        nx.onclick = () => { i++; draw(); const f = box.querySelector('#vqtype'); if (f) f.focus(); };
        nx.focus();
      };
      box.querySelector('#vqcheck').onclick = () => answer(inp.value, false);
      box.querySelector('#vqidk').onclick = () => answer('', true);
      inp.onkeydown = (ev) => { if (ev.key === 'Enter' && !inp.readOnly) { ev.preventDefault(); answer(inp.value, false); } };
    };
    draw();
  }

  /* ---------- Questions ---------- */
  // n random words, one sense per headword (two senses of one headword never meet in a round).
  function pickUnique(list, n) {
    const out = [], seen = new Set();
    for (const e of shuffle(list)) { if (out.length >= n) break; if (seen.has(e.ftl)) continue; seen.add(e.ftl); out.push(e); }
    return out;
  }
  const senses = (e) => { const a = (App.byHead && App.byHead.get(e.ftl)) || [e]; return [...new Set(a.map((x) => x.en))].join('; '); };
  const deckList = () => App.decks().filter((d) => GROUPS.includes(d.group) || d.id === 'mistakes');
  const wordsOf = (d) => d.ids.filter((id) => /^d\d/.test(id)).map((id) => App.dictById[id]).filter(usable);
  const poolFor = (words, mode) => (mode === 'context' ? words.filter((e) => ctxOf(e)) : mode === 'type' ? words.filter(typeAble) : words);
  const unique = (ws) => new Set(ws.map((e) => e.ftl)).size;
  function makeQs(words, mode, n) {
    const qs = [];
    pickUnique(poolFor(words, mode), n).forEach((e) => {
      const exp = e.tl + ' = ' + e.en + (e.note ? ' · ' + e.note : '');
      const sub = App.POS[e.pos] || '';
      if (mode === 'context') {
        const c = ctxOf(e), o = [e].concat(ctxOthers(e, words));
        if (o.length < 4) return;
        qs.push({ q: c.s, sub: c.en, opts: o.map((x) => x.tl), a: 0, exp: e.tl + ' = ' + senses(e) + '. ' + c.full + ' ' + c.en, tlq: true, tlo: true, cardId: e.id, after: c.full, word: e });
        return;
      }
      const o = [e].concat(others(e, words));
      if (o.length < 4) return;
      if (mode === 'recall') qs.push({ q: e.en, sub, opts: o.map((x) => x.tl), a: 0, exp, tlo: true, cardId: e.id, after: e.tl, word: e });
      else qs.push({ q: e.tl, sub, opts: o.map((x) => x.en), a: 0, exp, tlq: true, cardId: e.id, say: e.tl, word: e });
    });
    return qs;
  }
  App.vocabMakeQs = makeQs;   // for QA

  V.vocab = (el, p, q) => {
    q = q || {};
    if (q.tab === 'match') return match(el, q);
    quiz(el);
  };

  /* ---------- Quiz ---------- */
  function quiz(el) {
    const decks = deckList(), st = S().settings;
    let deck = decks.find((d) => d.id === st.vocabDeck) || decks.find((d) => d.id === 'c-body') || decks[0];
    let mode = MODES.some((m) => m[0] === st.vocabMode) ? st.vocabMode : 'meaning';
    let count = st.vocabCount === 20 ? 20 : 10;
    const groups = {};
    decks.forEach((d) => (groups[d.group] = groups[d.group] || []).push(d));
    const ctxN = () => unique(poolFor(wordsOf(deck), 'context'));
    const modes = () => MODES.filter(([k]) => k !== 'context' || ctxN() >= CTX_MIN);
    const modeSeg = () => modes().map(([k, t]) => { const b = best()[deck.id + ':' + k]; return '<button type="button" data-vm="' + k + '" aria-pressed="' + (mode === k) + '" class="' + (mode === k ? 'on' : '') + '">' + t + (b != null ? ' <small class="vq-best">' + b + '%</small>' : '') + '</button>'; }).join('');
    const status = () => {
      const words = wordsOf(deck), n = unique(poolFor(words, mode)), cx = ctxN();
      if (n < 4) return '<div class="notice">' + (deck.id === 'mistakes' && !words.length ? 'No dictionary words in My mistakes yet. Words you miss in any quiz or flashcard land there.' : 'This deck has ' + n + ' word' + (n === 1 ? '' : 's') + ' usable for this mode; at least 4 are needed. Choose another deck or mode.') + '</div>';
      const all = ' (the quiz uses all of them)';
      const ctxLine = '<p class="muted small vq-ctxn">' + cx + ' of ' + unique(words) + ' words in this deck have a sentence for In context' + (cx < CTX_MIN ? '; at least ' + CTX_MIN + ' are needed, so the mode is hidden for this deck' : '') + '.</p>';
      if (mode === 'context') return '<p class="muted small vq-st">' + n + ' words in this deck have a sentence with the word in it' + (n < count ? all : '') + '. Choose the word that is missing; the English of the sentence is shown under it.</p>';
      if (mode === 'type') return '<p class="muted small vq-st">' + n + ' words in this deck' + (n < count ? all : '') + '. Read the English and type the Spanish. Accents count, but a missing accent is still marked right with a reminder.</p>' + ctxLine;
      return '<p class="muted small vq-st">' + n + ' words in this deck' + (n < count ? all : '') + '.</p>' + ctxLine;
    };
    el.innerHTML = crumb([['Practice', '#/practice'], ['Vocabulary quiz']]) + '<h1>Vocabulary quiz</h1>' + tabs('quiz') +
      '<p class="muted">Test the words of any dictionary deck four ways: <b>Meaning</b> (read the Spanish, choose the English), <b>Recall</b> (read the English, choose the Spanish), <b>In context</b> (choose the word missing from a sentence) and <b>Type it</b> (read the English, type the Spanish). Misses go to <b>My mistakes</b> in the flashcards.</p>' +
      '<div class="card stack" id="vqset"><label class="small muted" for="vqdeck">Deck</label><select class="input" id="vqdeck">' +
      Object.entries(groups).map(([g, ds]) => '<optgroup label="' + esc(g) + '">' + ds.map((d) => '<option value="' + esc(d.id) + '"' + (d === deck ? ' selected' : '') + '>' + esc(d.name) + '</option>').join('') + '</optgroup>').join('') + '</select>' +
      '<div class="row vq-segs"><div class="seg" role="group" aria-label="Mode" id="vqmode"></div>' +
      '<div class="seg" role="group" aria-label="Number of questions" id="vqcount">' + [10, 20].map((k) => '<button type="button" data-vc="' + k + '" aria-pressed="' + (count === k) + '" class="' + (count === k ? 'on' : '') + '">' + k + '</button>').join('') + '</div></div>' +
      '<div id="vqstat"></div><div class="row"><button class="btn primary" id="vqgo">Start</button></div></div><div id="vq" class="vq-box"></div>';
    const box = el.querySelector('#vq');
    // Deck contents change while the page is open (a miss adds to My mistakes), so read them again each time.
    const fresh = () => (deck = deckList().find((d) => d.id === deck.id) || deck);
    const refresh = () => {
      fresh();
      if (!modes().some((m) => m[0] === mode)) mode = 'meaning';
      el.querySelector('#vqmode').innerHTML = modeSeg();
      el.querySelector('#vqstat').innerHTML = status();
      el.querySelector('#vqgo').disabled = unique(poolFor(wordsOf(deck), mode)) < 4;
      el.querySelectorAll('[data-vm]').forEach((b) => (b.onclick = () => { mode = b.dataset.vm; st.vocabMode = mode; App.save(); box.innerHTML = ''; box.onclick = null; refresh(); }));
    };
    el.querySelector('#vqdeck').onchange = (ev) => { deck = decks.find((d) => d.id === ev.target.value) || deck; st.vocabDeck = deck.id; App.save(); box.innerHTML = ''; box.onclick = null; refresh(); };
    el.querySelectorAll('[data-vc]').forEach((b) => (b.onclick = () => { count = +b.dataset.vc; st.vocabCount = count; App.save(); el.querySelectorAll('[data-vc]').forEach((x) => { x.classList.toggle('on', x === b); x.setAttribute('aria-pressed', x === b); }); refresh(); }));
    // runQuiz's own "Try again" reshuffles its copy of the questions; ours starts a new set of words instead, so the
    // question number in the eyebrow always points into this qs.
    const run = () => {
      fresh();
      const words = wordsOf(deck), m = mode, d = deck;
      if (unique(poolFor(words, m)) < 4) return;
      if (!S().settings.vocabDeck) { st.vocabDeck = deck.id; App.save(); }
      const saveBest = (r, n) => {
        const pct = n ? Math.round((100 * r) / n) : 0, k = d.id + ':' + m;
        best()[k] = Math.max(pct, best()[k] || 0);
        App.activity(10); App.save();
        if (el.querySelector('#vqmode')) refresh();
        return pct;
      };
      box.onclick = null;
      if (m === 'type') {
        return typeRun(box, words, count, (r, n) => {
          const pct = saveBest(r, n);
          box.innerHTML = '<div class="card stack"><h3>' + (pct >= 80 ? Q().great : pct >= 50 ? Q().ok : Q().keepGoing) + ' ' + r + ' / ' + n + '</h3><div class="progress"><i style="width:' + pct + '%"></i></div>' +
            '<div class="row"><button class="btn primary" data-act="retry">New round</button><a class="btn" href="#/flash/mistakes">My mistakes</a></div></div>';
          box.querySelector('[data-act=retry]').onclick = run;
          box.querySelector('[data-act=retry]').focus();
        });
      }
      const qs = makeQs(words, m, count);
      if (qs.length < 1) return;
      // In context: the hint stays above the questions; runQuiz draws into the inner box.
      let qbox = box;
      if (m === 'context') { box.innerHTML = '<p class="small muted vq-hint">' + CTX_HINT + '</p><div class="vq-in"></div>'; qbox = box.querySelector('.vq-in'); }
      // After an answer: the right word (or whole sentence) to hear, and a link to the word page.
      box.onclick = (ev) => {
        const o = ev.target.closest('.opt'); if (!o) return;
        const i = +((box.querySelector('.eyebrow') || {}).textContent || '').replace(/\D+(\d+).*/, '$1') - 1;
        const qq = qs[i]; if (!qq) return;
        const row = box.querySelector('[data-fb] .row');
        if (row && qq.after && !row.querySelector('.say')) row.insertAdjacentHTML('beforeend', App.sayBtn(qq.after, qq.after));
        if (row && qq.word && !row.querySelector('.vq-wl')) row.insertAdjacentHTML('beforeend', '<a class="btn vq-wl" href="#/dict/' + esc(qq.word.id) + '">Word page</a>');
      };
      App.runQuiz(qbox, qs, {
        after: '<a class="btn" href="#/flash/mistakes">My mistakes</a>',
        onDone: (r, n) => {
          saveBest(r, n);
          const again = qbox.querySelector('[data-act=retry]'); if (again) { again.textContent = 'New round'; again.onclick = run; }
        }
      });
    };
    el.querySelector('#vqgo').onclick = () => { run(); if (box.scrollIntoView) box.scrollIntoView({ block: 'start', behavior: 'smooth' }); };
    // Keyboard: 1-4 choose an option, Enter goes on (outside the typing field, which has its own Enter).
    App.keyHandler = (ev) => {
      if (ev.altKey || ev.ctrlKey || ev.metaKey || ev.target.matches('input,textarea,select')) return;
      if (/^[1-4]$/.test(ev.key)) { const o = box.querySelectorAll('.opt:not(:disabled)')[+ev.key - 1]; if (o) { ev.preventDefault(); o.click(); } return; }
      if (ev.key === 'Enter' && !ev.target.closest('button,a')) { const nx = box.querySelector('[data-act=next]'); if (nx) { ev.preventDefault(); nx.click(); } }
    };
    refresh();
  }

  /* ---------- Topic matching ---------- */
  let byKey = null;
  const dictKey = () => byKey || (byKey = new Map(App.DICT.map((e) => [e.tl + '|' + e.en, e])));
  const setWords = (s) => { const seen = new Set(); return (s.words || []).map((k) => dictKey().get(k)).filter((e) => e && !seen.has(e.id) && seen.add(e.id)); };
  const mmss = (t) => Math.floor(t / 60) + ':' + String(t % 60).padStart(2, '0');
  const bestTxt = (b) => (b ? 'Best: ' + b.m + ' miss' + (b.m === 1 ? '' : 'es') + ' · ' + mmss(b.t) : '');
  // Split into rounds of at most 6, as even as possible (13 words → 5, 4, 4), so no round is a single pair.
  const rounds = (ws) => { const n = Math.ceil(ws.length / 6), out = []; let at = 0; for (let r = 0; r < n; r++) { const k = Math.ceil((ws.length - at) / (n - r)); out.push(ws.slice(at, at + k)); at += k; } return out; };
  const matchKey = (s) => 'match:' + s.id;
  const quizKey = (s, m) => 'topic:' + s.id + ':' + m;
  const QMODES = MODES.filter((m) => m[0] === 'meaning' || m[0] === 'recall');
  App.vocabSetWords = setWords;   // for QA

  function match(el, q) {
    const all = (window.TOPIC_SETS || []).filter((s) => s && s.id && setWords(s).length >= 4);
    const set = q.set && all.find((s) => s.id === q.set);
    if (!set) {
      el.innerHTML = crumb([['Practice', '#/practice'], ['Vocabulary quiz', '#/vocab'], ['Topic matching']]) + '<h1>Topic matching</h1>' + tabs('match') +
        '<p class="muted">Match the sound to the meaning. Each round has up to six words: tap a numbered sound to hear it, then tap its English meaning. Turn on <b>Show words</b> to see the Spanish from the start. Each set also has a multiple-choice <b>Quiz</b>.</p>' +
        (q.set ? '<div class="notice" style="margin-bottom:12px">That topic set was not found.</div>' : '') +
        (all.length ? '<div class="grid">' + all.map((s) => {
          const b = best()[matchKey(s)], qb = QMODES.map(([m, t]) => [t, best()[quizKey(s, m)]]).filter((x) => x[1] != null);
          return '<a class="tile" href="#/vocab?tab=match&set=' + encodeURIComponent(s.id) + '"><h3>' + esc(s.title) + '</h3><p>' + setWords(s).length + ' words · Match or Quiz</p><div class="meta row">' + (s.clin ? '<span class="pill warn">Clinical</span>' : '') + (b ? '<span class="pill good">' + esc(bestTxt(b)) + '</span>' : '') +
            qb.map(([t, v]) => '<span class="pill' + (v >= 80 ? ' good' : '') + '">' + esc(t) + ' ' + v + '%</span>').join('') + '</div></a>';
        }).join('') + '</div>' : '<div class="notice info">No topic sets yet.</div>');
      return;
    }
    const st = S().settings;
    const words0 = setWords(set);
    const mode = q.mode === 'quiz' ? 'quiz' : 'match';
    const base = '#/vocab?tab=match&set=' + encodeURIComponent(set.id);
    el.innerHTML = crumb([['Practice', '#/practice'], ['Topic matching', '#/vocab?tab=match'], [set.title]]) + '<h1>' + esc(set.title) + '</h1>' +
      '<div class="row vm-modes">' + linkSeg('Mode', [['match', 'Match', base], ['quiz', 'Quiz', base + '&mode=quiz']], mode) + '</div>' +
      '<div class="row vm-info">' + (set.clin ? '<span class="pill warn">Clinical</span>' : '') + '<span class="muted small">' + words0.length + ' words</span>' +
      (mode === 'match' ? '<label class="row small vm-show"><input type="checkbox" id="vmshow"' + (st.vocabShowWords ? ' checked' : '') + '> Show words</label>' : '') + '</div><div id="vmbox"></div>';
    const box = el.querySelector('#vmbox');
    if (mode === 'quiz') return topicQuiz(box, set, words0);
    let rs, r, locked, sel, misses, t0, words;
    const start = () => { rs = rounds(shuffle(words0)); r = 0; misses = 0; t0 = Date.now(); round(); };
    const showAll = () => !!S().settings.vocabShowWords;
    const paintWords = () => box.querySelectorAll('.vm-snd').forEach((b) => {
      const i = +b.dataset.i, on = showAll() || locked.has(i);
      b.querySelector('.vm-w').hidden = !on;
      b.setAttribute('aria-label', 'Sound ' + (i + 1) + (on ? ': ' + words[i].tl : ''));
    });
    function round() {
      words = rs[r]; locked = new Set(); sel = -1;
      const order = shuffle(words.map((w, i) => i));
      box.innerHTML = '<div class="card stack"><div class="spread"><span class="eyebrow">Round ' + (r + 1) + ' of ' + rs.length + '</span><span class="muted small" id="vmmiss">' + misses + ' miss' + (misses === 1 ? '' : 'es') + '</span></div>' +
        '<div class="vm-grid"><div class="vm-col" role="group" aria-label="Sounds">' +
        words.map((w, i) => '<button type="button" class="opt vm-snd" data-i="' + i + '" aria-pressed="false"><span class="vm-n">' + (i + 1) + '</span>' + icons.sound + '<span class="vm-w tl" lang="es" hidden>' + esc(w.tl) + '</span></button>').join('') +
        '</div><div class="vm-col" role="group" aria-label="Meanings">' +
        order.map((i) => '<button type="button" class="opt vm-mean" data-i="' + i + '">' + esc(words[i].en) + '</button>').join('') + '</div></div>' +
        '<p class="muted small" style="margin:0">Tap a sound to hear it, then tap its meaning.</p></div>';
      paintWords();
      box.querySelectorAll('.vm-snd').forEach((b) => (b.onclick = () => {
        const i = +b.dataset.i;
        App.speak(words[i].tl);
        if (locked.has(i)) return;
        sel = i;
        box.querySelectorAll('.vm-snd').forEach((x) => { const on = +x.dataset.i === i; x.classList.toggle('sel', on); x.setAttribute('aria-pressed', on); });
      }));
      box.querySelectorAll('.vm-mean').forEach((b) => (b.onclick = () => {
        const i = +b.dataset.i;
        if (locked.has(i)) return;
        if (sel < 0) { App.toast('Tap a sound first, then its meaning.'); return; }
        const sb = box.querySelector('.vm-snd[data-i="' + sel + '"]');
        if (i === sel) {
          locked.add(i); App.recordAnswer(true, words[i].id);
          sb.classList.remove('sel'); sb.classList.add('right'); sb.setAttribute('aria-pressed', 'false');
          b.classList.add('right'); b.disabled = true; sel = -1; paintWords();
          if (locked.size === words.length) setTimeout(() => { if (!box.isConnected) return; r++; if (r < rs.length) round(); else finish(); }, 700);
        } else {
          misses++; App.recordAnswer(false, words[sel].id);
          el.querySelector('#vmmiss').textContent = misses + ' miss' + (misses === 1 ? '' : 'es');
          [sb, b].forEach((x) => { x.classList.add('wrong'); setTimeout(() => x.classList.remove('wrong'), 600); });
        }
      }));
      const first = box.querySelector('.vm-snd'); if (first && r > 0) first.focus();
    }
    function finish() {
      const t = Math.round((Date.now() - t0) / 1000), k = matchKey(set), b = best()[k];
      const better = !b || misses < b.m || (misses === b.m && t < b.t);
      if (better) best()[k] = { m: misses, t };
      App.activity(10); App.save();
      box.innerHTML = '<div class="card stack"><h3 style="margin:0">' + (misses ? Q().ok : Q().great) + ' All ' + rs.flat().length + ' words matched</h3>' +
        '<p style="margin:0">' + misses + ' miss' + (misses === 1 ? '' : 'es') + ' · ' + mmss(t) + (better && b ? ' · <span class="pill good">New best</span>' : '') + '</p>' +
        (!better ? '<p class="muted small" style="margin:0">' + esc(bestTxt(b)) + '</p>' : '') +
        '<div class="row"><button class="btn primary" id="vmagain">Try again</button><a class="btn" href="#/vocab?tab=match">Back to sets</a>' + (misses ? '<a class="btn" href="#/flash/mistakes">My mistakes</a>' : '') + '</div></div>';
      box.querySelector('#vmagain').onclick = start;
      box.querySelector('#vmagain').focus();
    }
    el.querySelector('#vmshow').onchange = (ev) => { S().settings.vocabShowWords = ev.target.checked; App.save(); if (box.querySelector('.vm-snd')) paintWords(); };
    start();
  }

  // Multiple choice on a topic set's words: Meaning (Spanish → English) or Recall (English → Spanish), options from the
  // same set first (others()); misses go to My mistakes through runQuiz's App.recordAnswer(ok, cardId).
  function topicQuiz(box, set, words) {
    const st = S().settings;
    let mode = QMODES.some((m) => m[0] === st.matchQuizMode) ? st.matchQuizMode : 'meaning';
    box.innerHTML = '<div class="card stack"><div class="row"><div class="seg" role="group" aria-label="Quiz type" id="vtmode"></div></div>' +
      '<p class="muted small" style="margin:0" id="vthelp"></p><div class="row"><button class="btn primary" id="vtgo">Start</button></div></div><div id="vtq" class="vq-box"></div>';
    const qbox = box.querySelector('#vtq');
    const paint = () => {
      box.querySelector('#vtmode').innerHTML = QMODES.map(([k, t]) => { const b = best()[quizKey(set, k)]; return '<button type="button" data-vtm="' + k + '" aria-pressed="' + (mode === k) + '" class="' + (mode === k ? 'on' : '') + '">' + t + (b != null ? ' <small class="vq-best">' + b + '%</small>' : '') + '</button>'; }).join('');
      box.querySelector('#vthelp').textContent = (mode === 'recall' ? 'Read the English, choose the Spanish.' : 'Read the Spanish, choose the English.') + ' ' + unique(words) + ' questions, one per word.';
      box.querySelectorAll('[data-vtm]').forEach((b) => (b.onclick = () => { mode = b.dataset.vtm; st.matchQuizMode = mode; App.save(); qbox.innerHTML = ''; paint(); }));
    };
    const run = () => {
      const qs = makeQs(words, mode, words.length), m = mode;
      if (qs.length < 4) return;
      qbox.onclick = (ev) => {
        const o = ev.target.closest('.opt'); if (!o) return;
        const i = +((qbox.querySelector('.eyebrow') || {}).textContent || '').replace(/\D+(\d+).*/, '$1') - 1;
        const qq = qs[i]; if (!qq || !qq.after) return;
        const row = qbox.querySelector('[data-fb] .row');
        if (row && !row.querySelector('.say')) row.insertAdjacentHTML('beforeend', App.sayBtn(qq.after, qq.after));
      };
      App.runQuiz(qbox, qs, {
        after: '<a class="btn" href="#/flash/mistakes">My mistakes</a><a class="btn" href="#/vocab?tab=match&set=' + encodeURIComponent(set.id) + '">Match this set</a>',
        onDone: (r, n) => {
          const pct = Math.round((100 * r) / n), k = quizKey(set, m);
          best()[k] = Math.max(pct, best()[k] || 0);
          App.activity(10); App.save();
          if (box.isConnected) paint();
          const again = qbox.querySelector('[data-act=retry]'); if (again) { again.textContent = 'New round'; again.onclick = run; }
        }
      });
    };
    box.querySelector('#vtgo').onclick = () => { run(); if (qbox.scrollIntoView) qbox.scrollIntoView({ block: 'start', behavior: 'smooth' }); };
    App.keyHandler = (ev) => {
      if (ev.altKey || ev.ctrlKey || ev.metaKey || ev.target.matches('input,textarea,select')) return;
      if (/^[1-4]$/.test(ev.key)) { const o = qbox.querySelectorAll('.opt:not(:disabled)')[+ev.key - 1]; if (o) { ev.preventDefault(); o.click(); } }
    };
    paint();
  }
})();
