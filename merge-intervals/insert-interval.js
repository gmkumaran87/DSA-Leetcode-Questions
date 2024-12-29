function insertInterval(existingIntervals, interval) {
	let result = [];
	let i = 0,
		n = existingIntervals.length;
	while (i < n) {
		let curr = existingIntervals[i];

		if (curr[0] > interval[0]) {
			result.push(interval);
			break;
		}
		console.log('Inside', interval);

		if (curr[1] >= interval[0]) {
			result.push([]);
			let outIndex = result?.length === 0 ? 0 : result.length - 1;

			result[outIndex][0] = curr[0];
			result[outIndex][1] = Math.max(curr[1], interval[1]);
			break;
		} else {
			result.push(curr);
		}
		i++;
	}
	console.log('Inside', result, i);

	if (i === existingIntervals.length) {
		result.push(interval);
	}

	for (let j = i; j < existingIntervals.length; j++) {
		let curr = existingIntervals[j];

		let outLen = result.length - 1;
		if (result[outLen][1] >= curr[0]) {
			result[outLen][1] = Math.max(result[outLen][1], curr[1]);
		} else {
			result.push(curr);
		}
	}
	return result;
}

const intervals = [
	[1, 2],
	[3, 4],
	[5, 8],
	[9, 15],
];
const newInterval = [2, 5];

console.log('Result', insertInterval(intervals, newInterval));
