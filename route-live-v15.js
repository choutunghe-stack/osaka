(()=>{
const route=['上賀茂神社（完成）','4 號公車・河原町今出川附近','四條河原町下車','四條烏丸山鉾町','祇園祭宵山','阪急回大阪'];
const transport='目前在京都市巴士 4 號往四條方向，已到河原町今出川附近。不要下車，繼續搭到四條河原町。下車後沿四條通向西走到四條烏丸山鉾町，只逛 45–60 分鐘；結束後依所在位置從阪急烏丸站或京都河原町站回大阪梅田，再轉御堂筋線到難波。';
function apply(){
 const root=document.querySelector('#v31');
 if(!root)return;
 const box=root.querySelector('.v31-route');
 if(box)box.innerHTML=route.map((x,i)=>`<div class="v31-node"><b>${i+1}. ${x}</b><span>${i===0?'已完成':i===1?'現在':i===route.length-1?'收尾':'下一站'}</span></div>${i<route.length-1?'<div class="v31-arrow">→</div>':''}`).join('');
 const transit=root.querySelector('.v31-transit');
 if(transit)transit.textContent=transport;
 const live=root.querySelector('.v31-live div');
 if(live)live.textContent='京都即時路線｜河原町今出川附近 → 四條河原町下車 → 四條烏丸宵山 → 阪急回大阪。';
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>{setTimeout(apply,1200);setTimeout(apply,2200)});else{setTimeout(apply,1200);setTimeout(apply,2200)}
})();