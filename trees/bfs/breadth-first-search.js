const BST = require('../BST');

function bfs(root) {
	let queue = [];
	let arr = [];

	queue.push(root);
	while (queue.length !== 0) {
		let temp = [];
		let size = queue.length;

		for (let i = 0; i < size; i++) {
			let currNode = queue.shift();
			temp.push(currNode.val);
			if (currNode.left) {
				queue.push(currNode.left);
			}
			if (currNode.right) {
				queue.push(currNode.right);
			}
		}

		arr.push(temp);
	}
	return arr;
}

const bst = new BST(6);
bst.insert(4);
bst.insert(9);
bst.insert(5);
bst.insert(2);

bst.insert(8);
bst.insert(12);

bst.preOrderPrint(bst.root);
console.log('BFS traversal', bfs(bst.root));
