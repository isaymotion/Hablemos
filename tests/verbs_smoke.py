"""Verb trainer smoke (#/verbs): list, level filter, search, a verb page (incl. a hidden-form verb), the three drills to the
score screen (choose and name by clicking the right option from the data, type by typing the model answer, one accent-less
answer), overflow at 390px and 125% text. Usage: python3 verbs_smoke.py http://localhost:8767 [shotdir]"""
import sys, re
from playwright.sync_api import sync_playwright
BASE = (sys.argv[1] if len(sys.argv) > 1 else 'http://localhost:8767').rstrip('/')
SHOTS = sys.argv[2] if len(sys.argv) > 2 else ''
bad = []
OVER = "() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1"
with sync_playwright() as p:
    b = p.chromium.launch()
    for theme in ['light', 'dark']:
        ctx = b.new_context(viewport={'width': 390, 'height': 844}, color_scheme=theme)
        page = ctx.new_page(); errs = []
        page.on('pageerror', lambda e: errs.append(str(e)))
        page.goto(BASE + '/index.html#/'); page.wait_for_selector('#view h1')
        page.evaluate("App.state.settings.textSize='125'; App.state.settings.verbLv='all'; App.state.settings.verbTenses=['present','past','cmd']; App.save()")
        page.reload(); page.wait_for_selector('#view h1')
        def go(h):
            page.evaluate("h => { location.hash = h }", h); page.wait_for_timeout(350)
            if page.evaluate(OVER): bad.append(('overflow', theme, h))
        go('#/verbs'); n = page.locator('#vblist .tile').count()
        if n < 150: bad.append(('list', n))
        page.fill('#vbq', 'dorm'); page.wait_for_timeout(150)
        if page.locator('#vblist .tile').count() < 1: bad.append('search')
        if SHOTS: page.screenshot(path=f'{SHOTS}/verbs-list-{theme}.png')
        idx = page.evaluate("ES_VERBS.findIndex(v => v.inf === 'dormir')")
        go('#/verbs/v/%d' % idx)
        txt = page.inner_text('#view')
        for w in ['duermo', 'durmió', 'durmiendo', 'duerma']:
            if w not in txt: bad.append(('dormir form', w))
        if SHOTS: page.screenshot(path=f'{SHOTS}/verbs-page-{theme}.png')
        hid = page.evaluate("ES_VERBS.findIndex(v => ESConj.HIDE[v.inf])")
        if hid >= 0:
            go('#/verbs/v/%d' % hid)
            if page.locator('.vb-row [title="Not used"]').count() < 3: bad.append('hidden forms shown')
        # choose and name: runQuiz puts the right answer at data-k=0
        for mode in ['choose', 'name']:
            go('#/verbs?drill=' + mode)
            for i in range(10):
                page.click('.opt[data-k="0"]'); page.wait_for_timeout(80)
                nx = page.locator('[data-act=next]')
                if nx.count(): nx.first.click()
                page.wait_for_timeout(120)
            if 'Try again' not in page.inner_text('#view'): bad.append(('no score', mode, page.inner_text('#view')[:120]))
        go('#/verbs?drill=type')
        for i in range(10):
            ans = None
            head = page.inner_text('#vbd .card')
            # find the answer from the data: verb + form label shown on the card
            ans = page.evaluate("""() => { const t = document.querySelector('#vbd .card div[style]').innerText; const [inf, ...rest] = t.split(' · '); const label = rest.join(' · ');
                const v = ES_VERBS.find(x => x.inf === inf.trim()); const F = ESConj.FORMS.find(x => x.label === label.trim()); return v && F ? ESConj.verb(v.inf, v)[F.id] : null }""")
            if not ans: bad.append(('type: no answer', head[:80])); break
            typed = ans if i else ans.translate(str.maketrans('áéíóú', 'aeiou'))
            page.fill('#vbin', typed); page.click('#vbd button[type=submit]'); page.wait_for_timeout(100)
            fb = page.inner_text('[data-fb]')
            if i == 0 and typed != ans and 'Almost' not in fb: bad.append(('almost', fb))
            if i == 1 and SHOTS: page.screenshot(path=f'{SHOTS}/verbs-type-{theme}.png')
            if page.evaluate(OVER): bad.append(('overflow type', theme))
            page.click('#vbd button[type=submit]'); page.wait_for_timeout(100)
        if 'Try again' not in page.inner_text('#view'): bad.append(('no score', 'type'))
        best = page.evaluate("App.state.done.verbs")
        if not best or 'all:choose' not in best: bad.append(('scores', best))
        if errs: bad.append(('errors', errs[:3]))
        ctx.close()
    b.close()
for x in bad: print('BAD', x)
print('VERBS SMOKE', 'OK' if not bad else 'FAIL')
