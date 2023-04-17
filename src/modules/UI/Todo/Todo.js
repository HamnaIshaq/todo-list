import { DeleteTodo } from "./DeleteTodo";
import { TodoDetails } from "./TodoDetails";
import { TodoStatus } from "./TodoStatus";

export const Todo = (root, allProjects) => {
  const todoContainer = root.querySelector(".todo-container");

  todoContainer.addEventListener("click", (e) => onClickTodo(e));

  function onClickTodo(e) {
    const target = e.target;
    if (e.target.classList.contains("delete-todo-btn")) {
      DeleteTodo(root, allProjects, target);
      return;
    }

    if (e.target.classList.contains("todo-details-btn")) {
      TodoDetails(root, allProjects, target);
      return;
    }

    if (e.target.classList.contains("todo-status")) {
      TodoStatus(allProjects, target);
      return;
    }
  }
};
