var lowestCommonAncestor = function (root, p, q) {
	if (root === null) return null;

	if (root === p || root === q) {
		return root;
	}

	let leftR = lowestCommonAncestor(root.left, p, q);
	let rightR = lowestCommonAncestor(root.right, p, q);

	if (leftR !== null && rightR !== null) {
		return root;
	}

	return leftR === null ? rightR : leftR;
};
