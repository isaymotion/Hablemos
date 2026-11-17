/* Lesson order (Hablemos 0.7.0, from Hanashimashō). Loaded AFTER every lessons-*.js and lesson-extra-*.js file and before js/core.js, so every
   page (lessons list, units, previous / next, placement, progress counts, search, listening sentences) sees one order.
   Not content: no Spanish here.
   A lesson with `after: '<lesson id>'` moves to directly after that lesson. Several lessons with the same `after`:
   the `review: true` ones first, then the others in file order. Chains resolve (a lesson placed after a lesson that
   itself moved follows it to its new place). A lesson whose `after` names no lesson (or itself) stays where it is.
   The array is re-sorted IN PLACE (window.LESSONS stays the same object); running it twice gives the same order.
   Guarded so it loads alone (tests/data_check.js). */
(function (root) {
  const L = root.LESSONS;
  if (!Array.isArray(L) || !L.length) return;
  const byId = new Map();
  L.forEach((l) => { if (l && l.id && !byId.has(l.id)) byId.set(l.id, l); });
  const moves = (l) => !!(l && l.after && l.after !== l.id && byId.has(l.after));
  const kids = new Map();   // anchor id -> lessons placed after it, reviews first, then file order
  L.forEach((l) => { if (moves(l)) { if (!kids.has(l.after)) kids.set(l.after, []); kids.get(l.after).push(l); } });
  kids.forEach((ls) => ls.sort((a, b) => (b.review ? 1 : 0) - (a.review ? 1 : 0) || L.indexOf(a) - L.indexOf(b)));
  const out = [], seen = new Set();
  const emit = (l) => {
    if (seen.has(l)) return;
    seen.add(l); out.push(l);
    (kids.get(l.id) || []).forEach(emit);
  };
  L.forEach((l) => { if (!moves(l)) emit(l); });
  L.forEach((l) => { if (!seen.has(l)) emit(l); });   // only a cycle of `after`s gets here: keep those lessons, in file order
  L.length = 0;
  out.forEach((l) => L.push(l));
})(typeof window !== 'undefined' ? window : globalThis);

/* Hablemos: one explicit syllabus order on top of the `after` pass above (levels in order, each level ending with its
   Everyday life / culture units and its review). A lesson not named here keeps its place after the named ones.
   Not content. To add a lesson: put its id where it belongs in this list. */
(function (root) {
  const L = root.LESSONS;
  if (!Array.isArray(L) || !L.length) return;
  const ORDER = ('sounds ser-estar hay-estar gender-agreement articles-contractions subject-pronouns possessives demonstratives basic-prepositions muy-mucho tu-usted questions negation ' +
    'tener-expressions ir-a-future stem-changing irregular-yo querer-poder-necesitar numbers-dates time-frequency family-household review-a1 position-words body-donde-duele describing-with-tener clothes-colors directions-map review-pictures-a1 ' +
    'present-tense reflexive-feelings gustar-doler commands-instructions past-timelines preterite-regular preterite-irregular imperfect preterite-vs-imperfect hace-desde present-perfect ' +
    'direct-object-pronouns indirect-object-pronouns por-para present-progressive saber-conocer obligation-advice comparatives connectors-basic body-symptoms medicines-dosing review-a2 machine-instructions states-pictures explaining-with-pictures review-pictures-a2 ' +
    'subjunctive-basics subjunctive-wishes subjunctive-emotion-doubt subjunctive-time-purpose negative-commands-pronouns future-conditional pluperfect reported-speech relative-clauses ' +
    'se-impersonal se-accidental verbs-of-change periphrases diminutives prepositional-verbs regional-variety spanglish softeners values faith-folk idioms-distress false-friends interpreting review-b1 ' +
    'imperfect-subjunctive si-clauses conditional-perfect-regret subjunctive-concession passive-and-se ser-estar-adjectives lo-neutro future-of-probability discourse-markers casual-speech advanced-pronouns chart-and-form-spanish review-b2').split(' ');
  const pos = new Map(ORDER.map((id, i) => [id, i]));
  const at = new Map(L.map((l, i) => [l, i]));
  const key = (l) => (pos.has(l.id) ? pos.get(l.id) : ORDER.length + at.get(l));
  const sorted = L.slice().sort((a, b) => key(a) - key(b));
  L.length = 0; sorted.forEach((l) => L.push(l));
  const sb = L.find((l) => l.id === 'subjunctive-basics'); if (sb) sb.unit = 'Subjunctive in use';
})(typeof window !== 'undefined' ? window : globalThis);
