import{P as a,g as t,a as s,b as e}from"./PanelGroup.4f4190d5.js";import{d as i,m as o,r as n,o as l,c as d,g as m,w as p,a as r,Y as u,k as c,b2 as f}from"./index.97fe2dd0.js";import{a as h,E as g}from"./el-col.17edff49.js";import{E as y}from"./el-card.9e22a50f.js";import{E as x}from"./el-skeleton-item.b94346b9.js";import{p as b,b as _,l as j,_ as v}from"./Echart.afd0416e.js";import"./CountTo.6e1fc836.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./typescript2.50fc0493.js";import"./debounce.afeae77d.js";const w=i({name:"Analysis",setup(i){const{t:w}=c(),E=o(!0),A=n(b),P=async()=>{const a=await t().catch((()=>{}));a&&(f(A,"legend.data",a.data.map((a=>w(a.name)))),f(A,"series.data",a.data))},k=n(_),D=async()=>{const a=await s().catch((()=>{}));a&&(f(k,"xAxis.data",a.data.map((a=>w(a.name)))),f(k,"series",[{name:w("analysis.activeQuantity"),data:a.data.map((a=>a.value)),type:"bar"}]))},O=n(j),q=async()=>{const a=await e().catch((()=>{}));a&&(f(O,"xAxis.data",a.data.map((a=>w(a.name)))),f(O,"series",[{name:w("analysis.estimate"),smooth:!0,type:"line",data:a.data.map((a=>a.estimate)),animationDuration:2800,animationEasing:"cubicInOut"},{name:w("analysis.actual"),smooth:!0,type:"line",itemStyle:{},data:a.data.map((a=>a.actual)),animationDuration:2800,animationEasing:"quadraticOut"}]))};return(async()=>{await Promise.all([P(),D(),q()]),E.value=!1})(),(t,s)=>(l(),d(u,null,[m(a),m(r(h),{gutter:20,justify:"space-between"},{default:p((()=>[m(r(g),{xl:10,lg:10,md:24,sm:24,xs:24},{default:p((()=>[m(r(y),{shadow:"hover",class:"mb-20px"},{default:p((()=>[m(r(x),{loading:E.value,animated:""},{default:p((()=>[m(r(v),{options:r(A),height:300},null,8,["options"])])),_:1},8,["loading"])])),_:1})])),_:1}),m(r(g),{xl:14,lg:14,md:24,sm:24,xs:24},{default:p((()=>[m(r(y),{shadow:"hover",class:"mb-20px"},{default:p((()=>[m(r(x),{loading:E.value,animated:""},{default:p((()=>[m(r(v),{options:r(k),height:300},null,8,["options"])])),_:1},8,["loading"])])),_:1})])),_:1}),m(r(g),{span:24},{default:p((()=>[m(r(y),{shadow:"hover",class:"mb-20px"},{default:p((()=>[m(r(x),{loading:E.value,animated:"",rows:4},{default:p((()=>[m(r(v),{options:r(O),height:350},null,8,["options"])])),_:1},8,["loading"])])),_:1})])),_:1})])),_:1})],64))}});export{w as default};
