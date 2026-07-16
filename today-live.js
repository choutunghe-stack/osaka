(()=>{
const mapUrl=q=>'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(q);
const navUrl=q=>'https://www.google.com/maps/dir/?api=1&destination='+encodeURIComponent(q);
const stops=[
 ['已完成','三十三間堂','上午行程完成。','三十三間堂'],
 ['已完成','下鴨神社・糺之森','參拜與糺之森完成。','下鴨神社'],
 ['已完成','出町柳／鴨川三角洲','河岸、跳石與親子玩水完成。','鴨川デルタ'],
 ['已完成','上賀茂神社','賀茂兩社行程完成。','上賀茂神社'],
 ['已完成','京都市巴士 4 號到四條河原町','已由上賀茂方向搭車抵達四條河原町一帶。','四条河原町'],
 ['現在','但馬屋 唐吉訶德河原町店吃今天第二頓','目前在 Shabu-Shabu Tajimaya Donki Hotte Kawaramachi／但馬屋 ドン・キホーテ河原町店用餐。先讓全家吃飽、補水與休息，再前往祇園祭。','但馬屋 ドン・キホーテ河原町店'],
 ['用餐後','前往祇園祭前祭・宵山','從河原町一帶沿四條通向西，先看長刀鉾，再往四條烏丸、室町通與新町通山鉾町移動。帶幼兒與推車只走主線，不鑽最密集巷弄。','祇園祭 宵山 四条烏丸'],
 ['晚間','祇園祭宵山散步','控制約 45–60 分鐘。若人潮過密、孩子疲累或推車難以前進，立即進百貨、地下街或直接離場。','四条烏丸 祇園祭'],
 ['回大阪','從最近的阪急站返回大阪','若停在四條烏丸，從烏丸站搭阪急；若仍在河原町一帶，從京都河原町站搭阪急。到大阪梅田後轉御堂筋線到難波，再步行回 VESSEL INN NAMBA。','阪急 烏丸駅'],
 ['約21:00–21:40','回到 VESSEL INN NAMBA','依用餐時間、宵山人潮與轉乘狀況彈性調整。','VESSEL INN NAMBA']
];
function timeline(){return stops.map(s=>`<div class="stop"><div class="stop-time">${s[0]}</div><div class="stop-dot"></div><div class="stop-content"><b>${s[1]}</b><p>${s[2]}</p><div class="stop-links"><a class="mini-link" target="_blank" rel="noopener" href="${mapUrl(s[3])}">📍 地圖</a><a class="mini-link" target="_blank" rel="noopener" href="${navUrl(s[3])}">➡️ 導航</a></div></div></div>`).join('')}
function apply(){
 const cards=[...document.querySelectorAll('#daysList .day-card')];
 const card=cards[1];
 if(card){
  card.open=true;
  card.innerHTML=`<summary><div class="day-num"><div><b>16</b><small>DAY 2</small></div></div><div class="day-summary"><h3>京都即時版：但馬屋用餐中 → 祇園祭宵山</h3><p>京都 · 週四 · 即時更新</p></div><div class="chev">⌄</div></summary><div class="day-body"><div class="day-rhythm"><span class="pill coral">今天第二頓</span><span class="pill teal">但馬屋河原町店</span><span class="pill mustard">等等前往祇園祭</span></div><div class="timeline">${timeline()}</div><div class="day-note"><b>即時策略：</b>目前先在但馬屋 唐吉訶德河原町店吃飯與休息。用餐後直接由河原町沿四條通向西進入宵山區，先看長刀鉾，再視人潮往四條烏丸、室町與新町延伸。帶幼兒與推車控制 45–60 分鐘，結束後依所在位置從阪急京都河原町站或烏丸站回大阪。</div></div>`;
 }
 const today=document.getElementById('todayCard');
 if(today){today.innerHTML=`<div class="today-route"><div class="today-date"><b>16</b><span>JUL · THU</span></div><div class="today-main"><h3>現在在但馬屋河原町店吃今天第二頓</h3><p>但馬屋 ドン・キホーテ河原町店用餐 → 沿四條通向西 → 祇園祭宵山 → 阪急回大阪。</p><div class="route-pills"><span class="pill coral">目前用餐中</span><span class="pill teal">吃完前往宵山</span><span class="pill mustard">回程搭阪急</span></div></div></div>`}
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>{setTimeout(apply,350);setTimeout(apply,1000)});else{setTimeout(apply,350);setTimeout(apply,1000)}
})();