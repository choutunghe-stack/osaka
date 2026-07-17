(()=>{
const mapUrl=q=>'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(q);
const stops=[
 ['08:45','難波出發前往神戶','搭阪神線往神戶三宮；帶推車、防曬與飲水。','VESSEL INN NAMBA','done'],
 ['10:00','✓ 生田神社（已完成）','已完成參拜與拍照。','生田神社','done'],
 ['剛剛','✓ 神戶元町商店街（已逛完）','生田神社後前往有拱廊的神戶元町商店街散步，照片位置為元町4丁目一帶。','神戸元町商店街 4丁目','done'],
 ['現在','北野異人館街','目前正在異人館。精華看風見雞之館、萌黃之館與北野町廣場；帶推車以外觀和短程散步為主。','北野異人館街','next'],
 ['17:00 建議','神戶牛みやび 北野坂店','由異人館往北野坂下坡步行約 10–15 分鐘。週五晚餐 17:00 開始；只有 16 席，建議先電話確認空位：078-321-5929。','神戸牛みやび 北野坂店','todo'],
 ['用餐後','神戶舊居留地','若還有體力，再走京町筋、舊居留地十五番館與神戶市立博物館外觀。','旧居留地十五番館','todo'],
 ['之後','神戶塔・Meriken Park','視孩子精神與天氣決定是否停留；可只拍神戶塔外觀。','神戸ポートタワー','todo'],
 ['傍晚','Harborland・MOSAIC','室內休息、港景與簡單購物。','神戸ハーバーランド','todo'],
 ['19:30–20:00','回到 VESSEL INN NAMBA','若孩子疲累，可提前由神戶站或高速神戶返程。','VESSEL INN NAMBA','todo']
];
function patch(){
 const cards=[...document.querySelectorAll('#daysList .day-card')];
 const card=cards.find(c=>c.querySelector('.day-num b')?.textContent.trim()==='17');
 if(!card)return;
 const summary=card.querySelector('.day-summary');
 if(summary)summary.innerHTML='<h3>目前在北野異人館，17:00 建議吃神戶牛</h3><p>神戶 · 週五</p>';
 const body=card.querySelector('.day-body');
 if(!body)return;
 body.innerHTML=`<div class="day-rhythm"><span class="pill">✓ 生田神社</span><span class="pill">✓ 元町商店街</span><span class="pill">現在：異人館</span></div><div class="timeline">${stops.map(s=>`<div class="stop" data-status="${s[4]}"><div class="stop-time">${s[0]}</div><div class="stop-dot"></div><div class="stop-content"><b>${s[1]}</b><p>${s[2]}</p><div class="stop-links"><a class="mini-link" target="_blank" rel="noopener" href="${mapUrl(s[3])}">📍 地圖</a></div></div></div>`).join('')}</div><div class="day-note">🥩 就近首選：神戶牛みやび 北野坂店。從異人館下坡約 10–15 分鐘，週五 17:00 開始晚餐，地址為中山手通1丁目9-21。店內僅 16 席，先打電話確認較穩妥。</div><div class="day-note">💡 實際進度：生田神社 → 元町商店街 → 北野異人館。吃完神戶牛後，再依體力決定舊居留地、神戶塔與港區。</div>`;
 card.dataset.kobeUpdated='34';
}
function start(){patch();setTimeout(patch,350);setTimeout(patch,1200);clearInterval(window.__itineraryFixTimer);window.__itineraryFixTimer=setInterval(patch,1500)}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
window.addEventListener('pageshow',patch);document.addEventListener('visibilitychange',()=>{if(!document.hidden)patch()});
})();