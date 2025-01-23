/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let row = 0,
        col = 0;
    let n = matrix.length;
    let colLength = matrix[0].length;
    let outArr = [];
    console.log("first", n, colLength);
    for (let j = 0; j < colLength; j++) {
        let arr = [];

        for (let i = 0; i < n; i++) {
            arr.push(matrix[i][j]);
            console.log("second", arr, i);
        }
        outArr.push(arr);
    }
    return outArr;
};

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

console.log(transpose(matrix));