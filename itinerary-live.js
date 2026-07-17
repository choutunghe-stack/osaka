(()=>{
const mapUrl=q=>'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(q);
const stops=[
 ['08:45','難波出發前往神戶','搭阪神線往神戶三宮；帶推車、防曬與飲水。','VESSEL INN NAMBA'],
 ['10:00','生田神社','參拜與拍照約 30–45 分鐘；炎熱時縮短停留。','生田神社'],
 ['10:50','神戶舊居留地','由三宮往港區方向短走建築街景。','神戸旧居留地'],
 ['11:30','南京町早午餐','避開正午尖峰，優先選有座位、冷氣的店家。','南京町 神戸'],
 ['13:00–15:30','神戶麵包超人兒童博物館','2 歲 5 個月孩子主場，並保留午睡緩衝。','神戸アンパンマンこどもミュージアム＆モール'],
 ['16:00','神戶塔','先看外觀與拍照；孩子精神好且排隊不長再登塔，停留約 20–40 分鐘。','神戸ポートタワー'],
 ['16:40','Meriken Park','沿港灣短程散步，天氣太熱可直接略過。','メリケンパーク'],
 ['17:15','Harborland・MOSAIC','室內休息、港景與簡單購物。','神戸ハーバーランド'],
 ['18:00','MOSAIC 晚餐','看港景收尾，不等待額外表演。','神戸ハーバーランド umie モザイク'],
 ['20:00','回到 VESSEL INN NAMBA','若孩子疲累，可提前由神戶站或高速神戶返程。','VESSEL INN NAMBA']
];
function patch(){
 const cards=[...document.querySelectorAll('#daysList .day-card')];
 const card=cards.find(c=>c.querySelector('.day-num b')?.textContent.trim()==='17');
 if(!card)return;
 const summary=card.querySelector('.day-summary');
 if(summary)summary.innerHTML='<h3>生田神社、南京町、麵包超人與神戶港</h3><p>神戶 · 週五</p>';
 const body=card.querySelector('.day-body');
 if(!body)return;
 body.innerHTML=`<div class="day-rhythm"><span class="pill">生田神社</span><span class="pill">親子主場</span><span class="pill">神戶塔</span></div><div class="timeline">${stops.map(s=>`<div class="stop"><div class="stop-time">${s[0]}</div><div class="stop-dot"></div><div class="stop-content"><b>${s[1]}</b><p>${s[2]}</p><div class="stop-links"><a class="mini-link" target="_blank" rel="noopener" href="${mapUrl(s[3])}">📍 地圖</a></div></div></div>`).join('')}</div><div class="day-note">💡 動線採三宮往港區單向移動：生田神社 → 舊居留地 → 南京町 → 麵包超人 → 神戶塔 → Meriken Park → Harborland，避免折返。</div>`;
 card.dataset.kobeUpdated='28';
}
function start(){patch();setTimeout(patch,350);setTimeout(patch,1200);clearInterval(window.__itineraryFixTimer);window.__itineraryFixTimer=setInterval(patch,1500)}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
window.addEventListener('pageshow',patch);document.addEventListener('visibilitychange',()=>{if(!document.hidden)patch()});
})();