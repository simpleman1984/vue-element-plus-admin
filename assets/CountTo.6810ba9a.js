import{_ as e}from"./ContentWrap.e07f1ebb.js";import{d as a,m as l,o as t,v as s,w as o,a as m,k as u,e as n,g as r,t as d,x as i}from"./index.97fe2dd0.js";import{_ as p}from"./CountTo.6e1fc836.js";import{E as c,a as x}from"./el-col.17edff49.js";import{E as f}from"./el-input-number.67ea44bd.js";import{E as v}from"./el-input.fe8da8a8.js";import{E as V}from"./el-button.c0a5966c.js";import"./el-card.9e22a50f.js";import"./el-popper.6c2f2517.js";import"./index2.69e85052.js";import"./typescript2.50fc0493.js";import"./index2.16a5102f.js";import"./index2.209887a3.js";import"./index2.f670704e.js";import"./arrow-up.052c2e24.js";import"./arrow-down.7bc41cb3.js";import"./event2.aca9aa52.js";const j={class:"text-center mb-40px"},b={class:"flex mb-20px items-center"},g={class:"min-w-90px text-right"},T={class:"flex mb-20px items-center"},_={class:"min-w-90px text-right"},D={class:"flex mb-20px items-center"},w={class:"min-w-90px text-right"},y={class:"flex mb-20px items-center"},h={class:"min-w-90px text-right"},U={class:"flex mb-20px items-center"},C={class:"min-w-90px text-right"},k={class:"flex mb-20px items-center"},E={class:"min-w-90px text-right"},R={class:"text-center"},W=a({name:"CountTo",setup(a){const{t:W}=u(),q=l(),z=l(0),A=l(1314512),B=l(3e3),F=l(0),G=l(","),H=l("¥ "),I=l(" rmb"),J=l(!1),K=()=>{var e;null==(e=m(q))||e.start()},L=()=>{var e;null==(e=m(q))||e.pauseResume()};return(a,l)=>(t(),s(m(e),{title:m(W)("countToDemo.countTo"),message:m(W)("countToDemo.countToDes")},{default:o((()=>[n("div",j,[r(m(p),{ref_key:"countRef",ref:q,"start-val":z.value,"end-val":A.value,duration:B.value,decimals:F.value,separator:G.value,prefix:H.value,suffix:I.value,autoplay:J.value,class:"text-30px font-bold text-[var(--el-color-primary)]"},null,8,["start-val","end-val","duration","decimals","separator","prefix","suffix","autoplay"])]),r(m(x),{gutter:20,justify:"space-between"},{default:o((()=>[r(m(c),{xl:8,lg:8,md:12,sm:24,xs:24},{default:o((()=>[n("div",b,[n("span",g,d(m(W)("countToDemo.startVal"))+"：",1),r(m(f),{modelValue:z.value,"onUpdate:modelValue":l[0]||(l[0]=e=>z.value=e),min:0},null,8,["modelValue"])])])),_:1}),r(m(c),{xl:8,lg:8,md:12,sm:24,xs:24},{default:o((()=>[n("div",T,[n("span",_,d(m(W)("countToDemo.endVal"))+"：",1),r(m(f),{modelValue:A.value,"onUpdate:modelValue":l[1]||(l[1]=e=>A.value=e),min:1},null,8,["modelValue"])])])),_:1}),r(m(c),{xl:8,lg:8,md:12,sm:24,xs:24},{default:o((()=>[n("div",D,[n("span",w,d(m(W)("countToDemo.duration"))+"：",1),r(m(f),{modelValue:B.value,"onUpdate:modelValue":l[2]||(l[2]=e=>B.value=e),min:1e3},null,8,["modelValue"])])])),_:1}),r(m(c),{xl:8,lg:8,md:12,sm:24,xs:24},{default:o((()=>[n("div",y,[n("span",h,d(m(W)("countToDemo.separator"))+"：",1),r(m(v),{modelValue:G.value,"onUpdate:modelValue":l[3]||(l[3]=e=>G.value=e)},null,8,["modelValue"])])])),_:1}),r(m(c),{xl:8,lg:8,md:12,sm:24,xs:24},{default:o((()=>[n("div",U,[n("span",C,d(m(W)("countToDemo.prefix"))+"：",1),r(m(v),{modelValue:H.value,"onUpdate:modelValue":l[4]||(l[4]=e=>H.value=e)},null,8,["modelValue"])])])),_:1}),r(m(c),{xl:8,lg:8,md:12,sm:24,xs:24},{default:o((()=>[n("div",k,[n("span",E,d(m(W)("countToDemo.suffix"))+"：",1),r(m(v),{modelValue:I.value,"onUpdate:modelValue":l[5]||(l[5]=e=>I.value=e)},null,8,["modelValue"])])])),_:1}),r(m(c),{span:24},{default:o((()=>[n("div",R,[r(m(V),{type:"primary",onClick:K},{default:o((()=>[i(d(m(W)("countToDemo.start")),1)])),_:1}),r(m(V),{onClick:L},{default:o((()=>[i(d(m(W)("countToDemo.pause"))+"/"+d(m(W)("countToDemo.resume")),1)])),_:1})])])),_:1})])),_:1})])),_:1},8,["title","message"]))}});export{W as default};
