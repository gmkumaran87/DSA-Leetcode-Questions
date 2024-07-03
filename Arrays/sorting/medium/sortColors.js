/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 *
 */

// Two pass algorithm using counting sort
var sortColors = function (nums) {
  let zeros = 0,
    ones = 0,
    twos = 0;

  for (let num of nums) {
    if (num === 0) {
      zeros += 1;
    } else if (num === 1) {
      ones += 1;
    } else if (num === 2) {
      twos += 1;
    }
  }
  // for (var i = 0; i <nums.length; i++) {

  let j = 0;
  while (zeros > 0) {
    nums[j] = 0;
    j++;
    zeros -= 1;
  }

  while (ones > 0) {
    nums[j] = 1;
    j++;
    ones -= 1;
  }
  while (twos > 0) {
    nums[j] = 2;
    j++;
    twos -= 1;
  }

  // }
  console.log("zeros", zeros, ones, twos);
  return nums;
};

const arr = [2, 0, 2, 1, 1, 0];
console.log("Arrays.sortColors", sortColors(arr));
