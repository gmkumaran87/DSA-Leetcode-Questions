/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/** 34. Find First and Last Position of Element in Sorted Array
Medium
Topics
Companies
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

 
Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1] */

var searchRange = function(nums, target) {
    let ans = [-1, -1];

    ans[0] = search(nums, target, true);
    ans[1] = search(nums, target, false);
    return ans;
};

function search(nums, target, isFirstEl) {
    let s = 0,
        e = nums.length - 1;
    let ans = -1;

    while (s <= e) {
        let m = Math.floor(s + (e - s) / 2);

        if (target < nums[m]) {
            e = m - 1;
        } else if (target > nums[m]) {
            s = m + 1;
        } else {
            // potential answer found.
            ans = m;
            if (isFirstEl) {
                e = m - 1;
            } else {
                s = m + 1;
            }
        }
    }
    return ans;
}
const nums = [5, 7, 7, 8, 8, 10];
const target = 7;

console.log(searchRange(nums, target));