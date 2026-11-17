/* Listening practice (#/listen, Hablemos 0.9.0), ported from Hanashimashō js/listen.js. Four tabs (?tab=):
   hear (default)  hear a word (Everyday or Clinical words) or a sentence of a level and choose the meaning (App.runQuiz with hideQ)
   dict            dictation: hear a word or a short sentence (3 to 8 words) and type it, with App.accentBar
   pairs           sound pairs (window.SOUND_PAIRS, js/data/sound-pairs.js): hear one of two words and choose which
   story           questions on whole dialogues, readings and case simulations (window.LISTEN_Q keyed by DIALOGUES / READING id,
                   or 'case-<PSYCH_CASES id>' for App.caseDialogue); ?id= opens one
   The dictionary has no levels, so words come from two sources (Everyday, Clinical: groups of App.CATS); sentences have a level
   (A1 A2 B1 B2, remembered in state.settings.listenLv). Best scores in state.done.listen2['<tab>:<variant>']:
   hear:words:everyday, hear:words:clinical, hear:sentences:<lv>, dict:words:everyday, dict:words:clinical, dict:sentences:<lv>,
   pairs:all, pairs:<type>, story:<id>. App.listenStoryIds() and App.listenKeys() list them for the Progress page. */
(function () {
  const { esc, shuffle, pick, icons, norm, flat } = App;
  const V = App.views;
  const S = () => App.state;
  const crumb = (items) => '<div class="breadcrumb">' + items.map(([t, h]) => (h ? '<a href="' + h + '">' + esc(t) + '</a>' : esc(t))).join(' / ') + '</div>';
  const LEVELS = ['A1', 'A2', 'B1', 'B2'];
  const SPEEDS = [['slow', 'Slower', 0.7], ['natural', 'Natural', 0], ['fast', 'Fast', 1.05]];   // 0 = the rate in Settings
  const TABS = [['hear', 'Hear'], ['dict', 'Dictation'], ['pairs', 'Sound pairs'], ['story', 'Dialogues and readings']];
  const SOURCES = [['everyday', 'Everyday words'], ['clinical', 'Clinical words'], ['sentences', 'Sentences']];
  const INTRO = {
    hear: 'Hear a word or a sentence and choose what it means. The Spanish appears only after you answer.',
    dict: 'Hear a word or a short sentence and type it. Accents count, but a missing accent is still marked right with a reminder.',
    pairs: 'Words that differ by one sound or by the stressed syllable. Hear one and choose which it was.',
    story: 'Hear a whole dialogue, reading or case simulation first, then answer questions about it. Keep the text hidden until you have tried.'
  };
  const st = { speed: 'natural', src: 'everyday', type: '' };
  const rate = () => { const s = (SPEEDS.find((x) => x[0] === st.speed) || SPEEDS[1])[2]; return s || S().settings.rate || 0.85; };
  const best = (key, pct) => {
    const d = S().done; d.listen2 = d.listen2 || {};
    d.listen2[key] = Math.max(pct, d.listen2[key] || 0);
    App.activity(10); App.save();
  };
  const bestOf = (key) => ((S().done.listen2 || {})[key]);
  const seg = (label, items, cur, attr) => '<div class="seg" role="group" aria-label="' + label + '">' + items.map(([k, t]) => '<button type="button" data-' + attr + '="' + esc(k) + '" class="' + (cur === k ? 'on' : '') + '" aria-pressed="' + (cur === k) + '">' + esc(t) + '</button>').join('') + '</div>';
  // Speak a list in turn, like App.speakAll, but at the chosen speed; App.stopSpeech() (or leaving the page) stops it.
  const speakSeq = async (texts, gapMs, onStep) => {
    const tok = (App._seq = (App._seq || 0) + 1);
    for (let i = 0; i < texts.length; i++) {
      if (App._seq !== tok) return false;
      if (onStep) onStep(i);
      await App.speakAsync(texts[i], { rate: rate() });
      if (gapMs) await new Promise((r) => setTimeout(r, gapMs));
    }
    return App._seq === tok;
  };
  const nWords = (s) => String(s || '').replace(/[¿?¡!.,;:…"«»]/g, ' ').trim().split(/\s+/).filter(Boolean).length;

  /* ---------- Pools ---------- */
  // Word sources: the Clinical vocabulary deck group of App.decks() is Clinical; the rest, without grammar words and pronouns, is Everyday.
  const CLINICAL = ['health', 'mind', 'risk', 'substance', 'clinical', 'stigma', 'beliefs', 'emotions', 'idioms', 'falsefriends'];
  const NOT_EVERYDAY = ['grammar', 'pronouns'];
  const srcOf = (e) => (CLINICAL.includes(e.cat) ? 'clinical' : NOT_EVERYDAY.includes(e.cat) ? '' : 'everyday');
  // A usable word: up to 3 words, no notation (＿ / ( ) …), and not a conjugated or inflected form (a one-word headword whose root
  // is another word, such as soy, cuídese, encantada). Multi-word phrases keep their root column and are used.
  const usableWord = (e) => e && e.tl && e.en && nWords(e.tl) <= 3 && !/[＿/()…]|\.\.\./.test(e.tl) && /[a-záéíóúüñ]/i.test(e.tl) &&
    !(nWords(e.tl) === 1 && e.root && flat(e.root) !== e.ftl);
  let wordCache = {};
  const wordsOf = (src) => wordCache[src] || (wordCache[src] = App.DICT.filter((e) => srcOf(e) === src && usableWord(e)));
  const cleanEn = (en) => { const s = String(en || '').replace(/\s*\([^()]*\)\s*/g, ' ').replace(/\s+/g, ' ').trim(); return s || String(en || '').trim(); };
  const glossParts = (en) => cleanEn(en).split(/[,;]/).map((x) => norm(x).replace(/^(to|a|an|the) /, '').trim()).filter(Boolean);
  // Two entries clash as options when they are senses of one headword or share an English gloss.
  const clash = (a, b) => a.ftl === b.ftl || glossParts(a.en).some((g) => glossParts(b.en).includes(g));
  const deHtml = (h) => { const d = document.createElement('div'); d.innerHTML = h; return d.textContent.replace(/\s+/g, ' ').trim(); };
  let sentCache = null;
  const sentences = () => {
    if (sentCache) return sentCache;
    const out = [], seen = new Set();
    const add = (es, en, lv) => {
      es = String(es || '').trim(); en = cleanEn(en || '');
      if (!es || !en || /[＿<>]/.test(es) || !LEVELS.includes(lv)) return;
      const k = flat(es); if (!k || seen.has(k)) return; seen.add(k);
      out.push({ es, en, lv });
    };
    const LESSONS = window.LESSONS || [];
    const re = /<div class="ex"><b>([\s\S]*?)<\/b><span>([\s\S]*?)<\/span><\/div>/g;
    LESSONS.forEach((l) => { let m; re.lastIndex = 0; while ((m = re.exec(l.body || ''))) add(deHtml(m[1]), deHtml(m[2]), l.level); });
    const lvOf = {}; LESSONS.forEach((l) => (lvOf[l.id] = l.level));
    Object.entries(window.LESSON_EXTRA || {}).forEach(([id, x]) => ((x && x.more) || []).forEach((m) => Array.isArray(m) && add(m[0], m[1], lvOf[id])));
    (window.DICT_EX || []).forEach((x) => Array.isArray(x) && add(x[1], x[2], x[3]));
    (Array.isArray(window.GRAMMAR_TRANSFORM) ? window.GRAMMAR_TRANSFORM : []).forEach((x) => x && typeof x.to === 'string' && add(x.to, x.en, x.lv));
    if (typeof App.fillBlank === 'function') (Array.isArray(window.GRAMMAR_CLOZE) ? window.GRAMMAR_CLOZE : []).forEach((x) => {
      if (x && typeof x.s === 'string' && typeof x.a === 'string' && x.en) { try { add(App.fillBlank(x.s, x.a), x.en, x.lv); } catch (e) { /* skip a malformed item */ } }
    });
    return (sentCache = out);
  };
  const sentOf = (lv) => sentences().filter((s) => s.lv === lv);
  const dictSentOf = (lv) => sentOf(lv).filter((s) => { const n = nWords(s.es); return n >= 3 && n <= 8; });
  // Levels with enough sentences; a remembered level without them falls back to the first that has them.
  const shownLevels = () => { const l = LEVELS.filter((k) => sentOf(k).length >= 4); return l.length ? l : LEVELS.slice(0, 1); };
  const level = () => { const v = S().settings.listenLv, l = shownLevels(); return l.includes(v) ? v : l.includes(S().level) ? S().level : l[0]; };

  /* ---------- Hear ---------- */
  const hearQs = (src, lv) => {
    if (src !== 'sentences') {
      const pool = wordsOf(src);
      if (pool.length < 4) return null;
      return pick(pool, Math.min(10, pool.length)).map((e) => {
        const d = [];
        const take = (list) => { for (const x of shuffle(list)) { if (d.length >= 3) break; if (!clash(x, e) && !d.some((y) => clash(x, y))) d.push(x); } };
        take(pool.filter((x) => x.cat === e.cat && x.pos === e.pos));
        if (d.length < 3) take(pool.filter((x) => x.cat === e.cat));
        if (d.length < 3) take(pool);
        if (d.length < 3) return null;
        return { q: e.tl, say: e.tl, rate: rate(), hideQ: 'Listen, then choose the meaning.', opts: [e.en].concat(d.map((x) => x.en)), a: 0, cardId: e.id, exp: e.tl + ': ' + e.en };
      }).filter(Boolean);
    }
    const pool = sentOf(lv);
    if (pool.length < 4) return null;
    return pick(pool, Math.min(10, pool.length)).map((s) => {
      const used = new Set([norm(s.en)]), d = [];
      const near = pool.filter((x) => x !== s).map((x) => [x, Math.abs(x.en.length - s.en.length)]).sort((a, b) => a[1] - b[1]).slice(0, 12).map((x) => x[0]);
      for (const x of shuffle(near).concat(shuffle(pool))) { if (d.length >= 3) break; const k = norm(x.en); if (x !== s && !used.has(k)) { used.add(k); d.push(x.en); } }
      return { q: s.es, say: s.es, rate: rate(), hideQ: 'Listen, then choose the meaning.', opts: [s.en].concat(d), a: 0, exp: s.es + ' (' + s.en + ')' };
    });
  };
  const srcSeg = (box, redraw) => {
    const h = '<div class="row lp-ctl">' + seg('Source', SOURCES, st.src, 'src') + '</div>';
    return [h, () => box.querySelectorAll('[data-src]').forEach((b) => (b.onclick = () => { st.src = b.dataset.src; redraw(); }))];
  };
  // The level row only applies to sentences: shown or hidden by the page.
  const syncLevel = () => { const r = document.getElementById('lplvrow'); if (r) r.hidden = st.src !== 'sentences'; };
  const drawHear = (box) => {
    syncLevel();
    const lv = level(), qs = hearQs(st.src, lv);
    const [h, wire] = srcSeg(box, () => drawHear(box));
    box.innerHTML = h + '<div id="lpq"></div>';
    wire();
    const q = box.querySelector('#lpq');
    if (!qs || qs.length < 1) { q.innerHTML = '<div class="notice">Not enough ' + (st.src === 'sentences' ? 'sentences at this level' : 'words in this group') + ' yet. Choose another.</div>'; return; }
    const key = 'hear:' + (st.src === 'sentences' ? 'sentences:' + lv : 'words:' + st.src);
    App.runQuiz(q, qs, { onDone: (r, n) => best(key, Math.round((100 * r) / n)) });
  };

  /* ---------- Dictation ---------- */
  // Compare ignoring case, ¿ ? ¡ ! . , ; : and extra spaces; "bare" also ignores accents and ñ (Check the accents).
  const cleanT = (s) => String(s || '').normalize('NFC').toLowerCase().replace(/[’']/g, "'").replace(/[¿?¡!.,;:…"“”«»]/g, ' ').replace(/\s+/g, ' ').trim();
  const bareT = (s) => cleanT(s).normalize('NFD').replace(/[̀-ͯ]/g, '');
  const judge = (typed, ans) => {
    const t = cleanT(typed); if (!t) return 'wrong';
    if (t === cleanT(ans)) return 'right';
    if (bareT(typed) === bareT(ans)) return 'accents';
    return 'wrong';
  };
  App.listenJudge = judge;   // for QA
  App.listenPools = () => ({ everyday: wordsOf('everyday').length, clinical: wordsOf('clinical').length, levels: LEVELS.map((l) => [l, sentOf(l).length, dictSentOf(l).length]) });   // for QA
  // Word-by-word: which words of the answer the learner wrote (longest common subsequence on accent-free words).
  const compare = (typed, ans) => {
    const a = cleanT(ans).split(' '), shown = String(ans).trim().split(/\s+/), t = cleanT(typed).split(' ').filter(Boolean);
    const ab = a.map((w) => w.normalize('NFD').replace(/[̀-ͯ]/g, '')), tb = t.map((w) => w.normalize('NFD').replace(/[̀-ͯ]/g, ''));
    const L = Array.from({ length: a.length + 1 }, () => new Array(t.length + 1).fill(0));
    for (let i = a.length - 1; i >= 0; i--) for (let j = t.length - 1; j >= 0; j--) L[i][j] = ab[i] === tb[j] ? L[i + 1][j + 1] + 1 : Math.max(L[i + 1][j], L[i][j + 1]);
    const ok = new Array(a.length).fill(false);
    for (let i = 0, j = 0; i < a.length && j < t.length;) { if (ab[i] === tb[j]) { ok[i] = true; i++; j++; } else if (L[i + 1][j] >= L[i][j + 1]) i++; else j++; }
    const same = shown.length === a.length;
    const html = (same ? shown : a).map((w, k) => '<span class="lp-w ' + (ok[k] ? 'ok' : 'miss') + '">' + esc(w) + '</span>').join(' ');
    return { html, n: ok.filter(Boolean).length, of: a.length };
  };
  const dictPool = (src, lv) => {
    if (src === 'sentences') return dictSentOf(lv).map((s) => ({ ans: s.es, en: s.en, sent: true }));
    return wordsOf(src).filter((e) => e.cat !== 'stigma').map((e) => ({ ans: e.tl, en: e.en, id: e.id }));
  };
  const drawDict = (box) => {
    syncLevel();
    const lv = level(), pool = dictPool(st.src, lv);
    const [h, wire] = srcSeg(box, () => drawDict(box));
    box.innerHTML = h + '<div id="lpq"></div>';
    wire();
    const q = box.querySelector('#lpq');
    if (pool.length < 3) { q.innerHTML = '<div class="notice">Not enough ' + (st.src === 'sentences' ? 'short sentences at this level' : 'words in this group') + ' yet. Choose another.</div>'; return; }
    const items = pick(pool, Math.min(10, pool.length));
    const key = 'dict:' + (st.src === 'sentences' ? 'sentences:' + lv : 'words:' + st.src);
    let i = 0, right = 0;
    const one = () => {
      if (i >= items.length) {
        const pct = Math.round((100 * right) / items.length);
        q.innerHTML = '<div class="card stack"><h3>' + right + ' / ' + items.length + ' written right</h3><div class="progress"><i style="width:' + pct + '%"></i></div><div class="row"><button class="btn primary" id="lpagain">New set</button></div></div>';
        q.querySelector('#lpagain').onclick = () => drawDict(box);
        best(key, pct);
        return;
      }
      const it = items[i], words = nWords(it.ans);
      let checked = false;
      const play = () => App.speak(it.ans, { rate: rate() });
      q.innerHTML = '<div class="card stack"><div class="spread"><span class="eyebrow">' + (it.sent ? 'Sentence ' : 'Word ') + (i + 1) + ' of ' + items.length + '</span><span class="small muted">' + words + (words === 1 ? ' word' : ' words') + '</span></div>' +
        '<div class="listen-q"><button class="btn primary" id="lpplay">' + icons.sound + ' Play again</button><span class="muted small">Listen, then type what you hear.</span></div>' +
        '<label class="small muted" for="lptype">Type it in Spanish</label><input class="input tl" id="lptype" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" lang="es" enterkeyhint="done">' +
        '<div class="row lp-btns"><button class="btn primary" id="lpcheck">Check</button><button class="btn" id="lpidk">I don\'t know</button></div><div id="lpfb"></div></div>';
      const $ = (s) => q.querySelector(s);
      const inp = $('#lptype');
      let bar = null;
      if (typeof App.accentBar === 'function') { try { bar = App.accentBar(inp); } catch (err) { bar = null; } }
      $('#lpplay').onclick = play;
      const check = (gaveUp) => {
        if (checked) return;
        const typed = inp.value;
        if (!gaveUp && !cleanT(typed)) { App.toast('Type what you hear first, or choose I don\'t know.'); inp.focus(); return; }
        const v = gaveUp ? 'wrong' : judge(typed, it.ans), ok = v !== 'wrong';
        checked = true; if (ok) right++;
        App.recordAnswer(ok, it.id);
        inp.readOnly = true; $('.lp-btns').hidden = true;
        if (bar && bar.querySelectorAll) bar.querySelectorAll('button').forEach((b) => (b.disabled = true));
        const head = v === 'right' ? 'Right.' : v === 'accents' ? 'Right. Check the accents: <b class="tl">' + esc(it.ans) + '</b>' : gaveUp ? 'The answer:' : 'Not quite.';
        const cmp = !ok && !gaveUp && it.sent ? compare(typed, it.ans) : null;
        $('#lpfb').innerHTML = '<div class="feedback ' + (ok ? 'ok' : 'no') + ' stack"><div><b>' + head + '</b>' + (!ok && !gaveUp ? ' <span class="muted small">You wrote: <span class="tl">' + esc(typed) + '</span></span>' : '') + '</div>' +
          (cmp ? '<div class="lp-cmp tl" aria-label="Word by word">' + cmp.html + '</div><div class="small muted">' + cmp.n + ' of ' + cmp.of + ' words right. Underlined words were missing or misspelled.</div>' : '') +
          '<div class="row lp-ans">' + App.sayBtn(it.ans) + (it.id ? '<a class="tl lp-word" href="#/dict/' + esc(it.id) + '">' + esc(it.ans) + '</a>' : '<span class="tl lp-word">' + esc(it.ans) + '</span>') + '</div>' +
          '<div class="small">' + esc(it.en) + '</div></div>' +
          '<div class="row" style="margin-top:10px"><button class="btn primary" id="lpnext">' + (i + 1 < items.length ? 'Next' : 'See score') + '</button></div>';
        $('#lpnext').onclick = () => { i++; one(); const f = q.querySelector('#lptype'); if (f) f.focus(); };
        $('#lpnext').focus();
      };
      $('#lpcheck').onclick = () => check(false);
      $('#lpidk').onclick = () => check(true);
      inp.onkeydown = (ev) => { if (ev.key === 'Enter' && !checked) { ev.preventDefault(); check(false); } };
      setTimeout(play, 150);
    };
    one();
  };

  /* ---------- Sound pairs ---------- */
  const SP = () => window.SOUND_PAIRS || { guide: [], items: [] };
  const drawPairs = (box) => {
    const items = (SP().items || []).filter((it) => Array.isArray(it) && it[1] && it[3]);
    const guide = (SP().guide || []).filter((g) => items.some((it) => it[0] === g[0]));
    if (!items.length) { box.innerHTML = '<div class="notice">The sound pairs are not written yet.</div>'; return; }
    if (st.type && !guide.some((g) => g[0] === st.type)) st.type = '';
    const g = guide.find((x) => x[0] === st.type);
    const pool = items.filter((it) => !st.type || it[0] === st.type);
    const set = pick(pool, Math.min(10, pool.length)).map((it) => ({ it, which: Math.random() < 0.5 ? 0 : 1 }));
    const key = 'pairs:' + (st.type || 'all');
    box.innerHTML = '<div class="row lp-ctl">' + seg('Type', [['', 'All']].concat(guide.map((x) => [x[0], x[1]])), st.type, 'type') + '</div>' +
      '<div class="card lp-guide">' + (g ? '<b>' + esc(g[1]) + '.</b> ' + esc(g[2]) : '<b>All types, mixed.</b> Choose a type to read how it works.') + '</div><div id="lpq"></div>';
    box.querySelectorAll('[data-type]').forEach((b) => (b.onclick = () => { st.type = b.dataset.type; drawPairs(box); }));
    const q = box.querySelector('#lpq');
    let i = 0, right = 0;
    const one = () => {
      if (i >= set.length) {
        const pct = Math.round((100 * right) / set.length);
        q.innerHTML = '<div class="card stack"><h3>' + right + ' / ' + set.length + ' heard right</h3><div class="progress"><i style="width:' + pct + '%"></i></div><div class="row"><button class="btn primary" id="lpagain">New set</button></div></div>';
        q.querySelector('#lpagain').onclick = () => drawPairs(box);
        best(key, pct);
        return;
      }
      const { it, which } = set[i];
      const words = [[it[1], it[2]], [it[3], it[4]]];
      const heard = words[which][0];
      const play = () => App.speak(heard, { rate: rate() });
      q.innerHTML = '<div class="card stack"><div class="spread"><span class="eyebrow">Pair ' + (i + 1) + ' of ' + set.length + '</span></div>' +
        '<div class="listen-q"><button class="btn primary" id="lpplay">' + icons.sound + ' Play again</button><span class="muted small">Which word did you hear?</span></div>' +
        '<div class="lp-pair">' + words.map((w, k) => '<button type="button" class="opt lp-pick" data-k="' + k + '"><span class="tl lp-pw">' + esc(w[0]) + '</span><span class="lp-pe">' + esc(w[1]) + '</span></button>').join('') + '</div><div id="lpfb"></div></div>';
      q.querySelector('#lpplay').onclick = play;
      q.querySelectorAll('.lp-pick').forEach((b) => (b.onclick = () => {
        const k = +b.dataset.k, ok = k === which;
        if (ok) right++;
        App.recordAnswer(ok);
        q.querySelectorAll('.lp-pick').forEach((x) => { x.disabled = true; if (+x.dataset.k === which) x.classList.add('right'); });
        if (!ok) b.classList.add('wrong');
        q.querySelector('#lpfb').innerHTML = '<div class="feedback ' + (ok ? 'ok' : 'no') + ' stack"><div><b>' + (ok ? 'Right.' : 'Not quite.') + '</b> You heard <span class="tl">' + esc(heard) + '</span> (' + esc(words[which][1]) + '). Compare them:</div>' +
          words.map((w) => '<div class="row">' + App.sayBtn(w[0]) + '<span class="tl">' + esc(w[0]) + '</span><span class="muted">' + esc(w[1]) + '</span></div>').join('') +
          (it[5] ? '<div class="small">' + esc(it[5]) + '</div>' : '') + '</div>' +
          '<div class="row" style="margin-top:10px"><button class="btn primary" id="lpnext">' + (i + 1 < set.length ? 'Next' : 'See score') + '</button></div>';
        q.querySelector('#lpnext').onclick = () => { i++; one(); };
        q.querySelector('#lpnext').focus();
      }));
      setTimeout(play, 150);
    };
    one();
  };

  /* ---------- Dialogues, readings and case simulations ---------- */
  const LQ = () => window.LISTEN_Q || {};
  const has = (id) => Array.isArray(LQ()[id]) && LQ()[id].length > 0;
  const storyItems = () => {
    const out = [];
    (window.DIALOGUES || []).forEach((d) => { if (d && has(d.id)) out.push({ kind: 'd', id: d.id, level: d.level, title: d.title, sub: '', obj: d }); });
    (window.READING || []).forEach((r) => { if (r && has(r.id)) out.push({ kind: 'r', id: r.id, level: r.level, title: r.title, sub: r.titleEn || '', obj: r }); });
    if (typeof App.caseDialogue === 'function') (window.PSYCH_CASES || []).forEach((c) => {
      const id = 'case-' + c.id;
      if (!has(id)) return;
      let obj = null; try { obj = App.caseDialogue(c); } catch (e) { obj = null; }
      if (obj) out.push({ kind: 'c', id, caseId: c.id, level: c.level, title: c.title, sub: c.setting || '', nurse: c.role === 'nurse', obj });
    });
    return out;
  };
  App.listenStoryIds = () => storyItems().map((x) => x.id);   // for the Progress page
  App.listenKeys = () => ['hear:words:everyday', 'hear:words:clinical'].concat(LEVELS.map((l) => 'hear:sentences:' + l), ['dict:words:everyday', 'dict:words:clinical'], LEVELS.map((l) => 'dict:sentences:' + l),
    ['pairs:all'], ((SP().guide || []).map((g) => 'pairs:' + g[0])), App.listenStoryIds().map((id) => 'story:' + id));
  const KIND = { d: 'Dialogue', r: 'Reading', c: 'Case simulation' };
  const drawStoryList = (box) => {
    const items = storyItems();
    if (!items.length) { box.innerHTML = '<div class="notice">The listening questions are not written yet.</div>'; return; }
    const tile = (x) => {
      const b = bestOf('story:' + x.id);
      return '<a class="tile" href="#/listen?tab=story&id=' + encodeURIComponent(x.id) + '"><div class="row lp-pills"><span class="pill lv">' + esc(x.level) + '</span><span class="pill">' + KIND[x.kind] + '</span>' + (x.kind === 'c' ? '<span class="pill warn">clinical</span>' + (x.nurse ? '<span class="pill">nurse</span>' : '') : '') + (b != null ? '<span class="pill good">' + b + '%</span>' : '') + '</div>' +
        '<h3 style="margin-top:6px"' + (x.kind === 'r' ? ' class="tl"' : '') + '>' + esc(x.title) + '</h3><p>' + (x.sub ? esc(x.sub) + ' · ' : '') + LQ()[x.id].length + ' questions</p></a>';
    };
    const order = { d: 0, r: 1, c: 2 };
    const lvs = LEVELS.concat([...new Set(items.map((x) => x.level))].filter((l) => !LEVELS.includes(l)));
    box.innerHTML = lvs.map((lv) => {
      const g = items.filter((x) => x.level === lv).sort((a, b) => order[a.kind] - order[b.kind]);
      return g.length ? '<h2 style="margin-top:14px">' + esc(lv || 'Other') + '</h2><div class="grid">' + g.map(tile).join('') + '</div>' : '';
    }).join('');
  };
  const drawStory = (box, id) => {
    const x = storyItems().find((s) => s.id === id);
    if (!x) { box.innerHTML = '<div class="notice">There are no listening questions for this item. <a href="#/listen?tab=story">See the list</a>.</div>'; return; }
    const dl = x.kind !== 'r';   // dialogues and case simulations are shown as a conversation
    const reg = S().settings.register;
    const lines = dl
      ? x.obj.lines.map((l) => ({ who: l[4] || (x.obj.roles || [])[l[0]] || '', es: reg === 'c' && l[3] ? l[3] : l[1], en: l[2] || '', me: l[0] === x.obj.you }))
      : (x.obj.tl || []).map((t, k) => ({ who: '', es: t, en: (x.obj.en || [])[k] || '' }));
    const back = x.kind === 'c' ? ['#/psych/case/' + x.caseId, 'Open the case'] : x.kind === 'd' ? ['#/speak/' + x.id, 'Open the dialogue'] : ['#/reading/' + x.id, 'Open the reading'];
    let shown = false;
    box.innerHTML = '<div class="row"><span class="pill lv">' + esc(x.level) + '</span><span class="muted small">' + (x.kind === 'c' ? 'Case simulation' + (x.nurse ? ' · you are the ward nurse' : '') : KIND[x.kind]) + '</span></div>' +
      '<h2 style="margin-top:6px"' + (x.kind === 'r' ? ' class="tl"' : '') + '>' + esc(x.title) + '</h2>' + (x.sub ? '<p class="muted">' + esc(x.sub) + '</p>' : '') +
      '<div class="row lp-ctl"><button class="btn primary" id="lpall">' + icons.sound + ' Play all</button><button class="btn" id="lpstop">Stop</button><button class="btn" id="lpshow" aria-expanded="false" aria-controls="lptext">Show the text</button><span class="muted small" id="lpstat" aria-live="polite"></span></div>' +
      '<div id="lptext" hidden></div><h2 style="margin-top:16px">Questions</h2><div id="lpq"></div>' +
      '<div class="row" style="margin-top:12px"><a class="btn" href="' + back[0] + '">' + back[1] + '</a><a class="btn ghost" href="#/listen?tab=story">All listening questions</a></div>';
    const $ = (s) => box.querySelector(s);
    $('#lptext').innerHTML = '<div class="' + (dl ? 'dlg' : 'card passage') + '">' + lines.map((l, k) => dl
      ? '<div class="line' + (l.me ? ' me' : '') + '" data-ln="' + k + '"><div class="spread"><span class="who">' + esc(l.who) + '</span>' + App.sayBtn(l.es) + '</div><div class="t">' + esc(l.es) + '</div><div class="e">' + esc(l.en) + '</div></div>'
      : '<div class="lp-para" data-ln="' + k + '"><div class="row lp-prow">' + App.sayBtn(l.es) + '<p class="tl">' + esc(l.es) + '</p></div>' + (l.en ? '<p class="tr">' + esc(l.en) + '</p>' : '') + '</div>').join('') + '</div>';
    const mark = (k) => box.querySelectorAll('[data-ln]').forEach((n) => n.classList.toggle('lp-now', +n.dataset.ln === k));
    $('#lpall').onclick = async () => {
      const done = await speakSeq(lines.map((l) => l.es), dl ? 300 : 350, (k) => { mark(k); const s = $('#lpstat'); if (s) s.textContent = (dl ? 'Line ' : 'Part ') + (k + 1) + ' of ' + lines.length; });
      if (!box.isConnected || !$('#lpstat')) return;
      mark(-1); $('#lpstat').textContent = done ? 'Finished.' : '';
    };
    $('#lpstop').onclick = () => { App.stopSpeech(); mark(-1); $('#lpstat').textContent = 'Stopped.'; };
    $('#lpshow').onclick = () => { shown = !shown; $('#lptext').hidden = !shown; $('#lpshow').textContent = shown ? 'Hide the text' : 'Show the text'; $('#lpshow').setAttribute('aria-expanded', String(shown)); };
    const qs = LQ()[x.id].filter((r) => Array.isArray(r) && Array.isArray(r[1])).map(([q, opts, a, why]) => ({ q, opts, a, exp: why || '' }));
    App.runQuiz($('#lpq'), qs, { onDone: (r, n) => best('story:' + x.id, Math.round((100 * r) / n)) });
  };

  /* ---------- Page ---------- */
  V.listen = (el, p, q) => {
    q = q || {};
    const tab = TABS.some((t) => t[0] === q.tab) ? q.tab : 'hear';
    const usesSrc = tab === 'hear' || tab === 'dict';
    el.innerHTML = crumb([['Practice', '#/practice'], ['Listening practice']]) + '<h1>Listening practice</h1>' +
      '<div class="seg cz-tabs lp-tabs" role="group" aria-label="View">' + TABS.map(([k, t]) => '<a role="button" href="#/listen' + (k === 'hear' ? '' : '?tab=' + k) + '" class="' + (tab === k ? 'on' : '') + '"' + (tab === k ? ' aria-current="page"' : '') + '>' + t + '</a>').join('') + '</div>' +
      '<p class="muted">' + esc(INTRO[tab]) + '</p>' +
      '<div class="row lp-ctl">' + (usesSrc ? '<div id="lplvrow"' + (st.src === 'sentences' ? '' : ' hidden') + '>' + seg('Level', shownLevels().map((k) => [k, k]), level(), 'lv') + '</div>' : '') +
        seg('Speed', SPEEDS.map(([k, t]) => [k, t]), st.speed, 'sp') +
        (tab === 'story' ? '' : '<button class="btn sm" id="lpnew">New set</button>') + '</div>' +
      '<div id="lpbody"></div>';
    const box = el.querySelector('#lpbody');
    const draw = () => {
      if (tab === 'hear') drawHear(box);
      else if (tab === 'dict') drawDict(box);
      else if (tab === 'pairs') drawPairs(box);
      else if (q.id) drawStory(box, q.id);
      else drawStoryList(box);
    };
    el.querySelectorAll('[data-lv]').forEach((b) => (b.onclick = () => {
      S().settings.listenLv = b.dataset.lv; App.save();
      el.querySelectorAll('[data-lv]').forEach((x) => { x.classList.toggle('on', x === b); x.setAttribute('aria-pressed', String(x === b)); });
      draw();
    }));
    el.querySelectorAll('[data-sp]').forEach((b) => (b.onclick = () => {
      st.speed = b.dataset.sp;
      el.querySelectorAll('[data-sp]').forEach((x) => { x.classList.toggle('on', x === b); x.setAttribute('aria-pressed', String(x === b)); });
      if (tab !== 'story') draw();   // a new set at the new speed; on a story page the speed applies to the next Play all
    }));
    const nb = el.querySelector('#lpnew'); if (nb) nb.onclick = draw;
    draw();
  };
})();
