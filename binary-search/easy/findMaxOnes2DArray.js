/**
 * Given a boolean 2D array of n x m dimensions, consisting of only 1's and 0's, where each row is sorted. Find the 0-based index of the first row that has the maximum number of 1's.

        Example 1: {{0, 1, 1, 1},
           {0, 0, 1, 1},
           {1, 1, 1, 1},
           {0, 0, 0, 0}}

    Brute force - Row and column traversal and store the index which has the maximum number of 1's
 */

function rowWithMax1s(matrix, n, m) {
  console.log("n*m", n, m);
  let maxIndex = -1,
    maxCount = -1;

  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === 1) {
        count++;
      }
    }
    // maxCount = Math.max(maxCount, count);
    if (count > maxCount) {
      maxIndex = i;
      maxCount = count;
    }
  }
  return maxIndex;
}

function binarySearch(matrix, n, x = 1) {
  let s = 0,
    e = n - 1;
  let ans;
  while (s <= e) {
    let mid = Math.floor(s + (e - s) / 2);

    if (matrix[mid] >= x) {
      ans = mid;
      e = mid - 1;
    } else if (matrix[mid] < x) {
      s = mid + 1;
    }
  }
  return ans;
}

function optimalSearch1s(matrix, n, m) {
  let maxCount = -1;
  maxIndex = -1;
  for (let i = 0; i < n; i++) {
    let count = m - binarySearch(matrix[i], m, 1);
    console.log("n,m,i,count", n, m, i, count);
    if (count > maxCount) {
      maxIndex = i;
      maxCount = count;
    }
  }
  return maxIndex;
}
const matrix = [
  [0, 1, 1, 1],
  [0, 0, 1, 1],
  [1, 1, 1, 1],
  [0, 0, 0, 0],
];
const matrix2 = [
  [0, 0],
  [1, 1],
];
const n = matrix.length,
  m = matrix[0].length;
console.log("Rows wth max 1s", optimalSearch1s(matrix2, n, m));
