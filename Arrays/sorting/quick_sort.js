function quickSort(arr, low, high) {
	if (low >= high) return;

	let s = low;
	let e = high;
	let m = Math.floor(s + (e - s) / 2);
	let pivot = arr[m];
	console.log(arr, pivot);

	while (s <= e) {
		while (arr[s] < pivot) {
			s++;
		}
		while (arr[e] > pivot) {
			e--;
		}

		if (s <= e) {
			let temp = arr[s];
			arr[s] = arr[e];
			arr[e] = temp;
			s++;
			e--;
		}
	}
	quickSort(arr, low, e);
	quickSort(arr, s, high);
}

const arr = [64, 5, 2, 7, 4, 1];
quickSort(arr, 0, arr.length - 1);
console.log('Arrays sorted', arr);
