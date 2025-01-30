const BST = require('../BST');

function flatten(root) {
	let current = root;

	while (!current) {
		if (current.left !== null) {
			let temp = current.left;

			while (temp.right !== null) {
				temp = temp.right;
			}

			temp.right = current.right;

			current.right = current.left;
			current.left = null;
		}
		current = current.right;
	}
	console.log('Current', current);
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

console.log('AFter flatten', flatten(bst.root));
