export const add = (string) => {
  if (string === "") return 0;

  const numbers = string
    .split(/[,\n]/)
    .map((str) => +str)
    .filter((num) => !isNaN(num));
  const result = numbers.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  return result;
};
