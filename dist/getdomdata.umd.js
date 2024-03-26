(function(c){typeof define=="function"&&define.amd?define(c):c()})(function(){"use strict";const c=e=>e&&typeof e=="object",u=(...e)=>{const t={};let r,n;return e.forEach(l=>{for(let i in l)r=t[i],n=l[i],Array.isArray(r)&&Array.isArray(n)?t[i]=r.concat(...n):c(r)&&c(n)?t[i]=u(r,n):t[i]=n}),t},g=e=>{e=e.replace(/[\\ \t\n\r'"]/gm,"").replace(/(\w+)/gi,'"$1"'),e[0]!=="{"&&(e=`{${e}}`);try{return JSON.parse(e)}catch{return!1}},k=e=>{if(!e.match(/[^\w]+/i))return e;e=e.replace(/'/g,'"');try{return JSON.parse(e)}catch{return g(e)}},O=(e,t)=>{if(!e||typeof e!="object")return!1;let r={};return e.getAttributeNames().filter(n=>n.substr(0,5)==="data-").forEach(n=>{const l=n.substr(5).split("-"),i=l.length,m=e.getAttribute(n),y={};let f=y;l.forEach((h,T)=>{f[h]=i-1!==T?{}:k(m),f=f[h]}),r=u(r,y)}),t?r[t]:r},d=document.getElementById("test"),b=O(d,"test"),L=e=>{e=[...e];let t=e.length,r=[];for(;t--;){var n=e[t].codePointAt(0);n<65||n>127||n>90&&n<97?r[t]="&#"+n+";":r[t]=e[t]}return r.join("")},A=document.getElementById("testHtml");let s=d.outerHTML;window.outer=s,s=s.replace(/data/gi,`
  data`);let D=L(s);A.innerHTML=D;const j=document.getElementById("result1"),a=e=>{let t="";for(let r=0;r<e;r++)t+="  ";return t},E=(e,t=0)=>{o=`[
`;for(const r in e)o+=a(1+t),o+=e[r]+`,
`;return o+=`${a(t)}]`,o},p=(e,t=0)=>{o=`{
`;for(const r in e){const n=e[r];o+=a(1+t),Array.isArray(n)?o+=`${r}: `+E(n,t+1)+`,
`:typeof n=="object"?o+=`${r}: `+p(n,t+1)+`,
`:o+=`${r}: ${n},
`}return o+=`${a(t)}}`,o};let o="";o+=`// result = 
`,o+=p(b),j.innerHTML=o});if(globalThis.getDomData)for(const c of Object.keys(globalThis.getDomData))globalThis[c]=globalThis.getDomData[c];
