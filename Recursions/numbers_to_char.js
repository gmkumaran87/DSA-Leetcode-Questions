function letterCombinations(digits) {
	let outArr = [];
	function pad(p, up, arr) {
		if (up.length === 0) {
			arr.push(p);
			return arr;
		}

		let digit = up.charAt(0) - '0';

		for (let i = (digit - 1) * 3; i < digit * 3; i++) {
			let code = 'a'.charCodeAt(0) + i;
			let ch = String.fromCharCode(code);
			pad(p + ch, up.slice(1), arr);
		}
		return arr;
	}

	return pad('', digits, outArr);
}

const output = letterCombinations('12');
console.log('Phone number: ', output);
