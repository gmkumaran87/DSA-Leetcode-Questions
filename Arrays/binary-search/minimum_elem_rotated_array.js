/* Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.

You must write an algorithm that runs in O(log n) time.

 

Example 1:

Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.
Example 2:

Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.
Example 3:

Input: nums = [11,13,15,17]
Output: 11
Explanation: The original array was [11,13,15,17] and it was rotated 4 times. 
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  if (nums.length === 1) return nums[0];

  if (nums.length === 2) return nums[1] > nums[0] ? nums[0] : nums[1];
  let peakElemIndex = findPeakElementIndex(nums);

  const adjacentElem = nums[peakElemIndex + 1];
  const firstEl = nums[0];

  return adjacentElem < firstEl ? adjacentElem : firstEl;
};

function findPeakElementIndex(nums) {
  let n = nums.length - 1;

  let s = 0,
    e = nums.length - 1;

  while (s <= e) {
    let m = Math.floor(s + (e - s) / 2);

    console.log("Loop", m, nums[m], s, e);
    if (s === e) {
      if (nums[m] > nums[0]) return m;
      else return 0;
    }
    // If the middle is at pivot
    if (nums[m] > nums[m + 1]) return m;

    if (nums[m] < nums[m - 1]) return m - 1;

    if (nums[m] < nums[s]) {
      e = m - 1;
    } else {
      s = m + 1;
    }
  }
  return -1;
}

let nums = [4, 5, 6, 7, 0, 1, 2]; // 0

nums = [4, 5, 1, 2, 3];

console.log("Minimum element", findMin(nums));
