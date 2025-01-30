const BST = require('../BST');

function rightSideView(root) {
	if (!root) return [];

	let queue = [];
	let arr = [];
	queue.push(root);

	while (queue.length > 0) {
		let size = queue.length;
		let temp = [];

		for (let i = 0; i < size; i++) {
			let curr = queue.shift();
			if (curr.left) queue.push(curr.left);
			if (curr.right) queue.push(curr.right);
			temp.push(curr.val);
		}

		arr.push(temp[temp.length - 1]);

		// counter++;
	}
	return arr;
}

const bst = new BST(6);
bst.insert(4);
bst.insert(9);
bst.insert(2);
bst.insert(5);

bst.insert(8);
bst.insert(12);

bst.preOrderPrint(bst.root);
console.log('Zig zag traversal', rightSideView(bst.root));
