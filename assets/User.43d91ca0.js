import{_ as e}from"./ContentWrap.e07f1ebb.js";import{d as a,k as s,aB as r,m as t,o,v as i,w as m,g as l,a as p,x as n,t as d}from"./index.97fe2dd0.js";import{_ as c}from"./Table.vue_vue_type_script_lang.7781a871.js";import{b as f}from"./index.0a4e534d.js";import{E as u}from"./el-button.c0a5966c.js";import"./el-card.9e22a50f.js";import"./el-popper.6c2f2517.js";import"./index2.69e85052.js";import"./tsxHelper.0349c8ea.js";import"./index2.f670704e.js";import"./index2.209887a3.js";import"./event2.aca9aa52.js";import"./el-input.fe8da8a8.js";import"./typescript2.50fc0493.js";import"./el-tag.00c24b33.js";import"./resize-event2.a18eb0b5.js";import"./index2.16a5102f.js";import"./scroll2.65f280d4.js";import"./debounce.afeae77d.js";import"./validator2.79f79b41.js";import"./arrow-up.052c2e24.js";import"./arrow-down.7bc41cb3.js";import"./arrow-right.f5ca606d.js";import"./arrow-left.59f218a3.js";const j=a({name:"User",setup(a){const{t:j}=s(),b=[{field:"index",label:j("userDemo.index"),type:"index"},{field:"username",label:j("userDemo.username")},{field:"password",label:j("userDemo.password")},{field:"role",label:j("userDemo.role")},{field:"remark",label:j("userDemo.remark"),formatter:e=>r("span","admin"===e.username?j("userDemo.remarkMessage1"):j("userDemo.remarkMessage2"))},{field:"action",label:j("userDemo.action")}],g=t(!0);let x=t([]);(async e=>{const a=await f({params:e||{pageIndex:1,pageSize:10}}).catch((()=>{})).finally((()=>{g.value=!1}));a&&(x.value=a.data.list)})();return(a,s)=>(o(),i(p(e),{title:p(j)("userDemo.title"),message:p(j)("userDemo.message")},{default:m((()=>[l(p(c),{columns:b,data:p(x),loading:g.value,selection:!1},{action:m((e=>[l(p(u),{type:"primary",onClick:e=>{}},{default:m((()=>[n(d(p(j)("tableDemo.action")),1)])),_:2},1032,["onClick"])])),_:1},8,["data","loading"])])),_:1},8,["title","message"]))}});export{j as default};
