if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const l=e=>i(e,t),d={module:{uri:t},exports:o,require:l};s[t]=Promise.all(n.map((e=>d[e]||l(e)))).then((e=>(r(...e),o)))}}define(["./workbox-e1498109"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-BUT_jHR4.css",revision:null},{url:"assets/index-D-vgZ2xW.js",revision:null},{url:"index.html",revision:"7f02ed2e1124e74fb35299879b27bb08"},{url:"registerSW.js",revision:"c9efba4313003d61db381f3033dab82d"},{url:"logo.svg",revision:"7d06c228cd2478414feee148a1843c26"},{url:"manifest.webmanifest",revision:"52e0e9b2b1178c9e483fa6dfe119c196"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
