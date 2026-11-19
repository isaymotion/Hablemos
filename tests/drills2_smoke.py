#!/usr/bin/env python3
"""Playwright smoke test for Find the mistake (#/errors, js/errors.js) and Listen and reply (#/reply, js/reply.js),
both run by App.drillRun (js/drillrun.js), Hablemos 0.11.0.
Usage: python3 drills2_smoke.py http://localhost:8767 [shot-dir]
Checks, at 390x844 and 1280x800, light and dark, 100% and 125% text size: each page has one h1 and its level seg;
a full round of each to the score screen, tapping tiles / options (right and wrong answers mixed); after each answer the
feedback and the fixed sentence (errors) or the heard sentence and option list (reply) appear; the wrong sentence of
Find the mistake is never spoken; Listen and reply speaks `say` when a question opens; best scores and mistakes are
saved; no horizontal overflow; no console errors (fonts and the audio pack ignored). Prints DRILLS2 SMOKE OK."""
import sys, os, json
from playwright.sync_api import sync_playwright

BASE = (sys.argv[1] if len(sys.argv) > 1 else 'http://localhost:8767').rstrip('/')
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
    # Record speech instead of playing it.
    page.evaluate('''() => { window.__spoken = []; App.speakAsync = (t) => { window.__spoken.push(String(t)); return Promise.resolve(); }; }''')


def play_errors(page, where, shot=''):
    page.goto(BASE + '/#/errors')
    page.wait_for_selector('#view h1')
    check(page.locator('#view h1').count() == 1, where + ' errors: not exactly one h1')
    check(page.locator('#view h1').inner_text().strip() == 'Find the mistake', where + ' errors: h1 text')
    n_items = page.evaluate('App.errorsItems().length')
    if not n_items:
        check(page.locator('.notice.info').count() == 1, where + ' errors: no empty notice')
        return
    lv = page.locator('#erset [data-lv]').all_inner_texts()
    check(lv and lv[0].startswith('All'), where + ' errors: level seg ' + json.dumps(lv))
    overflow(page, where + ' errors set')
    page.locator('#ergo').click()
    page.wait_for_selector('.dr-q')
    n = 0
    for k in range(25):
        if page.locator('.dr-done').count():
            break
        q = page.locator('.dr-q')
        qid = q.get_attribute('data-id')
        x = page.evaluate('id => App.errorsItems().find(y => y.id === id)', qid)
        tiles = page.locator('.dr-q .er-tiles button.er-tile')
        check(tiles.count() == len(x['bad'].split()), qid + ': tile count')
        right = (k % 3) != 1
        idx = x['i'] if right else (x['i'] + 1) % tiles.count()
        if not right and idx == x['i']:
            right = True
        tiles.nth(idx).click()
        page.locator('.dr-fb').wait_for(timeout=3000)
        fb = page.locator('.dr-fb').inner_text()
        check(page.locator('.feedback.ok' if right else '.feedback.no').count() == 1, qid + ': feedback kind')
        check(page.locator('.er-fix .tl').count() == 1 and page.locator('.er-fix .tl').inner_text().strip() == x['fix'].strip(), qid + ': fix sentence not shown')
        check(page.locator('.er-fix .say').count() == 1, qid + ': no speaker for the fix')
        check(page.locator('.er-done').count() == 1, qid + ': corrected tiles not shown')
        check(page.locator('.er-done .er-now, .er-done .er-was').count() >= 1, qid + ': no changed word marked')
        check(x['en'] in fb, qid + ': English not in feedback')
        if n == 0:
            page.locator('.er-fix .say').click()
            page.wait_for_timeout(50)
        if shot and n == 1:
            page.screenshot(path=shot, full_page=True)
        overflow(page, where + ' errors ' + qid)
        n += 1
        page.locator('[data-act=next]').click()
    check(n == min(10, n_items), where + ' errors: round had %d questions' % n)
    check(page.locator('.dr-done').count() == 1, where + ' errors: no score screen')
    overflow(page, where + ' errors score')
    spoken = page.evaluate('window.__spoken')
    bads = page.evaluate('App.errorsItems().map(x => x.bad.trim())')
    check(not any(s.strip() in bads for s in spoken), where + ' errors: a wrong sentence was spoken')
    check(len(spoken) >= 1, where + ' errors: the fix speaker did not speak')
    st = page.evaluate('App.state.done.errors')
    check(isinstance(st.get('all'), (int, float)), where + ' errors: best not saved ' + json.dumps(st)[:200])
    check(isinstance(st.get('miss'), list) and len(st['miss']) >= 1, where + ' errors: mistakes not saved')
    check(page.locator('.dr-done [data-act=miss]').count() == 1, where + ' errors: no Practise my mistakes button')


def play_reply(page, where, shot=''):
    page.goto(BASE + '/#/reply')
    page.wait_for_selector('#view h1')
    check(page.locator('#view h1').count() == 1, where + ' reply: not exactly one h1')
    check(page.locator('#view h1').inner_text().strip() == 'Listen and reply', where + ' reply: h1 text')
    n_items = page.evaluate('App.replyItems().length')
    if not n_items:
        check(page.locator('.notice.info').count() == 1, where + ' reply: no empty notice')
        return
    kinds = page.locator('#rpset [data-rk]').all_inner_texts()
    check('All' in kinds, where + ' reply: kind seg ' + json.dumps(kinds))
    check(page.locator('#rpset [data-rl]').count() >= 2, where + ' reply: level seg')
    overflow(page, where + ' reply set')
    page.locator('#rpgo').click()
    page.wait_for_selector('.dr-q')
    n = 0
    for k in range(25):
        if page.locator('.dr-done').count():
            break
        qid = page.locator('.dr-q').get_attribute('data-id')
        x = page.evaluate('id => App.replyItems().find(y => y.id === id)', qid)
        page.wait_for_timeout(220)
        check(x['say'] in page.evaluate('window.__spoken'), qid + ': say not played when the question opened')
        check(x['say'] not in page.locator('.dr-q').inner_text(), qid + ': say shown before answering')
        opts = page.locator('.dr-q .dr-opts .opt')
        check(opts.count() == 4, qid + ': %d options' % opts.count())
        check(page.locator('.dr-q .dr-optrow .say').count() == 4, qid + ': option speakers missing')
        oks = page.evaluate('() => { const b = document.querySelector("#rpround"); return b.drQs[b.drAt()].opts.map(o => !!o.ok); }')
        right = (k % 3) != 1
        idx = oks.index(True) if right else oks.index(False)
        opts.nth(idx).click()
        page.locator('.dr-fb').wait_for(timeout=3000)
        check(page.locator('.feedback.ok' if right else '.feedback.no').count() == 1, qid + ': feedback kind')
        check(page.locator('.rp-line .tl').inner_text().strip() == x['say'].strip(), qid + ': heard sentence not shown')
        check(page.locator('.rp-ens li').count() == 4 and page.locator('.rp-ens li.rp-right').count() == 1, qid + ': option list')
        check(page.locator('.opt.right').count() == 1, qid + ': right option not marked')
        if not right:
            check(page.locator('.opt.wrong').count() == 1 and page.locator('.rp-ens li.rp-chose').count() == 1, qid + ': wrong choice not marked')
        if shot and n == 1:
            page.screenshot(path=shot, full_page=True)
        overflow(page, where + ' reply ' + qid)
        n += 1
        page.locator('[data-act=next]').click()
    check(n == min(10, n_items), where + ' reply: round had %d questions' % n)
    check(page.locator('.dr-done').count() == 1, where + ' reply: no score screen')
    overflow(page, where + ' reply score')
    st = page.evaluate('App.state.done.reply')
    check(isinstance(st.get('all:all'), (int, float)), where + ' reply: best not saved ' + json.dumps(st)[:200])
    check(isinstance(st.get('miss'), list) and len(st['miss']) >= 1, where + ' reply: mistakes not saved')


with sync_playwright() as p:
    br = p.chromium.launch()
    ctx = br.new_context(viewport={'width': 390, 'height': 844}, device_scale_factor=1)
    page = ctx.new_page()
    page.on('console', lambda m: console.append(m.text) if m.type == 'error' and 'fonts.g' not in m.text and 'Failed to load resource' not in m.text else None)
    page.on('response', lambda r: console.append('HTTP %d %s' % (r.status, r.url)) if r.status >= 400 and 'fonts.g' not in r.url and '/audio/' not in r.url else None)
    page.on('pageerror', lambda e: console.append(str(e)))

    for vw, vh in ((390, 844), (1280, 800)):
        page.set_viewport_size({'width': vw, 'height': vh})
        for theme in ('light', 'dark'):
            for size in ('100', '125'):
                where = '%dpx %s %s%%' % (vw, theme, size)
                fresh(page, size, theme)
                tag = '%d-%s-%s' % (vw, theme, size)
                play_errors(page, where, os.path.join(SHOTS, 'errors-' + tag + '.png') if SHOTS else '')
                play_reply(page, where, os.path.join(SHOTS, 'reply-' + tag + '.png') if SHOTS else '')

    # Settings persist: the level and kind chosen.
    fresh(page)
    page.goto(BASE + '/#/errors')
    page.wait_for_selector('#erset [data-lv]')
    b = page.locator('#erset [data-lv]').nth(1)
    lv = b.get_attribute('data-lv')
    b.click()
    check(page.evaluate('App.state.settings.errorsLv') == lv, 'errorsLv not saved')
    page.goto(BASE + '/#/reply')
    page.wait_for_selector('#rpset [data-rk]')
    page.locator('#rpset [data-rk="clinical"]').click()
    check(page.evaluate('App.state.settings.replyKind') == 'clinical', 'replyKind not saved')
    br.close()

for c in console:
    errs.append('console: ' + c[:200])
    print('CONSOLE', c[:200])
if errs:
    print(len(errs), 'problem(s)')
    sys.exit(1)
print('DRILLS2 SMOKE OK')
