function buildTree(preorder, inorder) {
	let p = 0,
		i = 0;

	if (preorder.length === 0) return null;

	let r = preorder[p];
	p++;

	let root = new Node(r);

	for (let j = 0; j < inorder.length; j++) {
		if (inorder[j] === r) {
			i = j;
		}
	}

	root.left = buildTree(preorder.slice(p, i + 1), inorder.slice(0, i));
	root.right = buildTree(preorder.slice(i + 1, preorder.length), inorder.slice(i + 1, inorder.length));

	return root;
}

const preorder = [3, 9, 20, 15, 7],
	inorder = [9, 3, 15, 20, 7];

console.log('Output', buildTree(preorder, inorder));
