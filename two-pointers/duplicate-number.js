/**
 * Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n]    inclusive.

    There is only one repeated number in nums, return this repeated number.

    You must solve the problem without modifying the array nums and using only constant extra space.
 *  
 */
/* Using slow and Fast pointers */
var findDuplicate = function (nums) {
	let slow = nums[0],
		fast = nums[0];

	while (true) {
		slow = nums[slow];
		fast = nums[nums[fast]];

		if (slow === fast) {
			break;
		}
	}

	slow = nums[0];

	while (slow !== fast) {
		slow = nums[slow];
		fast = nums[fast];
	}

	return fast;
};

const numbers = [1, 3, 4, 2, 3];
console.log(findDuplicate(numbers)); // Output: 2
