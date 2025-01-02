/** 
 * Given string num representing a non-negative integer num, and an integer k, 
 * return the smallest possible integer after removing k digits from num.
 *
    Example 1:

    Input: num = "1432219", k = 3
    Output: "1219"
    Explanation: Remove the three digits 4, 3, and 2 to form the new number 
    1219 which is the smallest. 
*/

function removeKdigits(num, k) {
	let stack = [];

	for (let n of num) {
		while (k > 0 && stack.length > 0 && stack[stack.length - 1] > n) {
			k--;
			stack.pop();
		}
		stack.push(n);
	}

	while (k > 0) {
		stack.pop();
		k--;
	}

	let str = stack.join('');
	return str ? String(BigInt(str)) : '0';
}

const num = '112';
const k = 1;
console.log(removeKdigits(num, k)); // Output: 1219
