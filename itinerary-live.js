(()=>{
const mapUrl=q=>'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(q);
const stops=[
 ['08:45','難波出發前往神戶','搭阪神線往神戶三宮；帶推車、防曬與飲水。','VESSEL INN NAMBA','done'],
 ['10:00','✓ 生田神社（已完成）','已完成參拜與拍照；下一站前往神戶舊居留地。','生田神社','done'],
 ['現在','神戶舊居留地','由三宮往港區方向短走建築街景；炎熱時縮短停留。','神戸旧居留地','next'],
 ['接著','南京町早午餐','避開正午尖峰，優先選有座位、冷氣的店家。','南京町 神戸','todo'],
 ['13:00–15:30','神戶麵包超人兒童博物館','2 歲 5 個月孩子主場，並保留午睡緩衝。','神戸アンパンマンこどもミュージアム＆モール','todo'],
 ['16:00','神戶塔','先看外觀與拍照；孩子精神好且排隊不長再登塔，停留約 20–40 分鐘。','神戸ポートタワー','todo'],
 ['16:40','Meriken Park','沿港灣短程散步，天氣太熱可直接略過。','メリケンパーク','todo'],
 ['17:15','Harborland・MOSAIC','室內休息、港景與簡單購物。','神戸ハーバーランド','todo'],
 ['18:00','MOSAIC 晚餐','看港景收尾，不等待額外表演。','神戸ハーバーランド umie モザイク','todo'],
 ['20:00','回到 VESSEL INN NAMBA','若孩子疲累，可提前由神戶站或高速神戶返程。','VESSEL INN NAMBA','todo']
];
function patch(){
 const cards=[...document.querySelectorAll('#daysList .day-card')];
 const card=cards.find(c=>c.querySelector('.day-num b')?.textContent.trim()==='17');
 if(!card)return;
 const summary=card.querySelector('.day-summary');
 if(summary)summary.innerHTML='<h3>生田神社已完成，前往神戶舊居留地</h3><p>神戶 · 週五</p>';
 const body=card.querySelector('.day-body');
 if(!body)return;
 body.innerHTML=`<div class="day-rhythm"><span class="pill">✓ 生田神社完成</span><span class="pill">下一站：舊居留地</span><span class="pill">神戶港</span></div><div class="timeline">${stops.map(s=>`<div class="stop" data-status="${s[4]}"><div class="stop-time">${s[0]}</div><div class="stop-dot"></div><div class="stop-content"><b>${s[1]}</b><p>${s[2]}</p><div class="stop-links"><a class="mini-link" target="_blank" rel="noopener" href="${mapUrl(s[3])}">📍 地圖</a></div></div></div>`).join('')}</div><div class="day-note">💡 生田神社已完成。現在依單向動線前往神戶舊居留地，再到南京町、麵包超人、神戶塔、Meriken Park 與 Harborland，避免折返。</div>`;
 card.dataset.kobeUpdated='29';
}
function start(){patch();setTimeout(patch,350);setTimeout(patch,1200);clearInterval(window.__itineraryFixTimer);window.__itineraryFixTimer=setInterval(patch,1500)}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
window.addEventListener('pageshow',patch);document.addEventListener('visibilitychange',()=>{if(!document.hidden)patch()});
})();