(()=>{
const mapUrl=q=>'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(q);
const navUrl=q=>'https://www.google.com/maps/dir/?api=1&destination='+encodeURIComponent(q);
const stops=[
 ['已完成','三十三間堂','上午行程完成。','三十三間堂'],
 ['已完成','下鴨神社・糺之森','參拜與糺之森完成。','下鴨神社'],
 ['已完成','出町柳／鴨川三角洲','河岸與跳石行程完成。','鴨川デルタ'],
 ['已完成','上賀茂神社','賀茂兩社行程完成。','上賀茂神社'],
 ['現在','前往四條烏丸','建議先到北大路站，再搭地下鐵烏丸線到四條站；宵山時段市中心道路壅塞，地下鐵比一路搭公車進四條穩定。','四条駅 京都'],
 ['約17:50–18:25','四條烏丸周邊山鉾町','從四條站出站後，以長刀鉾、函谷鉾與月鉾周邊為主，先看山鉾與祭囃子，不急著往最擁擠處鑽。','四条烏丸 祇園祭'],
 ['約18:25–19:15','祇園祭前祭・宵山散步','7月16日晚間是前祭宵山，會非常熱鬧，也會非常擁擠。帶 2 歲孩子與推車建議只走四條烏丸至新町／室町一小圈，控制約 45–60 分鐘。','祇園祭 宵山 四条烏丸'],
 ['約19:15–19:40','室內晚餐／補水','優先在四條烏丸、京都河原町百貨或地下街找冷氣、座位與洗手間；孩子疲累就直接結束。','四条烏丸 レストラン'],
 ['約19:40–20:00','離開京都市中心','由烏丸站或京都河原町站搭阪急前往大阪梅田，再轉御堂筋線到難波；避開再回京都站的折返。','阪急 烏丸駅'],
 ['約21:00前後','回到 VESSEL INN NAMBA','依人潮與轉乘狀況彈性調整；若宵山太擁擠，提前離開。','VESSEL INN NAMBA']
];
function timeline(){return stops.map(s=>`<div class="stop"><div class="stop-time">${s[0]}</div><div class="stop-dot"></div><div class="stop-content"><b>${s[1]}</b><p>${s[2]}</p><div class="stop-links"><a class="mini-link" target="_blank" rel="noopener" href="${mapUrl(s[3])}">📍 地圖</a><a class="mini-link" target="_blank" rel="noopener" href="${navUrl(s[3])}">➡️ 導航</a></div></div></div>`).join('')}
function apply(){
 const cards=[...document.querySelectorAll('#daysList .day-card')];
 const card=cards[1];
 if(card){
  card.open=true;
  card.innerHTML=`<summary><div class="day-num"><div><b>16</b><small>DAY 2</small></div></div><div class="day-summary"><h3>京都即時版：上賀茂完成，轉往祇園祭宵山</h3><p>京都 · 週四 · 17:05 更新</p></div><div class="chev">⌄</div></summary><div class="day-body"><div class="day-rhythm"><span class="pill coral">賀茂兩社完成</span><span class="pill teal">下一站四條烏丸</span><span class="pill mustard">宵山只走一小圈</span></div><div class="timeline">${timeline()}</div><div class="day-note"><b>今晚判斷：</b>7月16日是前祭宵山，四條烏丸與山鉾町會很熱鬧，值得去看；但人潮密度高。帶幼兒與推車不要把四條河原町、八坂神社、所有山鉾一次走完。建議從四條站進場，只逛四條烏丸—室町—新町一小圈，19:15左右找室內休息，最晚約20:00離開市中心。</div></div>`;
 }
 const today=document.getElementById('todayCard');
 if(today){today.innerHTML=`<div class="today-route"><div class="today-date"><b>16</b><span>JUL · THU</span></div><div class="today-main"><h3>上賀茂完成，現在前往四條烏丸逛祇園祭宵山</h3><p>北大路站 → 地下鐵四條站 → 四條烏丸山鉾町 → 宵山散步 → 室內晚餐 → 阪急回大阪。</p><div class="route-pills"><span class="pill coral">7/16 前祭宵山</span><span class="pill teal">非常熱鬧</span><span class="pill mustard">幼兒只走一小圈</span></div></div></div>`}
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>{setTimeout(apply,350);setTimeout(apply,1000)});else{setTimeout(apply,350);setTimeout(apply,1000)}
})();