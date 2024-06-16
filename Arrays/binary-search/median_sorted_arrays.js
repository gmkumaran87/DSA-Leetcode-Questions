/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 *
 * Pattern - Since two arrays are sorted, find the smallest of two arrays and
 */
var findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }

  let n = nums1.length + nums2.length;
  let nHalf = Math.floor(n / 2);

  let s = 0,
    e = nums1.length - 1;

  while (true) {
    console.log("s,e", s, e);
    let aM = s + Math.floor((e - s) / 2);
    let bM = nHalf - aM - 2;

    console.log("aM,bM", aM, bM);
    let aLeft = aM >= 0 ? nums1[aM] : Number.NEGATIVE_INFINITY;
    let bLeft = bM >= 0 ? nums2[bM] : Number.NEGATIVE_INFINITY;

    let aRight =
      aM + 1 < nums1.length ? nums1[aM + 1] : Number.POSITIVE_INFINITY;
    let bRight =
      bM + 1 < nums2.length ? nums2[bM + 1] : Number.POSITIVE_INFINITY;
    console.log(aLeft, bLeft, aRight, bRight);

    if (aLeft <= bRight && bLeft <= aRight) {
      if (n % 2 == 0) {
        return (Math.max(aLeft, bLeft) + Math.min(aRight, bRight)) / 2;
      } else {
        return Math.min(aRight, bRight);
      }
    } else if (aLeft > bRight) {
      e = aM - 1;
    } else {
      s = aM + 1;
    }

    // break;
  }
};
/*
const arr1 = [1, 3, 4, 7, 9],
  arr2 = [1, 2, 3, 5, 6]; */

const arr1 = [1, 3],
  arr2 = [2];
console.log(findMedianSortedArrays(arr1, arr2));

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  // Ensure nums1 is the smaller array
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  const x = nums1.length;
  const y = nums2.length;
  let low = 0;
  let high = x;

  while (low <= high) {
    const partitionX = Math.floor((low + high) / 2);
    const partitionY = Math.floor((x + y + 1) / 2) - partitionX;

    const maxX =
      partitionX === 0 ? Number.MIN_SAFE_INTEGER : nums1[partitionX - 1];
    const minX = partitionX === x ? Number.MAX_SAFE_INTEGER : nums1[partitionX];

    const maxY =
      partitionY === 0 ? Number.MIN_SAFE_INTEGER : nums2[partitionY - 1];
    const minY = partitionY === y ? Number.MAX_SAFE_INTEGER : nums2[partitionY];

    if (maxX <= minY && maxY <= minX) {
      if ((x + y) % 2 === 0) {
        return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
      } else {
        return Math.max(maxX, maxY);
      }
    } else if (maxX > minY) {
      high = partitionX - 1;
    } else {
      low = partitionX + 1;
    }
  }
};
