const List = require('./List');
function swapNodes(head, k) {
	let curr = head;
	let count = 1,
		first = null,
		end = head;

	while (count < k) {
		curr = curr.next;
		count++;
	}
	first = curr;

	// console.log('First node', first);
	while (curr && curr.next) {
		curr = curr.next;
		end = end.next;
	}
	// console.log('Current node', { end, curr });

	let temp = first.value;
	first.value = end.value;
	end.value = temp;

	return head;
}

const list = new List();
const arr = [1, 2, 3, 4, 5];

arr.forEach((el) => list.insertAtTail(list.head, el));
console.log('List', list.getListStr(list.head));

const newHead = swapNodes(list.head, 2);
console.log('New Head', list.getListStr(newHead));
