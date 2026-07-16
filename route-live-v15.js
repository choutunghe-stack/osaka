(()=>{
const route=['京都景點（完成）','但馬屋河原町店（完成）','祇園祭宵山（完成）','阪急京都河原町／烏丸站（現在）','大阪梅田','難波・VESSEL INN NAMBA'];
const transport='今日京都行程與祇園祭宵山已完成。現在前往最近的阪急京都河原町站或烏丸站，搭阪急京都線到大阪梅田；再轉大阪 Metro 御堂筋線到難波，最後步行回 VESSEL INN NAMBA。祭典散場人潮密集，進站後先依站務指示排隊，不必趕車。';
function apply(){
 const root=document.querySelector('#v31');
 if(!root)return;
 const box=root.querySelector('.v31-route');
 if(box)box.innerHTML=route.map((x,i)=>`<div class="v31-node"><b>${i+1}. ${x}</b><span>${i<3?'已完成':i===3?'現在':i===route.length-1?'收尾':'下一站'}</span></div>${i<route.length-1?'<div class="v31-arrow">→</div>':''}`).join('');
 const transit=root.querySelector('.v31-transit');
 if(transit)transit.textContent=transport;
 const live=root.querySelector('.v31-live div');
 if(live)live.textContent='京都 Day 2 收尾｜祇園祭宵山完成 → 阪急回大阪梅田 → 御堂筋線難波 → VESSEL INN NAMBA。';
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>{setTimeout(apply,1200);setTimeout(apply,2200)});else{setTimeout(apply,1200);setTimeout(apply,2200)}
})();