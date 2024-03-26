/*!
* getdomdata v0.0.1
* https://github.com/lemon3/getdomdata
*/
const p = (t) => t && typeof t == "object", n = (...t) => {
  const r = {};
  let a, e;
  return t.forEach((c) => {
    for (let o in c)
      a = r[o], e = c[o], Array.isArray(a) && Array.isArray(e) ? r[o] = a.concat(...e) : p(a) && p(e) ? r[o] = n(a, e) : r[o] = e;
  }), r;
}, i = (t) => {
  t = t.replace(/[\\ \t\n\r'"]/gm, "").replace(/(\w+)/gi, '"$1"'), t[0] !== "{" && (t = `{${t}}`);
  try {
    return JSON.parse(t);
  } catch {
    return !1;
  }
}, h = (t) => {
  if (!t.match(/[^\w]+/i))
    return t;
  t = t.replace(/'/g, '"');
  try {
    return JSON.parse(t);
  } catch {
    return i(t);
  }
}, y = (t, r) => {
  if (!t || typeof t != "object")
    return !1;
  let a = {};
  return t.getAttributeNames().filter((e) => e.substr(0, 5) === "data-").forEach((e) => {
    const c = e.substr(5).split("-"), o = c.length, u = t.getAttribute(e), l = {};
    let s = l;
    c.forEach((f, b) => {
      s[f] = o - 1 !== b ? {} : h(u), s = s[f];
    }), a = n(a, l);
  }), r ? a[r] : a;
};
if (globalThis.getDomData)
  for (const t of Object.keys(globalThis.getDomData))
    globalThis[t] = globalThis.getDomData[t];
export {
  y as getDomData
};
