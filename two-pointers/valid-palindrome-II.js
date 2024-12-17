function validPalindrome(string) {
	let start = 0,
		end = string.length - 1;

	let isOnce = false;

	// Traverse string from both sides
	while (start <= end) {
		// console.log('End,start', start, end);
		// if both strings are equal move the pointers
		if (string[start] === string[end]) {
			start++;
			end--;
		} else {
			if (isPalindrome(string, start + 1, end)) {
				return true;
			} else if (isPalindrome(string, start, end - 1)) {
				return true;
			} else {
				return false;
			}
		}
	}
	return true;
}

function isPalindrome(string, s, l) {
	while (s < l) {
		if (string[s] !== string[l]) {
			return false;
		}
		s++;
		l--;
	}
	return true;
}

const string = 'aguokepatgbnvfqmgmlucpuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga';
console.log(validPalindrome(string)); // true
