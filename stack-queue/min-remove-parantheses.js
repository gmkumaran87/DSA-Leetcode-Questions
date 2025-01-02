/**
 * Given a string s of '(' , ')' and lowercase English characters.
 * 
 * Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions )
 *  so that the   resulting parentheses string is valid and return any valid string.

Formally, a parentheses string is valid if and only if:

It is the empty string, contains only lowercase characters, or
It can be written as AB (A concatenated with B), where A and B are valid strings, or
It can be written as (A), where A is a valid string.

 */
function minRemoveParantheses(str) {
	let stack = [],
		result = '';

	for (let i = 0; i < str.length; i++) {
		let ch = str[i];

		if (stack.length > 0 && stack[stack.length - 1][0] === '(' && ch === ')') {
			stack.pop();
		} else if (ch === ')' || ch === '(') {
			stack.push([ch, i]);
		}
	}

	for (let i = str.length - 1; i >= 0; i--) {
		let ch = str[i];
		if (stack.length > 0 && stack[stack.length - 1][1] === i) {
			stack.pop();
		} else {
			result = ch + result;
		}
	}

	return result;
}

const s = 'lee(t(c)o)de)';

console.log('minRemoveParantheses', minRemoveParantheses(s));
