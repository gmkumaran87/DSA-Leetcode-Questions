/**
 * @param {number[]} nums
 * @return {boolean}
 *
 * Solutions
 * 1. Use hash to check if the number has already been computed
 * 2. Sort the numbers and loop through and check if the previous and current number are same
 * 3. Convert into set and check the size is less than the array.
 */
var containsDuplicate = function(nums) {
    let sorted = nums.sort((a, b) => a - b);

    //   console.log(sorted);
    for (let i = 1; i < sorted.length; i++) {
        if (sorted[i] === sorted[i - 1]) {
            return true;
        }
    }
    return false;
};

const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

console.log(containsDuplicate(nums));