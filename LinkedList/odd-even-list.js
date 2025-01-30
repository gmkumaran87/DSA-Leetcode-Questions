const List = require('./List');
const Node = require('./Node');

function oddEvenList(head) {
	let arr = [];
	let curr = head;

	while (curr !== null && curr.next !== null) {
		arr.push(curr.data);
		curr = curr.next.next;
	}
	if (curr !== null) arr.push(curr.data);
	curr = head.next;
	while (curr !== null && curr.next !== null) {
		arr.push(curr.data);
		curr = curr.next.next;
	}
	if (curr !== null) arr.push(curr.data);

	let i = 0;
	curr = head;
	// console.log('Odd node', arr, curr);

	while (curr !== null) {
		curr.data = arr[i];
		curr = curr.next;
		i++;
	}
	// odd.next = even;
	return head;
}

function oddEvenInPlace(head) {
	let curr = head;
	let oddHead = (odd = new Node(0));
	let evenHead = (even = new Node(0));
	let count = 1;

	while (curr) {
		if (count % 2 === 1) {
			odd.next = curr;
			odd = odd.next;
		} else {
			even.next = curr;
			even = even.next;
		}
		curr = curr.next;
		count++;
		console.log('Curr in while', curr);
	}
	odd.next = evenHead.next;
	even.next = null;
	return oddHead.next;
}

function oddEvenSingle(head) {
	let curr = head;
	let odd = head;
	let even = head.next,
		evenHead = head.next;

	while (even && even.next) {
		odd.next = odd.next.next;
		odd = odd.next;
		even.next = even.next.next;
		even = even.next;
	}
	odd.next = evenHead;

	return head;
}

const list = new List();
const arr = [1, 2, 3, 4, 5, 6, 7];

arr.forEach((el) => list.insertAtTail(list.head, el));

console.log(list.getListStr(list.head));
const newList = oddEvenInPlace(list.head);

console.log('Reordered', list.getListStr(newList));
