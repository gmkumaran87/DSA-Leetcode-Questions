const Stack = require('./Stack');

class MinStack {
	constructor() {
		this.stack = new Stack();
		this.minStack = new Stack();
	}

	pop() {
		let poppedVal = this.stack.pop();

		if (poppedVal === this.minStack.getTop()) {
			this.minStack.pop();
		}
		return poppedVal;
	}

	push(value) {
		this.stack.push(value);

		if (this.minStack.isEmpty()) {
			this.minStack.push(value);
		} else if (this.minStack.getTop() > value) {
			// this.minStack.pop();
			this.minStack.push(value);
		}
	}

	min() {
		return this.minStack.getTop();
	}

	getStacks() {
		return { main: this.stack, min: this.minStack };
	}
}

const minStack = new MinStack();

minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getStacks()); // { main: Stack { items: [ -2, 0, -3 ] }, min: Stack { items: [ -3 ] } }
console.log('Min stack', minStack.min());
