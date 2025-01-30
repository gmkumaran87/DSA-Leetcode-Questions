class Node {
	constructor(value) {
		this.val = value;
		this.left = null;
		this.right = null;
	}
}

class BST {
	constructor(value) {
		this.root = new Node(value);
	}

	insertNodeIterative(value) {
		if (this.root === null) {
			this.root = new Node(value);
			return;
		}

		let currentNode = this.root;
		let parentNode;

		while (currentNode) {
			parentNode = currentNode;

			if (value < currentNode.val) {
				// Left side insertion
				currentNode = currentNode.left;
			} else {
				currentNode = currentNode.right;
			}
		}

		if (value < parentNode.val) {
			parentNode.left = new Node(value);
		} else {
			parentNode.right = new Node(value);
		}
	}

	insertRecursive(currentNode, value) {
		if (currentNode === null) {
			currentNode = new Node(value);
		} else if (value < currentNode.val) {
			currentNode.left = this.insertRecursive(currentNode.left, value);
		} else {
			currentNode.right = this.insertRecursive(currentNode.right, value);
		}
		return currentNode;
	}

	insert(value, type = 'recursive') {
		if (this.root === null) {
			this.root = new Node(value);
			return;
		}
		if (type === 'recursive') {
			this.insertRecursive(this.root, value);
		} else {
			this.insertNodeIterative(value);
		}
	}

	preOrderPrint(currentNode) {
		if (currentNode !== null) {
			console.log(currentNode.val);
			this.preOrderPrint(currentNode.left);
			this.preOrderPrint(currentNode.right);
		}
	}

	inOrderPrint(currentNode) {
		if (currentNode !== null) {
			this.inOrderPrint(currentNode.left);
			console.log(currentNode.val);
			this.inOrderPrint(currentNode.right);
		}
	}
	postOrderPrint(currentNode) {
		if (currentNode !== null) {
			this.postOrderPrint(currentNode.left);
			this.postOrderPrint(currentNode.right);
			console.log(currentNode.val);
		}
	}

	searchIterative(value) {
		if (this.root.val === value) {
			return value;
		}
		let currentNode = this.root;

		while (currentNode && currentNode.val !== value) {
			if (value < currentNode.val) {
				currentNode = currentNode.left;
			} else {
				currentNode = currentNode.right;
			}
		}
		return currentNode;
	}

	searchRecursive(currentNode, value) {
		// console.log('Recursive ', currentNode, value);
		if (currentNode !== null) {
			if (currentNode.val === value) {
				return currentNode;
			} else if (currentNode.val > value) {
				return this.searchRecursive(currentNode.left, value);
			} else {
				return this.searchRecursive(currentNode.right, value);
			}
		} else {
			return 'Not found';
		}
	}
	search(value) {
		if (this.root === value) {
			return this.root;
		}
		return this.searchRecursive(this.root, value);
	}

	delete(currentNode, value) {
		// Case 1: If root is null
		if (currentNode === null) {
			return false;
		}
		// Traverse the node till null
		let parentNode;
		while (currentNode && currentNode.val !== value) {
			parentNode = currentNode;
			if (value < currentNode.val) {
				currentNode = currentNode.left;
			} else {
				currentNode = currentNode.right;
			}
		}
		// Case 2: NOT FOUND
		if (currentNode === null) {
			return false;
		} else if (currentNode.left === null && currentNode.right === null) {
			if (parentNode.val > value) {
				parentNode.left = null;
			} else {
				parentNode.right = null;
			}
			// Case 3: If the node to be deleted has only one child
		} else if (
			(currentNode.left !== null && currentNode.right === null) ||
			(currentNode.right !== null && currentNode.left === null)
		) {
			if (currentNode.right !== null) {
				// It has right child

				if (parentNode.right.val === currentNode.val) {
					parentNode.right = currentNode.right;
				} else {
					parentNode.left = currentNode.left;
				}
			} else {
				// It has left child
				if (parentNode.right.val === currentNode.val) {
					parentNode.right = currentNode.right;
				} else {
					parentNode.left = currentNode.left;
				}
			}
		} else {
			// Case 4: The node to be deleted have two children
			let minRight = currentNode.right;

			while (minRight && minRight.left !== null) {
				minRight = minRight.left;
			}

			let temp = minRight.val;

			this.delete(this.root, temp);

			currentNode.val = temp;
			return true;
		}
	}
}

module.exports = BST;
/*
const bst = new BST(6);
bst.insert(4);
bst.insert(9);
bst.insert(5);
bst.insert(2);

bst.insert(8);
bst.insert(12);

console.log('Search node - ', bst.searchIterative(8));
console.log('Search Recursive node-', bst.search(12));

console.log('Pre-order traversal');

bst.preOrderPrint(bst.root);

console.log('Deleting a node.....');
console.log('Delete node 8 -', bst.delete(bst.root, 9));

console.log('Pre-order traversal');

bst.preOrderPrint(bst.root);
console.log('Inorder traversal');
bst.inOrderPrint(bst.root);
console.log('Post order traversal');
bst.postOrderPrint(bst.root);


*/
