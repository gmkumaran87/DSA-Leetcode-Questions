const BST = require('../BST');

function maxPathSum(root) {
	let maxSum = 0;

	function helper(root, sum) {
		if (!root) return 0;

		if (root.left === null && root.right === null) return root.val;

		let left = helper(root.left, sum);
		let right = helper(root.right, sum);

		let curr = left + right + root.val;

		maxSum = Math.max(maxSum, curr);

		return Math.max(left, right) + root.val;
	}

	return helper(root, 0);
}

const bst = new BST(6);
bst.insert(4);
bst.insert(2);
bst.insert(9);
bst.insert(5);

bst.insert(8);
bst.insert(12);

bst.preOrderPrint(bst.root);
console.log('Path sum', maxPathSum(bst.root));
