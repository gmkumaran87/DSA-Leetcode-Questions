/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
	// Use Binary search to find the index where the newInterval will be inserted

	const index = searchInterval(intervals, newInterval);
	console.log('Index: ', index);
};

function searchInterval(intervals, newInterval) {
	let s = 0,
		e = intervals.length - 1;
	let ans = -1;

	let targetEl = newInterval[0];

	while (s <= e) {
		let mid = Math.floor(s + (e - s) / 2);

		console.log('Mid,s,e', mid, s, e);
		if (intervals[mid][0] <= targetEl) {
			ans = mid;
			s = mid + 1;
		} else if (intervals[mid][0] > targetEl) {
			e = mid - 1;
		}
	}
	return ans;
}

const intervals = [
		[1, 2],
		[3, 5],
		[6, 7],
		[8, 10],
		[12, 16],
	],
	newInterval = [4, 8];

console.log('New Interval', insert(intervals, newInterval));
