# 0.8.0 phone screenshots: 390x844, 125% text, light and dark; contact sheets in OUT. python3 qa8.py [base] [out]
import sys, json
from playwright.sync_api import sync_playwright
from PIL import Image, ImageDraw
BASE = sys.argv[1] if len(sys.argv) > 1 else 'http://localhost:8767/index.html'
OUT = sys.argv[2] if len(sys.argv) > 2 else '/home/claude/scratch/qa8'
# (route, name, selector to scroll into view or '', js to run after load or '')
R = [('#/practice', 'practice', '', ''), ('#/pictures', 'pictures', '', ''), ('#/pictures/body-front', 'pic-learn', '', "(document.querySelector('#view svg [data-part], #view svg [role=button]')||{click(){}}).dispatchEvent(new MouseEvent('click',{bubbles:true}))"),
     ('#/pictures/body-front?tab=identify', 'pic-identify', '', ''), ('#/pictures/face?tab=label', 'pic-label', '', ''), ('#/pictures/hospital-floor?tab=listen', 'pic-listen', '', ''),
     ('#/pictures/meals-drinks', 'pic-cards', '', ''), ('#/pictures/living-room', 'pic-room', '', ''), ('#/pictures/body-front?tab=print', 'pic-print', '', ''), ('#/pictures/bodymap', 'bodymap', '', ''),
     ('#/lessons/body-donde-duele', 'lesson-pic', '.pic-embed', ''), ('#/lessons/ser-estar', 'lesson-extra', '.lx', ''), ('#/lessons/ser-estar', 'lesson-more', '#lq2', ''),
     ('#/vocab', 'vocab', '', ''), ('#/vocab?tab=match', 'vocab-sets', '', ''), ('#/vocab?tab=match&set=symptoms', 'vocab-match', '', ''),
     ('#/pairs', 'pairs-learn', '', ''), ('#/pairs?tab=match', 'pairs-match', '', ''), ('#/pairs?tab=quiz', 'pairs-quiz', '', ''),
     ('#/numbers', 'numbers', '', ''), ('#/numbers?tab=quiz', 'numbers-quiz', '', ''), ('#/numbers?tab=clinic', 'numbers-clinic', '', ''),
     ('#/progress', 'progress', '.ps-grid', ''), ('#/psych?tab=tools', 'ward-tools', '', ''), ('#/lessons?lv=A1', 'lessons-a1', '', '')]
SEED = """()=>{const d=App.state.done; d.vocab={'c-health:meaning':90,'c-health:recall':70,'c-health:context':60,'c-emotions:meaning':100,'c-emotions:type':45,'match:body':{m:1,t:38},'topic:body:meaning':92};
 d.pairs={'match:A1':100,'quiz:A1':80,'quiz:B1':60}; d.numbers={'clock:read':90,'clock:listen':70,'doses:read':100,'mixed:listen':65,clinic:80}; d.pictures={'identify:body-front':100,'label:body-front':70,'listen:hospital-floor':80,'identify:face':90};
 d.verbs=Object.assign({'A1:choose':90,'A1:type':60},d.verbs||{}); d.cloze=Object.assign({'A1':85,'l:ser-estar':100},d.cloze||{}); d.transform=Object.assign({'A2:choose':75},d.transform||{}); d.build=Object.assign({'A1':95},d.build||{}); d.lessonMore={'ser-estar':83}; App.save();}"""
report = {}
with sync_playwright() as p:
    b = p.chromium.launch()
    for theme in ['light', 'dark']:
        ctx = b.new_context(viewport={'width': 390, 'height': 844}, color_scheme=theme, device_scale_factor=2)
        page = ctx.new_page(); errs = []
        page.on('pageerror', lambda e: errs.append(str(e)))
        page.goto(BASE); page.wait_for_selector('#view h1')
        page.evaluate("(t)=>{App.state.settings.textSize='125';App.state.settings.theme=t;App.save();}", theme)
        page.evaluate(SEED); page.reload(); page.wait_for_selector('#view h1')
        for r, name, sel, js in R:
            errs.clear()
            page.evaluate("h=>{location.hash='#/about'; location.hash=h}", r); page.wait_for_timeout(500)
            if js: page.evaluate(js); page.wait_for_timeout(250)
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
print('QA8', 'OK' if not bad else 'ISSUES', len(R), 'pages x 2 themes')
