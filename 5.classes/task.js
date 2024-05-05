console.log('//////////////////////////Задание 1//////////////////////////');

class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}
	fix() {
		this.state += this.state * 0.5;
	}

	set newState(state) {
		if (state < 0) {
			this.state = 0;
		} else if (state > 100) {
			this.state = 100;
		} else {
			this.state = state;
		}
	}

	get getState() {
		return this.state;
	}
}

const sherlock = new PrintEditionItem(
	"Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
	2019,
	1008
);

console.log(`Дата выпуска издания: ${sherlock.releaseDate}`); //2019
console.log(`Состояние по умолчанию: ${sherlock.state}`); //100
sherlock.fix();
console.log(`Состояние после фикса (х1.5): ${sherlock.state}`); //150
sherlock.newState = -13;
console.log(`Новое состояние: ${sherlock.getState}`); //0

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = 'magazine';
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = 'book';
		this.author = author;
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'novel';
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'fantastic';
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'detective';
	}
}

const picknick = new FantasticBook(
	"Аркадий и Борис Стругацкие",
	"Пикник на обочине",
	1972,
	168
);

console.log(`Автор книги: ${picknick.author}`); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(`Состояние книги: ${picknick.state}`); //10
picknick.fix();
console.log(`Состояние после фикса (х1.5): ${picknick.state}`); //15

console.log('//////////////////////////Задание 2//////////////////////////');

class Library {
	constructor(name, books) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state < 30) {
			return 0;
		} else {
			this.books.push(book);
		}
	}
	findBookBy(type, value) {
		for (let i = 0; i < this.books.length; i++) {
			if (this.books[i][type] === value) {
				return this.books[i];
			}
		}
		return null;
	}
	giveBookByName(bookName) {
		let reqBook = this.findBookBy('name', bookName);
		let indexOfBook = this.books.indexOf(reqBook);
		if (indexOfBook === -1) return null;
		return this.books.splice(indexOfBook, 1)[0];
	}
}

const library = new Library("Библиотека имени Ленина");

library.addBook(
	new DetectiveBook(
		"Артур Конан Дойл",
		"Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
		2019,
		1008
	)
);
library.addBook(
	new FantasticBook(
		"Аркадий и Борис Стругацкие",
		"Пикник на обочине",
		1972,
		168
	)
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log("Найденная книга 1: " + library.findBookBy("name", "Властелин колец")); //null
console.log("Найденная книга 2: " + library.findBookBy("releaseDate", 1924).name); //"Мурзилка"
console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3