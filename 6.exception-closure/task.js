///Задание 1
function parseCount(number) {
	let numberCount = Number.parseFloat(number);
	if (Number.isNaN(numberCount)) {
		throw new Error("Невалидное значение");
	} else {
		return numberCount;
	}
}

function validateCount(number) {
	try {
		return parseCount(number);
	} catch (error) {
		return error;
	} finally {

	}
}

console.log(parseCount('4.567abcdefgh'));
// Expected output: 28.695307297889173

console.log(validateCount('abcdefgh'));
// Expected output: 28.695307297889173

///Задание 2
class Triangle {
	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;
		if (a > b + c || b > a + c || c > a + b) {
			throw new Error("Треугольник с такими сторонами не существует");
		}
	}
	get perimeter() {
		let p = (this.a + this.b + this.c);
		return p;
	}
	get area() {
		let p = (this.a + this.b + this.c) / 2;
		let ar = Math.round(1000 * Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)) + Number.EPSILON) / 1000;
		return ar;
	}
}

function getTriangle(a, b, c) {
	try {
		let trg = new Triangle(a, b, c);
		return trg;
	} catch (error) {
		let err = {
			get perimeter() {
				return "Ошибка! Треугольник не существует";
			},
			get area() {
				return "Ошибка! Треугольник не существует";
			}
		}
		return err;
	} finally {

	}
}

console.log(getTriangle(2, 2, 2));