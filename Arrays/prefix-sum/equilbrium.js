function prefixSumArray(A) {
	let pfSum = [];

	pfSum[0] = A[0];
	for (let i = 1; i < A.length; i++) {
		pfSum[i] = pfSum[i - 1] + A[i];
	}
	return pfSum;
}
function solve(A) {
	const pfSumArray = prefixSumArray(A);
	console.log('Prefix sum', pfSumArray);
	let left = 0;
	let right = 0;

	let arrLength = A.length;

	for (let i = 0; i < arrLength; i++) {
		// Calculating LEFT sum
		if (i === 0) {
			left = 0;
		} else {
			// Sum of left elements Sum[0 i-1]
			left = pfSumArray[i - 1];
		}

		// Calculating RIGHT element sum
		if (i === arrLength - 1) {
			right = 0;
		} else {
			right = pfSumArray[arrLength - 1] - pfSumArray[i];
		}

		if (left === right) {
			return i;
		}
	}
	return -1;
}

const A = [-7, 1, 5, 2, -4, 3, 0];

console.log('Solve', solve(A));
