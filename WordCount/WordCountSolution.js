function wordCount(arrayOfStrings) {
	const obj = {};

	for (let i = 0; i < arrayOfStrings.length; i++) {
		const letter = arrayOfStrings[i];
		if (obj[letter] >= 1) {
			obj[letter]++;
			continue;
		}

		obj[letter] = 1;
	}

	return obj;
}

module.exports = wordCount;
