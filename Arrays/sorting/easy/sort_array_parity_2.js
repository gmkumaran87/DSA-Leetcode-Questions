/**
 * Given an array of integers nums, half of the integers in nums are odd, and the other half are even.
   Sort the array so that whenever nums[i] is odd, i is odd, and whenever nums[i] is even, i is even.
   Return any answer array that satisfies this condition.
 */

/* Solution 
 * 1. Create two array with odd numbers and even numbers from source array
      Create output array and insert them alternatively from odd and even array.  

 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
	let oddArr = [],
		evenArr = [],
		outArr = [];

	for (let num of nums) {
		if (num % 2 === 0) {
			evenArr.push(num);
		} else {
			oddArr.push(num);
		}
	}

	console.log(evenArr, oddArr);
	let j = 0,
		k = 0;
	for (let i = 0; i < nums.length; i++) {
		if (i % 2 === 0) {
			outArr.push(evenArr[j]);
			j++;
		} else {
			outArr.push(oddArr[k]);
			k++;
		}
	}
	return outArr;
};

function usingTwoPointer(nums) {
	let s = 0,
		e = 1;

	while (s < nums.length || e < nums.length) {
		if (nums[s] % 2 === 0) {
			s = s + 2;
		} else {
		}
	}
}
const nums = [4, 2, 5, 7];

console.log(sortArrayByParityII(nums));
