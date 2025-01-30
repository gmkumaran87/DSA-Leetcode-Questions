var maxDepth = function (root) {
	if (!root) return 0;

	let leftH = maxDepth(root.left);
	let rightH = maxDepth(root.right);

	let depth = Math.max(leftH, rightH) + 1;

	return depth;
};
