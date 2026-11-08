"""Hablemos scaffold smoke: every route in two viewports, no JS errors, no 'Something went wrong', screenshots of key pages."""
import sys, os
from playwright.sync_api import sync_playwright
BASE = sys.argv[1] if len(sys.argv) > 1 else 'http://localhost:8767/index.html'
OUT = sys.argv[2] if len(sys.argv) > 2 else '/home/claude/scratch/hb'
os.makedirs(OUT, exist_ok=True)
ROUTES = ['#/', '#/search?q=sentir', '#/dict', '#/flash', '#/flash/due', '#/flash/mistakes', '#/lessons', '#/reading', '#/speak', '#/psych', '#/psych?tab=cases', '#/psych?tab=tools', '#/psych?tab=print',
          '#/psych/cases', '#/psych/interp', '#/psych/listen', '#/psych/point', '#/psych/handout', '#/psych/mse-sheet', '#/psych/sud', '#/psych/mood', '#/psych/withdrawal', '#/psych/deesc', '#/psych/discharge',
          '#/psych/dcases', '#/psych/mcases', '#/placement', '#/progress', '#/settings', '#/new', '#/about', '#/practice', '#/more', '#/nope']
SHOTS = {'#/': 'home', '#/psych': 'psych', '#/psych?tab=tools': 'tools', '#/about': 'about', '#/more': 'more', '#/settings': 'settings', '#/psych/mood': 'mood'}
bad = []
with sync_playwright() as p:
    b = p.chromium.launch()
    for vp, dark in [((390, 844), False), ((1280, 900), True)]:
        ctx = b.new_context(viewport={'width': vp[0], 'height': vp[1]}, color_scheme='dark' if dark else 'light', device_scale_factor=1)
        page = ctx.new_page()
        errs = []
        page.on('pageerror', lambda e: errs.append('pageerror: ' + str(e)))
        page.on('console', lambda m: errs.append('console: ' + m.text) if m.type == 'error' else None)
        page.goto(BASE)
        page.wait_for_selector('#view h1', timeout=10000)
        for r in ROUTES:
            errs.clear()
            page.evaluate("h => { location.hash = h; }", r)
            page.wait_for_timeout(250)
            txt = page.inner_text('#view')
            if 'Something went wrong' in txt or (r != '#/nope' and 'Page not found' in txt) or errs:
                bad.append((vp[0], r, errs[:3], txt[:120].replace('\n', ' ')))
            if r in SHOTS:
                page.screenshot(path=f'{OUT}/{SHOTS[r]}-{vp[0]}.png', full_page=False)
        # drawer / More tab on phone
        if vp[0] < 1100:
            page.evaluate("location.hash='#/'"); page.wait_for_timeout(200)
            page.click('#tabMore'); page.wait_for_timeout(300)
            page.screenshot(path=f'{OUT}/drawer-{vp[0]}.png')
            page.click('#navClose')
        ctx.close()
    b.close()
for x in bad: print('BAD', x)
print('HB SMOKE', 'OK' if not bad else 'FAIL', len(ROUTES), 'routes x 2 viewports')

# ---- content checks (run only when sections exist) ----
with sync_playwright() as p:
    b = p.chromium.launch()
    ctx = b.new_context(viewport={'width': 390, 'height': 844})
    page = ctx.new_page(); errs = []
    page.on('pageerror', lambda e: errs.append(str(e)))
    page.goto(BASE); page.wait_for_selector('#view h1')
    n = page.evaluate("(window.PSYCH_SECTIONS||[]).length")
    if n:
        for r in ['#/psych/s/suicide', '#/psych/s/depression?p=5', '#/psych/point?s=suicide', '#/psych/listen?s=depression', '#/flash/psych', '#/psych/handout', '#/psych/s/shea-techniques', '#/psych/mse-sheet', '#/psych/s/mse-cog', '#/psych/s/closing', '#/psych/point?s=substance']:
            page.evaluate("h => { location.hash = h; }", r); page.wait_for_timeout(300)
            txt = page.inner_text('#view')
            if 'Something went wrong' in txt or errs: print('BAD', r, errs[:2]); bad.append(r)
        page.evaluate("location.hash='#/psych/s/suicide'"); page.wait_for_timeout(300)
        page.click('[data-m=quiz]'); page.wait_for_timeout(200)
        assert page.locator('.opt').count() == 4, 'quiz options'
        page.screenshot(path=f'{OUT}/section-390.png')
        page.evaluate("location.hash='#/psych/point?s=hallucinations'"); page.wait_for_timeout(300)
        page.screenshot(path=f'{OUT}/point-390.png')
        page.evaluate("location.hash='#/psych/mse-sheet'"); page.wait_for_timeout(400)
        n_sec = page.locator('.ms-sec').count(); print('mse sheet sections', n_sec)
        if n_sec < 10: bad.append('mse sheet')
        page.screenshot(path=f'{OUT}/msesheet-390.png')
        # handout PDF
        page.evaluate("location.hash='#/psych/handout'"); page.wait_for_timeout(500)
        pages = page.evaluate("""async () => { const o = Object.assign({}, App.handoutDoc ? {} : {}); 
            await App.pdfKit.load(); const dd = App.handoutDoc(Object.assign({preset:'full', english:'show', register:'f', notes:true, answers:false, title:'Entrevista psiquiátrica en español', preparedFor:''}, {steps: PSYCH_FLOW.map(s=>s.id), depth:'key', overview:true, mse:true, idioms:false, form:false}));
            return await new Promise(res => pdfMake.createPdf(dd).getBuffer(buf => res(buf.length))); }""")
        print('handout pdf bytes', pages)
        if not pages or pages < 10000: bad.append('handout pdf')
    # ---- pass 4 clinical tools (run only when their data exists) ----
    def go(h, ms=350):
        errs.clear(); page.evaluate("h => { location.hash = h; }", h); page.wait_for_timeout(ms)
        t = page.inner_text('#view')
        if 'Something went wrong' in t or errs: print('BAD', h, errs[:2]); bad.append(h)
        return t
    tools = page.evaluate("({mood:!!(window.PSYCH_MOOD&&PSYCH_MOOD.mde.length), sud:!!(window.PSYCH_SUD&&PSYCH_SUD.substances.length), wd:!!(window.PSYCH_WD&&PSYCH_WD.ALC_ASK.length), de:!!(window.PSYCH_DEESC&&PSYCH_DEESC.steps.length), di:!!(window.PSYCH_DISCHARGE&&PSYCH_DISCHARGE.fields.length)})")
    print('tools present', tools)
    if tools['mood']:
        go('#/psych/mood'); page.click('[data-yn=mde][data-n="1"][data-v="1"]'); page.wait_for_timeout(150)
        assert 'gate' in page.inner_text('.sd-result').lower(), 'mood gate'
        for t in ['man', 'mdq', 'phq']: page.click(f'[data-tab={t}]'); page.wait_for_timeout(200); assert not errs, errs
        page.click('[data-phq="8"][data-pts="1"]'); page.wait_for_timeout(150); assert 'Item 9' in page.inner_text('#view'), 'phq item 9 notice'
        page.screenshot(path=f'{OUT}/mood-tool-390.png')
    if tools['sud']:
        go('#/psych/sud'); assert page.locator('[data-sub]').count() >= 6, 'sud substances'
        for sid in ['opioids', 'gambling', 'alcohol']:
            page.click(f'[data-sub={sid}]'); page.wait_for_timeout(200); assert not errs, errs
        page.click('[data-crit="1"][data-v="1"]'); page.click('[data-crit="2"][data-v="1"]'); page.wait_for_timeout(150)
        assert 'mild' in page.inner_text('.sd-result').lower(), 'sud severity'
        page.click('[data-tab=mi]'); page.wait_for_timeout(200); page.click('#miNext'); page.wait_for_timeout(150)
        page.click('[data-tab=learn]'); page.wait_for_timeout(200); assert not errs, errs
        page.click('[data-role=nurse]'); page.wait_for_timeout(200); page.click('[data-role=resident]'); page.wait_for_timeout(150)
        page.screenshot(path=f'{OUT}/sud-tool-390.png')
        go('#/psych/mse-sheet', 500); n2 = page.locator('.ms-sec').count(); print('mse sheet sections with SUD', n2)
        if n2 < 20: bad.append('mse sheet sud pages')
    if tools['wd']:
        go('#/psych/withdrawal')
        for t in ['alcohol', 'cannabis', 'opioid', 'agitation', 'special', 'cases', 'quick']:
            page.click(f'[data-tab={t}]'); page.wait_for_timeout(250); assert not errs, (t, errs)
            for sb in page.locator('[data-sub]').all()[:3]: sb.click(); page.wait_for_timeout(150); assert not errs, (t, errs)
        page.click('[data-tab=opioid]'); page.click('[data-sub=assess]'); page.wait_for_timeout(200)
        page.click('[data-cw][data-v="2"]'); page.wait_for_timeout(150); assert 'COWS 2/48' in page.input_value('#wdOpiNote'), 'cows chart line'
        page.screenshot(path=f'{OUT}/wd-opioid-390.png')
        page.click('[data-role=nurse]'); page.wait_for_timeout(250); assert not errs, errs; page.click('[data-role=resident]'); page.wait_for_timeout(150)
    if tools['de']:
        go('#/psych/deesc'); page.click('[data-s="0"]'); page.click('[data-out=failed]'); page.wait_for_timeout(200)
        note = page.input_value('#dzNote'); assert 'Escalated' in note and 'NOD' not in note, 'deesc note'
        for t in ['drill', 'after', 'practice']: page.click(f'[data-tab={t}]'); page.wait_for_timeout(200); assert not errs, errs
        page.screenshot(path=f'{OUT}/deesc-390.png')
    if tools['di']:
        go('#/psych/discharge'); assert page.locator('[data-pick]').count() >= 1, 'discharge picks'
        page.locator('[data-pick]').first.click(); page.wait_for_timeout(150)
        for g in page.locator('[data-go]').all()[:3]: g.click(); page.wait_for_timeout(150); assert not errs, errs
        page.screenshot(path=f'{OUT}/discharge-390.png')
    if tools['de'] or tools['di']:
        go('#/psych/handout', 500)
        for preset in ['deesccard', 'discharge', 'risk']:
            nb = page.evaluate("""async (k) => { await App.pdfKit.load(); const o = Object.assign({english:'show', register:'f', notes:true, answers:false, title:'t', preparedFor:''}, (await (async()=>App.handoutPresets ? App.handoutPresets[k].o : null)()) || {});
                const dd = App.handoutDoc(Object.assign(o, {preset:k})); return await new Promise(res => pdfMake.createPdf(dd).getBuffer(buf => res(buf.length))); }""", preset)
            print('handout', preset, 'pdf bytes', nb)
            if not nb or nb < 5000: bad.append('handout ' + preset)
    ctx.close(); b.close()
print('HB CONTENT', 'OK' if not bad else 'FAIL')
