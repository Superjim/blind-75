const climbStairs = require("./climbingStairs");

describe("climbStairs", () => {
  test("should ", () => {
    expect(climbStairs(1)).toBe(1);
    expect(climbStairs(2)).toBe(2);
    expect(climbStairs(3)).toBe(3);
    expect(climbStairs(4)).toBe(5);
    expect(climbStairs(5)).toBe(8);
    expect(climbStairs(10)).toBe(89);
  });
});
