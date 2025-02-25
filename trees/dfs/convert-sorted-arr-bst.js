function convertArrayToBST(nums) {
	function helper(nums, low, high) {
		if (low > high) return null;

		let mid = Math.floor(low + (high - low) / 2);

		let root = new Node(nums[mid]);

		root.left = helper(nums, low, mid - 1);
		root.right = helper(nums, mid + 1, high);

		return root;
	}

	return helper(nums, 0, nums.length - 1);
}

const arr = [-10, -3, 0, 5, 9];

convertArrayToBST(arr);
