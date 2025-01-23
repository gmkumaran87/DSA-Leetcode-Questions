const List = require('./List');

function getMiddle(head) {
	let slow = head,
		fast = head;

	while (fast && fast.next) {
		slow = slow.next;
		fast = fast.next.next;
	}

	return slow;
}

function reverseList(head) {
	let prev = null,
		next = null;
	let curr = head;

	while (curr) {
		next = curr.next;
		curr.next = prev;
		prev = curr;
		curr = next;
	}
	return prev;
}
function reorderList(head) {
	if (!head || !head.next) return head;

	// Get the middle of the list
	let mid = getMiddle(head);

	// Reverse the second half of the list
	let midRev = reverseList(mid);

	// return mid;
	console.log('Middle', { head, mid, midRev });

	// Traverse both the halfs and reorder alternatively
	let curr = head;
	let secondHalf = midRev;

	while (secondHalf && secondHalf.next) {

        let temp1 = curr.next;
        let temp2 = secondHalf.next;
        curr.next = secondHalf;
        curr = temp1;
        secondHalf.next = temp1;
        secondHalf = temp2;

        secondHalf.next = 
		let temp = curr.next;
		curr.next = secondHalf;
		curr = temp;

		temp = secondHalf.next;
		secondHalf.next = curr;
		secondHalf = temp;
		// count++;
		// return;
	}
	console.log('WHILE', { curr, secondHalf, head });

	return head;
}

const list = new List();

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

arr.forEach((el) => list.insertAtTail(list.head, el));

console.log('List created', list.getListStr(list.head));

const newList = reorderList(list.head);
console.log('After Reordering List', list.getListStr(newList));
