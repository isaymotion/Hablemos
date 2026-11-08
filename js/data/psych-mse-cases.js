/* Admission MSE practice cases: the same fictional patients as the discharge cases, on the day of admission (EMPTY SHELL).
   Hablemos (Spanish). Field names stay `tl`, `f`, `c` for engine compatibility: `tl` = the Spanish text; registers are
   f = usted (formal), c = tú (informal). Shell: no content yet. Once populated, mark this file
   "Draft for review by a native Spanish-speaking clinician" until it has been reviewed.
   Shape: window.PSYCH_MSE_CASES = [ { id, ..., cc: { ask: 'sectionId:index', ans: [spanish, english, who], opts: [[text, correct, why]] },
       domains: { <PSYCH_ADMIT_MSE domain id>: { obs, ans: { askIndex: [spanish, english, who?] }, key, need, ok, wrong, doc, why, quote?, ev? } } } ]
   Example ans entry:  [ '¿Para qué me trajeron aquí?', 'Why did they bring me here?', 'Patient' ] */
window.PSYCH_MSE_CASES = [];
