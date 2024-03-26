(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload"))
    return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]'))
    o(n);
  new MutationObserver((n) => {
    for (const c of n)
      if (c.type === "childList")
        for (const l of c.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && o(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(n) {
    const c = {};
    return n.integrity && (c.integrity = n.integrity), n.referrerPolicy && (c.referrerPolicy = n.referrerPolicy), n.crossOrigin === "use-credentials" ? c.credentials = "include" : n.crossOrigin === "anonymous" ? c.credentials = "omit" : c.credentials = "same-origin", c;
  }
  function o(n) {
    if (n.ep)
      return;
    n.ep = !0;
    const c = r(n);
    fetch(n.href, c);
  }
})();
const p = (e) => e && typeof e == "object", y = (...e) => {
  const t = {};
  let r, o;
  return e.forEach((n) => {
    for (let c in n)
      r = t[c], o = n[c], Array.isArray(r) && Array.isArray(o) ? t[c] = r.concat(...o) : p(r) && p(o) ? t[c] = y(r, o) : t[c] = o;
  }), t;
}, b = (e) => {
  e = e.replace(/[\\ \t\n\r'"]/gm, "").replace(/(\w+)/gi, '"$1"'), e[0] !== "{" && (e = `{${e}}`);
  try {
    return JSON.parse(e);
  } catch (t) {
    return !1;
  }
}, O = (e) => {
  if (!e.match(/[^\w]+/i))
    return e;
  e = e.replace(/'/g, '"');
  try {
    return JSON.parse(e);
  } catch (t) {
    return b(e);
  }
}, A = (e, t) => {
  if (!e || typeof e != "object")
    return !1;
  let r = {};
  return e.getAttributeNames().filter((o) => o.substr(0, 5) === "data-").forEach((o) => {
    const n = o.substr(5).split("-"), c = n.length, l = e.getAttribute(o), f = {};
    let u = f;
    n.forEach((d, h) => {
      u[d] = c - 1 !== h ? {} : O(l), u = u[d];
    }), r = y(r, f);
  }), t ? r[t] : r;
}, m = document.getElementById("test"), D = A(m, "test"), L = (e) => {
  e = [...e];
  let t = e.length, r = [];
  for (; t--; ) {
    var o = e[t].codePointAt(0);
    o < 65 || o > 127 || o > 90 && o < 97 ? r[t] = "&#" + o + ";" : r[t] = e[t];
  }
  return r.join("");
}, j = document.getElementById("testHtml");
let i = m.outerHTML;
window.outer = i;
i = i.replace(/data/gi, `
  data`);
let E = L(i);
j.innerHTML = E;
const T = document.getElementById("result1"), a = (e) => {
  let t = "";
  for (let r = 0; r < e; r++)
    t += "  ";
  return t;
}, $ = (e, t = 0) => {
  s = `[
`;
  for (const r in e)
    s += a(1 + t), s += e[r] + `,
`;
  return s += `${a(t)}]`, s;
}, g = (e, t = 0) => {
  s = `{
`;
  for (const r in e) {
    const o = e[r];
    s += a(1 + t), Array.isArray(o) ? s += `${r}: ` + $(o, t + 1) + `,
` : typeof o == "object" ? s += `${r}: ` + g(o, t + 1) + `,
` : s += `${r}: ${o},
`;
  }
  return s += `${a(t)}}`, s;
};
let s = "";
s += `// result = 
`;
s += g(D);
T.innerHTML = s;
if (globalThis.getDomData)
  for (const e of Object.keys(globalThis.getDomData))
    globalThis[e] = globalThis.getDomData[e];
