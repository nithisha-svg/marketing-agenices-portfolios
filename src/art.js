/* The seven case-study plates and the decorative QR mark.
   Each plate is a 400x300 SVG built as an HTML string, exactly as in the
   original single-file version; panels inject it with dangerouslySetInnerHTML. */

const VIOLET="#7064d6", INK="#1e2024", GREY="#7d828b", SOFT="#5b5f67", LINE="#e3e5e9", GREEN="#2f9e6b", AMBER="#d9962b", RED="#d2493f";
const T=(x,y,s,o={})=>`<text x="${x}" y="${y}" font-size="${o.s||8}" fill="${o.f||INK}" font-weight="${o.w||400}" text-anchor="${o.a||"start"}"${o.ls!=null?` letter-spacing="${o.ls}"`:""}${o.fl?` filter="url(#${o.fl})"`:""}${o.op!=null?` opacity="${o.op}"`:""}>${s}</text>`;
const R=(x,y,w,h,f,o={})=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.r||0}" fill="${f}"${o.st?` stroke="${o.st}" stroke-width="${o.sw||1}"`:""}${o.da?` stroke-dasharray="${o.da}"`:""}${o.op!=null?` opacity="${o.op}"`:""}/>`;
const L=(x1,y1,x2,y2,c,w=1,da)=>`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="${w}"${da?` stroke-dasharray="${da}"`:""}/>`;
const CURSOR=(x,y)=>`<path transform="translate(${x},${y})" d="M0 0L0 13.5L3.6 10.2L6.2 15.6L8.4 14.6L5.8 9.4L10.4 9.4Z" fill="${INK}" stroke="#fff" stroke-width="1" stroke-linejoin="round"/>`;
let uid=0;
function svg(body,dark){
  const id="s"+(++uid);
  return {id, open:`<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs>
    <filter id="${id}" x="-15%" y="-15%" width="130%" height="140%"><feDropShadow dx="0" dy="8" stdDeviation="9" flood-color="#232a33" flood-opacity="${dark?.55:.16}"/></filter>
    <filter id="${id}b"><feGaussianBlur stdDeviation="1.7"/></filter></defs>`, close:"</svg>"};
}
function win(x,y,w,h,dark,title,fid){
  const bg=dark?"#1f2125":"#fff", bar=dark?"#26282d":"#f6f7f9", bd=dark?"#30333a":"#d9dce1", tc=dark?"#7d828b":"#8b9098";
  return `<g filter="url(#${fid})">${R(x,y,w,h,bg,{r:8,st:bd})}</g>
    <path d="M${x+.5} ${y+18.5}V${y+8}a7.5 7.5 0 0 1 7.5-7.5H${x+w-8}a7.5 7.5 0 0 1 7.5 7.5V${y+18.5}Z" fill="${bar}"/>
    ${L(x+.5,y+18.5,x+w-.5,y+18.5,bd)}
    <circle cx="${x+10}" cy="${y+9.5}" r="2.6" fill="${dark?"#43464d":"#d5d8dd"}"/><circle cx="${x+18}" cy="${y+9.5}" r="2.6" fill="${dark?"#43464d":"#d5d8dd"}"/><circle cx="${x+26}" cy="${y+9.5}" r="2.6" fill="${dark?"#43464d":"#d5d8dd"}"/>
    ${T(x+w/2,y+12,title,{s:6,f:tc,a:"middle"})}`;
}
function phone(x,y,w,h,fid){
  return `<g filter="url(#${fid})">${R(x,y,w,h,"#1e2024",{r:20})}</g>${R(x+5,y+5,w-10,h-10,"#fff",{r:15.5})}${R(x+w/2-16,y+9,32,7,"#1e2024",{r:3.5})}`;
}

/* ---------- the seven plates ---------- */
export const ART = {
run(){
  const s=svg(); let b=win(28,22,344,262,false,"Tessel — Agent runs",s.id);
  b+=R(28.5,40.5,74,243,"#f6f7f9",{r:0});
  b+=T(38,56,"Tessel",{s:8,w:700,ls:-.2});
  ["Home","Agents","Runs","Approvals","Evals"].forEach((n,i)=>{
    const y=72+i*14; if(i===2) b+=R(33,y-9,64,13,"#e6e8ec",{r:3});
    b+=T(38,y,n,{s:6.5,f:i===2?INK:SOFT,w:i===2?600:400});
  });
  b+=T(114,60,"Run #4821 · Month-end close",{s:11,w:600,ls:-.3});
  b+=T(114,72,"Reconciling 1,284 invoices against the ledger",{s:6.3,f:SOFT});
  b+=L(135,96,240,96,INK,1.4)+L(240,96,340,96,"#b7bbc2",1.4,"3 3");
  b+=`<circle cx="135" cy="96" r="4" fill="${INK}"/>`;
  b+=`<circle cx="240" cy="96" r="4" fill="none" stroke="${VIOLET}" stroke-width="1.2"><animate attributeName="r" values="4;10" dur="1.8s" repeatCount="indefinite"/><animate attributeName="opacity" values=".9;0" dur="1.8s" repeatCount="indefinite"/></circle><circle cx="240" cy="96" r="4" fill="${VIOLET}"/>`;
  b+=`<circle cx="340" cy="96" r="3.6" fill="#fff" stroke="#9ca1a9" stroke-width="1.2"/>`;
  [[135,"Read ledger","312 entries","00:42"],[240,"Matching","1,104 of 1,284","now"],[340,"Draft report","queued","next"]].forEach(([x,a,m,d])=>{
    b+=T(x,113,a,{s:6.5,w:600,a:"middle"})+T(x,122,m,{s:6.2,f:SOFT,a:"middle"})+T(x,130.5,d,{s:5.8,f:GREY,a:"middle"});
  });
  let d="M150 144H320V266"; for(let x=320;x>150;x-=10) d+=`L${x-5} 272L${x-10} 266`; d+="Z";
  b+=`<g filter="url(#${s.id})"><path d="${d}" fill="#fff" stroke="#dcdfe3"/></g>`;
  b+=`<path d="M233 144L240 137L247 144Z" fill="#fff"/>`;
  b+=T(162,161,"Run so far",{s:7,w:600})+T(308,161,"Working",{s:6,f:VIOLET,a:"end",w:500});
  [["Tool calls","1,926"],["Matched on its own","1,104"],["Sent to you to check","38"]].forEach(([k,v],i)=>{
    const y=180+i*13; b+=T(162,y,k,{s:6.3,f:SOFT})+T(308,y,v,{s:6.3,a:"end"});
  });
  b+=L(162,214,308,214,"#c9cdd3",.8,"2 2");
  b+=T(162,229,"Confidence",{s:8,w:600})+T(308,229,"High",{s:8,w:700,a:"end"});
  b+=T(162,246,"Model · tessel-fin-2",{s:5.8,f:GREY})+T(308,246,"Cost so far €3.12",{s:5.8,f:GREY,a:"end"});
  return s.open+b+s.close;
},
approvals(){
  const s=svg("",true); const lt="#f2f3f5", sf="#a7abb2";
  let b=win(28,22,344,262,true,"Approval queue",s.id);
  b+=T(44,60,"Approval queue",{s:12,w:600,f:lt,ls:-.3})+T(356,60,"24 waiting",{s:7,f:sf,a:"end"});
  [["All",true],["Low confidence",false],["Over €1,000",false]].forEach(([n,on],i)=>{
    const x=[44,68,127][i], w=n.length*3.4+12;
    b+=R(x,68,w,13,on?"#f2f3f5":"none",{r:6.5,st:on?null:"#3a3d44"})+T(x+w/2,77,n,{s:6,f:on?INK:sf,a:"middle",w:500});
  });
  b+=T(44,98,"Sure",{s:5.8,f:GREY})+T(84,98,"Vendor",{s:5.8,f:GREY})+T(176,98,"Agent wants to",{s:5.8,f:GREY})+T(356,98,"Amount",{s:5.8,f:GREY,a:"end"});
  const rows=[[RED,41,"Studio Verde","Pay invoice","€2,480.00"],[RED,52,"Noordlicht BV","Refund","€960.50"],[AMBER,63,"Kade &amp; Co","Write off","€312.00"],[AMBER,68,"Hollands Glas","Pay invoice","€1,145.90"],[AMBER,74,"Atelier Mos","Merge duplicate","€86.40"],["#6e737b",88,"Fietsplaats","Pay invoice","€44.00"],["#6e737b",91,"Bakkerij Om","Recode expense","€19.95"],["#6e737b",96,"Velt Studio","Pay invoice","€230.00"]];
  rows.forEach(([c,sc,n,act,a],i)=>{
    const y=103+i*21;
    b+=L(36,y,364,y,"#2c2f35");
    if(i===1) b+=R(36,y+.5,328,20.5,"#2a2d33")+R(36,y+.5,2.5,20.5,lt);
    b+=`<circle cx="48" cy="${y+10.5}" r="3" fill="${c}"/>`;
    b+=T(57,y+13,sc+"%",{s:6.5,f:lt,w:500});
    b+=T(84,y+13,n,{s:7,f:"#d9dbdf",fl:s.id+"b"});
    b+=T(176,y+13,act,{s:6.3,f:"#c4c7cd"});
    b+=T(356,y+13,a,{s:6.8,f:lt,a:"end",w:500});
  });
  b+=R(258,y0(1)+4,40,13,"#f2f3f5",{r:6.5})+T(278,y0(1)+12.6,"Approve",{s:5.8,f:INK,a:"middle",w:600});
  return s.open+b+s.close;
  function y0(i){return 103+i*21;}
},
routing(){
  const s=svg(); let b="";
  b+=phone(70,22,122,256,s.id);
  b+=T(85,52,"Summarise this thread",{s:6.2,f:GREY})+T(85,67,"Best model",{s:11,w:600,ls:-.3})+T(85,80,"for the job",{s:11,w:600,ls:-.3});
  b+=R(83,90,96,78,"#efedfd",{r:8});
  b+=T(91,107,"Small model",{s:10,w:700,ls:-.2})+T(91,119,"92% as good · ⅛ the cost",{s:6.2,f:"#5b4fc4"});
  const Q=[40,52,61,68,74,79,83,86,88,90,91,92,92,93,93,94,94,94,95,95,95,95,96,96];
  Q.forEach((v,i)=>{const h=2+(v-36)*.4; b+=R(91+i*3.5,160-h,2.6,h,i===11?VIOLET:"#cfcbee",{r:1});});
  [["Summarise","Small"],["Draft reply","Medium"],["Reconcile","Large"]].forEach(([k,v],i)=>{
    const y=186+i*18; b+=T(85,y,k,{s:6.5,w:500})+T(177,y,v,{s:6.2,f:SOFT,a:"end"})+L(85,y+6,177,y+6,LINE);
  });
  b+=R(83,246,96,17,INK,{r:8.5})+T(131,257,"Use for similar tasks",{s:6.3,f:"#fff",a:"middle",w:500});
  b+=phone(208,22,122,256,s.id);
  b+=T(223,52,"Today",{s:6.2,f:GREY})+T(223,67,"Cost per task",{s:11,w:600,ls:-.3});
  const tasks=[["Inbox",4,0],["Notes",3,0],["Recap",5,0],["Tag",2,0],["Reply",11,1],["Search",9,1],["Plan",14,1],["Draft",12,1],["Code",22,2],["Audit",26,2],["Close",24,2],["Sort",3,0]];
  const cols=["#a99ff7",VIOLET,"#3d2fa3"];
  tasks.forEach(([n,v,m],i)=>{
    const y=82+i*14.4;
    b+=T(223,y+5.6,n,{s:5.2,f:GREY});
    b+=R(246,y+1,v*2.4,6,cols[m],{r:3});
  });
  [["Small",0],["Medium",1],["Large",2]].forEach(([n,m],i)=>{const x=223+i*30; b+=`<circle cx="${x+2}" cy="261" r="2" fill="${cols[m]}"/>`+T(x+6,263,n,{s:5,f:SOFT});});
  return s.open+b+s.close;
},
autonomy(){
  const s=svg(); let b=win(28,22,344,262,false,"Tessel — Agents",s.id);
  b+=T(44,60,"Agent permissions",{s:12,w:600,ls:-.3})+T(44,72,"6 tasks · 3 run on their own",{s:6.3,f:SOFT});
  b+=T(326,60,"Act alone",{s:6,f:SOFT,a:"end"});
  b+=`<g transform="translate(343,57)"><circle r="10.5" fill="#fff" stroke="#c9cdd3"/>`;
  [-55,0,55].forEach(a=>b+=`<line y1="-7" y2="-9" stroke="#9ca1a9" stroke-width="1" transform="rotate(${a})"/>`);
  b+=`<line y1="1" y2="-6.5" stroke="${INK}" stroke-width="1.8" stroke-linecap="round" transform="rotate(55)"/><circle r="1.8" fill="${INK}"/></g>`;
  b+=T(44,93,"Task",{s:5.8,f:GREY})+T(138,93,"Team",{s:5.8,f:GREY})+T(206,93,"Mode",{s:5.8,f:GREY})+T(356,93,"Last run",{s:5.8,f:GREY,a:"end"});
  const st={"Act alone":["#e4f3ea","#2f7d58"],"Off":["#eceef1",SOFT],"Ask first":["#fbf0dc","#a86f12"]};
  const rows=[["Match invoices","Finance","Act alone","2m ago"],["Chase late payers","Ops","Ask first","1h ago"],["Flag duplicates","Finance","Act alone","just now"],["Issue refunds","Support","Ask first","3h ago"],["Tag expenses","Finance","Act alone","12m ago"],["Close the books","Finance","Off","30 Sep"]];
  rows.forEach(([o,c,x,a],i)=>{
    const y=99+i*29;
    b+=L(36,y,364,y,LINE);
    if(i===2) b+=R(36,y+.5,328,28.5,"#eef2f8");
    b+=T(44,y+17.5,o,{s:7,w:500})+T(138,y+17.5,c,{s:6.8,f:SOFT});
    const w=x.length*3.3+10; b+=R(206,y+9,w,12,st[x][0],{r:6})+T(206+w/2,y+17,x,{s:5.8,f:st[x][1],a:"middle",w:500});
    b+=T(356,y+17.5,a,{s:6.6,f:SOFT,a:"end"});
  });
  b+=CURSOR(258,164);
  return s.open+b+s.close;
},
signal(){
  const s=svg("",true); const lt="#f2f3f5";
  let b=win(28,22,344,262,true,"Signal — Foundations",s.id);
  b+=T(44,56,"Colour",{s:6.5,f:GREY,w:500});
  [["surface/base","#1b1c1f"],["surface/raised","#2a2c31"],["text/primary","#f2f3f5"],["ai/accent","#8b7cf6"],["sure","#3fb37f"],["unsure","#e0a23a"],["error","#e2574c"]].forEach(([n,c],i)=>{
    const y=64+i*20; b+=R(44,y,14,14,c,{r:3.5,st:"#3a3d44"})+T(64,y+9.5,n,{s:6.4,f:lt})+T(162,y+9.5,c.toUpperCase(),{s:5.4,f:GREY,a:"end"});
  });
  b+=L(174,46,174,272,"#2e3137");
  b+=T(186,56,"Buttons",{s:6.5,f:GREY,w:500});
  b+=R(186,64,54,18,lt,{r:4})+T(213,75.5,"Accept",{s:6.6,f:INK,a:"middle",w:600});
  b+=R(246,64,54,18,"none",{r:4,st:"#4a4e56"})+T(273,75.5,"Edit",{s:6.6,f:lt,a:"middle",w:500});
  b+=T(308,75.5,"Why this?",{s:6.6,f:"#b3a9fa",w:500});
  b+=T(186,100,"Prompt field",{s:6.5,f:GREY,w:500});
  b+=R(186,107,124,20,"#1b1c1f",{r:10,st:"#8b7cf6"})+T(196,120,"Ask about this invoice",{s:6.6,f:lt});
  b+=`<rect x="272" y="112" width="1" height="10" fill="${lt}"><animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/></rect>`;
  b+=`<path d="M298 111.5l1.4 3.6 3.6 1.4-3.6 1.4-1.4 3.6-1.4-3.6-3.6-1.4 3.6-1.4z" fill="#b3a9fa"/>`;
  b+=T(186,146,"States",{s:6.5,f:GREY,w:500});
  [["#262140","#8b7cf6","Thinking… read 3 sources so far"],["#16301f","#3fb37f","Done. 4 changes, all reversible."],["#3a2c16","#e0a23a","Not sure about line 12. Check it?"]].forEach(([bg,ac,t],i)=>{
    const y=153+i*24; b+=R(186,y,172,19,bg,{r:4})+R(186,y,2.5,19,ac)+T(194,y+12,t,{s:6.2,f:"#e6e7ea"});
  });
  b+=T(186,240,"Streaming",{s:6.5,f:GREY,w:500});
  [46,30,40,18].forEach((w,i)=>{b+=R(186+[0,50,84,128][i],254,w,5,"#8b7cf6",{r:2.5,op:[.9,.7,.5,.25][i]});});
  b+=T(44,234,"Type",{s:6.5,f:GREY,w:500});
  b+=T(44,262,"Aa",{s:26,w:600,f:lt,ls:-1})+T(84,250,"Familjen Grotesk",{s:6.5,f:lt})+T(84,261,"13 · 15 · 20 · 31",{s:6,f:GREY});
  return s.open+b+s.close;
},
context(){
  const s=svg(); let b=phone(139,20,122,262,s.id);
  b+=T(154,50,"Context window",{s:10.5,w:600,ls:-.3})+T(154,62,"Thread · 24 messages · 18k tokens",{s:6,f:GREY});
  const TOK=[6,9,4,12,8,5,14,7,10,6,4,11,9,5,8,13,7,10,6,12,9,15,8,5];
  TOK.forEach((v,i)=>{
    const h=8+v*5.4, inn=i>=16&&i<=21;
    b+=R(152+i*4,186-h,3,h,inn?VIOLET:"#c9cdd3",{r:1.2});
  });
  b+=R(214.5,94,24,96,"rgba(139,124,246,.1)",{r:3,st:INK,sw:1.1});
  b+=R(212.5,134,4,16,INK,{r:2})+R(236.5,134,4,16,INK,{r:2});
  b+=R(208,80,38,11,INK,{r:5.5})+T(227,87.8,"Remember",{s:5.6,f:"#fff",a:"middle",w:500});
  b+=T(152,198,"Start",{s:5,f:GREY})+T(248,198,"Now",{s:5,f:GREY,a:"end"});
  b+=L(152,191,248,191,LINE);
  b+=T(154,220,"6 recent messages",{s:11,w:700,ls:-.3})+T(154,232,"6.2k tokens · plus 2 pinned notes",{s:6.2,f:SOFT});
  b+=R(152,246,96,18,INK,{r:9})+T(200,257.5,"Apply",{s:6.6,f:"#fff",a:"middle",w:500});
  b+=CURSOR(238,148);
  return s.open+b+s.close;
},
undo(){
  const s=svg(); let b=win(28,22,344,262,false,"Tessel — Reports",s.id);
  b+=T(44,60,"Saved reports",{s:12,w:600,ls:-.3})+T(356,60,"Agent activity",{s:6.8,a:"end",w:500});
  const row=(y,n,m,d,k)=>{
    let r=R(44,y+7,16,16,"#eceef1",{r:4});
    r+=`<polyline points="${[[47,y+19],[51,y+15],[54,y+17],[57,y+11]].map(p=>p.join(",")).join(" ")}" fill="none" stroke="${["#5b8def",GREEN,AMBER,RED,SOFT][k]}" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>`;
    r+=T(68,y+14,n,{s:7.4,w:500})+T(68,y+23,m,{s:5.8,f:GREY})+T(356,y+17,d,{s:6.3,f:SOFT,a:"end"});
    return r+L(36,y+30,364,y+30,LINE);
  };
  b+=L(36,76,364,76,LINE);
  b+=row(76,"Monthly close","Built by Close agent · PDF","12 Oct",0);
  b+=row(106,"Refunds by vendor","Built by you · CSV","9 Oct",1);
  b+=R(40,140,320,24,"#f4f2fe",{r:6,st:"#a99ff7",da:"3 3"});
  b+=`<path d="M176 152a5 5 0 1 0 1.6-3.7" fill="none" stroke="${SOFT}" stroke-width="1.1" stroke-linecap="round"/><path d="M176.6 145.6l1.2 3.1-3.2.4" fill="none" stroke="${SOFT}" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>`;
  b+=T(188,154.5,"Click to restore",{s:7,f:"#52565e",w:500});
  b+=T(52,154.5,"VAT summary",{s:6.3,f:"#a7abb2"})+L(52,152.4,94,152.4,"#a7abb2",.8);
  b+=T(352,154.5,"Removed by Close agent",{s:5.8,f:"#7064d6",a:"end"});
  b+=L(36,168,364,168,LINE);
  b+=row(168,"Fees per marketplace","Built by Close agent · CSV","2 Oct",2);
  b+=row(198,"Disputes, last 90 days","Built by you · CSV","28 Sep",3);
  b+=row(228,"Agent accuracy","Evals · PDF","21 Sep",4);
  b+=CURSOR(238,150);
  return s.open+b+s.close;
}
};

/* decorative QR-style mark, drawn in code */
export function qr(){
  const n=21, on=new Set(); let seed=1337;
  const rnd=()=>(seed=(seed*16807)%2147483647)/2147483647;
  const finder=(ox,oy)=>{for(let y=0;y<7;y++)for(let x=0;x<7;x++){const e=x===0||y===0||x===6||y===6, c=x>=2&&x<=4&&y>=2&&y<=4; if(e||c)on.add((ox+x)+","+(oy+y));}};
  const inF=(x,y)=>(x<8&&y<8)||(x>12&&y<8)||(x<8&&y>12);
  finder(0,0);finder(14,0);finder(0,14);
  for(let y=0;y<n;y++)for(let x=0;x<n;x++) if(!inF(x,y)&&rnd()>.52) on.add(x+","+y);
  let p=""; on.forEach(k=>{const [x,y]=k.split(",");p+=`M${x} ${y}h1v1h-1z`;});
  return `<svg viewBox="0 0 21 21" aria-hidden="true" shape-rendering="crispEdges"><path d="${p}" fill="#1b1c1f"/></svg>`;
}
