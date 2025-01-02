class NestedIntegers {
	// Constructor initializes a single integer if a value has been passed
	// else initializes an empty list
	constructor(integer = null) {
		if (integer) this.integer = integer;
		else {
			this.nList = [];
			this.integer = 0;
		}

		// If this NestedIntegers holds a single integer rather
		// than a nested list, returns TRUE, else, returns FALSE
		this.isInteger = function () {
			if (this.integer) return true;
			return false;
		};

		// Returns the single integer, if this NestedIntegers holds a single integer
		// Returns null if this NestedIntegers holds a nested list
		this.getInteger = function () {
			return this.integer;
		};

		// Sets this NestedIntegers to hold a single integer.
		this.setInteger = function (value) {
			this.nList = null;
			this.integer = value;
		};

		// Sets this NestedIntegers to hold a nested list and adds a nested
		// integer to it.
		this.add = function (ni) {
			if (this.integer) {
				this.nList = [];
				this.nList.push(new NestedIntegers(this.integer));
				this.integer = null;
			}
			this.nList.push(ni);
		};

		// Returns the nested list, if this NestedIntegers holds a nested list
		// Returns null if this NestedIntegers holds a single integer
		this.getList = function () {
			return this.nList;
		};
	}
}

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
 */

class NestedIterator {
	constructor(list) {
		this.stack = [...list.reverse()];
	}

	hasNext() {
		while (this.stack.length > 0) {
			let top = this.stack[this.stack.length - 1];

			if (top.isInteger()) {
				return true;
			}
			let list = top.getList();
			this.stack.pop();
			for (let n of list) {
				this.stack.push(n);
			}

			return true;
		}
	}

	next() {
		if (this.hasNext()) {
			let top = this.stack.pop();
			return top.getInteger();
		}
		return null;
	}
}

let nestedList = [];
let l1 = new NestedIntegers();
nestedList.push(new NestedIntegers(1));
l1.add(new NestedIntegers(2));
l1.add(new NestedIntegers(3));

nestedList.push(l1);
nestedList.push(new NestedIntegers(4));
// console.log('Integer', nestedList);

// const nestedList = [[1, [4, [6]]], [7], [8]];

const nestedIterator = new NestedIterator(nestedList);
const result = [];
let i = 1;
while (nestedIterator.hasNext()) {
	result.push(nestedIterator.next());
}

console.log('Result: ' + result); // [1,2,3,4]
// itr.push(new NestedIterator(nestedList));
