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
});
