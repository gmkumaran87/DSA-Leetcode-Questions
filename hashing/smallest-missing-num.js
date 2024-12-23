function firstMissingPositive(nums) {
	let hm = new Map();

	for (let n of nums) {
		if (n > 0) {
			hm.set(n, 1);
		}
	}
	console.log(hm);

	for (let i = 1; i <= nums.length; i++) {
		if (!hm.has(i)) {
			return i;
		}
	}
	return nums.length + 1;
}

const arr = [2, 1];

console.log('Result', firstMissingPositive(arr));
