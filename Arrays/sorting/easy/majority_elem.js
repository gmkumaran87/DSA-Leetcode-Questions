/**
 * @param {number[]} nums
 * @return {number}
 *
 * Solution
 *  1 - Use Hash map and lookup hash map to get the majority elements
 *  2 - Sort the array and get the element at index postion n/2
 *  3 - Use
 */
var majorityElement = function (nums) {
  let count = 0,
    candidate = nums[0];

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }

    if (candidate === num) {
      count++;
    } else {
      count--;
    }
  }
  return candidate;
};

const nums = [2, 2, 1, 1, 1, 2, 1];
console.log("Majority element", majorityElement(nums));
