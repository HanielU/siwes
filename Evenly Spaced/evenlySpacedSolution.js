function evenlySpaced(first, second, last) {
	//Provide your solution here
	const small =
		first < second && first < last
			? first
			: second < first && second < last
			? second
			: last;

	const medium =
		(first > second && first < last) || (first > last && first < second)
			? first
			: (second > first && second < last) || (second > last && second < first)
			? second
			: (last > first && last < second) || (last > second && last < first)
			? last
			: 0;

	const large =
		first > second && first > last
			? first
			: second > first && second > last
			? second
			: last;

	if (medium - small === large - medium) return true;
	return false;
}

module.exports = evenlySpaced;
