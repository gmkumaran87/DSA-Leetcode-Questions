function bubbleSort(nums) {
  for (let i = 0; i < nums.length; i++) {
    // let j = i +1;
    let isSorted = false;
    for (let j = i + 1; j < nums.length - i; j++) {
      if (nums[j] < nums[j - 1]) {
        let temp = nums[j];
        nums[j] = nums[j - 1];
        nums[j - 1] = temp;
        isSorted = true;
      }
    }
    if (!isSorted) break;
  }
  return nums;
}

/**
 * Idea is we need to take the first element and compare it against the all other elements
 */

const arr = [3, 1, 2, 5, 4];
console.log(bubbleSort(arr));
