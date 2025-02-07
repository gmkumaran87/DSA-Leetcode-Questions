const BST = require('../BST');

function dfsUsingStack(root, k) {
	let stack = [];
	let count = 0;

	stack.push(root);

	while (stack.length > 0) {
		let curr = stack.pop();

		if (curr.right) stack.push(curr.right);

		if (curr.left) stack.push(curr.left);

		console.log(curr.val);
	}
}
/*function kthSmallesEl(root, k) {
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
}*/

const bst = new BST(6);
bst.insert(4);
bst.insert(9);
bst.insert(2);
bst.insert(5);

bst.insert(8);
bst.insert(12);

// bst.preOrderPrint(bst.root);
console.log('DFS traversal', dfsUsingStack(bst.root, 2));
