const List = require('./List');
const Node = require('./Node');
const reverseList = require('./reverse-list');

function reverseKGroup(head, k) {
	/*let curr = head;

	while (curr && curr.next) {
		let count = k;

		while (count > 0) {
			curr = curr.next;
			count--;
		}
		// console.log(curr, head);
		let prev = null,
			next = null,
			current = head,
			temp = head;
		// console.log('Before', { current, curr });
		while (current && current.next !== curr) {
			next = current.next;
			current.next = prev;

			prev = current;
			current = next;
		}
		prev.next = curr;
		console.log('Prev', { curr, current, prev });
	}
	return prev; */

	const dummy = new Node(0);
	dummy.next = head;
	let ptr = dummy;

	while (ptr !== null) {
		let tracker = ptr;

		for (let i = 0; i < k; i++) {
			// console.log('Tracker', tracker);
			if (tracker === null) {
				break;
			}
			tracker = tracker.next;
		}

		if (tracker === null) {
			break;
		}

		console.log('After', { ptr, tracker });
		const updatedNodes = reverseList(ptr.next, k);
		const previous = updatedNodes[0];
		const current = updatedNodes[1];

		console.log('After reversed', { ptr, current, previous });
		const lastNodeOfReversedGroup = ptr.next;
		lastNodeOfReversedGroup.next = current;
		ptr.next = previous;
		ptr = lastNodeOfReversedGroup;
	}

	return dummy.next;
}

const list = new List();
const arr = [1, 2, 3, 4, 5];
arr.forEach((el) => list.insertAtTail(list.head, el));

console.log('List created:', list.getListStr(list.head));

const newList = reverseKGroup(list.head, 2);

console.log('Result', list.getListStr(newList));
