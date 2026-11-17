#!/usr/bin/env python3
"""Playwright smoke test for Picture words (#/pictures, js/pictures.js) and the body map / print sheets (js/picture-print.js),
Hablemos 0.8.0.
Usage: python3 pictures_smoke.py http://localhost:8774 [shot-dir]
Checks: the list page (one h1, a tile per set, level seg A1 / A2 / All), a diagram set and a cards set through Learn (tap a pin /
card: the word with its article in the panel and spoken), one full round each of Identify, Label it (Choose, and Type with
every answer typed without its article and without accents), and Listen and point, answered from the data; best scores in
App.state.done.pictures; the Print tab (numbered pins, filled-in labels, Letter @page when printing); the body map (two figures,
8 questions, 10 pain words, tapping a body part shows and speaks it); a .pic-embed mounted in a test container through
App.pictures.embed and App.mountPics; 390x844 and 1280x900, 100% and 125% text size, light and dark; no horizontal overflow;
no console errors (fonts.googleapis.com ignored). Prints PICTURES SMOKE OK."""
import sys, os, json
from playwright.sync_api import sync_playwright

BASE = (sys.argv[1] if len(sys.argv) > 1 else 'http://localhost:8774').rstrip('/')
SHOTS = sys.argv[2] if len(sys.argv) > 2 else ''
errs, console = [], []

SPY = '''() => { window.__said = []; const rec = (t) => { window.__said.push(String(t)); return Promise.resolve(); };
  App.speak = rec; App.speakAsync = rec; }'''


def check(cond, msg):
    if not cond:
        errs.append(msg)
        print('FAIL', msg)


def overflow(page, where):
    w = page.evaluate('() => [document.documentElement.scrollWidth, window.innerWidth]')
    check(w[0] <= w[1] + 1, where + ': horizontal overflow %s > %s' % tuple(w))
    wide = page.evaluate('''() => [...document.querySelectorAll('#view *')].filter(e => { if (e.closest('.pp-bm-paper')) return false; const r = e.getBoundingClientRect(); return r.width && r.right > window.innerWidth + 1; }).slice(0, 3).map(e => e.tagName + '.' + (e.className && e.className.baseVal != null ? e.className.baseVal : e.className))''')
    check(not wide, where + ': elements past the right edge ' + json.dumps(wide))


def fresh(page, size='100', theme='light'):
    page.goto(BASE + '/#/')
    page.evaluate('''([size, theme]) => { localStorage.clear(); localStorage.setItem('hablemos.v1', JSON.stringify({ settings: { textSize: size, theme: theme }, seenVersion: (window.APP_META || {}).version || '' })); }''', [size, theme])
    page.reload()
    page.wait_for_timeout(300)
    page.evaluate(SPY)


def go(page, hash_):
    page.evaluate('h => { location.hash = h; }', hash_)
    page.wait_for_timeout(250)


def last_said(page):
    return page.evaluate('() => window.__said[window.__said.length - 1] || ""')


def shot(page, name):
    if SHOTS:
        os.makedirs(SHOTS, exist_ok=True)
        page.screenshot(path=os.path.join(SHOTS, name + '.png'), full_page=True)


def click_part(page, root, pid):
    el = page.locator(root + ' .pic-pin[data-p="%s"] .pic-dot, %s .pic-card[data-p="%s"]' % (pid, root, pid)).first
    el.evaluate("e => e.scrollIntoView({ block: 'center' })")
    el.click(force=True)


def set_info(page, sid):
    return page.evaluate('id => { const s = App.pictures.get(id); return { kind: s.kind, parts: s.parts.map(p => [p.id, p.w]), say: (s.say || []).map(x => [x.es, x.p]) }; }', sid)


def finish_round(page, sid, mode, typed=False):
    """Answer every question of the current round right, from the data. Returns the number answered."""
    info = set_info(page, sid)
    by_w = {w: pid for pid, w in info['parts']}
    by_es = {es: pid for es, pid in info['say']}
    n = 0
    for _ in range(14):
        if page.locator('[data-act=new2]').count():
            break
        page.locator('.pic-round:not(.answered)').wait_for(timeout=4000)
        if mode == 'identify':
            pid = by_w.get(last_said(page))
            check(pid is not None, sid + ' identify: spoken word %r is not a part' % last_said(page))
            click_part(page, '.pic-round', pid)
        elif mode == 'listen':
            es = last_said(page)
            pid = by_es.get(es)
            check(pid is not None, sid + ' listen: spoken sentence %r is not a say line' % es)
            check(es not in page.locator('.pic-round').inner_text(), sid + ' listen: sentence text shown before answering')
            click_part(page, '.pic-round', pid)
        else:
            hl = page.locator('.pic-round .pic-pin.hl, .pic-round .pic-card.hl').first
            pid = hl.get_attribute('data-p')
            w = dict(info['parts'])[pid]
            if typed:
                bare = page.evaluate('''w => w.replace(/^(el|la|los|las) /, '').normalize('NFD').replace(/[\\u0300-\\u036f]/g, '')''', w)
                check(page.locator('.pic-round .tf-accents').count() == 1, sid + ' type: no accent bar')
                page.fill('.pic-in', bare)
                page.locator('.pic-type button[type=submit]').click()
                fb = page.locator('[data-fb] .feedback')
                fb.wait_for(timeout=3000)
                check('ok' in fb.get_attribute('class'), sid + ' type: %r for %r was not accepted' % (bare, w))
                if bare != page.evaluate('''w => w.replace(/^(el|la|los|las) /, '')''', w):
                    check('Check the accents' in fb.inner_text(), sid + ' type: no accents note for %r' % bare)
            else:
                opt = page.locator('.pic-round .opt[data-p="%s"]' % pid)
                check(opt.count() == 1, sid + ' choose: the right word is not among the options')
                check(page.locator('.pic-round .opt').count() == 4, sid + ' choose: not 4 options')
                opt.click()
        page.locator('[data-fb] .feedback').wait_for(timeout=3000)
        check('ok' in page.locator('[data-fb] .feedback').get_attribute('class'), '%s %s: right answer marked wrong' % (sid, mode))
        n += 1
        page.locator('[data-act=next]').click()
        page.wait_for_timeout(60)
    check(page.locator('[data-act=new2]').count() == 1, '%s %s: no score screen' % (sid, mode))
    return n


with sync_playwright() as pw:
    br = pw.chromium.launch()
    for vw, vh in [(390, 844), (1280, 900)]:
        for size, theme in [('100', 'light'), ('125', 'dark'), ('125', 'light')]:
            tag = '%dx%d-%s-%s' % (vw, vh, size, theme)
            ctx = br.new_context(viewport={'width': vw, 'height': vh})
            page = ctx.new_page()
            # 404s are judged by URL below (the private copy has no audio/ folder, so audio/manifest.json is ignored).
            page.on('console', lambda m: console.append(m.text) if m.type == 'error' and 'fonts.googleapis.com' not in m.text and 'Failed to load resource' not in m.text else None)
            page.on('response', lambda r: console.append('HTTP %d %s' % (r.status, r.url)) if r.status >= 400 and '/audio/' not in r.url and 'fonts.g' not in r.url else None)
            page.on('pageerror', lambda e: console.append(str(e)))
            page.on('requestfailed', lambda r: console.append('request failed ' + r.url) if 'fonts.g' not in r.url else None)
            fresh(page, size, theme)
            full = (tag == '390x844-125-light')

            # ---- list page ----
            go(page, '#/pictures')
            check(page.locator('#view h1').count() == 1, tag + ' list: not one h1')
            nsets = page.evaluate('App.pictures.sets().length')
            check(nsets >= 6, tag + ' list: fewer than 6 sets')
            check(page.locator('.pic-tile').count() == nsets, tag + ' list: %d tiles for %d sets' % (page.locator('.pic-tile').count(), nsets))
            check(page.locator('a[href="#/pictures/bodymap"]').count() >= 1, tag + ' list: no body map link')
            overflow(page, tag + ' list')
            page.locator('[data-plv=A1]').click(); page.wait_for_timeout(100)
            a1 = page.evaluate("App.pictures.sets().filter(s => s.lv === 'A1').length")
            check(page.locator('.pic-tile').count() == a1, tag + ' list: A1 filter shows %d, expected %d' % (page.locator('.pic-tile').count(), a1))
            check(page.evaluate('App.state.settings.picLv') == 'A1', tag + ' list: picLv not saved')
            page.locator('[data-plv=All]').click(); page.wait_for_timeout(100)
            if full:
                shot(page, tag + '-list')

            # ---- diagram set, Learn ----
            go(page, '#/pictures/body-front')
            check(page.locator('#view h1').count() == 1, tag + ' set: not one h1')
            check(page.locator('.pic-tabs a').count() == 5, tag + ' set: not 5 tabs')
            check(page.locator('.pic-svg .pic-pin').count() == 15, tag + ' body-front: not 15 pins')
            click_part(page, '#picTab', 'cabeza')
            page.wait_for_timeout(100)
            check('la cabeza' in page.locator('.pic-panel').inner_text(), tag + ' learn: panel does not show la cabeza')
            check(last_said(page) == 'la cabeza', tag + ' learn: spoke %r' % last_said(page))
            check(page.locator('.pic-panel a[href^="#/dict/"]').count() == 1, tag + ' learn: no dictionary link for la cabeza')
            page.locator('.pic-row[data-p=estomago]').click(); page.wait_for_timeout(100)
            check('la panza' in page.locator('.pic-panel').inner_text(), tag + ' learn: regional variant r not shown')
            check(page.locator('.pic-panel a[href^="#/dict/"]').count() == 1, tag + ' learn: no dictionary link for el estómago')
            overflow(page, tag + ' diagram learn')
            shot(page, tag + '-body-front')

            # ---- cards set, Learn ----
            cid = page.evaluate("(App.pictures.sets().find(s => s.kind === 'cards') || {}).id || ''")
            if cid:
                go(page, '#/pictures/' + cid)
                cinfo = set_info(page, cid)
                check(page.locator('.pic-card').count() == len(cinfo['parts']), tag + ' cards: card count')
                pid, w = cinfo['parts'][0]
                page.locator('.pic-card[data-p="%s"]' % pid).click(); page.wait_for_timeout(100)
                check(w in page.locator('.pic-panel').inner_text(), tag + ' cards learn: panel does not show %r' % w)
                check(last_said(page) == w, tag + ' cards learn: spoke %r' % last_said(page))
                overflow(page, tag + ' cards learn')
            else:
                print('note: no cards set loaded; cards checks skipped')

            # ---- quiz rounds (full only in one combination; a first question elsewhere) ----
            go(page, '#/pictures/body-front?tab=identify')
            overflow(page, tag + ' identify')
            if full:
                n = finish_round(page, 'body-front', 'identify')
                check(n == 10, 'identify: %d questions' % n)
                go(page, '#/pictures/body-back?tab=label')
                page.locator('[data-plab=choose]').click(); page.wait_for_timeout(100)
                finish_round(page, 'body-back', 'label')
                go(page, '#/pictures/face?tab=label')
                page.locator('[data-plab=type]').click(); page.wait_for_timeout(100)
                check(page.evaluate('App.state.settings.picLabel') == 'type', 'type: picLabel not saved')
                overflow(page, tag + ' type')
                shot(page, tag + '-type')
                finish_round(page, 'face', 'label', typed=True)
                lid = cid if cid and page.evaluate("id => (App.pictures.get(id).say || []).length >= 6", cid) else 'hand-arm'
                go(page, '#/pictures/%s?tab=listen' % lid)
                finish_round(page, lid, 'listen')
                done = page.evaluate('App.state.done.pictures')
                check(done.get('identify:body-front') == 100, 'score identify:body-front = %r' % done.get('identify:body-front'))
                check(done.get('label:body-back') == 100, 'score label:body-back = %r' % done.get('label:body-back'))
                check(done.get('label:face') == 100, 'score label:face = %r' % done.get('label:face'))
                check(done.get('listen:' + lid) == 100, 'score listen:%s = %r' % (lid, done.get('listen:' + lid)))
                check(isinstance(done.get('miss'), list), 'miss list missing')
                # A wrong answer goes to the mistakes list and offers a mistakes round.
                go(page, '#/pictures/inside?tab=label')
                page.locator('[data-plab=choose]').click(); page.wait_for_timeout(100)
                hl = page.locator('.pic-round .pic-pin.hl').first.get_attribute('data-p')
                page.locator('.pic-round .opt:not([data-p="%s"])' % hl).first.click()
                check('no' in page.locator('[data-fb] .feedback').get_attribute('class'), 'wrong answer not marked wrong')
                check(('inside:' + hl) in page.evaluate('App.state.done.pictures.miss'), 'wrong answer not in miss')
                go(page, '#/pictures')
                go(page, '#/pictures/inside?tab=label')
                check(page.locator('[data-act=mist]').count() == 1, 'no Practice my mistakes button')
                # Typed answer check function.
                ck = page.evaluate('''() => [App.pictures.check('estomago', 'el estómago'), App.pictures.check('El estómago.', 'el estómago'), App.pictures.check('la estómago', 'el estómago'), App.pictures.check('pecho', 'el estómago'), App.pictures.check('munecas', 'la muñeca')]''')
                check(ck == ['accents', 'ok', 'article', False, False], 'App.pictures.check results %r' % ck)
            else:
                page.locator('.pic-round').wait_for(timeout=3000)

            # ---- print tab ----
            go(page, '#/pictures/body-front?tab=print')
            check(page.locator('.pp-paper .pp-pin').count() == 15, tag + ' print: not 15 numbered pins')
            check(page.locator('.pp-page').count() == 2, tag + ' print: no answer key page')
            page.locator('[data-pp-set=fill][data-v=filled]').click(); page.wait_for_timeout(100)
            check('la cabeza' in page.locator('.pp-paper .pp-lines').inner_text(), tag + ' print: filled-in labels missing')
            check(page.locator('.pp-paper.pp-letter').count() == 1, tag + ' print: Letter is not the default')
            overflow(page, tag + ' print')
            if full:
                shot(page, tag + '-print')
                page.evaluate('() => { window.__printed = 0; window.print = () => { window.__printed++; }; }')
                page.locator('#ppPrint').click()
                pr = page.evaluate("() => [window.__printed, (document.getElementById('pagecss') || {}).textContent || '', document.documentElement.classList.contains('pp-print')]")
                check(pr[0] == 1 and 'letter' in pr[1] and pr[2], 'print: printWith did not run with Letter %r' % pr)
                page.evaluate("() => window.dispatchEvent(new Event('afterprint'))")
                check(not page.evaluate("document.documentElement.classList.contains('pp-print')"), 'print: pp-print class left after printing')

            # ---- body map ----
            go(page, '#/pictures/bodymap')
            check(page.locator('#view h1').count() == 1, tag + ' bodymap: not one h1')
            check(page.locator('.pp-bm > .pp-bm-figs .pp-bm-fig').count() == 2, tag + ' bodymap: not two figures')
            check(page.locator('.pp-bm-list li').count() == 8, tag + ' bodymap: not 8 questions')
            check(page.locator('.pp-chip').count() == 10, tag + ' bodymap: not 10 pain words')
            dot = page.locator('.pp-bm > .pp-bm-figs [data-pp-set-id=body-back] .pp-dot[data-pp-part=cintura] .pp-core')
            dot.evaluate("e => e.scrollIntoView({ block: 'center' })")
            dot.click(force=True)
            page.wait_for_timeout(100)
            check('la cintura' in page.locator('#ppBmShow').inner_text(), tag + ' bodymap: tapped part not shown')
            check(last_said(page) == 'la cintura', tag + ' bodymap: spoke %r' % last_said(page))
            page.locator('.pp-chip').nth(1).click()
            check(last_said(page) == page.evaluate('PICTURE_BODYMAP.words[1].es'), tag + ' bodymap: pain word not spoken')
            check(page.locator('.pp-bm-paper .pp-scale-row span').count() == 11, tag + ' bodymap: handout number line')
            overflow(page, tag + ' bodymap')
            shot(page, tag + '-bodymap')

            # ---- lesson embed in a test container ----
            go(page, '#/lessons')
            page.evaluate('''() => { const d = document.createElement('div'); d.id = 'embTest'; d.innerHTML = '<div class="lesson-body"><div class="pic-embed" data-pic="face"></div><div class="pic-embed" data-pic="nope"></div><div class="pic-embed" id="emb2"></div></div>'; document.getElementById('view').appendChild(d);
              App.mountPics(d); App.pictures.embed(document.getElementById('emb2'), 'hand-arm'); }''')
            check(page.locator('#embTest .pic-emb').count() == 2, tag + ' embed: expected 2 mounted embeds')
            check(page.locator('#embTest .pic-embed[data-pic=nope]').inner_html() == '', tag + ' embed: unknown id not left empty')
            page.locator('#embTest .pic-embed[data-pic=face] .pic-row[data-p=nariz]').click(); page.wait_for_timeout(100)
            check('la nariz' in page.locator('#embTest .pic-embed[data-pic=face] .pic-panel').inner_text(), tag + ' embed: panel not scoped / not shown')
            check(page.locator('#embTest #emb2 .pic-panel').inner_text().find('la nariz') < 0, tag + ' embed: second embed affected')
            overflow(page, tag + ' embed')
            ctx.close()
    br.close()

check(not console, 'console errors: ' + json.dumps(console[:5]))
if errs:
    print(len(errs), 'failure(s)')
    sys.exit(1)
print('PICTURES SMOKE OK')
