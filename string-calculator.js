export const add = (string) => {
  if (string === "") return 0;

  const result = string.split(",").reduce((sum, number) => sum + +number, 0);
  return result;
};
