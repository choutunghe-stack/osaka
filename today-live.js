(()=>{
const schedule={
'2026-07-15':{dow:'三',area:'移動日',title:'抵達大阪，直接回飯店休息',note:'抵達後只做入住與便利商店補給，保留孩子睡眠。',tags:['移動為主','不排景點','22:00入住']},
'2026-07-16':{dow:'四',area:'京都',title:'京都神社慢旅與祇園祭宵山',note:'三十三間堂、下鴨神社、鴨川三角洲、上賀茂神社與祇園祭宵山已完成。',tags:['京都完成','宵山完成','返回難波']},
'2026-07-17':{dow:'五',area:'神戶',title:'神戶行程已完成，MOSAIC 周邊散步後搭電車回飯店',note:'完成生田神社、元町商店街、北野異人館與神戶牛用餐；神戶塔抵達時已關閉，最後只在 Harborland・MOSAIC 附近簡單逛逛，之後直接搭電車返回難波。',tags:['✓ 神戶行程完成','✓ MOSAIC 周邊','✓ 已搭電車返程']},
'2026-07-18':{dow:'六',area:'日本橋・難波',title:'日本橋與難波行程已完成',note:'實際逛了日本橋電器街、難波 PARKS／T-terrace與空想機械館，後來前往 BIC CAMERA 難波店，再沿千日前走到道頓堀，最後返回飯店。',tags:['✓ 日本橋電器街','✓ 空想機械館','✓ 千日前・道頓堀']},
'2026-07-19':{dow:'日',area:'梅田・茶屋町',title:'梅田行程完成，駿河屋後直接返回飯店',note:'完成阪急梅田總店購物與退稅、Yodobashi Umeda 5樓模型區，以及駿河屋梅田茶屋町店；逛完駿河屋後沒有再加排其他店，直接返回 VESSEL INN NAMBA。',tags:['✓ 阪急退稅','✓ Yodobashi','✓ 駿河屋後返程']},
'2026-07-20':{dow:'一',area:'心齋橋・難波',title:'難波行程完成：PARCO、法善寺與 CoCo壱番屋',note:'完成心齋橋 PARCO、法善寺與難波千日前商店街，晚餐在 CoCo壱番屋吃日式咖哩，之後返回 VESSEL INN NAMBA。',tags:['✓ 心齋橋 PARCO','✓ 法善寺・千日前','✓ CoCo壱番屋晚餐']},
'2026-07-21':{dow:'二',area:'大阪・宇治',title:'高島屋後前往宇治，目前搭京阪特急往中書島',note:'早上已去大阪高島屋；目前搭乘往出町柳方向的京阪特急，在中書島下車後轉乘京阪宇治線，前往終點宇治站。',tags:['✓ 大阪高島屋','現在：往中書島','接著：轉宇治線']},
'2026-07-22':{dow:'三',area:'大阪市區',title:'室內親子新路線：Kids Plaza、天神橋筋與今昔館',note:'大阪預報接近37°C，改排尚未去過的室內景點：Kids Plaza Osaka、天神橋筋商店街午餐與大阪くらしの今昔館；18:30前返回飯店整理行李。',tags:['全室內主線','2歲5個月免費','18:30前返飯店']},
'2026-07-23':{dow:'四',area:'回程',title:'直接前往關西機場',note:'07:30–07:45 從飯店出發，不再安排市區補買。',tags:['早起','不補買','11:45起飛']}
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
 const heading=document.getElementById('todayHeading');if(heading)heading.textContent='今天的安排';
 const chip=document.getElementById('dateChip');if(chip)chip.textContent=new Date().toLocaleDateString('zh-TW',{timeZone:'Asia/Tokyo',month:'2-digit',day:'2-digit',weekday:'short'});
 openInitialCard(key);
}
function start(){apply();clearInterval(window.__todayFixTimer);window.__todayFixTimer=setInterval(apply,1000)}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
window.addEventListener('pageshow',apply);document.addEventListener('visibilitychange',()=>{if(!document.hidden)apply()});
})();