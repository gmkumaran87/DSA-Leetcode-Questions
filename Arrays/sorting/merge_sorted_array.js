function mergeSortedArr(nums1, nums2) {
  let outArr = [];

  let i = 0,
    j = 0;
  // const arr1 = [3, 4, 6], arr2 = [1,  5];
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] > nums2[j]) {
      outArr.push(nums2[j]);
      j++;
    } else if (nums1[i] < nums2[j]) {
      outArr.push(nums1[i]);
      i++;
    } else if (nums1[i] === nums2[j]) {
      outArr.push(nums1[i]);
      outArr.push(nums2[j]);
      i++;
      j++;
    }
    console.log(outArr, i, j);
  }

  if (i < nums1.length) {
    for (let k = i; k < nums1.length; k++) {
      outArr.push(nums1[k]);
    }
  }

  if (j < nums2.length) {
    for (let i = j; i < nums2.length; i++) {
      outArr.push(nums2[i]);
    }
  }

  return outArr;
}

const arr1 = [2, 3, 4, 6, 7, 8],
  arr2 = [1, 2, 5, 9, 12];

console.log("Merged array", mergeSortedArr(arr1, arr2));
