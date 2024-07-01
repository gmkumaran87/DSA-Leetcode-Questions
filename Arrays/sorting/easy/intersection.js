/* Given two integer arrays nums1 and nums2, return an array of their 
    intersection. Each element in the result must be unique and you may return the result in any order.
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 *
 * Solutions
 * 1. Create hash table with smaller array and traverse the larger array to find the element
 *    if it exists in the hash table then insert it into the output array
 */
var intersection = function (nums1, nums2) {
  let hashMap = new Map();
  let outArr = [];
  let arr = nums1.length > nums2.length ? nums2 : nums1;
  let arr2 = nums1.length > nums2.length ? nums1 : nums2;

  for (let num of arr) {
    if (hashMap.has(num)) {
      let count = hashMap.get(num);

      hashMap.set(num, count + 1);
    } else {
      hashMap.set(num, 1);
    }
  }

  let setArr = [...new Set([...arr2])];
  console.log("Set", setArr, hashMap);
  for (let num of setArr) {
    // console.log(key, hashMap[key]);

    if (hashMap.has(num)) {
      outArr.push(num);
    }
  }
  return outArr;
};

const nums1 = [2, 6, 2, 9, 1],
  nums2 = [7, 1];

console.log("Intersection", intersection(nums1, nums2));
