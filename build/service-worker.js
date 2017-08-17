"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","44c2a650465a65370d2a73d4dedf5e50"],["/static/css/main.802baead.css","05923fd76526489fbda58c69e92ce5f6"],["/static/js/main.1856344a.js","efc5d8913047eedf219601c4b837eaf9"],["/static/media/b1.1379c07a.jpg","1379c07a09f156edeb2b2cc9676a4a91"],["/static/media/b2.72781566.png","727815663a4a8db959f70dca2b1db402"],["/static/media/b3.ec8590bb.png","ec8590bbd810ca125abd62ff62e0e95a"],["/static/media/b4.d2859c2f.jpg","d2859c2f5013c930947cb867ba26ccb8"],["/static/media/check-circle-o.832ff1df.svg","832ff1df2f863d8b2eee1cc038ac074c"],["/static/media/check-circle.85234955.svg","852349559dd5a49777f5aa05c991d001"],["/static/media/check.4e29f00a.svg","4e29f00a43e282ced5e0267523dab80f"],["/static/media/common.9c05d70f.less","9c05d70ffdf4fad95f63c088742bf0d3"],["/static/media/cross-circle-o.50fa4a02.svg","50fa4a0252cc85805477e010e2c73f34"],["/static/media/cross-circle.0499596d.svg","0499596da5fe2f7c050ab16f043acc88"],["/static/media/cross.386b7998.svg","386b7998edb0f6cf2bd7108c7ff3b850"],["/static/media/down.3531720c.svg","3531720c0e1c9b079d5318be0b0dd398"],["/static/media/ellipsis-circle.d4107a7c.svg","d4107a7c892a4f79ff4c8c089ac093c3"],["/static/media/ellipsis.dcac1012.svg","dcac101261350eeef005b78cd1e07d5a"],["/static/media/exclamation-circle.7972237c.svg","7972237c4507882fa254407beb501334"],["/static/media/index.1e084714.less","1e084714e59ca5def325beb609038e26"],["/static/media/index.34bab71c.less","34bab71c5b9b8810c6dff6015ba89a19"],["/static/media/index.6e9eee40.less","6e9eee4055393148438cc55dfad0e94b"],["/static/media/index.814fece4.less","814fece4cc7cdd71f54462b55ff99275"],["/static/media/index.84f1903e.less","84f1903e2c3dd3a064779915fa3fa700"],["/static/media/index.ab1b97ef.less","ab1b97ef9abb71b5a1b20ca1739fa23b"],["/static/media/index.b508f9bc.less","b508f9bce81c392bccbc16543830e354"],["/static/media/info-circle.159afecb.svg","159afecbe04866ff1c731a226b375726"],["/static/media/koubei-o.54ecfaff.svg","54ecfaff3fdb4a85c32c5a278f4bc9b2"],["/static/media/koubei.f66ae400.svg","f66ae400a627f579a7f96d15a0c6396a"],["/static/media/left.dfec4f9b.svg","dfec4f9b9a4fe5c454c3d8580916b18f"],["/static/media/loading.8bd8cb59.svg","8bd8cb590395bcc61189537d29a14067"],["/static/media/question-circle.8495b322.svg","8495b3221d1ccb6ea3af90b65265d065"],["/static/media/right.3ecfeac8.svg","3ecfeac8e6a7cc412d7832c2799ee4cf"],["/static/media/search.93c48a7f.svg","93c48a7f488c124bb7ec4a3e2ceaf55f"],["/static/media/up.e987c697.svg","e987c697908f92b77bd49ba0a0aaea8b"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,c,t){var s=new URL(e);return t&&s.pathname.match(t)||(s.search+=(s.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),s.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,a){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],t=new URL(a,self.location),s=createCacheKey(t,hashParamName,c,/\.\w{8}\./);return[t.toString(),s]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!a.has(c)){var t=new Request(c,{credentials:"same-origin"});return fetch(t).then(function(a){if(!a.ok)throw new Error("Request for "+c+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(c,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!a.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),a=urlsToCacheKeys.has(c));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(c)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});