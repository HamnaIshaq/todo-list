/*
  UPDATE STATUS OF TODO LOGIC

  WHEN TODO TITLE/ CHECKBOX IS CLICKED
  CHANGE THE STATUS OF TODO TO COMPLETED/IN COMPLETE
  DEPENDING ON THE PREVIOUS STATE
*/
export const TodoStatus = (root, allProjects) => {
  const todoContainer = root.querySelector(".todo-container");

  todoContainer.addEventListener("click", (e) => changeTodoStatus(e));

  function changeTodoStatus(e) {
    if (e.target.classList.contains("todo-status")) {
      let selectedProject;
      const todoId =
        e.target.parentElement.parentElement.parentElement.getAttribute(
          "data-todo-id"
        );

      allProjects.forEach((project) => {
        if (project.active === true) {
          selectedProject = project;
        }
      });

      selectedProject.updateProjectTodoCompleted(todoId);

      const checkmarkImg =
        e.target.parentElement.querySelector(".checkmark-img");

      if (e.target.checked) {
        checkmarkImg.classList.remove("hidden");
        checkmarkImg.classList.add("block");
      } else {
        checkmarkImg.classList.remove("block");
        checkmarkImg.classList.add("hidden");
      }
    }
  }
};
