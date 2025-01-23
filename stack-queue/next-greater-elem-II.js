function nextGreaterElement(nums1, nums2) {
	let hash = {};
	let stack = [],
		out = [];

	nums2.forEach((curr) => {
		// let top = stack[stack.length - 1];

		while (stack.length && curr > stack[stack.length - 1]) {
			hash[stack[stack.length - 1]] = curr;
			stack.pop();
		}

		stack.push(curr);
		console.log('Stack', stack, hash);
	});

	stack.forEach((el) => (hash[el] = -1));

	nums1.forEach((curr) => {
		let greaterEl = hash[curr];
		out.push(greaterEl);
	});
	return out;
}

const nums1 = [137, 59, 92, 122, 52, 131, 79, 236],
	nums2 = [137, 59, 92, 122, 52, 131, 79, 236];
console.log('Next greater ele', nextGreaterElement(nums1, nums2));
