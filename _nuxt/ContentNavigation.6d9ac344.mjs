import{f as s,C as D,m as g,D as m,E as p,T as V,G as v,H as O,I as c,J as P,b as T,k as d,F as h,K as y,i as L,d as t,_ as r,L as b,M as $,N as S,p as j,O as k,P as C,h as N,r as M}from"./entry.e8d80841.mjs";import"./Markdown.1ca0f815.mjs";import"./TournamentsCalendar.8acf603a.mjs";import"./ContentList.262a40a4.mjs";import"./ContentSlot.fad3ba55.mjs";import"./ProseCode.2da719dc.mjs";const z={name:"layout",mode:"out-in"},x=s({props:{name:{type:[String,Boolean,Object],default:null}},setup(e,_){const n=D();return()=>{var a,u,l;const i=(u=(a=g(e.name)?e.name.value:e.name)!=null?a:n.meta.layout)!=null?u:"default",o=i&&i in p;return m(V,o&&((l=n.meta.layoutTransition)!=null?l:z),m(p[i],o,_.slots)).default()}}}),B=Object.freeze(Object.defineProperty({__proto__:null,default:x},Symbol.toStringTag,{value:"Module"})),w=s({emits:{error(e){return!0}},setup(e,{slots:_,emit:n}){const i=v(null),o=O();return c(a=>{if(!o.isHydrating)return n("error",a),i.value=a,!1}),()=>{var a,u;return i.value?(a=_.error)==null?void 0:a.call(_,{error:i}):(u=_.default)==null?void 0:u.call(_)}}}),q=Object.freeze(Object.defineProperty({__proto__:null,default:w},Symbol.toStringTag,{value:"Module"})),F=s({name:"ClientOnly",props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(e,{slots:_}){const n=v(!1);return P(()=>{n.value=!0}),i=>{var l;if(n.value)return(l=_.default)==null?void 0:l.call(_);const o=_.fallback||_.placeholder;if(o)return o();const a=i.fallback||i.placeholder||"",u=i.fallbackTag||i.placeholderTag||"span";return T(u,null,a)}}});function G(e){const{setup:_,render:n,template:i}=e;return n?e.render=(o,...a)=>{var u,l;return o.mounted$?d(h,null,[d(n(o,...a),(u=o.$attrs)!=null?u:o._.attrs)]):d("div",(l=o.$attrs)!=null?l:o._.attrs)}:i&&(e.template=`
      <template v-if="mounted$">${i}</template>
      <template v-else><div></div></template>
    `),s({...e,setup(o,a){const u=v(!1);return P(()=>{u.value=!0}),Promise.resolve((_==null?void 0:_(o,a))||{}).then(l=>typeof l!="function"?{...l,mounted$:u}:()=>u.value?d(h,null,[d(l(o,a),a.attrs)]):d("div",a.attrs))}})}const H=Object.freeze(Object.defineProperty({__proto__:null,default:F,createClientOnly:G},Symbol.toStringTag,{value:"Module"})),Z=s({name:"ServerPlaceholder",render(){return T("div")}}),J=Object.freeze(Object.defineProperty({__proto__:null,default:Z},Symbol.toStringTag,{value:"Module"})),K=s({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:String,default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(e){const _=U({duration:e.duration,throttle:e.throttle}),n=O();return n.hook("page:start",_.start),n.hook("page:finish",_.finish),y(()=>_.clear),()=>d("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${_.progress.value}%`,height:`${e.height}px`,opacity:_.isLoading.value?1:0,background:e.color,backgroundSize:`${100/_.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}})}});function U(e){const _=v(0),n=v(!1),i=L(()=>1e4/e.duration);let o=null,a=null;function u(){f(),_.value=0,n.value=!0,e.throttle?a=setTimeout(E,e.throttle):E()}function l(){_.value=100,A()}function f(){clearInterval(o),clearTimeout(a),o=null,a=null}function I(R){_.value=Math.min(100,_.value+R)}function A(){f(),setTimeout(()=>{n.value=!1,setTimeout(()=>{_.value=0},400)},500)}function E(){o=setInterval(()=>{I(i.value)},100)}return{progress:_,isLoading:n,start:u,finish:l,clear:f}}const Y=Object.freeze(Object.defineProperty({__proto__:null,default:K},Symbol.toStringTag,{value:"Module"}));t(()=>r(()=>import("./MarkdownBox.55cc231b.mjs"),["_nuxt/MarkdownBox.55cc231b.mjs","_nuxt/Markdown.1ca0f815.mjs","_nuxt/ContentSlot.fad3ba55.mjs","_nuxt/entry.e8d80841.mjs","_nuxt/entry.409b9c27.css"]).then(e=>e.default||e));t(()=>r(()=>import("./TournamentsCalendar.8acf603a.mjs"),["_nuxt/TournamentsCalendar.8acf603a.mjs","_nuxt/entry.e8d80841.mjs","_nuxt/entry.409b9c27.css"]).then(e=>e.default||e));t(()=>r(()=>import("./FooterBar.40abb9f6.mjs"),["_nuxt/FooterBar.40abb9f6.mjs","_nuxt/entry.e8d80841.mjs","_nuxt/entry.409b9c27.css"]).then(e=>e.default||e));t(()=>r(()=>import("./FooterWithButton.f9ba8dc3.mjs"),["_nuxt/FooterWithButton.f9ba8dc3.mjs","_nuxt/BackHomeButton.81ee232c.mjs","_nuxt/entry.e8d80841.mjs","_nuxt/entry.409b9c27.css","_nuxt/FooterBar.40abb9f6.mjs"]).then(e=>e.default||e));t(()=>r(()=>import("./HeroBox.b836dc7e.mjs"),["_nuxt/HeroBox.b836dc7e.mjs","_nuxt/entry.e8d80841.mjs","_nuxt/entry.409b9c27.css"]).then(e=>e.default||e));t(()=>r(()=>import("./LocationCard.e56a702a.mjs"),["_nuxt/LocationCard.e56a702a.mjs","_nuxt/entry.e8d80841.mjs","_nuxt/entry.409b9c27.css"]).then(e=>e.default||e));t(()=>r(()=>import("./LocationHeader.a2223752.mjs"),["_nuxt/LocationHeader.a2223752.mjs","_nuxt/entry.e8d80841.mjs","_nuxt/entry.409b9c27.css"]).then(e=>e.default||e));t(()=>r(()=>import("./LocationList.694e293b.mjs"),["_nuxt/LocationList.694e293b.mjs","_nuxt/LocationCard.e56a702a.mjs","_nuxt/entry.e8d80841.mjs","_nuxt/entry.409b9c27.css","_nuxt/ContentList.262a40a4.mjs"]).then(e=>e.default||e));t(()=>r(()=>import("./TextParagraph.f4919814.mjs"),["_nuxt/TextParagraph.f4919814.mjs","_nuxt/entry.e8d80841.mjs","_nuxt/entry.409b9c27.css"]).then(e=>e.default||e));t(()=>r(()=>import("./RankingContainer.71d38a68.mjs"),["_nuxt/RankingContainer.71d38a68.mjs","_nuxt/entry.e8d80841.mjs","_nuxt/entry.409b9c27.css","_nuxt/RankingTable.f6ce0059.mjs","_nuxt/BackHomeButton.81ee232c.mjs"]).then(e=>e.default||e));t(()=>r(()=>import("./RankingTable.f6ce0059.mjs"),["_nuxt/RankingTable.f6ce0059.mjs","_nuxt/entry.e8d80841.mjs","_nuxt/entry.409b9c27.css","_nuxt/BackHomeButton.81ee232c.mjs"]).then(e=>e.default||e));t(()=>r(()=>import("./BackHomeButton.81ee232c.mjs"),["_nuxt/BackHomeButton.81ee232c.mjs","_nuxt/entry.e8d80841.mjs","_nuxt/entry.409b9c27.css"]).then(e=>e.default||e));t(()=>r(()=>import("./LocationBreadcrumbs.68052ecf.mjs"),["_nuxt/LocationBreadcrumbs.68052ecf.mjs","_nuxt/entry.e8d80841.mjs","_nuxt/entry.409b9c27.css"]).then(e=>e.default||e));t(()=>r(()=>import("./DocumentDrivenEmpty.c27241a0.mjs"),["_nuxt/DocumentDrivenEmpty.c27241a0.mjs","_nuxt/entry.e8d80841.mjs","_nuxt/entry.409b9c27.css"]).then(e=>e.default||e));t(()=>r(()=>import("./DocumentDrivenNotFound.c3c566e8.mjs"),["_nuxt/DocumentDrivenNotFound.c3c566e8.mjs","_nuxt/entry.e8d80841.mjs","_nuxt/entry.409b9c27.css"]).then(e=>e.default||e));t(()=>r(()=>import("./entry.e8d80841.mjs").then(e=>e.a1),["_nuxt/entry.e8d80841.mjs","_nuxt/entry.409b9c27.css"]).then(e=>e.default||e));t(()=>r(()=>import("./ContentList.262a40a4.mjs"),["_nuxt/ContentList.262a40a4.mjs","_nuxt/entry.e8d80841.mjs","_nuxt/entry.409b9c27.css"]).then(e=>e.default||e));t(()=>r(()=>Promise.resolve().then(()=>W),void 0).then(e=>e.default||e));t(()=>r(()=>import("./entry.e8d80841.mjs").then(e=>e.a0),["_nuxt/entry.e8d80841.mjs","_nuxt/entry.409b9c27.css"]).then(e=>e.default||e));t(()=>r(()=>import("./entry.e8d80841.mjs").then(e=>e.$),["_nuxt/entry.e8d80841.mjs","_nuxt/entry.409b9c27.css"]).then(e=>e.default||e));t(()=>r(()=>import("./entry.e8d80841.mjs").then(e=>e.Z),["_nuxt/entry.e8d80841.mjs","_nuxt/entry.409b9c27.css"]).then(e=>e.default||e));t(()=>r(()=>import("./ContentSlot.fad3ba55.mjs"),["_nuxt/ContentSlot.fad3ba55.mjs","_nuxt/entry.e8d80841.mjs","_nuxt/entry.409b9c27.css"]).then(e=>e.default||e));t(()=>r(()=>import("./Markdown.1ca0f815.mjs"),["_nuxt/Markdown.1ca0f815.mjs","_nuxt/ContentSlot.fad3ba55.mjs","_nuxt/entry.e8d80841.mjs","_nuxt/entry.409b9c27.css"]).then(e=>e.default||e));t(()=>r(()=>import("./ProseA.69af3d5d.mjs"),["_nuxt/ProseA.69af3d5d.mjs","_nuxt/entry.e8d80841.mjs","_nuxt/entry.409b9c27.css"]).then(e=>e.default||e));t(()=>r(()=>import("./ProseBlockquote.301a3ef0.mjs"),["_nuxt/ProseBlockquote.301a3ef0.mjs","_nuxt/entry.e8d80841.mjs","_nuxt/entry.409b9c27.css"]).then(e=>e.default||e));t(()=>r(()=>import("./ProseCode.2da719dc.mjs"),["_nuxt/ProseCode.2da719dc.mjs","_nuxt/ProseCode.e63e49c6.css","_nuxt/entry.e8d80841.mjs","_nuxt/entry.409b9c27.css"]).then(e=>e.default||e));t(()=>r(()=>import("./ProseCodeInline.8e99ad44.mjs"),["_nuxt/ProseCodeInline.8e99ad44.mjs","_nuxt/entry.e8d80841.mjs","_nuxt/entry.409b9c27.css"]).then(e=>e.default||e));t(()=>r(()=>import("./ProseEm.53ef3ae8.mjs"),["_nuxt/ProseEm.53ef3ae8.mjs","_nuxt/entry.e8d80841.mjs","_nuxt/entry.409b9c27.css"]).then(e=>e.default||e));t(()=>r(()=>import("./ProseH1.d9b1c7d8.mjs"),["_nuxt/ProseH1.d9b1c7d8.mjs","_nuxt/entry.e8d80841.mjs","_nuxt/entry.409b9c27.css"]).then(e=>e.default||e));t(()=>r(()=>import("./ProseH2.a7d1836c.mjs"),["_nuxt/ProseH2.a7d1836c.mjs","_nuxt/entry.e8d80841.mjs","_nuxt/entry.409b9c27.css"]).then(e=>e.default||e));t(()=>r(()=>import("./ProseH3.627bf5f0.mjs"),["_nuxt/ProseH3.627bf5f0.mjs","_nuxt/entry.e8d80841.mjs","_nuxt/entry.409b9c27.css"]).then(e=>e.default||e));t(()=>r(()=>import("./ProseH4.8b0d642d.mjs"),["_nuxt/ProseH4.8b0d642d.mjs","_nuxt/entry.e8d80841.mjs","_nuxt/entry.409b9c27.css"]).then(e=>e.default||e));t(()=>r(()=>import("./ProseH5.6eb497b7.mjs"),["_nuxt/ProseH5.6eb497b7.mjs","_nuxt/entry.e8d80841.mjs","_nuxt/entry.409b9c27.css"]).then(e=>e.default||e));t(()=>r(()=>import("./ProseH6.e6524e5e.mjs"),["_nuxt/ProseH6.e6524e5e.mjs","_nuxt/entry.e8d80841.mjs","_nuxt/entry.409b9c27.css"]).then(e=>e.default||e));t(()=>r(()=>import("./ProseHr.cf54e78a.mjs"),["_nuxt/ProseHr.cf54e78a.mjs","_nuxt/entry.e8d80841.mjs","_nuxt/entry.409b9c27.css"]).then(e=>e.default||e));t(()=>r(()=>import("./ProseImg.2b9d3c2a.mjs"),["_nuxt/ProseImg.2b9d3c2a.mjs","_nuxt/entry.e8d80841.mjs","_nuxt/entry.409b9c27.css"]).then(e=>e.default||e));t(()=>r(()=>import("./ProseLi.f754a253.mjs"),["_nuxt/ProseLi.f754a253.mjs","_nuxt/entry.e8d80841.mjs","_nuxt/entry.409b9c27.css"]).then(e=>e.default||e));t(()=>r(()=>import("./ProseOl.fe691e68.mjs"),["_nuxt/ProseOl.fe691e68.mjs","_nuxt/entry.e8d80841.mjs","_nuxt/entry.409b9c27.css"]).then(e=>e.default||e));t(()=>r(()=>import("./ProseP.b63215c4.mjs"),["_nuxt/ProseP.b63215c4.mjs","_nuxt/entry.e8d80841.mjs","_nuxt/entry.409b9c27.css"]).then(e=>e.default||e));t(()=>r(()=>import("./ProseStrong.d484e356.mjs"),["_nuxt/ProseStrong.d484e356.mjs","_nuxt/entry.e8d80841.mjs","_nuxt/entry.409b9c27.css"]).then(e=>e.default||e));t(()=>r(()=>import("./ProseTable.53e31758.mjs"),["_nuxt/ProseTable.53e31758.mjs","_nuxt/entry.e8d80841.mjs","_nuxt/entry.409b9c27.css"]).then(e=>e.default||e));t(()=>r(()=>import("./ProseTbody.874ccacd.mjs"),["_nuxt/ProseTbody.874ccacd.mjs","_nuxt/entry.e8d80841.mjs","_nuxt/entry.409b9c27.css"]).then(e=>e.default||e));t(()=>r(()=>import("./ProseTd.fbdfcd3c.mjs"),["_nuxt/ProseTd.fbdfcd3c.mjs","_nuxt/entry.e8d80841.mjs","_nuxt/entry.409b9c27.css"]).then(e=>e.default||e));t(()=>r(()=>import("./ProseTh.939cbbe0.mjs"),["_nuxt/ProseTh.939cbbe0.mjs","_nuxt/entry.e8d80841.mjs","_nuxt/entry.409b9c27.css"]).then(e=>e.default||e));t(()=>r(()=>import("./ProseThead.4d44b44b.mjs"),["_nuxt/ProseThead.4d44b44b.mjs","_nuxt/entry.e8d80841.mjs","_nuxt/entry.409b9c27.css"]).then(e=>e.default||e));t(()=>r(()=>import("./ProseTr.922c9922.mjs"),["_nuxt/ProseTr.922c9922.mjs","_nuxt/entry.e8d80841.mjs","_nuxt/entry.409b9c27.css"]).then(e=>e.default||e));t(()=>r(()=>import("./ProseUl.2b51ed5b.mjs"),["_nuxt/ProseUl.2b51ed5b.mjs","_nuxt/entry.e8d80841.mjs","_nuxt/entry.409b9c27.css"]).then(e=>e.default||e));t(()=>r(()=>import("./welcome.4bab9909.mjs"),["_nuxt/welcome.4bab9909.mjs","_nuxt/entry.e8d80841.mjs","_nuxt/entry.409b9c27.css","_nuxt/Markdown.1ca0f815.mjs","_nuxt/ContentSlot.fad3ba55.mjs","_nuxt/TournamentsCalendar.8acf603a.mjs","_nuxt/ContentList.262a40a4.mjs","_nuxt/ProseCode.2da719dc.mjs","_nuxt/ProseCode.e63e49c6.css"]).then(e=>e.default||e));t(()=>r(()=>Promise.resolve().then(()=>B),void 0).then(e=>e.default||e));t(()=>r(()=>Promise.resolve().then(()=>q),void 0).then(e=>e.default||e));t(()=>r(()=>Promise.resolve().then(()=>H),void 0).then(e=>e.default||e));t(()=>r(()=>Promise.resolve().then(()=>J),void 0).then(e=>e.default||e));t(()=>r(()=>import("./entry.e8d80841.mjs").then(e=>e.Y),["_nuxt/entry.e8d80841.mjs","_nuxt/entry.409b9c27.css"]).then(e=>e.default||e));t(()=>r(()=>Promise.resolve().then(()=>Y),void 0).then(e=>e.default||e));const Q=s({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:_}=b(e),n=L(()=>{var o;return typeof((o=_.value)==null?void 0:o.params)=="function"?_.value.params():_.value});if(!n.value&&$("dd-navigation","$uZG8FPfPFO").value){const{navigation:o}=S();return{navigation:o}}const{data:i}=await j(`content-navigation-${C(n.value)}`,()=>k(n.value),"$PvabOv8uEB");return{navigation:i}},render(e){const _=N(),{navigation:n}=e,i=u=>d(M,{to:u._path},()=>u.title),o=(u,l)=>d("ul",l?{"data-level":l}:null,u.map(f=>f.children?d("li",null,[i(f),o(f.children,l+1)]):d("li",null,i(f)))),a=u=>o(u,0);return _!=null&&_.default?_.default({navigation:n,...this.$attrs}):a(n)}}),W=Object.freeze(Object.defineProperty({__proto__:null,default:Q},Symbol.toStringTag,{value:"Module"}));export{Q as default};
