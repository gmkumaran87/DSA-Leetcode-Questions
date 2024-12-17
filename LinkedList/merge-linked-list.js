const List = require('./List');

function mergeTwoList(list1, list2) {
	let first = list1.head;
	let second = list2.head;
	let newList = new List();

	while (first !== null && second !== null) {
		if (first.data < second.data) {
			newList.insertAtTail(newList.head, first.data);
			first = first.next;
		} else if (first.data > second.data) {
			newList.insertAtTail(newList.head, second.data);
			second = second.next;
		} else {
			newList.insertAtTail(newList.head, first.data);

			newList.insertAtTail(newList.head, second.data);
			first = first.next;
			second = second.next;
		}
	}

	while (first !== null) {
		newList.insertAtTail(newList.head, first.data);
		first = first.next;
	}

	while (second !== null) {
		newList.insertAtTail(newList.head, second.data);
		second = second.next;
	}
	return newList;
}

const list = new List();

const arr = [3, 5, 7, 9];

arr.forEach((el) => list.insertAtTail(list.head, el));

console.log('List created', list.getListStr(list.head));

const list2 = new List();
const arr2 = [1, 2, 3, 4];

arr2.forEach((el) => list2.insertAtTail(list2.head, el));

console.log('List created 2', list2.getListStr(list2.head));

const mergedList = mergeTwoList(list, list2);
console.log('After Merging List', list.getListStr(mergedList.head));
