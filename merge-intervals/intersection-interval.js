function intervalsIntersection(firstList, secondList) {
	let result = [],
		i = 0,
		j = 0;
	let prev = 0;

	while (i < firstList.length && j < secondList.length) {
		/*if (prev === Math.min(firstList[i][0], secondList[j][0])) {
			result.push([prev, prev]);
		}

		let first = Math.max(firstList[i][0], secondList[i][0]);
		let second = Math.min(firstList[i][1], secondList[j][1]);

		result.push([first, second]);

		if (firstList[i][0] < secondList[j][1]) {
			i++;
		} else {
			j++;
		}

		prev = Math.max(firstList[i][1], secondList[j][1]);
		// i++;
		// j++;
		;*/

		let start = Math.max(firstList[i][0], secondList[j][0]);
		let end = Math.min(firstList[i][1], secondList[j][1]);
		// console.log('REsult', firstList[i], secondList[j], start, end);
		if (start <= end) result.push([start, end]);

		if (firstList[i][1] < secondList[j][1]) {
			i++;
		} else {
			j++;
		}
	}
	return result;
}

const list1 = [
		[1, 3],
		[4, 6],
		[8, 10],
		[11, 15],
	],
	list2 = [
		[2, 3],
		// [5, 7],
		[10, 15],
	];

console.log('Intersection', intervalsIntersection(list1, list2));
