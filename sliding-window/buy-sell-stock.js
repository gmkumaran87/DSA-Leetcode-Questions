function maxProfit(prices) {
	let b = 0,
		s = 1;
	let res = 0;

	while (s < prices.length) {
		let currProfit = prices[s] - prices[b];
		res = Math.max(res, currProfit);

		if (prices[b] >= prices[s]) {
			b = s;
		}
		console.log('Max', b, s, res, currProfit);
		s++;
	}
	return res;
}

const prices = [7, 1, 5, 3, 6, 4];

console.log('Best profit', maxProfit(prices));
