const BST = require('./BST');

function findMin(root) {
	if (root === null) {
		return false;
	}
	let currentNode = root;
	let parent;
	console.log('Before');
	while (currentNode !== null) {
		parent = currentNode;
		currentNode = currentNode.left;
	}

	return parent;
}

function findMinRecursive(root) {
	if (root === null) {
		return false;
	}

	if (root.left === null) {
		return root.val;
	} else {
		return findMin(root.left);
	}
}
const bst = new BST(6);
bst.insert(4);
bst.insert(9);
bst.insert(5);
bst.insert(2);

bst.insert(8);
bst.insert(12);

bst.preOrderPrint(bst.root);

console.log('Find min value', findMinRecursive(bst.root));
