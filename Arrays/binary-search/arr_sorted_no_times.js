/**
 *
 * @param {*} arr
 * @param {*} n
 *
 * Pattern: Since the array is sorted initially, we can use BS to find the Peak element
 *          No of times rotated is Peak element index.
 */

function countRotations(arr) {
  let s = 0,
    e = arr.length - 1;
  let ans;
  while (s <= e) {
    let mid = Math.floor(s + (e - s) / 2);

    if (arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]) {
      return mid + 1;
    } else if (arr[mid] < arr[s]) {
      e = mid - 1;
    } else if (arr[mid] < arr[mid - 1] && arr[mid] < arr[mid + 1]) {
      return mid + 1;
    } else {
      s = mid + 1;
    }
  }
  console.log(ans);
}

const arr = [14, 15, 18, 2, 3, 6, 12];

console.log("times array rotated", countRotations(arr));
