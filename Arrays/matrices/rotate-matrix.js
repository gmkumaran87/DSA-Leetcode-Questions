/* You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

    You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.
*/

function rotate(mat) {
	let row = mat.length;
	let col = mat[0].length;

	// Transpose the matrix
	for (let i = 0; i < row - 1; i++) {
		for (let j = i + 1; j < col; j++) {
			let temp = mat[i][j];
			mat[i][j] = mat[j][i];
			mat[j][i] = temp;
			console.log('Row', i, j, mat, mat[i][j], mat[j][i]);
		}
	}
	console.log('Transpose matrix', mat);
	// Reverse the elements in every row
	for (let i = 0; i < row; i++) {
		reverse(mat[i]);
	}
	return mat;
}

function reverse(arr) {
	let s = 0,
		e = arr.length - 1;

	while (s <= e) {
		let temp = arr[s];
		arr[s] = arr[e];
		arr[e] = temp;
		s++;
		e--;
	}
}
const matrix = [
	[1, 2, 3, 4],
	[5, 6, 7, 8],
	[9, 10, 11, 12],
	[13, 14, 15, 16],
];
console.log('Rotate image', rotate(matrix));
