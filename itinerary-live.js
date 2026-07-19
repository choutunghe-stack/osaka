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
 ['稍早','✓ 西梅田（已抵達）','已抵達西梅田地下街一帶，之後移動到大阪梅田站周邊。','西梅田駅','done'],
 ['之後','✓ 阪急梅田本店','在阪急梅田總店 B1 食品樓層逛街，並確認海外旅客服務與退稅位置。','阪急うめだ本店','done'],
 ['之後','✓ 阪急百貨退稅','已前往退稅櫃台辦理當日阪急梅田總店購物退稅。','阪急うめだ本店 免税カウンター','done'],
 ['之後','✓ Yodobashi Umeda 5F','已前往5樓玩具、模型與公仔區搜尋 HUNTER×HUNTER 與《神劍闖江湖／るろうに剣心》。','ヨドバシカメラ マルチメディア梅田','done'],
 ['剛剛','✓ 駿河屋梅田茶屋町店','已完成5、6樓模型與公仔賣場搜尋；店內包含新品、二手與動漫收藏品。','駿河屋 梅田茶屋町店','done'],
 ['下一站','animate 梅田（NU茶屋町3F）','從駿河屋步行短程返回 NU茶屋町；整個3樓都是動漫商品、書籍與角色周邊，適合再補找獵人與神劍商品。','アニメイト梅田','next'],
 ['選配','Mandarake 梅田店','若仍想找二手、舊版或絕版公仔，再前往 Mandarake；不再找模型則直接省略。','まんだらけ うめだ店','todo'],
 ['晚餐','Grand Front／LUCUA／LINKS UMEDA','逛完後回大阪站商場吃飯、讓孩子休息，再視體力返程。','グランフロント大阪','todo'],
 ['晚間','返回 VESSEL INN NAMBA','由梅田或東梅田搭地鐵返回難波，不再安排遠距離景點。','VESSEL INN NAMBA','todo']
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
 patchCard(19,'駿河屋模型搜尋完成，下一站 animate 梅田','梅田 · 週日',['✓ Yodobashi','✓ 駿河屋完成','下一站：animate'],umedaStops,['🎯 目前完成：阪急百貨退稅 → Yodobashi Umeda 5F → 駿河屋梅田茶屋町店。','➡️ 最順下一站：步行到附近 NU茶屋町3F animate 梅田；若已不想繼續找動漫商品，直接回 Grand Front／LUCUA／LINKS UMEDA 吃飯休息。'],'44');
}
function start(){patch();setTimeout(patch,350);setTimeout(patch,1200);clearInterval(window.__itineraryFixTimer);window.__itineraryFixTimer=setInterval(patch,1500)}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
window.addEventListener('pageshow',patch);document.addEventListener('visibilitychange',()=>{if(!document.hidden)patch()});
})();