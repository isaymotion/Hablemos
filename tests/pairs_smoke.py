#!/usr/bin/env python3
"""Playwright smoke test for Word pairs (#/pairs, js/pairs.js), Hablemos 0.8.0.
Usage: python3 pairs_smoke.py http://localhost:8771 [shot-dir]
Checks: one h1; the Learn tab lists every pair of the chosen level/type (speakers, notes for similar words, the
"Together" speaker for collocations); a Match round completed by reading window.WORD_PAIRS from the page and clicking
the right partners (one deliberate miss); a Quiz round of 10 to the score screen, answered from the data (each question's
options: exactly one is a partner of the word); best scores saved in App.state.done.pairs ('match:<lv>', 'time:<lv>',
'quiz:<lv>', miss list) and settings pairsLv / pairsType / pairsN; "Practise my mistakes" appears after a miss;
no horizontal overflow at 390x844 and 1280x900, light and dark, 100% and 125% text size; no console errors
(fonts.googleapis.com and a missing audio/ pack in a dev copy ignored). Prints PAIRS SMOKE OK."""
import sys, os, json
from playwright.sync_api import sync_playwright

BASE = (sys.argv[1] if len(sys.argv) > 1 else 'http://localhost:8771').rstrip('/')
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


def fresh(page, size='100', theme='light'):
    page.goto(BASE + '/#/')
    st = {'settings': {'textSize': size, 'theme': theme}}
    page.evaluate('''(st) => { st.seenVersion = (window.APP_META || {}).version || ''; localStorage.clear(); localStorage.setItem('hablemos.v1', JSON.stringify(st)); }''', st)
    page.reload()
    page.wait_for_timeout(300)


def stub_speech(page):
    page.evaluate('''() => { window.__spoken = []; App.speakAsync = (t) => { window.__spoken.push(t); return new Promise(r => setTimeout(r, 5)); }; App.speak = (t) => { window.__spoken.push(t); }; }''')


def go(page, hash_):
    page.evaluate('(h) => { location.hash = h; }', hash_)
    page.wait_for_timeout(250)
    stub_speech(page)


def shot(page, name):
    if SHOTS:
        os.makedirs(SHOTS, exist_ok=True)
        page.screenshot(path=os.path.join(SHOTS, name + '.png'), full_page=True)


def set_seg(page, attr, val):
    page.click('[data-%s="%s"]' % (attr, val))
    page.wait_for_timeout(150)
    stub_speech(page)


def learn(page, where):
    go(page, '#/pairs')
    check(page.locator('#view h1').count() == 1, where + ': not exactly one h1')
    set_seg(page, 'plv', 'A2')
    set_seg(page, 'pty', 'all')
    n = page.evaluate("() => WORD_PAIRS.filter(p => p.lv === 'A2').length")
    shown = page.locator('#prbox .pr-item').count()
    check(n == 70 and shown == n, where + ': learn lists %s of %s A2 pairs' % (shown, n))
    nsyn = page.evaluate("() => WORD_PAIRS.filter(p => p.lv === 'A2' && p.type === 'syn').length")
    notes = page.locator('#prbox .pr-item > .small.muted').count()
    check(notes == nsyn, where + ': %s notes shown for %s similar-word pairs' % (notes, nsyn))
    page.locator('#prbox .pr-item .say').first.click()
    first = page.evaluate("() => WORD_PAIRS.find(p => p.lv === 'A2' && p.type === 'opp').a")
    check(first in page.evaluate('() => window.__spoken'), where + ': speaker did not say ' + first)
    set_seg(page, 'pty', 'col')
    tog = page.locator('#prbox .pr-ph .say').count()
    check(tog == 28, where + ': %s "Together" speakers for 28 collocations' % tog)
    overflow(page, where + ' learn')
    shot(page, where.replace(' ', '_') + '_learn')


def match(page, where, lv='B1'):
    go(page, '#/pairs?tab=match')
    set_seg(page, 'plv', lv)
    set_seg(page, 'pty', 'all')
    page.locator('.pr-a').first.wait_for(timeout=3000)
    lefts = page.evaluate("() => [...document.querySelectorAll('.pr-a .vm-w')].map(e => e.textContent)")
    rights = page.evaluate("() => [...document.querySelectorAll('.pr-b')].map(e => e.textContent)")
    check(len(lefts) == 6 and len(rights) == 6, where + ': match shows %s / %s words' % (len(lefts), len(rights)))
    data = page.evaluate("(lv) => WORD_PAIRS.filter(p => p.lv === lv).map(p => [p.a, p.b])", lv)
    partner = {}
    for a, b in data:
        partner.setdefault(a, set()).add(b)
    # Each left word must have exactly one partner on the right.
    for a in lefts:
        k = [b for b in rights if b in partner.get(a, set())]
        check(len(k) == 1, where + ': "%s" has %s partners on screen' % (a, len(k)))
    overflow(page, where + ' match')
    shot(page, where.replace(' ', '_') + '_match')
    # One deliberate miss, then all right.
    a0 = lefts[0]
    wrong = next(b for b in rights if b not in partner[a0])
    page.locator('.pr-a').nth(0).click()
    page.locator('.pr-b', has_text=wrong).first.click()
    page.wait_for_timeout(100)
    check('1 miss' in page.inner_text('#prmiss'), where + ': miss not counted')
    for i, a in enumerate(lefts):
        b = next(x for x in rights if x in partner[a])
        page.locator('.pr-a').nth(i).click()
        page.locator('.pr-b:not([disabled])').filter(has_text=b).first.click()
    page.locator('#pragain').wait_for(timeout=3000)
    st = page.evaluate('() => App.state.done.pairs')
    check(isinstance(st.get('match:' + lv), (int, float)) and 0 < st['match:' + lv] < 100, where + ': match score not saved: %s' % st.get('match:' + lv))
    t = st.get('time:' + lv) or {}
    check(t.get('m') == 1 and isinstance(t.get('t'), (int, float)), where + ': best time not saved: %s' % t)
    check(len(st.get('miss') or []) == 0, where + ': miss list should be empty after the round (missed pair matched later)')
    check(page.evaluate('() => App.state.settings.pairsLv') == lv, where + ': pairsLv not saved')
    overflow(page, where + ' match done')


def quiz(page, where, lv='A1', typ='col'):
    go(page, '#/pairs?tab=quiz')
    set_seg(page, 'plv', lv)
    set_seg(page, 'pty', typ)
    page.click('[data-pn="10"]')
    page.wait_for_timeout(100)
    page.click('#prgo')
    data = page.evaluate("() => WORD_PAIRS.map(p => [p.a, p.b])")
    partner = {}
    for a, b in data:
        partner.setdefault(a, set()).add(b)
        partner.setdefault(b, set()).add(a)
    missed = False
    for qn in range(10):
        page.locator('#prq .opt').first.wait_for(timeout=3000)
        word = page.inner_text('#prq .pr-q').strip()
        opts = page.evaluate("() => [...document.querySelectorAll('#prq .opt .tl')].map(e => e.textContent)")
        good = [i for i, o in enumerate(opts) if o in partner.get(word, set())]
        check(len(opts) == 4 and len(set(opts)) == 4, where + ': question %s has options %s' % (qn + 1, opts))
        check(len(good) == 1, where + ': "%s" has %s right options among %s' % (word, len(good), opts))
        if qn == 0 and not missed:   # one deliberate wrong answer
            bad = next(i for i in range(len(opts)) if i not in good)
            page.locator('#prq .opt').nth(bad).click()
            missed = True
            check(page.locator('#prq .feedback.no').count() == 1, where + ': no wrong feedback')
        else:
            page.keyboard.press(str(good[0] + 1))
            check(page.locator('#prq .feedback.ok').count() == 1, where + ': no right feedback on question %s' % (qn + 1))
        if qn == 2:
            overflow(page, where + ' quiz feedback')
            shot(page, where.replace(' ', '_') + '_quiz')
        page.locator('#prq [data-act=next]').click()
    page.locator('#prq .pr-done').wait_for(timeout=3000)
    check('9 / 10' in page.inner_text('#prq .pr-done h3'), where + ': score screen does not say 9 / 10')
    st = page.evaluate('() => App.state.done.pairs')
    check(st.get('quiz:' + lv) == 90, where + ': quiz best not saved as 90: %s' % st.get('quiz:' + lv))
    check(len(st.get('miss') or []) == 1, where + ': miss list should hold 1 pair: %s' % st.get('miss'))
    check(page.locator('#prq [data-act=miss]').count() == 1, where + ': no Practise my mistakes button')
    s = page.evaluate('() => App.state.settings')
    check(s.get('pairsN') == 10 and s.get('pairsType') == typ, where + ': settings not saved %s' % s)
    overflow(page, where + ' quiz done')
    # The mistakes round runs and is not scored.
    page.locator('#prq [data-act=miss]').click()
    page.locator('#prq .opt').first.wait_for(timeout=3000)
    check(page.evaluate("() => document.querySelector('#prq .eyebrow').textContent") == 'Question 1 of 1', where + ': mistakes round is not 1 question')


def quiz_all_levels(page, where):
    """Every level and type: every pair, its 4 options have exactly one partner (as built by the page itself)."""
    go(page, '#/pairs?tab=quiz')
    for lv in ['A1', 'A2', 'B1', 'B2']:
        for typ in ['opp', 'syn', 'col']:
            set_seg(page, 'plv', lv)
            set_seg(page, 'pty', typ)
            page.click('[data-pn="20"]')
            page.wait_for_timeout(80)
            page.click('#prgo')
            page.locator('#prq .opt').first.wait_for(timeout=3000)
            n = page.evaluate("() => +document.querySelector('#prq .eyebrow').textContent.split(' of ')[1]")
            want = min(20, page.evaluate("([lv, t]) => WORD_PAIRS.filter(p => p.lv === lv && p.type === t).length", [lv, typ]))
            check(n == want, where + ': %s %s round of %s, not %s' % (lv, typ, n, want))


with sync_playwright() as p:
    br = p.chromium.launch()
    for (w, h) in [(390, 844), (1280, 900)]:
        for size, theme in [('100', 'light'), ('125', 'dark')]:
            where = '%sx%s %s %s' % (w, h, size, theme)
            ctx = br.new_context(viewport={'width': w, 'height': h})
            page = ctx.new_page()
            page.on('console', lambda m: console.append(m.text) if m.type == 'error' and 'fonts.googleapis.com' not in m.text and not m.text.startswith('Failed to load resource') else None)
            # Failed loads are judged by URL: fonts.googleapis.com and the audio pack (absent from a dev copy) are ignored.
            page.on('response', lambda r: console.append('HTTP %s %s' % (r.status, r.url)) if r.status >= 400 and '/audio/' not in r.url and 'fonts.g' not in r.url else None)
            page.on('pageerror', lambda e: console.append(str(e)))
            fresh(page, size, theme)
            check(page.evaluate('() => App.state.settings.textSize') == size, where + ': text size not applied')
            learn(page, where)
            match(page, where, 'B1' if w < 500 else 'A1')
            quiz(page, where, 'A1' if size == '100' else 'B2', 'col' if w < 500 else 'opp')
            if w == 1280 and size == '100':
                quiz_all_levels(page, where)
            ctx.close()
    br.close()

for c in console:
    check(False, 'console error: ' + c[:200])
if errs:
    print('PAIRS SMOKE FAIL (%s)' % len(errs))
    sys.exit(1)
print('PAIRS SMOKE OK')
