/*!
* getdomdata v0.0.2
* https://github.com/lemon3/getdomdata
*/
const f = (e) => e && typeof e == "object", u = (...e) => {
  const r = {};
  let c, t;
  return e.forEach((o) => {
    for (let a in o)
      c = r[a], t = o[a], Array.isArray(c) && Array.isArray(t) ? r[a] = c.concat(...t) : f(c) && f(t) ? r[a] = u(c, t) : r[a] = t;
  }), r;
}, b = (e) => {
  e = e.replace(/[\\ \t\n\r'"]/gm, "").replace(/(\w+)/gi, '"$1"'), e[0] !== "{" && (e = `{${e}}`);
  try {
    return JSON.parse(e);
  } catch {
    return !1;
  }
}, i = (e) => {
  if (!e.match(/[^\w]+/i))
    return e;
  e = e.replace(/'/g, '"');
  try {
    return JSON.parse(e);
  } catch {
    return b(e);
  }
}, h = (e, r) => {
  if (!e || typeof e != "object")
    return !1;
  let c = {};
  return e.getAttributeNames().filter((t) => t.substr(0, 5) === "data-").forEach((t) => {
    const o = t.substr(5).split("-"), a = o.length, n = e.getAttribute(t), l = {};
    let s = l;
    o.forEach((p, y) => {
      s[p] = a - 1 !== y ? {} : i(n), s = s[p];
    }), c = u(c, l);
  }), r ? c[r] : c;
};
export {
  h as getDomData
};
