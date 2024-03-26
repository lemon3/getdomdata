import { mergeDeep } from './mergeDeep';
import { getObjectFromString } from './getObjectFromString';

const parseData = (string) => {
  if (!string.match(/[^\w]+/i)) {
    return string;
  }
  string = string.replace(/'/g, '"');
  try {
    return JSON.parse(string);
  } catch (e) {
    return getObjectFromString(string);
  }
};

/**
 * Get all data form an element
 *
 * @param  {Object} el The dom element
 * @param  {String} name The name to look for
 * @return {mixed} Object with all collected data for the given element und name or false
 */
export const getDomData = (el, name) => {
  if (!el || 'object' !== typeof el) {
    return false;
  }

  let obj = {};

  el.getAttributeNames()
    .filter((a) => a.substr(0, 5) === 'data-')
    .forEach((data) => {
      const split = data.substr(5).split('-');
      const len = split.length;
      const value = el.getAttribute(data);
      const tmp = {};

      let pointer = tmp;
      split.forEach((name, index) => {
        pointer[name] = len - 1 !== index ? {} : parseData(value);
        pointer = pointer[name];
      });

      // obj = Object.assign(obj, tmp);
      obj = mergeDeep(obj, tmp);
    });

  return name ? obj[name] : obj;
};
