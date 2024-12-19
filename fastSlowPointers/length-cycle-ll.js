const Node = require('../LinkedList/Node');
const List = require('../LinkedList/List');

function lengthCycle(slow, fast) {
	let count = 1;
	fast = fast.next;
	while (slow !== fast) {
		fast = fast.next;
		count++;
	}
	return count;
}
function detectCycles(head) {
	let slow = head,
		fast = head;

	while (slow && fast) {
		slow = slow.next;
		fast = fast.next.next;

		if (slow === fast) {
			slow = head;

			while (slow !== fast) {
				slow = slow.next;
				fast = fast.next;
			}
			return slow;
		}
	}
}

const head = new Node(1);
const second = new Node(2);
const third = new Node(3);
const fourth = new Node(4);
const fifth = new Node(5);

head.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;
fifth.next = third;

// console.log('List created', list.getListStr(head));

console.log('Detecting cycles', detectCycles(head)); // should return 3 for a cycle of length 3
