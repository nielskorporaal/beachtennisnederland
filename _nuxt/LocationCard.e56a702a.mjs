import{a as d,o as a,b as o,q as e,s as c,t as s,F as l,v as r,e as _,w as u,r as h}from"./entry.e8d80841.mjs";const m={name:"LocationCard",props:["location","to"]},g={class:"card bg-base-100 w-80 dark:bg-base-300 shadow-xl hover:scale-105 hover:shadow-2xl focus-within:scale-105 transition duration-200 ease-in-out"},b=["src"],x={key:1,src:"https://placeimg.com/400/125/arch"},f={class:"card-body"},k={class:"card-title"},v={class:"badge badge-secondary"},y={class:"card-actions justify-end"},p=c("Meer informatie");function w(N,B,t,L,V,C){const i=h;return a(),o("div",g,[e("figure",null,[t.location.image?(a(),o("img",{key:0,src:t.location.image,class:"bg-base-200 min-h-[70px] py-5"},null,8,b)):(a(),o("img",x))]),e("div",f,[e("h2",k,[c(s(t.location.name)+" ",1),e("div",v,s(t.location.tag),1)]),e("p",null,s(t.location.description),1),e("div",y,[(a(!0),o(l,null,r(t.location.badges,n=>(a(),o("div",{key:n.name,class:"badge badge-outline"},[e("a",null,s(n.name),1)]))),128))]),_(i,{to:t.to,class:"link hover:text-sky-700"},{default:u(()=>[p]),_:1},8,["to"])])])}const j=d(m,[["render",w]]);export{j as default};
