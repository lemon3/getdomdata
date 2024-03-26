export const getObjectFromString = (string) => {
  string = string.replace(/[\\ \t\n\r'"]/gm, '').replace(/(\w+)/gi, '"$1"');
  if ('{' !== string[0]) string = `{${string}}`;
  try {
    return JSON.parse(string);
  } catch (error) {
    return false;
  }
};
