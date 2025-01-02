function isBalanced(exp) {
	let cache = { '}': '{', ')': '(', ']': '[' };
	let stack = [];

	for (let char of exp) {
		if (cache[char] !== undefined) {
			if (stack[stack.length - 1] !== cache[char]) {
				return false;
			} else {
				stack.pop();
			}
		} else {
			stack.push(char);
		}
	}
	return stack.length === 0;
}

const expr = '{}()[(){}[]([])]()()';
console.log('IsBalanced', isBalanced(expr));
