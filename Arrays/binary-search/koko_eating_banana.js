/**
 * Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.
   Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.
   Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.
   Return the minimum integer k such that she can eat all the bananas within h hours.
 */

/* Example 1:

Input: piles = [3,6,7,11], h = 8
Output: 4
Example 2:

Input: piles = [30,11,23,4,20], h = 5
Output: 30
Example 3:

Input: piles = [30,11,23,4,20], h = 6
Output: 23

 */

/** Pattern - FInd the small and max element from the array
 *
 *
 */

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let minEl = Number.MAX_SAFE_INTEGER,
    maxEl = Number.MIN_SAFE_INTEGER;
  let ans;

  for (let i = 0; i < piles.length; i++) {
    maxEl = Math.max(maxEl, piles[i]);
  }

  minEl = 1;

  while (minEl <= maxEl) {
    let mid = Math.floor(minEl + (maxEl - minEl) / 2);

    let totalHours = getTotalHours(piles, mid);

    if (totalHours < h) {
      maxEl = mid - 1;
      ans = mid;
    } else if (totalHours > h) {
      minEl = mid + 1;
    } else {
      ans = mid;
      maxEl = mid - 1;
      // return mid;
    }
  }
  return ans;
  // console.log(minEl, maxEl, mid);
};

function getTotalHours(arr, num) {
  let hours = 0;

  for (let i = 0; i < arr.length; i++) {
    hours = hours + Math.ceil(arr[i] / num);
    // console.log("Hours: ", hours, arr[i], num);
  }
  return hours;
}
// const arr = [30, 11, 23, 4, 20],
//   h = 6;

const arr = [312884470],
  h = 312884469;
console.log("Output", minEatingSpeed(arr, h));
