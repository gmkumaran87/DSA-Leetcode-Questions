/* Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
   Notice that the solution set must not contain duplicate triplets.
*/

/**
 * Pattern - Take every element as one of the triplets and try to find the other two elements - 2sum.
 * Method 1: Outer loop for 1st element and use HashMap to find the other two elements
 * Method 2: Sort the array , Outer loop for 1st element and use Two pointers to find the other two elements
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // Step 1: Sort the array
  nums.sort((a, b) => a - b);
  let target = 0,
    outArr = [];

  // Step 2: Outer loop for assuming 1st element
  for (var i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }
    let firstEl = nums[i];

    let s = i + 1,
      e = nums.length - 1;
    console.log(nums);

    console.log(firstEl, s, e);
    while (s < e) {
      let ans = firstEl + nums[s] + nums[e];

      if (ans === target) {
        outArr.push([firstEl, nums[s], nums[e]]);
        s++;
        while (nums[s] === nums[s + 1] && s < e) {
          s++;
        }
        e--;
      } else if (ans > target) {
        e--;
      } else {
        s++;
      }
    }
  }

  return outArr;
};

const nums = [1, -1, -1, 0];
// const nums = [0, 0, 0, 0];

console.log("Three Sum", threeSum(nums));
