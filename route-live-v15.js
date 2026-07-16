(()=>{
const route=['上賀茂神社（完成）','北大路站','地下鐵四條站','四條烏丸山鉾町','祇園祭宵山','阪急回大阪'];
const transport='上賀茂神社完成後，先到北大路站，再搭地下鐵烏丸線到四條站。7月16日晚間是祇園祭前祭宵山，四條烏丸與山鉾町非常熱鬧，也會非常擁擠。帶幼兒與推車只走四條烏丸—室町—新町一小圈，約 45–60 分鐘，之後由烏丸站或京都河原町站搭阪急回大阪。';
function apply(){
 const root=document.querySelector('#v31');
 if(!root)return;
 const box=root.querySelector('.v31-route');
 if(box)box.innerHTML=route.map((x,i)=>`<div class="v31-node"><b>${i+1}. ${x}</b><span>${i===0?'已完成':i===1?'現在':i===route.length-1?'收尾':'下一站'}</span></div>${i<route.length-1?'<div class="v31-arrow">→</div>':''}`).join('');
 const transit=root.querySelector('.v31-transit');
 if(transit)transit.textContent=transport;
 const live=root.querySelector('.v31-live div');
 if(live)live.textContent='京都即時路線｜上賀茂完成 → 北大路 → 四條烏丸 → 祇園祭宵山 → 阪急回大阪。';
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>{setTimeout(apply,1200);setTimeout(apply,2200)});else{setTimeout(apply,1200);setTimeout(apply,2200)}
})();