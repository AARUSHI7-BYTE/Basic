// todos.js
import { displayTodos } from "./displayTodos.js";

fetch("https://jsonplaceholder.typicode.com/todos")
  .then(res => res.json())
  .then(data => {
      displayTodos(data); // Pass data to display function
  })
  .catch(err => console.log("Error:", err));
