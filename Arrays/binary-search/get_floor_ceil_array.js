function getFloorAndCeil(nums, target) {
  let s = 0,
    e = nums.length - 1,
    ans = -1,
    outArr = [-1, -1];

  // Finding floor
  while (s <= e) {
    let mid = Math.floor(s + (e - s) / 2);

    if (target >= nums[mid]) {
      ans = nums[mid];
      s = mid + 1;
    } else {
      e = mid - 1;
    }
  }
  outArr[0] = ans;
  ans = -1;
  s = 0;
  e = nums.length - 1;
  // Finding ceil
  while (s <= e) {
    let mid = Math.floor(s + (e - s) / 2);

    if (target <= nums[mid]) {
      ans = nums[mid];
      e = mid - 1;
    } else {
      s = mid + 1;
    }
  }
  outArr[1] = ans;
  return outArr;
}

const x = 5,
  a = [3, 4, 7, 8, 8, 10];

console.log("Floor", getFloorAndCeil(a, x));
