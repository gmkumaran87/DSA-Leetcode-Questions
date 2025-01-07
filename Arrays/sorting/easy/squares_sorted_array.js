/**
 * Given an integer array nums sorted in non-decreasing order,
 * return an array of the squares of each number sorted in non-decreasing order.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
	nums.sort(sortFn);
	// console.log("Ans", nums);
	return nums.map((el) => Math.pow(el, 2));
};

function sortFn(a, b) {
	let aSquared = Math.pow(a, 2);
	let bSquared = Math.pow(b, 2);
	// console.log("Sorting", aSquared, bSquared);

	if (aSquared > bSquared) {
		return a - b;
	} else {
		return b - a;
	}
}

/* Using Two Pointers 
   Use two pointers from start and end, compare which is greater among two and put that in the new array since the array is already sorted.    

*/

function sortUsingTwoPointer(nums) {
	let arr = new Array(nums.length).fill(0);
	let s = 0,
		e = nums.length - 1,
		o = nums.length - 1;

	while (s <= e) {
		let left = nums[s] ** 2;
		let right = nums[e] ** 2;

		if (left > right) {
			arr[o] = left;
			s++;
		} else {
			arr[o] = right;
			e--;
		}
		o--;
	}
	return arr;
}
const nums = [-4, -1, 0, 3, 10];

console.log('Sorted squares', sortedSquares(nums));
