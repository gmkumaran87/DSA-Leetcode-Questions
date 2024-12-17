function reverseWords(sentence) {
	let start = 0,
		end = 0,
		strlen = sentence.length - 1;

	// Trim for any whitespace
	sentence = sentence.replace(/\s+/g, ' ').trim();
	// Reverse the whole sentence
	let reversedStr = strRev(sentence, 0, strlen);

	console.log(reversedStr);
	// Traverse the array usin two pointer start = end = 0;

	while (start <= strlen || end <= strlen) {
		// If end points to space or last character reverse the word  and update start and end
		if (reversedStr[end] === ' ' || end === strlen) {
			let endInd = end === strlen ? end : end - 1;
			reversedStr = strRev(reversedStr, start, endInd);
			start = end + 1;
			end++;
		} else {
			end++;
		}
	}
	return reversedStr;
}

function strRev(words, start, end) {
	let wordsArr = words.split('');
	while (start <= end) {
		let temp = wordsArr[start];
		wordsArr[start] = wordsArr[end];
		wordsArr[end] = temp;
		start++;
		end--;
	}
	return wordsArr.join(''); //words;
}
const string = 'Reverse the words in a sentence';

console.log('Reverse ', reverseWords(string));
