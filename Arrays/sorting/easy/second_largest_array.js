function secondLargest(arr) {
  let largest = 100000;

  for (let i = 0; i < arr.length; i++) {
    largest = maxElement(arr, arr.length - 1, largest);
    if (i === 1) {
      return largest;
    }
  }
}

function maxElement(arr, e, largest) {
  let ans = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i <= e; i++) {
    if (largest > arr[i] && arr[i] > ans) {
      ans = arr[i];
    }
  }
  return ans;
}

const arr = [55, 33, 22, 4, 16, 1, 7];
console.log("Second largest...", secondLargest(arr));
