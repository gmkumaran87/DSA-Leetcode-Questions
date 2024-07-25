/**
 * Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals,    and return an array of the non-overlapping intervals that cover all the intervals in the input.

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

 */

// Pattern - Sort the interval by the index - 0 and traverse the intervals by checking if it overlaps.
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
	intervals.sort((a, b) => a[0] - b[0]);
	let result = [];
	result.push(intervals[0]);

	for (let i = 1; i < intervals.length; i++) {
		let curr = intervals[i];
		let resultLast = result.pop();

		if (resultLast[1] >= curr[0]) {
			if (resultLast[1] < curr[1]) {
				result.push([resultLast[0], curr[1]]);
			} else {
				result.push(resultLast);
			}
		} else {
			result.push(resultLast);
			result.push(curr);
		}
	}
	return result;
};
