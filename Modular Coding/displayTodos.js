// displayTodos.js
export function displayTodos(data) {
    const container = document.getElementById("todos-container");

    container.innerHTML = ""; // Clear old content

    data.forEach(todo => {
        const div = document.createElement("div");
        div.className = "todo-item";

        div.innerHTML = `
            <h3>${todo.title}</h3>
            <p>Status: ${todo.completed ? "✔ Completed" : "❌ Not Completed"}</p>
        `;

        container.appendChild(div);
    });
}
