const BST = require('../BST');

function kthSmallesEl(root, k) {
	let count = 0;

	function helper(root, k) {
		if (!root) return null;

		const left = helper(root.left, k);

		if (left !== null) {
			return left;
		}
		count++;

		if (count === k) {
			return root;
		}

		return helper(root.right, k);
	}

	const val = helper(root, k);
	console.log('Final ans', val);
}

const bst = new BST(6);
bst.insert(4);
bst.insert(9);
bst.insert(2);
bst.insert(5);

bst.insert(8);
bst.insert(12);

bst.preOrderPrint(bst.root);
console.log('Zig zag traversal', kthSmallesEl(bst.root, 2));
