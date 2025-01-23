/**
 * Given a matrix, mat, if any element within the matrix is zero, set that row and column to zero.
 */

function setMatrixZeroes(mat) {
	const row = mat.length;
	const col = mat[0].length;
	let fRow = false,
		fCol = false;

	// Set fRow and fCol = true if 0 in the first row and first col resp
	for (let i = 0; i < row; i++) {
		if (mat[i][0] === 0) {
			console.log('Inside row', mat[i]);
			fCol = true;
			break;
		}
	}

	for (let j = 0; j < col; j++) {
		if (mat[0][j] === 0) {
			console.log('Inside col');

			fRow = true;
			break;
		}
	}

	// Scan the matrix skipping first row and first col and check if it is 0, then make the its first ele = 0
	for (let i = 1; i < row; i++) {
		for (let j = 1; j < col; j++) {
			if (mat[i][j] === 0) {
				console.log('Found 0 el', mat, i, j);
				mat[0][j] = 0;
				mat[i][0] = 0;
			}
		}
	}

	// Check the first row and first col el is 0 then make all the element as 0
	for (let i = 1; i < row; i++) {
		if (mat[i][0] === 0) {
			mat[i].fill(0);
		}
	}

	for (let j = 1; j < col; j++) {
		if (mat[0][j] === 0) {
			for (let i = 1; i < row; i++) {
				mat[i][j] = 0;
			}
		}
	}

	if (fCol) {
		for (let i = 0; i < row; i++) {
			mat[i][0] = 0;
		}
	}
	if (fRow) {
		for (let j = 0; j < col; j++) {
			mat[0][j] = 0;
		}
	}
	return mat;
}

const matrix = [
	[1, 1, 1, 1, 1],
	[0, 0, 1, 1, 1],
	[1, 1, 1, 1, 0],
	[1, 1, 1, 1, 1],
];

console.log('Matrix zeroes', setMatrixZeroes(matrix));
