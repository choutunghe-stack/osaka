(()=>{
const route=['下鴨神社・糺之森','出町柳／鴨川三角洲','上賀茂神社','北大路站','京都站 Porta'];
const transport='最順串法：由下鴨神社北往南走出糺之森，步行接出町柳與鴨川三角洲；之後直接搭計程車北上上賀茂神社。完成後不要回出町柳，改到北大路站搭烏丸線直達京都站。';
function apply(){
 const root=document.querySelector('#v31');
 if(!root)return;
 const box=root.querySelector('.v31-route');
 if(box)box.innerHTML=route.map((x,i)=>`<div class="v31-node"><b>${i+1}. ${x}</b><span>${i===0?'現在':i===route.length-1?'收尾':'下一站'}</span></div>${i<route.length-1?'<div class="v31-arrow">→</div>':''}`).join('');
 const transit=root.querySelector('.v31-transit');
 if(transit)transit.textContent=transport;
 const live=root.querySelector('.v31-live div');
 if(live)live.textContent='京都神社慢旅｜下鴨 → 出町柳鴨川 → 上賀茂 → 北大路 → 京都站。';
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>{setTimeout(apply,1200);setTimeout(apply,2200)});else{setTimeout(apply,1200);setTimeout(apply,2200)}
})();