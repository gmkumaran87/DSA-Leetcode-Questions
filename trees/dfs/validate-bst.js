const BST = require('../BST');

function isBST(root) {
	let l = null,
		r = null;
	function helper(root, l, r) {
		if (!root) return true;

		if (l !== null && root.val <= l) {
			return false;
		}

		if (r !== null && root.val >= r) {
			return false;
		}
		let isLeft = helper(root.left, l, root.val);
		let isRight = helper(root.right, root.val, r);

		return isLeft && isRight;
	}
	return helper(root, l, r);
}

const bst = new BST(8);
bst.insert(4);
bst.insert(9);
bst.insert(5);
bst.insert(2);

bst.insert(18);
bst.insert(12);

bst.preOrderPrint(bst.root);

console.log('AFter flatten', isBST(bst.root));
