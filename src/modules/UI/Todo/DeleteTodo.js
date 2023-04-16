import { RemoveModalListeners, OpenCloseModal } from "../Modal";
import { AddData } from "../../LocalStorage/AddData";

/*
  DELETE TODO LOGIC

  ON CLICKING DELETE BTN
  DELETE THE CLICKED TODO FROM SELECTED PROJECT
  REMOVE PREVIOUS EVENT LISTENERS FOR ALL UPDATE TODO BTNS AND MODAL
  ADD EVENT LISTENERS FOR ALL UPDATE TODO BTNS AND MODAL
  DELETE TODO ON THE DOM
*/

export const DeleteTodo = (root, allProjects, target) => {
  const todoContainer = root.querySelector(".todo-container");
  const emptyTodoMessage = root.querySelector(".empty-todos-container");

  let clickedTodoCard;

  target.tagName.toLowerCase() === "img"
    ? (clickedTodoCard = target.parentElement.parentElement.parentElement)
    : (clickedTodoCard = target.parentElement.parentElement);

  const projectId = clickedTodoCard.getAttribute("data-todo-id");

  clickedTodoCard.parentElement.remove();

  if (todoContainer.children.length === 0) {
    emptyTodoMessage.classList.remove("hidden");
    emptyTodoMessage.classList.add("block");
  }

  let selectedProject;

  allProjects.forEach((project) => {
    if (project.active === true) {
      selectedProject = project;
    }
  });

  selectedProject.deleteProjectTodo(projectId);

  AddData(allProjects);

  RemoveModalListeners("updateTodoModal", "updateTodoModalBtn");
  OpenCloseModal("updateTodoModal", "updateTodoModalBtn");
};
