import { CloseModalWithBtn } from "./Modal";
import { AddData } from "../LocalStorage/AddData";
/*

  TODO DETAILS LOGIC

  TODO DETAILS
  WHEN EDIT BUTTON IS CLICKED,
  SHOW DETAILS OF CLICKED TODO IN A MODAL
  IF UPDATE BUTTON IS CLICKED
  UPDATE TODO FUNCTION IS CALLED

*/
export const TodoDetails = (allProjects) => {
  const todoContainer = document.querySelector(".todo-container");
  const todoTitle = document.querySelector(".detail-todo-title");
  const todoDescription = document.querySelector(".detail-todo-description");
  const todoDueDate = document.querySelector(".detail-todo-due-date");
  const todoPriority = document.querySelector(".detail-todo-priority");
  const todoCompleted = document.querySelector(".detail-todo-completed");

  const updateTodoBtn = document.querySelector(".update-todo-btn");

  todoContainer.addEventListener("click", (e) => onClickTodoDetailsBtn(e));
  let clickedTodoCard, todoId, selectedProject;

  function onClickTodoDetailsBtn(e) {
    if (e.target.classList.contains("todo-details-btn")) {
      e.target.tagName.toLowerCase() === "img"
        ? (clickedTodoCard = e.target.parentElement.parentElement.parentElement)
        : (clickedTodoCard = e.target.parentElement.parentElement);

      todoId = clickedTodoCard.getAttribute("data-todo-id");

      allProjects.forEach((project) => {
        if (project.active === true) {
          selectedProject = project;
        }
      });

      const details = selectedProject.getSingleTodo(todoId);

      todoTitle.value = details.title;
      todoDescription.value = details.description;
      todoDueDate.value = details.dueDate;
      todoPriority.value = details.priority;
      todoCompleted.value = details.completed ? "1" : "0";

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
    }
  }
};
