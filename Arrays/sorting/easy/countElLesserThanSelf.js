/**
 * Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
   Return the answer in an array.
 */

var smallerNumbersThanCurrent = function (nums) {
  let hm = new Map();
  let arr = [...nums].sort((a, b) => a - b);
  let outArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      hm.set(arr[i], 0);
    } else if (arr[i] === arr[i - 1]) {
      hm.set(arr[i], hm.get(arr[i]));
    } else {
      hm.set(arr[i], i);
    }
  }

  console.log("Arrays: ", arr, hm, nums);

  for (let i = 0; i < nums.length; i++) {
    let count = hm.get(nums[i]);
    outArr.push(count);
  }
  return outArr;
};

const nums = [8, 1, 2, 2, 3];
// const nums = [7, 7, 7, 7];

console.log(`nums:`, smallerNumbersThanCurrent(nums));
