import{u as e,f as a,a as d}from"./index2.69e85052.js";import{m as n,H as t,C as o,q as l,J as u,bv as s,B as i}from"./index.97fe2dd0.js";const v=()=>({form:i(a,void 0),formItem:i(d,void 0)}),m=(a,{formItemContext:d,disableIdGeneration:i,disableIdManagement:v})=>{i||(i=n(!1)),v||(v=n(!1));const m=n();let r;const I=t((()=>{var e;return!!(!a.label&&d&&d.inputIds&&(null==(e=d.inputIds)?void 0:e.length)<=1)}));return o((()=>{r=l([u(a,"id"),i],(([a,n])=>{const t=null!=a?a:n?void 0:e().value;t!==m.value&&((null==d?void 0:d.removeInputId)&&(m.value&&d.removeInputId(m.value),(null==v?void 0:v.value)||n||!t||d.addInputId(t)),m.value=t)}),{immediate:!0})})),s((()=>{r&&r(),(null==d?void 0:d.removeInputId)&&m.value&&d.removeInputId(m.value)})),{isLabeledByFormItem:I,inputId:m}};export{m as a,v as u};
