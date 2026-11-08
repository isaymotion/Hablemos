/* Interview flow and MSE structure used by the handout generator (EMPTY SHELL).
   Hablemos (Spanish). Field names stay `tl`, `f`, `c` for engine compatibility: `tl` = the Spanish text; registers are
   f = usted (formal), c = tú (informal). Shell: no content yet. Once populated, mark this file
   "Draft for review by a native Spanish-speaking clinician" until it has been reviewed.
   Phrases are referenced as "sectionId:index" into PSYCH_SECTIONS.
   PSYCH_FLOW:       [ { id, title, goal, sections: [sectionId], key: ['sectionId:index'], tip } ]
   PSYCH_FLOW_EXTRA: same shape, optional add-on sections (handout.js concatenates it after PSYCH_FLOW).
   PSYCH_MSE:        [ { domain, assess, ask: ['sectionId:index'], terms: ['sectionId:index'] } ]
   Example PSYCH_FLOW element:
     { id: 'open', title: 'Opening and rapport', goal: 'Introduce yourself and set a respectful tone.', sections: ['opening'],
       key: ['opening:0', 'opening:1'], tip: 'Start with usted; follow the patient\'s lead if they prefer tú.' } */
window.PSYCH_FLOW = [];
window.PSYCH_FLOW_EXTRA = [];
window.PSYCH_MSE = [];
