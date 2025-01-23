/* Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom. */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let row = 0,
        col = matrix[0].length - 1;

    if (matrix.length === 0 || matrix[0].length < 1) {
        //   if (matrix[0][0] === target) return true;

        return false;
    }

    while (row < matrix.length && col >= 0) {
        if (matrix[row][col] === target) {
            return true;
        }

        if (matrix[row][col] > target) {
            col--;
        }

        if (matrix[row][col] < target) {
            row++;
        }
    }
    return false;
};

let matrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30],
];
matrix = [
    [5],
    [6]
];
matrix = [
    [-5]
];
const target = -5;

console.log("searching matrix", searchMatrix(matrix, target));