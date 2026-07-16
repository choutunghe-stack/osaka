(()=>{
const mapUrl=q=>'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(q);
const navUrl=q=>'https://www.google.com/maps/dir/?api=1&destination='+encodeURIComponent(q);
const stops=[
 ['已完成','三十三間堂','上午行程完成。','三十三間堂'],
 ['已完成','下鴨神社・糺之森','參拜與糺之森完成。','下鴨神社'],
 ['已完成','出町柳／鴨川三角洲','河岸、跳石與親子玩水完成。','鴨川デルタ'],
 ['已完成','上賀茂神社','賀茂兩社行程完成。','上賀茂神社'],
 ['已完成','京都市巴士 4 號到四條河原町','由上賀茂方向搭車抵達四條河原町。','四条河原町'],
 ['已完成','但馬屋河原町店用餐','全家用餐、補水與休息完成。','但馬屋 ドン・キホーテ河原町店'],
 ['已完成','祇園祭前祭・宵山','沿四條通進入山鉾町，近距離欣賞點燈山鉾與宵山人潮，今晚祭典行程完成。','祇園祭 宵山 四条烏丸'],
 ['現在','準備搭車返回大阪難波','依目前位置前往最近的阪急京都河原町站或烏丸站，搭阪急京都線到大阪梅田；再轉大阪 Metro 御堂筋線到難波。','阪急 烏丸駅'],
 ['抵達後','步行回 VESSEL INN NAMBA','從難波站步行回飯店，今日行程結束。','VESSEL INN NAMBA']
];
function timeline(){return stops.map(s=>`<div class="stop"><div class="stop-time">${s[0]}</div><div class="stop-dot"></div><div class="stop-content"><b>${s[1]}</b><p>${s[2]}</p><div class="stop-links"><a class="mini-link" target="_blank" rel="noopener" href="${mapUrl(s[3])}">📍 地圖</a><a class="mini-link" target="_blank" rel="noopener" href="${navUrl(s[3])}">➡️ 導航</a></div></div></div>`).join('')}
function apply(){
 const cards=[...document.querySelectorAll('#daysList .day-card')];
 const card=cards[1];
 if(card){
  card.open=true;
  card.innerHTML=`<summary><div class="day-num"><div><b>16</b><small>DAY 2</small></div></div><div class="day-summary"><h3>京都 Day 2 完成：祇園祭宵山後返回大阪</h3><p>京都 · 週四 · 晚間收尾</p></div><div class="chev">⌄</div></summary><div class="day-body"><div class="day-rhythm"><span class="pill coral">京都景點完成</span><span class="pill teal">祇園祭宵山完成</span><span class="pill mustard">現在返回飯店</span></div><div class="timeline">${timeline()}</div><div class="day-note"><b>今日完成：</b>三十三間堂、下鴨神社與糺之森、鴨川三角洲、上賀茂神社、四條河原町用餐及祇園祭宵山。現在由最近的阪急車站回大阪梅田，再轉御堂筋線到難波，步行返回 VESSEL INN NAMBA。</div></div>`;
 }
 const today=document.getElementById('todayCard');
 if(today){today.innerHTML=`<div class="today-route"><div class="today-date"><b>16</b><span>JUL · THU</span></div><div class="today-main"><h3>祇園祭宵山完成，現在返回大阪飯店</h3><p>阪急京都河原町／烏丸 → 大阪梅田 → 御堂筋線難波 → VESSEL INN NAMBA。</p><div class="route-pills"><span class="pill coral">Day 2 已完成</span><span class="pill teal">現在搭車回大阪</span><span class="pill mustard">難波步行回飯店</span></div></div></div>`}
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>{setTimeout(apply,350);setTimeout(apply,1000)});else{setTimeout(apply,350);setTimeout(apply,1000)}
})();