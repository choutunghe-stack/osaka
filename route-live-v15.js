(()=>{
const routes={
'2026-07-15':{area:'移動日',route:['桃園機場','關西機場','VESSEL INN NAMBA']},
'2026-07-16':{area:'京都',route:['三十三間堂','下鴨神社・糺之森','鴨川三角洲','上賀茂神社','祇園祭宵山','VESSEL INN NAMBA']},
'2026-07-17':{area:'神戶',route:['✓ 生田神社（已完成）','✓ 神戶元町商店街（已完成）','✓ 北野異人館街（已完成）','✓ 神戶牛餐廳（實際用餐、非常滿意）','舊居留地（本次略過）','✓ 神戶塔（已到、現場關閉）','✓ MOSAIC 周邊簡單逛逛','✓ 搭電車返回 VESSEL INN NAMBA']},
'2026-07-18':{area:'日本橋・難波',route:['✓ 日本橋電器街','✓ 難波 PARKS／T-terrace','✓ 空想機械館','✓ BIC CAMERA 難波店','✓ 千日前散步','✓ 道頓堀','✓ 返回 VESSEL INN NAMBA']},
'2026-07-19':{area:'梅田・茶屋町',route:['✓ 西梅田','✓ 阪急梅田總店與退稅','✓ Yodobashi Umeda 5F','✓ 駿河屋梅田茶屋町店','現在推薦：animate 梅田（NU茶屋町3F）','選配：Mandarake 梅田店','Grand Front／LUCUA／LINKS UMEDA 晚餐','返回 VESSEL INN NAMBA']},
'2026-07-20':{area:'難波',route:['Namba Parks','Namba City','午睡與室內休息','法善寺橫丁','道頓堀','VESSEL INN NAMBA']},
'2026-07-21':{area:'心齋橋・堀江',route:['心齋橋 PARCO','商場午餐與午睡','Orange Street','美國村・心齋橋筋','VESSEL INN NAMBA']},
'2026-07-22':{area:'宇治・難波',route:['難波出發','平等院','宇治橋與表參道','返回大阪','難波最後採買','VESSEL INN NAMBA']},
'2026-07-23':{area:'回程',route:['VESSEL INN NAMBA','關西機場','桃園機場']}
};
const iso=()=>new Intl.DateTimeFormat('sv-SE',{timeZone:'Asia/Tokyo',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
function status(key,i,last){
 if(key==='2026-07-17')return i===4?'略過':'完成';
 if(key==='2026-07-18')return '完成';
 if(key==='2026-07-19')return i<4?'完成':i===4?'下一站':i===5?'選配':i===last?'收尾':'接著';
 return i===0?'起點':i===last?'收尾':'行程';
}
function apply(){
 const root=document.querySelector('#v31');if(!root)return;
 const key=iso(),d=routes[key];if(!d)return;
 const box=root.querySelector('.v31-route');
 if(box)box.innerHTML=d.route.map((x,i)=>`<div class="v31-node"><b>${i+1}. ${x}</b><span>${status(key,i,d.route.length-1)}</span></div>${i<d.route.length-1?'<div class="v31-arrow">→</div>':''}`).join('');
 const transit=root.querySelector('.v31-transit');
 if(transit)transit.textContent=key==='2026-07-19'?'7/19 梅田・茶屋町｜駿河屋模型搜尋完成；下一站建議到附近 NU茶屋町3F animate 梅田。':key==='2026-07-18'?'7/18 日本橋・難波｜實際完成：空想機械館、BIC CAMERA、千日前與道頓堀。':key==='2026-07-17'?'7/17 神戶｜MOSAIC 周邊簡單逛逛後，搭電車返回難波。':`7/${Number(key.slice(-2))} ${d.area}｜依當日安排移動。`;
 const live=root.querySelector('.v31-live div');
 if(live)live.textContent=`${key==='2026-07-17'||key==='2026-07-18'?'實際完成路線':key==='2026-07-19'?'目前路線':'今日路線'}｜${d.route.join(' → ')}。`;
}
function start(){apply();clearInterval(window.__routeFixTimer);window.__routeFixTimer=setInterval(apply,1000)}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();window.addEventListener('pageshow',apply);document.addEventListener('visibilitychange',()=>{if(!document.hidden)apply()});
})();