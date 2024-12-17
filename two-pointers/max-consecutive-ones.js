/**
 * Given a binary array nums, return the maximum number of consecutive 1's in the array.
 *
 * Example 1:
 * Input: nums = [1,1,0,1,1,1]
 *
 */
var findMaxConsecutiveOnes = function (nums) {
	let start = 0,
		end = 0;
	let count = Number.MIN_SAFE_INTEGER;

	while (end < nums.length) {
		if (nums[end] === 1) {
			console.log('Found', end, start);
			let curr = end - start + 1;
			count = Math.max(count, curr);
			end++;
		} else {
			start = end + 1;

			end++;
		}
	}
	return count;
};

const nums = [1, 0, 1, 1, 0, 1];
console.log(findMaxConsecutiveOnes(nums)); // Output: 3
