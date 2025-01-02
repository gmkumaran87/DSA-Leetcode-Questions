function removeDuplicates(s) {
	let stack = [];

	for (let char of s) {
		if (stack.length === 0 || char !== stack[stack.length - 1]) {
			stack.push(char);
		} else if (stack.length !== 0 && char === stack[stack.length - 1]) {
			stack.pop();
		}
	}
	return stack.join('');
}

const str = 'aadbbccdd';
console.log('Removes duplicate', removeDuplicates(str));
