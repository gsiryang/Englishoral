'use strict';
const CACHE='shengzhang-static-v1';
const FILES=['./','./index.html','./styles.css','./curriculum.js','./app.js','./icon.svg','./manifest.webmanifest'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES)));});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('shengzhang-static-')&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',event=>{
 const request=event.request,url=new URL(request.url);
 if(request.method!=='GET'||url.origin!==self.location.origin)return;
 // Prefer fresh files online; use the cached app only when the network fails.
 event.respondWith(fetch(request).then(response=>{if(response.ok&&FILES.some(path=>new URL(path,self.registration.scope).pathname===url.pathname)){const copy=response.clone();event.waitUntil(caches.open(CACHE).then(cache=>cache.put(request,copy)));}return response;}).catch(()=>caches.match(request).then(cached=>cached||(request.mode==='navigate'?caches.match(new URL('./index.html',self.registration.scope).href):Response.error()))));
});
