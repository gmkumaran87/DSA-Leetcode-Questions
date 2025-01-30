const BST = require('../BST');

function invertTree(root) {
	if (root === null) return null;

	let leftH = height(root.left);
	let rightH = height(root.right);

	root.right = leftH;
	root.left = rightH;
	return root;
}
const bst = new BST(8);
bst.insert(4);
bst.insert(9);
bst.insert(5);
bst.insert(2);

bst.insert(18);
bst.insert(12);

bst.preOrderPrint(bst.root);
console.log('Diameter of tree', invertTree(bst.root));
