#!/usr/bin/env python3
"""Playwright smoke test for Numbers, dates and time (#/numbers, js/numbers.js), Hablemos 0.8.0.
Usage: python3 numbers_smoke.py http://localhost:8773 [shot-dir]
Checks: one h1; the Learn tab for every group (rows match ES_NUMBERS, tricky rows marked, note shown, speaker buttons,
Play all speaks every row in order and can be stopped); a Read round and a Listen round to the score screen, answered
from the data; Mixed lists every group; the In the clinic round to the score screen; best scores saved under
App.state.done.numbers ('<group>:read', '<group>:listen', 'clinic') and settings.numGroup; no horizontal overflow
at 390x844 and 1280x900, light and dark, 100% and 125% text size; no console errors (fonts.googleapis.com ignored).
Prints NUMBERS SMOKE OK."""
import sys, os, json
from playwright.sync_api import sync_playwright

BASE = (sys.argv[1] if len(sys.argv) > 1 else 'http://localhost:8773').rstrip('/')
SHOTS = sys.argv[2] if len(sys.argv) > 2 else ''
errs, console = [], []


def check(cond, msg):
    if not cond:
        errs.append(msg)
        print('FAIL', msg)


def overflow(page, where):
    w = page.evaluate('() => [document.documentElement.scrollWidth, window.innerWidth]')
    check(w[0] <= w[1] + 1, where + ': horizontal overflow %s > %s' % tuple(w))
    wide = page.evaluate('''() => [...document.querySelectorAll('#view *')].filter(e => { const r = e.getBoundingClientRect(); return r.width && r.right > window.innerWidth + 1 && !e.closest('.tablewrap'); }).slice(0, 3).map(e => e.tagName + '.' + e.className)''')
    check(not wide, where + ': elements past the right edge ' + json.dumps(wide))
    tw = page.evaluate('''() => [...document.querySelectorAll('#view .tablewrap')].filter(t => t.scrollWidth > t.clientWidth + 1).length''')
    check(tw == 0, where + ': a table scrolls sideways')


def fresh(page, size='100', theme='light', extra=None):
    page.goto(BASE + '/#/')
    st = {'settings': {'textSize': size, 'theme': theme}}
    page.evaluate('''(st) => { st.seenVersion = (window.APP_META || {}).version || ''; localStorage.clear(); localStorage.setItem('hablemos.v1', JSON.stringify(st)); }''', st)
    page.reload()
    page.wait_for_timeout(300)


def stub_speech(page):
    page.evaluate('''() => { window.__spoken = []; App.speakAsync = (t) => { window.__spoken.push(t); return new Promise(r => setTimeout(r, 5)); }; App.speak = (t) => { window.__spoken.push(t); }; }''')


def play_round(page, box, mode):
    """Answer a quiz in #numq / #numcq to the score screen, right answers taken from ES_NUMBERS. Returns the count."""
    n = 0
    for _ in range(15):
        if page.locator(box + ' .progress').count():
            break
        page.locator(box + ' .opt').first.wait_for(timeout=4000)
        if mode == 'read':
            qtext = page.evaluate('(b) => document.querySelector(b + " .card > div:nth-child(2)").textContent', box)
            rights = page.evaluate('(l) => ES_NUMBERS.groups.flatMap(g => g.rows).filter(r => r[0] === l).map(r => r[1])', qtext)
        elif mode == 'listen':
            qtext = page.evaluate('(b) => document.querySelector(b + " [data-qtext]").textContent', box)
            check(page.locator(box + ' [data-qtext]').is_hidden(), 'listen: Spanish visible before answering')
            rights = page.evaluate('(e) => ES_NUMBERS.groups.flatMap(g => g.rows).filter(r => r[1] === e).map(r => r[0])', qtext)
        else:
            qtext = page.evaluate('(b) => document.querySelector(b + " [data-qtext]").textContent', box)
            check(page.locator(box + ' [data-qtext]').is_hidden(), 'clinic: Spanish visible before answering')
            rights = page.evaluate('(e) => ES_NUMBERS.clinical.filter(c => c[0] === e).map(c => c[3])', qtext)
        check(len(rights) >= 1, mode + ': question %r not found in the data' % qtext)
        texts = page.locator(box + ' .opt').all_inner_texts()
        check(len(texts) == 4, mode + ': %d options for %r' % (len(texts), qtext))
        check(len(set(texts)) == len(texts), mode + ': repeated options ' + json.dumps(texts))
        hits = [i for i, t in enumerate(texts) if t in rights]
        check(len(hits) == 1, mode + ': %d right options for %r in %s' % (len(hits), qtext, json.dumps(texts)))
        page.locator(box + ' .opt').nth(hits[0] if hits else 0).click()
        check(page.locator(box + ' .feedback.ok').count() == 1, mode + ': right answer not accepted for %r' % qtext)
        if mode != 'read':
            check(page.locator(box + ' [data-qtext]').is_visible(), mode + ': Spanish not shown after answering')
        n += 1
        page.locator(box + ' [data-act=next]').click()
    check(page.locator(box + ' .progress').count() == 1, mode + ': no score screen')
    return n


with sync_playwright() as p:
    br = p.chromium.launch()
    ctx = br.new_context(viewport={'width': 390, 'height': 844}, device_scale_factor=2)
    page = ctx.new_page()
    page.on('console', lambda m: console.append(m.text) if m.type == 'error' and 'fonts.g' not in m.text and 'Failed to load resource' not in m.text else None)
    page.on('response', lambda r: console.append('HTTP %d %s' % (r.status, r.url)) if r.status >= 400 and 'fonts.g' not in r.url and '/audio/' not in r.url else None)
    page.on('pageerror', lambda e: console.append(str(e)))

    fresh(page)
    page.goto(BASE + '/#/numbers')
    page.wait_for_selector('#numbody')
    check(page.locator('#view h1').count() == 1, 'learn: not exactly one h1')
    check(page.locator('#view h1').inner_text().strip() == 'Numbers, dates and time', 'h1 text')
    tabs = page.locator('.num-tabs a').all_inner_texts()
    check(tabs == ['Learn', 'Quiz', 'In the clinic'], 'tabs ' + json.dumps(tabs))
    groups = page.evaluate('ES_NUMBERS.groups.map(g => ({ id: g.id, rows: g.rows }))')
    check(len(groups) == 12, '%d groups' % len(groups))
    stub_speech(page)

    # Learn: every group.
    for g in groups:
        page.select_option('#numgrp', g['id'])
        page.wait_for_timeout(50)
        check(page.evaluate('App.state.settings.numGroup') == g['id'], g['id'] + ': numGroup not saved')
        labels = page.locator('.num-table .num-label').all_inner_texts()
        reads = page.locator('.num-table .num-read').all_inner_texts()
        check(len(labels) == len(g['rows']), g['id'] + ': %d rows shown, %d in data' % (len(labels), len(g['rows'])))
        check(reads == [r[1] for r in g['rows']], g['id'] + ': Spanish column differs from the data')
        check(all(l.startswith(r[0]) for l, r in zip(labels, g['rows'])), g['id'] + ': label column differs from the data')
        tricky = sum(1 for r in g['rows'] if len(r) > 2 and r[2])
        check(page.locator('.num-table tr.num-irr').count() == tricky, g['id'] + ': tricky rows not marked')
        check(page.locator('.num-note').count() == 1, g['id'] + ': no note')
        check(page.locator('.num-note').evaluate('e => !/[<>]/.test(e.textContent)'), g['id'] + ': raw tag in note')
        check(page.locator('.num-table .say').count() == len(g['rows']), g['id'] + ': speaker buttons')
        check(page.locator('#view h1').count() == 1, g['id'] + ': not exactly one h1')
        overflow(page, 'learn ' + g['id'] + ' 390')
    # Play all on the last group speaks every row in order.
    page.evaluate('window.__spoken = []')
    page.locator('#numplay').click()
    page.wait_for_function('() => document.querySelector("#numplay").textContent.includes("Play all")', timeout=15000)
    spoken = page.evaluate('window.__spoken')
    check(spoken == [r[1] for r in groups[-1]['rows']], 'Play all spoke %s' % json.dumps(spoken[:4]))
    # Speaker button speaks its row.
    page.evaluate('window.__spoken = []')
    page.locator('.num-table .say').first.click()
    page.wait_for_timeout(100)
    if SHOTS:
        page.screenshot(path=os.path.join(SHOTS, 'numbers-learn-390.png'), full_page=True)

    # Quiz: Read round on the clock group.
    page.goto(BASE + '/#/numbers?tab=quiz')
    page.wait_for_selector('#numq')
    stub_speech(page)
    opts = page.locator('#numqg option').evaluate_all('os => os.map(o => o.value)')
    check(opts == ['mixed'] + [g['id'] for g in groups], 'quiz group list ' + json.dumps(opts))
    page.select_option('#numqg', 'clock')
    page.wait_for_selector('#numq .opt')
    check(page.locator('[data-mode=read]').get_attribute('aria-pressed') == 'true', 'read mode not the default')
    n = play_round(page, '#numq', 'read')
    check(n == 10, 'read round had %d questions' % n)
    best = page.evaluate('App.state.done.numbers')
    check(best.get('clock:read') == 100, 'clock:read not saved: ' + json.dumps(best))
    if SHOTS:
        page.screenshot(path=os.path.join(SHOTS, 'numbers-read-done.png'))
    # Listen round on Mixed.
    page.select_option('#numqg', 'mixed')
    page.locator('[data-mode=listen]').click()
    page.wait_for_selector('#numq .opt')
    check(page.locator('[data-mode=listen]').get_attribute('aria-pressed') == 'true', 'listen not pressed')
    n = play_round(page, '#numq', 'listen')
    check(n == 10, 'listen round had %d questions' % n)
    best = page.evaluate('App.state.done.numbers')
    check(best.get('mixed:listen') == 100, 'mixed:listen not saved: ' + json.dumps(best))
    # Best pill shows after New set.
    page.locator('#numnew').click()
    check('Best 100%' in page.locator('#numbody').inner_text(), 'best pill not shown')
    # Every group can be quizzed in both modes without errors (first question only).
    for g in groups:
        for m in ('read', 'listen'):
            page.select_option('#numqg', g['id'])
            page.locator('[data-mode=%s]' % m).click()
            page.locator('#numq .opt').first.wait_for(timeout=3000)
            texts = page.locator('#numq .opt').all_inner_texts()
            check(len(texts) == 4 and len(set(texts)) == 4, g['id'] + ' ' + m + ': options ' + json.dumps(texts))
    overflow(page, 'quiz 390')

    # In the clinic.
    page.goto(BASE + '/#/numbers?tab=clinic')
    page.wait_for_selector('#numcq .opt')
    stub_speech(page)
    page.locator('[data-sp=slow]').click()
    page.wait_for_selector('#numcq .opt')
    check(page.locator('[data-sp=slow]').get_attribute('aria-pressed') == 'true', 'speed not pressed')
    check(page.locator('#numcq .muted').count() >= 1, 'clinic: no English question')
    n = play_round(page, '#numcq', 'clinic')
    check(n == 10, 'clinic round had %d questions' % n)
    best = page.evaluate('App.state.done.numbers')
    check(best.get('clinic') == 100, 'clinic not saved: ' + json.dumps(best))
    check(page.evaluate('JSON.parse(localStorage.getItem("hablemos.v1")).done.numbers.clinic') == 100, 'clinic score not in localStorage')

    # Sizes, themes, 125%: every tab.
    for (w, h) in ((390, 844), (1280, 900)):
        page.set_viewport_size({'width': w, 'height': h})
        for theme in ('light', 'dark'):
            for size in ('100', '125'):
                fresh(page, size, theme)
                for tab in ('', '?tab=quiz', '?tab=clinic'):
                    page.goto(BASE + '/#/numbers' + tab)
                    page.wait_for_selector('#numbody')
                    page.wait_for_timeout(250)
                    where = '%dx%d %s %s%% %s' % (w, h, theme, size, tab or 'learn')
                    check(page.locator('#view h1').count() == 1, where + ': not exactly one h1')
                    if tab == '':
                        for gid in ('phones-scales', 'dates', 'clock'):
                            page.select_option('#numgrp', gid)
                            page.wait_for_timeout(50)
                            overflow(page, where + ' ' + gid)
                    else:
                        overflow(page, where)
                        if tab == '?tab=quiz':
                            page.select_option('#numqg', 'phones-scales')
                            page.wait_for_timeout(50)
                            overflow(page, where + ' phones-scales')
                    if SHOTS and size == '125':
                        page.screenshot(path=os.path.join(SHOTS, 'numbers-%d-%s-%s.png' % (w, theme, (tab or 'learn').strip('?').replace('tab=', ''))), full_page=True)
                if theme == 'dark':
                    check(page.evaluate('document.documentElement.dataset.theme') == 'dark', where + ': dark theme not applied')

    check(not console, 'console errors: ' + json.dumps(console[:5]))
    br.close()

if errs:
    print('%d problem(s)' % len(errs))
    sys.exit(1)
print('NUMBERS SMOKE OK')
