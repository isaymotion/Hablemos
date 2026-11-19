const fs=require('fs');
const src=Object.assign({},require('./errors-src.js'),require('./errors-src2.js'));
const q=s=>"'"+s.replace(/\\/g,'\\\\').replace(/'/g,"\\'")+"'";
const out='/home/claude/hablemos/js/data/';
for(const L of ['A1','A2','B1','B2']){
  const rows=src[L], lc=L.toLowerCase(); let body=[];
  rows.forEach((r,n)=>{
    const [type,lesson,bad,fix,en,why]=r;
    const b=bad.split(' '), f=fix.split(' ');
    let i=-1,kind;
    if(b.length===f.length){kind='sub';const d=b.map((w,k)=>w!==f[k]?k:-1).filter(k=>k>=0);if(d.length!==1)throw new Error(L+(n+1)+' diff '+d);i=d[0];}
    else if(f.length===b.length+1){kind='ins';let k=0;while(b[k]===f[k])k++;if(JSON.stringify(b.slice(k))!==JSON.stringify(f.slice(k+1)))throw new Error(L+(n+1)+' ins');i=k-1;}
    else throw new Error(L+(n+1)+' len');
    if(bad===fix) throw new Error(L+(n+1)+' same');
    const id='e-'+lc+'-'+String(n+1).padStart(3,'0');
    body.push("  { id: "+q(id)+", lv: "+q(L)+(lesson?", l: "+q(lesson):'')+", type: "+q(type)+",\n    bad: "+q(bad)+", i: "+i+",\n    fix: "+q(fix)+",\n    en: "+q(en)+", why: "+q(why)+" }");
  });
  const hdr="/* Find the mistake, level "+L+", "+rows.length+" items e-"+lc+"-001 … e-"+lc+"-"+String(rows.length).padStart(3,'0')+". Shape: { id, lv, l (lesson id), type, bad (one wrong word at index i, words split on single spaces), i, fix (the sentence put right), en, why }. DRAFT FOR REVIEW by a native Spanish-speaking clinician. Ids are permanent: append only after release. */\n";
  fs.writeFileSync(out+'grammar-errors-'+lc+'.js',hdr+"window.GRAMMAR_ERRORS = (window.GRAMMAR_ERRORS || []).concat([\n"+body.join(',\n')+"\n]);\n");
}
