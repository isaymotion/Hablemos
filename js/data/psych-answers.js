/* Likely patient replies for the point board (#/psych/point) and listening drill (#/psych/listen) (EMPTY SHELL).
   Hablemos (Spanish). Field names stay `tl`, `f`, `c` for engine compatibility: `tl` = the Spanish text; registers are
   f = usted (formal), c = tú (informal). Shell: no content yet. Once populated, mark this file
   "Draft for review by a native Spanish-speaking clinician" until it has been reviewed.
   Shape: window.PSYCH_ANSWERS = { common: [ {id, title, items} ], sections: { <PSYCH_SECTIONS id>: [ item, ... ] } }
   Each item: [spanish, english, clinicalNote?]  (clinicalNote <= 14 words, optional).
   Example (inside common):  { id: 'yesno', title: 'Yes / no', items: [ ['Sí, doctor.', 'Yes, doctor.'], ['No, no he pensado en eso.', "No, I haven't thought of that.", 'Denies ideation.'] ] } */
window.PSYCH_ANSWERS = { common: [], sections: {} };
