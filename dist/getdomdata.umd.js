(function(a,s){typeof exports=="object"&&typeof module<"u"?s(exports):typeof define=="function"&&define.amd?define(["exports"],s):(a=typeof globalThis<"u"?globalThis:a||self,s(a.getDomData={}))})(this,function(a){"use strict";const s=e=>e&&typeof e=="object",l=(...e)=>{const o={};let r,t;return e.forEach(f=>{for(let c in f)r=o[c],t=f[c],Array.isArray(r)&&Array.isArray(t)?o[c]=r.concat(...t):s(r)&&s(t)?o[c]=l(r,t):o[c]=t}),o},p=e=>{e=e.replace(/[\\ \t\n\r'"]/gm,"").replace(/(\w+)/gi,'"$1"'),e[0]!=="{"&&(e=`{${e}}`);try{return JSON.parse(e)}catch{return!1}},b=e=>{if(!e.match(/[^\w]+/i))return e;e=e.replace(/'/g,'"');try{return JSON.parse(e)}catch{return p(e)}},y=(e,o)=>{if(!e||typeof e!="object")return!1;let r={};return e.getAttributeNames().filter(t=>t.substr(0,5)==="data-").forEach(t=>{const f=t.substr(5).split("-"),c=f.length,h=e.getAttribute(t),i={};let n=i;f.forEach((u,D)=>{n[u]=c-1!==D?{}:b(h),n=n[u]}),r=l(r,i)}),o?r[o]:r};a.getDomData=y,Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});if(globalThis.getDomData)for(const a of Object.keys(globalThis.getDomData))globalThis[a]=globalThis.getDomData[a];
