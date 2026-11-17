#!/usr/bin/env python3
"""Playwright smoke test for the Vocabulary quiz (#/vocab) and Topic matching (#/vocab?tab=match), js/vocab.js, Hablemos 0.8.0.
Usage: python3 vocab_smoke.py http://localhost:8772 [shot-dir]
Checks, on a clinical deck (Health & illness):
- one round of each mode (Meaning, Recall, In context, Type it) to the score screen, answering from the app's data
  (the right option of App.runQuiz is the one with data-k="0"; typed answers are looked up in App.DICT by the English shown);
  best % saved in App.state.done.vocab['c-health:<mode>'];
- In context: one blank per question, the English shown, the hint and the sentence count;
- Type it: an answer typed without its accents is counted right with "Check the accents", the accent bar is there;
- Topic matching: the set list, one full matching round of a set to the result (state.done.vocab['match:<id>'] = { m, t }),
  and one set quiz (state.done.vocab['topic:<id>:meaning']);
- 390x844 and 1280x900, light and dark, 100% and 125% text size: no horizontal overflow; no console errors
  (fonts.googleapis.com and the audio pack, which private copies leave out, are ignored). Prints VOCAB SMOKE OK."""
import sys, os, json, unicodedata
from playwright.sync_api import sync_playwright

BASE = (sys.argv[1] if len(sys.argv) > 1 else 'http://localhost:8772').rstrip('/')
SHOTS = sys.argv[2] if len(sys.argv) > 2 else ''
DECK = 'c-health'
errs, console = [], []


def check(cond, msg):
    if not cond:
        errs.append(msg)
        print('FAIL', msg)


def shot(page, name):
    if SHOTS:
        os.makedirs(SHOTS, exist_ok=True)
        page.screenshot(path=os.path.join(SHOTS, name + '.png'), full_page=True)


def overflow(page, where):
    w = page.evaluate('() => [document.documentElement.scrollWidth, window.innerWidth]')
    check(w[0] <= w[1] + 1, where + ': horizontal overflow %s > %s' % tuple(w))
    wide = page.evaluate('''() => [...document.querySelectorAll('#view *')].filter(e => { const r = e.getBoundingClientRect(); return r.width && r.right > window.innerWidth + 1; }).slice(0, 3).map(e => e.tagName + '.' + e.className)''')
    check(not wide, where + ': elements past the right edge ' + json.dumps(wide))


def fresh(page, size='100', theme='light'):
    page.goto(BASE + '/#/')
    page.evaluate('''([size, theme]) => { localStorage.clear(); localStorage.setItem('hablemos.v1', JSON.stringify({ settings: { textSize: size, theme: theme, voiceSource: 'device' }, seenVersion: (window.APP_META || {}).version || '' })); }''', [size, theme])
    page.reload()
    page.wait_for_timeout(300)


def go(page, h):
    page.goto(BASE + '/' + h)
    page.wait_for_timeout(250)
    page.wait_for_selector('#view h1', timeout=5000)


def strip_accents(s):
    return ''.join(ch for ch in unicodedata.normalize('NFD', s) if unicodedata.category(ch) != 'Mn')


def setup_round(page, mode, count=10):
    go(page, '#/vocab')
    check(page.locator('#view h1').count() == 1 and page.locator('#view h1').inner_text().strip() == 'Vocabulary quiz', 'quiz page: one h1 "Vocabulary quiz"')
    page.select_option('#vqdeck', DECK)
    page.wait_for_timeout(100)
    btn = page.locator('#vqmode [data-vm="%s"]' % mode)
    check(btn.count() == 1, mode + ': mode button missing for ' + DECK)
    if not btn.count():
        return False
    btn.click()
    page.locator('#vqcount [data-vc="%d"]' % count).click()
    check(not page.locator('#vqgo').is_disabled(), mode + ': Start is disabled')
    page.locator('#vqgo').click()
    page.wait_for_timeout(150)
    return True


def mc_round(page, mode, wrong_first=False):
    """Answer a runQuiz round; the right option is data-k=0 (vocab.js puts the answer first in q.opts)."""
    if not setup_round(page, mode):
        return
    n = 0
    for _ in range(25):
        if page.locator('#vq [data-act=retry]').count():
            break
        page.locator('#vq .opt').first.wait_for(timeout=4000)
        if mode == 'context':
            q = page.locator('#vq .card > div').nth(1).inner_text()
            check(q.count('＿＿＿') == 1, 'context: question without exactly one blank: ' + q)
            check(page.locator('#vq .card .muted').count() >= 1, 'context: no English under the sentence')
            check(page.locator('#vq .vq-hint').count() == 1, 'context: no hint above the questions')
        opts = page.locator('#vq .opt')
        check(opts.count() == 4, '%s: %d options' % (mode, opts.count()))
        labels = [opts.nth(i).inner_text().strip() for i in range(opts.count())]
        check(len(set(labels)) == len(labels), mode + ': repeated option ' + json.dumps(labels, ensure_ascii=False))
        if wrong_first and n == 0:
            page.locator('#vq .opt:not([data-k="0"])').first.click()
            check(page.locator('#vq .opt.wrong').count() == 1, mode + ': wrong answer not marked')
        else:
            page.locator('#vq .opt[data-k="0"]').click()
        page.locator('#vq [data-act=next]').wait_for(timeout=3000)
        check(page.locator('#vq .opt.right').count() == 1, mode + ': right option not marked')
        if mode in ('recall', 'context'):
            check(page.locator('#vq [data-fb] .say').count() == 1, mode + ': no speaker button after the answer')
        check(page.locator('#vq [data-fb] .vq-wl').count() == 1, mode + ': no word page link after the answer')
        n += 1
        page.locator('#vq [data-act=next]').click()
    check(page.locator('#vq [data-act=retry]').count() == 1, mode + ': no score screen')
    score = page.evaluate('k => (App.state.done.vocab || {})[k]', DECK + ':' + mode)
    want = round(100 * (n - (1 if wrong_first else 0)) / max(n, 1))
    check(isinstance(score, (int, float)) and score == want, '%s: saved score %r, expected %r' % (mode, score, want))
    check(page.locator('#vqmode [data-vm="%s"] .vq-best' % mode).count() == 1, mode + ': best % not shown on the mode button')
    return n


def type_round(page):
    if not setup_round(page, 'type'):
        return
    accents_seen = False
    n = 0
    for _ in range(25):
        if page.locator('#vq [data-act=retry]').count():
            break
        page.locator('#vqtype').wait_for(timeout=4000)
        check(page.locator('#vq .tf-accents').count() == 1, 'type: no accent bar')
        en = page.locator('#vq .vq-en').inner_text().strip()
        cands = page.evaluate('''([en, deck]) => { const d = App.decks().find(x => x.id === deck); const ids = new Set(d.ids);
            return App.DICT.filter(e => e.en === en).sort((a, b) => ids.has(b.id) - ids.has(a.id)).map(e => e.tl); }''', [en, DECK])
        check(len(cands) > 0, 'type: no dictionary entry for ' + en)
        if not cands:
            break
        tl = cands[0]
        letter = page.locator('#vq .card b.tl').first.inner_text().strip()
        check(strip_accents(tl.lstrip('¿¡')).lower().startswith(strip_accents(letter).lower()), 'type: first letter %r does not start %r' % (letter, tl))
        bare = strip_accents(tl).replace('ñ', 'n')
        use_bare = (not accents_seen) and bare != tl
        page.fill('#vqtype', bare if use_bare else tl)
        page.locator('#vqcheck').click()
        page.locator('#vq [data-act=next]').wait_for(timeout=3000)
        fb = page.locator('#vq .feedback').inner_text()
        check('feedback ok' in (page.locator('#vq .feedback').get_attribute('class') or ''), 'type: %r not counted right (%s)' % (bare if use_bare else tl, fb))
        if use_bare:
            check('Check the accents' in fb, 'type: no "Check the accents" for %r' % bare)
            accents_seen = 'Check the accents' in fb
        n += 1
        page.locator('#vq [data-act=next]').click()
    check(accents_seen, 'type: no question with accents was met in the round')
    check(page.locator('#vq [data-act=retry]').count() == 1, 'type: no score screen')
    score = page.evaluate('k => (App.state.done.vocab || {})[k]', DECK + ':type')
    check(score == 100, 'type: saved score %r, expected 100' % score)
    return n


def match_round(page, sid):
    go(page, '#/vocab?tab=match')
    check(page.locator('#view h1').inner_text().strip() == 'Topic matching', 'match list: h1')
    tiles = page.locator('#view .grid .tile').count()
    nsets = page.evaluate('() => (window.TOPIC_SETS || []).length')
    check(tiles == nsets and tiles >= 16, 'match list: %d tiles for %d sets' % (tiles, nsets))
    go(page, '#/vocab?tab=match&set=' + sid)
    total = page.evaluate('id => App.vocabSetWords(TOPIC_SETS.find(s => s.id === id)).length', sid)
    seen = 0
    for _ in range(6):
        if page.locator('#vmagain').count():
            break
        page.locator('.vm-snd').first.wait_for(timeout=4000)
        k = page.locator('.vm-snd').count()
        # one miss in the first round
        if seen == 0 and k > 1:
            page.locator('.vm-snd[data-i="0"]').click()
            page.locator('.vm-mean[data-i="1"]').click()
        for i in range(k):
            page.locator('.vm-snd[data-i="%d"]' % i).click()
            page.locator('.vm-mean[data-i="%d"]' % i).click()
        check(page.locator('.vm-mean.right').count() == k, 'match: not all pairs locked')
        check(page.locator('.vm-snd .vm-w:not([hidden])').count() == k, 'match: words not shown once matched')
        seen += k
        page.wait_for_timeout(900)
    check(page.locator('#vmagain').count() == 1, 'match: no result screen')
    check(seen == total, 'match: %d words matched of %d' % (seen, total))
    b = page.evaluate('id => (App.state.done.vocab || {})["match:" + id]', sid)
    check(isinstance(b, dict) and b.get('m') == 1 and isinstance(b.get('t'), int), 'match: saved best %r' % b)


def set_quiz(page, sid):
    go(page, '#/vocab?tab=match&set=%s&mode=quiz' % sid)
    page.locator('#vtmode [data-vtm="meaning"]').click()
    page.locator('#vtgo').click()
    n = 0
    for _ in range(25):
        if page.locator('#vtq [data-act=retry]').count():
            break
        page.locator('#vtq .opt').first.wait_for(timeout=4000)
        check(page.locator('#vtq .opt').count() == 4, 'set quiz: not 4 options')
        page.locator('#vtq .opt[data-k="0"]').click()
        page.locator('#vtq [data-act=next]').click()
        n += 1
    total = page.evaluate('id => new Set(App.vocabSetWords(TOPIC_SETS.find(s => s.id === id)).map(e => e.ftl)).size', sid)
    check(n == total, 'set quiz: %d questions for %d words' % (n, total))
    s = page.evaluate('id => (App.state.done.vocab || {})["topic:" + id + ":meaning"]', sid)
    check(s == 100, 'set quiz: saved %r' % s)


with sync_playwright() as p:
    br = p.chromium.launch()
    for (w, h) in [(390, 844), (1280, 900)]:
        ctx = br.new_context(viewport={'width': w, 'height': h})
        page = ctx.new_page()
        page.on('console', lambda m: console.append(m.text) if m.type == 'error' and 'fonts.g' not in m.text and 'Failed to load resource' not in m.text else None)
        page.on('response', lambda r: console.append('HTTP %d %s' % (r.status, r.url)) if r.status >= 400 and 'fonts.g' not in r.url and '/audio/' not in r.url else None)
        page.on('pageerror', lambda e: console.append('pageerror ' + str(e)))
        for theme in ['light', 'dark']:
            for size in ['100', '125']:
                tag = '%dx%d-%s-%s' % (w, h, theme, size)
                fresh(page, size, theme)
                full = (size == '125' and theme == ('light' if w == 390 else 'dark'))
                if full:
                    # the whole flow, with overflow checks along the way
                    mc_round(page, 'meaning', wrong_first=True)
                    overflow(page, tag + ' meaning score')
                    mc_round(page, 'recall')
                    mc_round(page, 'context')
                    overflow(page, tag + ' context score')
                    type_round(page)
                    overflow(page, tag + ' type score')
                    st = page.evaluate('() => App.state.done.vocab')
                    check(all((DECK + ':' + m) in st for m in ['meaning', 'recall', 'context', 'type']), tag + ': scores missing ' + json.dumps(st))
                    match_round(page, 'idioms' if w == 390 else 'body')
                    overflow(page, tag + ' match result')
                    set_quiz(page, 'false-friends' if w == 390 else 'medicines')
                    overflow(page, tag + ' set quiz score')
                # overflow on each screen mid-question
                go(page, '#/vocab'); page.select_option('#vqdeck', DECK)
                overflow(page, tag + ' quiz page'); shot(page, tag + '-quiz')
                for mode in ['context', 'type', 'recall']:
                    page.locator('#vqmode [data-vm="%s"]' % mode).click(); page.locator('#vqgo').click(); page.wait_for_timeout(150)
                    if mode == 'type':
                        page.fill('#vqtype', 'xx'); page.locator('#vqcheck').click()
                    else:
                        page.locator('#vq .opt').first.click()
                    overflow(page, tag + ' ' + mode + ' question'); shot(page, tag + '-' + mode)
                go(page, '#/vocab?tab=match'); overflow(page, tag + ' match list'); shot(page, tag + '-sets')
                go(page, '#/vocab?tab=match&set=idioms')
                page.locator('#vmshow').check(); overflow(page, tag + ' match round (words shown)'); shot(page, tag + '-match')
                go(page, '#/vocab?tab=match&set=idioms&mode=quiz'); page.locator('#vtgo').click(); page.wait_for_timeout(150)
                page.locator('#vtq .opt').first.click(); overflow(page, tag + ' set quiz'); shot(page, tag + '-setquiz')
        # decks: the In context mode is hidden for decks with fewer than 8 sentences
        fresh(page)
        go(page, '#/vocab'); page.select_option('#vqdeck', 'c-grammar'); page.wait_for_timeout(100)
        check(page.locator('#vqmode [data-vm="context"]').count() == 0, 'grammar deck: In context should be hidden')
        page.select_option('#vqdeck', 'mistakes'); page.wait_for_timeout(100)
        check(page.locator('#vqstat .notice').count() == 1 and page.locator('#vqgo').is_disabled(), 'empty My mistakes: notice and disabled Start')
        ctx.close()
    br.close()

for c in console:
    check(False, 'console: ' + c)
if errs:
    print('VOCAB SMOKE FAILED (%d)' % len(errs))
    sys.exit(1)
print('VOCAB SMOKE OK')
