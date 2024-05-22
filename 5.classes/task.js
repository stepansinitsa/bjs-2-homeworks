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

	set state(state) {
		this._state = state;
		if (this.state < 0) {
			this._state = 0;
		} else if (this.state > 100) {
			this._state = 100;
		} else {
			this._state = this.state;
		}
	}

	get state() {
		return this._state;
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
sherlock.newState = 110;
console.log(`Новое состояние: ${sherlock.state}`); //0

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
		const findResult = this.books.find((item) => item[type] === value);
		return findResult || null;
	}
	giveBookByName(bookName) {
		const book = this.findBookBy("name", bookName);
		if (!book) return null;
		this.books = this.books.filter((item) => item.name !== bookName);
		return book;
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