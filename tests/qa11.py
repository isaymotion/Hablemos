# 0.10.0 and 0.11.0 phone screenshots: 390x844, 125% text, light and dark; contact sheets in OUT. python3 qa11.py [base] [out]
import sys, json
from playwright.sync_api import sync_playwright
from PIL import Image, ImageDraw
BASE = sys.argv[1] if len(sys.argv) > 1 else 'http://localhost:8767/index.html'
OUT = sys.argv[2] if len(sys.argv) > 2 else '/home/claude/scratch/qa11'
# (route, name, selector to scroll into view or '', js to run after load or '')
R = [('#/psych', 'psych-nurse-role', '', ''), ('#/psych/s/nurse-meds', 'nurse-section', '', ''), ('#/psych/deesc', 'deesc-nurse', '', ''), ('#/psych/discharge', 'discharge-nurse', '', ''),
     ('#/psych/mood', 'mood-nurse', '', ''), ('#/psych/mse-sheet', 'admit-nurse', '', ''), ('#/psych/handout?nursecard=1', 'nurse-card', '#hoPaper', ''), ('#/psych/cases', 'cases-list', '', ''),
     ('#/psych/case/nurse-night', 'nurse-case', '', ''), ('#/psych/case/karla', 'case-karla', '', "document.querySelector('.opt') && document.querySelector('.opt').click()"),
     ('#/psych/eot', 'eot-list', '', ''), ('#/psych/ecase/ocd', 'eot-case', '', "(document.querySelector('[data-ask]')||{click(){}}).click()"),
     ('#/psych/ecase/camila', 'eot-compare', '', "document.querySelector('.ds-chip.sum').click()"), ('#/psych/mcase/camila', 'mse-camila', '', ''), ('#/psych/mcases', 'mse-list', '', ''),
     ('#/psych/dcases', 'discharge-list', '', ''), ('#/psych/s/eot', 'eot-section', '', ''), ('#/psych/interp', 'interp', '', "(document.querySelector('[data-m=list]')||{click(){}}).click()"),
     ('#/psych?tab=cases', 'psych-practice-tab', '', ''), ('#/psych/point?s=nurse-daily', 'point-nurse', '', ''),
     ('#/practice', 'practice', '', ''), ('#/errors', 'errors-start', '', ''), ('#/errors', 'errors-question', '', "document.querySelector('#ergo').click()"),
     ('#/errors', 'errors-answer', '', "document.querySelector('#ergo').click(); setTimeout(()=>document.querySelectorAll('.er-tile')[1].click(),150)"),
     ('#/reply', 'reply-start', '', ''), ('#/reply', 'reply-question', '', "document.querySelector('#rpgo').click()"),
     ('#/reply', 'reply-answer', '', "document.querySelector('#rpgo').click(); setTimeout(()=>{const o=document.querySelector('#rpround .opt, #rpround [data-opt], #rpround .dr-opt'); if(o) o.click();},300)"),
     ('#/lessons/preterite-regular', 'lesson-extras', '.lx', ''), ('#/lessons/position-words', 'picture-lesson-extras', '.lx', ''), ('#/reading', 'reading-list', '', ''),
     ('#/reading/entre-dos-idiomas', 'reading-new', '', ''), ('#/speak', 'speak-list', '', ''), ('#/speak/delusion-without-arguing', 'dialogue-new', '', ''),
     ('#/listen?tab=story', 'listen-stories', '', ''), ('#/cloze?tab=lessons', 'cloze-lessons', '', ''), ('#/dict/' + 'DICTID', 'word-example', '', ''),
     ('#/progress', 'progress', '.ps-grid', ''), ('#/new', 'whats-new', '', ''), ('#/more', 'more-menu', '', ''), ('#/search?q=nurse', 'search-nurse', '', '')]
SEED = """()=>{const d=App.state.done; d.vocab={'c-health:meaning':90,'c-health:recall':70,'c-health:context':60,'c-emotions:meaning':100,'c-emotions:type':45,'match:body':{m:1,t:38},'topic:body:meaning':92};
 d.pairs={'match:A1':100,'quiz:A1':80,'quiz:B1':60}; d.numbers={'clock:read':90,'clock:listen':70,'doses:read':100,'mixed:listen':65,clinic:80}; d.pictures={'identify:body-front':100,'label:body-front':70,'listen:hospital-floor':80,'identify:face':90};
 d.verbs=Object.assign({'A1:choose':90,'A1:type':60},d.verbs||{}); d.cloze=Object.assign({'A1':85,'l:ser-estar':100},d.cloze||{}); d.transform=Object.assign({'A2:choose':75},d.transform||{}); d.build=Object.assign({'A1':95},d.build||{}); d.lessonMore={'ser-estar':83}; d.listen2={'hear:words:clinical':90,'hear:sentences:A1':80,'dict:sentences:A1':70,'pairs:all':85,'story:meet':100,'story:la-cita':67}; d.test={A1:82,A2:64}; d.testInfo={A1:{best:82,of:44,areas:{grammar:[14,16],verbs:[5,6],vocab:[10,12],listening:[3,4],reading:[4,6]}},A2:{best:64,of:44,areas:{grammar:[10,16],verbs:[3,6],vocab:[8,12],listening:[3,4],reading:[4,6]}}}; App.save();}"""
report = {}
with sync_playwright() as p:
    b = p.chromium.launch()
    for theme in ['light', 'dark']:
        ctx = b.new_context(viewport={'width': 390, 'height': 844}, color_scheme=theme, device_scale_factor=2)
        page = ctx.new_page(); errs = []
        page.on('pageerror', lambda e: errs.append(str(e)))
        page.goto(BASE); page.wait_for_selector('#view h1')
        page.evaluate("(t)=>{App.state.settings.textSize='125';App.state.settings.theme=t;App.save();}", theme)
        page.evaluate(SEED); page.evaluate("()=>{App.state.settings.role='nurse'; const d=App.state.done; d.errors={all:80,A1:90,B1:60}; d.reply={'clinical:all':70,'everyday:A1':100}; App.save();}"); page.reload(); page.wait_for_selector('#view h1')
        did = page.evaluate("()=>{const e=App.DICT.find(x=>x.tl==='a poco'); return e?e.id:''}")
        for r, name, sel, js in R:
            r = r.replace('DICTID', did)
            errs.clear()
            page.evaluate("h=>{location.hash='#/about'; location.hash=h}", r); page.wait_for_timeout(500)
            if js: page.evaluate(js); page.wait_for_timeout(800)
            if sel:
                page.evaluate("s=>{const e=document.querySelector(s); if(e){const y=e.getBoundingClientRect().top+scrollY-110; scrollTo(0,y);}}", sel); page.wait_for_timeout(250)
            info = page.evaluate("""()=>{const W=document.documentElement.clientWidth;const over=[];document.querySelectorAll('#view *').forEach(e=>{const r=e.getBoundingClientRect();if(r.width>0&&(r.right>W+1||r.left<-1)&&!e.closest('.tablewrap, .ptabs'))over.push(e.tagName+'.'+String(e.className).slice(0,30))});
              return {sw:document.documentElement.scrollWidth,W,over:over.slice(0,5),h1:(document.querySelector('#view h1')||{}).innerText}}""")
            info['errs'] = errs[:2]; report[theme + ' ' + name] = info
            page.screenshot(path=f'{OUT}/{theme}-{name}.png', full_page=False)
        ctx.close()
    b.close()
bad = [(k, v) for k, v in report.items() if v['sw'] > v['W'] or v['over'] or v['errs']]
for k, v in bad: print('ISSUE', k, v)
names = [n for _, n, _, _ in R]
for theme in ['light', 'dark']:
    per = 5 if theme == 'light' else 5
    for si in range(0, len(names), 10):
        chunk = names[si:si + 10]; cols = 5; rows = (len(chunk) + cols - 1) // cols; tw, th = 390, 844
        sheet = Image.new('RGB', (cols * (tw + 10) + 10, rows * (th + 34) + 10), '#777'); d = ImageDraw.Draw(sheet)
        for i, n in enumerate(chunk):
            im = Image.open(f'{OUT}/{theme}-{n}.png').resize((tw, th)); x = 10 + (i % cols) * (tw + 10); y = 10 + (i // cols) * (th + 34)
            sheet.paste(im, (x, y + 24)); d.text((x + 2, y + 6), n, fill='white')
        sheet.save(f'{OUT}/sheet-{theme}-{si // 10 + 1}.png')
print('QA11', 'OK' if not bad else 'ISSUES', len(R), 'pages x 2 themes')
