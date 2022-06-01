var e=Object.defineProperty,o=Object.defineProperties,t=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,l=(o,t,n)=>t in o?e(o,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[t]=n,r=(e,o)=>{for(var t in o||(o={}))a.call(o,t)&&l(e,t,o[t]);if(n)for(var t of n(o))s.call(o,t)&&l(e,t,o[t]);return e};import{q as i,as as c,M as u,G as d,d as p,P as f,bK as m,Q as v,m as g,bt as b,r as y,H as h,bL as C,C as x,D as E,aF as w,_ as B,s as k,o as M,v as I,w as T,az as j,aL as O,g as P,e as _,n as S,Z as R,ar as z,c as A,X as V,W as L,t as $,aq as H,z as D,x as K,h as q,ai as F,ak as U,b3 as W,al as Z,aA as G,bM as N,aN as Q,aB as X}from"./index.97fe2dd0.js";import{E as J}from"./el-button.c0a5966c.js";import{E as Y}from"./el-input.fe8da8a8.js";import{E as ee,u as oe,a as te,b as ne}from"./el-overlay.480b32b4.js";import{o as ae}from"./aria2.61a0709e.js";import{o as se,a as le,e as re}from"./el-popper.6c2f2517.js";import{i as ie}from"./validator2.79f79b41.js";import{u as ce}from"./index2.16a5102f.js";import{u as ue}from"./index2.69e85052.js";import{u as de}from"./index2.f670704e.js";const pe=[],fe=e=>{if(0===pe.length)return;const o=pe[pe.length-1]["_trap-focus-children"];if(o.length>0&&e.code===d.tab){if(1===o.length)return e.preventDefault(),void(document.activeElement!==o[0]&&o[0].focus());const t=e.shiftKey,n=e.target===o[0],a=e.target===o[o.length-1];n&&t&&(e.preventDefault(),o[o.length-1].focus()),a&&!t&&(e.preventDefault(),o[0].focus())}},me=p({name:"ElMessageBox",directives:{TrapFocus:{beforeMount(e){e["_trap-focus-children"]=ae(e),pe.push(e),pe.length<=1&&se(document,"keydown",fe)},updated(e){u((()=>{e["_trap-focus-children"]=ae(e)}))},unmounted(){pe.shift(),0===pe.length&&le(document,"keydown",fe)}}},components:r({ElButton:J,ElFocusTrap:re,ElInput:Y,ElOverlay:ee,ElIcon:f},m),inheritAttrs:!1,props:{buttonSize:{type:String,validator:ie},modal:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},closeOnHashChange:{type:Boolean,default:!0},center:Boolean,draggable:Boolean,roundButton:{default:!1,type:Boolean},container:{type:String,default:"body"},boxType:{type:String,default:""}},emits:["vanish","action"],setup(e,{emit:n}){const{t:a}=ce(),s=v("message-box"),l=g(!1),{nextZIndex:d}=b(),p=y({beforeClose:null,callback:null,cancelButtonText:"",cancelButtonClass:"",confirmButtonText:"",confirmButtonClass:"",customClass:"",customStyle:{},dangerouslyUseHTMLString:!1,distinguishCancelAndClose:!1,icon:"",inputPattern:null,inputPlaceholder:"",inputType:"text",inputValue:null,inputValidator:null,inputErrorMessage:"",message:null,modalFade:!0,modalClass:"",showCancelButton:!1,showConfirmButton:!0,type:"",title:void 0,showInput:!1,action:"",confirmButtonLoading:!1,cancelButtonLoading:!1,confirmButtonDisabled:!1,editorErrorMessage:"",validateError:!1,zIndex:d()}),f=h((()=>{const e=p.type;return{[s.bm("icon",e)]:e&&C[e]}})),m=ue(),B=ue(),k=de(h((()=>e.buttonSize)),{prop:!0,form:!0,formItem:!0}),M=h((()=>p.icon||C[p.type]||"")),I=h((()=>!!p.message)),T=g(),j=g(),O=g(),P=g(),_=g(),S=h((()=>p.confirmButtonClass));i((()=>p.inputValue),(async o=>{await u(),"prompt"===e.boxType&&null!==o&&$()}),{immediate:!0}),i((()=>l.value),(o=>{var t,n;o&&("alert"!==e.boxType&&"confirm"!==e.boxType||(O.value=null!=(n=null==(t=_.value)?void 0:t.$el)?n:T.value),p.zIndex=d()),"prompt"===e.boxType&&(o?u().then((()=>{var e;P.value&&P.value.$el&&(O.value=null!=(e=H())?e:T.value)})):(p.editorErrorMessage="",p.validateError=!1))}));const R=h((()=>e.draggable));function z(){l.value&&(l.value=!1,u((()=>{p.action&&n("action",p.action)})))}oe(T,j,R),x((async()=>{await u(),e.closeOnHashChange&&se(window,"hashchange",z)})),E((()=>{e.closeOnHashChange&&le(window,"hashchange",z)}));const A=()=>{e.closeOnClickModal&&L(p.distinguishCancelAndClose?"close":"cancel")},V=ne(A),L=o=>{var t;("prompt"!==e.boxType||"confirm"!==o||$())&&(p.action=o,p.beforeClose?null==(t=p.beforeClose)||t.call(p,o,p,z):z())},$=()=>{if("prompt"===e.boxType){const e=p.inputPattern;if(e&&!e.test(p.inputValue||""))return p.editorErrorMessage=p.inputErrorMessage||a("el.messagebox.error"),p.validateError=!0,!1;const o=p.inputValidator;if("function"==typeof o){const e=o(p.inputValue);if(!1===e)return p.editorErrorMessage=p.inputErrorMessage||a("el.messagebox.error"),p.validateError=!0,!1;if("string"==typeof e)return p.editorErrorMessage=e,p.validateError=!0,!1}}return p.editorErrorMessage="",p.validateError=!1,!0},H=()=>{const e=P.value.$refs;return e.input||e.textarea},D=()=>{L("close")};return e.lockScroll&&te(l),((e,o)=>{let t;i((()=>e.value),(e=>{var n,a;e?(t=document.activeElement,c(o)&&(null==(a=(n=o.value).focus)||a.call(n))):t.focus()}))})(l),K=r({},w(p)),o(K,t({ns:s,overlayEvent:V,visible:l,hasMessage:I,typeClass:f,contentId:m,inputId:B,btnSize:k,iconComponent:M,confirmButtonClasses:S,rootRef:T,focusStartRef:O,headerRef:j,inputRef:P,confirmRef:_,doClose:z,handleClose:D,onCloseRequested:()=>{e.closeOnPressEscape&&D()},handleWrapperClick:A,handleInputEnter:e=>{if("textarea"!==p.inputType)return e.preventDefault(),L("confirm")},handleAction:L,t:a}));var K}}),ve=["aria-label","aria-describedby"],ge=["aria-label"],be=["id"];var ye=B(me,[["render",function(e,o,t,n,a,s){const l=k("el-icon"),r=k("close"),i=k("el-input"),c=k("el-button"),u=k("el-focus-trap"),d=k("el-overlay");return M(),I(q,{name:"fade-in-linear",onAfterLeave:o[11]||(o[11]=o=>e.$emit("vanish"))},{default:T((()=>[j(P(d,{"z-index":e.zIndex,"overlay-class":[e.ns.is("message-box"),e.modalClass],mask:e.modal},{default:T((()=>[_("div",{role:"dialog","aria-label":e.title,"aria-modal":"true","aria-describedby":e.showInput?void 0:e.contentId,class:S(`${e.ns.namespace.value}-overlay-message-box`),onClick:o[8]||(o[8]=(...o)=>e.overlayEvent.onClick&&e.overlayEvent.onClick(...o)),onMousedown:o[9]||(o[9]=(...o)=>e.overlayEvent.onMousedown&&e.overlayEvent.onMousedown(...o)),onMouseup:o[10]||(o[10]=(...o)=>e.overlayEvent.onMouseup&&e.overlayEvent.onMouseup(...o))},[P(u,{loop:"",trapped:e.visible,"focus-trap-el":e.rootRef,"focus-start-el":e.focusStartRef,onReleaseRequested:e.onCloseRequested},{default:T((()=>[_("div",{ref:"rootRef",class:S([e.ns.b(),e.customClass,e.ns.is("draggable",e.draggable),{[e.ns.m("center")]:e.center}]),style:R(e.customStyle),tabindex:"-1",onClick:o[7]||(o[7]=z((()=>{}),["stop"]))},[null!==e.title&&void 0!==e.title?(M(),A("div",{key:0,ref:"headerRef",class:S(e.ns.e("header"))},[_("div",{class:S(e.ns.e("title"))},[e.iconComponent&&e.center?(M(),I(l,{key:0,class:S([e.ns.e("status"),e.typeClass])},{default:T((()=>[(M(),I(V(e.iconComponent)))])),_:1},8,["class"])):L("v-if",!0),_("span",null,$(e.title),1)],2),e.showClose?(M(),A("button",{key:0,type:"button",class:S(e.ns.e("headerbtn")),"aria-label":e.t("el.messagebox.close"),onClick:o[0]||(o[0]=o=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel")),onKeydown:o[1]||(o[1]=H(z((o=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel")),["prevent"]),["enter"]))},[P(l,{class:S(e.ns.e("close"))},{default:T((()=>[P(r)])),_:1},8,["class"])],42,ge)):L("v-if",!0)],2)):L("v-if",!0),_("div",{id:e.contentId,class:S(e.ns.e("content"))},[_("div",{class:S(e.ns.e("container"))},[e.iconComponent&&!e.center&&e.hasMessage?(M(),I(l,{key:0,class:S([e.ns.e("status"),e.typeClass])},{default:T((()=>[(M(),I(V(e.iconComponent)))])),_:1},8,["class"])):L("v-if",!0),e.hasMessage?(M(),A("div",{key:1,class:S(e.ns.e("message"))},[D(e.$slots,"default",{},(()=>[e.dangerouslyUseHTMLString?(M(),I(V(e.showInput?"label":"p"),{key:1,for:e.showInput?e.inputId:void 0,innerHTML:e.message},null,8,["for","innerHTML"])):(M(),I(V(e.showInput?"label":"p"),{key:0,for:e.showInput?e.inputId:void 0},{default:T((()=>[K($(e.dangerouslyUseHTMLString?"":e.message),1)])),_:1},8,["for"]))]))],2)):L("v-if",!0)],2),j(_("div",{class:S(e.ns.e("input"))},[P(i,{id:e.inputId,ref:"inputRef",modelValue:e.inputValue,"onUpdate:modelValue":o[2]||(o[2]=o=>e.inputValue=o),type:e.inputType,placeholder:e.inputPlaceholder,"aria-invalid":e.validateError,class:S({invalid:e.validateError}),onKeydown:H(e.handleInputEnter,["enter"])},null,8,["id","modelValue","type","placeholder","aria-invalid","class","onKeydown"]),_("div",{class:S(e.ns.e("errormsg")),style:R({visibility:e.editorErrorMessage?"visible":"hidden"})},$(e.editorErrorMessage),7)],2),[[O,e.showInput]])],10,be),_("div",{class:S(e.ns.e("btns"))},[e.showCancelButton?(M(),I(c,{key:0,loading:e.cancelButtonLoading,class:S([e.cancelButtonClass]),round:e.roundButton,size:e.btnSize,onClick:o[3]||(o[3]=o=>e.handleAction("cancel")),onKeydown:o[4]||(o[4]=H(z((o=>e.handleAction("cancel")),["prevent"]),["enter"]))},{default:T((()=>[K($(e.cancelButtonText||e.t("el.messagebox.cancel")),1)])),_:1},8,["loading","class","round","size"])):L("v-if",!0),j(P(c,{ref:"confirmRef",type:"primary",loading:e.confirmButtonLoading,class:S([e.confirmButtonClasses]),round:e.roundButton,disabled:e.confirmButtonDisabled,size:e.btnSize,onClick:o[5]||(o[5]=o=>e.handleAction("confirm")),onKeydown:o[6]||(o[6]=H(z((o=>e.handleAction("confirm")),["prevent"]),["enter"]))},{default:T((()=>[K($(e.confirmButtonText||e.t("el.messagebox.confirm")),1)])),_:1},8,["loading","class","round","disabled","size"]),[[O,e.showConfirmButton]])],2)],6)])),_:3},8,["trapped","focus-trap-el","focus-start-el","onReleaseRequested"])],42,ve)])),_:3},8,["z-index","overlay-class","mask"]),[[O,e.visible]])])),_:3})}],["__file","/home/runner/work/element-plus/element-plus/packages/components/message-box/src/index.vue"]]);const he=new Map,Ce=(e,o)=>{const t=document.createElement("div");e.onVanish=()=>{N(null,t),he.delete(a)},e.onAction=o=>{const t=he.get(a);let s;s=e.showInput?{value:a.inputValue,action:o}:o,e.callback?e.callback(s,n.proxy):"cancel"===o||"close"===o?e.distinguishCancelAndClose&&"cancel"!==o?t.reject("close"):t.reject("cancel"):t.resolve(s)};const n=((e,o,t=null)=>{const n=X(ye,e);return n.appContext=t,N(n,o),document.body.appendChild(o.firstElementChild),n.component})(e,t,o),a=n.proxy;for(const s in e)Q(e,s)&&!Q(a.$props,s)&&(a[s]=e[s]);return i((()=>a.message),((e,o)=>{W(e)?n.slots.default=()=>[e]:W(o)&&!W(e)&&delete n.slots.default}),{immediate:!0}),a.visible=!0,a};function xe(e,o=null){if(!F)return Promise.reject();let t;return U(e)||W(e)?e={message:e}:t=e.callback,new Promise(((n,a)=>{const s=Ce(e,null!=o?o:xe._context);he.set(s,{options:e,callback:t,resolve:n,reject:a})}))}const Ee={alert:{closeOnPressEscape:!1,closeOnClickModal:!1},confirm:{showCancelButton:!0},prompt:{showCancelButton:!0,showInput:!0}};["alert","confirm","prompt"].forEach((e=>{xe[e]=function(e){return(o,t,n,a)=>{let s;return Z(t)?(n=t,s=""):s=G(t)?"":t,xe(Object.assign(r({title:s,message:o,type:""},Ee[e]),n,{boxType:e}),a)}}(e)})),xe.close=()=>{he.forEach(((e,o)=>{o.doClose()})),he.clear()},xe._context=null;const we=xe;we.install=e=>{we._context=e._context,e.config.globalProperties.$msgbox=we,e.config.globalProperties.$messageBox=we,e.config.globalProperties.$alert=we.alert,e.config.globalProperties.$confirm=we.confirm,e.config.globalProperties.$prompt=we.prompt};const Be=we;export{Be as E};
