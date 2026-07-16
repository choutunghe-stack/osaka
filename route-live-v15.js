(()=>{
const route=['上賀茂神社（完成）','四條河原町（抵達）','但馬屋河原町店用餐（現在）','四條通向西','祇園祭宵山','阪急回大阪'];
const transport='目前在 Shabu-Shabu Tajimaya Donki Hotte Kawaramachi／但馬屋 ドン・キホーテ河原町店吃今天第二頓。用餐後由河原町沿四條通向西，先看長刀鉾，再視人潮前往四條烏丸、室町通與新町通山鉾町。帶幼兒與推車控制 45–60 分鐘；結束後依所在位置從阪急京都河原町站或烏丸站回大阪梅田，再轉御堂筋線到難波。';
function apply(){
 const root=document.querySelector('#v31');
 if(!root)return;
 const box=root.querySelector('.v31-route');
 if(box)box.innerHTML=route.map((x,i)=>`<div class="v31-node"><b>${i+1}. ${x}</b><span>${i<2?'已完成':i===2?'現在':i===route.length-1?'收尾':'下一站'}</span></div>${i<route.length-1?'<div class="v31-arrow">→</div>':''}`).join('');
 const transit=root.querySelector('.v31-transit');
 if(transit)transit.textContent=transport;
 const live=root.querySelector('.v31-live div');
 if(live)live.textContent='京都即時路線｜但馬屋河原町店用餐中 → 四條通向西 → 祇園祭宵山 → 阪急回大阪。';
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>{setTimeout(apply,1200);setTimeout(apply,2200)});else{setTimeout(apply,1200);setTimeout(apply,2200)}
})();