/**
 * Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.
 * Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2.
 * Elements that do not appear in arr2 should be placed at the end of arr1 in ascending order.
 */

/**
 * Solution - Store the second array index position in HashTable
 * Write a comparator function for the first array to sort based on the index position
 */
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  let hm = new Map();
  let result = [],
    remaining = [];

  for (var i = 0; i < arr2.length; i++) {
    if (!hm.has(arr2[i])) {
      hm.set(arr2[i], 0);
    }
  }

  for (let num of arr1) {
    if (hm.has(num)) {
      hm.set(num, hm.get(num) + 1);
    } else {
      remaining.push(num);
    }
  }
  remaining.sort((a, b) => a - b);

  for (let [key, value] of hm) {
    while (value > 0) {
      result.push(key);
      value = value - 1;
    }
  }
  return [...result, ...remaining];
};

const arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19],
  arr2 = [2, 1, 4, 3, 9, 6];

console.log("Relative sort array", relativeSortArray(arr1, arr2));
