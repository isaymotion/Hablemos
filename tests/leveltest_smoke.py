"""Playwright smoke for the level review test (#/test, js/leveltest.js, Hablemos 0.9.0).

Usage: python3 tests/leveltest_smoke.py http://localhost:8772/
Takes the site ROOT url. At 390x844 and 1280x900 it runs each level (A1 A2 B1 B2) to the result page, answering every
question with half of them right, and checks the score, the per-area bars and state.done.test / testInfo. The levels
cycle through light 100%, dark 100%, light 125% and dark 125%; every question screen and the result page are checked for
horizontal overflow. It also checks resume after a reload, discard, the 25-minute timer (forced to run out) and a run
with the js/data/examples-*.js files blocked (vocabulary then comes from WORD_PAIRS). Console errors fail the run
(fonts.googleapis.com and the audio pack are ignored). Prints LEVELTEST SMOKE OK.
"""
import sys
from playwright.sync_api import sync_playwright

ROOT = (sys.argv[1] if len(sys.argv) > 1 else 'http://localhost:8772/').rstrip('/') + '/'
LVS = ['A1', 'A2', 'B1', 'B2']
COMBOS = [('light', '100'), ('dark', '100'), ('light', '125'), ('dark', '125')]
fails = []


def fail(msg):
    fails.append(msg)
    print('FAIL', msg)


def ignorable(url):
    return 'fonts.googleapis' in url or 'fonts.gstatic' in url or '/audio/' in url


def overflow(pg, where):
    w = pg.evaluate('[document.documentElement.scrollWidth, document.documentElement.clientWidth]')
    if w[0] > w[1] + 1:
        fail('horizontal overflow %s (%d > %d)' % (where, w[0], w[1]))


def settings(pg, theme, size):
    pg.evaluate("([t, s]) => { App.state.settings.theme = t; App.state.settings.textSize = s; delete App.state.testRun; App.save(); }", [theme, size])
    pg.reload()
    pg.wait_for_selector('#view h1')


def start(pg, lv, timer=False):
    pg.goto(ROOT + '#/')   # the result page keeps the #/test hash: leave it first so the start page renders
    pg.wait_for_selector('#view h1')
    pg.goto(ROOT + '#/test')
    pg.wait_for_selector('#ltgo')
    pg.click('[data-lv="%s"]' % lv)
    box = pg.locator('#lttimer')
    if box.is_checked() != timer:
        box.click()
    pg.click('#ltgo')
    pg.wait_for_selector('.lt-opts .opt')


def answer_all(pg, tag, check_every=True):
    run = pg.evaluate('App.state.testRun')
    n, want, seen = len(run['items']), 0, set()
    for i in range(n):
        x = pg.evaluate('App.state.testRun.items[App.state.testRun.i]')
        k = x['a'] if i % 2 == 0 else (x['a'] + 1) % len(x['opts'])
        if k == x['a']:
            want += 1
        if check_every or x['kind'] not in seen:
            overflow(pg, '%s q%d %s' % (tag, i + 1, x['kind']))
        seen.add(x['kind'])
        pg.click('.lt-opts .opt[data-k="%d"]' % k)
        pg.click('#ltnext')
    pg.wait_for_selector('.lt-total')
    return run, want


def check_result(pg, lv, run, want, tag):
    h1 = pg.inner_text('#view h1')
    if 'result' not in h1:
        fail('%s: no result page (%s)' % (tag, h1))
    total = pg.inner_text('.lt-total').strip()
    if total != '%d / %d' % (want, len(run['items'])):
        fail('%s: score %s, expected %d / %d' % (tag, total, want, len(run['items'])))
    best = pg.evaluate('(lv) => App.state.done.test && App.state.done.test[lv]', lv)
    info = pg.evaluate('(lv) => App.state.done.testInfo && App.state.done.testInfo[lv]', lv)
    if not isinstance(best, (int, float)):
        fail('%s: done.test[%s] not a number' % (tag, lv))
    if not info or 'last' not in info or 'areas' not in info['last']:
        fail('%s: testInfo[%s] incomplete' % (tag, lv))
    if pg.evaluate('!!App.state.testRun'):
        fail('%s: testRun left after finishing' % tag)
    areas = {x['area'] for x in run['items']}
    if pg.locator('.lt-bar').count() != len(areas):
        fail('%s: %d bars for %d areas' % (tag, pg.locator('.lt-bar').count(), len(areas)))
    if pg.locator('.lt-weak a').count() < 1:
        fail('%s: no drill link on a half-right run' % tag)
    if pg.locator('.lt-w').count() != len(run['items']) - want:
        fail('%s: review list has %d cards' % (tag, pg.locator('.lt-w').count()))
    overflow(pg, tag + ' result')
    return areas


def main():
    with sync_playwright() as p:
        b = p.chromium.launch()
        for vw, vh in [(390, 844), (1280, 900)]:
            ctx = b.new_context(viewport={'width': vw, 'height': vh})
            pg = ctx.new_page()
            errs = []
            pg.on('console', lambda m: errs.append(m.text) if m.type == 'error' and not ignorable((m.location or {}).get('url', '')) and not ('Failed to load resource' in m.text) else None)
            pg.on('pageerror', lambda e: errs.append(str(e)))
            pg.on('response', lambda r: errs.append('%d %s' % (r.status, r.url)) if r.status >= 400 and not ignorable(r.url) else None)
            pg.on('dialog', lambda d: d.accept())
            pg.goto(ROOT + '#/test')
            pg.wait_for_selector('#view h1')
            vtag = '%dpx' % vw

            # Each level to the result page, half right, cycling theme and text size.
            for lv, (theme, size) in zip(LVS, COMBOS):
                settings(pg, theme, size)
                tag = '%s %s %s %s%%' % (vtag, lv, theme, size)
                start(pg, lv)
                run, want = answer_all(pg, tag)
                areas = check_result(pg, lv, run, want, tag)
                print('ok', tag, len(run['items']), 'questions', sorted(areas))

            # Resume after reload, then discard.
            settings(pg, 'light', '100')
            start(pg, 'A2')
            for i in range(3):
                x = pg.evaluate('App.state.testRun.items[App.state.testRun.i]')
                pg.click('.lt-opts .opt[data-k="%d"]' % x['a'])
                pg.click('#ltnext')
            before = pg.evaluate('App.state.testRun.ans.slice(0, 3)')
            pg.reload()
            pg.goto(ROOT + '#/test')
            pg.wait_for_selector('#ltresume')
            if '3 of' not in pg.inner_text('.lt-resume'):
                fail(vtag + ' resume card does not say 3 answered')
            overflow(pg, vtag + ' resume card')
            pg.click('#ltresume')
            pg.wait_for_selector('.lt-opts .opt')
            st = pg.evaluate('[App.state.testRun.i, App.state.testRun.ans.slice(0, 3)]')
            if st[0] != 3 or st[1] != before:
                fail(vtag + ' resume lost the place or answers %s' % st)
            pg.click('#ltprev')
            if pg.locator('.lt-opts .opt.on').count() != 1:
                fail(vtag + ' previous answer not shown as chosen')
            pg.click('a[href="#/test"].btn')
            pg.wait_for_selector('#ltdiscard')
            pg.click('#ltdiscard')
            pg.wait_for_selector('#ltgo')
            if pg.evaluate('!!App.state.testRun') or pg.locator('#ltresume').count():
                fail(vtag + ' discard left the run')
            print('ok', vtag, 'resume and discard')

            # Timer on, forced to run out.
            settings(pg, 'dark', '125')
            start(pg, 'B1', timer=True)
            t = pg.inner_text('#lttime')
            if ':' not in t:
                fail(vtag + ' timer not shown')
            overflow(pg, vtag + ' timer')
            pg.evaluate('App.state.testRun.used = 25 * 60 - 1.5')
            pg.wait_for_selector('.lt-total', timeout=6000)
            if 'Time is up' not in pg.inner_text('#view'):
                fail(vtag + ' time-up notice missing')
            overflow(pg, vtag + ' time-up result')
            pg.evaluate("App.state.settings.testTimer = false; App.save()")
            print('ok', vtag, 'timer')

            # Keyboard: 1-4 choose, Enter goes on.
            start(pg, 'A1')
            pg.keyboard.press('2')
            if pg.evaluate('App.state.testRun.ans[0]') != 1:
                fail(vtag + ' key 2 did not choose option 2')
            pg.locator('body').click(position={'x': 2, 'y': 2})
            pg.keyboard.press('2')
            pg.keyboard.press('Enter')
            if pg.evaluate('App.state.testRun.i') != 1:
                fail(vtag + ' Enter did not go on')
            pg.evaluate('delete App.state.testRun; App.save()')

            if errs:
                fail(vtag + ' console errors: %s' % errs[:5])
            ctx.close()

        # Without any DICT_EX file: vocabulary falls back to WORD_PAIRS; nothing crashes.
        ctx = b.new_context(viewport={'width': 390, 'height': 844})
        ctx.route('**/js/data/examples-*.js', lambda r: r.fulfill(status=200, content_type='application/javascript', body='/* blocked by leveltest_smoke */'))
        pg = ctx.new_page()
        errs = []
        pg.on('pageerror', lambda e: errs.append(str(e)))
        pg.on('dialog', lambda d: d.accept())
        pg.goto(ROOT + '#/test')
        pg.wait_for_selector('#view h1')
        if pg.evaluate('(window.DICT_EX || []).length'):
            fail('examples were not blocked')
        for lv in LVS:
            start(pg, lv)
            kinds = pg.evaluate("[...new Set(App.state.testRun.items.filter((x) => x.area === 'vocab').map((x) => x.kind))]")
            if any(k in ('meaning', 'context') for k in kinds):
                fail('no-examples %s: dictionary items without DICT_EX' % lv)
            run, want = answer_all(pg, 'no-examples ' + lv, check_every=False)
            check_result(pg, lv, run, want, 'no-examples ' + lv)
            print('ok no-examples', lv, len(run['items']), 'questions, vocab kinds', sorted(kinds))
        if errs:
            fail('no-examples page errors: %s' % errs[:5])
        ctx.close()
        b.close()
    if fails:
        print('LEVELTEST SMOKE FAILED (%d)' % len(fails))
        sys.exit(1)
    print('LEVELTEST SMOKE OK')


if __name__ == '__main__':
    main()
