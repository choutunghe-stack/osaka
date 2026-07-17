(()=>{
const mapUrl=q=>'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(q);
const stops=[
 ['08:45','難波出發前往神戶','搭阪神線往神戶三宮；帶推車、防曬與飲水。','VESSEL INN NAMBA','done'],
 ['10:00','✓ 生田神社（已完成）','已完成參拜與拍照。','生田神社','done'],
 ['剛剛','✓ 神戶元町商店街（已逛完）','生田神社後前往有拱廊的神戶元町商店街散步，照片位置為元町4丁目一帶。','神戸元町商店街 4丁目','done'],
 ['接著','北野異人館街','接著前往異人館。北野位於坡地，帶推車建議搭計程車上坡；精華看風見雞之館、萌黃之館與北野町廣場。','北野異人館街','next'],
 ['之後','神戶舊居留地','精華走法：京町筋林蔭街景 → 舊居留地十五番館 → 神戶市立博物館外觀，約 30–45 分鐘。','旧居留地十五番館','todo'],
 ['之後','南京町午餐','優先選有座位、冷氣的店家，吃完直接往港區移動。','南京町 神戸','todo'],
 ['14:30','神戶塔','先看外觀與拍照；孩子精神好且排隊不長再登塔，停留約 20–40 分鐘。','神戸ポートタワー','todo'],
 ['15:20','Meriken Park','沿港灣短程散步，天氣太熱可直接略過。','メリケンパーク','todo'],
 ['16:00','Harborland・MOSAIC','室內休息、港景、晚餐與簡單購物。','神戸ハーバーランド','todo'],
 ['19:30–20:00','回到 VESSEL INN NAMBA','若孩子疲累，可提前由神戶站或高速神戶返程。','VESSEL INN NAMBA','todo']
];
function patch(){
 const cards=[...document.querySelectorAll('#daysList .day-card')];
 const card=cards.find(c=>c.querySelector('.day-num b')?.textContent.trim()==='17');
 if(!card)return;
 const summary=card.querySelector('.day-summary');
 if(summary)summary.innerHTML='<h3>生田神社、元町商店街已完成，接著前往異人館</h3><p>神戶 · 週五</p>';
 const body=card.querySelector('.day-body');
 if(!body)return;
 body.innerHTML=`<div class="day-rhythm"><span class="pill">✓ 生田神社完成</span><span class="pill">✓ 元町商店街完成</span><span class="pill">下一站：異人館</span></div><div class="timeline">${stops.map(s=>`<div class="stop" data-status="${s[4]}"><div class="stop-time">${s[0]}</div><div class="stop-dot"></div><div class="stop-content"><b>${s[1]}</b><p>${s[2]}</p><div class="stop-links"><a class="mini-link" target="_blank" rel="noopener" href="${mapUrl(s[3])}">📍 地圖</a></div></div></div>`).join('')}</div><div class="day-note">📷 照片位置辨識為神戶元町商店街（KOBE MOTOMACHI），畫面上可見元町4丁目標誌與有頂拱廊。</div><div class="day-note">💡 實際行程更新：生田神社 → 神戶元町商店街 → 北野異人館街。接著再視體力安排舊居留地、南京町與神戶港區。</div>`;
 card.dataset.kobeUpdated='33';
}
function start(){patch();setTimeout(patch,350);setTimeout(patch,1200);clearInterval(window.__itineraryFixTimer);window.__itineraryFixTimer=setInterval(patch,1500)}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
window.addEventListener('pageshow',patch);document.addEventListener('visibilitychange',()=>{if(!document.hidden)patch()});
})();