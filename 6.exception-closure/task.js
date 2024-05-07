///Задание 1
function parseCount(value) {
	if (Number.isNaN(Number.parseFloat(value))) {
		throw new Error("Невалидное значение");
	}
	return parseFloat(value) * 2.0 * Math.PI;
}

function validateCount(value) {
	try {
		return parseCount(value)
	} catch (error) {
		return error;
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
	get getPerimetr() {
		return (this.a + this.b + this.c);
	};
	get getArea() {
		const p = 0.5 * (this.a + this.b + this.c);
		return Math.pow(p * (p - this.a) * (p - this.b) * (p - this.c), 0.5).toFixed(3);
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (error) {
		return new Object({
			getPerimeter() {
				return "Ошибка! Треугольник не существует";
			},
			getArea() {
				return "Ошибка! Треугольник не существует";
			}
		});
	}
}

console.log(getTriangle(4, 40, 12));