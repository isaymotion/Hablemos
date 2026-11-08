/* Admission MSE domains, in the order of the hospital's Readmission Form MSE section (EMPTY SHELL).
   Hablemos (Spanish). Field names stay `tl`, `f`, `c` for engine compatibility: `tl` = the Spanish text; registers are
   f = usted (formal), c = tú (informal). Shell: no content yet. Once populated, mark this file
   "Draft for review by a native Spanish-speaking clinician" until it has been reviewed.
   Shape: window.PSYCH_ADMIT_MSE = { form, title, domains: [ { id, label, assess, ask: ['sectionId:index'], picks: [string] } ] }
   Example domain:
     { id: 'mood', label: 'Mood', assess: 'The patient\'s own words.', ask: ['depression:0'], picks: ['Good', 'Fair', 'Poor'] } */
window.PSYCH_ADMIT_MSE = { form: '', title: '', domains: [] };
