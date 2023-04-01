import { AddTodo } from "./AddTodo";
import { DeleteTodo } from "./DeleteTodo";
import { RenderSelectedProjectName } from "./RenderSelectedProjectName";
import { RenderSelectedProjectTodos } from "./RenderSelectedProjectTodos";

export const SelectProject = (root, allProject, selectedProject) => {
  const projectContainer = root.querySelector(".project-container");
  projectContainer.addEventListener("click", (e) => onClickProject(e));

  function onClickProject(e) {
    if (e.target.getAttribute("data-project-id")) {
      const projectBtns = projectContainer.querySelectorAll("button");
      projectBtns.forEach((btn) => {
        btn.classList.remove("border-indigo-800");
        btn.classList.remove("bg-indigo-800");
        btn.classList.add("border-blue-500");
        btn.classList.add("bg-blue-500");
      });

      e.target.classList.remove("border-blue-500");
      e.target.classList.remove("bg-blue-500");
      e.target.classList.add("bg-indigo-800");
      e.target.classList.add("bg-indigo-800");

      allProject.forEach((project) => {
        project.active = false;
        if (e.target.getAttribute("data-project-id") === project.id) {
          project.active = true;
          RenderSelectedProjectName(root, project.projectName);
          RenderSelectedProjectTodos(root, project);
          selectedProject = project;
        }
      });

      AddTodo(root, selectedProject);
      DeleteTodo(root, selectedProject);
    }
  }
};
