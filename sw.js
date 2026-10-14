/* Blackwater Bay service worker: cache-first so the game runs offline after the first load.
   Bump VERSION on each release so installed copies pick up the new build. */
const VERSION='bb-v14';
const CORE=['./','./index.html','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png','./icons/maskable-512.png','./icons/apple-touch-icon.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(VERSION).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  const r=e.request;if(r.method!=='GET')return;
  const u=new URL(r.url);
  const font=u.hostname==='fonts.googleapis.com'||u.hostname==='fonts.gstatic.com';
  if(u.origin!==location.origin&&!font)return;
  e.respondWith(caches.open(VERSION).then(async c=>{
    if(r.mode==='navigate'||u.pathname.endsWith('/index.html')||u.pathname.endsWith('/')){
      // network-first for the game page so updates show up immediately; cached copy is the offline fallback
      try{const res=await fetch(r,{cache:'no-cache'});if(res&&res.ok){c.put('./index.html',res.clone());return res;}}catch(e){}
      return (await c.match('./index.html'))||Response.error();
    }
    const hit=await c.match(r,{ignoreSearch:true});
    const net=fetch(r).then(res=>{if(res&&(res.ok||res.type==='opaque'))c.put(r,res.clone());return res;}).catch(()=>null);
    if(hit){e.waitUntil(net);return hit;}   // serve cached, refresh in background
    const res=await net;
    return res||(r.mode==='navigate'?c.match('./index.html'):Response.error());
  }));
});
