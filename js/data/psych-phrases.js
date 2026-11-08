/* Psychiatry interview phrase sections (EMPTY SHELL).
   Hablemos (Spanish). Field names stay `tl`, `f`, `c` for engine compatibility: `tl` = the Spanish text; registers are
   f = usted (formal), c = tú (informal). Shell: no content yet. Once populated, mark this file
   "Draft for review by a native Spanish-speaking clinician" until it has been reviewed.
   Shape: window.PSYCH_SECTIONS = [ { id, group, title, intro, phrases: [ { en, f, c, n?, answers? } ] } ]
   en = English; f = usted wording; c = tú wording; n = optional note; answers = likely patient replies [[spanish, english], ...].
   Other data files may push further sections here (guarded by "if (window.PSYCH_SECTIONS)"); the shells do not.
   Example section:
     { id: 'opening', group: 'Interview', title: 'Opening and rapport', intro: 'Introduce yourself and set a respectful tone.',
       phrases: [ { en: 'How have you been feeling lately?', f: '¿Cómo se ha sentido últimamente?', c: '¿Cómo te has sentido últimamente?',
                    n: 'Open question.', answers: [['Muy cansado, doctor.', 'Very tired, doctor.']] } ] } */
window.PSYCH_SECTIONS = [];
