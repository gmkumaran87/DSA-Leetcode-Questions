const List = require('../LinkedList/List');

function detectCycle(head) {
	// Initialize the slow and fast pointer to the head of the list
	let slow = head,
		fast = head;

	while (slow && fast && fast.next !== null) {
		slow = slow.next;

		fast = fast.next.next;

		// If the slow and fast pointers meet, then there is a cycle

		if (slow === fast) {
			return true; // Cycle detected
		}
	}
	return false;
}
// Create a linked list of duplicates
const list = new List();
const arr = [2, 7, 5, 12, 7, 6, 15];

arr.forEach((el) => list.insertAtTail(list.head, el));

console.log('List created', list.getListStr(list.head));

console.log('Detecting cyle', detectCycle(list.head));
