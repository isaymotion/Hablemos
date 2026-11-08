/* MSE interviewer sheet: the multi-page Spanish MSE question sheet for the OPD and wards (EMPTY SHELL).
   Hablemos (Spanish). Field names stay `tl`, `f`, `c` for engine compatibility: `tl` = the Spanish text; registers are
   f = usted (formal), c = tú (informal). Shell: no content yet. Once populated, mark this file
   "Draft for review by a native Spanish-speaking clinician" until it has been reviewed.
   Shape: window.PSYCH_MSE_SHEET = { id, title, subtitle, reminder, disclaimer,
     pages: [ [ [sectionId, ...] ] ],     // pages -> columns -> section ids
     sections: [ { id, title, en, ut, blocks: [ { h?, items: [ item ] } ], note? } ] }
   item is either { r: 'sectionId:index' } (an existing phrase) or { tl, en, b?, ut? } written for the sheet (b = margin badge).
   Example item:  { tl: 'Buenos días. Soy el doctor ____, uno de los médicos aquí.', en: "Good morning. I'm Dr. ____, one of the doctors here.", ut: true } */
window.PSYCH_MSE_SHEET = { id: 'mse-sheet', title: '', subtitle: '', reminder: '', disclaimer: '', pages: [], sections: [] };
