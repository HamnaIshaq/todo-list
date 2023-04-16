import { AddData } from "../../LocalStorage/AddData";

/*
  UPDATE STATUS OF TODO LOGIC

  WHEN TODO TITLE/ CHECKBOX IS CLICKED
  CHANGE THE STATUS OF TODO TO COMPLETED/IN COMPLETE
  DEPENDING ON THE PREVIOUS STATE
*/
export const TodoStatus = (allProjects, target) => {
  let selectedProject;
  const tickImg = target.parentElement.querySelector(".checkmark-img");
  const todoCard = target.parentElement.parentElement.parentElement;
  const todoId = todoCard.getAttribute("data-todo-id");

  allProjects.forEach((project) => {
    if (project.active === true) {
      selectedProject = project;
    }
  });

  selectedProject.updateProjectTodoCompleted(todoId);

  if (target.checked) {
    tickImg.classList.remove("hidden");
    tickImg.classList.add("block");
    todoCard.classList.add("line-through");
    todoCard.classList.add("text-slate-400");
  } else {
    tickImg.classList.remove("block");
    tickImg.classList.add("hidden");
    todoCard.classList.remove("line-through");
    todoCard.classList.remove("text-slate-400");
  }

  AddData(allProjects);
};
