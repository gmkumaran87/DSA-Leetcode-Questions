var findKthLargest = function (nums, k) {
  let n = nums.length - 1;
  let maxIndex;
  if (nums.length === 1) {
    if (k === 1) {
      return nums[0];
    }
  }
  for (let i = 0; i <= n; i++) {
    if (i === k) {
      return nums[n - k + 1];
    }
    maxIndex = maxElement(nums, n - i);
    swap(nums, maxIndex, n - i);
    console.log(nums);
  }
  nums[n - k + 1];
};

function swap(arr, s, e) {
  let temp = arr[s];
  arr[s] = arr[e];
  arr[e] = temp;
}
function maxElement(arr, e) {
  let ans = Number.MIN_SAFE_INTEGER;
  let index = -1;
  for (let i = 0; i <= e; i++) {
    if (arr[i] > ans) {
      ans = arr[i];
      index = i;
    }
  }
  return index;
}

const nums = [2, 1],
  k = 2;

console.log("Kth Largest number", findKthLargest(nums, k));
