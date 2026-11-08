/* Interactive case simulations (PSYCH_CASES) and patient-response interpretation drills (PSYCH_INTERP) (EMPTY SHELL).
   Hablemos (Spanish). Field names stay `tl`, `f`, `c` for engine compatibility: `tl` = the Spanish text; registers are
   f = usted (formal), c = tú (informal). Shell: no content yet. Once populated, mark this file
   "Draft for review by a native Spanish-speaking clinician" until it has been reviewed.
   PSYCH_CASES: [ { id, title, level, setting, summary, steps: [ { who, line: [spanish, english], choices: [ { tl, en, score, fb } ] } ] } ]
     score: 2 = best, 1 = acceptable, 0 = avoid. fb = feedback.
   PSYCH_INTERP: [ [spanish patient statement, english, clinical meaning] ]
   Example PSYCH_INTERP element:  ['No tengo ganas de nada.', 'I have no desire to do anything.', 'Anhedonia or low energy. Clarify which.']
   Example PSYCH_CASES step:
     { who: 'Madre', line: ['Doctor, ayúdenos, mi hijo ya no sale de su cuarto.', "Doctor, help us, my son doesn't leave his room anymore."],
       choices: [ { tl: 'Gracias por traerlo. ¿Puedo hablar primero con él a solas?', en: 'Thank you for bringing him. May I speak with him alone first?', score: 2, fb: 'Respectful; plans to see the patient alone.' } ] } */
window.PSYCH_CASES = [];
window.PSYCH_INTERP = [];
