function getArrayParams(...arr) {
	let min = arr[0];
	let max = arr[0];
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
		if (arr[i] >= max) {
			max = arr[i];
		} else if (arr[i] <= min) {
			min = arr[i];
		}
	}
	let avg = sum / arr.length;
	return {
		min: min,
		max: max,
		avg: Number(avg.toFixed(2))
	};
}

// getArrayParams
console.log("getArrayParams(-99, 99, 10): ", getArrayParams(-99, 99, 10)); // { min: -99, max: 99, avg: 3.33 }
console.log("getArrayParams(1, 2, 3, -100, 10): ", getArrayParams(1, 2, 3, -100, 10)); // { min: -100, max: 10, avg: -16.80 }
console.log("getArrayParams(5): ", getArrayParams(5)); // { min: 5, max: 5, avg: 5 }

function summElementsWorker(...arr) {
	let sum = 0;
	if (arr == []) {
		return sum;
	} else {
		for (let i = 0; i < arr.length; i++) {
			sum += arr[i];
		}
		return Number(sum.toFixed(2));
	}
}

// summElementsWorker
console.log("summElementsWorker(): ", summElementsWorker()); // 0
console.log("summElementsWorker(10, 10, 11, 20, 10): ", summElementsWorker(10, 10, 11, 20, 10)); // 61

function differenceMaxMinWorker(...arr) {
	let min = arr[0];
	let max = arr[0];
	let diffMaxMin = 0;
	if (arr == []) {
		return diffMaxMin;
	} else {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] >= max) {
				max = arr[i];
			} else if (arr[i] <= min) {
				min = arr[i];
			}
			diffMaxMin = max - min;
		}
		return Number(diffMaxMin.toFixed(2));
	}
}

// differenceMaxMinWorker
console.log("differenceMaxMinWorker(): ", differenceMaxMinWorker()); // 0
console.log("differenceMaxMinWorker(10, 10, 11, 20, 10): ", differenceMaxMinWorker(10, 10, 11, 20, 10)); // 20 - 10 => 10

function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0;
	let sumOddElement = 0;
	let diffEven = 0;
	if (arr == []) {
		return diffEven;
	} else {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] % 2 == 0) {
				sumEvenElement += arr[i];
			} else if (arr[i] % 2 == 1) {
				sumOddElement += arr[i];
			}
			diffEven = sumEvenElement - sumOddElement;
		}
		return Number(diffEven.toFixed(2));
	}
}

// differenceEvenOddWorker
console.log("differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17): ", differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17)); // 266 - 213 => 53
console.log("differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35): ", differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // 114 - 383 => -269

function averageEvenElementsWorker(...arr) {
	let sumEvenElement = 0;
	let countEvenElement = 0;
	let averageEven = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			sumEvenElement += arr[i];
			countEvenElement += 1;
		}
		averageEven = sumEvenElement / countEvenElement;
	}
	return Number(averageEven.toFixed(2));
}

// averageEvenElementsWorker
console.log("averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9): ", averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)); // [2, 4, 6, 8] => 5
console.log("averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35): ", averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // [64, 10, 40] => 38

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	let res;
	let numbers;
	if (arrOfArr == []) {
		return (maxWorkerResult = 0);
	} else {
		for (let i = 0; i < arrOfArr.length; i++) {
			numbers = arrOfArr[i];
			res = func(...numbers);
			if (res > maxWorkerResult) maxWorkerResult = res;
		}
		return Number(maxWorkerResult.toFixed(2));
	}
}
const arr = [
	[10, 10, 11, 20, 10],
	[67, 10, 2, 39, 88],
	[72, 75, 51, 87, 43],
	[30, 41, 55, 96, 62],
];

//maxWorkerResult
console.log("makeWork(arr, summElementsWorker): ", makeWork(arr, summElementsWorker)); // максимум из 61, 206, 328, 284 => 328