/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let s = 0,
    e = x;
  let ans;
  while (s <= e) {
    let m = Math.floor(s + (e - s) / 2);

    let midEl = m * m;

    if (midEl === x) return m;

    if (midEl > x) e = m - 1;
    if (midEl < x) {
      s = m + 1;
      ans = m;
    }
  }
  return ans;
};

console.log("Sqrt", mySqrt(9));
