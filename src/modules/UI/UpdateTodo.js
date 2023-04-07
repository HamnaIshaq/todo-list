import { CloseModalWithBtn } from "./Modal";
import { AddData } from "../LocalStorage/AddData";

/*
  TODO UPDATE LOGIC

  WHEN UPDATE BUTTON IS CLICKED IN THE MODAL
  UPDATE THE TODO WITH THE NEWLY ENTERED DATA
  AND CLOSE THE MODAL
*/
export const UpdateTodo = (
  clickedTodoCard,
  todoId,
  selectedProject,
  allProjects
) => {
  const todoTitle = document.querySelector(".detail-todo-title");
  const todoDescription = document.querySelector(".detail-todo-description");
  const todoDueDate = document.querySelector(".detail-todo-due-date");
  const todoPriority = document.querySelector(".detail-todo-priority");
  const todoCompleted = document.querySelector(".detail-todo-completed");

  const updateTodoBtn = document.querySelector(".update-todo-btn");

  updateTodoBtn.addEventListener("click", updateTodo);

  function updateTodo() {
    selectedProject.updateProjectTodo(
      todoId,
      todoTitle.value,
      todoDescription.value,
      todoDueDate.value,
      parseInt(todoPriority.value),
      todoCompleted.value === "1" ? true : false
    );

    const todo = selectedProject.getSingleTodo(todoId);

    const todoPriorityEl = clickedTodoCard;
    const todoTitleEl = clickedTodoCard.querySelector(".todo-title");
    const todoInput = clickedTodoCard.querySelector(".todo-status");
    const tickImg = clickedTodoCard.querySelector(".checkmark-img");
    const todoDueDateEl = clickedTodoCard.querySelector(".todo-due-date");

    todoTitleEl.textContent = todo.title;

    if (todo.priority === 1) {
      todoPriorityEl.classList.add("border-l-red-500");
      todoPriorityEl.classList.remove("border-l-yellow-500");
      todoPriorityEl.classList.remove("border-l-green-500");
    } else if (todo.priority === 2) {
      todoPriorityEl.classList.remove("border-l-red-500");
      todoPriorityEl.classList.add("border-l-yellow-500");
      todoPriorityEl.classList.remove("border-l-green-500");
    } else {
      todoPriorityEl.classList.remove("border-l-red-500");
      todoPriorityEl.classList.remove("border-l-yellow-500");
      todoPriorityEl.classList.add("border-l-green-500");
    }

    todoInput.checked = todo.completed;
    if (todo.completed) {
      tickImg.classList.remove("hidden");
      tickImg.classList.add("block");
    } else {
      tickImg.classList.remove("block");
      tickImg.classList.add("hidden");
    }

    todoDueDateEl.textContent = `Due: ${todo.dueDate}`;

    CloseModalWithBtn("modal-btn");

    AddData(allProjects);
  }
};
