#!/usr/bin/env python3
"""Check that every pre-flag string/id of review_flags_b.py matches at least one row of the workbook (same text columns and
rules as review_build.flagged). Usage: python3 tests/review_flagcheck.py rows.json [lists...]  (default: FLAGS_3O_PSYCH
FLAGS_3O_LESSONS ID_FLAGS_3O; any of FLAGS_3K FLAGS_3L FLAGS_3M may be named too). Prints the strings that match nothing and
the ones that match more than 8 rows."""
import json
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import review_build as B  # noqa: E402
import review_flags_b as F  # noqa: E402

data = {k: v for k, v in json.load(open(sys.argv[1], encoding='utf-8')).items() if not k.startswith('_')}
names = sys.argv[2:] or ['FLAGS_3O_PSYCH', 'FLAGS_3O_LESSONS', 'ID_FLAGS_3O']
rows = []
for sheet, lst in data.items():
    if sheet == 'Dictionary':
        continue
    for r in lst:
        st, in_first = B.status(sheet, r)
        if in_first:
            continue  # the new lists are applied to rows that were not in the first workbook only
        rows.append((sheet, ' '.join(str(r.get(k, '')) for k in B.FLAG_COLS).lower(), str(r.get('Where', '')).lower()))
bad = 0
for name in names:
    for f in sorted(getattr(F, name)) if name.startswith('ID_') else getattr(F, name):
        if name.startswith('ID_'):
            hits = [s for s, t, w in rows if f in (w.split(':', 1)[-1], w.split(':', 1)[-1].split(':')[0])]
        else:
            hits = [s for s, t, w in rows if f.lower() in t]
        if not hits:
            bad += 1
            print('NO MATCH  %s: %s' % (name, f))
        elif len(hits) > 8:
            print('broad (%d rows)  %s: %s' % (len(hits), name, f))
print('%d unmatched' % bad)
