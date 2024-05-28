/* 
  Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.
  Return the kth positive integer that is missing from this array. 

  Example 1:

  Input: arr = [2,3,4,7,11], k = 5
  Output: 9
  Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.
*/

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

// Intuition - check the arr[m] postion(index)
var findKthPositive = function (arr, k) {
  let s = 0,
    e = arr.length - 1;

  while (s <= e) {
    let m = Math.floor(s + (e - s) / 2);

    let missing = arr[m] - (m + 1);
    console.log("Missing", { s, e, m, missing });
    if (missing < k) {
      s = m + 1;
    } else {
      e = m - 1;
    }
  }
  return s + k;
};

const arr = [2, 3, 4, 7, 11],
  k = 5;

console.log("Missing positive integer", findKthPositive(arr, k));
