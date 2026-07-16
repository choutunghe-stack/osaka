(()=>{
const mapUrl=q=>'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(q);
const stops=[
 ['11:35','抵達京都站','先上廁所、補水；不再照原定上午時程硬趕。','京都駅'],
 ['11:45','計程車前往三十三間堂','約 10 分鐘；推車與孩子一起移動較省體力。','三十三間堂'],
 ['12:00–13:00','三十三間堂','今日第一個必留景點，室內參觀約 60 分鐘。','三十三間堂'],
 ['13:15–15:00','京都站 Porta 午餐＋午睡','回京都站吹冷氣、吃午餐，讓孩子完整休息。','京都ポルタ'],
 ['15:10','計程車前往下鴨神社','比公車省約半小時並減少曝曬與轉乘。','下鴨神社'],
 ['15:35–16:35','下鴨神社・糺之森','以林蔭主線為主；御朱印與拍照一次完成。','下鴨神社'],
 ['16:40–17:05','鴨川三角洲','孩子精神好才下車短走；太熱就直接略過。','鴨川デルタ'],
 ['17:10','上賀茂神社條件判斷','只有孩子清醒、氣溫可接受才搭計程車前往；否則直接回京都站。','上賀茂神社'],
 ['17:35–18:15','上賀茂神社（選配）','停留 40 分鐘，不繞遠路；17:10 前決定是否取消。','上賀茂神社'],
 ['18:40–19:25','京都站 Porta 晚餐','若取消上賀茂，可提早至 18:00 用餐。','京都ポルタ'],
 ['19:30','最晚離開京都','搭乘最順的電車返回難波，不再追加景點。','京都駅'],
 ['約20:30','回到 VESSEL INN NAMBA','若孩子疲累，目標提前至 20:00–20:15 抵達。','VESSEL INN NAMBA']
];
function timeline(){return stops.map(s=>`<div class="stop"><div class="stop-time">${s[0]}</div><div class="stop-dot"></div><div class="stop-content"><b>${s[1]}</b><p>${s[2]}</p><div class="stop-links"><a class="mini-link" target="_blank" rel="noopener" href="${mapUrl(s[3])}">📍 地圖</a></div></div></div>`).join('')}
function apply(){
 const cards=[...document.querySelectorAll('#daysList .day-card')];
 const card=cards[1];
 if(card){
  card.open=true;
  card.innerHTML=`<summary><div class="day-num"><div><b>16</b><small>DAY 2</small></div></div><div class="day-summary"><h3>京都即時調整：先三十三間堂，再北上</h3><p>京都 · 週四 · 11:35 更新</p></div><div class="chev">⌄</div></summary><div class="day-body"><div class="day-rhythm"><span class="pill coral">現在才到京都</span><span class="pill teal">午睡優先</span><span class="pill mustard">上賀茂選配</span></div><div class="timeline">${timeline()}</div><div class="day-note"><b>即時策略：</b>三十三間堂必留；下鴨神社為午後主場；鴨川只短停。17:10 依孩子狀況決定是否前往上賀茂神社，不為完成清單犧牲晚餐與返程。</div></div>`;
 }
 const today=document.getElementById('todayCard');
 if(today){today.innerHTML=`<div class="today-route"><div class="today-date"><b>16</b><span>JUL · THU</span></div><div class="today-main"><h3>京都行程已依現在到站時間重排</h3><p>11:45 三十三間堂 → Porta 午餐午睡 → 下鴨神社 → 鴨川短停 → 上賀茂條件選配 → 約 20:30 回飯店。</p><div class="route-pills"><span class="pill coral">11:35 更新</span><span class="pill teal">計程車省轉乘</span><span class="pill mustard">19:30最晚離開</span></div></div></div>`}
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>{setTimeout(apply,450);setTimeout(apply,1200)});else{setTimeout(apply,450);setTimeout(apply,1200)}
})();