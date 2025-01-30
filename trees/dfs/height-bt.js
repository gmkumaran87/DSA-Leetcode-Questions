const BST = require('../BST');

function heightOfTree(root) {
	if (root === null) return 0;

	let leftHeight = heightOfTree(root.left);
	let rightHeight = heightOfTree(root.right);

	const height = Math.max(leftHeight, rightHeight) + 1;
	return height;
}

const bst = new BST(6);
bst.insert(4);
bst.insert(9);
bst.insert(5);
bst.insert(2);

bst.insert(8);
bst.insert(12);

bst.preOrderPrint(bst.root);
console.log('BFS traversal', heightOfTree(bst.root));
