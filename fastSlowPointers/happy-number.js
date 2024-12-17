function isHappyNumber(number) {
	let slowPoiner = number;
	let fastPointer = sumOfSquares(number);

	console.log(slowPoiner, fastPointer);

	while (slowPoiner !== fastPointer && fastPointer !== 1) {
		slowPoiner = sumOfSquares(slowPoiner);
		fastPointer = sumOfSquares(sumOfSquares(fastPointer));
	}

	return fastPointer === 1;
}

function sumOfSquares(number) {
	let total = 0;
	while (number > 0) {
		let digit = number % 10;
		number = Math.floor(number / 10);
		total = total + Math.pow(digit, 2);
	}
	return total;
}

console.log(isHappyNumber(25)); // true
