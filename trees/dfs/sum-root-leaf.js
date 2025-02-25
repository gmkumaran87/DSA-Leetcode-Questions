const BST = require('../BST');

function sumNumbers(root) {
	function helper(root, sum) {
		if (!root) return 0;
		console.log('root', { val: root.val, sum });
		sum = sum * 10 + root.val;

		if (root.left === null && root.right === null) {
			return sum;
		}
		console.log('Sum', sum, root.val);
		let left = helper(root.left, sum);
		let right = helper(root.right, sum);

		return left + right;
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
console.log('Path sum', sumNumbers(bst.root));
