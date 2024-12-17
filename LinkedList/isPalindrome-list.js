const getMiddleNode = require('../fastSlowPointers/middle-node-ll');
const List = require('./List');
const reverseList = require('./reverse-list');

function palindrome(head) {
	// We need to find the middle element of list;
	let middle = getMiddleNode(head);
	let reversedList = reverseList(middle);
	// console.log('Middle element', reversedList);
	// conosl

	//compare the both the half

	while (head !== null && reversedList !== null) {
		if (head.data !== reversedList.data) {
			return false;
		}
		head = head.next;
		reversedList = reversedList.next;
	}
	return true;
}

const list = new List();
const arr = [2, 4, 6, 8, 4, 2];

arr.forEach((el) => list.insertAtTail(list.head, el));

console.log('List created', list.getListStr(list.head));

console.log('Is list palindrome?', palindrome(list.head));
