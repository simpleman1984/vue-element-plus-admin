import{D as e}from"./index.97fe2dd0.js";const n={all:t=t||new Map,on:function(e,n){var a=t.get(e);a?a.push(n):t.set(e,[n])},off:function(e,n){var a=t.get(e);a&&(n?a.splice(a.indexOf(n)>>>0,1):t.set(e,[]))},emit:function(e,n){var a=t.get(e);a&&a.slice().map((function(e){e(n)})),(a=t.get("*"))&&a.slice().map((function(t){t(e,n)}))}};var t;const a=t=>(t&&(n.on(t.name,t.callback),e((()=>{n.off(t.name)}))),{emitter:n});export{a as u};
