(()=>{
const mapUrl=q=>'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(q);
const stops=[
 ['已完成','三十三間堂','參拜完成，今天不再回京都站補原定上午行程。','三十三間堂'],
 ['現在','前往下鴨神社・糺之森','由三十三間堂直接北上；帶推車與孩子建議搭計程車，約 20–30 分鐘，依路況為準。','下鴨神社'],
 ['約13:00–14:15','下鴨神社・糺之森','先走糺之森林蔭主線，再參拜、御朱印與補水；高溫時控制在 60–75 分鐘。','下鴨神社'],
 ['約14:20–15:00','出町柳附近咖啡休息','在下鴨神社南側或出町柳站周邊找有冷氣與座位的咖啡店；以孩子午睡、喝水與簡單餐點為優先。','出町柳 カフェ'],
 ['約15:05–15:35','鴨川三角洲','從下鴨神社南側前往；只短停 20–30 分鐘。太熱、下雨或孩子睡著就直接略過。','鴨川デルタ'],
 ['15:40','今日分流判斷','孩子精神好才考慮再北上；若已疲累，直接回京都站或四條河原町室內休息。','京都駅'],
 ['16:30–18:00','京都站 Porta 休息與晚餐','冷氣、換尿布、補水並整理推車；今天不硬趕上賀茂神社。','京都ポルタ'],
 ['18:10–18:40','離開京都','依當下最快、轉乘最少的路線返回難波。','京都駅'],
 ['約19:30–20:10','回到 VESSEL INN NAMBA','抵達後直接洗澡、整理照片與休息。','VESSEL INN NAMBA']
];
function timeline(){return stops.map(s=>`<div class="stop"><div class="stop-time">${s[0]}</div><div class="stop-dot"></div><div class="stop-content"><b>${s[1]}</b><p>${s[2]}</p><div class="stop-links"><a class="mini-link" target="_blank" rel="noopener" href="${mapUrl(s[3])}">📍 地圖</a></div></div></div>`).join('')}
function apply(){
 const cards=[...document.querySelectorAll('#daysList .day-card')];
 const card=cards[1];
 if(card){
  card.open=true;
  card.innerHTML=`<summary><div class="day-num"><div><b>16</b><small>DAY 2</small></div></div><div class="day-summary"><h3>京都即時版：三十三間堂完成，直接前往下鴨</h3><p>京都 · 週四 · 12:32 更新</p></div><div class="chev">⌄</div></summary><div class="day-body"><div class="day-rhythm"><span class="pill coral">三十三間堂完成</span><span class="pill teal">正前往下鴨神社</span><span class="pill mustard">咖啡改到出町柳</span></div><div class="timeline">${timeline()}</div><div class="day-note"><b>即時策略：</b>取消 WALDEN WOODS 繞行，直接北上下鴨神社。咖啡改放在下鴨神社／出町柳附近，與孩子午睡一起處理；鴨川只短停，今天不硬趕上賀茂神社。</div></div>`;
 }
 const today=document.getElementById('todayCard');
 if(today){today.innerHTML=`<div class="today-route"><div class="today-date"><b>16</b><span>JUL · THU</span></div><div class="today-main"><h3>三十三間堂已完成，現在前往下鴨神社</h3><p>下鴨神社・糺之森 → 出町柳咖啡休息 → 鴨川三角洲短停 → Porta 晚餐 → 約 19:30–20:10 回飯店。</p><div class="route-pills"><span class="pill coral">12:32 更新</span><span class="pill teal">直接北上</span><span class="pill mustard">上賀茂取消</span></div></div></div>`}
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>{setTimeout(apply,450);setTimeout(apply,1200)});else{setTimeout(apply,450);setTimeout(apply,1200)}
})();