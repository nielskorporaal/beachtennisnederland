import r from"./LocationCard.17db1f4e.mjs";import i from"./ContentList.bea1dcb0.mjs";import{a as _,o as t,b as s,q as o,e as d,w as m,F as l,v as p,c as g}from"./entry.2c893493.mjs";const f={},h={class:"min-h-screen container m-auto p-10 pt-0",id:"locations"},u=o("h1",{class:"font-semibold text-2xl py-10"},"Locaties",-1),x={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-items-center gap-16 mb-10"};function L(b,k){const a=r,c=i;return t(),s("div",h,[u,o("div",x,[d(c,{query:{where:{_path:{$ne:"/locaties"}}},path:"/locaties"},{default:m(({list:n})=>[(t(!0),s(l,null,p(n,e=>(t(),g(a,{key:e._path,location:{name:e.name,description:e.description,tag:e.tag,badges:e.badges,image:e.image},to:e._path},null,8,["location","to"]))),128))]),_:1})])])}const w=_(f,[["render",L]]);export{w as default};
