(()=>{
const mapUrl=q=>'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(q);
const navUrl=q=>'https://www.google.com/maps/dir/?api=1&destination='+encodeURIComponent(q);
const stops=[
 ['已完成','三十三間堂','上午行程完成。','三十三間堂'],
 ['已完成','下鴨神社・糺之森','參拜與糺之森完成。','下鴨神社'],
 ['已完成','出町柳／鴨川三角洲','河岸與跳石行程完成。','鴨川デルタ'],
 ['已完成','上賀茂神社','賀茂兩社行程完成。','上賀茂神社'],
 ['現在','搭京都市巴士 4 號往四條河原町','已在車上，先以四條河原町為下車點。祭典晚間市中心可能塞車，抵達時間依路況彈性。','四条河原町'],
 ['抵達後','四條河原町短休息／補水','先確認孩子與推車狀況。若人潮過密，不往祇園或八坂神社深處走。','四条河原町'],
 ['接著','沿四條通往西走到四條烏丸山鉾町','由四條河原町向西前往四條烏丸，重點放在長刀鉾、函谷鉾、月鉾周邊。帶幼兒與推車只走一小圈。','四条烏丸 祇園祭'],
 ['晚間','祇園祭前祭・宵山散步','7月16日宵山非常熱鬧，也非常擁擠。控制約 45–60 分鐘；孩子疲累或人潮失控就立即轉入百貨、地下街或離場。','祇園祭 宵山 四条烏丸'],
 ['結束後','由烏丸站或京都河原町站搭阪急回大阪','不再折返京都站。依所在位置選最近車站，前往大阪梅田後轉御堂筋線到難波。','阪急 烏丸駅'],
 ['約21:00前後','回到 VESSEL INN NAMBA','依公車塞車、祭典人潮與轉乘狀況彈性調整。','VESSEL INN NAMBA']
];
function timeline(){return stops.map(s=>`<div class="stop"><div class="stop-time">${s[0]}</div><div class="stop-dot"></div><div class="stop-content"><b>${s[1]}</b><p>${s[2]}</p><div class="stop-links"><a class="mini-link" target="_blank" rel="noopener" href="${mapUrl(s[3])}">📍 地圖</a><a class="mini-link" target="_blank" rel="noopener" href="${navUrl(s[3])}">➡️ 導航</a></div></div></div>`).join('')}
function apply(){
 const cards=[...document.querySelectorAll('#daysList .day-card')];
 const card=cards[1];
 if(card){
  card.open=true;
  card.innerHTML=`<summary><div class="day-num"><div><b>16</b><small>DAY 2</small></div></div><div class="day-summary"><h3>京都即時版：搭 4 號公車往四條河原町</h3><p>京都 · 週四 · 即時更新</p></div><div class="chev">⌄</div></summary><div class="day-body"><div class="day-rhythm"><span class="pill coral">賀茂兩社完成</span><span class="pill teal">4 號公車前往四條河原町</span><span class="pill mustard">再往西走山鉾町</span></div><div class="timeline">${timeline()}</div><div class="day-note"><b>即時策略：</b>既然已搭上京都市巴士 4 號，就直接以四條河原町為下車點。抵達後不要先往八坂神社方向鑽入最擁擠區，改沿四條通向西走到四條烏丸山鉾町；只逛室町／新町一小圈，再由烏丸站或京都河原町站搭阪急回大阪。</div></div>`;
 }
 const today=document.getElementById('todayCard');
 if(today){today.innerHTML=`<div class="today-route"><div class="today-date"><b>16</b><span>JUL · THU</span></div><div class="today-main"><h3>現在搭 4 號公車前往四條河原町</h3><p>上賀茂完成 → 4 號公車 → 四條河原町 → 向西走到四條烏丸山鉾町 → 宵山一小圈 → 阪急回大阪。</p><div class="route-pills"><span class="pill coral">目前在公車上</span><span class="pill teal">四條河原町下車</span><span class="pill mustard">向西逛山鉾町</span></div></div></div>`}
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>{setTimeout(apply,350);setTimeout(apply,1000)});else{setTimeout(apply,350);setTimeout(apply,1000)}
})();