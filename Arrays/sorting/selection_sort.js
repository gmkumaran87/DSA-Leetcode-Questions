function sort(arr) {
  let n = arr.length - 1;
  for (let i = 0; i <= n; i++) {
    let maxIndex = maxElement(arr, 0, n - i);
    swap(arr, maxIndex, n - i);
  }
  return arr;
}

function swap(arr, s, e) {
  let temp = arr[s];
  arr[s] = arr[e];
  arr[e] = temp;
}
function maxElement(arr, s, e) {
  let ans = Number.MIN_SAFE_INTEGER;
  let ind = -1;
  for (let i = 0; i <= e; i++) {
    if (arr[i] > ans) {
      ans = arr[i];
      ind = i;
    }
  }
  return ind;
}
const arr = [55, 33, 22, 4, 16, 1, 7];
console.log("Sorting...", sort(arr));
