/**
 * Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

Example 1:

Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]
Example 2:

Input: nums = [1,1]
Output: [2]
 */

/** Pattern - Since nums[i] is in range [1,n] we can modify the existing array elements */

function findDisappeardNumbers(nums) {
  let n = nums.length;
  let ansArr = [];
  for (let i = 0; i < n; i++) {
    let curr = Math.abs(nums[i]) - 1;

    if (nums[curr] < 0) {
      // ansArr.push(i);
      console.log(ansArr);
    } else {
      nums[curr] = -1 * Math.abs(nums[curr]);
    }
    // console.log(nums, i);
  }
  for (let j = 0; j < n; j++) {
    if (nums[j] > 0) {
      ansArr.push(j + 1);
    }
  }
  return ansArr;
}

// const arr = [4, 3, 2, 7, 8, 2, 3, 1];
const arr = [1, 1];

console.log(findDisappeardNumbers(arr)); // returns
