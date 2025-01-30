const BST = require('./BST');

function dfs(root, kval, counter) {
	if (!root || counter >= kval) return -1;

	const right = dfs(root.right, kval, counter);

	if (right !== -1) {
		return right;
	}
	counter++;
	console.log('K value', kval, counter, root.val);
	if (counter === kval) {
		return root.val;
	}
	return dfs(root.left, kval, counter);
}

function reverseInorder(node, counter, k, kLargest) {
	if (!node || counter >= k) return;

	// Traverse right subtree
	reverseInorder(node.right, counter, k, kLargest);

	// Increment counter after
	// visiting right subtree
	counter++;

	console.log('counter', counter, node);
	// Check if current node
	// is the Kth largest
	if (counter === k) {
		kLargest[0] = node.val;
		return;
	}

	// Traverse left subtree if
	// Kth largest is not found yet
	reverseInorder(node.left, counter, k, kLargest);
}
function findKthMax(root, k) {
	const kval = [k];
	const kLargest = [Number.MIN_SAFE_INTEGER];
	// return dfs(root, k, 0);
	reverseInorder(root, 0, k, kLargest);
	return kLargest;
}

const bst = new BST(6);
bst.insert(4);
bst.insert(9);
bst.insert(5);
bst.insert(2);

bst.insert(8);
bst.insert(12);

bst.preOrderPrint(bst.root);

console.log('Kth max el', findKthMax(bst.root, 5));
