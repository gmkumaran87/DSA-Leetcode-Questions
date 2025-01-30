function isSymmetric(root) {
	let queue = [],
		arr = [];

	if (!root) return null;

	queue.push(root);

	while (queue.length > 0) {
		let temp = [];
		let size = queue.length;

		for (let i = 0; i < size; i++) {
			let curr = queue.shift();
			temp.push(curr.val);
			if (curr.left) {
				queue.push(curr.left);
			} else {
				queue.push(null);
			}
			if (curr.right) {
				queue.push(curr.right);
			} else {
				queue.push(null);
			}
		}
		if (!isEqual(temp)) {
			return false;
		}
		arr.push(temp);
	}
	return true;
}

function isEqual(arr) {
	let s = 0,
		e = arr.length - 1;

	while (s <= e) {
		if (arr[s] !== arr[e]) {
			return false;
		}
		s++;
		e--;
	}
	return true;
}
