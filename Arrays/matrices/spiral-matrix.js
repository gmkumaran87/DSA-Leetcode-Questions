/* Given an m x n matrix, return all elements of the matrix in spiral order. */

/* Logic 
    Traverse top left -> right, 
    top++ then top -> bottom
    right++ right -> left
    bottom++ bottom -> top
*/
function spiralOrder(matrix) {
	let row = matrix.length;
	let col = matrix[0].length;
	let top = 0,
		left = 0,
		right = col - 1,
		bottom = row - 1;
	let arr = [];
	while (arr.length < row * col) {
		// Top traversal
		for (let i = left; i <= right; i++) {
			arr.push(matrix[left][i]);
		}
		top++;
		for (let i = top; i <= bottom; i++) {
			console.log('indexes', i, right);
			arr.push(matrix[i][right]);
		}
		right--;
		for (let i = right; i >= left; i--) {
			arr.push(matrix[bottom][i]);
		}
		bottom--;
		console.log('indexes', bottom, top, left);

		for (let i = bottom; i >= top; i--) {
			arr.push(matrix[i][left]);
		}
		left++;
	}
	console.log('Array', arr);
}

const matrix = [[-5, 95, -8, 64, 12]];

console.log('Spiral matrix', spiralOrder(matrix));
