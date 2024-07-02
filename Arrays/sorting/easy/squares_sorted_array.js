/**
 * Given an integer array nums sorted in non-decreasing order,
 * return an array of the squares of each number sorted in non-decreasing order.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  nums.sort(sortFn);
  // console.log("Ans", nums);
  return nums.map((el) => Math.pow(el, 2));
};

function sortFn(a, b) {
  let aSquared = Math.pow(a, 2);
  let bSquared = Math.pow(b, 2);
  // console.log("Sorting", aSquared, bSquared);

  if (aSquared > bSquared) {
    return a - b;
  } else {
    return b - a;
  }
}
const nums = [-4, -1, 0, 3, 10];

console.log("Sorted squares", sortedSquares(nums));
