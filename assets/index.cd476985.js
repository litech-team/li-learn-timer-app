import{d as h,c as v,w as i,V as y,r as g,o as u,a as c,b,e as w,F as L,f as d,g as $,h as E,i as P,j as x}from"./vendor.8c569e7b.js";const O=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}};O();var f=(a,n)=>{const s=a.__vccOpts||a;for(const[t,e]of n)s[t]=e;return s};const V=h({name:"App"});function k(a,n,s,t,e,r){const o=g("router-view");return u(),v(y,null,{default:i(()=>[c(b,null,{default:i(()=>[c(o)]),_:1})]),_:1})}var A=f(V,[["render",k]]);const C="modulepreload",l={},F="/litech-team/",p=function(n,s){return!s||s.length===0?n():Promise.all(s.map(t=>{if(t=`${F}${t}`,t in l)return;l[t]=!0;const e=t.endsWith(".css"),r=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${r}`))return;const o=document.createElement("link");if(o.rel=e?"stylesheet":C,e||(o.as="script",o.crossOrigin=""),o.href=t,document.head.appendChild(o),e)return new Promise((m,_)=>{o.addEventListener("load",m),o.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>n())},N={},R=d("h1",null,"Welcome! This is index.vue Page!",-1),S=d("a",{href:"/about"},"To about.vue Page!",-1);function B(a,n){return u(),w(L,null,[R,S],64)}var T=f(N,[["render",B]]);const I=[{name:"about",path:"/about",component:()=>p(()=>import("./about.945aad36.js"),["assets/about.945aad36.js","assets/vendor.8c569e7b.js","assets/vendor.6ba13eea.css"]),props:!0},{name:"index",path:"/",component:T,props:!0}],W=$({history:E(),routes:I});var q=P();async function D(){(await p(()=>import("./webfontloader.cd097671.js").then(function(n){return n.w}),[])).load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}D();x(A).use(W).use(q).mount("#app");export{f as _};
