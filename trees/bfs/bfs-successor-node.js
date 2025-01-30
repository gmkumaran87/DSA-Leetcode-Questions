const BST = require('../BST');

function levelOrderSuccessor(root, key) {
	if (!root) return;

	let queue = [];

	queue.push(root);

	while (queue.length > 0) {
		let size = queue.length;
		let temp = [];
		let top = queue[0];
		for (let i = 0; i < size; i++) {
			let curr = queue.shift();
			if (curr.left) {
				queue.push(curr.left);
			}
			if (curr.right) {
				queue.push(curr.right);
			}
			if (key === curr.val) {
				return queue[0].val;
			}
		}
	}
	return -1;
}

const bst = new BST(6);
bst.insert(4);
bst.insert(9);
bst.insert(5);
bst.insert(2);

bst.insert(8);
bst.insert(12);

bst.preOrderPrint(bst.root);
console.log('BFS traversal', levelOrderSuccessor(bst.root, 8));
