function reverseK(queue, k) {
	let stack = [];

	for (let i = 0; i < k; i++) {
		stack.push(queue.shift());
	}
	console.log(stack, queue);

	while (stack.length > 0) {
		queue.push(stack.pop());
	}

	for (let i = 0; i < queue.length - k; i++) {
		const elem = queue.shift();
		queue.push(elem);
	}
	return queue;
}

const queue = [1, 2, 3, 4, -5, 6, 7, 8, 9, 10],
	k = 5;

console.log('Reversed k elements in queue', reverseK(queue, k));
