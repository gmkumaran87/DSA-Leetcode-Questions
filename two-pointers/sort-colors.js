function sortColors(colors) {
	// Write your code here
	// Define three pointers as below
	let start = 0,
		current = 0,
		end = colors.length - 1;

	// Iterate through the array for the condition current > end;

	while (current <= end) {
		// If colors[current] = 0, then swap with start pointer and increment
		if (colors[current] === 0) {
			let temp = colors[current];
			colors[current] = colors[start];
			colors[start] = temp;
			current++;
			start++;
			console.log('In 0', colors);
		} else if (colors[current] === 1) {
			console.log('In 1', colors);
			current++;
		} else {
			let temp = colors[current];
			colors[current] = colors[end];
			colors[end] = temp;
			end--; // Decrement end pointer to continue the search from right side.
			console.log('In 2', colors);
		}
	}

	return colors;
}

const colors = [2, 0, 1, 0, 1, 1, 1, 2, 1, 2];

console.log('Sorting colors', sortColors(colors));
