import Todo from "../App-logic/Todo";

export const AddTodoUI = (root, selectedProject) => {
  const todoTitle = root.querySelector(".new-todo-title");
  const todoDescription = root.querySelector(".new-todo-description");
  const todoDueDate = root.querySelector(".new-todo-due-date");
  const todoPriority = root.querySelector(".new-todo-priority");

  const addNewTodoBtn = root.querySelector(".add-new-todo-btn");
  const todoContainer = root.querySelector(".todo-container");

  addNewTodoBtn.addEventListener("click", getUserInputForTodo);

  function getUserInputForTodo() {
    if (todoTitle.value === "") {
      alert("title is empty");
    } else if (todoDescription.value === "") {
      alert("description is empty");
    } else if (todoDueDate.value === "") {
      alert("Due date is empty");
    } else if (todoPriority.value === "") {
      alert("Priority is empty");
    } else {
      const newTodo = new Todo(
        todoTitle.value,
        todoDescription.value,
        todoDueDate.value,
        parseInt(todoPriority.value)
      );

      selectedProject.addNewTodo(newTodo);

      addNewTodoToUI(newTodo);
    }
  }

  function addNewTodoToUI(newTodo) {
    console.log("abc");
    const newTodoDivEl = document.createElement("div");

    newTodoDivEl.innerHTML = `
      <div class="bg-white border-2 border-blue-500 rounded p-3 text-lg flex items-center justify-between border-l-4 todo-card-container" data-todo-id=${newTodo.id}>
        <div>
          <input type="checkbox" id=${newTodo.id} class="w-4 h-4 m-0 p-0 align-middle">
          <label for=${newTodo.id}>${newTodo.title}</label>
        </div>
        <div class="flex">
          <p>Due: ${newTodo.dueDate}</p>
          <button type="button" class="border-2 border-blue-600 pl-2 pr-2 bg-blue-600 text-white rounded mr-4 ml-4">
            Details
          </button>
          <button type="button" class="border-2 border-red-800 pl-2 pr-2 bg-red-800 text-white rounded-full delete-todo-btn">
            X
          </button>
        </div>
      </div>
    `;
    todoContainer.appendChild(newTodoDivEl);
  }
};
