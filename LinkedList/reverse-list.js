const List = require('./List');

function reverseList(list) {
	let prev = null,
		curr = list,
		next = null;

	while (curr) {
		next = curr.next;
		curr.next = prev;
		prev = curr;
		curr = next;
		// if (next !== null) next = next.next;
	}

	return prev;
}
const list = new List();
const arr = [3, 5, 2, 77, 22, 9, 8];

arr.forEach((el) => list.insertAtTail(list.head, el));

console.log('List created', list.getListStr(list.head));

const newList = reverseList(list.head);
console.log('List reversed', list.getListStr(newList));

module.exports = reverseList;
