/**
 * Given string in Camel case, convert it into Snake case and return the string.
 *
 *  Ex: ThisIsATask
 *  O/p: This_Is_A_Task
 */

function convertCase(str) {
	if (str.trim().length === 0) return '';

	let result = str.slice(0, 1);

	for (let i = 1; i < str.length; i++) {
		let ch = str[i];

		if (ch.charCodeAt() >= 65 && ch.charCodeAt() <= 90) {
			result = result + '_' + ch;
		} else {
			result = result + ch;
		}
	}
	console.log('Result', result);
	return result;
}

const str = 'ThisIsATaskMutHuKumaRan';
console.log('Output', convertCase(str));
