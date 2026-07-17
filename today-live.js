(()=>{
const schedule={
'2026-07-15':{dow:'三',area:'移動日',title:'抵達大阪，直接回飯店休息',note:'抵達後只做入住與便利商店補給，保留孩子睡眠。',tags:['移動為主','不排景點','22:00入住']},
'2026-07-16':{dow:'四',area:'京都',title:'京都神社慢旅與祇園祭宵山',note:'三十三間堂、下鴨神社、鴨川三角洲、上賀茂神社與祇園祭宵山已完成。',tags:['京都完成','宵山完成','返回難波']},
'2026-07-17':{dow:'五',area:'神戶',title:'生田神社與元町商店街已完成，接著前往異人館',note:'生田神社參拜後，已逛過神戶元町商店街4丁目一帶。接著前往北野異人館街，再視體力安排舊居留地、南京町、神戶塔、Meriken Park 與 Harborland・MOSAIC。',tags:['✓ 生田神社','✓ 元町商店街','下一站：異人館']},
'2026-07-18':{dow:'六',area:'日本橋',title:'模型與二手店，保留完整找貨時間',note:'先看新品市場價，再比較二手盒況。單點刪減，不追求每家打卡。',tags:['模型主場','午後室內','19:30回飯店']},
'2026-07-19':{dow:'日',area:'池田・梅田',title:'杯麵博物館與梅田室內行程',note:'上午前往池田，午後移到梅田商場休息。',tags:['親子體驗','室內','20:00回飯店']},
'2026-07-20':{dow:'一',area:'難波',title:'基地慢遊：Namba Parks、法善寺與道頓堀',note:'全日留在難波步行圈，保留午睡與室內休息。',tags:['不跨區','午睡友善','20:00回飯店']},
'2026-07-21':{dow:'二',area:'心齋橋・堀江',title:'Orange Street、美國村與心齋橋',note:'最熱時段留在商場，傍晚再走戶外街區。',tags:['設計街區','午後室內','20:00回飯店']},
'2026-07-22':{dow:'三',area:'宇治・難波',title:'宇治半日，回難波完成最後採買與打包',note:'宇治走半日主線，午後回大阪完成最後採買。',tags:['平等院','抹茶','打包日']},
'2026-07-23':{dow:'四',area:'回程',title:'直接前往關西機場',note:'07:30–07:45 從飯店出發，不再安排市區補買。',tags:['早起','不補買','11:45起飛']}
};
const iso=()=>new Intl.DateTimeFormat('sv-SE',{timeZone:'Asia/Tokyo',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
const cls=i=>i===0?'coral':i===1?'teal':'mustard';
function apply(){
 const key=iso();const d=schedule[key];if(!d)return;
 const today=document.getElementById('todayCard');
 if(today)today.innerHTML=`<div class="today-route"><div class="today-date"><b>${Number(key.slice(-2))}</b><span>JUL · 週${d.dow}</span></div><div class="today-main"><h3>${d.title}</h3><p>${d.note}</p><div class="route-pills">${d.tags.map((t,i)=>`<span class="pill ${cls(i)}">${t}</span>`).join('')}</div></div></div>`;
 const heading=document.getElementById('todayHeading');if(heading)heading.textContent='今天的安排';
 const chip=document.getElementById('dateChip');if(chip)chip.textContent=new Date().toLocaleDateString('zh-TW',{timeZone:'Asia/Tokyo',month:'2-digit',day:'2-digit',weekday:'short'});
 const cards=[...document.querySelectorAll('#daysList .day-card')];const idx=Number(key.slice(-2))-15;cards.forEach((c,i)=>c.open=i===idx);
}
function start(){apply();clearInterval(window.__todayFixTimer);window.__todayFixTimer=setInterval(apply,1000)}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
window.addEventListener('pageshow',apply);document.addEventListener('visibilitychange',()=>{if(!document.hidden)apply()});
})();