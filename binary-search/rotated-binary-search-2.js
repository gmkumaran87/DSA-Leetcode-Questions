/**
 * There is an integer array nums sorted in non-decreasing order (not necessarily with distinct values).

Before being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,4,4,5,6,6,7] might be rotated at pivot index 5 and become [4,5,6,6,7,0,1,2,4,4].

Given the array nums after the rotation and an integer target, return true if target is in nums, or false if it is not in nums.

You must decrease the overall operation steps as much as possible.
Ex: [1,1,1,3,1] , 3

*/

function search(nums, target) {
	const pivot = pivotWithDups(nums);
	console.log('Pivot elem', pivot);

	if (pivot === -1) {
		const elem = binarySearch(nums, 0, nums.length - 1, target);
		return elem > -1 ? true : false;
	}

	if (nums[pivot] === target) return true;

	const first = binarySearch(nums, 0, pivot, target);

	if (first > -1) {
		return true;
	} else {
		const second = binarySearch(nums, pivot + 1, nums.length - 1, target);
		return second > -1 ? true : false;
	}
}

function pivotWithDups(arr) {
	let start = 0;
	let end = arr.length - 1;
	while (start <= end) {
		let mid = start + (end - start) / 2;
		// 4 cases over here
		if (mid < end && arr[mid] > arr[mid + 1]) {
			return mid;
		}
		if (mid > start && arr[mid] < arr[mid - 1]) {
			return mid - 1;
		}

		// if elements at middle, start, end are equal then just skip the duplicates
		if (arr[mid] == arr[start] && arr[mid] == arr[end]) {
			// skip the duplicates
			// NOTE: what if these elements at start and end were the pivot??
			// check if start is pivot
			if (start < end && arr[start] > arr[start + 1]) {
				return start;
			}
			start++;

			// check whether end is pivot
			if (end > start && arr[end] < arr[end - 1]) {
				return end - 1;
			}
			end--;
		}
		// left side is sorted, so pivot should be in right
		else if (arr[start] < arr[mid] || (arr[start] == arr[mid] && arr[mid] > arr[end])) {
			start = mid + 1;
		} else {
			end = mid - 1;
		}
	}
	return -1;
}

function binarySearch(nums, s, e, target) {
	while (s <= e) {
		let m = s + Math.floor((e - s) / 2);

		if (nums[m] === target) {
			return m;
		} else if (nums[m] > target) {
			e = m - 1;
		} else {
			s = m + 1;
		}
	}
	return -1;
}
const nums = [1, 3, 1, 1, 1], // [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1],
	target = 3;

console.log('Search', search(nums, target));
