const todos = ["hi"];

let input = prompt('What would you like to do?');

while(input !== "quit") {
	if(input === "list") {
		listTodos();	
	} else if(input === "new") {
		newTodo();
	} else if (input === 'delete') {
		deleteTodo();
	}
	input = prompt('What would you like to do?');
}
console.log("OK, YOU QUIT THE APP!")

function listTodos() {
	console.log('***********');
	todos.forEach((todo,i) => {
		console.log(i + ': ' + todo);
	}); 
	console.log('***********');
}

function newTodo() {
	let todo = prompt("Enter new todo");
	todos.push(todo);
	console.log('added a todo');
}

function deleteTodo() {
	let index = prompt('Enter index of todo to delete');
	todos.splice(index,1);
	console.log('Deleted one todo item');
}