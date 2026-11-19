/* Shared question runner App.drillRun(box, qs, o) (Hablemos 0.11.0, ported from Hanashimashō 0.25.0 js/today.js).
   Used by Find the mistake (js/errors.js) and Listen and reply (js/reply.js). Load after js/views.js.
   Question shape: { drill, id, lv, tag, html, opts?: [{ h, ok, say?, cls?, lab? }], wide?, mount?(card, answer), play?,
   reveal?(card, ok, ch), fb(ok, ch) → html, done?(ok, ch) }. opts with `say` get their own speaker beside the button.
   play = text spoken when the question opens and from any [data-act=play] button. [data-qtext] elements are shown once
   answered. Keys 1-9 choose an option; Enter goes on after an answer.
   o: label (eyebrow suffix), onAnswer(q, ok), onDone(right, n, pct) → html of the buttons, bind(card) after the score card,
   scoreNote(pct) → extra text under the score. */
(function () {
  if (typeof window === 'undefined' || !window.App) return;
  const App = window.App;
  const esc = App.esc || ((s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])));
  const LQ = () => Object.assign({ right: '¡Correcto!', wrong: 'No.', great: '¡Muy bien!', ok: 'Bien.', keepGoing: 'Sigue así.' }, (window.LANG && LANG.quiz) || {});
  const speak = (t) => { if (App.speak) App.speak(t); };
  const stop = () => { if (App.stopSpeech) App.stopSpeech(); };
  const say = (t, l) => (App.sayBtn ? App.sayBtn(t, l) : '');

  App.drillRun = (box, qs, o) => {
    o = o || {};
    qs = Array.isArray(qs) ? qs : [];
    let i = 0, right = 0, answered = false;
    const card = () => box.querySelector('.dr-q');
    const finish = () => {
      App.keyHandler = null;
      const n = qs.length, pct = n ? Math.round((100 * right) / n) : 0;
      const btns = o.onDone ? o.onDone(right, n, pct) : '';
      if (!box.isConnected) return;
      box.innerHTML = '<div class="card stack dr-done"><h3 style="margin:0">' + esc(pct >= 80 ? LQ().great : pct >= 50 ? LQ().ok : LQ().keepGoing) + ' ' + right + ' / ' + n + '</h3>' +
        '<div class="progress"><i style="width:' + pct + '%"></i></div><p class="muted small" style="margin:0">' + pct + '%.' + (o.scoreNote ? ' ' + esc(o.scoreNote(pct)) : '') + '</p>' +
        '<div class="row" style="flex-wrap:wrap">' + btns + '</div></div>';
      if (o.bind) o.bind(box.querySelector('.dr-done'));
      const f = box.querySelector('.dr-done .btn'); if (f) f.focus({ preventScroll: true });
    };
    const draw = () => {
      if (!box.isConnected) return;
      if (i >= qs.length) return finish();
      answered = false;
      const q = qs[i], withSay = q.opts && q.opts.some((x) => x.say);
      const optHtml = (x, k) => '<button type="button" class="opt' + (x.cls ? ' ' + x.cls : '') + '" data-k="' + k + '"' + (x.lab ? ' aria-label="' + esc(x.lab) + '"' : '') + '><span class="dr-k" aria-hidden="true">' + (k + 1) + '</span> ' + x.h + '</button>';
      box.innerHTML = '<div class="card stack dr-q" data-drill="' + esc(q.drill || '') + '" data-id="' + esc(q.id || '') + '">' +
        '<div class="spread"><span class="eyebrow">Question ' + (i + 1) + ' of ' + qs.length + (o.label ? ' · ' + esc(o.label) : '') + '</span>' +
        '<span class="row dr-tags">' + (q.tag ? '<span class="pill">' + esc(q.tag) + '</span>' : '') + (q.lv ? '<span class="pill lv">' + esc(q.lv) + '</span>' : '') + '</span></div>' +
        '<div class="progress" aria-hidden="true"><i style="width:' + Math.round((100 * i) / qs.length) + '%"></i></div>' + q.html +
        (q.opts ? '<div class="opts dr-opts' + (withSay ? ' dr-sayopts' : '') + (q.wide ? ' dr-wide' : '') + '">' +
          q.opts.map((x, k) => (withSay ? '<div class="dr-optrow">' + optHtml(x, k) + (x.say ? say(x.say, x.say) : '') + '</div>' : optHtml(x, k))).join('') + '</div>' : '') +
        '<div data-fb></div></div>';
      const c = card();
      if (q.play) {
        c.querySelectorAll('[data-act=play]').forEach((b) => (b.onclick = () => speak(q.play)));
        setTimeout(() => { if (c.isConnected && qs[i] === q && !answered) speak(q.play); }, 150);
      }
      c.querySelectorAll('.dr-opts .opt').forEach((b) => (b.onclick = () => { const x = q.opts[+b.dataset.k]; answer(!!x.ok, x, b); }));
      if (q.mount) q.mount(c, (ok, ch, el) => answer(!!ok, ch, el));
    };
    const answer = (ok, ch, el) => {
      if (answered) return;
      answered = true;
      const q = qs[i], c = card();
      if (!c) return;
      if (ok) right++;
      c.querySelectorAll('.dr-opts .opt').forEach((x) => { x.disabled = true; if (q.opts[+x.dataset.k].ok) x.classList.add('right'); });
      if (!ok && el && el.classList) el.classList.add('wrong');
      c.querySelectorAll('[data-qtext]').forEach((x) => (x.hidden = false));
      c.classList.add('answered');
      try { if (q.done) q.done(ok, ch); } catch (e) { console.error(e); }
      App.save();
      if (o.onAnswer) o.onAnswer(q, ok);
      try { if (q.reveal) q.reveal(c, ok, ch); } catch (e) { console.error(e); }
      c.querySelector('[data-fb]').innerHTML = '<div class="feedback ' + (ok ? 'ok' : 'no') + ' stack dr-fb"><b>' + esc(ok ? LQ().right : LQ().wrong) + '</b>' + (q.fb ? q.fb(ok, ok ? null : ch) : '') + '</div>' +
        '<div class="row" style="margin-top:10px"><button type="button" class="btn primary" data-act="next">' + (i + 1 < qs.length ? 'Next' : 'See score') + '</button></div>';
      const nx = c.querySelector('[data-act=next]');
      nx.onclick = () => { stop(); i++; draw(); const t = box.getBoundingClientRect().top; if (t < 0) box.scrollIntoView({ block: 'start' }); };
      nx.focus({ preventScroll: true });
    };
    const keys = (ev) => {
      if (!box.isConnected || ev.altKey || ev.ctrlKey || ev.metaKey || (ev.target.matches && ev.target.matches('input,textarea,select'))) return;
      const c = card(); if (!c) return;
      if (!answered && /^[1-9]$/.test(ev.key)) {
        const b = c.querySelector('.dr-opts .opt[data-k="' + (+ev.key - 1) + '"]:not(:disabled)');
        if (b) { ev.preventDefault(); b.click(); }
        return;
      }
      if (answered && ev.key === 'Enter' && !(ev.target.closest && ev.target.closest('button,a,[role=button]'))) { const nx = c.querySelector('[data-act=next]'); if (nx) { ev.preventDefault(); nx.click(); } }
    };
    App.keyHandler = keys;
    box.drQs = qs; box.drAt = () => i;   // for QA
    if (!qs.length) { box.innerHTML = '<div class="notice info">No questions for this choice yet.</div>'; return; }
    draw();
  };
})();
