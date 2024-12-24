function findLongestSubstr(str) {
	let s = 0,
		e = 0;
	let hm = new Map();
	let maxLen = 0;

	while (e < str.length) {
		let curr = str[e];

		if (hm.has(curr) && hm.get(curr) >= s) {
			s = hm.get(curr) + 1;
		}

		hm.set(curr, e);
		maxLen = Math.max(maxLen, e - s + 1);
		e++;
	}
	return maxLen;
}

const str = 'abccabcabcc';
console.log(findLongestSubstr(str)); //3
