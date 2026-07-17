(()=>{
const tokyoISO=()=>new Intl.DateTimeFormat('sv-SE',{timeZone:'Asia/Tokyo',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
const pillClass=i=>i===0?'coral':i===1?'teal':'mustard';
const overrides={
 '2026-07-17':{
   date:'2026-07-17',dow:'五',title:'南京町、麵包超人與 Harborland',
   note:'難波出發前往神戶，先走舊居留地與南京町；午後以麵包超人兒童博物館為親子主場，傍晚在 Harborland・MOSAIC 收尾。',
   tags:['親子主場','室內避暑','20:00回飯店']
 }
};
function getDay(iso){
 if(overrides[iso])return overrides[iso];
 if(typeof days==='undefined'||!Array.isArray(days)||!days.length)return null;
 const now=new Date();
 let index=days.findIndex(d=>d.date===iso);
 if(index<0){const first=new Date(days[0].date+'T00:00:00+09:00');index=now<first?0:days.length-1;}
 return days[index];
}
function apply(){
 const iso=tokyoISO();
 const d=getDay(iso);if(!d)return;
 const parts=d.date.split('-');
 const heading=document.getElementById('todayHeading');if(heading)heading.textContent='今天的安排';
 const chip=document.getElementById('dateChip');if(chip)chip.textContent=new Date().toLocaleDateString('zh-TW',{timeZone:'Asia/Tokyo',month:'2-digit',day:'2-digit',weekday:'short'});
 const today=document.getElementById('todayCard');
 if(today)today.innerHTML=`<div class="today-route"><div class="today-date"><b>${Number(parts[2])}</b><span>JUL · 週${d.dow}</span></div><div class="today-main"><h3>${d.title}</h3><p>${d.note}</p><div class="route-pills">${d.tags.map((t,i)=>`<span class="pill ${pillClass(i)}">${t}</span>`).join('')}</div></div></div>`;
 const cards=[...document.querySelectorAll('#daysList .day-card')];
 let index=(typeof days!=='undefined'&&Array.isArray(days))?days.findIndex(x=>x.date===iso):-1;
 if(index<0&&iso==='2026-07-17')index=2;
 cards.forEach((card,i)=>card.open=i===index);
 if(cards[index])cards[index].dataset.today='true';
}
function schedule(){apply();setTimeout(apply,300);setTimeout(apply,1200);setTimeout(apply,3000)}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',schedule);else schedule();
window.addEventListener('pageshow',schedule);document.addEventListener('visibilitychange',()=>{if(!document.hidden)schedule()});
})();