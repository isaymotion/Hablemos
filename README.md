# Hablemos dev-tools

Tests for the Hablemos app (branch `main`). Not published by GitHub Pages.

- `tests/data_check.js <app-dir>`: loads the data files as index.html does, checks every phrase has en/f/c and no Tagalog, flow and MSE refs resolve, answers map to real sections, versions agree; prints counts and `DATA OK`.
- `tests/smoke.py <base-url> <out-dir>`: opens every route at 390px (light) and 1280px (dark), fails on JS errors, "Something went wrong" or an unexpected "Page not found", and writes screenshots of the key pages. Expect `HB SMOKE OK`, then the content checks (section quiz, point board, listening drill, handout PDF size) and `HB CONTENT OK`.
- `tests/check_design_es.py <app-dir> --browser`: the design skill's `check_design.py` with one change, so the shell strings may be English + Spanish (`es`) instead of English + Tagalog (`tl`). Use it until the skill's own script accepts a second language other than Tagalog.
