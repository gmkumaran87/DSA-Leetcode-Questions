const BST = require('../BST');

function findKNodes(root, k, arr = [], count = 0) {
	if (!root) return;

	if (count === k) {
		arr.push(root.val);
	} else {
		findKNodes(root.left, k, arr, count + 1);
		findKNodes(root.right, k, arr, count + 1);
	}
	return arr;
	console.log('K nodes', count, arr, k);
}
const bst = new BST(8);
bst.insert(4);
bst.insert(9);
bst.insert(5);
bst.insert(2);

bst.insert(18);
bst.insert(12);

bst.preOrderPrint(bst.root);
console.log('Diameter of tree', findKNodes(bst.root, 2));
