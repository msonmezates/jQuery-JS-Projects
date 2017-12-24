const todos = ["hi"];

let input = prompt('What would you like to do?');

while(input !== "quit") {
	if(input === "list") {
		console.log(todos);
	} else if(input === "new") {
		let todo = prompt("Enter new todo")
		todos.push(todo);
		console.log(todos);
	}
	input = prompt('What would you like to do?');
}
console.log("OK, YOU QUIT THE APP!")