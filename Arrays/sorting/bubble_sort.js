function bubbleSort(nums) {
	for (let i = 0; i < nums.length; i++) {
		// let j = i +1;
		let isSorted = false;
		for (let j = i + 1; j < nums.length - i; j++) {
			console.log('Bubble ', nums, i, j);

			if (nums[j] < nums[j - 1]) {
				let temp = nums[j];
				nums[j] = nums[j - 1];
				nums[j - 1] = temp;
				isSorted = true;
			}
		}
		if (!isSorted) break;
	}
	return nums;
}

function bubbleSortRecursion(arr, r, c) {
	if (r === 0) return arr;
	console.log('sort', arr, r, c);
	if (c < r) {
		if (arr[c] > arr[c + 1]) {
			let temp = arr[c];
			arr[c] = arr[c + 1];
			arr[c + 1] = temp;
		}
		return bubbleSortRecursion(arr, r, c + 1);
	} else {
		return bubbleSortRecursion(arr, r - 1, 0);
	}
}

/**
 * Idea is we need to take the first element and compare it against the all other elements
 */

const arr = [3, 5, 2, 1, 4];
// console.log(bubbleSort(arr));
console.log('BubbleSort', bubbleSortRecursion(arr, arr.length - 1, 0));
