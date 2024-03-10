/** You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.

Return the single element that appears only once.
Your solution must run in O(log n) time and O(1) space.

Example 1:
Input: nums = [1,1,2,3,3,4,4,8,8]
Output: 2

Example 2:
Input: nums = [3,3,7,7,10,11,11]
Output: 10 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let s = 0,
        e = nums.length - 1;

    while (s <= e) {
        let m = Math.floor(s + (e - s) / 2);

        if (nums[m] !== nums[m - 1] && nums[m] !== nums[m + 1]) {
            return nums[m];
        }

        if (nums[m] === nums[m + 1]) {
            if ((m + 1) % 2 === 0) {
                e = m - 1;
            } else {
                s = m + 2;
            }
        } else if (nums[m] === nums[m - 1]) {
            if (m % 2 === 0) {
                e = m - 2;
            } else {
                s = m + 1;
            }
        }
    }
};

const nums = [1, 1, 2, 2, 3, 3, 4, 8, 8];
console.log(singleNonDuplicate(nums));