const Stack = require('./Stack');

class MyQueue {
	constructor() {
		this.stack1 = new Stack();
		this.stack2 = new Stack();
	}

	// Add an element to the end of the queue.
	push(element) {
		if (this.stack1.isEmpty()) {
			this.stack1.push(element);
		} else {
			while (!this.stack1.isEmpty()) {
				this.stack2.push(this.stack1.pop());
			}
			this.stack1.push(element);

			while (!this.stack2.isEmpty()) {
				this.stack1.push(this.stack2.pop());
			}
		}
	}

	pop() {
		return this.stack1.pop();
	}

	peek() {
		return this.stack1.getTop();
	}

	// Return whether the queue is empty.
	empty() {
		return this.stack1.isEmpty();
	}
}

const queue = new MyQueue();
queue.push(1);
queue.push(2);
queue.push(3);
console.log('Peek', queue.peek()); // Peek 1
console.log(queue.pop());
console.log('Peek', queue.peek()); // Peek 2
console.log(queue.pop()); // Pe
