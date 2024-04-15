export const getObjectFromString = (string) => {
  string = string.replace(/[\\ \t\n\r'"]/gm, '').replace(/(\w+)/gi, '"$1"');
  if ('{' !== string[0]) string = `{${string}}`;
  try {
    return JSON.parse(string);
    // eslint-disable-next-line no-unused-vars
  } catch (e) {
    return false;
  }
};
