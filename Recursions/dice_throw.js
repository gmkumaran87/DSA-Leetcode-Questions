function diceThrow(n, k, target) {
	let arr = [];
	function dice(p, target, arr) {
		if (target === 0) {
			console.log(p, arr);

			if (p.length === n) {
				console.log(p, arr);
				arr.push(p);
				return;
			}
			return;
		}

		for (let i = 1; i <= k && i <= target; i++) {
			// console.log('i', i, p, target);
			dice(p + i, target - i, arr);
		}
		return arr;
	}

	return dice('', target, arr);
	console.log('arr', arr);
}

console.log(diceThrow(30, 30, 500));
