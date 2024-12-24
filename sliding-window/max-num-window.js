function maxSubArrayEl(arr, k) {
	let s = 0,
		e = k;
	let output = [];
	while (e <= arr.length) {
		let currWindow = arr.slice(s, e);
		console.log(currWindow);

		let maxEl = findMaxElement(currWindow);
		output.push(maxEl);
		s++;
		e++;
	}
	return output;
}

function findMaxElement(arr) {
	let max = Number.MIN_SAFE_INTEGER;

	for (let i = 0; i < arr.length; i++) {
		max = Math.max(max, arr[i]);
	}
	return max;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
	k = 3;

console.log('Max sub array elements', maxSubArrayEl(array, k));
