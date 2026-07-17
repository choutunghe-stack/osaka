const CACHE='kansai-warm-ui-v23-force-today';
const VERSION='23';
const CORE=['./','./index.html','./manifest.webmanifest','./family-ui-v6.js','./today-live.js','./travel-tools-v31.js','./route-live-v15.js','./icons/icon-180.png','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
function versionScript(html,name){
 const escaped=name.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
 const re=new RegExp(`<script[^>]+src=["']\\.?\\/?${escaped}(?:\\?[^"']*)?["'][^>]*><\\/script>`,'i');
 const tag=`<script src="./${name}?v=${VERSION}"></script>`;
 return re.test(html)?html.replace(re,tag):html.replace('</body>',tag+'</body>');
}
async function inject(response){
 if(!response||!response.ok)return response;
 const type=response.headers.get('content-type')||'';if(!type.includes('text/html'))return response;
 let html=await response.text();
 ['family-ui-v6.js','travel-tools-v31.js','today-live.js','route-live-v15.js'].forEach(name=>{html=versionScript(html,name)});
 const headers=new Headers(response.headers);headers.set('content-type','text/html; charset=utf-8');headers.set('cache-control','no-store');
 return new Response(html,{status:response.status,statusText:response.statusText,headers});
}
self.addEventListener('fetch',event=>{
 if(event.request.method!=='GET')return;
 const url=new URL(event.request.url);if(url.origin!==location.origin)return;
 const page=event.request.mode==='navigate'||url.pathname.endsWith('/')||url.pathname.endsWith('/index.html');
 if(page){event.respondWith(fetch(event.request,{cache:'no-store'}).then(inject).catch(async()=>inject(await caches.match('./index.html'))));return;}
 event.respondWith(fetch(event.request,{cache:'no-store'}).then(resp=>{const copy=resp.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy));return resp}).catch(()=>caches.match(event.request)));
});