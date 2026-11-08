# Hablemos pass 4 — shared brief for all module agents

Hablemos (repo at /home/claude/hablemos, the app; tests at /home/claude/hablemos-dev/tests) is the Spanish/English sister of Usap Tayo (Tagalog, read-only reference clone at /home/claude/tagalog). Same engine, Spanish content. You are writing ONE clinical-tool data module (and, where the brief says so, its view) by porting the STRUCTURE of Usap Tayo's module and writing NEW Spanish content for the US / Latino context. Never translate Tagalog literally; adapt.

## Hard rules
- Field names stay `tl`, `f`, `c` for engine compatibility: `tl` = the Spanish text (formal, usted) ; in phrase objects `f` = usted form, `c` = tú form. `en` = English meaning. `n` = clinician note (English). `r` = regional variant note (optional).
- Spanish: US / Mexican baseline, clinical but plain. Usted everywhere in `tl`/`f`. Use proper accents and ¿ ¡. Avoid Spain-only wording (vosotros, "coger", "ordenador"); when a word differs by region add `r` (e.g. "platicar / hablar").
- No patient names, ages, record numbers, staff names, hospital names, Philippine form numbers (MMH-…), NCMH, 1553, betel/nganga, shabu, "po/kayo/ninyo/opo" anywhere. Crisis line: read from `window.HOSPITAL.crisis` (988) at run time, never hard-code 1553. Hospital-specific roles (NAOD/NOD/POD) become generic (first responder / charge nurse / physician on duty).
- Every module is a DRAFT: keep `REVIEWED = false` where the module has it; every phrase section you create gets `draft: true`.
- Phrase sections: a module that publishes lines as sections pushes `{ id, group, title, intro, draft: true, phrases: [{ en, f, c, n? }] }` onto `window.PSYCH_SECTIONS` (guard `if (window.PSYCH_SECTIONS)`), exactly like Usap Tayo's module does. Phrases need BOTH `f` and `c` (the data check fails otherwise): when the module's lines only have `tl`, set `f: tl` and derive `c` as the tú form (write it; do not just copy f). Keep the same section ids as Usap Tayo unless the brief says otherwise. APPEND only; never insert in the middle of an existing section.
- Refs: `'sectionId:index'` into PSYCH_SECTIONS. Hablemos sections have the SAME ids, order and phrase counts as Usap Tayo (27 sections), so Usap Tayo's refs carry over, but VERIFY each ref you keep by printing the phrase's `en` (node snippet below) and checking it matches the criterion.
- Clinician-facing UI text (headings, notes, teaching reference cards) is English unless the brief says otherwise (the MSE sheet's titles/notes are Spanish).
- Doses and clinical facts: carry over Usap Tayo's English teaching text where it is generic; adapt anything Philippine-specific. Don't invent new doses beyond what the brief gives you.
- Write plain, active English in UI copy; no em-dash asides.
- Do NOT touch index.html, sw.js, data/changelog.js, data/app-meta.js, README, tests, or any file outside your assignment. Do NOT commit or push. Do not run the audio tools.

## How to read Usap Tayo's module
```bash
cd /home/claude/hablemos && node -e "
global.window=global; require('./js/data/psych-phrases.js');
const s=PSYCH_SECTIONS.find(x=>x.id==='depression'); s.phrases.forEach((p,i)=>console.log(i,p.en,'|',p.f));"
```
Read Usap Tayo's file with the Read tool (e.g. /home/claude/tagalog/js/data/psych-sud.js). The Hablemos shell (e.g. /home/claude/hablemos/js/data/psych-sud.js) documents the exact shape the view reads; replace the shell's contents entirely, keeping a header comment that says what the file is and "STATUS: DRAFT FOR REVIEW by a native Spanish-speaking clinician".

## Checks you must run before finishing
```bash
cd /home/claude/hablemos
node /home/claude/hablemos-dev/tests/data_check.js .      # must end with DATA OK (WARN lines are fine)
node -e "global.window=global;['js/data/psych-phrases.js','js/data/psych-shea.js','js/data/psych-cases.js','js/data/psych-flow.js','js/data/psych-deesc.js','js/data/psych-discharge.js','js/data/psych-discharge-cases.js','js/data/psych-admit-mse.js','js/data/psych-mse-cases.js','js/data/psych-mse-sheet.js','js/data/psych-sud.js','js/data/psych-mood.js','js/data/psych-withdrawal.js','js/data/psych-answers.js'].forEach(f=>require('./'+f));console.log('loads OK', PSYCH_SECTIONS.length,'sections')"
grep -nE "\b(po|kayo|ninyo|opo|nganga|shabu|betel|MMH-|NCMH|1553|NAOD|NOD|POD)\b" <your files>   # must print nothing
```
If you changed a view (js/*.js), also load the page in the browser: a server is running at http://localhost:8767/index.html (if not: `python3 -m http.server 8767 --directory /home/claude/hablemos` with run_in_background). Use Python Playwright (installed) to open `http://localhost:8767/index.html#/psych/<route>` at 390x844, check `page.evaluate('document.querySelector("h1").textContent')`, click through each tab/button you added, and assert no console errors (`page.on('console', ...)` for type error, and `page.on('pageerror', ...)`). Take one screenshot to /tmp/<module>.png and look at it with the Read tool.

## Report back
A short summary: files changed, counts (lines, sections, phrases), any ref you could not resolve, anything you were unsure about clinically or linguistically (list the Spanish lines you are least sure of). No file dumps.
