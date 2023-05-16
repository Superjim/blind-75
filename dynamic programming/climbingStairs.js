// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

function climbStairs(n) {
  if (n <= 2) return n;
  const arr = [0, 1, 2];
  for (let i = 3; i < n + 1; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }

  return arr[n];
}

module.exports = climbStairs;
