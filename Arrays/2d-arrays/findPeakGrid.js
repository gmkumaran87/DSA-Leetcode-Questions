/**
 * @param {number[][]} mat
 * @return {number[]}
 *
 * Intution - Since the matrix is sorted in each row, we can use Binary search to find peak element.
 */
var findPeakGrid = function (mat) {
  let r = mat.length,
    c = mat[0].length;

  for (let i = 0; i < r; i++) {}
};

function peakElement(mat, row, i) {
  let s = 0,
    e = row.length;

  while (s <= e) {
    let mid = Math.floor(s + (e - s) / 2);

    if (i === 0) {
      if (
        row[mid] > row[mid - 1] &&
        row[mid] > row[mid + 1] &&
        row[mid] > mat[i + 1][mid]
      ) {
        return row[mid];
      } else if (row[mid] < row[mid + 1]) {
        s = mid + 1;
      } else {
        e = mid - 1;
      }
    }
  }
}
const mat = [
  [10, 20, 15],
  [21, 30, 14],
  [7, 16, 32],
];

console.log("Peak element in Grid: ", findPeakGrid(mat));
