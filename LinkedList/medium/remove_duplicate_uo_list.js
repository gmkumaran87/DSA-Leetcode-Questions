const List = require('../List');

function removeDuplicates(head) {
	// If list is empty or has only one element, return it immediately
	if (head === null) {
		return null;
	}

	if (head.next === null) return head;

	let current = head;

	while (current !== null) {
		let inner = current;

		while (inner !== null) {
			if (inner.next !== null && inner.next.data === current.data) {
				inner.next = inner.next.next;
			} else {
				inner = inner.next;
			}
		}

		current = current.next;
	}
	return current;
}

function removeDuplicatesHash(head) {
	let hash = new Map();
	// Create a linked list of duplicates
	const newList = new List();

	if (head === null) return null;

	if (head.next === null) return head;

	let current = head;
	let prev = null;
	// hash.set(current.data, current.data);
	while (current !== null) {
		// let inner = current;
		if (hash.has(current.data)) {
			prev.next = current.next;
		} else {
			hash.set(current.data, current.data);
			// current = current.next;
			prev = current;
		}
		current = current.next;
	}

	console.log('Hash created', hash, newList.getListStr(head));

	return head;
}

// Create a linked list of duplicates
const list = new List();
const arr = [2, 7, 5, 2, 7, 6, 5];

arr.forEach((el) => list.insertAtTail(list.head, el));

console.log('List created', list.getListStr());

const newList = removeDuplicatesHash(list.head);
console.log('After removing duplicates', list.getListStr(newList.head));
