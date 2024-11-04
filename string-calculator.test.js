import { add } from "./string-calculator";
describe("string-calculator", () => {
  test("empty string", () => {
    const number = add("");
    expect(number).toBe(0);
  });
  test("string containing only one number", () => {
    const number = add("5");
    expect(number).toBe(5);
  });
  test("string containing only two numbers", () => {
    const number = add("5,6");
    expect(number).toBe(11);
  });
  test("string contains more than 2 numbers", () => {
    const number = add("5,6,8,9,7");
    expect(number).toBe(35);
  });
  test("string contains new line delimeter", () => {
    const number = add("1\n2,3");
    expect(number).toBe(6);
  });
  test("string supporting different delimeters", () => {
    const number = add("//;\n1;2");
    expect(number).toBe(3);
  });
});
