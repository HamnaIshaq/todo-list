import { AddData } from "../LocalStorage/AddData";

/*
  UPDATE STATUS OF TODO LOGIC

  WHEN TODO TITLE/ CHECKBOX IS CLICKED
  CHANGE THE STATUS OF TODO TO COMPLETED/IN COMPLETE
  DEPENDING ON THE PREVIOUS STATE
*/
export const TodoStatus = (root, allProjects) => {
  const todoStatusInput = root.querySelectorAll(".todo-status");

  todoStatusInput.forEach((input) => {
    input.addEventListener("click", changeTodoStatus);
  });

  function changeTodoStatus(e) {
    let selectedProject;
    const tickImg =
      e.currentTarget.parentElement.querySelector(".checkmark-img");
    const todoCard = e.currentTarget.parentElement.parentElement.parentElement;
    const todoId = todoCard.getAttribute("data-todo-id");

    allProjects.forEach((project) => {
      if (project.active === true) {
        selectedProject = project;
      }
    });

    selectedProject.updateProjectTodoCompleted(todoId);

    if (e.currentTarget.checked) {
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
  }
};
