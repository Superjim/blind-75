const getSum = require("./sumOfTwoInts");

describe("getSum", () => {
  test("should sum without using operators + and - ", () => {
    expect(getSum(1, 2)).toBe(3);
    expect(getSum(2, 3)).toBe(5);
  });
});
