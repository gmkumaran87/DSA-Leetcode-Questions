const Node = require('./Node');
class List {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	getHead() {
		return this.head;
	}
	isEmpty() {
		return this.head === null;
	}

	insertAtHead(value) {
		let temp = new Node(value);

		temp.next = this.head;
		this.head = temp;
		this.size++;
		return this;

		// this.temp = this.head;
	}

	insertAtTail(head, value) {
		let tempNode = new Node(value);
		let current;

		if (head === null) {
			this.head = tempNode;
			return this;
		} else {
			current = head;
		}

		while (current.next !== null) {
			current = current.next;
		}
		current.next = tempNode;
		this.size++;

		return head;
	}

	deleteAtHead() {
		if (this.isEmpty()) return this;

		let temp = this.head;

		this.head = temp.next;
		this.size--;

		return this;
	}

	deleteVal(head, value) {
		if (head === null) return 'List is empty';

		let current = head;
		let previous = null;

		if (current.data === value) {
			head = head.next;
			// current.next = null;
			this.size--;
			return true;
		}

		while (current !== null) {
			if (current.data === value) {
				previous.next = current.next;
				current.next = null;
				this.size--;
				return true;
			}
			previous = current;
			current = current.next;
		}
		return false;
	}

	deleteAtTail() {
		if (this.isEmpty()) return this;

		let firstNode = this.head;

		// corner case if list has only one element
		if (firstNode.next === null) {
			this.head = null;
			this.size--;
			return this;
		}

		// Traverse till last node/tail
		let current = this.head;

		while (current.next.next === null) {
			current = current.next;
		}
		current.next = null;
		return this;
	}
	search(head, value) {
		if (head === null) return 'Not found';

		let current = head;

		while (current) {
			if (current.data === value) {
				return true;
			}
			current = current.next;
		}
		return false;
	}

	searchRecursive(head, value) {
		if (head === null) return false;

		if (head.data === value) return true;

		return this.searchRecursive(head.next, value);
	}
	printList() {
		if (this.isEmpty()) return 'List empty';

		let tempNode = this.head;

		while (tempNode !== null) {
			console.log(tempNode.data);
			console.log('->');
			tempNode = tempNode.next;
		}
		return true;
	}
	getListStr(head) {
		// console.log('Inside GetList', head);
		if (head === null) {
			console.log('Empty List');
			return 'null';
		} else {
			// console.log('Inside GetList ELSE', head);

			let temp = head;
			let str = '';
			while (temp != null) {
				str += String(temp.data);
				str += ' ->';
				temp = temp.next;
			}
			str += 'null';

			return str;
		}
	}
}

module.exports = List;
