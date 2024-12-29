function mergeIntervals(intervals) {
	let output = [];
	output.push(intervals[0]);

	for (let i = 1; i < intervals.length; i++) {
		let curr = intervals[i];
		let outLen = output.length - 1;
		if (output[outLen][1] >= curr[0]) {
			output[outLen][1] = Math.max(output[outLen][1], curr[1]);
		} else {
			output.push(curr);
		}
	}
	return output;
}

const intervals = [
	[2, 4],
	[3, 5],
	[4, 5],
	[6, 10],
	[12, 14],
];

console.log('Resulting intervals', mergeIntervals(intervals));
