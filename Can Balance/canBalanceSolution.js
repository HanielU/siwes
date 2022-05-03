//canBalance function takes an array of numbers and returns true or false based on the following conditions
//It returns true if the array can be split at any point with the sum of the numbers on one side equal to the sum of the numbers at the other side
// For example, given the array [1, 2, 3, 4, 5, 5], it will return true as the array can be split into [1, 2, 3, 4] and [5, 5] giving a sum of 10 on each side.

function canBalance(array) {
	//Type your solutions here

	for (let i = 0; i < array.length; i++) {
		let left = array.slice(0, i);
		let right = array.slice(i, array.length);

		let sumleft = 0,
			sumright = 0;

		for (let j = 0; j < left.length; j++) {
			sumleft += left[j];
		}

		for (let j = 0; j < right.length; j++) {
			sumright += right[j];
		}

		if (sumleft == sumright && sumleft !== 0) {
			return [left.length, right.length];
		}
	}
	return -1;
}

module.exports = canBalance;
