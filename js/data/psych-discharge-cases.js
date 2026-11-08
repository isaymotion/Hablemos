/* Discharge practice cases: fictional patients for the discharge assessment (EMPTY SHELL).
   Hablemos (Spanish). Field names stay `tl`, `f`, `c` for engine compatibility: `tl` = the Spanish text; registers are
   f = usted (formal), c = tú (informal). Shell: no content yet. Once populated, mark this file
   "Draft for review by a native Spanish-speaking clinician" until it has been reviewed.
   Shape: window.PSYCH_DISCHARGE_CASES = [ { id, title, ..., fields: { <PSYCH_DISCHARGE field id>: {
       obs: 'what the learner observes (English)',
       ans: { questionIndex: [spanish, english] },   // patient's answer to field.ask[questionIndex]
       key, need, ok, wrong, doc, why, quote?, ev? } } } ]
   Patients are fictional; doses are teaching examples only.
   Example fields entry:  { obs: 'Calm, cooperative.', ans: { 0: ['Me siento mejor, doctor.', 'I feel better, doctor.'] }, doc: 'Euthymic', why: 'Matches the answer.' } */
window.PSYCH_DISCHARGE_CASES = [];
