const List = require('../LinkedList/List');

function getMiddleNode(head) {
	// Initialize slow and fast pointer at the head
	let slow = head,
		fast = head;

	while (fast && fast.next) {
		slow = slow.next;
		fast = fast.next.next;
	}

	return slow;
}

const arr = [3, 4, 5, 99, 7, 23, 40];
const list = new List();
arr.forEach((el) => list.insertAtTail(list.head, el));

// console.log(list.getListStr(list.head));

// console.log(getMiddleNode(list.head));

module.exports = getMiddleNode;
