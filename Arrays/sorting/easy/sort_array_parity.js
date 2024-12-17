/**
 * Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.
   Return any array that satisfies this condition.
 
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
	let s = 0,
		e = nums.length - 1;

	while (s <= e) {
		if (nums[s] % 2 !== 0 && nums[e] % 2 === 0) {
			let temp = nums[e];
			nums[e] = nums[s];
			nums[s] = temp;
			s++;
			e--;
			//   console.log("FIrst", temp, nums, s, e);
		} else if (nums[s] % 2 === 0) {
			s++;
		} else if (nums[e] % 2 !== 0) {
			e--;
		}
	}
	return nums;
};

const nums = [5, 3, 1, 2, 4, 7];

console.log('Sorting array by parity...', sortArrayByParity(nums));
