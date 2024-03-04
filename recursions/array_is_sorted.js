function isArraySorted(nums) {
  let arrayLength = nums.length - 1;
  function helper(nums, index) {
    if (arrayLength === index) return true;

    if (nums[index] > nums[index - 1]) {
      return helper(nums, index + 1);
    } else {
      return false;
    }

    // return helper(nums, index + 1);
  }

  return helper(nums, 1);
}

const arr = [2, 4, 8, 5, 1];
console.log("isArraySorted", isArraySorted(arr));
