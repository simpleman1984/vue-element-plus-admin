var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,n=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,o=(e,t)=>{for(var a in t||(t={}))r.call(t,a)&&n(e,a,t[a]);if(s)for(var a of s(t))l.call(t,a)&&n(e,a,t[a]);return e},i=(e,s)=>t(e,a(s));import{d as u,ah as p,o as c,c as m,e as v,m as d,C as f,q as y,E as k,Q as g,v as w,a as b,W as h,n as O,_ as j,J as x,Y as P,a7 as E,z as S,g as $,V as _,K as z,$ as B,a0 as I}from"./index.97fe2dd0.js";const L=u({name:"PictureFilled"}),N={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},C=[v("path",{fill:"currentColor",d:"M96 896a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h832a32 32 0 0 1 32 32v704a32 32 0 0 1-32 32H96zm315.52-228.48-68.928-68.928a32 32 0 0 0-45.248 0L128 768.064h778.688l-242.112-290.56a32 32 0 0 0-49.216 0L458.752 665.408a32 32 0 0 1-47.232 2.112zM256 384a96 96 0 1 0 192.064-.064A96 96 0 0 0 256 384z"},null,-1)];var M=p(L,[["render",function(e,t,a,s,r,l){return c(),m("svg",N,C)}]]);const T=k({animated:{type:Boolean,default:!1},count:{type:Number,default:1},rows:{type:Number,default:3},loading:{type:Boolean,default:!0},throttle:{type:Number}}),V=k({variant:{type:String,values:["circle","rect","h1","h3","text","caption","p","image","button"],default:"text"}});var q=j(u(i(o({},{name:"ElSkeletonItem"}),{props:V,setup(e){const t=g("skeleton");return(e,a)=>(c(),m("div",{class:O([b(t).e("item"),b(t).e(e.variant)])},["image"===e.variant?(c(),w(b(M),{key:0})):h("v-if",!0)],2))}})),[["__file","/home/runner/work/element-plus/element-plus/packages/components/skeleton/src/skeleton-item.vue"]]);const A=B(j(u(i(o({},{name:"ElSkeleton"}),{props:T,setup(e,{expose:t}){const a=e,s=g("skeleton"),r=((e,t=0)=>{if(0===t)return e;const a=d(!1);let s=0;const r=()=>{s&&clearTimeout(s),s=window.setTimeout((()=>{a.value=e.value}),t)};return f(r),y((()=>e.value),(e=>{e?r():a.value=e})),a})(x(a,"loading"),a.throttle);return t({uiLoading:r}),(e,t)=>b(r)?(c(),m("div",_({key:0,class:[b(s).b(),b(s).is("animated",e.animated)]},e.$attrs),[(c(!0),m(P,null,E(e.count,(t=>(c(),m(P,{key:t},[e.loading?S(e.$slots,"template",{key:t},(()=>[$(q,{class:O(b(s).is("first")),variant:"p"},null,8,["class"]),(c(!0),m(P,null,E(e.rows,(t=>(c(),w(q,{key:t,class:O([b(s).e("paragraph"),b(s).is("last",t===e.rows&&e.rows>1)]),variant:"p"},null,8,["class"])))),128))])):h("v-if",!0)],64)))),128))],16)):S(e.$slots,"default",z(_({key:1},e.$attrs)))}})),[["__file","/home/runner/work/element-plus/element-plus/packages/components/skeleton/src/skeleton.vue"]]),{SkeletonItem:q});I(q);export{A as E};
