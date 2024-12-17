const List = require('../List');
const Node = require('../Node');

function insertAtIndex(value, index, head) {
	let current = head;
	let temp = new Node(value);
	if (head === null) {
		return 'List is empty, cannot insert value at index ' + index;
	}
	if (index === 0) {
		// let temp = new Node(value);
		temp.next = head;
		return temp;
	} else {
		let count = 0;
		while (current.next !== null) {
			if (count === index - 1) {
				temp.next = current.next;
				current.next = temp;
				break;
			}
			current = current.next;
			count++;
		}
		return head;
	}
}

function insertRec(value, index, head) {
	if (index === 0) {
		let temp = new Node(value);
		temp.next = head;
		// console.log('At index 0', head);
		return temp;
	}
	let curr = index - 1;
	console.log('Before insert', index, head);
	head.next = insertRec(value, curr, head.next);
	console.log('After insert', curr, head);
	return head;
}

// Create a linked list of duplicates
const list = new List();
const arr = [2, 7, 5, 1, 6];

arr.forEach((el) => list.insertAtTail(list.head, el));

console.log('List created', list.getListStr(list.head));

const newList = insertRec(33, 2, list.head);
// const newList = insertAtIndex(33, 5, list.head);

console.log('List updated', list.getListStr(newList));
