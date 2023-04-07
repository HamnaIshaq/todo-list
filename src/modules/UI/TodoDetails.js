import { UpdateTodo } from "./UpdateTodo";
/*
  TODO DETAILS LOGIC

  TODO DETAILS
  WHEN EDIT BUTTON IS CLICKED,
  SHOW DETAILS OF CLICKED TODO IN A MODAL
  IF UPDATE BUTTON IS CLICKED
  UPDATE TODO MODULE IS CALLED

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

      UpdateTodo(clickedTodoCard, todoId, selectedProject, allProjects);
    }
  }
};
