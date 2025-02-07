/* A peak element is an element that is strictly greater than its neighbors.

Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.

You must write an algorithm that runs in O(log n) time. */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
	let n = nums.length - 1;

	if (nums.length === 1) return 0;
	if (nums[0] > nums[1]) return 0;
	if (nums[n] > nums[n - 1]) return n;
	const peakEl = peakElement(nums);
	return peakEl;
};

var peakElement = function (arr) {
	let s = 0,
		e = arr.length - 1;

	while (s <= e) {
		let m = Math.floor(s + (e - s) / 2);

		if (arr[m] > arr[m - 1] && arr[m] > arr[m + 1]) {
			return m;
		}

		if (arr[m] < arr[m + 1]) {
			s = m + 1;
		} else if (arr[m] > arr[m + 1]) {
			e = m - 1;
		}
	}
	return -1;
};
let nums = [1, 2, 4, 6];
nums = [11, 13, 20, 17, 15];

console.log('Peak element', findPeakElement(nums));
