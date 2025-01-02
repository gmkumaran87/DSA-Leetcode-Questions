function evaluatePostfix(expr) {
	let stack = [];

	for (let char of expr) {
		if (!isNaN(char)) {
			stack.push(char);
		} else {
			const num2 = +stack.pop();
			const num1 = +stack.pop();
			const res = applyOperatin(num1, num2, char);
			stack.push(res);
		}
	}
	return +stack.pop();
}

function applyOperatin(num1, num2, operand) {
	switch (operand) {
		case '+':
			return num1 + num2;
		case '-':
			return num1 - num2;
		case '*':
			return num1 * num2;
		case '/':
			return Math.floor(num1 / num2);
		default:
			return 'Invalid operand';
	}
}

const expr = '435/+';
console.log(evaluatePostfix(expr)); // Outputs: -46
