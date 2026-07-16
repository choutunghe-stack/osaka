(()=>{
const mapUrl=q=>'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(q);
const navUrl=q=>'https://www.google.com/maps/dir/?api=1&destination='+encodeURIComponent(q);
const stops=[
 ['已完成','三十三間堂','上午行程完成。','三十三間堂'],
 ['已完成','下鴨神社・糺之森','參拜與糺之森完成。','下鴨神社'],
 ['已完成','出町柳／鴨川三角洲','河岸、跳石與親子玩水完成。','鴨川デルタ'],
 ['已完成','上賀茂神社','賀茂兩社行程完成。','上賀茂神社'],
 ['現在','京都市巴士 4 號：河原町今出川附近','目前在往四條方向的 4 號公車上。不要在河原町今出川下車，繼續搭到四條河原町；祭典時段可能塞車，依車內到站顯示為準。','河原町今出川'],
 ['下車站','四條河原町','在「四條河原町」下車。先補水、確認孩子與推車狀況，再開始步行。','四条河原町'],
 ['接著','沿四條通向西前往四條烏丸山鉾町','由四條河原町往西走，依序看長刀鉾、函谷鉾、月鉾周邊。帶幼兒與推車只走主線，不鑽最密集巷弄。','四条烏丸 祇園祭'],
 ['晚間','祇園祭前祭・宵山散步','控制約 45–60 分鐘。若人潮過密、孩子疲累或推車難以通行，立即轉入百貨、地下街或直接離場。','祇園祭 宵山 四条烏丸'],
 ['回大阪','從最近的阪急站返回大阪','若停在四條烏丸，從烏丸站搭阪急；若仍在河原町一帶，從京都河原町站搭阪急。到大阪梅田後轉御堂筋線到難波，再步行回 VESSEL INN NAMBA。','阪急 烏丸駅'],
 ['約21:00–21:40','回到 VESSEL INN NAMBA','依公車壅塞、宵山人潮與轉乘狀況彈性調整。','VESSEL INN NAMBA']
];
function timeline(){return stops.map(s=>`<div class="stop"><div class="stop-time">${s[0]}</div><div class="stop-dot"></div><div class="stop-content"><b>${s[1]}</b><p>${s[2]}</p><div class="stop-links"><a class="mini-link" target="_blank" rel="noopener" href="${mapUrl(s[3])}">📍 地圖</a><a class="mini-link" target="_blank" rel="noopener" href="${navUrl(s[3])}">➡️ 導航</a></div></div></div>`).join('')}
function apply(){
 const cards=[...document.querySelectorAll('#daysList .day-card')];
 const card=cards[1];
 if(card){
  card.open=true;
  card.innerHTML=`<summary><div class="day-num"><div><b>16</b><small>DAY 2</small></div></div><div class="day-summary"><h3>京都即時版：河原町今出川 → 四條河原町 → 祇園祭宵山</h3><p>京都 · 週四 · 即時更新</p></div><div class="chev">⌄</div></summary><div class="day-body"><div class="day-rhythm"><span class="pill coral">4 號公車上</span><span class="pill teal">四條河原町下車</span><span class="pill mustard">向西逛山鉾町</span></div><div class="timeline">${timeline()}</div><div class="day-note"><b>即時策略：</b>目前到河原町今出川附近，不要下車，繼續搭京都市巴士 4 號到四條河原町。下車後沿四條通向西走到四條烏丸山鉾町，控制 45–60 分鐘。結束後依所在位置從阪急烏丸站或京都河原町站回大阪，不必再繞京都站。</div></div>`;
 }
 const today=document.getElementById('todayCard');
 if(today){today.innerHTML=`<div class="today-route"><div class="today-date"><b>16</b><span>JUL · THU</span></div><div class="today-main"><h3>4 號公車上：繼續搭到四條河原町</h3><p>河原町今出川 → 四條河原町下車 → 沿四條通向西 → 四條烏丸山鉾町 → 宵山一小圈 → 阪急回大阪。</p><div class="route-pills"><span class="pill coral">不要現在下車</span><span class="pill teal">四條河原町下車</span><span class="pill mustard">回程搭阪急</span></div></div></div>`}
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>{setTimeout(apply,350);setTimeout(apply,1000)});else{setTimeout(apply,350);setTimeout(apply,1000)}
})();