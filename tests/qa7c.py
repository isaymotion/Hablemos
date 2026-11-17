import sys, os, json
from playwright.sync_api import sync_playwright
from PIL import Image, ImageDraw
BASE='http://localhost:8767/index.html'; OUT='/home/claude/scratch/qa'
ROUTES=[('#/','home'),('#/psych','psych'),('#/psych?tab=cases','psych-cases'),('#/psych?tab=tools','psych-tools'),('#/psych?tab=print','psych-print'),
 ('#/psych/s/suicide','section'),('#/psych/point?s=suicide','point'),('#/psych/listen?s=depression','listen'),('#/psych/case/mateo','case'),('#/psych/interp','interp'),
 ('#/psych/handout','handout'),('#/psych/mse-sheet','mse-sheet'),('#/psych/sud','sud'),('#/psych/mood','mood'),('#/psych/withdrawal','withdrawal'),('#/psych/withdrawal?t=opioid','wd-opioid'),
 ('#/psych/deesc','deesc'),('#/psych/discharge','discharge'),('#/psych/dcases','dcases'),('#/psych/dcase/mateo','dcase'),('#/psych/mcases','mcases'),('#/psych/mcase/mateo','mcase'),
 ('#/dict','dict'),('#/dict?l=ñ','dict-enye'),('#/dict?q=ansiedad','dict-search'),('#/search?q=está','search-accent'),('#/search?q=esta','search-plain'),('#/search?q=nino','search-nino'),('#/search?q=niño','search-ninyo'),
 ('#/flash','flash'),('#/lessons','lessons'),('#/lessons/ser-estar','lesson'),('#/reading','reading'),('#/reading/la-llamada','reading-one'),('#/speak','speak'),('#/speak/meet','dialogue'),
 ('#/placement','placement'),('#/practice','practice'),('#/progress','progress'),('#/settings','settings'),('#/new','new'),('#/about','about'),('#/more','more')]
report={}
with sync_playwright() as p:
    b=p.chromium.launch()
    for theme in ['light','dark']:
        ctx=b.new_context(viewport={'width':390,'height':844},color_scheme=theme,device_scale_factor=1)
        page=ctx.new_page(); errs=[]
        page.on('pageerror',lambda e: errs.append(str(e)))
        page.goto(BASE); page.wait_for_selector('#view h1')
        page.evaluate("(t)=>{App.state.settings.textSize='125';App.state.settings.theme=t;App.save();}",theme)
        page.reload(); page.wait_for_selector('#view h1')
        for r,name in ROUTES:
            errs.clear()
            page.evaluate("h=>{location.hash=h}",r); page.wait_for_timeout(350)
            info=page.evaluate("""()=>{const W=document.documentElement.clientWidth;const over=[];document.querySelectorAll('#view *').forEach(e=>{const r=e.getBoundingClientRect();if(r.width>0&&(r.right>W+1||r.left<-1)){let p=e,sc=false;while(p&&p!==document.body){const s=getComputedStyle(p);if(/(auto|scroll|hidden)/.test(s.overflowX)&&p!==e){sc=true;break}p=p.parentElement}if(!sc)over.push((e.tagName+'.'+(e.className||'')).slice(0,60)+' r='+Math.round(r.right))}});
              return {sw:document.documentElement.scrollWidth,W,over:over.slice(0,5),h1:(document.querySelector('#view h1')||{}).innerText,fs:getComputedStyle(document.documentElement).fontSize,
              count:document.querySelectorAll('#view .tile, #view .row, #view li, #view .card').length, len:document.querySelector('#view').innerText.length, H:document.documentElement.scrollHeight}}""")
            info['errs']=errs[:2]; report[theme+' '+r]=info
            page.screenshot(path=f'{OUT}/{theme}-{name}.png',full_page=False)
            if name in ('flash','dict-enye','search-accent','about','search-nino'): page.screenshot(path=f'{OUT}/{theme}-{name}-full.png',full_page=True)
        ctx.close()
    b.close()
json.dump(report,open(OUT+'/report.json','w'),ensure_ascii=False,indent=1)
for k,v in report.items():
    if v['sw']>v['W'] or v['over'] or v['errs']: print('ISSUE',k,v['sw'],v['over'],v['errs'])
print('fs',set(v['fs'] for v in report.values()))
# contact sheets: 3 sheets per theme, 5 cols
names=[n for _,n in ROUTES]
for theme in ['light','dark']:
    for si in range(0,len(names),15):
        chunk=names[si:si+15]; cols=5; rows=(len(chunk)+cols-1)//cols; tw,th=312,675
        sheet=Image.new('RGB',(cols*(tw+8)+8,rows*(th+30)+8),'#888'); d=ImageDraw.Draw(sheet)
        for i,n in enumerate(chunk):
            im=Image.open(f'{OUT}/{theme}-{n}.png').resize((tw,th)); x=8+(i%cols)*(tw+8); y=8+(i//cols)*(th+30)
            sheet.paste(im,(x,y+22)); d.text((x+2,y+4),n,fill='white')
        sheet.save(f'{OUT}/sheet-{theme}-{si//15+1}.png')
