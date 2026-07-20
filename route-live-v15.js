(()=>{
const routes={
'2026-07-15':{area:'移動日',route:['桃園機場','關西機場','VESSEL INN NAMBA']},
'2026-07-16':{area:'京都',route:['三十三間堂','下鴨神社・糺之森','鴨川三角洲','上賀茂神社','祇園祭宵山','VESSEL INN NAMBA']},
'2026-07-17':{area:'神戶',route:['✓ 生田神社（已完成）','✓ 神戶元町商店街（已完成）','✓ 北野異人館街（已完成）','✓ 神戶牛餐廳（實際用餐、非常滿意）','舊居留地（本次略過）','✓ 神戶塔（已到、現場關閉）','✓ MOSAIC 周邊簡單逛逛','✓ 搭電車返回 VESSEL INN NAMBA']},
'2026-07-18':{area:'日本橋・難波',route:['✓ 日本橋電器街','✓ 難波 PARKS／T-terrace','✓ 空想機械館','✓ BIC CAMERA 難波店','✓ 千日前散步','✓ 道頓堀','✓ 返回 VESSEL INN NAMBA']},
'2026-07-19':{area:'梅田・心齋橋',route:['✓ 西梅田','✓ 阪急梅田總店與退稅','✓ Yodobashi Umeda 5F','✓ 駿河屋梅田茶屋町店','現在：心齋橋逛街','下一站：藥妝採買','返回 VESSEL INN NAMBA']},
'2026-07-20':{area:'心齋橋・難波',route:['✓ 心齋橋 PARCO','✓ 法善寺','後續行程待更新']},
'2026-07-21':{area:'心齋橋・堀江',route:['心齋橋 PARCO','商場午餐與午睡','Orange Street','美國村・心齋橋筋','VESSEL INN NAMBA']},
'2026-07-22':{area:'宇治・難波',route:['難波出發','平等院','宇治橋與表參道','返回大阪','難波最後採買','VESSEL INN NAMBA']},
'2026-07-23':{area:'回程',route:['VESSEL INN NAMBA','關西機場','桃園機場']}
};
const iso=()=>new Intl.DateTimeFormat('sv-SE',{timeZone:'Asia/Tokyo',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
function status(key,i,last){
 if(key==='2026-07-17')return i===4?'略過':'完成';
 if(key==='2026-07-18')return '完成';
 if(key==='2026-07-19')return i<4?'完成':i===4?'現在':i===5?'下一站':i===last?'返程':'接著';
 if(key==='2026-07-20')return i<2?'完成':'待更新';
 return i===0?'起點':i===last?'收尾':'行程';
}
function apply(){
 const root=document.querySelector('#v31');if(!root)return;
 const key=iso(),d=routes[key];if(!d)return;
 const box=root.querySelector('.v31-route');
 if(box)box.innerHTML=d.route.map((x,i)=>`<div class="v31-node"><b>${i+1}. ${x}</b><span>${status(key,i,d.route.length-1)}</span></div>${i<d.route.length-1?'<div class="v31-arrow">→</div>':''}`).join('');
 const transit=root.querySelector('.v31-transit');
 if(transit)transit.textContent=key==='2026-07-20'?'7/20 心齋橋・難波｜今天已完成心齋橋 PARCO 與法善寺；後續行程待更新。':key==='2026-07-19'?'7/19 梅田・心齋橋｜梅田採買已完成，目前在心齋橋逛街；接著買藥妝，再返回難波飯店。':key==='2026-07-18'?'7/18 日本橋・難波｜實際完成：空想機械館、BIC CAMERA、千日前與道頓堀。':key==='2026-07-17'?'7/17 神戶｜MOSAIC 周邊簡單逛逛後，搭電車返回難波。':`7/${Number(key.slice(-2))} ${d.area}｜依當日安排移動。`;
 const live=root.querySelector('.v31-live div');
 if(live)live.textContent=`${key==='2026-07-17'||key==='2026-07-18'?'實際完成路線':key==='2026-07-19'||key==='2026-07-20'?'目前路線':'今日路線'}｜${d.route.join(' → ')}。`;
}
function start(){apply();clearInterval(window.__routeFixTimer);window.__routeFixTimer=setInterval(apply,1000)}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();window.addEventListener('pageshow',apply);document.addEventListener('visibilitychange',()=>{if(!document.hidden)apply()});
})();