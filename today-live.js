(()=>{
const schedule={
'2026-07-15':{dow:'三',area:'移動日',title:'抵達大阪，直接回飯店休息',note:'抵達後只做入住與便利商店補給，保留孩子睡眠。',tags:['✓ 抵達大阪','✓ 飯店入住','✓ 移動日完成']},
'2026-07-16':{dow:'四',area:'京都',title:'京都神社慢旅與祇園祭宵山完成',note:'三十三間堂、下鴨神社、鴨川三角洲、上賀茂神社與祇園祭宵山已完成。',tags:['✓ 京都完成','✓ 宵山完成','✓ 返回難波']},
'2026-07-17':{dow:'五',area:'神戶',title:'神戶行程已完成，MOSAIC 周邊散步後搭電車回飯店',note:'完成生田神社、元町商店街、北野異人館與神戶牛用餐；神戶塔抵達時已關閉，最後只在 Harborland・MOSAIC 附近簡單逛逛，之後直接搭電車返回難波。',tags:['✓ 神戶行程完成','✓ MOSAIC 周邊','✓ 已搭電車返程']},
'2026-07-18':{dow:'六',area:'日本橋・難波',title:'日本橋與難波行程已完成',note:'實際逛了日本橋電器街、難波 PARKS／T-terrace與空想機械館，後來前往 BIC CAMERA 難波店，再沿千日前走到道頓堀，最後返回飯店。',tags:['✓ 日本橋電器街','✓ 空想機械館','✓ 千日前・道頓堀']},
'2026-07-19':{dow:'日',area:'梅田・茶屋町',title:'梅田行程完成，駿河屋後直接返回飯店',note:'完成阪急梅田總店購物與退稅、Yodobashi Umeda 5樓模型區，以及駿河屋梅田茶屋町店；逛完駿河屋後沒有再加排其他店，直接返回 VESSEL INN NAMBA。',tags:['✓ 阪急退稅','✓ Yodobashi','✓ 駿河屋後返程']},
'2026-07-20':{dow:'一',area:'心齋橋・難波',title:'難波行程完成：PARCO、法善寺與 CoCo壱番屋',note:'完成心齋橋 PARCO、法善寺與難波千日前商店街，晚餐在 CoCo壱番屋吃日式咖哩，之後返回 VESSEL INN NAMBA。',tags:['✓ 心齋橋 PARCO','✓ 法善寺・千日前','✓ CoCo壱番屋晚餐']},
'2026-07-21':{dow:'二',area:'大阪・宇治・道頓堀',title:'宇治與道頓堀行程完成',note:'早上先到大阪高島屋，再搭京阪電車前往宇治；完成平等院、在中村藤吉品嚐抹茶，返回大阪後逛道頓堀，晚餐在美津の（Mizuno）吃大阪燒。',tags:['✓ 宇治平等院','✓ 中村藤吉抹茶','✓ 美津の大阪燒']},
'2026-07-22':{dow:'三',area:'臨空城・大阪',title:'最後採買完成：臨空城、EDION後返回飯店',note:'完成臨空城購物，之後到 EDION（愛電王）購買任天堂點數卡與瑪利歐商品，再返回 VESSEL INN NAMBA 整理行李。',tags:['✓ 臨空城','✓ EDION採買','✓ 已返回飯店']},
'2026-07-23':{dow:'四',area:'大阪・關西機場・台灣',title:'已平安返回台灣，關西家庭旅行完成',note:'今天完成 VESSEL INN NAMBA 退房、前往關西國際機場並搭機返回台灣；2026/7/15–7/23 全部行程完成。',tags:['✓ 飯店退房','✓ 關西機場','✓ 已返回台灣']}
};
const iso=()=>new Intl.DateTimeFormat('sv-SE',{timeZone:'Asia/Tokyo',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
const cls=i=>i===0?'coral':i===1?'teal':'mustard';
let initialCardOpened=false;
function openInitialCard(key){
 if(initialCardOpened)return;
 const cards=[...document.querySelectorAll('#daysList .day-card')];
 if(!cards.length)return;
 const idx=Number(key.slice(-2))-15;
 if(!cards.some(c=>c.open)&&cards[idx])cards[idx].open=true;
 initialCardOpened=true;
}
function apply(){
 const key=iso();const d=schedule[key];if(!d)return;
 const today=document.getElementById('todayCard');
 if(today)today.innerHTML=`<div class="today-route"><div class="today-date"><b>${Number(key.slice(-2))}</b><span>JUL · 週${d.dow}</span></div><div class="today-main"><h3>${d.title}</h3><p>${d.note}</p><div class="route-pills">${d.tags.map((t,i)=>`<span class="pill ${cls(i)}">${t}</span>`).join('')}</div></div></div>`;
 const heading=document.getElementById('todayHeading');if(heading)heading.textContent=key==='2026-07-23'?'旅程完成':'今天的安排';
 const chip=document.getElementById('dateChip');if(chip)chip.textContent=new Date().toLocaleDateString('zh-TW',{timeZone:'Asia/Tokyo',month:'2-digit',day:'2-digit',weekday:'short'});
 openInitialCard(key);
}
function start(){apply();clearInterval(window.__todayFixTimer);window.__todayFixTimer=setInterval(apply,1000)}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
window.addEventListener('pageshow',apply);document.addEventListener('visibilitychange',()=>{if(!document.hidden)apply()});
})();