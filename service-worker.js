"use strict";var precacheConfig=[["/Films/index.html","f0ae9d285465ec523e42c09685c5a951"],["/Films/static/css/main.68c7fc40.css","72259334c753cd531d447b565cfbf89d"],["/Films/static/js/main.44daddc1.js","e3d7a761a63c45f3501c20ede2e6e838"],["/Films/static/media/1.0a839a64.jpg","0a839a64b813286f2a5d0aaf32aa1bbb"],["/Films/static/media/1.25d3086e.jpg","25d3086e033b78446d2f51730c7eed8c"],["/Films/static/media/1.4dfa4ef9.jpg","4dfa4ef9dea376f461d9c260dee782cb"],["/Films/static/media/1.5bd7303c.jpg","5bd7303c6f0e661c5d6619164e9a23dd"],["/Films/static/media/1.7cdf02c6.jpg","7cdf02c6d2a4800b94d63e7863c6bbfc"],["/Films/static/media/1.8890049b.jpg","8890049bec1a7acb367574be3b038a93"],["/Films/static/media/1.a8800855.jpg","a8800855c0f2defc3ffce93602391195"],["/Films/static/media/1.f4d79d99.jpg","f4d79d99d37693d19da08c5ead1779e6"],["/Films/static/media/1.f913c10a.jpg","f913c10a5cae611eed307219baa77475"],["/Films/static/media/2.13eadb8d.jpg","13eadb8d3d2b04125ce50a04d2be7eb9"],["/Films/static/media/2.182c32ec.jpg","182c32ecde7b35a060b3e3afdf6a08f4"],["/Films/static/media/2.1915806a.jpg","1915806aaea9d88bebfe91ba15ff80bd"],["/Films/static/media/2.2635c2a5.jpg","2635c2a5567f86721280cab95d13bfec"],["/Films/static/media/2.777a685b.jpg","777a685bb8a9602f11f91ec942c116e8"],["/Films/static/media/2.a3623de3.jpg","a3623de3ead15c14a4b6b2799fcf1010"],["/Films/static/media/2.cefaa5fc.jpg","cefaa5fcd562a00af80871fdc0fbe791"],["/Films/static/media/2.d3089903.jpg","d30899033b5767991cabef0e6de4de6d"],["/Films/static/media/2.f6d4bc5d.jpg","f6d4bc5d4fb122749d7a3fa0adc205ca"],["/Films/static/media/3.2967e597.jpg","2967e5971ea1d8a39e3fda3c3c6d9af7"],["/Films/static/media/3.3094523b.jpg","3094523b6d90d77bf7412799ec6e32a9"],["/Films/static/media/3.5e2e30df.jpg","5e2e30dfc70e230f5a763ae03a660e16"],["/Films/static/media/3.71237048.jpg","71237048e9717557018ea4d588deaff0"],["/Films/static/media/3.aee2a45d.jpg","aee2a45d4c2286aaf083d7c375b9f23e"],["/Films/static/media/3.d02b4617.jpg","d02b4617f47e58de709264b6455b3f86"],["/Films/static/media/3.d535b642.jpg","d535b642162955247429e8b3b86420d1"],["/Films/static/media/3.f40d8407.jpg","f40d8407afb742eb6cb471d206d5e196"],["/Films/static/media/3.f8f7b97c.jpg","f8f7b97c15fa25680b44d2a645ec7a45"],["/Films/static/media/5b7d242ce2ff1252e007abbc.2bf65dc8.jpg","2bf65dc83c6e03c0433c38aba97cf798"],["/Films/static/media/5b7d246ae2ff1252e007abbd.fb7ae091.jpg","fb7ae0916ab69044088f322240527318"],["/Films/static/media/5b7d247ee2ff1252e007abbe.afd42201.jpg","afd42201c96e9ae79c6f8fd63178db12"],["/Films/static/media/5b7d2499e2ff1252e007abbf.bfbd9274.jpg","bfbd927438b419f0724565a907a7ad83"],["/Films/static/media/5b7d24b0e2ff1252e007abc0.13db85ac.jpg","13db85ac0a7945f3275f00234730a3d0"],["/Films/static/media/5b7d24c6e2ff1252e007abc1.6bf97cf3.jpg","6bf97cf36fb470ff2cd98c770dfe13ce"],["/Films/static/media/5b7d24dae2ff1252e007abc2.3b50e094.jpg","3b50e0949e2fb2e9be2c5e537b088256"],["/Films/static/media/5b7d24f7e2ff1252e007abc3.52f755a1.jpg","52f755a1b7073a0f14699569ae9b3fa9"],["/Films/static/media/5b8520d2fb6fc0183b42d353.19999b3b.jpg","19999b3b3d43729767c466c20adc283d"],["/Films/static/media/filmsBackground1.860b6526.jpg","860b65261fe62534320b48b3a7d63cd0"],["/Films/static/media/fontawesome-webfont.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/Films/static/media/fontawesome-webfont.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/Films/static/media/fontawesome-webfont.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/Films/static/media/fontawesome-webfont.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/Films/static/media/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var i=new URL(e);return c&&i.pathname.match(c)||(i.search+=(i.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),i.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),i=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),i]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var i="/Films/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(i,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});