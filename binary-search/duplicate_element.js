/* Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and uses only constant extra space.

*/

/**
 * @param {number[]} nums
 * @return {number}
 * */

/* Inplace Marked method - Mark every element of the array with multiplying -1 * arr[i],
  If the number is negative then the number is duplicated. */
var findDuplicate = function (nums) {
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    const currentEl = Math.abs(nums[i]);
    if (nums[currentEl] < 0) {
      return currentEl;
    }

    nums[currentEl] = -1 * nums[currentEl];
    console.log("first", currentEl, nums);
  }
};
let nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];
const maxNumber = Math.max(...nums);

console.log("max number", maxNumber, (maxNumber * (maxNumber + 1)) / 2);
const total = (maxNumber * (maxNumber + 1)) / 2;

console.log("Missing", total - nums.reduce((a, b) => a + b));
// const nums = [1, 3, 4, 2, 2];
// const nums = [3, 1, 3, 4, 2];
// console.log("Duplicate number", findDuplicate(nums));
