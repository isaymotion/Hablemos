/* De-escalation process checklist (EMPTY SHELL).
   Hablemos (Spanish). Field names stay `tl`, `f`, `c` for engine compatibility: `tl` = the Spanish text; registers are
   f = usted (formal), c = tú (informal). Shell: no content yet. Once populated, mark this file
   "Draft for review by a native Spanish-speaking clinician" until it has been reviewed.
   The original also appended phrases to the "deescalation" section of PSYCH_SECTIONS; that side effect is dropped here.
   Shape: window.PSYCH_DEESC = {
     behaviors: [ { en, tl, say } ],               // observed behaviors; say = Spanish line
     steps:     [ { en, tip, say: ['sectionId:index'] } ],   // handout.js/deesc.js read say[0] as a phrase ref
     after:     [ { title, who, points: [string], say: ['sectionId:index'] } ],
     escalation:[ [abbr, role, description] ],
     outcomes:  [ [id, label] ] }
   Example behaviors element:  { en: 'Restlessness', tl: 'Inquietud', say: 'Está inquieto.' }
   Example outcomes element:   ['successful', 'Successful'] */
window.PSYCH_DEESC = { behaviors: [], steps: [], after: [], escalation: [], outcomes: [] };
