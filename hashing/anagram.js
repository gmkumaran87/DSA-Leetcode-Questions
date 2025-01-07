function anagramChecker(str1, str2) {
	const hm = new Map();

	for (let chr of str1) {
		if (chr === ' ') continue;
		hm.set(chr, (hm.get(chr) || 0) + 1);
	}

	for (let c of str2) {
		// console.log(c);
		if (c === ' ') continue;
		if (hm.has(c)) {
			hm.set(c, hm.get(c) - 1);
			if (hm.get(c) === 0) {
				hm.delete(c);
			}
		} else {
			return false;
		}
	}
	console.log('Hm', hm);

	return hm.size === 0 ? true : false;
}

const str1 = 'hello world';
const str2 = 'world hello'; // 'lwhel'

const result = anagramChecker(str1, str2);

console.log('Result', result);
