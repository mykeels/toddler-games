if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const c=e=>i(e,t),l={module:{uri:t},exports:o,require:c};s[t]=Promise.all(r.map((e=>l[e]||c(e)))).then((e=>(n(...e),o)))}}define(["./workbox-e1498109"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-B3ro7RzV.css",revision:null},{url:"assets/index-QRNWBrp5.js",revision:null},{url:"index.html",revision:"8cfbaa8e4845ccc52e6154e1d14e4042"},{url:"registerSW.js",revision:"c9efba4313003d61db381f3033dab82d"},{url:"logo.svg",revision:"7d06c228cd2478414feee148a1843c26"},{url:"manifest.webmanifest",revision:"c7bfebcf70a47a59e44ff97c90eead6e"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
