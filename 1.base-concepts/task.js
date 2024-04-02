"use strict";

function solveEquation(a, b, c) {
	let arr = [];
	let d = b * b - 4 * a * c;
	if (d < 0) {
		arr = [];
	} else if (d == 0) {
		let res = -b / (2 * a);
		arr.push(res);
	} else if (d > 0) {
		let res1 = (-b + Math.sqrt(d)) / (2 * a);
		let res2 = (-b - Math.sqrt(d)) / (2 * a);
		arr.push(res1, res2);
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let P = percent / 100 / 12;
	let S = amount - contribution;
	let n = Number(countMonths);
	let fullAmount = countMonths * (S * (P + P / ((1 + P) ** n - 1)));
	return fullAmount;
}

const solveEquationData = solveEquation(2, 4, 2);
console.log("Кратность корня: ", solveEquationData);

const calculateTotalMortgageData = calculateTotalMortgage(10, 0, 50000, 12);
console.log("Сумма выплат по ипотеке: ", Number(calculateTotalMortgageData.toFixed(2)));