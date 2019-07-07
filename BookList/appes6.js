class Book {
	constructor(title, author, isbn) {
		this.title = title;
		this.author = author;
		this.isbn = isbn;
	}
}

class UI {
	addBookToList(book) {
		const bookList = document.getElementById('book-list');
		const row = document.createElement('tr');
		// Insert columns
		row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="delete">X</a></td>`;
		bookList.appendChild(row);
	}

	deleteBook(target) {
		if (target.className === 'delete') {
			target.parentElement.parentElement.remove();
		}
	}

	clearFormFields() {
		document.getElementById('title').value = '';
		document.getElementById('author').value = '';
		document.getElementById('isbn').value = '';
	}

	showAlert(message, className) {
		const alertDiv = document.createElement('div');
		alertDiv.className = `alert ${className}`;
		alertDiv.appendChild(document.createTextNode(message));
		const parentDiv = document.querySelector('.container');
		const form = document.getElementById('book-form');
		parentDiv.insertBefore(alertDiv, form);
		// Time out after 3 seconds
		setTimeout(() => {
			document.querySelector('.alert').remove();
		}, 3000);
	}
}
// Local storage class
class Store {
	static fetchBooks() {
		let books;
		if (localStorage.getItem('books') === null) {
			books = [];
		} else {
			books = JSON.parse(localStorage.getItem('books'));
		}

		return books;
	}

	static displayBooks() {
		const books = this.fetchBooks();
		books.map((book) => {
			const ui = new UI();
			ui.addBookToList(book);
		});
	}

	static addBook(book) {
		const books = this.fetchBooks();
		books.push(book);
		localStorage.setItem('books', JSON.stringify(books));
	}

	static removeBook(isbnNum) {
		const books = this.fetchBooks();
		const newBooksList = books.filter((book) => book.isbn !== isbnNum);
		localStorage.setItem('books', JSON.stringify(newBooksList));
	}
}

// DOM Load Event
document.addEventListener('DOMContentLoaded', function() {
	Store.displayBooks();
});

// Event listeners for adding book
document.getElementById('book-form').addEventListener('submit', function(e) {
	e.preventDefault();
	// Get form values
	const title = document.getElementById('title').value,
		author = document.getElementById('author').value,
		isbn = document.getElementById('isbn').value;

	// Instantate book
	const book = new Book(title, author, isbn);

	// Instantiate UI
	const ui = new UI();

	// Validation
	if (title === '' || author === '' || isbn === '') {
		ui.showAlert('Please fill in all the fields!', 'error');
	} else {
		// Add book to list
		ui.addBookToList(book);
		// Add to local storage
		Store.addBook(book);
		// Show success
		ui.showAlert('Book Added!', 'success');
		// Clear fields
		ui.clearFormFields();
	}
});

// Event listener for delete
document.getElementById('book-list').addEventListener('click', function(e) {
	e.preventDefault();
	// Instantiate UI
	const ui = new UI();
	ui.deleteBook(e.target);
	// Remove from local storage
	const isbn = e.target.parentElement.previousElementSibling.textContent;
	Store.removeBook(isbn);
	ui.showAlert('Book removed!', 'success');
});
