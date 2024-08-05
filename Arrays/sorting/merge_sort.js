function mergeSort(arr) {
	if (arr.length === 1) return arr;

	let mid = Math.floor(arr.length / 2);

	let left = mergeSort(arr.slice(0, mid));
	let right = mergeSort(arr.slice(mid, arr.length));

	return merge(left, right);
}

function merge(first, second) {
	let i = 0,
		j = 0;

	let out = [];

	while (i < first.length && j < second.length) {
		if (first[i] < second[j]) {
			out.push(first[i]);
			i++;
		} else if (first[i] > second[j]) {
			out.push(second[j]);
			j++;
		} else if (first[i] === second[j]) {
			outArr.push(first[i]);
			outArr.push(second[j]);
			i++;
			j++;
		}
	}
	if (i < first.length) {
		for (let k = i; k < first.length; k++) {
			out.push(first[k]);
		}
	}

	if (j < second.length) {
		for (let k = j; k < second.length; k++) {
			out.push(second[k]);
		}
	}
	return out;
}
const arr = [3, 5, 2, 1, 4];

console.log('Merge sort', mergeSort(arr, 0, arr.length - 1));
