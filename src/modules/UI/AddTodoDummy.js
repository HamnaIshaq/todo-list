import Todo from "../App-logic/Todo";

const AddTodo = (root, data, renderTodo) => {
  const createNewProjectBtn = root.querySelector(".create-new-project-btn");
  const projectNameInput = root.querySelector(".project-name");
  const projectNameContainer = root.querySelector("#project-container");

  const todoContainer = root.querySelector(".todos");

  const todoTitle = root.querySelector(".todo-title");
  const todoDescription = root.querySelector(".todo-description");
  const todoPriority = root.querySelector(".todo-priority");
  const todoDueDate = root.querySelector(".todo-due-date");
  const addTodoBtn = root.querySelector(".add-todo-btn");

  todoContainer.addEventListener("click", (e) => onClickTodoContainer(e));

  function onClickTodoContainer(e) {
    if (e.target.classList.contains("todo-details-btn")) {
      console.log(e.target);
      const todoContainer = e.target.closest("div");
      const todoId = todoContainer.getAttribute("data-todo-id");

      const singleTodo = data.getSingleTodo(todoId);

      const detailsEl = document.createElement("div");
      detailsEl.innerHTML = `
        title - ${singleTodo.title}
        description - ${singleTodo.description}
        due date - ${singleTodo.dueDate}
        priority - ${singleTodo.priority}
        completed - ${singleTodo.completed}
      `;
      todoContainer.appendChild(detailsEl);
    } else if (e.target.classList.contains("todo-delete-btn")) {
      const todoContainer = e.target.closest("div");
      const todoId = todoContainer.getAttribute("data-todo-id");
      data.deleteProjectTodo(todoId);

      todoContainer.remove();
      console.log(data);
    }
  }

  addTodoBtn.addEventListener("click", addTodo);

  function addTodo() {
    if (todoTitle.value === "") {
      console.log("title is empty");
    } else if (todoDescription.value === "") {
      console.log("description is empty");
    } else if (todoPriority.value === "") {
      console.log("priority is not selected");
    } else if (todoDueDate.value === "") {
      console.log("due date is not selected");
    } else {
      console.log("all fields are filled");
      console.log(
        todoTitle.value,
        todoDescription.value,
        todoPriority.value,
        todoDueDate.value
      );

      let todo = new Todo(
        todoTitle.value,
        todoDescription.value,
        todoDueDate.value,
        todoPriority.value
      );
      data.project = todo;
      renderTodo(data.project);
      console.log(data);
    }
  }
};

export default AddTodo;
