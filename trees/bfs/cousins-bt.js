const BST = require('../BST');

function isCousins(root, x, y) {
	if (!root) return false;
	let arr = [],
		queue = [];
	queue.push(root);

	while (queue.length > 0) {
		let temp = [],
			size = queue.length;
		let p1 = null,
			p2 = null;

		for (let i = 0; i < size; i++) {
			let curr = queue.shift();

			temp.push(curr.val);
			if (curr.left) {
				queue.push(curr.left);

				if (curr.left.val === x || curr.left.val === y) {
					if (p1 === null) {
						p1 = curr.val;
					} else {
						p2 = curr.val;
					}
				}
			}
			if (curr.right) {
				queue.push(curr.right);
				if (curr.right.val === x || curr.right.val === y) {
					if (p1 === null) {
						p1 = curr.val;
					} else {
						p2 = curr.val;
					}
				}
			}
		}
		arr.push(temp);
		if (p1 === null && p2 === null) {
			continue;
		} else if ((p1 && !p2) || (!p1 && p2)) {
			return false;
		} else if (p1 && p2 && p1 === p2) {
			return false;
		} else if (p1 !== p2) {
			return true;
		}
	}
}

const bst = new BST(6);
bst.insert(4);
bst.insert(9);
bst.insert(2);
bst.insert(5);

bst.insert(8);
bst.insert(12);

bst.preOrderPrint(bst.root);

console.log('Is Cousins', isCousins(bst.root, 8, 2));
