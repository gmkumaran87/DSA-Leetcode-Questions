function maxElementLeft(arr) {
	let outArr = [];

	let maxElement = 0;

	for (let i = 0; i < arr.length; i++) {
		outArr[i] = maxElement;
		maxElement = Math.max(maxElement, arr[i]);
	}
	return outArr;
}

function maxElementRight(arr) {
	let outArr = [];

	let maxEl = 0;

	for (let i = arr.length - 1; i >= 0; i--) {
		outArr[i] = maxEl;
		maxEl = Math.max(maxEl, arr[i]);
	}
	return outArr;
}

function trapWater(arr) {
	let total = 0;

	const maxLeftArr = maxElementLeft(arr);
	const maxRightArr = maxElementRight(arr);

	for (let i = 0; i < arr.length - 1; i++) {
		let min = Math.max(Math.min(maxLeftArr[i], maxRightArr[i]) - arr[i], 0);

		total += min;
	}
	return total;
}

function trapWaterMem(arr) {
	let total = 0;
	let l = 0,
		r = arr.length - 1;
	let lMax = arr[l],
		rMax = arr[r];

	while (l < r) {
		if (lMax < rMax) {
			l++;
			lMax = Math.max(lMax, arr[l]);
			total += lMax - arr[l];
		} else {
			r--;
			rMax = Math.max(rMax, arr[r]);
			total += rMax - arr[r];
		}
	}
	return total;
}
const a = [1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
// console.log('Max element Left', maxElementLeft(a));

// console.log('Max element right', maxElementRight(a));

console.log('Max trapped water', trapWaterMem(a));
