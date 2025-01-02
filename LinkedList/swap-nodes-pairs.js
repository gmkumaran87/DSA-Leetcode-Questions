const List = require('./List');
const Node = require('./Node');
/**
 * Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem
 *  without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)
 *
 * Example 1:
 * Input: head = [1,2,3,4]
 * Output: [2,1,4,3]
 */

function swapPairs(head) {
	if (head === null || head.next === null) return head;

	let dummy = new Node(0);
	dummy.next = head;
	let curr = head;
	let prev = dummy;

	while (curr && curr.next) {
		console.log({ curr, prev, dummy });
		let nextPair = curr.next.next;
		let second = curr.next;

		// Swap the pair
		curr.next = nextPair;
		second.next = curr;
		prev.next = second;

		console.log({ prev, curr, second });
		// Update the pointers
		prev = curr;
		curr = nextPair;

		// console.log({ head, curr });
		// head = head.next.next;
	}
	return dummy.next;
}

const list = new List();
const arr = [1, 2, 3, 4];

arr.forEach((el) => list.insertAtTail(list.head, el));

console.log(list.getListStr(list.head));

const newHead = swapPairs(list.head);
console.log(list.getListStr(newHead));
