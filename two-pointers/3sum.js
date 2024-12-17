function findSumOfThree(nums, target) {
	// Sort the nums in ascending order
	nums.sort((a, b) => a - b);

	// Iterate over the sorted array
	for (let i = 0; i < nums.length; i++) {
		let firstEl = target - nums[i];

		let s = i + 1,
			e = nums.length - 1;

		while (s < e) {
			let secondEl = nums[s];
			let thirdEl = nums[e];
			let sum = secondEl + thirdEl;

			if (sum === firstEl) {
				console.log('TRUE: ', s, e, firstEl, secondEl, thirdEl, nums[i]);
				return true;
			} else if (sum > firstEl) {
				e--;
			} else {
				s++;
			}
		}
	}

	return false;
}
// 1,2,3,4,5,7,8
const nums = [3, 7, 1, 2, 8, 4, 5];
console.log(findSumOfThree(nums, 15)); // true
