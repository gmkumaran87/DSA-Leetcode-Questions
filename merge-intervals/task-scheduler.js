function leastTime(tasks, n) {
	const frequencies = new Map();

	for (const task of tasks) {
		// console.log(task);
		// Increment the frequency of the current task in the map. If the task doesn't exist in the map, set its frequency to 1. Otherwise, increment its frequency by 1.
		frequencies.set(task, (frequencies.get(task) || 0) + 1);
	}

	// Sort the map by frequency in descending order. If two tasks have the same frequency, sort them alphabetically.

	const sortedFrequencies = Array.from(frequencies).sort((a, b) => a[1] - b[1]);

	let maxFreq = sortedFrequencies[sortedFrequencies.length - 1][1];
	let idleTime = (maxFreq - 1) * n;
	sortedFrequencies.pop();

	console.log(frequencies, sortedFrequencies, idleTime);

	while (idleTime > 0 && sortedFrequencies.length > 0) {
		idleTime = idleTime - Math.min(maxFreq - 1, sortedFrequencies[sortedFrequencies?.length - 1][1]);
		sortedFrequencies.pop();
	}

	idleTime = Math.min(0, idleTime);

	return tasks.length + idleTime;
}

const tasks = ['A', 'A', 'A', 'B', 'B', 'C', 'C'],
	n = 1;

console.log('Least time', leastTime(tasks, n));
