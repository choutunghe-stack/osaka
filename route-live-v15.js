(()=>{
const routes={
'2026-07-15':{area:'移動日',route:['桃園機場','關西機場','VESSEL INN NAMBA']},
'2026-07-16':{area:'京都',route:['三十三間堂','下鴨神社・糺之森','鴨川三角洲','上賀茂神社','祇園祭宵山','VESSEL INN NAMBA']},
'2026-07-17':{area:'神戶',route:['難波出發前往神戶','生田神社','神戶舊居留地','南京町早午餐','神戶麵包超人兒童博物館','神戶塔','Meriken Park','Harborland・MOSAIC','返回 VESSEL INN NAMBA']},
'2026-07-18':{area:'日本橋',route:['Den Den Town','Super Kids Land／Volks','Mandarake／駿河屋','Jungle','千日前晚餐','VESSEL INN NAMBA']},
'2026-07-19':{area:'池田・梅田',route:['難波','杯麵博物館','池田午餐','Grand Front／LUCUA','大阪 Station City','VESSEL INN NAMBA']},
'2026-07-20':{area:'難波',route:['Namba Parks','Namba City','午睡與室內休息','法善寺橫丁','道頓堀','VESSEL INN NAMBA']},
'2026-07-21':{area:'心齋橋・堀江',route:['心齋橋 PARCO','商場午餐與午睡','Orange Street','美國村・心齋橋筋','VESSEL INN NAMBA']},
'2026-07-22':{area:'宇治・難波',route:['難波出發','平等院','宇治橋與表參道','返回大阪','難波最後採買','VESSEL INN NAMBA']},
'2026-07-23':{area:'回程',route:['VESSEL INN NAMBA','關西機場','桃園機場']}
};
const iso=()=>new Intl.DateTimeFormat('sv-SE',{timeZone:'Asia/Tokyo',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
function apply(){const root=document.querySelector('#v31');if(!root)return;const key=iso(),d=routes[key];if(!d)return;const box=root.querySelector('.v31-route');if(box)box.innerHTML=d.route.map((x,i)=>`<div class="v31-node"><b>${i+1}. ${x}</b><span>${i===0?'起點':i===d.route.length-1?'收尾':'行程'}</span></div>${i<d.route.length-1?'<div class="v31-arrow">→</div>':''}`).join('');const transit=root.querySelector('.v31-transit');if(transit)transit.textContent=`7/${Number(key.slice(-2))} ${d.area}｜依日本日期自動顯示今日行程。`;const live=root.querySelector('.v31-live div');if(live)live.textContent=`今日路線｜${d.route.join(' → ')}。`;}
function start(){apply();clearInterval(window.__routeFixTimer);window.__routeFixTimer=setInterval(apply,1000)}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();window.addEventListener('pageshow',apply);document.addEventListener('visibilitychange',()=>{if(!document.hidden)apply()});
})();