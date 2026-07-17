(()=>{
const tokyoISO=()=>new Intl.DateTimeFormat('sv-SE',{timeZone:'Asia/Tokyo',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
const overrides={
 '2026-07-17':{
   area:'神戶',
   note:'難波出發前往神戶；舊居留地與南京町放上午，午後以麵包超人兒童博物館為親子主場，傍晚 Harborland・MOSAIC 收尾。',
   route:['難波出發前往神戶','神戶舊居留地','南京町早午餐','神戶麵包超人兒童博物館','Harborland・MOSAIC','返回 VESSEL INN NAMBA']
 }
};
function apply(){
 const root=document.querySelector('#v31');if(!root)return;
 const iso=tokyoISO();let d=overrides[iso];
 if(!d&&typeof days!=='undefined'&&Array.isArray(days)&&days.length){
   const now=new Date();let index=days.findIndex(x=>x.date===iso);
   if(index<0){const first=new Date(days[0].date+'T00:00:00+09:00');index=now<first?0:days.length-1;}
   const x=days[index];d={area:x.area,note:x.note,route:x.stops.map(s=>s[1])};
 }
 if(!d)return;
 const box=root.querySelector('.v31-route');
 if(box)box.innerHTML=d.route.map((x,i)=>`<div class="v31-node"><b>${i+1}. ${x}</b><span>${i===0?'起點':i===d.route.length-1?'收尾':'行程'}</span></div>${i<d.route.length-1?'<div class="v31-arrow">→</div>':''}`).join('');
 const transit=root.querySelector('.v31-transit');if(transit)transit.textContent=`7/${Number(iso.slice(-2))} ${d.area}｜${d.note}`;
 const live=root.querySelector('.v31-live div');if(live)live.textContent=`今日路線｜${d.route.join(' → ')}。`;
}
function start(){apply();clearInterval(window.__routeLiveTimer);window.__routeLiveTimer=setInterval(apply,1200);}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
window.addEventListener('pageshow',start);window.addEventListener('focus',apply);document.addEventListener('visibilitychange',()=>{if(!document.hidden)start()});
})();