function generateBinary(n) {
	let queue = [];
	let s1 = '',
		s2 = '';
	let result = [];

	queue.push(1);

	console.log(queue);
	for (let i = 0; i < n; i++) {
		result.push(queue.shift());

		s1 = result[i] + '0';
		s2 = result[i] + '1';

		queue.push(s1);
		queue.push(s2);
	}
	return result;
}

console.log(generateBinary(10));
