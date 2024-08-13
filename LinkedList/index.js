const Node = require('./Node');
const List = require('./List');

// Create a new list
let list = new List();
console.log('Node', list.getHead());

for (let i = 1; i <= 10; i++) {
	list.insertAtHead(i);
}

list.insertAtTail(list.head, 77);

console.log('Search 7:', list.search(list.head, 17));

console.log('Search 7 recursively:', list.searchRecursive(list.head, 7));
console.log('Size of List:', list.size);

console.log('Delete element at head:', list.deleteAtHead());

console.log('Delete element 6:', list.deleteVal(list.head, 6));

console.log('Delete element at tail:', list.deleteAtTail());
console.log('Size of List:', list.size);
console.log('Node', list.getListStr());
