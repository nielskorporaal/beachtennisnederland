import{a as i,o,b as n,p as a,x as r,y as t,F as d,z as l}from"./entry-e34570fc.mjs";const _={name:"LocationCard",props:["location","to"]},u=a("figure",null,[a("img",{src:"https://placeimg.com/400/225/arch"})],-1),b={class:"card-body"},g={class:"card-title"},m={class:"badge badge-secondary"},h={class:"card-actions justify-end"};function f(p,c,e,v,x,y){return o(),n("div",{class:"card w-80 min-w-80 bg-base-100 dark:bg-base-300 shadow-xl hover:bg-base-200 focus-within:bg-base-200 cursor-pointer",onClick:c[0]||(c[0]=s=>this.$router.push(e.to))},[u,a("div",b,[a("h2",g,[r(t(e.location.name)+" ",1),a("div",m,t(e.location.tag),1)]),a("p",null,t(e.location.description),1),a("div",h,[(o(!0),n(d,null,l(e.location.badges,s=>(o(),n("div",{key:s.name,class:"badge badge-outline"},[a("a",null,t(s.name),1)]))),128))])])])}var w=i(_,[["render",f]]);export{w as default};
