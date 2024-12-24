function minWindow(s, t) {
	// Initialize two maps for storing char frequencies
	let smap = new Map();
	let tmap = new Map();

	let l = 0,
		r = 0;

	let minLength = Number.MAX_SAFE_INTEGER;
	let minSubstr = '';

	for (let char of t) {
		if (!tmap.has(char)) {
			tmap.set(char, 1);
		} else {
			tmap.set(char, tmap.get(char) + 1);
		}
		console.log('T map after adding', tmap);
	}

	let req = tmap.size;
	let current = 0;

	while (r < s.length) {
		// Add the current character to the window
		let curr = s[r];
		if (tmap.has(curr)) {
			smap.set(curr, (smap.get(curr) || 0) + 1);

			if (tmap.get(curr) === smap.get(curr)) {
				current++;
			}
		}
		while (current === req) {
			// Found the valid substring
			if (r - l + 1 < minLength) {
				minLength = r - l + 1;
				minSubstr = s.substring(l, r + 1);
			}

			const leftChar = s[l];

			if (tmap.has(leftChar)) {
				smap.set(leftChar, smap.get(leftChar) - 1);

				if (smap.get(leftChar) < tmap.get(leftChar)) {
					current--;
				}
			}
			l++;
		}
		r++;
	}
	return minSubstr;
}

const s = 'cabwefgewcwaefgcf';
const t = 'cae';

console.log('Result', minWindow(s, t));
