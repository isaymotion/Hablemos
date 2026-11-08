# Hablemos — handoff (passes 1 and 2 done)

## 1. Project
- **What:** Hablemos ("let's talk"), the Spanish/English sister of Usap Tayo: for English-speaking clinicians interviewing Spanish-speaking psychiatry patients. Same engine, Spanish content.
- **Repo:** github.com/isaymotion/Hablemos (remote also answers to `isaymotion/hablemos`). `main` = the app; `dev-tools` = tests. GitHub Pages is enabled (a pages-build-deployment run follows every push); live: https://isaymotion.github.io/Hablemos/ (not reachable from the session's network; check it on a phone).
- **Version:** 0.2.0 (2026-11-08), cache `hablemos-0.2.0`, storage key `hablemos.v1` (+ `hablemos.lastBackup`, `hablemos.navmax`), backup file `app: 'hablemos'`. Attribution line exact, as in the other apps (footer, About, README line 7).
- **Design:** terracotta palette (`palette.py 25`), `--night #6E3E1C` / dark `#20150E`; accents are the flag's red (`--accent` light `#AA151B`, `--navy #8E1C21` keeps its engine name) and gold (`--gold #F1BF00`, dark accent `#E3B53F`). Icon = her flag-and-brain image (`icons/`, standard names incl. `icon-maskable-192/512.png`).
- Everything in section 2 of the Usap Tayo handoff (`claude/handoff.md`) applies: fixed rules, commit authorship, append-only phrase indexes, no patient data, subagents for simple work, UI copy style.

## 2. What pass 1 changed vs Usap Tayo
- Removed: `js/conjugate.js`, `js/affixes.js`, `js/grammar-handout.js`, `js/data/{dict-*,verbs,verb-sentences,affixes,lessons,reading,dialogues}.js`, `handouts/`, `tools/import-msetrainer.js`, the v2.2.0 mood migration in core.js, routes `/verbs*`, `/affixes*`, `/lessons/handout`.
- `js/lang.js`: Spanish pack (code `es`, `bcp47 es-MX`, voiceLang `/^es/`, nearVoices pt/it/ca, registers f = usted / c = tú, quiz words, `quiz.done`, `letters` for the dictionary browser, `searchExample`, `point.title 'Señale'`, `variety`, `review`, `interpreter` notices).
- `core.js`: Spanish root lookup (`findRoots`: verb endings, plurals, diminutives, clitics, ie/ue stem changes); `App.CATS` with `idioms` and `falsefriends`; POS adds `nm`/`nf`; voice helpers renamed `App.nativeVoices` / `App.bestVoice` (kind `'native'`); `App.cardFor` handles `d…` and `p:` ids only.
- `views.js`: data-aware Home (no verbs/Panlapi; quick-practice rotation only lists drills with content; scaffold notice while `PSYCH_SECTIONS` is empty); `App.notYet(el, title, what, crumb)` helper; lessons/reading/speaking/placement/dictionary show a "later release" notice when empty; About rewritten (variety, review, interpreter/Title VI, crisis line from `HOSPITAL.crisis`, configured hospital); uiLang `en`/`es`.
- `app.js`: `HAS` flags (dict, lessons, reading, speak, placement) drive BLURBs and the Practice page; NAV keeps Learn/Drill groups (empty pages explain themselves); `document.title` from `APP_META.name`.
- `psych-views.js`: hub tiles appear only when their data exists (`has()` on the module globals); "Related lessons" = lessons with `psych: true`; MSE Trainer link removed; `LANG.variety` in the interview notice.
- Module views (`sud`, `mood`, `withdrawal`, `mse-sheet`, `deesc`, `discharge`, `discharge-practice`, `mse-practice`, `handout`, `point-listen`) start with an empty-data guard that calls `App.notYet`. "Tagalog" in their UI text became `LANG.name`; NCMH hotline became `CRISIS()` (handout.js) from `HOSPITAL.crisis`; MMH form numbers became generic wording. **`sud.js` and the SUD block of `mse-sheet.js` still hold betel/shabu-specific code** (hidden behind the guard): pass 4 rewrites them.
- `point-listen.js`: 0–10 scale words in Spanish (`tools/extra-texts/point-board.txt`).
- `data/hospital.js`: generic (`name`, `shortName`, `address`, `program`, `country`, `forms {deesc, discharge, admission}`, `posts`, `yearLevels`, `crisis {name, number, note}` = 988). `APP_META.institution` reads from it.
- `data/strings.js`: `en` + `es` draft (shell labels; About offers English/Español). The design skill's `check_design.py` expects a `tl` block and FAILS on this; `tests/check_design_es.py` on dev-tools is the same script accepting `es`. Ask her whether to change the skill's rule to "en + one other language".
- Data shells `js/data/*.js`: same globals as Usap Tayo, empty, each header documents the shape with one Spanish example (`REVIEWED: false` on module files). No side effects (nothing pushes into `PSYCH_SECTIONS`).
- Audio: `.github/workflows/audio-pack.yml` "Build Spanish audio pack" (es-MX-DaliaNeural default; Jorge, Paloma, Alonso options), `tools/make_audio_pack.py` (mms alt `facebook/mms-tts-spa`), `tools/collect-texts.js` (loads lang.js; accented-letter filter). First run recorded 13 clips (numbers 0–10, test line, "Sí, doctor."), `audio/last-run.json` committed by the job. Cache `hablemos-audio`.

## 3. Commands
```bash
git clone https://github.com/isaymotion/hablemos /home/claude/hablemos        # add the repo to the session with push access first
git -C /home/claude/hablemos fetch origin refs/heads/dev-tools:refs/remotes/origin/dev-tools
git -C /home/claude/hablemos worktree add /home/claude/hablemos-dev origin/dev-tools -b dev-tools
python3 -m http.server 8767 --directory /home/claude/hablemos                 # run_in_background
python3 /home/claude/hablemos-dev/tests/smoke.py http://localhost:8767/index.html <scratch>/hb   # expect "HB SMOKE OK 34 routes x 2 viewports"
python3 /home/claude/hablemos-dev/tests/check_design_es.py /home/claude/hablemos --browser     # expect PASS; delete _qa/ after looking
python3 <design-skill>/scripts/check_sw.py /home/claude/hablemos               # PASS
node tools/collect-texts.js                                                    # texts.json is committed (the job commits it too)
gh run list -R isaymotion/hablemos -L 3
```
node /home/claude/hablemos-dev/tests/data_check.js /home/claude/hablemos      # expect DATA OK
```
Baseline 2026-11-08 (v0.2.0): data_check prints `{"version":"0.2.0","sections":13,"phrases":193,"answers":178,"flow":11,"mse":14,"texts":565,"audio":565}` and `DATA OK` (WARNs: SHEA_LINKS for sections not yet written); smoke prints `HB SMOKE OK 34 routes x 2 viewports`, `handout pdf bytes ~98000`, `HB CONTENT OK`; check_sw PASS; check_design_es PASS (browser pass included); audio job success (565/565, 84 s).

## 3b. Pass 2 (done 2026-11-08, v0.2.0)
- `js/data/psych-phrases.js`: 12 sections with the same ids, order and phrase counts as Usap Tayo (opening 10, consent 7, cc-hpi 14, depression 23, mania 15, anxiety 9, trauma 8, hallucinations 24, delusions 20, suicide 20, violence 6, deescalation 12), so Usap Tayo's `PSYCH_FLOW` key refs carry over. Every phrase `{ en, f, c, n?, r?, answers? }`; `r` = regional note (platicar, ahorita, enojarse/enfadarse, qué tan seguido, aventarse). Localised content: suicide:8/9 ask about firearms and stockpiled medicines (not pesticides), suicide:19 = 988 (press 2 / text AYUDA), mania:13 names metanfetamina/cocaína, delusions:5 brujería / mal de ojo / "un trabajo", hallucinations:21 posesión, intros mention nervios, ataque de nervios, susto, familismo, respeto, personalismo, Title VI. Gender notes (decaído/decaída) in `n`. All sections `draft: true`.
- `js/data/psych-shea.js`: Shea section (25 phrases, same technique notes as Usap Tayo, Spanish anchors: Navidad, quinceañera, cervezas/caguamas) + `SHEA_LINKS` for all 27 Usap Tayo section ids (chapter links only; Tagalog drill/simulation links dropped). `REVIEWED = false`.
- `js/data/psych-answers.js`: 6 common groups (51) + 13 sections (127) = 178 replies, each `[es, en, note?]`.
- `js/data/psych-flow.js`: 11 flow steps (open → violence) with Spanish-context tips/branches, `PSYCH_FLOW_EXTRA` = deesc, `PSYCH_MSE` 14 domains (refs into mse-* sections are skipped by the handout until those sections exist). `handout.js` date locale → `en-US`.
- Tests on dev-tools: `tests/data_check.js` (en/f/c present, no Tagalog markers po/kayo/ninyo/opo, flow + MSE refs resolve, answers map to sections, versions agree) and `tests/smoke.py` content checks (section quiz has 4 options, point board, listening drill, flashcards, handout PDF builds via `App.handoutDoc` + pdfmake, Shea section).

## 4. Next: pass 3 (core interview b)
1. Remaining sections, appended after `shea-techniques` in `PSYCH_SECTIONS` order? No: keep Usap Tayo's order by inserting the new sections into the ARRAY in `psych-phrases.js` between `deescalation` and the Shea push (section order only affects the hub list; phrase ids are per section, so adding whole sections is safe): `substance` (13; alcohol, cannabis, methamphetamine, cocaine, fentanyl/opioids, vaping, gambling; no betel), `history` (11), `family-hx` (5), `social` (10; migration, work, documentation status asked only when relevant and with the reason), `collateral` (11), `mse-cog` (19; orientation/attention: months backwards, serial 7s, three words; literacy-aware), `mse-abstract` (11; Spanish refranes), `mse-describe` (18), `explain` (12), `meds` (14), `admission` (8), `child` (11), `elderly` (10), `closing` (6). Same counts as Usap Tayo so its flow refs and `PSYCH_MSE` refs resolve. Mirror the English from Usap Tayo's `psych-phrases.js` (extract with the node snippet in the pass-2 chat: run psych-phrases.js in a vm and print `en`/`n`), write Spanish f/c, add `answers` + `PSYCH_ANSWERS.sections` for each.
2. Add the remaining `PSYCH_FLOW` steps (subs, pmh, fhx, social, collat, mse, plan, close) and `PSYCH_FLOW_EXTRA` (meds, admit, child, elder) with Spanish tips; `PSYCH_MSE` refs then resolve.
3. `js/data/psych-mse-sheet.js` (MSE interviewer sheet; US clinic/ward wording, no Mariveles form numbers) and `psych-admit-mse.js` (generic admission MSE domain order; `form: ''`). Spanish handout PDF presets already work; check A4 vs Letter default for the US (handout.js `size` options).
4. Release 0.3.0: changelog, app-meta, sw.js; data_check + smoke + check_design_es + check_sw; push; pull after the audio job.
5. Still open: her review of all Spanish drafts (consider a review workbook like Usap Tayo's, built from `PSYCH_SECTIONS` + `PSYCH_ANSWERS`); the `tl`-rule change in the design skill's `check_design.py`; `SHOW_OTHER_APPS` stays false.

## 4. Next: pass 2 (core interview a)
1. Fill `js/data/psych-phrases.js` sections opening → risk (ids should match Usap Tayo's section ids where the content corresponds, e.g. `hallucinations`, `suicide`, so Home tiles and later cross-links work), each phrase `{ en, f (usted), c (tú), n?, r? (regional variant), answers? }`, section `draft: true`. Then `psych-shea.js` (SHEA_LINKS keyed by section id; keep `SHEA_TRAINER` pointing at her Shea trainer), `psych-flow.js`, `psych-answers.js` replies for those sections.
2. When `PSYCH_SECTIONS` has content the hub, Home, flashcards, point board, listening drill and handout switch on by themselves (all gated on data). Check the handout PDF renders Spanish punctuation (¿ ¡ ñ accents) in pdfmake's Roboto: `fixGlyphs()` only swaps → and ☐ today.
3. Release bookkeeping: changelog entry above 0.1.0, `APP_META.version`, `sw.js` VERSION; add a data_check on dev-tools; smoke + check_design_es + check_sw; commit as Isabella; push main; `git pull --rebase` after the audio job commits.
4. Also pending from pass 1: she enables GitHub Pages; decide on the `tl`-rule change in the design skill; `SHOW_OTHER_APPS` stays false.

## 5. Pitfalls learned
- Enabling or reading Pages through `gh api` is blocked in the session (public-surface rule); she enabled it in the repo settings. The live site is not reachable from the session either (isaymotion.github.io is not an allowed host).
- `check_design.py` runs its browser pass only when the static checks pass, so the `tl` FAIL also hides the browser results; use the dev-tools variant.
- The Usap Tayo audio workflow triggers on `js/data/**`; Hablemos also lists `js/lang.js` (the test line lives there).
- `V.moodEpisode` in `mood.js` was a one-liner; the empty-data guard was inserted after its opening brace, which is fine but easy to miss when editing.
- Usap Tayo's hero, badge, print tokens and `handout.js` NAVY/GOLD were hard-coded navy; all now carry the Hablemos red/gold. Grep for `#1e3265`/`#1C346E` after any CSS copy from Usap Tayo.
- A `git worktree add … origin/dev-tools -b dev-tools` fails once a local `dev-tools` branch exists (the pass-1 orphan branch); use `git worktree add /home/claude/hablemos-dev dev-tools` then `git pull --ff-only` inside it.
- The audio job for ~550 lines took 84 s and committed to `main` within 2 minutes of the push; always `git pull --rebase origin main` before the next push.
- `PSYCH_FLOW[].sections` must name existing sections (the handout builder reads `.phrases` directly); `key`, `PSYCH_MSE.ask/terms` refs may point at unwritten sections (filtered by `ref()`).
- `collect-texts.js` needs the 4th answer element only for non-Spanish tiles (digits); regional notes in `r` are not spoken and not collected.
