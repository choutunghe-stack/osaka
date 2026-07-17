(()=>{
const tokyoISO=()=>new Intl.DateTimeFormat('sv-SE',{timeZone:'Asia/Tokyo',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
const pillClass=i=>i===0?'coral':i===1?'teal':'mustard';
function apply(){
  if(typeof days==='undefined'||!Array.isArray(days)||!days.length)return;
  const iso=tokyoISO();
  const now=new Date();
  let index=days.findIndex(d=>d.date===iso);
  if(index<0){
    const first=new Date(days[0].date+'T00:00:00+09:00');
    index=now<first?0:days.length-1;
  }
  const d=days[index];
  const parts=d.date.split('-');
  const heading=document.getElementById('todayHeading');
  if(heading)heading.textContent=iso===d.date?'今天的安排':'下一個重要節點';
  const chip=document.getElementById('dateChip');
  if(chip)chip.textContent=new Date().toLocaleDateString('zh-TW',{timeZone:'Asia/Tokyo',month:'2-digit',day:'2-digit',weekday:'short'});
  const today=document.getElementById('todayCard');
  if(today)today.innerHTML=`<div class="today-route"><div class="today-date"><b>${Number(parts[2])}</b><span>JUL · 週${d.dow}</span></div><div class="today-main"><h3>${d.title}</h3><p>${d.note}</p><div class="route-pills">${d.tags.map((t,i)=>`<span class="pill ${pillClass(i)}">${t}</span>`).join('')}</div></div></div>`;
  const cards=[...document.querySelectorAll('#daysList .day-card')];
  cards.forEach((card,i)=>card.open=i===index);
  const active=cards[index];
  if(active)active.dataset.today='true';
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>{setTimeout(apply,250);setTimeout(apply,900)});else{setTimeout(apply,250);setTimeout(apply,900)}
})();