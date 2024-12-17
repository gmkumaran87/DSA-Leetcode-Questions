function isPalindrome(str) {
	// Replace this placeholder return statement with your code
	let s = 0,
		e = str.length - 1;

	while (s <= e) {
		if (str[s] === str[e]) {
			s++;
			e--;
		} else {
			return false;
		}
	}
	return true;
}

console.log(isPalindrome('malayalam')); // true
