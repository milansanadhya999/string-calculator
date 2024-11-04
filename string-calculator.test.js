import { add } from "./string-calculator";
describe("string-calculator", () => {
  test("empty string", () => {
    const number = add("");
    expect(number).toBe(0);
  });
});
