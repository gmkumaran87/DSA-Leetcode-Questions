function validWordAbbreviation(word, abbr) {
	// Traverse abbr and word with two pointers respectively

	let s = 0,
		e = 0;
	console.log(word, abbr);
	while (s < word.length && e < abbr.length) {
		// If characters match or if abbr is a number, move both pointers
		if (isNaN(abbr[e]) && abbr[e] === word[s]) {
			console.log('In First IF', s, e);

			s++;
			e++;
		} else if (isNaN(abbr[e]) && abbr[e] !== word[s]) {
			console.log('In SEcond else', s, e);
			return false;
		} else {
			console.log('In Last else', isNaN(Number('3')), word[s], s, e);
			// s = e = 3
			let j = e; // j = 3
			while (!isNaN(abbr[j])) {
				j++; // j = 4
			}
			let number = +abbr.slice(e, j - e); // 2
			s = s + number;
			e = e + (j - e);
		}
		// console.log('s = ', s, e);
	}
	return true;
}

const word = 'mindset';
const abbr = 'min2et';

console.log(validWordAbbreviation(word, abbr));
