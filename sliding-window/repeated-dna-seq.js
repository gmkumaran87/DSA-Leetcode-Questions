/**
 * The DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T'.
 *  For example, "ACGAATTCCG" is a DNA sequence.
 *
 *
 */
function findRepeatedDnaSequences(s, k) {
	let hash = new Map();
	let l = 0,
		r = k;
	let arr = [];

	while (r <= s.length) {
		let substr = s.slice(l, r);
		if (hash.has(substr)) {
			arr.push(substr);
			hash.set(substr, hash.get(substr) + 1);
			// if (hash.get(substr) === 2) {
		} else {
			hash.set(substr, 1);
		}
		l++;
		r++;
		// return;
	}
	console.log(hash);
	return new Set([...arr]);
}

// const dna = 'ATATATATATATATAT',
// 	k = 6;

const dna = 'CGG',
	k = 1;
console.log(findRepeatedDnaSequences(dna, k));
