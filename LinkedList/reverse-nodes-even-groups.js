const List = require('./List');

function reverseEvenLengthGroups(head) {
	let groupLen = 2;
	let curr = head.next,
		prevEnd = head;

	while (curr !== null) {
		let n = 1;
		let localPrev = prevEnd;
		let localCurr = curr;

		while (curr && n <= groupLen) {
			prevEnd = curr;
			curr = curr.next;
			n++;
		}
		n--;
		console.log('BEFORE reverse', { curr, prevEnd });
		if (Math.min(n, groupLen) % 2 === 0) {
			let reverse = reverseList(localCurr, Math.min(n, groupLen));

			console.log('Reverse', { localPrev, localCurr, curr, prevEnd, reverse });

			// Update the pointers
			localPrev.next = reverse;
			prevEnd = localCurr;

			// return prevEnd;
			console.log({ reverse, prevEnd, curr });
			// return prevEnd;
		}

		groupLen++;
	}
	return head;
}

function reverseList(head, count) {
	// console.log('IN Reverse', { head, count });
	if (!head || !head.next) return head;

	let prev = null,
		curr = head,
		next = null;
	while (curr && count > 0) {
		next = curr.next;
		curr.next = prev;
		prev = curr;
		curr = next;
		count--;
	}
	head.next = next;
	return prev;
}

const list = new List();
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr.forEach((el) => list.insertAtTail(list.head, el));

console.log('List created', list.getListStr(list.head));

const newHead = reverseEvenLengthGroups(list.head);
console.log('After swapping', list.getListStr(newHead));
