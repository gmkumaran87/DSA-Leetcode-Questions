function maximumSubarraySum(nums, k) {
	let n = nums.length;
	let hm = new Map();
	let total = 0,
		maxTotal = Number.MIN_SAFE_INTEGER;

	let j = 0;
	for (let i = 0; i < n; i++) {
		let curr = nums[i];

		if (hm.has(curr) && hm.get(curr) >= j) {
			let lastInd = hm.get(curr);
			while (j <= lastInd) {
				total -= nums[j];
				j++;
			}
		}
		total += curr;
		hm.set(curr, i);

		if (i - j + 1 === k) {
			maxTotal = Math.max(maxTotal, total);
			total -= nums[j];
			j++;
		}
		console.log('I,J', j, i, total, maxTotal);
	}

	return Math.max(maxTotal, 0);
}

const nums = [1, 5, 4, 2, 9, 9, 9], //[1, 5, 4, 2, 9, 9, 9],
	k = 3;

console.log('Result', maximumSubarraySum(nums, k));
