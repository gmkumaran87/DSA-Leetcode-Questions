function subSequences(output, input) {
	if (input.length === 0) {
		console.log(output);
		return;
	}
	const ch = input.charAt(0);
	subSequences(output + ch, input.slice(1));
	subSequences(output, input.slice(1));
}

const str = 'abc';

subSequences('', str);
