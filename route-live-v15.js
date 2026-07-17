(()=>{
const tokyoISO=()=>new Intl.DateTimeFormat('sv-SE',{timeZone:'Asia/Tokyo',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
function apply(){
  const root=document.querySelector('#v31');
  if(!root||typeof days==='undefined'||!Array.isArray(days)||!days.length)return;
  const iso=tokyoISO();
  const now=new Date();
  let index=days.findIndex(d=>d.date===iso);
  if(index<0){
    const first=new Date(days[0].date+'T00:00:00+09:00');
    index=now<first?0:days.length-1;
  }
  const d=days[index];
  const route=d.stops.map(s=>s[1]);
  const box=root.querySelector('.v31-route');
  if(box)box.innerHTML=route.map((x,i)=>`<div class="v31-node"><b>${i+1}. ${x}</b><span>${i===0?'起點':i===route.length-1?'收尾':'行程'}</span></div>${i<route.length-1?'<div class="v31-arrow">→</div>':''}`).join('');
  const transit=root.querySelector('.v31-transit');
  if(transit)transit.textContent=`7/${Number(d.date.slice(-2))} ${d.area}｜${d.note}`;
  const live=root.querySelector('.v31-live div');
  if(live)live.textContent=`今日路線｜${route.join(' → ')}。`;
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>{setTimeout(apply,1100);setTimeout(apply,2100)});else{setTimeout(apply,1100);setTimeout(apply,2100)}
})();