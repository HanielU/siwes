function wordLength(arr) {
	//code goes here
	const map = new Map();
	for (let i = 0; i < arr.length; i++) {
		const letter = arr[i];
		map.set(letter.toLowerCase(), letter.length);
	}

	return map;
}

module.exports = wordLength;
