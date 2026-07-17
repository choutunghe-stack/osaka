(()=>{
const mapUrl=q=>'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(q);
const stops=[
 ['08:45','難波出發前往神戶','搭阪神線往神戶三宮；帶推車、防曬與飲水。','VESSEL INN NAMBA','done'],
 ['10:00','✓ 生田神社（已完成）','已完成參拜與拍照。','生田神社','done'],
 ['之後','✓ 神戶元町商店街（已逛完）','生田神社後前往有拱廊的神戶元町商店街散步，照片位置為元町4丁目一帶。','神戸元町商店街 4丁目','done'],
 ['之後','✓ 北野異人館街（已完成）','已走訪北野異人館街；精華包含風見雞之館、萌黃之館與北野町廣場。','北野異人館街','done'],
 ['剛剛','✓ 神戶牛餐廳（實際用餐）','實際用餐非常滿意：座位空間大，適合帶小孩與推車；店員笑容親切，服務很好。','神戶牛','done','https://maps.app.goo.gl/qBF8RHidTxojcQge9?g_st=ic'],
 ['下一站','神戶舊居留地','若還有體力，可走京町筋、舊居留地十五番館與神戶市立博物館外觀。','旧居留地十五番館','next'],
 ['之後','神戶塔・Meriken Park','視孩子精神與天氣決定是否停留；可只拍神戶塔外觀。','神戸ポートタワー','todo'],
 ['傍晚','Harborland・MOSAIC','室內休息、港景與簡單購物。','神戸ハーバーランド','todo'],
 ['19:30–20:00','回到 VESSEL INN NAMBA','若孩子疲累，可提前由神戶站或高速神戶返程。','VESSEL INN NAMBA','todo']
];
function patch(){
 const cards=[...document.querySelectorAll('#daysList .day-card')];
 const card=cards.find(c=>c.querySelector('.day-num b')?.textContent.trim()==='17');
 if(!card)return;
 const summary=card.querySelector('.day-summary');
 if(summary)summary.innerHTML='<h3>異人館與神戶牛已完成，下一站舊居留地</h3><p>神戶 · 週五</p>';
 const body=card.querySelector('.day-body');
 if(!body)return;
 body.innerHTML=`<div class="day-rhythm"><span class="pill">✓ 異人館完成</span><span class="pill">✓ 神戶牛滿意</span><span class="pill">下一站：舊居留地</span></div><div class="timeline">${stops.map(s=>`<div class="stop" data-status="${s[4]}"><div class="stop-time">${s[0]}</div><div class="stop-dot"></div><div class="stop-content"><b>${s[1]}</b><p>${s[2]}</p><div class="stop-links"><a class="mini-link" target="_blank" rel="noopener" href="${s[5]||mapUrl(s[3])}">📍 地圖</a></div></div></div>`).join('')}</div><div class="day-note">🥩 實際用餐心得：座位空間大，帶小孩與推車友善；店員笑容親切、服務很好，整體非常滿意。此店列為本次神戶實際推薦餐廳。</div><div class="day-note">💡 實際進度：生田神社 → 元町商店街 → 北野異人館 → 神戶牛用餐。接著視體力前往舊居留地、神戶塔與港區。</div>`;
 card.dataset.kobeUpdated='35';
}
function start(){patch();setTimeout(patch,350);setTimeout(patch,1200);clearInterval(window.__itineraryFixTimer);window.__itineraryFixTimer=setInterval(patch,1500)}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
window.addEventListener('pageshow',patch);document.addEventListener('visibilitychange',()=>{if(!document.hidden)patch()});
})();