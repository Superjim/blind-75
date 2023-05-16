//Given two integers a and b, return the sum of the two integers without using the operators + and -.

function getSum(a, b) {
  if (b === 0) return a;
  //getSum( a XOR b, ( A AND B ) shift left )
  return getSum(a ^ b, (a & b) << 1);
}

module.exports = getSum;
