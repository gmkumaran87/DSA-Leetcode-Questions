/**
 * Given an array nums containing n distinct numbers in the range [0, n],
 *  return the only number in the range that is missing from the array.
 *
 * @param {number[]} nums
 * @return {number}
 *
 * Solultion - Since the array contains distinct number in the range [0,n],
 *  modify the elements in place by multiplying with -1 and traverse through the modified array
 *  to find the number which is missing from the array
 *
 *  2. Total sum of natural integers using formula n * (n +1) /2
 *     total sum - (total sum of array) will give the missing number
 *
 */
var missingNumber = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums[i] = nums.length + 1;
      continue;
    }

    let currIndex = Math.abs(nums[i]) - 1;

    nums[currIndex] = nums[currIndex] * -1;
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      return i + 1;
    }
  }
};

function missingNumber2(nums) {
  let maxNum = nums.length;

  let total = (maxNum * (maxNum + 1)) / 2;

  return total - nums.reduce((a, b) => a + b);
}

const nums = [8, 6, 7, 3, 5, 2, 0, 1];

console.log("Missing number", missingNumber2(nums));
