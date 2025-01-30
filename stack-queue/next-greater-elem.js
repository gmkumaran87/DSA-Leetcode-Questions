function nextGreaterElement(arr) {
	let stack = [];
	let n = arr.length;
	let out = new Array(arr.length).fill(-1);

	for (let i = 2 * n - 1; i >= 0; i--) {
		let curr = arr[i % n];

		while (stack.length > 0 && curr >= stack[stack.length - 1]) {
			stack.pop();
		}
		if (i < n) {
			if (stack.length > 0) {
				out[i] = stack[stack.length - 1];
			}
		}
		stack.push(curr);
		console.log('Stack', i, curr, stack, out);
	}
	return out;
}

const arr = [1, 2, 1]; // [3,5, 4, 1, 7, 6, 0];
console.log(nextGreaterElement(arr)); // Output: [6, 8, 6, 8, -1, 8, -1, 9, -1]
