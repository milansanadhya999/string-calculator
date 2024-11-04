export const add = (string) => {
  if (string === "") return 0;

  const delimiterPattern = /\/\/(.+)\n/;
  const delimiterMatch = string.match(delimiterPattern);
  let splitPattern = /[,\n]+/;
  if (delimiterMatch) {
    const delimiterString = delimiterMatch[1];
    splitPattern = new RegExp(`[${delimiterString}\\n]+`);
    string = string.replace(delimiterPattern, "");
  }
  const numbers = string
    .split(splitPattern)
    .filter((str) => str.trim() !== "")
    .map((str) => parseFloat(str));
  const result = numbers.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  return result;
};
