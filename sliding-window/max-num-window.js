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

function findMaxSub(arr, k) {
	let n = arr.length;
	let s = 0,
		e = 0;
	let maxTotal = Number.MIN_SAFE_INTEGER;
	let total = 0;

	for (let i = 0; i < k; i++) {
		total = total + arr[i];
	}

	(e = k), (maxTotal = total);

	while (e < n) {
		total = total - arr[s] + arr[e];

		maxTotal = Math.max(total, maxTotal);

		e++;
		s++;
	}
	return maxTotal;
}
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
	k = 3;

console.log('Max sub array elements', maxSubArrayEl(array, k));
console.log