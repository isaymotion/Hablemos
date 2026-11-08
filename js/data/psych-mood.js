/* Mood episode checker: DSM-5-TR major depressive / manic / hypomanic criteria, PHQ-9 and MDQ in Spanish (EMPTY SHELL).
   Hablemos (Spanish). Field names stay `tl`, `f`, `c` for engine compatibility: `tl` = the Spanish text; registers are
   f = usted (formal), c = tú (informal). Shell: no content yet. Once populated, mark this file
   "Draft for review by a native Spanish-speaking clinician" until it has been reviewed.
   The original appended a "mood-screens" section to PSYCH_SECTIONS; that side effect is dropped here.
   Shape: window.PSYCH_MOOD = { mde: [crit], manic: [crit], manicGate: [ {id,en,q} ], extra: { mde: [], manic: [] },
     phq9: { title, stem:{en,tl}, opts: [], items: [ {tl,en} ], impairment: {en,tl,opts}, bands(score), note },
     mdq:  { title, stem:{en,tl}, items: [ {tl,en} ], same: {en,tl}, problem: {en,tl,opts}, note } }
   crit = { n, gate?, b, en, q: { tl, en, n? } }.  The mood.js view reads d.mde, d.manic, d.manicGate, d.extra, d.phq9, d.mdq.
   Example mde element:
     { n: 1, gate: true, b: 'Mood', en: 'Depressed mood most of the day, nearly every day',
       q: { tl: '¿Se ha sentido triste o decaído casi todo el día, casi todos los días?', en: 'Have you felt sad or down most of the day, nearly every day?', n: 'Gate · depressed mood.' } } */
window.PSYCH_MOOD = {
  mde: [], manic: [], manicGate: [], extra: { mde: [], manic: [] },
  phq9: { title: '', stem: { en: '', tl: '' }, opts: [], items: [], impairment: { en: '', tl: '', opts: [] }, bands: function () { return ''; }, note: '' },
  mdq: { title: '', stem: { en: '', tl: '' }, items: [], same: { en: '', tl: '' }, problem: { en: '', tl: '', opts: [] }, note: '' }
};
