/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const pivotIndex = findPivotElementIndex(nums);
  console.log("PivotIndex: ", pivotIndex);

  const firstHalf = binarySearch(nums, 0, pivotIndex, target);

  if (firstHalf >= 0) {
    return firstHalf;
  }

  return binarySearch(nums, pivotIndex + 1, nums.length - 1, target);
};

function findPivotElementIndex(nums) {
  let s = 0,
    e = nums.length - 1;

  while (s <= e) {
    let m = Math.floor(s + (e - s) / 2);

    // If the middle is at pivot
    if (nums[m] > nums[m + 1]) return m;

    if (nums[m] < nums[m - 1]) return m - 1;

    if (nums[m] < nums[s]) {
      e = m - 1;
    } else {
      s = m + 1;
    }
  }
  return -1;
}

function binarySearch(nums, s, e, target) {
  while (s <= e) {
    let m = Math.floor(s + (e - s) / 2);

    if (nums[m] === target) return m;

    if (nums[m] < target) s = m + 1;

    if (nums[m] > target) e = m - 1;
  }
  return -1;
}

const nums = [4, 5, 6, 7, 0, 1, 2, 3],
  target = 0;

console.log("Rotated array", search(nums, target));
