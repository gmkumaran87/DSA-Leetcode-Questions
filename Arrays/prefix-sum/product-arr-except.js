function arrayProductExcludingCurrent(numbers) {
	let prdArr = new Array(numbers.length).fill(0);
	let prdRev = new Array(numbers.length).fill(0);
	let outArr = new Array(numbers.length).fill(0);

	prdArr[0] = numbers[0];
	for (let i = 1; i < numbers.length; i++) {
		prdArr[i] = Math.abs(prdArr[i - 1] * numbers[i]);
	}

	prdRev[numbers.length - 1] = numbers[numbers.length - 1];

	for (let i = numbers.length - 2; i >= 0; i--) {
		prdRev[i] = Math.abs(prdRev[i + 1] * numbers[i]);
	}
	console.log(prdArr, prdRev);
	for (let i = 0; i < numbers.length; i++) {
		if (i === 0) {
			outArr[i] = prdRev[i + 1];
		} else if (i === numbers.length - 1) {
			outArr[i] = prdArr[i - 1];
		} else {
			outArr[i] = prdArr[i - 1] * prdRev[i + 1];
		}
	}

	return outArr;
}

const arr = [0, 0, -1, 1];
console.log('Output', arrayProductExcludingCurrent(arr));
