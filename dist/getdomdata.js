/*!
* getdomdata v0.0.4
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
  e = e.replace(/[\\ \t\n\r'"]/gm, "").replace(/(\w+)/gi, '"$1"'), e[0] !== "{" && (e = `{${e}}`), e = e.replace(",}", "}");
  try {
    return JSON.parse(e);
  } catch (r) {
    return !1;
  }
}, h = (e) => {
  if (!e.match(/[^\w]+/i))
    return e;
  e = e.replace(/'/g, '"');
  try {
    return JSON.parse(e);
  } catch (r) {
    return b(e);
  }
}, i = (e, r) => {
  if (!e || typeof e != "object")
    return !1;
  let c = {};
  return e.getAttributeNames().filter((t) => t.substr(0, 5) === "data-").forEach((t) => {
    const o = t.substr(5).split("-"), a = o.length, n = e.getAttribute(t), s = {};
    let l = s;
    o.forEach((p, y) => {
      l[p] = a - 1 !== y ? {} : h(n), l = l[p];
    }), c = u(c, s);
  }), r ? c[r] : c;
};
export {
  i as default
};
