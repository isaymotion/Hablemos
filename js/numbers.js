/* Numbers, dates and time (#/numbers, Hablemos 0.8.0). Ported from the Hanashimashō numbers drill.
   Data: window.ES_NUMBERS (js/data/numbers.js) = { groups: [{ id, title, note, rows: [[label, es, tricky?]] }],
   clinical: [[es, en, question, answer, [wrong, wrong, wrong]]] }.
   Tabs (?tab=): learn (default): one group as a table with sound and Play all; quiz: Read (label → Spanish) or
   Listen (Spanish → label), tricky rows asked twice as often; clinic: hear a sentence with a number, answer in English.
   Best scores: App.state.done.numbers['<groupId>:read' | '<groupId>:listen'] (group 'mixed' = every group) and
   App.state.done.numbers.clinic, as best %. Setting: App.state.settings.numGroup (the group shown in Learn). */
(function () {
  const { esc, shuffle, pick, icons } = App;
  const V = App.views;
  const S = () => App.state;
  const crumb = (items) => '<div class="breadcrumb">' + items.map(([t, h]) => (h ? '<a href="' + h + '">' + esc(t) + '</a>' : esc(t))).join(' / ') + '</div>';
  const D = () => window.ES_NUMBERS || { groups: [], clinical: [] };
  const groups = () => (D().groups || []).filter((g) => g && (g.rows || []).length);
  const TABS = [['learn', 'Learn'], ['quiz', 'Quiz'], ['clinic', 'In the clinic']];
  const RATES = { slow: 0.7, natural: 0.9, fast: 1.05 };
  // Compare two values the way a learner would hear or read them (case and final punctuation ignored).
  const same = (a, b) => String(a).toLowerCase().replace(/[.,;:!?¡¿\s]+/g, ' ').trim() === String(b).toLowerCase().replace(/[.,;:!?¡¿\s]+/g, ' ').trim();
  // Group notes may italicise Spanish with <i>…</i> (and <b>); every other tag stays escaped.
  const noteHTML = (s) => esc(s).replace(/&lt;(\/?)(i|b)&gt;/g, '<$1$2>');
  const done = () => { const d = S().done; if (!d.numbers || typeof d.numbers !== 'object') d.numbers = {}; return d.numbers; };
  const groupSelect = (id, cur, withMixed) => '<label class="small num-grp">Group <select class="input" id="' + id + '">' +
    (withMixed ? '<option value="mixed"' + (cur === 'mixed' ? ' selected' : '') + '>Mixed: all groups</option>' : '') +
    groups().map((g) => '<option value="' + esc(g.id) + '"' + (g.id === cur ? ' selected' : '') + '>' + esc(g.title) + '</option>').join('') + '</select></label>';
  const curGroup = () => {
    const gs = groups(), id = S().settings.numGroup;
    return gs.find((g) => g.id === id) || gs[0];
  };

  V.numbers = (el, p, q) => {
    q = q || {};
    const tab = TABS.some(([k]) => k === q.tab) ? q.tab : 'learn';
    el.innerHTML = crumb([['Practice', '#/practice'], ['Numbers, dates and time']]) + '<h1>Numbers, dates and time</h1>' +
      '<p class="muted">Ages, doses, dates, clock times and phone numbers come up in every interview, and they are easy to mishear. Learn a group, then quiz it by reading and by ear.</p>' +
      '<div class="seg cz-tabs num-tabs" role="group" aria-label="View">' + TABS.map(([k, t]) => '<a role="button" href="#/numbers' + (k === 'learn' ? '' : '?tab=' + k) + '" class="' + (tab === k ? 'on' : '') + '"' + (tab === k ? ' aria-current="page"' : '') + '>' + t + '</a>').join('') + '</div>' +
      '<div id="numbody"></div>' +
      '<p class="small muted" style="margin-top:14px">Draft for review: the Spanish and the clinic sentences are pending review by a native Spanish-speaking clinician.</p>';
    const box = el.querySelector('#numbody');
    if (!groups().length && tab !== 'clinic') { box.innerHTML = '<div class="notice">The number groups are not in the app yet.</div>'; return; }
    (tab === 'quiz' ? quiz : tab === 'clinic' ? clinic : learn)(box);
  };

  /* ---------- Learn ---------- */
  function learn(box) {
    const g = curGroup();
    let playing = false;
    box.innerHTML = '<div class="row num-bar">' + groupSelect('numgrp', g.id) +
      '<button class="btn sm primary" id="numplay">' + icons.sound + ' Play all</button></div>' +
      (g.note ? '<div class="notice info num-note">' + noteHTML(g.note) + '</div>' : '') +
      '<div class="tablewrap"><table class="num-table"><thead><tr><th scope="col">You see</th><th scope="col">You say</th><th scope="col"><span class="sr-only">Listen</span></th></tr></thead><tbody>' +
      g.rows.map((r, i) => '<tr data-i="' + i + '"' + (r[2] ? ' class="num-irr"' : '') + '><td class="num-label">' + esc(r[0]) +
        (r[2] ? ' <span class="pill warn num-pill">tricky</span>' : '') + '</td><td class="tl num-read" lang="es">' + esc(r[1]) + '</td><td class="num-say">' + App.sayBtn(r[1], r[1]) + '</td></tr>').join('') +
      '</tbody></table></div>' +
      (g.rows.some((r) => r[2]) ? '<p class="small muted" style="margin-top:8px">Rows marked <span class="pill warn num-pill">tricky</span> are the ones English speakers often get wrong: spelling, accents, or a form that changes.</p>' : '');
    const btn = box.querySelector('#numplay');
    const mark = (i) => box.querySelectorAll('.num-table tr[data-i]').forEach((tr) => tr.classList.toggle('num-playing', +tr.dataset.i === i));
    const stop = () => { playing = false; App.stopSpeech(); mark(-1); btn.innerHTML = icons.sound + ' Play all'; };
    btn.onclick = async () => {
      if (playing) return stop();
      playing = true; btn.textContent = 'Stop';
      App.stopSpeech();
      const tok = App._seq;
      for (let i = 0; i < g.rows.length; i++) {
        if (!playing || App._seq !== tok || !box.isConnected) break;
        mark(i);
        const tr = box.querySelector('tr[data-i="' + i + '"]'); if (tr && tr.scrollIntoView) tr.scrollIntoView({ block: 'nearest' });
        await App.speakAsync(g.rows[i][1]);
        if (App._seq !== tok) break;
        await new Promise((r) => setTimeout(r, 300));
      }
      if (box.isConnected && btn.isConnected) { playing = false; mark(-1); btn.innerHTML = icons.sound + ' Play all'; }
    };
    box.querySelector('#numgrp').onchange = (e) => { if (playing) stop(); S().settings.numGroup = e.target.value; App.save(); learn(box); };
  }

  /* ---------- Quiz ---------- */
  // Ten rows from the pool, tricky rows weighted twice; repeats only when the pool is smaller than ten.
  const drawRows = (rows, n) => {
    const weighted = shuffle(rows.flatMap((r) => (r.row[2] ? [r, r] : [r])));
    const out = [];
    weighted.forEach((r) => { if (out.length < n && !out.includes(r)) out.push(r); });
    let guard = 0;
    while (out.length < n && rows.length > 1 && guard++ < 200) {
      const r = weighted[Math.floor(Math.random() * weighted.length)];
      if (r !== out[out.length - 1]) out.push(r);
    }
    return out;
  };
  // Three wrong values (k = 0 label, 1 Spanish) from the same group, then from the rest if the group is small.
  const wrongs = (item, all, k) => {
    const val = (r) => r.row[k], seen = [val(item)], out = [];
    const take = (list) => shuffle(list).forEach((r) => { if (out.length < 3 && !seen.some((v) => same(v, val(r)))) { seen.push(val(r)); out.push(val(r)); } });
    take(all.filter((r) => r.g === item.g));
    if (out.length < 3) take(all.filter((r) => r.g !== item.g));
    return out;
  };

  function quiz(box) {
    const st = S().numQuiz || (S().numQuiz = {});
    let gid = st.group === 'mixed' || groups().some((g) => g.id === st.group) ? st.group : (curGroup() || {}).id;
    let mode = st.mode === 'listen' ? 'listen' : 'read';
    const draw = () => {
      const best = done()[gid + ':' + mode];
      box.innerHTML = '<div class="row num-bar">' + groupSelect('numqg', gid, true) +
        '<div class="seg" role="group" aria-label="Mode">' + [['read', 'Read'], ['listen', 'Listen']].map(([k, t]) => '<button type="button" data-mode="' + k + '" class="' + (mode === k ? 'on' : '') + '" aria-pressed="' + (mode === k) + '">' + t + '</button>').join('') + '</div>' +
        '<button class="btn sm" id="numnew">New set</button>' + (best != null ? '<span class="pill' + (best >= 80 ? ' good' : '') + '">Best ' + best + '%</span>' : '') + '</div>' +
        '<p class="muted small">' + (mode === 'read' ? 'See the number, date or time; choose how it is said in Spanish.' : 'Hear the Spanish; choose what it means.') + ' Tricky rows come up twice as often.</p><div id="numq"></div>';
      const all = groups().flatMap((g) => g.rows.map((row) => ({ g: g.id, row })));
      const pool = gid === 'mixed' ? all : all.filter((r) => r.g === gid);
      const qbox = box.querySelector('#numq');
      if (pool.length < 2 || all.length < 4) { qbox.innerHTML = '<div class="notice">Not enough rows in this group yet. Choose another group or "Mixed".</div>'; }
      else {
        const qs = drawRows(pool, 10).map((it) => {
          const [label, es] = it.row;
          return mode === 'read'
            ? { q: label, opts: [es].concat(wrongs(it, all, 1)), a: 0, tlo: true, exp: label + ' = ' + es }
            : { q: es, say: es, hideQ: 'Listen, then choose what it means.', opts: [label].concat(wrongs(it, all, 0)), a: 0, exp: es + ' = ' + label };
        });
        App.runQuiz(qbox, qs, { onDone: (r, n) => { App.activity(10); const key = gid + ':' + mode, pct = Math.round((100 * r) / n); done()[key] = Math.max(done()[key] || 0, pct); App.save(); } });
      }
      box.querySelector('#numqg').onchange = (e) => { gid = st.group = e.target.value; if (gid !== 'mixed') S().settings.numGroup = gid; App.save(); draw(); };
      box.querySelectorAll('[data-mode]').forEach((b) => (b.onclick = () => { mode = st.mode = b.dataset.mode; App.save(); draw(); }));
      box.querySelector('#numnew').onclick = draw;
    };
    draw();
  }

  /* ---------- In the clinic ---------- */
  function clinic(box) {
    const items = (D().clinical || []).filter((c) => c && c[0] && c[3] && (c[4] || []).length);
    let speed = 'natural';
    const draw = () => {
      box.innerHTML = '<p class="muted">A patient, a relative or a nurse says a sentence with a number in it: a dose, a time, a date, how many days. Hear it, then answer the question in English. The sentence appears after you answer.</p>' +
        '<div class="row num-bar"><div class="seg" role="group" aria-label="Speed">' + [['slow', 'Slower'], ['natural', 'Natural'], ['fast', 'Fast']].map(([k, t]) => '<button type="button" data-sp="' + k + '" class="' + (speed === k ? 'on' : '') + '" aria-pressed="' + (speed === k) + '">' + t + '</button>').join('') + '</div>' +
        '<button class="btn sm" id="numcnew">New set</button>' + (done().clinic != null ? '<span class="pill' + (done().clinic >= 80 ? ' good' : '') + '">Best ' + done().clinic + '%</span>' : '') + '</div><div id="numcq"></div>';
      const qbox = box.querySelector('#numcq');
      if (!items.length) qbox.innerHTML = '<div class="notice">The clinic sentences are not in the app yet.</div>';
      else {
        const qs = pick(items, Math.min(10, items.length)).map(([es, en, question, answer, wrong]) => ({
          q: es, say: es, hideQ: 'Listen, then answer.', sub: question, rate: RATES[speed], opts: [answer].concat(wrong.slice(0, 3)), a: 0, exp: es + ' ' + en
        }));
        App.runQuiz(qbox, qs, { onDone: (r, n) => { App.activity(10); done().clinic = Math.max(done().clinic || 0, Math.round((100 * r) / n)); App.save(); } });
      }
      box.querySelectorAll('[data-sp]').forEach((b) => (b.onclick = () => { speed = b.dataset.sp; draw(); }));
      box.querySelector('#numcnew').onclick = draw;
    };
    draw();
  }
})();
