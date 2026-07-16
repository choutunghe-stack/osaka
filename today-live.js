(()=>{
const mapUrl=q=>'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(q);
const navUrl=q=>'https://www.google.com/maps/dir/?api=1&destination='+encodeURIComponent(q);
const stops=[
 ['已完成','三十三間堂','上午行程完成。','三十三間堂'],
 ['現在','下鴨神社・糺之森','先完成參拜、御朱印與補水；由北往南走出糺之森，順勢接出町柳。','下鴨神社'],
 ['約14:50–15:30','出町柳／鴨川三角洲玩水','從下鴨神社南側步行約 15–20 分鐘。選河岸淺水處短暫踩水、看跳石與放電；建議 30–40 分鐘。請帶毛巾與替換衣物，大人全程貼身陪同；雨後、水色混濁或流速快時不要下水。','鴨川デルタ'],
 ['約15:35','計程車前往上賀茂神社','由出町柳直接北上，不再折回下鴨神社。帶推車與孩子以計程車最省體力，約 20–30 分鐘，依路況為準。','上賀茂神社'],
 ['約16:05–17:00','上賀茂神社','以一之鳥居、立砂、樓門與本殿參拜為主；授與所與特別參拜依現場時間決定。','上賀茂神社'],
 ['約17:05–17:35','上賀茂／北山咖啡休息','就近找有冷氣、座位與簡單餐點的店，讓孩子換衣、補水與休息。','北山 京都 カフェ'],
 ['約17:40','前往北大路站','計程車或公車到北大路站，再搭京都市營地下鐵烏丸線直達京都站；比回出町柳轉車更順。','北大路駅'],
 ['約18:25–19:15','京都站 Porta 晚餐','室內用餐、換尿布與整理推車。','京都ポルタ'],
 ['約19:20–19:35','離開京都','選轉乘最少的路線返回難波。','京都駅'],
 ['約20:20–20:45','回到 VESSEL INN NAMBA','抵達後直接休息。','VESSEL INN NAMBA']
];
function timeline(){return stops.map(s=>`<div class="stop"><div class="stop-time">${s[0]}</div><div class="stop-dot"></div><div class="stop-content"><b>${s[1]}</b><p>${s[2]}</p><div class="stop-links"><a class="mini-link" target="_blank" rel="noopener" href="${mapUrl(s[3])}">📍 地圖</a><a class="mini-link" target="_blank" rel="noopener" href="${navUrl(s[3])}">➡️ 導航</a></div></div></div>`).join('')}
function apply(){
 const cards=[...document.querySelectorAll('#daysList .day-card')];
 const card=cards[1];
 if(card){
  card.open=true;
  card.innerHTML=`<summary><div class="day-num"><div><b>16</b><small>DAY 2</small></div></div><div class="day-summary"><h3>京都即時版：下鴨 → 鴨川三角洲玩水 → 上賀茂</h3><p>京都 · 週四 · 即時更新</p></div><div class="chev">⌄</div></summary><div class="day-body"><div class="day-rhythm"><span class="pill coral">下鴨完成後往南</span><span class="pill teal">鴨川短暫玩水</span><span class="pill mustard">再計程車北上</span></div><div class="timeline">${timeline()}</div><div class="day-note"><b>最順串法：</b>下鴨神社由北往南走出糺之森，先接最近的出町柳／鴨川三角洲玩水，再從出町柳直接搭計程車北上上賀茂神社。四條河原町一帶的鴨川較適合散步，不建議當幼兒玩水主場。雨後、水流快或孩子疲累時，鴨川段直接取消。</div></div>`;
 }
 const today=document.getElementById('todayCard');
 if(today){today.innerHTML=`<div class="today-route"><div class="today-date"><b>16</b><span>JUL · THU</span></div><div class="today-main"><h3>下鴨神社後，先到鴨川三角洲短暫玩水</h3><p>下鴨神社 → 出町柳／鴨川三角洲玩水 → 計程車北上 → 上賀茂神社 → 北大路站 → Porta 晚餐。</p><div class="route-pills"><span class="pill coral">親子玩水 30–40 分</span><span class="pill teal">成人全程陪同</span><span class="pill mustard">雨後不下水</span></div></div></div>`}
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>{setTimeout(apply,350);setTimeout(apply,1000)});else{setTimeout(apply,350);setTimeout(apply,1000)}
})();