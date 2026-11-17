#!/usr/bin/env python3
"""Playwright smoke test for #/transform (Transform the sentence) and #/build (Sentence builder), Hablemos 0.7.0.
Usage: python3 drills_smoke.py http://localhost:8773/ [screenshot-dir]
Plays a choose round and a type round of the transform drill to the score screen (a right typed answer using the accent
bar, an answer without accents = "Almost", a wrong one), a mistakes round, a builder round solved from the data (one
built wrong on purpose, one placed with the keyboard), a builder mistakes round, then checks 390 px at 125 % text and
1280 px, light and dark, for horizontal overflow. Prints DRILLS OK or fails with an AssertionError."""
import sys, unicodedata
from playwright.sync_api import sync_playwright

BASE = (sys.argv[1] if len(sys.argv) > 1 else 'http://localhost:8773/').rstrip('/') + '/'
SHOTS = sys.argv[2] if len(sys.argv) > 2 else None
errors = []

def bare(s):
    return ''.join(c for c in unicodedata.normalize('NFD', s) if unicodedata.category(c) != 'Mn')

def setup(page, **settings):
    page.evaluate("""(s) => { Object.assign(App.state.settings, s); App.save(); }""", settings)

def go(page, route, **settings):
    page.goto(BASE + 'index.html#/')
    page.wait_for_function('window.App && App.state')
    setup(page, **settings)
    page.goto(BASE + 'index.html#' + route)
    page.reload()
    page.wait_for_selector('h1')

def no_overflow(page, where):
    w = page.evaluate('[document.documentElement.scrollWidth, document.documentElement.clientWidth]')
    assert w[0] <= w[1] + 1, f'{where}: horizontal overflow {w}'
    bad = page.evaluate("""() => [...document.querySelectorAll('#view *')].filter((e) => { const r = e.getBoundingClientRect(); return r.width && r.right > document.documentElement.clientWidth + 1; }).slice(0, 3).map((e) => e.className || e.tagName)""")
    assert not bad, f'{where}: elements past the right edge {bad}'

def item(page, tid):
    return page.evaluate('(id) => GRAMMAR_TRANSFORM.find((x) => x.id === id)', tid)

def shot(page, name):
    if SHOTS:
        page.screenshot(path=f'{SHOTS}/{name}.png', full_page=False)

def transform_choose(page, wrong_first=True, start=True):
    if start:
        page.click('#tfgo')
    n = 0
    while not page.query_selector('[data-tfscore]'):
        page.wait_for_selector('[data-tid]')
        x = item(page, page.get_attribute('[data-tid]', 'data-tid'))
        opts = page.query_selector_all('.opt')
        assert len(opts) == 4, 'choose mode needs 4 options'
        texts = [o.inner_text().split('\n')[-1].strip() for o in opts]
        texts = [t[1:].strip() if t[:1].isdigit() else t for t in texts]
        assert x['to'] in texts, f"model answer missing: {x['to']} not in {texts}"
        target = x['wrong'][0] if (n == 0 and wrong_first) else x['to']
        k = texts.index(target)
        if n == 1:
            page.keyboard.press(str(k + 1))          # keys 1–4
        else:
            opts[k].click()
        page.wait_for_selector('.tf-fb')
        assert page.query_selector('.feedback.ok' if target == x['to'] else '.feedback.no'), 'wrong feedback'
        if n == 0:
            shot(page, 'transform-choose')
        page.click('#tfnext')
        n += 1
    return n

def type_into(page, text):
    page.fill('#tftype', text)

def transform_type(page, flags, start='#tfgo'):
    page.click(start)
    n = 0
    saw_almost, used_bar = flags.get('almost', False), flags.get('bar', False)
    while not page.query_selector('[data-tfscore]'):
        page.wait_for_selector('#tftype')
        x = item(page, page.get_attribute('[data-tid]', 'data-tid'))
        to = x['to']
        acc = [i for i, c in enumerate(to) if c in 'áéíóúñü¿¡']
        if not used_bar and acc:
            i = acc[0]
            page.fill('#tftype', '')
            page.click('#tftype')
            page.keyboard.type(to[:i])
            page.click(f'.tf-acc[data-ch="{to[i]}"]')
            page.keyboard.type(to[i + 1:])
            assert page.input_value('#tftype') == to, 'accent bar did not insert at the cursor'
            page.keyboard.press('Enter')
            page.wait_for_selector('.tf-fb')
            assert page.query_selector('.feedback.ok'), 'typed model answer not accepted'
            shot(page, 'transform-type-right')
            used_bar = True
        elif not saw_almost and bare(to) != to and any(c in 'áéíóúñü' for c in to):
            type_into(page, bare(to).lower().rstrip('.?!'))
            page.click('#tfcheck')
            page.wait_for_selector('.tf-fb')
            assert 'Almost: check the accents' in page.inner_text('.tf-fb'), 'accent-less answer not marked Almost'
            assert page.query_selector('.feedback.mid'), 'Almost should use the kind (mid) style'
            shot(page, 'transform-type-almost')
            saw_almost = True
        elif n % 3 == 2:
            type_into(page, 'Esto no es la respuesta.')
            page.click('#tfcheck')
            page.wait_for_selector('.tf-fb')
            assert page.query_selector('.feedback.no') and page.query_selector('.tf-hint'), 'wrong typed answer needs the hint'
        else:
            alts = [to] + x['alt']
            type_into(page, '  ' + alts[-1].upper().replace('¿', '').replace(',', '') + '  ')
            page.click('#tfcheck')
            page.wait_for_selector('.tf-fb')
            assert page.query_selector('.feedback.ok'), 'case / punctuation / alt not accepted: ' + alts[-1]
        page.click('#tfnext')
        n += 1
    flags['almost'], flags['bar'] = saw_almost, used_bar
    return n

def build_round(page, wrong_first=True, keyboard=True, start=True):
    if start:
        page.click('#bdgo')
    n = 0
    while not page.query_selector('[data-bdscore]'):
        page.wait_for_selector('[data-bid]')
        bid = page.get_attribute('[data-bid]', 'data-bid')
        s = page.evaluate('(id) => App.buildSentences().find((x) => x.id === id)', bid)
        tiles = s['tiles']
        order = list(reversed(tiles)) if (n == 0 and wrong_first and tiles != list(reversed(tiles))) else tiles
        for j, t in enumerate(order):
            btns = page.query_selector_all('#bdtray .bd-tile')
            k = [b.inner_text() for b in btns].index(t)
            if keyboard and n == 1 and j == 0:
                btns[k].focus(); page.keyboard.press('Enter')
            else:
                btns[k].click()
        line = page.inner_text('#bdline').replace('\n', ' ')
        assert line[:1] == line[:1].upper() or line[:1] in '¿¡', 'built line not capitalised'
        if n == 0:
            shot(page, 'build-built')
        page.click('#bdcheck')
        page.wait_for_selector('.bd-fb')
        want = '.feedback.no' if order != tiles else '.feedback.ok'
        assert page.query_selector(want) or (order != tiles and page.query_selector('.feedback.mid')), f'build feedback for {s["es"]}'
        if n == 0:
            shot(page, 'build-feedback')
        page.click('#bdnext')
        n += 1
    return n

with sync_playwright() as p:
    br = p.chromium.launch()
    ctx = br.new_context(viewport={'width': 390, 'height': 844}, device_scale_factor=2)
    page = ctx.new_page()
    page.on('console', lambda m: m.type == 'error' and 'fonts.g' not in (m.text + str(m.location.get('url', ''))) and errors.append(m.text + ' @ ' + str(m.location.get('url', ''))))
    page.on('pageerror', lambda e: errors.append(str(e)))

    # Data sanity in the page.
    go(page, '/transform', transformMode='choose', transformCount=10, transformLv='A1', transformType='all', textSize='100', theme='light')
    assert page.evaluate('GRAMMAR_TRANSFORM.length') >= 160
    assert page.evaluate("typeof App.accentBar") == 'function'
    assert page.inner_text('h1') == 'Transform the sentence'
    shot(page, 'transform-setup')
    # Choose round (one wrong on purpose, one by key).
    assert transform_choose(page) == 10
    assert '9 / 10' in page.inner_text('[data-tfscore]'), page.inner_text('[data-tfscore]')
    assert page.evaluate("App.state.done.transform['A1:choose']") == 90
    shot(page, 'transform-score')
    # Mistakes round (choose).
    page.click('#tfmiss2')
    transform_choose(page, wrong_first=False, start=False)
    assert 'Mistakes round' in page.inner_text('[data-tfscore]')
    # Type round at A2 (accents are common there).
    go(page, '/transform', transformMode='type', transformLv='A2', transformCount=10)
    flags = {}
    transform_type(page, flags)
    for _ in range(4):
        if flags.get('almost') and flags.get('bar'): break
        transform_type(page, flags, '#tfagain')
    assert flags.get('almost') and flags.get('bar'), 'type rounds did not cover the accent bar and the Almost case'
    assert isinstance(page.evaluate("App.state.done.transform['A2:type']"), int)
    assert page.evaluate("App.state.done.transform.miss.length") >= 1
    # Type-mode mistakes round reaches the score screen.
    page.click('#tfmiss2')
    while not page.query_selector('[data-tfscore]'):
        page.wait_for_selector('#tftype')
        x = item(page, page.get_attribute('[data-tid]', 'data-tid'))
        type_into(page, x['to']); page.click('#tfcheck'); page.wait_for_selector('.tf-fb'); page.click('#tfnext')
    assert 'Mistakes round' in page.inner_text('[data-tfscore]'), page.inner_text('[data-tfscore]')
    # Group filter.
    go(page, '/transform', transformMode='choose', transformLv='B2', transformType='polite')
    assert page.query_selector('[data-tg="polite"].on'), 'group filter not kept'

    # Sentence builder.
    go(page, '/build', buildLv='A1', buildSrc='all', buildCount=10, buildHear=False)
    assert page.inner_text('h1') == 'Sentence builder'
    sents = page.evaluate('App.buildSentences()')
    assert len(sents) > 100, f'only {len(sents)} builder sentences'
    assert all(4 <= len(s['tiles']) <= 10 for s in sents)
    assert {s['src'] for s in sents} >= {'lesson', 'dialogue', 'transform'}, {s['src'] for s in sents}
    # First tiles are lower case unless they are names.
    caps = [s['tiles'][0] for s in sents if s['tiles'][0].lstrip('¿¡')[:1].isupper()]
    print('first tiles kept capitalised (names):', sorted(set(caps))[:12])
    shot(page, 'build-setup')
    assert build_round(page) == 10
    assert '9 / 10' in page.inner_text('[data-bdscore]') or '10 / 10' in page.inner_text('[data-bdscore]'), page.inner_text('[data-bdscore]')
    assert isinstance(page.evaluate("App.state.done.build.A1"), int)
    page.click('#bdmiss2')
    build_round(page, wrong_first=False, keyboard=False, start=False)
    assert 'Mistakes round' in page.inner_text('[data-bdscore]')
    # Listening mode draws the play button.
    go(page, '/build', buildLv='all', buildHear=True)
    page.click('#bdgo'); page.wait_for_selector('#bdplay')
    assert page.query_selector('#bdshow'), 'English should be hidden in listening mode'

    # Overflow: 390 px at 125 % and 1280 px, light and dark.
    for theme in ('light', 'dark'):
        for size, (w, h) in (('125', (390, 844)), ('100', (1280, 900))):
            page.set_viewport_size({'width': w, 'height': h})
            go(page, '/transform', transformMode='type', transformLv='B2', transformType='all', textSize=size, theme=theme)
            no_overflow(page, f'transform setup {theme} {w}')
            page.click('#tfgo'); page.wait_for_selector('#tftype')
            no_overflow(page, f'transform type {theme} {w}')
            if w == 390 and theme == 'dark': shot(page, 'transform-type-dark-125')
            page.fill('#tftype', 'Nada'); page.click('#tfcheck'); page.wait_for_selector('.tf-fb')
            no_overflow(page, f'transform feedback {theme} {w}')
            go(page, '/transform', transformMode='choose', transformLv='B2', textSize=size, theme=theme)
            page.click('#tfgo'); page.wait_for_selector('.opt')
            no_overflow(page, f'transform choose {theme} {w}')
            go(page, '/build', buildLv='B2' if page.evaluate("App.buildSentences().some((s) => s.lv === 'B2')") else 'all', buildHear=False, textSize=size, theme=theme)
            no_overflow(page, f'build setup {theme} {w}')
            page.click('#bdgo'); page.wait_for_selector('#bdtray .bd-tile')
            no_overflow(page, f'build round {theme} {w}')
            if w == 390 and theme == 'dark': shot(page, 'build-dark-125')
            if w == 1280 and theme == 'light': shot(page, 'build-desktop')
    br.close()

assert not errors, 'console errors: ' + '; '.join(errors[:5])
print('DRILLS OK')
