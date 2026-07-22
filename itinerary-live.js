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
 ['早上','✓ 大阪高島屋','早上先到大阪高島屋逛街，之後搭京阪電車前往宇治。','大阪高島屋','done'],
 ['交通','✓ 中書島轉乘京阪宇治線','搭京阪特急抵達中書島後轉乘宇治線，前往京阪宇治站。','中書島駅','done'],
 ['宇治','✓ 平等院','抵達宇治後實際參觀平等院。','平等院','done'],
 ['抹茶','✓ 中村藤吉吃抹茶','在宇治的中村藤吉品嚐抹茶；分店名稱未確認，因此網站以宇治店家泛稱記錄。','中村藤吉 宇治','done'],
 ['回大阪','✓ 返回難波','完成宇治行程後返回大阪難波。','なんば','done'],
 ['晚間','✓ 道頓堀散步','回到大阪後前往道頓堀逛街。','道頓堀','done'],
 ['晚餐','✓ 美津の大阪燒','晚餐實際在道頓堀的美津の（Mizuno）吃大阪燒，作為當日收尾。','お好み焼 美津の','done']
];
const rinkuStops=[
 ['今天','從 VESSEL INN NAMBA 前往臨空城','最後一天改往臨空城，以逛街、用餐與親子休息為主；原訂 Kids Plaza 與今昔館取消。','りんくうタウン駅','current'],
 ['抵達後','臨空城 Premium Outlets','媽媽安排購物，小朋友以推車休息或短時間走動為主；尚未回報抵達，因此暫不標記完成。','りんくうプレミアム・アウトレット','next'],
 ['依體力','Rinku Pleasure Town SEACLE','孩子需要換尿布、用餐或稍微活動時可轉往 SEACLE；是否實際前往待回報。','りんくうプレジャータウン シークル','todo'],
 ['傍晚','返回 VESSEL INN NAMBA','今天不再增加其他遠程景點，回飯店完成行李整理與回程準備。','VESSEL INN NAMBA','todo']
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
 patchCard(21,'宇治與道頓堀行程完成：平等院、抹茶與美津の大阪燒','大阪・宇治・道頓堀 · 週二',['✓ 宇治平等院','✓ 中村藤吉抹茶','✓ 美津の大阪燒'],ujiStops,['✅ 7/21 實際路線：大阪高島屋 → 中書島轉乘 → 宇治平等院 → 中村藤吉抹茶 → 返回難波 → 道頓堀 → 美津の大阪燒。','🍵 中村藤吉的分店未確認；網站以宇治店家泛稱記錄。晚餐店名依官方名稱修正為「美津の（Mizuno）」。'],'52');
 patchCard(22,'最後一天改去臨空城：Outlet逛街與親子休息','臨空城 · 週三',['今天改去臨空城','媽媽逛Outlet','SEACLE依體力'],rinkuStops,['🛍️ 今天取消 Kids Plaza、天神橋筋與今昔館，改去臨空城購物。','👶 小朋友以推車休息、用餐與短時間活動為主；Outlet及SEACLE尚未回報實際到訪，暫不標記完成。'],'53');
}
function start(){patch();setTimeout(patch,350);setTimeout(patch,1200);clearInterval(window.__itineraryFixTimer);window.__itineraryFixTimer=setInterval(patch,1500)}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
window.addEventListener('pageshow',patch);document.addEventListener('visibilitychange',()=>{if(!document.hidden)patch()});
})();