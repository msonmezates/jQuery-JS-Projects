const taskInput = document.getElementById('task');
const form = document.getElementById('task-form');
const taskList = document.querySelector('.collection');
const clearButton = document.querySelector('.clear-tasks');
const filter = document.getElementById('filter');

// Initialize all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
	// DOM Load Event
	document.addEventListener('DOMContentLoaded', getTasks);
	// Add task event
	form.addEventListener('submit', addTask);
	// Remove task event. Need this on a higher level for event delegation
	taskList.addEventListener('click', removeTask);
	// Remove all items from the list
	clearButton.addEventListener('click', clearTasks);
	// Filter tasks
	filter.addEventListener('keyup', filterTasks);
}

// Get all tasks from local storage
function getTasks() {
	let tasks;
	if (localStorage.getItem('tasks') === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}
	tasks.forEach((task) => {
		// Create li element
		const listElement = document.createElement('li');
		listElement.className = 'collection-item';
		// Add the text node
		listElement.appendChild(document.createTextNode(task));
		const link = document.createElement('a');
		link.className = 'delete-item secondary-content';
		// Add icon
		link.innerHTML = `<i class="fa fa-remove"></i>`;
		listElement.appendChild(link);
		// Append li to ul
		taskList.appendChild(listElement);
	});
}

// Handle adding a new task to the list
function addTask(e) {
	e.preventDefault();
	const newTask = taskInput.value;
	if (!newTask) {
		alert('Add a task');
	}

	// Create li element
	const listElement = document.createElement('li');
	listElement.className = 'collection-item';
	// Add the text node
	listElement.appendChild(document.createTextNode(newTask));
	const link = document.createElement('a');
	link.className = 'delete-item secondary-content';
	// Add icon
	link.innerHTML = `<i class="fa fa-remove"></i>`;
	listElement.appendChild(link);
	// Append li to ul
	taskList.appendChild(listElement);
	// Store in local storage
	storeTaskInLocalStorage(newTask);
	// Reset input value
	taskInput.value = '';
}

// Handle storing task in local storage
function storeTaskInLocalStorage(task) {
	let tasks;
	if (localStorage.getItem('tasks') === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}
	tasks.push(task);
	localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Handle removing a list item
function removeTask(e) {
	if (e.target.parentElement.classList.contains('delete-item')) {
		const confirmResult = confirm('Are you sure you want to delete the item?');
		if (confirmResult) {
			e.target.parentElement.parentElement.remove();
			// Remove from local storage
			const localStorageItem = e.target.parentElement.parentElement.textContent;
			removeFromLocalStorage(localStorageItem);
		}
	}
}

// Handle clear tasks
function clearTasks() {
	// taskList.innerHTML = ''; //This is an easy implementation but not performant
	while (taskList.firstChild) {
		taskList.removeChild(taskList.firstChild);
	}
	// Remove items from local storage
	localStorage.clear();
}

// Handle filtering tasks
function filterTasks(e) {
	const text = e.target.value.toLowerCase();
	document.querySelectorAll('li.collection-item').forEach((li) => {
		const item = li.textContent.toLowerCase();
		if (item.indexOf(text) > -1) {
			li.style.display = 'block';
		} else {
			li.style.display = 'none';
		}
	});
}

function removeFromLocalStorage(taskItem) {
	let tasks;
	if (localStorage.getItem('tasks') === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}
	tasks.forEach((task, index) => {
		if (task === taskItem) {
			tasks.splice(index, 1);
		}
		localStorage.setItem('tasks', JSON.stringify(tasks));
	});
}
