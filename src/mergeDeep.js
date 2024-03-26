const isObject = (obj) => obj && 'object' === typeof obj;

/**
 * Merges given objects and returns new object
 * @param {...object} objects - Objects to merge
 * @returns {object} object with merged key/values
 */
export const mergeDeep = (...objects) => {
  const result = {};
  let p, c;
  objects.forEach((o) => {
    for (let key in o) {
      p = result[key]; // previous value
      c = o[key]; // current value

      if (Array.isArray(p) && Array.isArray(c)) {
        result[key] = p.concat(...c);
      } else if (isObject(p) && isObject(c)) {
        result[key] = mergeDeep(p, c);
      } else {
        result[key] = c;
      }
    }
  });
  return result;
};
