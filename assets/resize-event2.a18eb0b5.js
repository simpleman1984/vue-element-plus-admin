import{ai as e}from"./index.97fe2dd0.js";const _=function(e){for(const _ of e){const e=_.target.__resizeListeners__||[];e.length&&e.forEach((e=>{e()}))}},s=function(s,r){e&&s&&(s.__resizeListeners__||(s.__resizeListeners__=[],s.__ro__=new ResizeObserver(_),s.__ro__.observe(s)),s.__resizeListeners__.push(r))},r=function(e,_){var s;e&&e.__resizeListeners__&&(e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(_),1),e.__resizeListeners__.length||null==(s=e.__ro__)||s.disconnect())};export{s as a,r};
