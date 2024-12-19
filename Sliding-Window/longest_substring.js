/* Given a string s, find the length of the longest substring without repeating characters.

 Pattern: - Use hash table to store the string count
            use sliding windo  two pointers for calculating the length
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	const hashMap = new Map();
	let e = 0;
	let count = 0;
	let startWindow = 0;

	while (e < s.length) {
		const curr = s[e];
		const currIndex = hashMap.get(curr);
		if (hashMap.has(curr) && startWindow <= currIndex) {
			count = Math.max(count, e - startWindow);
			startWindow = currIndex + 1;
			hashMap.set(curr, e);
			e++;
		} else {
			hashMap.set(curr, e);
			count = Math.max(count, e - startWindow + 1);

			e++;
		}
	}
	// if (count === 0 && hashMap.size !== 0) return hashMap.size;
	return count;
};

const str = 'tmmzuxt';

console.log('Longest substring', lengthOfLongestSubstring(str));
