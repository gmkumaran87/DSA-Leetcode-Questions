function minWindow(str1, str2) {
	let str1Len = str1.length,
		str2Len = str2.length;
	let minLen = Infinity,
		start = 0,
		end = 0;
	let minSubSeq = '';

	let str1Index = 0,
		str2Index = 0;
	while (str1Index <= str1Len) {
		if (str1[str1Index] === str2[str2Index]) {
			str2Index++;

			if (str2Index === str2Len) {
				// console.log('Found ', str2Index, str1Index);
				start = str1Index;
				end = str1Index;

				str2Index--;
				while (str2Index >= 0) {
					if (str2[str2Index] === str1[start]) {
						str2Index--;
					}
					start--;
				}
				start++;
				// minLen = Math.min(minLen, end - start + 1);
				if (minLen > end - start + 1) {
					minSubSeq = str1.slice(start, end + 1);
					minLen = end - start + 1;
				}
				console.log('Start and end', start, end, str1Index, str2Index, minLen, minSubSeq);

				str1Index = start;
				str2Index = 0;
			}
		}
		str1Index++;
		// console.log('str1Index', str1Index, str2Index);
	}
	return minSubSeq;
}

const str1 = 'ADOBECODEBANC',
	str2 = 'ABC';

console.log(minWindow(str1, str2));
