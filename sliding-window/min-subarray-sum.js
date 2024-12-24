function minSubArrayLen(target, nums) {
	// Replace this placeholder return statement with your code
	let s = 0,
		e = 0;
	let sum = 0;
	let minLen = Number.MAX_SAFE_INTEGER;

	while (e < nums.length) {
		let curr = nums[e];
		sum = sum + curr;

		while (sum >= target) {
			minLen = Math.min(minLen, e - s + 1);
			console.log('Find the sub array', s, e, sum);
			sum = sum - nums[s];
			s++;
		}
		e++;
	}
	return minLen === Number.MAX_SAFE_INTEGER ? 0 : minLen;
}

const nums = [1, 3, 4, 5, 2],
	target = 12;
console.log('Result', minSubArrayLen(target, nums));
