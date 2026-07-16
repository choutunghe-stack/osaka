(()=>{
const mapUrl=q=>'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(q);
const navUrl=q=>'https://www.google.com/maps/dir/?api=1&destination='+encodeURIComponent(q);
const stops=[
 ['已完成','三十三間堂','上午行程完成。','三十三間堂'],
 ['現在','下鴨神社・糺之森','先完成參拜、御朱印與補水；由北往南走出糺之森，順勢接出町柳。','下鴨神社'],
 ['約14:50–15:20','出町柳／鴨川三角洲','從下鴨神社南側步行約 15–20 分鐘。只停 20–30 分鐘拍照、讓孩子放電；太熱就縮短。','鴨川デルタ'],
 ['約15:25','計程車前往上賀茂神社','由出町柳直接北上，不再折回下鴨神社。帶推車與孩子以計程車最省體力，約 20–30 分鐘，依路況為準。','上賀茂神社'],
 ['約15:55–16:55','上賀茂神社','以一之鳥居、立砂、樓門與本殿參拜為主；授與所與特別參拜依現場時間決定。','上賀茂神社'],
 ['約17:00–17:30','上賀茂／北山咖啡休息','就近找有冷氣、座位與簡單餐點的店，讓孩子補水與休息。','北山 京都 カフェ'],
 ['約17:35','前往北大路站','計程車或公車到北大路站，再搭京都市營地下鐵烏丸線直達京都站；比回出町柳轉車更順。','北大路駅'],
 ['約18:20–19:10','京都站 Porta 晚餐','室內用餐、換尿布與整理推車。','京都ポルタ'],
 ['約19:15–19:30','離開京都','選轉乘最少的路線返回難波。','京都駅'],
 ['約20:20–20:45','回到 VESSEL INN NAMBA','抵達後直接休息。','VESSEL INN NAMBA']
];
function timeline(){return stops.map(s=>`<div class="stop"><div class="stop-time">${s[0]}</div><div class="stop-dot"></div><div class="stop-content"><b>${s[1]}</b><p>${s[2]}</p><div class="stop-links"><a class="mini-link" target="_blank" rel="noopener" href="${mapUrl(s[3])}">📍 地圖</a><a class="mini-link" target="_blank" rel="noopener" href="${navUrl(s[3])}">➡️ 導航</a></div></div></div>`).join('')}
function apply(){
 const cards=[...document.querySelectorAll('#daysList .day-card')];
 const card=cards[1];
 if(card){
  card.open=true;
  card.innerHTML=`<summary><div class="day-num"><div><b>16</b><small>DAY 2</small></div></div><div class="day-summary"><h3>京都即時版：下鴨 → 出町柳鴨川 → 上賀茂</h3><p>京都 · 週四 · 14:10 更新</p></div><div class="chev">⌄</div></summary><div class="day-body"><div class="day-rhythm"><span class="pill coral">先南接出町柳</span><span class="pill teal">再計程車北上</span><span class="pill mustard">回程走北大路</span></div><div class="timeline">${timeline()}</div><div class="day-note"><b>最順串法：</b>下鴨神社由北往南走出糺之森，先接最近的出町柳／鴨川三角洲，再從出町柳直接搭計程車北上上賀茂神社。完成後不要再回出町柳，改走北大路站 → 地下鐵烏丸線 → 京都站，避免往返折線。</div></div>`;
 }
 const today=document.getElementById('todayCard');
 if(today){today.innerHTML=`<div class="today-route"><div class="today-date"><b>16</b><span>JUL · THU</span></div><div class="today-main"><h3>下鴨神社後，先接出町柳鴨川，再北上上賀茂</h3><p>下鴨神社 → 出町柳／鴨川三角洲 → 計程車北上 → 上賀茂神社 → 北大路站 → Porta 晚餐。</p><div class="route-pills"><span class="pill coral">14:10 更新</span><span class="pill teal">避免折返</span><span class="pill mustard">北大路回京都站</span></div></div></div>`}
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>{setTimeout(apply,350);setTimeout(apply,1000)});else{setTimeout(apply,350);setTimeout(apply,1000)}
})();