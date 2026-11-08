/* Alcohol and cannabis withdrawal, and the agitated patient: bedside reference with Spanish patient-facing lines (EMPTY SHELL).
   Hablemos (Spanish). Field names stay `tl`, `f`, `c` for engine compatibility: `tl` = the Spanish text; registers are
   f = usted (formal), c = tú (informal). Shell: no content yet. Once populated, mark this file
   "Draft for review by a native Spanish-speaking clinician" until it has been reviewed.
   The original appended wd-alcohol / wd-cannabis / wd-agitation sections to PSYCH_SECTIONS; that side effect is dropped here.
   Shape: window.PSYCH_WD = {
     REVIEWED (bool), draftNotice, source,
     ALC_ASK, ALC_EXPLAIN, CAN_ASK, CAN_CRIT, CAN_CD, CHS_ASK, CAN_EXPLAIN, AGIT_LINES, SPECIAL_ASK: [ { tl, en, n? } ],
     PAWSS: { threshold, items: [ {tl,en} ], band(score), note },  CIWA: { items: [ {k,..} ], band(score), note },
     NURSE: { notice, steps: [ { title, lines } ], escalate },
     ALC_REF, CAN_REF, AGIT_REF: { <key>: { h, p?: [html], t?: {head, rows}, l?: [html], pearl? } },   // English teaching reference cards
     SPECIAL: [], CASES: [], QUICK: { alcohol: [], cannabis: [], agitation: [] } }
   Example line:  { tl: '¿Cuándo fue su último trago?', en: 'When was your last drink?', n: 'Timing predicts withdrawal onset.' } */
window.PSYCH_WD = {
  REVIEWED: false, draftNotice: '', source: '',
  ALC_ASK: [], ALC_EXPLAIN: [], CAN_ASK: [], CAN_CRIT: [], CAN_CD: [], CHS_ASK: [], CAN_EXPLAIN: [], AGIT_LINES: [], SPECIAL_ASK: [],
  PAWSS: { threshold: { en: '', tl: '' }, items: [], band: function () { return ''; }, note: '' },
  CIWA: { items: [], band: function () { return ''; }, note: '' },
  NURSE: { notice: '', steps: [], escalate: '' },
  ALC_REF: {}, CAN_REF: {}, AGIT_REF: {},
  SPECIAL: [], CASES: [], QUICK: { alcohol: [], cannabis: [], agitation: [] }
};
