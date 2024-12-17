const List = require('../LinkedList/List');

function removeNthLastNode(head, n) {
	// Initialize two pointer
	let start = head,
		end = head;
	let count = 0;

	while (count < n) {
		end = end.next;
		count++;
		console.log('Count: ', count, end);
	}

	if (!end) {
		return head.next;
	}

	while (end.next != null) {
		start = start.next;
		end = end.next;
	}

	start.next = start.next.next;
	console.log('Start', start, end);

	// Traverse the end pointer to n times

	return head;
}

// Create a linked list of duplicates
const list = new List();
const arr = [2, 7, 5, 12, 7, 6, 15];

arr.forEach((el) => list.insertAtTail(list.head, el));

const newHead = removeNthLastNode(list.head, 2);
console.log('List created', list.getListStr(newHead));
