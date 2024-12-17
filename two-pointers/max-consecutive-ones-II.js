/**
 * Given a binary array nums and an integer k, return the maximum number of consecutive 1's
 * in the array if   you can flip at most k 0's.
 */
var longestOnes = function (nums, k) {
	let s = 0,
		e = 0;
	let zeros = 0,
		ones = 0;
	let count = 0;

	while (e < nums.length) {
		if (nums[e] === 1) {
			ones++;
			e++;
			count = Math.max(count, e - s + 1);
		} else if (nums[e] === 0 && zeros < k) {
			count = Math.max(count, e - s + 1);

			zeros++;
			e++;
		} else {
			s++;
		}
	}
};

function getOnes(nums, s, e) {}
const nums = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1],
	k = 3;

console.log(longestOnes(nums, k)); // 10
