import e from"./Write.eab640d5.js";import{_ as a}from"./ContentDetailWrap.494110aa.js";import{d as t,u as r,m as i,o,v as s,w as p,a as m,k as l,g as d,x as c,t as j}from"./index.97fe2dd0.js";import{E as f}from"./el-button.c0a5966c.js";import{s as n}from"./index.c7c9b38f.js";import{u}from"./useEmitt.6c91c272.js";import"./Form.bdf50ef4.js";import"./el-col.17edff49.js";import"./typescript2.50fc0493.js";import"./el-popper.6c2f2517.js";import"./index2.69e85052.js";import"./el-input.fe8da8a8.js";import"./index2.f670704e.js";import"./event2.aca9aa52.js";import"./index2.209887a3.js";import"./el-tag.00c24b33.js";import"./tsxHelper.0349c8ea.js";import"./resize-event2.a18eb0b5.js";import"./index2.16a5102f.js";import"./scroll2.65f280d4.js";import"./debounce.afeae77d.js";import"./validator2.79f79b41.js";import"./arrow-up.052c2e24.js";import"./el-input-number.67ea44bd.js";import"./arrow-down.7bc41cb3.js";import"./el-switch.2ecb6432.js";import"./el-divider.ad2e7e6e.js";import"./InputPassword.e8d77690.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Editor.c8c1c904.js";import"./arrow-right.f5ca606d.js";import"./aria2.61a0709e.js";import"./arrow-left.59f218a3.js";import"./browser2.01256594.js";import"./useForm.99c39cdb.js";import"./formRules.3ed93127.js";import"./el-card.9e22a50f.js";import"./Sticky.f7faac23.js";const x=t({name:"ExampleAdd",setup(t){const{emitter:x}=u(),{push:b}=r(),{t:v}=l(),w=i(),g=i(!1),y=async()=>{var e;const a=m(w);await(null==(e=null==a?void 0:a.elFormRef)?void 0:e.validate((async e=>{if(e){g.value=!0;const e=await(null==a?void 0:a.getFormData());await n({data:e}).catch((()=>{})).finally((()=>{g.value=!1}))&&(x.emit("getList","add"),b("/example/example-page"))}})))};return(t,r)=>(o(),s(m(a),{title:m(v)("exampleDemo.add"),onBack:r[0]||(r[0]=e=>m(b)("/example/example-page"))},{right:p((()=>[d(m(f),{type:"primary",loading:g.value,onClick:y},{default:p((()=>[c(j(m(v)("exampleDemo.save")),1)])),_:1},8,["loading"])])),default:p((()=>[d(e,{ref_key:"writeRef",ref:w},null,512)])),_:1},8,["title"]))}});export{x as default};
