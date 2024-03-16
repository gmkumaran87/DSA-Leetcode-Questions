/**
 * You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.

*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let rStart = 0,
    rEnd = matrix.length - 1;
  let cStart = 0,
    cEnd = matrix[0].length - 1;
  let cMiddle = Math.floor(0 + (cEnd - cStart) / 2);

  console.log("Matrix search", { cMiddle, rStart, rEnd, cStart, cEnd });

  if ((rEnd === 0) & (cEnd === 0)) {
    if (matrix[0][0] === target) {
      return true;
    }
    return false;
  }

  if (rEnd === 0) {
    const val = binarySearch(matrix, 0, 0, cEnd, target);
    if (val[0] !== -1) {
      return true;
    }
    return false;
  }

  while (rStart + 1 < rEnd) {
    let middle = Math.floor(rStart + (rEnd - rStart) / 2);

    if (matrix[middle][cMiddle] === target) {
      return true;
    }

    if (matrix[middle][cMiddle] > target) {
      rEnd = middle;
    }

    if (matrix[middle][cMiddle] < target) {
      rStart = middle;
    }
  }
  console.log("Loop", { rStart, rEnd, cMiddle });

  if (matrix[rEnd][cMiddle] === target) {
    return true;
  }
  // Binary search left side
  const leftSide = binarySearch(matrix, rEnd, 0, cMiddle - 1, target);

  if (leftSide[0] !== -1) {
    return leftSide;
  }
  const rightSide = binarySearch(matrix, rEnd, cMiddle + 1, cEnd, target);

  if (rightSide[0] !== -1) {
    return rightSide;
  }
  const firstRow = binarySearch(matrix, rEnd - 1, 0, cEnd, target);
  if (firstRow[0] !== -1) {
    return firstRow;
  }
  return false;
};

function binarySearch(matrix, row, cStart, cEnd, target) {
  while (cStart <= cEnd) {
    let middle = Math.floor(cStart + (cEnd - cStart) / 2);

    if (matrix[row][middle] === target) {
      return [row, middle];
    }

    if (matrix[row][middle] > target) {
      cEnd = middle - 1;
    }

    if (matrix[row][middle] < target) {
      cStart = middle + 1;
    }
  }
  return [-1, -1];
}
/*let matrix = [
    [1, 3, 5, 7, 8],
    [10, 11, 16, 20, 21],
    [23, 30, 34, 60, 61],
    [62, 64, 70, 72, 74],
    [75, 80, 90, 96, 100],
  ],
  target = 21;*/
const matrix = [[1, 1]],
  target = 0;

console.log("Final answer", searchMatrix(matrix, target));
