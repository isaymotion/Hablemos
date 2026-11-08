/* Discharge summary assessment, field by field (EMPTY SHELL).
   Hablemos (Spanish). Field names stay `tl`, `f`, `c` for engine compatibility: `tl` = the Spanish text; registers are
   f = usted (formal), c = tú (informal). Shell: no content yet. Once populated, mark this file
   "Draft for review by a native Spanish-speaking clinician" until it has been reviewed.
   The original also created a "discharge" section in PSYCH_SECTIONS and an entry in PSYCH_FLOW_EXTRA; those side
   effects are dropped here (nothing in the engine requires them while fields is empty).
   Shape: window.PSYCH_DISCHARGE = { form, title, fields: [ { id, group, label, kind, assess, ask: [ {en,f,c,n?} ], refs: ['discharge:index'], picks: [string] } ] }
   kind: observe | ask | explain | sign.  refs index into the (not yet created) "discharge" phrase section.
   Example field:
     { id: 'mood', group: 'Discharge MSE', label: 'Mood', kind: 'ask', assess: 'Ask in the patient\'s own words.',
       ask: [ { en: 'How is your mood today?', f: '¿Cómo está su ánimo hoy?', c: '¿Cómo está tu ánimo hoy?' } ], refs: [], picks: ['Euthymic', 'Sad', 'Anxious'] } */
window.PSYCH_DISCHARGE = { form: '', title: '', fields: [] };
