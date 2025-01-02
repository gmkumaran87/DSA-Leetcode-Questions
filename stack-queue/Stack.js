class Stack {
	constructor() {
		this.items = [];
		this.top = null;
	}

	getTop() {
		if (this.items.length > 0) {
			return this.items[this.items.length - 1];
		} else {
			return null;
		}
	}

	isEmpty() {
		return this.items.length === 0;
	}

	size() {
		return this.items.length;
	}

	// Add an item to the top of the stack
	push(item) {
		this.items.push(item);
		this.top = item;
	}

	// Remove and return the top item from the stack
	pop() {
		let itemLen = this.items.length;
		if (itemLen > 0 && itemLen === 1) {
			this.top = null;
			return this.items.pop();
		} else if (itemLen > 1) {
			this.top = this.items[itemLen - 2];
			return this.items.pop();
		} else {
			return null;
		}
	}
}
module.exports = Stack;
