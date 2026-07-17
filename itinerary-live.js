(()=>{
const mapUrl=q=>'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(q);
const stops=[
 ['08:45','難波出發前往神戶','搭阪神線往神戶三宮；帶推車、防曬與飲水。','VESSEL INN NAMBA','done'],
 ['10:00','✓ 生田神社（已完成）','已完成參拜與拍照。','生田神社','done'],
 ['之後','✓ 神戶元町商店街（已逛完）','生田神社後前往有拱廊的神戶元町商店街散步，照片位置為元町4丁目一帶。','神戸元町商店街 4丁目','done'],
 ['之後','✓ 北野異人館街（已完成）','已走訪北野異人館街；精華包含風見雞之館、萌黃之館與北野町廣場。','北野異人館街','done'],
 ['之後','✓ 神戶牛餐廳（實際用餐）','實際用餐非常滿意：座位空間大，適合帶小孩與推車；店員笑容親切，服務很好。','神戶牛','done','https://maps.app.goo.gl/qBF8RHidTxojcQge9?g_st=ic'],
 ['略過','神戶舊居留地','本次依實際行程略過，直接前往神戶塔。','旧居留地十五番館','skip'],
 ['剛剛','✓ 神戶塔（已到但現場關閉）','已抵達神戶塔，但現場已關閉；保留外觀與夜景拍照即可。','神戸ポートタワー','done'],
 ['現在','Meriken Park・BE KOBE','從神戶塔旁步行前往，夜間仍可散步、看港景並拍 BE KOBE；建議停留 15–20 分鐘。','BE KOBE モニュメント メリケンパーク','next'],
 ['接著','Harborland・MOSAIC 大摩天輪','沿港邊步行前往。大摩天輪營業至 22:00，MOSAIC 餐廳多數至 22:00，可安排夜景、甜點與室內休息。','モザイク大観覧車','todo'],
 ['約21:00–21:30','返回 VESSEL INN NAMBA','孩子疲累時由 JR 神戶站或高速神戶站返程，不再加排景點。','VESSEL INN NAMBA','todo']
];
function patch(){
 const cards=[...document.querySelectorAll('#daysList .day-card')];
 const card=cards.find(c=>c.querySelector('.day-num b')?.textContent.trim()==='17');
 if(!card)return;
 const summary=card.querySelector('.day-summary');
 if(summary)summary.innerHTML='<h3>神戶塔現場已關閉，改走港區夜景與大摩天輪</h3><p>神戶 · 週五</p>';
 const body=card.querySelector('.day-body');
 if(!body)return;
 body.innerHTML=`<div class="day-rhythm"><span class="pill">✓ 神戶塔已到</span><span class="pill">現場已關閉</span><span class="pill">下一站：Meriken Park</span></div><div class="timeline">${stops.map(s=>`<div class="stop" data-status="${s[4]}"><div class="stop-time">${s[0]}</div><div class="stop-dot"></div><div class="stop-content"><b>${s[1]}</b><p>${s[2]}</p><div class="stop-links"><a class="mini-link" target="_blank" rel="noopener" href="${s[5]||mapUrl(s[3])}">📍 地圖</a></div></div></div>`).join('')}</div><div class="day-note">🌙 現在最順：神戶塔外觀 → Meriken Park・BE KOBE → Harborland・MOSAIC 大摩天輪。全程沿港區移動，不需要折返。</div><div class="day-note">🎡 MOSAIC 大摩天輪營業至 22:00，餐廳多數至 22:00；若孩子累了，可只拍 BE KOBE 後直接進 MOSAIC 休息。</div>`;
 card.dataset.kobeUpdated='37';
}
function start(){patch();setTimeout(patch,350);setTimeout(patch,1200);clearInterval(window.__itineraryFixTimer);window.__itineraryFixTimer=setInterval(patch,1500)}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
window.addEventListener('pageshow',patch);document.addEventListener('visibilitychange',()=>{if(!document.hidden)patch()});
})();