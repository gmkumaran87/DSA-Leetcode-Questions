/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function (target, mountainArr) {
  let peakElementIndex = findPeakElement(mountainArr);

  console.log("findInMountainArray", peakElementIndex);

  if (peakElementIndex > 0 && peakElementIndex < mountainArr.length - 1) {
    const elementInLeft = binarySearch(
      mountainArr,
      0,
      peakElementIndex,
      target
    );

    if (elementInLeft >= 0) {
      return elementInLeft;
    }
    console.log("Element", peakElementIndex, mountainArr.length - 1);

    return binarySearch(
      mountainArr,
      peakElementIndex,
      mountainArr.length - 1,
      target
    );
  }
};

function findPeakElement(array) {
  let s = 0,
    e = array.length - 1;

  while (s <= e) {
    let m = Math.floor(s + (e - s) / 2);

    if (array[m] > array[m + 1] && array[m] > array[m - 1]) return m;

    if (array[m] < array[m + 1]) {
      s = m + 1;
    }
    if (array[m] > array[m + 1]) e = m - 1;
  }
  return -1;
}

function binarySearch(arr, s, e, target) {
  while (s <= e) {
    let m = Math.floor(s + (e - s) / 2);

    if (arr[m] === target) return m;

    if (arr[m] < target) s = m + 1;

    if (arr[m] > target) e = m - 1;
  }
  return -1;
}

/*const array = [0, 1, 2, 4, 2, 1],
  target = 3;*/
const array = [1, 2, 3, 4, 5, 3, 1];
const target = 3;

console.log("Element found ", findInMountainArray(target, array));
