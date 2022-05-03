function sumNumbers(str) {
	// your code goes here...
	const nums = [];
	let joined = "";
	for (let i = 0; i < str.length; i++) {
		const char = str[i];
		if (!isNaN(+char)) {
			joined += char;
		} else {
			joined !== "" && nums.push(+joined);
			joined = "";
		}
	}
	joined !== "" && nums.push(+joined);
	return nums.length > 0 ? nums.reduce((a, b) => a + b) : 0;
}
module.exports = sumNumbers;
