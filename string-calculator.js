export const add = (string) => {
  if (string === "") return 0;

  if (string.length === 1) {
    const number = +string;
    return number;
  }

  const result = +string[0] + +string[2];
  return result;
};
