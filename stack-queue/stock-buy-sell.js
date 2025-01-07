/**
 * @param {number[]} prices
 * @return {number}
 */
function optimalStockTrading(prices) {
	let stack = [];
	let profit = 0;

	stack.push(prices[prices.length - 1]);
	console.log(stack, prices.length);
	for (let i = prices.length - 2; i >= 0; i--) {
		let curr = prices[i];
		let top = stack[stack.length - 1];

		if (curr >= top) {
			stack.pop();
			stack.push(curr);
		} else {
			profit = Math.max(profit, top - curr);
		}
	}
	return profit;
}

const prices = [1, 2, 3, 4];

console.log(optimalStockTrading(prices));
