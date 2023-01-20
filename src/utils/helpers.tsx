export const excerpt = (str: string, length = 60) => {
  if (str.length > length) {
    str = str.substring(0, length) + "...";
  }
  return str;
};
