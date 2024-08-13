/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todos = [];  // Initialize an empty array to hold the todos
}

add(todo) {
    this.todos.push(todo);  // Add the new todo to the end of the array
}

remove(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
        this.todos.splice(indexOfTodo, 1);  // Remove the todo at the specified index
    }
}

update(index, updatedTodo) {
    if (index >= 0 && index < this.todos.length) {
        this.todos[index] = updatedTodo;  // Update the todo at the specified index
    }
}

getAll() {
    return this.todos;  // Return all todos
}

get(indexOfTodo) {
  if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      return this.todos[indexOfTodo]
        // return this.todos.find((el,i)=> i===indexOfTodo);  // Return the todo at the specified index
    } else {
        return null;  // Return null if the index is invalid
    }
}

clear() {
    this.todos = [];  // Clear all todos
}

}

module.exports = Todo;
