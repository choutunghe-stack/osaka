(()=>{
const mapUrl=q=>'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(q);
const navUrl=q=>'https://www.google.com/maps/dir/?api=1&destination='+encodeURIComponent(q);
const stops=[
 ['已完成','三十三間堂','上午行程完成。','三十三間堂'],
 ['現在','已到下鴨神社・糺之森','先走林蔭主線、參拜、御朱印與補水；帶孩子控制在約 60 分鐘。','下鴨神社'],
 ['約14:10–15:10','下鴨神社・糺之森','不繞鴨川三角洲，保留體力直接北上。','下鴨神社'],
 ['約15:15','計程車前往上賀茂神社','正式名稱為賀茂別雷神社，俗稱上賀茂神社；帶推車建議直接搭車，約 20–30 分鐘，依路況為準。','上賀茂神社'],
 ['約15:40–16:40','上賀茂神社','今日午後第二主場。以一之鳥居、立砂、樓門與本殿參拜為主；授與所與特別參拜依現場時間決定。','上賀茂神社'],
 ['約16:45–17:25','北山／上賀茂附近咖啡休息','找有冷氣、座位與簡單餐點的店，讓孩子休息、補水；不再加入戶外景點。','北山 京都 カフェ'],
 ['約17:30','前往京都站','計程車到北山站或直接到京都站；依孩子狀況選轉乘最少方案。','京都駅'],
 ['約18:15–19:15','京都站 Porta 晚餐','室內用餐、換尿布與整理推車。','京都ポルタ'],
 ['約19:20–19:35','離開京都','選轉乘最少的路線返回難波，不再追加景點。','京都駅'],
 ['約20:20–20:45','回到 VESSEL INN NAMBA','抵達後直接洗澡、整理照片與休息。','VESSEL INN NAMBA']
];
function timeline(){return stops.map(s=>`<div class="stop"><div class="stop-time">${s[0]}</div><div class="stop-dot"></div><div class="stop-content"><b>${s[1]}</b><p>${s[2]}</p><div class="stop-links"><a class="mini-link" target="_blank" rel="noopener" href="${mapUrl(s[3])}">📍 地圖</a><a class="mini-link" target="_blank" rel="noopener" href="${navUrl(s[3])}">➡️ 導航</a></div></div></div>`).join('')}
function apply(){
 const cards=[...document.querySelectorAll('#daysList .day-card')];
 const card=cards[1];
 if(card){
  card.open=true;
  card.innerHTML=`<summary><div class="day-num"><div><b>16</b><small>DAY 2</small></div></div><div class="day-summary"><h3>京都即時版：下鴨神社後前往上賀茂神社</h3><p>京都 · 週四 · 14:06 更新</p></div><div class="chev">⌄</div></summary><div class="day-body"><div class="day-rhythm"><span class="pill coral">已到下鴨神社</span><span class="pill teal">下一站上賀茂</span><span class="pill mustard">鴨川取消</span></div><div class="timeline">${timeline()}</div><div class="day-note"><b>即時策略：</b>下鴨神社參拜後，取消鴨川三角洲，直接搭計程車前往上賀茂神社（賀茂別雷神社）。完成兩座賀茂神社後，在北山或上賀茂附近休息，再回京都站 Porta 晚餐。</div></div>`;
 }
 const today=document.getElementById('todayCard');
 if(today){today.innerHTML=`<div class="today-route"><div class="today-date"><b>16</b><span>JUL · THU</span></div><div class="today-main"><h3>已到下鴨神社，下一站上賀茂神社</h3><p>下鴨神社・糺之森 → 計程車北上 → 上賀茂神社 → 北山咖啡休息 → Porta 晚餐 → 約 20:20–20:45 回飯店。</p><div class="route-pills"><span class="pill coral">14:06 更新</span><span class="pill teal">直接北上</span><span class="pill mustard">鴨川取消</span></div></div></div>`}
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>{setTimeout(apply,350);setTimeout(apply,1000)});else{setTimeout(apply,350);setTimeout(apply,1000)}
})();