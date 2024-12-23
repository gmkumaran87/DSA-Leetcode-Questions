function findElement(nums, target) {
    let arraryLength = nums.length;

    let s = 0,
        e = arraryLength - 1;

    while (s <= e) {
        let middle = Math.floor((s + e) / 2);

        if (nums[middle] === target) {
            return middle;
        }

        if (nums[middle] < target) {
            s = middle + 1;
        } else {
            e = middle - 1;
        }
    }
    return -1;
}

const arr = [2, 6, 9, 13, 25, 55, 77];

console.log("Binary search", findElement(arr, 25));