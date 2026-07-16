(()=>{
const route=['上賀茂神社（完成）','京都市巴士 4 號（現在）','四條河原町','四條烏丸山鉾町','祇園祭宵山','阪急回大阪'];
const transport='目前已搭京都市巴士 4 號往四條方向，直接以四條河原町為下車點。抵達後先補水，再沿四條通向西走到四條烏丸山鉾町；帶幼兒與推車只逛室町／新町一小圈，之後由烏丸站或京都河原町站搭阪急回大阪。';
function apply(){
 const root=document.querySelector('#v31');
 if(!root)return;
 const box=root.querySelector('.v31-route');
 if(box)box.innerHTML=route.map((x,i)=>`<div class="v31-node"><b>${i+1}. ${x}</b><span>${i===0?'已完成':i===1?'現在':i===route.length-1?'收尾':'下一站'}</span></div>${i<route.length-1?'<div class="v31-arrow">→</div>':''}`).join('');
 const transit=root.querySelector('.v31-transit');
 if(transit)transit.textContent=transport;
 const live=root.querySelector('.v31-live div');
 if(live)live.textContent='京都即時路線｜上賀茂完成 → 4 號公車 → 四條河原町 → 四條烏丸宵山 → 阪急回大阪。';
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>{setTimeout(apply,1200);setTimeout(apply,2200)});else{setTimeout(apply,1200);setTimeout(apply,2200)}
})();