// Book Constructor
function Book(title, author, isbn) {
	this.title = title;
	this.author = author;
	this.isbn = isbn;
}

// UI Constructor
function UI() {}

// Add book
UI.prototype.addBookToList = function(book) {
	const bookList = document.getElementById('book-list');
	const row = document.createElement('tr');
	// Insert columns
	row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>`;
	bookList.appendChild(row);
};

// Clear fields
UI.prototype.clearFormFields = function(book) {
	document.getElementById('title').value = '';
	document.getElementById('author').value = '';
	document.getElementById('isbn').value = '';
};

// Show message
UI.prototype.showAlert = function(message, className) {
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
};

// Delete book
UI.prototype.deleteBook = function(target) {
	if (target.className === 'delete') {
		target.parentElement.parentElement.remove();
	}
};

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
	ui.showAlert('Book removed!', 'success');
});
