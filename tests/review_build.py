#!/usr/bin/env python3
"""Hablemos native-speaker review workbook.
Usage: python3 tests/review_build.py rows.json   (rows.json from tests/review_collect.js)
Writes hablemos-review-2026-11.xlsx in the current directory: a "How to use" sheet, then Phrases, Replies, Tools, Strings.
Rows whose Where or Spanish text matches a line pre-flagged in HANDOFF.md section 3f get a light-yellow fill and a Comment."""
import json
import sys

from openpyxl import Workbook
from openpyxl.styles import Alignment, Font, PatternFill
from openpyxl.utils import get_column_letter

OUT = 'hablemos-review-2026-11.xlsx'
FLAG_COMMENT = 'Pre-flagged by the drafting agent'
# Distinctive substrings from HANDOFF.md 3f ("Spanish lines the drafting agents flagged"), matched case-insensitively.
FLAGS = [
    'le ha quedado mal', 'qué tanto', 'en la que', 'no le hacía falta', 'en {u}', 'meta por día', 'baños calientes',
    'malilla', 'las azules', 'sujet', 'comezón', 'escurre', 'botón', 'enfermero / la doctora', 'mientras esté lastimando',
    'cuando estemos más tranquilos', 'le hace enojar', 'por un momento', 'ingresado', 'susurra', 'bajito', 'cine lleno',
    'el litio necesita',
]
WIDTHS = {'Where': 22, 'Key': 22, 'Section': 24, 'Group/Section': 24, 'English': 55, 'Usted': 55, 'Tú': 55, 'Spanish': 55,
          'Spanish draft': 55, 'Fix': 55, 'Note': 40, 'Regional': 40, 'Comment': 30}
WRAP = {'English', 'Usted', 'Tú', 'Spanish', 'Spanish draft', 'Fix', 'Note', 'Regional', 'Comment'}
SPANISH_COLS = ('Usted', 'Tú', 'Spanish', 'Spanish draft')
YELLOW = PatternFill('solid', start_color='FFF2CC', end_color='FFF2CC')
BOLD = Font(bold=True)
TOP_WRAP = Alignment(wrap_text=True, vertical='top')
TOP = Alignment(vertical='top')


def flagged(row):
    text = ' '.join(str(row.get(k, '')) for k in ('Where',) + SPANISH_COLS).lower()
    return any(f.lower() in text for f in FLAGS)


def write_sheet(wb, name, rows):
    ws = wb.create_sheet(name)
    if not rows:
        ws.append(['(no rows)'])
        return 0
    headers = list(rows[0].keys())
    ws.append(headers)
    for c in ws[1]:
        c.font = BOLD
        c.alignment = TOP
    n_flag = 0
    for r in rows:
        hit = flagged(r)
        if hit:
            r = dict(r)
            r['Comment'] = FLAG_COMMENT if not r.get('Comment') else r['Comment'] + '; ' + FLAG_COMMENT
            n_flag += 1
        ws.append([r.get(h, '') for h in headers])
        for c in ws[ws.max_row]:
            c.alignment = TOP_WRAP if headers[c.column - 1] in WRAP else TOP
            if hit:
                c.fill = YELLOW
    for i, h in enumerate(headers, 1):
        ws.column_dimensions[get_column_letter(i)].width = WIDTHS.get(h, 16)
    ws.freeze_panes = 'A2'
    ws.auto_filter.ref = ws.dimensions
    return n_flag


def main():
    data = json.load(open(sys.argv[1], encoding='utf-8'))
    order = ['Phrases', 'Replies', 'Tools', 'Strings']
    counts = {k: len(data.get(k, [])) for k in order}
    wb = Workbook()
    ws = wb.active
    ws.title = 'How to use'
    ws.column_dimensions['A'].width = 110
    lines = [
        'Hablemos: Spanish review workbook (November 2026)',
        '',
        'Hablemos is a web app that helps English-speaking psychiatry clinicians interview Spanish-speaking patients. It shows '
        'interview questions in English with a Spanish version to say or play, sample patient replies, and clinical tools '
        '(mood checker, substance use screener, withdrawal scales, de-escalation checklist, discharge assessment).',
        '',
        'Every Spanish line in this workbook is a draft written by Claude (an AI). None of it has been checked by a native '
        'speaker yet. We are asking you, as a native Spanish-speaking clinician, to correct it.',
        '',
        'Baseline: US Spanish with a Mexican baseline, as spoken by patients in a US hospital. Plain, respectful clinical '
        'register. Regional alternatives are welcome in the Comment column.',
        '',
        'Columns:',
        '  Where: the key we use to apply your fix back into the app. Please do not edit it.',
        '  English: what the clinician means to say (or what the patient reply means).',
        '  Usted: the formal form, addressing the patient as usted. Tú: the same line addressing the patient as tú. '
        '(Phrases sheet only; other sheets have a single Spanish column.)',
        '  Note / Regional: notes the drafting agent left (clinical context, gender forms, regional words). Read-only context.',
        '  Fix: put the corrected Spanish here. Leave it blank if the line is fine as written. On the Phrases sheet, if both '
        'Usted and Tú need changes, write both in Fix, usted first, separated by " / ".',
        '  Comment: anything else (why you changed it, a regional alternative, "too long", "sounds translated", a question).',
        '',
        'Please do not add any patient details or real cases anywhere in this workbook.',
        '',
        'Rows highlighted in light yellow were already flagged by the drafting agent as doubtful (slang, Mexican-only usage, '
        'stilted phrasing, gender forms). Many lines use a masculine default adjective with a note (e.g. decaído/a); if you '
        'prefer a gender-neutral rewrite, put it in Fix.',
        '',
        'Sheets in this workbook:',
        '  Phrases ({Phrases} rows): every interview and tool phrase, section by section, with Usted and Tú.'.format(**counts),
        '  Replies ({Replies} rows): sample patient replies (general groups and per section).'.format(**counts),
        '  Tools ({Tools} rows): Spanish that lives only inside the clinical tools (scale option labels, templates with '
        '{{s}} {{sa}} {{w}} {{u}} placeholders filled per substance, observe-only scale items, case quotes, behavior labels).'.format(**counts),
        '  Strings ({Strings} rows): the app menu and settings labels in Spanish.'.format(**counts),
        '',
        'Thank you. When you are done, send the file back as is; we read the Fix and Comment columns by the Where key.',
    ]
    for ln in lines:
        ws.append([ln])
    ws['A1'].font = Font(bold=True, size=14)
    for row in ws.iter_rows(min_row=1, max_row=ws.max_row):
        row[0].alignment = Alignment(wrap_text=True, vertical='top')
    flags = {}
    for name in order:
        flags[name] = write_sheet(wb, name, data.get(name, []))
    wb.save(OUT)
    print(OUT, ', '.join('%s %d (%d flagged)' % (k, counts[k], flags[k]) for k in order))


if __name__ == '__main__':
    main()
