const BST = require('../BST');

function diameterTree(root) {
	let diameter = 0;

	function height(root) {
		if (root === null) return 0;

		let leftH = height(root.left);
		let rightH = height(root.right);

		diameter = Math.max(leftH + rightH);
		console.log('Tree', leftH, rightH);
		return Math.max(leftH, rightH) + 1;
	}

	height(root);
	return diameter;
}
const bst = new BST(8);
bst.insert(4);
bst.insert(9);
bst.insert(5);
bst.insert(2);

bst.insert(18);
bst.insert(12);

bst.preOrderPrint(bst.root);
console.log('Diameter of tree', diameterTree(bst.root));
