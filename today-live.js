(()=>{
const mapUrl=q=>'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(q);
const stops=[
 ['現在','正前往三十三間堂','抵達後先完成參拜，不再回頭補上午行程。','三十三間堂'],
 ['約12:10–13:10','三十三間堂','保留約 60 分鐘；室內禁止拍照，推車依現場指示停放。','三十三間堂'],
 ['約13:20–14:10','WALDEN WOODS KYOTO 咖啡休息','三十三間堂後搭計程車約 5–10 分鐘。白色極簡空間，適合咖啡、甜點、吹冷氣與讓孩子休息；出發前先用地圖確認當日營業。','WALDEN WOODS KYOTO'],
 ['14:10–14:45','午餐／孩子午睡緩衝','若咖啡店餐點不足，附近簡單用餐後直接搭計程車北上；孩子可在車上或推車午睡。','京都駅'],
 ['約15:15–16:15','下鴨神社・糺之森','午後主場，以林蔭主線為主；御朱印、拍照與補水一次完成。','下鴨神社'],
 ['16:20–16:45','鴨川三角洲','只短停 20–25 分鐘；太熱、下雨或孩子睡著就略過。','鴨川デルタ'],
 ['17:00','直接返回京都站','今天取消上賀茂神社，避免晚到、趕路與拖延返程。','京都駅'],
 ['17:40–18:40','京都站 Porta 晚餐','室內用餐、換尿布、補水並整理推車。','京都ポルタ'],
 ['18:50–19:10','離開京都','依當下最快路線返回難波，不追加景點。','京都駅'],
 ['約20:00–20:30','回到 VESSEL INN NAMBA','抵達後直接洗澡休息。','VESSEL INN NAMBA']
];
function timeline(){return stops.map(s=>`<div class="stop"><div class="stop-time">${s[0]}</div><div class="stop-dot"></div><div class="stop-content"><b>${s[1]}</b><p>${s[2]}</p><div class="stop-links"><a class="mini-link" target="_blank" rel="noopener" href="${mapUrl(s[3])}">📍 地圖</a></div></div></div>`).join('')}
function apply(){
 const cards=[...document.querySelectorAll('#daysList .day-card')];
 const card=cards[1];
 if(card){
  card.open=true;
  card.innerHTML=`<summary><div class="day-num"><div><b>16</b><small>DAY 2</small></div></div><div class="day-summary"><h3>京都即時版：三十三間堂＋咖啡＋下鴨神社</h3><p>京都 · 週四 · 11:58 更新</p></div><div class="chev">⌄</div></summary><div class="day-body"><div class="day-rhythm"><span class="pill coral">正前往三十三間堂</span><span class="pill teal">加入推薦咖啡</span><span class="pill mustard">取消上賀茂</span></div><div class="timeline">${timeline()}</div><div class="day-note"><b>即時策略：</b>三十三間堂完成後先去 WALDEN WOODS KYOTO 休息，再北上下鴨神社與鴨川。今天不再趕上賀茂神社，將體力留給孩子、晚餐與準時回難波。</div></div>`;
 }
 const today=document.getElementById('todayCard');
 if(today){today.innerHTML=`<div class="today-route"><div class="today-date"><b>16</b><span>JUL · THU</span></div><div class="today-main"><h3>現在正前往三十三間堂</h3><p>三十三間堂 → WALDEN WOODS KYOTO → 下鴨神社 → 鴨川短停 → Porta 晚餐 → 約 20:00–20:30 回飯店。</p><div class="route-pills"><span class="pill coral">11:58 更新</span><span class="pill teal">咖啡休息已加入</span><span class="pill mustard">上賀茂取消</span></div></div></div>`}
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>{setTimeout(apply,450);setTimeout(apply,1200)});else{setTimeout(apply,450);setTimeout(apply,1200)}
})();