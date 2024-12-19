const List = require('./List');

function reverseBetween(head, left, right) {
	let prev = null,
		curr = head,
		next = null;

	let startLess = null;
	let newEnd = null;

	let count = 1;

	while (count < left) {
		prev = curr;
		curr = curr.next;
		count++;
	}

	startLess = prev;
	newEnd = curr;

	// Reverse the sub-list
	let i = 0,
		prevN = null;
	while (i < right - left + 1) {
		next = curr.next;
		curr.next = prevN;
		prevN = curr;
		curr = next;
		i++;
	}

	if (startLess !== null) {
		startLess.next = prevN;
	} else {
		list = prevN;
	}
	newEnd.next = curr;
	return head;

	/*while (curr && count <= end) {
		if (count === start) {
			startLess = prev;
			startNode = curr;
			prev = curr;
			curr = curr.next;
		} else if (count > start && count <= end) {
			next = curr.next;
			curr.next = prev;
			prev = curr;
			curr = next;
		} else {
			prev = curr;
			curr = curr.next;
		}

		count++;
	}

	if (startLess !== null) {
		startLess.next = prev;
	} else {
		list = prev;
	}
	startNode.next = curr;

	console.log('Startnode', { startNode, startLess });
	return list;*/
}

const list = new List();
const arr = [4, 15, 1, 7, 2, 9, 8]; // 4,2,7,1,15,9,8

arr.forEach((el) => list.insertAtTail(list.head, el));

console.log('List created', list.getListStr(list.head));

const newList = reverseBetween(list.head, 3, 5);

console.log('After reversing sub list', list.getListStr(newList));
