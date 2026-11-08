/* Substance use disorder screening and brief intervention in Spanish (EMPTY SHELL).
   Hablemos (Spanish). Field names stay `tl`, `f`, `c` for engine compatibility: `tl` = the Spanish text; registers are
   f = usted (formal), c = tú (informal). Shell: no content yet. Once populated, mark this file
   "Draft for review by a native Spanish-speaking clinician" until it has been reviewed.
   The original appended several sections (sud-*, mi) to PSYCH_SECTIONS; that side effect is dropped here.
   Lines are templates: {s} = substance word, {w} = withdrawal symptoms, {u} = unit; filled by fill(text, substance).
   Shape: window.PSYCH_SUD = { substances: [sub], criteria: [crit], gambling: [crit], groups: { control, social, risky, pharm, gamble },
     screens: { <substanceId>: { title, items: [line] } }, open: [line], remission: [line], mi: [ { id, title, lines: [line] } ],
     nurse: { notice, steps: [ { title, lines: [line] } ], escalate },
     criteriaFor(sub), severity(n), severityFor(sub, n), rule(...), fill(text, sub) }
   line = { tl, en, n? }.  sub = { id, label, s, en, unit, dsm, cls, codes: {mild, modsev, remMild, remModsev}, w, wen, ask: [line], psychoed: [line] }.
   Example line:  { tl: '¿Ha tenido ganas fuertes de consumir {s}?', en: 'Have you had strong cravings for {s}?' }
   The functions below are inert placeholders so the view code does not throw while the data is empty. */
window.PSYCH_SUD = {
  substances: [], criteria: [], gambling: [],
  groups: { control: '', social: '', risky: '', pharm: '', gamble: '' },
  screens: {}, open: [], remission: [], mi: [],
  nurse: { notice: '', steps: [], escalate: '' },
  criteriaFor: function () { return []; },
  severity: function () { return ''; },
  severityFor: function () { return ''; },
  rule: function () { return ''; },
  fill: function (t) { return t || ''; }
};
