function searchInsert(nums, target) {
    let s = 0,
        e = nums.length - 1;
    let ans = -1;
    if (target > nums[nums.length - 1]) {
        return nums.length;
    }
    while (s <= e) {
        let middle = Math.floor((s + e) / 2);

        console.log("Middle: ", middle, nums[middle], s, e, target);
        if (nums[middle] === target) return middle;

        if (nums[middle] > target) {
            e = middle - 1;
            ans = middle;
        }

        if (nums[middle] < target) {
            s = middle + 1;
            ans = s;
        }
    }
    return ans;
}
const arr = [1, 3, 6, 10],
    target = 15;
console.log("Insert position", searchInsert(arr, target));