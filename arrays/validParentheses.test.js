const isValid = require("./validParentheses");

describe("Valid Parentheses", () => {
  test("returns true on valid parentheses ", () => {
    expect(isValid("()")).toBe(true);
    expect(isValid("()[]{}")).toBe(true);
    expect(isValid("({[]})")).toBe(true);
  });
  test("returns false on invalid parentheses", () => {
    expect(isValid("(")).toBe(false);
    expect(isValid("([)")).toBe(false);
    expect(isValid("(]")).toBe(false);
    expect(isValid("([)(])")).toBe(false);
  });
});
