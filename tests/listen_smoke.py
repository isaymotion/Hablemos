"""Hablemos 0.9.0 smoke for #/listen (js/listen.js). Usage: python3 tests/listen_smoke.py http://localhost:8771/ [screenshot dir]
Runs every tab to its score screen (Hear: Everyday words, Clinical words, Sentences; Dictation: words and a sentence set with a
word-by-word comparison; Sound pairs; one dialogue and one reading of the story tab, with the text shown) at 390x844 and 1280x900,
light and dark, at 100% and 125% text size. Fails on JS errors, horizontal overflow, a missing score screen or a missing best score.
Prints LISTEN SMOKE OK."""
import sys, os
from playwright.sync_api import sync_playwright

ROOT = sys.argv[1] if len(sys.argv) > 1 else 'http://localhost:8771/'
if not ROOT.endswith('/'):
    ROOT += '/'
OUT = sys.argv[2] if len(sys.argv) > 2 else '/home/claude/scratch/listen-shots'
os.makedirs(OUT, exist_ok=True)
bad = []
IGNORE = ('fonts.googleapis.com', 'fonts.gstatic.com', 'audio/', 'Failed to load resource')


def overflow(page):
    return page.evaluate("""() => {
      const w = document.documentElement.clientWidth;
      if (document.documentElement.scrollWidth > w + 1) return 'page ' + document.documentElement.scrollWidth + '>' + w;
      for (const n of document.querySelectorAll('#view *')) {
        if (n.closest('[hidden]') || !n.getClientRects().length) continue;
        const r = n.getBoundingClientRect();
        if (r.right > w + 1 && getComputedStyle(n).position !== 'fixed') return (n.className || n.tagName) + ' right=' + Math.round(r.right);
      }
      return '';
    }""")


def run_quiz(page, where, tag):
    """App.runQuiz: answer (first option) until the score screen."""
    for _ in range(14):
        if page.locator(where + ' [data-act=retry]').count():
            return True
        page.locator(where + ' .opt').first.click()
        page.locator(where + ' [data-act=next]').click()
    return page.locator(where + ' [data-act=retry]').count() > 0


def setup(page, theme, size):
    page.goto(ROOT + 'index.html#/')
    page.wait_for_selector('#view h1', timeout=15000)
    page.evaluate("([t, s]) => { App.state.settings.theme = t; App.state.settings.textSize = s; App.state.done.listen2 = {}; App.save(); }", [theme, size])
    page.reload()
    page.wait_for_selector('#view h1', timeout=15000)


def go(page, h):
    page.evaluate("h => { location.hash = h; }", h)
    page.wait_for_timeout(250)


with sync_playwright() as p:
    b = p.chromium.launch()
    for vw, vh in [(390, 844), (1280, 900)]:
        for theme in ['light', 'dark']:
            for size in ['100', '125']:
                tag = f'{vw}-{theme}-{size}'
                ctx = b.new_context(viewport={'width': vw, 'height': vh}, device_scale_factor=1)
                page = ctx.new_page()
                errs = []
                page.on('pageerror', lambda e: errs.append('pageerror: ' + str(e)))
                page.on('console', lambda m: errs.append('console: ' + m.text) if m.type == 'error' and not any(x in m.text for x in IGNORE) else None)
                setup(page, theme, size)
                checks = []

                def note(name):
                    o = overflow(page)
                    if o:
                        bad.append((tag, name, 'overflow ' + o))

                # Hear: three sources (the level row shows only for sentences)
                for src in ['everyday', 'clinical', 'sentences']:
                    go(page, '#/listen')
                    page.click(f'#lpbody [data-src={src}]')
                    page.wait_for_timeout(100)
                    if src == 'sentences':
                        if page.locator('#lplvrow').is_hidden():
                            bad.append((tag, 'hear', 'level row hidden for sentences'))
                        page.locator('#lplvrow [data-lv]').last.click()
                        page.wait_for_timeout(100)
                    elif page.locator('#lplvrow').is_visible():
                        bad.append((tag, 'hear', 'level row shown for words'))
                    note('hear ' + src)
                    page.locator('#lpq .opt').first.click()
                    note('hear ' + src + ' answered')
                    page.locator('#lpq [data-act=next]').click()
                    if not run_quiz(page, '#lpq', tag):
                        bad.append((tag, 'hear ' + src, 'no score screen'))
                    note('hear ' + src + ' score')
                # Dictation: words (wrong answer, then I don't know) and sentences (wrong answer shows the comparison)
                for src in ['everyday', 'sentences']:
                    go(page, '#/listen?tab=dict')
                    page.click(f'#lpbody [data-src={src}]')
                    page.wait_for_timeout(100)
                    note('dict ' + src)
                    seen_cmp = False
                    for k in range(12):
                        if page.locator('#lpagain').count():
                            break
                        if k % 2 == 0:
                            page.fill('#lptype', 'la casa grande' if src == 'sentences' else 'xyz')
                            page.click('.tf-acc[data-ch="é"]')
                            page.click('#lpcheck')
                        else:
                            page.click('#lpidk')
                        if page.locator('.lp-cmp').count():
                            seen_cmp = True
                            note('dict compare')
                        page.click('#lpnext')
                    if not page.locator('#lpagain').count():
                        bad.append((tag, 'dict ' + src, 'no score screen'))
                    if src == 'sentences' and not seen_cmp:
                        bad.append((tag, 'dict', 'no word-by-word comparison'))
                    note('dict ' + src + ' score')
                # Sound pairs: one type, then all
                go(page, '#/listen?tab=pairs')
                page.locator('#lpbody [data-type]').nth(2).click()
                page.wait_for_timeout(100)
                note('pairs')
                for _ in range(12):
                    if page.locator('#lpagain').count():
                        break
                    page.locator('.lp-pick').first.click()
                    note('pairs answered')
                    page.click('#lpnext')
                if not page.locator('#lpagain').count():
                    bad.append((tag, 'pairs', 'no score screen'))
                # Story: the list, one dialogue, one reading
                go(page, '#/listen?tab=story')
                note('story list')
                tiles = page.locator('#lpbody a.tile')
                if tiles.count() < 18:
                    bad.append((tag, 'story', 'only %d texts listed' % tiles.count()))
                for sid in ['meet', 'hoja-de-alta']:
                    go(page, '#/listen?tab=story&id=' + sid)
                    page.click('#lpshow')
                    page.wait_for_timeout(100)
                    note('story ' + sid + ' text')
                    if not run_quiz(page, '#lpq', tag):
                        bad.append((tag, 'story ' + sid, 'no score screen'))
                    note('story ' + sid + ' score')
                keys = page.evaluate("Object.keys(App.state.done.listen2 || {}).sort()")
                for k in ['hear:words:everyday', 'hear:words:clinical', 'dict:words:everyday', 'story:meet', 'story:hoja-de-alta']:
                    if k not in keys:
                        bad.append((tag, 'scores', 'missing ' + k + ' in ' + ','.join(keys)))
                if not any(k.startswith('hear:sentences:') for k in keys) or not any(k.startswith('dict:sentences:') for k in keys) or not any(k.startswith('pairs:') for k in keys):
                    bad.append((tag, 'scores', 'missing sentence or pairs key: ' + ','.join(keys)))
                if size == '125' and theme == 'dark' or (size == '100' and theme == 'light'):
                    go(page, '#/listen?tab=pairs')
                    page.screenshot(path=f'{OUT}/pairs-{tag}.png')
                    go(page, '#/listen?tab=story')
                    page.screenshot(path=f'{OUT}/story-{tag}.png')
                if errs:
                    bad.append((tag, 'errors', errs[:3]))
                ctx.close()
    b.close()
for x in bad:
    print('BAD', x)
print('LISTEN SMOKE', 'OK' if not bad else 'FAIL', '8 runs (390/1280 x light/dark x 100/125%)')
sys.exit(1 if bad else 0)
