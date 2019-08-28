export const uuid = (seed = 100) =>
  Math.random()
    .toString(36)
    .substring(2, 2 + seed);

export const characterCount = string => {
  console.log(string.length)
  return string.length;
};
