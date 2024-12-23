function characterReplacement(s, k) {
	let l = 0,
		r = 0;
	let freqMax = 0,
		longestChar = 0;
	let hm = new Map();

	while (r < s.length) {
		let curr = s[r];
		if (hm.has(curr)) {
			hm.set(curr, hm.get(curr) + 1);
		} else {
			hm.set(curr, 1);
		}

		freqMax = getMaxCount(hm);

		if (r - l + 1 - freqMax <= k) {
			// r++;
		} else {
			let leftChar = s[l];
			hm.set(leftChar, hm.get(leftChar) - 1);
			l++;
		}
		longestChar = Math.max(longestChar, r - l + 1);
		r++;
	}
	return longestChar;
}

function getMaxCount(hm) {
	let maxCount = 0;
	for (let val of hm.values()) {
		maxCount = Math.max(maxCount, val);
	}
	return maxCount;
}
const str = 'AABABBA',
	k = 1;

console.log('Result', characterReplacement(str, k));
