const BST = require('../BST');

var hasPathSum = function (root, targetSum) {
	if (!root) return null;

	if (root.right === null && root.left === null && root.val === targetSum) {
		return true;
	}
	let left = hasPathSum(root.left, targetSum - root.val);

	let right = hasPathSum(root.right, targetSum - root.val);

	return left || right;
};

const bst = new BST(6);
bst.insert(4);
bst.insert(2);
bst.insert(9);
bst.insert(5);

bst.insert(8);
bst.insert(12);

bst.preOrderPrint(bst.root);
console.log('Path sum', hasPathSum(bst.root, 15));
