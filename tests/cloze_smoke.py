#!/usr/bin/env python3
"""Playwright smoke test for Fill the blank (#/cloze, js/cloze.js), Hablemos 0.7.0.
Usage: python3 cloze_smoke.py http://localhost:8772 [shot-dir]
Checks: a Mixed round of 10 to the score screen (keys 1-4 and the buttons), the speaker button, a By lesson round,
a wrong answer then "Practise my mistakes", best scores saved under state.done.cloze, the By lesson list
(grouped by level and unit, only lessons with items), no horizontal overflow at 390x844 and 1280x900, light and
dark, 100% and 125% text size, and no console errors (fonts.googleapis.com ignored). Prints CLOZE SMOKE OK."""
import sys, os, json
from playwright.sync_api import sync_playwright

BASE = (sys.argv[1] if len(sys.argv) > 1 else 'http://localhost:8772').rstrip('/')
SHOTS = sys.argv[2] if len(sys.argv) > 2 else ''
errs, console = [], []


def check(cond, msg):
    if not cond:
        errs.append(msg)
        print('FAIL', msg)


def overflow(page, where):
    w = page.evaluate('() => [document.documentElement.scrollWidth, window.innerWidth]')
    check(w[0] <= w[1] + 1, where + ': horizontal overflow %s > %s' % tuple(w))
    wide = page.evaluate('''() => [...document.querySelectorAll('#view *')].filter(e => { const r = e.getBoundingClientRect(); return r.width && r.right > window.innerWidth + 1; }).slice(0, 3).map(e => e.tagName + '.' + e.className)''')
    check(not wide, where + ': elements past the right edge ' + json.dumps(wide))


def fresh(page, size='100', theme='light'):
    page.goto(BASE + '/#/')
    page.evaluate('''([size, theme]) => { localStorage.clear(); localStorage.setItem('hablemos.v1', JSON.stringify({ settings: { textSize: size, theme: theme }, seenVersion: (window.APP_META || {}).version || '' })); }''', [size, theme])
    page.reload()
    page.wait_for_timeout(300)


def answer_all(page, right=True, use_keys=False):
    """Answer questions until the score screen; right=True picks the right option (read from the data)."""
    n = 0
    for _ in range(25):
        if page.locator('.cz-done').count():
            break
        q = page.locator('.cz-q')
        q.wait_for(timeout=4000)
        qid = q.get_attribute('data-id')
        ans = page.evaluate('id => GRAMMAR_CLOZE.find(x => x.id === id).a', qid)
        opts = page.locator('.cz-opts .opt')
        xopts = page.evaluate('id => GRAMMAR_CLOZE.find(x => x.id === id).opts', qid)
        texts = [xopts[int(opts.nth(i).get_attribute('data-k'))] for i in range(opts.count())]
        check(all(t in opts.nth(i).inner_text() for i, t in enumerate(texts)), qid + ': option labels do not match the data')
        idx = texts.index(ans) if right else next(i for i, t in enumerate(texts) if t != ans)
        if use_keys:
            page.keyboard.press(str(idx + 1))
        else:
            opts.nth(idx).click()
        fb = page.locator('.cz-fb')
        fb.wait_for(timeout=3000)
        check(page.locator('.cz-full .tl').count() == 1, qid + ': no full sentence in the feedback')
        full = page.locator('.cz-full .tl').inner_text()
        exp = page.evaluate('id => { const x = GRAMMAR_CLOZE.find(y => y.id === id); return App.fillBlank(x.s, x.a); }', qid)
        check(full == exp, qid + ': feedback sentence %r != fillBlank %r' % (full, exp))
        check('＿' not in full, qid + ': blank left in the full sentence')
        check(page.locator('.cz-why').count() == 1, qid + ': no reason shown')
        check(page.locator('.opt.right').count() == 1, qid + ': right option not marked')
        if not right:
            check(page.locator('.opt.wrong').count() == 1, qid + ': wrong option not marked')
        n += 1
        if use_keys:
            page.keyboard.press('Enter')
        else:
            page.locator('[data-act=next]').click()
    return n


with sync_playwright() as p:
    br = p.chromium.launch()
    ctx = br.new_context(viewport={'width': 390, 'height': 844}, device_scale_factor=2)
    page = ctx.new_page()
    # Resource failures are judged by URL (fonts and the audio pack, which private copies leave out, are ignored).
    page.on('console', lambda m: console.append(m.text) if m.type == 'error' and 'fonts.g' not in m.text and 'Failed to load resource' not in m.text else None)
    page.on('response', lambda r: console.append('HTTP %d %s' % (r.status, r.url)) if r.status >= 400 and 'fonts.g' not in r.url and '/audio/' not in r.url else None)
    page.on('pageerror', lambda e: console.append(str(e)))
    # Speech: record what the speaker button asks for.
    page.add_init_script('window.__spoken = [];')

    fresh(page)
    page.goto(BASE + '/#/cloze')
    page.wait_for_selector('h1')
    check(page.locator('#view h1').count() == 1, 'mixed: not exactly one h1')
    check(page.locator('#view h1').inner_text().strip() == 'Fill the blank', 'mixed: h1 text')
    n_items = page.evaluate('GRAMMAR_CLOZE.length')
    check(n_items >= 205, 'only %d items loaded' % n_items)
    lv_buttons = page.locator('#czbody [data-lv]').all_inner_texts()
    check(lv_buttons[:3] == ['All', 'A1', 'A2'], 'level buttons ' + json.dumps(lv_buttons))
    # Mixed round, A1, 10 items, answered with the keyboard, all right.
    page.locator('#czbody [data-lv="A1"]').click()
    check(page.evaluate('App.state.settings.clozeLv') == 'A1', 'clozeLv not saved')
    page.locator('[data-n="10"]').click()
    if SHOTS:
        page.screenshot(path=os.path.join(SHOTS, 'cloze-mixed.png'))
    page.locator('#czgo').click()
    page.wait_for_selector('.cz-q')
    check(page.locator('.cz-q .pill').first.inner_text() == 'A1', 'A1 round shows another level')
    # Speaker button speaks the completed sentence through App.speakAsync.
    page.evaluate('''() => { const o = App.speakAsync; App.speakAsync = (t, opts) => { window.__spoken.push(t); return Promise.resolve(); }; }''')
    page.keyboard.press('1')
    page.locator('.cz-fb').wait_for()
    page.locator('[data-czsay]').click()
    spoken = page.evaluate('window.__spoken')
    full = page.locator('.cz-full .tl').inner_text()
    check(spoken == [full], 'speaker spoke %r, expected %r' % (spoken, full))
    if SHOTS:
        page.evaluate('() => document.querySelector(".cz-q").scrollIntoView()')
        page.screenshot(path=os.path.join(SHOTS, 'cloze-feedback.png'))
    page.locator('[data-act=next]').focus()
    page.keyboard.press('Enter')
    answered = 1 + answer_all(page, right=True, use_keys=True)
    check(answered == 10, 'mixed round had %d questions, expected 10' % answered)
    check(page.locator('.cz-done').count() == 1, 'mixed: no score screen')
    best = page.evaluate('App.state.done.cloze')
    check(isinstance(best.get('A1'), (int, float)), 'best score for A1 not saved: ' + json.dumps(best))
    overflow(page, 'mixed score 390')

    # 20 items setting persists.
    page.goto(BASE + '/#/cloze')
    page.locator('[data-n="20"]').click()
    check(page.evaluate('App.state.settings.clozeCount') == 20, 'clozeCount not saved')
    page.locator('#czmf').check()
    check(page.evaluate('App.state.settings.clozeMissFirst') is True, 'clozeMissFirst not saved')
    page.locator('[data-n="10"]').click()

    # A wrong answer, then "Practise my mistakes".
    page.evaluate('() => { App.state.done.cloze.miss = []; App.save(); }')
    page.reload()
    page.wait_for_selector('#czgo')
    page.locator('#czbody [data-lv="A2"]').click()
    page.locator('#czgo').click()
    page.wait_for_selector('.cz-q')
    answer_all(page, right=False)
    miss = page.evaluate('App.state.done.cloze.miss')
    check(isinstance(miss, list) and len(miss) == 10, 'mistakes not stored: ' + json.dumps(miss)[:200])
    check(page.locator('#czback').count() == 1, 'no Change settings button')
    page.locator('#czback').click()
    mb = page.locator('#czmiss')
    check(mb.count() == 1 and '(10)' in mb.inner_text(), 'Practise my mistakes button missing or wrong count')
    mb.click()
    page.wait_for_selector('.cz-q')
    check('mistakes' in page.locator('.cz-q .eyebrow').inner_text().lower(), 'mistakes round not labelled')
    first = page.locator('.cz-q').get_attribute('data-id')
    check(first in miss, 'mistakes round shows an item that is not a mistake')
    n = answer_all(page, right=True)
    check(n == 10, 'mistakes round had %d items' % n)
    check(page.evaluate('App.state.done.cloze.miss.length') == 0, 'right answers did not clear the mistakes')
    check(page.locator('#czagain').inner_text().strip() == 'Back', 'mistakes round end button')

    # By lesson tab: grouped by level and unit, only lessons that exist and have items, best scores on rows.
    page.goto(BASE + '/#/cloze?tab=lessons')
    page.wait_for_selector('.cz-ltile')
    page.locator('#czbody [data-lv="all"]').click()
    tiles = page.locator('.cz-ltile')
    hrefs = [tiles.nth(i).get_attribute('href') for i in range(tiles.count())]
    ids = [h.split('l=')[1] for h in hrefs]
    known = page.evaluate('(LESSONS || []).map(l => l.id)')
    with_items = page.evaluate('[...new Set(GRAMMAR_CLOZE.map(x => x.l))]')
    check(all(i in known and i in with_items for i in ids), 'By lesson lists a lesson without items or not in LESSONS')
    check(len(ids) == len([i for i in with_items if i in known]), 'By lesson misses %d lessons' % (len([i for i in with_items if i in known]) - len(ids)))
    groups = page.locator('.cz-group').all_inner_texts()
    check(len(groups) >= 2 and all(' · ' in g for g in groups), 'groups ' + json.dumps(groups[:4]))
    check(page.locator('#view h1').count() == 1, 'lessons tab: not exactly one h1')
    if SHOTS:
        page.screenshot(path=os.path.join(SHOTS, 'cloze-lessons.png'))
    # By lesson round on ser-estar.
    page.goto(BASE + '/#/cloze?l=ser-estar')
    page.wait_for_selector('.cz-q')
    check(page.locator('.breadcrumb').count() == 1, 'lesson round: no breadcrumb')
    n = answer_all(page, right=True)
    check(n == 5, 'ser-estar round had %d items' % n)
    check(page.evaluate('App.state.done.cloze["l:ser-estar"]') == 100, 'lesson best not saved')
    page.goto(BASE + '/#/cloze?tab=lessons')
    page.locator('#czbody [data-lv="A1"]').click()
    row = page.locator('.cz-ltile[href="#/cloze?l=ser-estar"]')
    check(row.count() == 1 and '100%' in row.inner_text(), 'best score not on the lesson row')
    # Unknown lesson id still plays in Mixed rounds: inject one and draw a round on All.
    page.evaluate('''() => { GRAMMAR_CLOZE.push({ id: 'c-zz-001', lv: 'A1', l: 'no-such-lesson', s: '＿ un ejemplo.', a: 'es', opts: ['es', 'está', 'hay', 'son'], en: 'It is an example.', why: 'Test.' }); }''')
    page.goto(BASE + '/#/cloze?l=no-such-lesson')
    page.wait_for_selector('.cz-q')
    check(page.locator('.cz-q').get_attribute('data-id') == 'c-zz-001', 'unknown-lesson item not playable by id')
    page.goto(BASE + '/#/cloze?tab=lessons')
    check(page.locator('.cz-ltile[href="#/cloze?l=no-such-lesson"]').count() == 0, 'unknown lesson listed in By lesson')
    pool = page.evaluate('''() => { App.state.settings.clozeLv = 'all'; return GRAMMAR_CLOZE.some(x => x.l === 'no-such-lesson'); }''')
    check(pool, 'injected item missing')
    page.reload()

    # Layout: 390 and 1280, light and dark, 100 and 125%.
    for vw, vh in ((390, 844), (1280, 900)):
        page.set_viewport_size({'width': vw, 'height': vh})
        for theme in ('light', 'dark'):
            for size in ('100', '125'):
                fresh(page, size, theme)
                where = '%dpx %s %s%%' % (vw, theme, size)
                for route in ('/#/cloze', '/#/cloze?tab=lessons', '/#/cloze?l=preterite-vs-imperfect'):
                    page.goto(BASE + route)
                    page.wait_for_timeout(150)
                    overflow(page, where + ' ' + route)
                page.goto(BASE + '/#/cloze')
                page.locator('#czgo').click()
                page.wait_for_selector('.cz-q')
                # the longest sentence and options of all
                page.locator('.opt').first.click()
                overflow(page, where + ' feedback')
                if SHOTS and vw == 390 and size == '125':
                    page.screenshot(path=os.path.join(SHOTS, 'cloze-125-%s.png' % theme))
    # Practice tile and search entry, when wired.
    page.goto(BASE + '/#/practice')
    check(page.locator('a.tile[href="#/cloze"]').count() == 1, 'no Fill the blank tile on Practice')
    br.close()

for c in console:
    errs.append('console: ' + c[:200])
    print('CONSOLE', c[:200])
if errs:
    print(len(errs), 'problem(s)')
    sys.exit(1)
print('CLOZE SMOKE OK')
