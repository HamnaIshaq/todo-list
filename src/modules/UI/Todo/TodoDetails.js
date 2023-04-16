import { CloseModalWithBtn } from "../Modal";
import { AddData } from "../../LocalStorage/AddData";
/*

  TODO DETAILS LOGIC

  TODO DETAILS
  WHEN EDIT BUTTON IS CLICKED,
  SHOW DETAILS OF CLICKED TODO IN A MODAL
  IF UPDATE BUTTON IS CLICKED
  UPDATE TODO FUNCTION IS CALLED

*/
export const TodoDetails = (root, allProjects, target) => {
  const todoContainer = root.querySelector(".todo-container");
  const todoTitle = root.querySelector(".detail-todo-title");
  const todoDescription = root.querySelector(".detail-todo-description");
  const todoDueDate = root.querySelector(".detail-todo-due-date");
  const todoPriority = root.querySelector(".detail-todo-priority");
  const todoCompleted = root.querySelector(".detail-todo-completed");

  const updateTodoBtn = root.querySelector(".update-todo-btn");

  let clickedTodoCard, todoId, selectedProject;

  target.tagName.toLowerCase() === "img"
    ? (clickedTodoCard = target.parentElement.parentElement.parentElement)
    : (clickedTodoCard = target.parentElement.parentElement);

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
      clickedTodoCard.classList.add("line-through");
      clickedTodoCard.classList.add("text-slate-400");
    } else {
      tickImg.classList.remove("block");
      tickImg.classList.add("hidden");
      clickedTodoCard.classList.remove("line-through");
      clickedTodoCard.classList.remove("text-slate-400");
    }

    todoDueDateEl.textContent = `Due: ${todo.dueDate}`;

    CloseModalWithBtn("modal-btn");

    AddData(allProjects);
  }
};
