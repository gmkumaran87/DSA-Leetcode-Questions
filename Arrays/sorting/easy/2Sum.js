/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
   You may assume that each input would have exactly one solution, and you may not use the same element twice.
   You can return the answer in any order.
 */

/** Pattern -
 *
 * 1. If sorting is allowed then,Sort the array and use two pointers from start and end
 *     increment or decrement based on the sum of two elements
 * 2. If sorting is not allowed then use HashMap and traverse the array with target - value = will give the element.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  nums.sort((a, b) => a - b);

  let start = 0,
    end = nums.length - 1;

  console.log(nums, start, end);
  while (start < end) {
    let sum = nums[start] + nums[end];

    if (sum === target) {
      return [start, end];
    } else if (sum > target) {
      end--;
    } else {
      start++;
    }
  }
};

function twoSumHashMap(nums, target) {
  let hm = new Map();

  for (let i = 0; i < nums.length; i++) {
    let element = target - nums[i];

    if (hm.has(element)) {
      const ansInd = hm.get(element);
      return [ansInd, i];
    } else {
      hm.set(nums[i], i);
    }
  }
}

const arr = [3, 2, 4];
console.log("Two sum", twoSumHashMap(arr, 6));
