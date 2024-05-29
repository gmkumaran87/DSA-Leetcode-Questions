/**
 * Lower bound of the target element in an sorted array.
 *
 * Pattern: Since it is sorted use Binary Search.
 */
function lowerBound(arr, target) {
  let s = 0,
    e = arr.length - 1;
  ans = arr.length - 1; // Since if no element greater than target

  while (s <= e) {
    let mid = Math.floor(s + (e - s) / 2);

    if (target <= arr[mid]) {
      ans = mid;
      e = mid - 1;
    } else {
      s = mid + 1;
    }
  }

  return ans;
}

function upperBound(arr, target) {
  let s = 0,
    e = arr.length - 1;
  ans = arr.length - 1; // Since if no element greater than target

  while (s <= e) {
    let mid = Math.floor(s + (e - s) / 2);

    if (target === arr[mid]) {
      // ans = mid;
      s = mid + 1;
    } else if (target > arr[mid]) {
      s = mid + 1;
    } else {
      ans = mid;
      e = mid - 1;
    }
  }

  return ans;
}
const arr = [3, 5, 8, 9, 15, 19],
  x = 8;

// const arr = [1, 2, 2, 2, 3],
//   x = 2;
console.log("Lower bound", lowerBound(arr, x));
console.log("Upper bound", upperBound(arr, x));
