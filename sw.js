if(!self.define){let e,n={};const i=(i,s)=>(i=new URL(i+".js",s).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(n[t])return;let d={};const o=e=>i(e,t),c={module:{uri:t},exports:d,require:o};n[t]=Promise.all(s.map((e=>c[e]||o(e)))).then((e=>(r(...e),d)))}}define(["./workbox-965508a7"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"Index/index.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"Index/index.html",revision:"0baa40a3ee3423f2869b0d5d7fb8a298"},{url:"Index/index.js",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"Index/manifest.json",revision:"75b1ed9c4c9e647b4bdbd7a2fa6e09c8"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
