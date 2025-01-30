const BST = require('../BST');

function averageLevel(root) {
	if (!root) return null;

	let queue = [],
		arr = [];

	queue.push(root);

	while (queue.length > 0) {
		let size = queue.length;
		let temp = [];
		let top = queue[0];
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
		let sum = temp.reduce((a, b) => a + b);
		let avg = sum / temp.length;
		arr.push(avg);
		console.log('tuyuyu', top.val);
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
console.log('BFS traversal', averageLevel(bst.root));
