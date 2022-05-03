function solution(P, C) {
	//Provide Your solution here
	if (P == C) {
		return P / 2;
	}
	if (P > C) {
		return C;
	} else if (C > P) {
		return Math.trunc(P / 2);
	}
}

module.exports = solution;
