(()=>{
const mapUrl=q=>'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(q);
const stops=[
 ['08:45','難波出發前往神戶','搭阪神線往神戶三宮；帶推車、防曬與飲水。','VESSEL INN NAMBA','done'],
 ['10:00','✓ 生田神社（已完成）','已完成參拜與拍照；接著前往北野異人館街。','生田神社','done'],
 ['現在','北野異人館街','建議搭計程車上坡，推車較省力。精華看風見雞之館、萌黃之館與北野町廣場，停留約 45–60 分鐘；炎熱或孩子疲累時只看外觀。','北野異人館街','next'],
 ['接著','神戶舊居留地','由北野下山後前往港區。精華走法：京町筋林蔭街景 → 舊居留地十五番館 → 神戶市立博物館外觀，約 30–45 分鐘。','旧居留地十五番館','todo'],
 ['接著','南京町早午餐','避開正午尖峰，優先選有座位、冷氣的店家。','南京町 神戸','todo'],
 ['13:30–16:00','神戶麵包超人兒童博物館','2 歲 5 個月孩子主場，並保留午睡緩衝。','神戸アンパンマンこどもミュージアム＆モール','todo'],
 ['16:20','神戶塔','先看外觀與拍照；孩子精神好且排隊不長再登塔，停留約 20–40 分鐘。','神戸ポートタワー','todo'],
 ['17:00','Meriken Park','沿港灣短程散步，天氣太熱可直接略過。','メリケンパーク','todo'],
 ['17:30','Harborland・MOSAIC','室內休息、港景、晚餐與簡單購物。','神戸ハーバーランド','todo'],
 ['20:00','回到 VESSEL INN NAMBA','若孩子疲累，可提前由神戶站或高速神戶返程。','VESSEL INN NAMBA','todo']
];
function patch(){
 const cards=[...document.querySelectorAll('#daysList .day-card')];
 const card=cards.find(c=>c.querySelector('.day-num b')?.textContent.trim()==='17');
 if(!card)return;
 const summary=card.querySelector('.day-summary');
 if(summary)summary.innerHTML='<h3>生田神社已完成，加入北野異人館街</h3><p>神戶 · 週五</p>';
 const body=card.querySelector('.day-body');
 if(!body)return;
 body.innerHTML=`<div class="day-rhythm"><span class="pill">✓ 生田神社完成</span><span class="pill">下一站：異人館</span><span class="pill">神戶港</span></div><div class="timeline">${stops.map(s=>`<div class="stop" data-status="${s[4]}"><div class="stop-time">${s[0]}</div><div class="stop-dot"></div><div class="stop-content"><b>${s[1]}</b><p>${s[2]}</p><div class="stop-links"><a class="mini-link" target="_blank" rel="noopener" href="${mapUrl(s[3])}">📍 地圖</a></div></div></div>`).join('')}</div><div class="day-note">🏠 異人館精華：風見雞之館、萌黃之館、北野町廣場。北野位於坡地，帶推車建議從生田神社搭計程車上山，再往三宮與舊居留地方向下坡移動。</div><div class="day-note">💡 更新後動線：生田神社 → 北野異人館街 → 神戶舊居留地 → 南京町 → 麵包超人 → 神戶塔 → Meriken Park → Harborland。加入異人館後行程較滿，舊居留地或 Meriken Park 可視體力縮短。</div>`;
 card.dataset.kobeUpdated='31';
}
function start(){patch();setTimeout(patch,350);setTimeout(patch,1200);clearInterval(window.__itineraryFixTimer);window.__itineraryFixTimer=setInterval(patch,1500)}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
window.addEventListener('pageshow',patch);document.addEventListener('visibilitychange',()=>{if(!document.hidden)patch()});
})();