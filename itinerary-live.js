(()=>{
const mapUrl=q=>'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(q);
const kobeStops=[
 ['08:45','難波出發前往神戶','搭阪神線往神戶三宮；帶推車、防曬與飲水。','VESSEL INN NAMBA','done'],
 ['10:00','✓ 生田神社（已完成）','已完成參拜與拍照。','生田神社','done'],
 ['之後','✓ 神戶元町商店街（已逛完）','生田神社後前往有拱廊的神戶元町商店街散步，照片位置為元町4丁目一帶。','神戸元町商店街 4丁目','done'],
 ['之後','✓ 北野異人館街（已完成）','已走訪北野異人館街；精華包含風見雞之館、萌黃之館與北野町廣場。','北野異人館街','done'],
 ['之後','✓ 神戶牛餐廳（實際用餐）','實際用餐非常滿意：座位空間大，適合帶小孩與推車；店員笑容親切，服務很好。','神戶牛','done','https://maps.app.goo.gl/qBF8RHidTxojcQge9?g_st=ic'],
 ['略過','神戶舊居留地','本次依實際行程略過。','旧居留地十五番館','skip'],
 ['之後','✓ 神戶塔（已到但現場關閉）','已抵達神戶塔，但現場已關閉；僅在外圍停留與拍照。','神戸ポートタワー','done'],
 ['最後','✓ MOSAIC 周邊散步','最後到 Harborland・MOSAIC 附近逛逛，但沒有靠近主要設施，也沒有搭乘大摩天輪。','神戸ハーバーランド umie モザイク','done'],
 ['返程','✓ 搭電車返回 VESSEL INN NAMBA','結束神戶行程後直接搭電車回飯店，當日行程完成。','VESSEL INN NAMBA','done']
];
const osakaStops=[
 ['白天','✓ 日本橋電器街','實際在 Den Den Town 逛模型、玩具與二手收藏店。','日本橋でんでんタウン','done'],
 ['午後','✓ 難波 PARKS／T-terrace','轉往難波 PARKS 逛生活雜貨、童鞋、玩具與餐廳樓層。','なんばパークス','done'],
 ['之後','✓ 空想機械館','在難波 PARKS 行程中也參觀了空想機械館，納入當天實際停留紀錄。','空想機械館 なんばパークス','done'],
 ['之後','✓ BIC CAMERA 難波店','離開 PARKS 後前往 BIC CAMERA 繼續逛家電與商品。','ビックカメラなんば店','done'],
 ['傍晚','✓ 千日前散步','從 BIC CAMERA 一帶沿千日前商圈散步。','千日前 大阪','done'],
 ['最後','✓ 道頓堀','最後走到道頓堀逛街，完成當天難波行程。','道頓堀','done'],
 ['返程','✓ 返回 VESSEL INN NAMBA','結束日本橋、千日前與道頓堀行程後回飯店。','VESSEL INN NAMBA','done']
];
const umedaStops=[
 ['稍早','✓ 西梅田','已抵達西梅田地下街一帶，之後移動到大阪梅田站周邊。','西梅田駅','done'],
 ['之後','✓ 阪急梅田總店','在阪急梅田總店 B1 食品樓層逛街，並確認海外旅客服務與退稅位置。','阪急うめだ本店','done'],
 ['之後','✓ 阪急百貨退稅','已前往退稅櫃台辦理當日阪急梅田總店購物退稅。','阪急うめだ本店 免税カウンター','done'],
 ['之後','✓ Yodobashi Umeda 5F','已前往5樓玩具、模型與公仔區搜尋 HUNTER×HUNTER 與《神劍闖江湖／るろうに剣心》。','ヨドバシカメラ マルチメディア梅田','done'],
 ['最後','✓ 駿河屋梅田茶屋町店','已完成5、6樓模型與公仔賣場搜尋；店內包含新品、二手與動漫收藏品。','駿河屋 梅田茶屋町店','done'],
 ['返程','✓ 返回 VESSEL INN NAMBA','逛完駿河屋後沒有再去 animate 或 Mandarake，直接搭車返回難波飯店。','VESSEL INN NAMBA','done']
];
const nambaStops=[
 ['白天','✓ 心齋橋 PARCO','已前往大丸心齋橋店旁的心齋橋 PARCO 逛街。','心斎橋PARCO','done'],
 ['之後','✓ 法善寺','之後前往法善寺與周邊巷弄參拜、散步。','法善寺 大阪','done'],
 ['晚間','✓ 難波千日前商店街','晚間走進難波千日前商店街，沿商店街逛街並尋找晚餐。','なんば千日前商店街','done'],
 ['晚餐','✓ CoCo壱番屋','晚餐實際在 CoCo壱番屋吃日式咖哩；未確認分店名稱，記錄為難波／千日前一帶。','CoCo壱番屋 難波 千日前','done'],
 ['返程','✓ 返回 VESSEL INN NAMBA','吃完 CoCo壱番屋後返回飯店，7/20 行程完成。','VESSEL INN NAMBA','done']
];
const ujiStops=[
 ['早上','✓ 大阪高島屋','今天早上先到大阪高島屋逛街，之後再前往宇治。','大阪高島屋','done'],
 ['目前','京阪特急前往中書島','目前搭乘往出町柳方向的京阪特急，準備在中書島轉乘宇治線。','中書島駅','current'],
 ['轉乘','中書島 3／4號月台 → 宇治線','抵達中書島後不要出站，依「宇治線・宇治方面」指示前往3或4號月台，搭往宇治的列車。','中書島駅','next'],
 ['接著','京阪宇治站','抵達京阪宇治站後，再依體力安排平等院、宇治橋與表參道。','京阪宇治駅','todo'],
 ['返程','返回 VESSEL INN NAMBA','宇治行程結束後返回大阪，晚間回難波飯店休息。','VESSEL INN NAMBA','todo']
];
const tomorrowStops=[
 ['09:15','從 VESSEL INN NAMBA 出發','搭大阪 Metro 前往扇町站，避免在正午高溫下長距離步行。','キッズプラザ大阪','todo'],
 ['09:45–12:30','Kids Plaza Osaka','尚未去過的全室內親子主線；2歲5個月幼兒免費。7/22仍有適合學齡前兒童與家長參加的電車操作活動。','キッズプラザ大阪','todo'],
 ['12:30–13:30','天神橋筋商店街午餐','從 Kids Plaza 附近進入商店街，在有冷氣或拱廊的店家用餐，不安排曝曬排隊名店。','天神橋筋商店街','todo'],
 ['14:00–15:30','大阪くらしの今昔館','前往天神橋筋六丁目站直結的室內博物館，看江戶時代大阪街景；也是尚未去過的景點。','大阪くらしの今昔館','todo'],
 ['16:30–18:00','返回難波最後採買','回到難波後只處理尚未買齊的物品，不再跨區增加景點。','なんば','todo'],
 ['18:30前','返回 VESSEL INN NAMBA','提早回飯店整理行李、確認隔日機場交通與護照。','VESSEL INN NAMBA','todo']
];
function timeline(stops){return stops.map(s=>`<div class="stop" data-status="${s[4]}"><div class="stop-time">${s[0]}</div><div class="stop-dot"></div><div class="stop-content"><b>${s[1]}</b><p>${s[2]}</p><div class="stop-links"><a class="mini-link" target="_blank" rel="noopener" href="${s[5]||mapUrl(s[3])}">📍 地圖</a></div></div></div>`).join('')}
function patchCard(day,title,area,pills,stops,notes,version){
 const cards=[...document.querySelectorAll('#daysList .day-card')];
 const card=cards.find(c=>c.querySelector('.day-num b')?.textContent.trim()===String(day));
 if(!card)return;
 const summary=card.querySelector('.day-summary');
 if(summary)summary.innerHTML=`<h3>${title}</h3><p>${area}</p>`;
 const body=card.querySelector('.day-body');
 if(!body)return;
 body.innerHTML=`<div class="day-rhythm">${pills.map(x=>`<span class="pill">${x}</span>`).join('')}</div><div class="timeline">${timeline(stops)}</div>${notes.map(x=>`<div class="day-note">${x}</div>`).join('')}`;
 card.dataset.actualUpdated=version;
}
function patch(){
 patchCard(17,'神戶行程已完成：MOSAIC 周邊散步後搭電車回飯店','神戶 · 週五',['✓ 神戶塔已到','✓ MOSAIC 周邊','✓ 已搭電車返程'],kobeStops,['🌙 實際收尾：神戶塔現場關閉後，前往 MOSAIC 附近簡單逛逛，沒有靠近主要設施，也未搭大摩天輪，之後直接搭電車返回難波。','✅ 7/17 神戶行程完成：生田神社 → 元町商店街 → 北野異人館 → 神戶牛 → 神戶塔外圍 → MOSAIC 周邊 → 搭電車回飯店。'],'38');
 patchCard(18,'日本橋與難波行程完成：空想機械館、BIC CAMERA、千日前、道頓堀','日本橋・難波 · 週六',['✓ 電器街','✓ 空想機械館','✓ 千日前・道頓堀'],osakaStops,['🛍️ 實際後半段：逛完日本橋與難波 PARKS，也參觀空想機械館；之後前往 BIC CAMERA 難波店，再沿千日前走到道頓堀。','✅ 7/18 實際路線：日本橋電器街 → 難波 PARKS／T-terrace → 空想機械館 → BIC CAMERA → 千日前 → 道頓堀 → 返回飯店。'],'40');
 patchCard(19,'梅田行程完成，駿河屋後直接返回飯店','梅田・茶屋町 · 週日',['✓ 阪急退稅','✓ Yodobashi','✓ 駿河屋後返程'],umedaStops,['✅ 7/19 實際完成：西梅田 → 阪急梅田總店與退稅 → Yodobashi Umeda 5F → 駿河屋梅田茶屋町店 → 返回飯店。','📝 駿河屋為當日最後一站，沒有再去 animate 或 Mandarake。'],'45');
 patchCard(20,'難波行程完成：PARCO、法善寺、千日前與 CoCo壱番屋','心齋橋・難波 · 週一',['✓ 心齋橋 PARCO','✓ 法善寺・千日前','✓ CoCo壱番屋晚餐'],nambaStops,['✅ 7/20 實際路線：心齋橋 PARCO → 法善寺 → 難波千日前商店街 → CoCo壱番屋晚餐 → 返回 VESSEL INN NAMBA。','🍛 晚餐已確認為 CoCo壱番屋；因未確認分店名稱，網站以難波／千日前一帶記錄。'],'49');
 patchCard(21,'早上高島屋，現在搭京阪特急前往中書島轉宇治','大阪・宇治 · 週二',['✓ 大阪高島屋','現在：前往中書島','下一站：宇治線'],ujiStops,['🚆 目前搭乘往出町柳方向的京阪特急；中書島是特急停靠站。','➡️ 到中書島後不要出站，跟著「宇治線・宇治方面」到3或4號月台轉乘，即可前往京阪宇治站。'],'50');
 patchCard(22,'室內親子新路線：Kids Plaza、天神橋筋與今昔館','大阪市區 · 週三',['全室內主線','2歲5個月免費','18:30前返飯店'],tomorrowStops,['🌡️ 明日大阪預報接近37°C，取消長時間戶外與跨區行程，改排尚未去過且移動集中的室內路線。','👶 若孩子午後疲累，可省略今昔館，直接回難波完成採買並整理行李。'],'51');
}
function start(){patch();setTimeout(patch,350);setTimeout(patch,1200);clearInterval(window.__itineraryFixTimer);window.__itineraryFixTimer=setInterval(patch,1500)}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
window.addEventListener('pageshow',patch);document.addEventListener('visibilitychange',()=>{if(!document.hidden)patch()});
})();