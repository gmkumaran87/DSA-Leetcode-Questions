const List = require('./List');
const Node = require('./Node');

function reverseBetween(head, left, right) {
	if (!head || left === right) return head;
	let dummy = new Node(0);
	dummy.next = head;
	let prev = dummy;
	let curr = null;

	console.log('Before Loop', { prev, prevNext: prev.next, left });

	for (let i = 0; i < left - 1; i++) {
		prev = prev.next;
	}

	console.log('Node', { prev, prevNext: prev.next, left });
	let prevN = left === 1 ? dummy : prev;
	curr = prev.next;
	let localHead = curr;

	let count = left;
	// Reverse the sub-list
	while (curr && count <= right) {
		let next = curr.next;
		curr.next = prev;
		prev = curr;
		curr = next;
		count++;
	}
	console.log('After reverse', { prev, curr });
	prevN.next = prev;
	localHead.next = curr;
	return dummy.next;
}

const list = new List();
const arr = [4, 15, 1, 7, 2, 9, 8]; // 4,2,7,1,15,9,8

arr.forEach((el) => list.insertAtTail(list.head, el));

console.log('List created', list.getListStr(list.head));

const newList = reverseBetween(list.head, 3, 5);

console.log('After reversing sub list', list.getListStr(newList));
