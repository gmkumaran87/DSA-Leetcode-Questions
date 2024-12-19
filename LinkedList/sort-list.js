const List = require('./List');
const mergeTwoList = require('./merge-linked-list');

function getMiddleNode(head) {
	if (head === null || head.next === null) {
		return head;
	}
	let slow = head,
		fast = head.next;

	while (fast && fast.next) {
		slow = slow.next;
		fast = fast.next.next;
	}
	return slow;
}
function mergeSortList(head) {
	console.log('FIRST', head);
	if (head === null || head.next === null) {
		return head;
	}
	let middle = getMiddleNode(head);

	// console.log('mergeSortList', middle);

	let right = middle.next;
	middle.next = null;
	let left = head;

	console.log('mergeSortList after', right, left);
	// return;

	left = mergeSortList(left);
	right = mergeSortList(right);
	console.log('Left and right', left, right);
	// return mergeTwoList(left, right);

	// console.log('Middle node', newList);
}
const list = new List();
const arr = [4, 5, 1, 8, 3, 2, 9];

arr.forEach((el) => list.insertAtTail(list.head, el));

console.log(list.getListStr(list.head));

mergeSortList(list.head);
