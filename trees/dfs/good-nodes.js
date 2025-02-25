const BST = require('../BST');

function goodNodes(root) {
	let count = 0;
	let maxVal = Number.MIN_SAFE_INTEGER;

	function helper(root, maxVal) {
		if (!root) {
			return;
		}

		if (root.val >= maxVal) {
			count++;
			maxVal = root.val;
		}

		helper(root.left, maxVal);
		helper(root.right, maxVal);
	}
	helper(root, maxVal);
	return count;
}

const bst = new BST(6);
bst.insert(4);
bst.insert(9);
bst.insert(2);
bst.insert(5);

bst.insert(8);
bst.insert(12);

bst.preOrderPrint(bst.root);
console.log('Good Node', goodNodes(bst.root));
