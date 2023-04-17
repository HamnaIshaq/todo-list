import { DeleteProject } from "./DeleteProject";
import { SelectProject } from "./SelectProject";

export const Project = (root, allProjects) => {
  const projectContainer = root.querySelector(".project-container");

  projectContainer.addEventListener("click", (e) => onClickProject(e));

  function onClickProject(e) {
    if (e.target.classList.contains("delete-project-btn")) {
      DeleteProject(root, allProjects, e.target);
      return;
    }

    let projectBtn;
    if (e.target.parentElement.getAttribute("data-project-id")) {
      projectBtn = e.target.parentElement;
    } else if (e.target.getAttribute("data-project-id")) {
      projectBtn = e.target;
    }

    if (projectBtn) {
      SelectProject(projectContainer, projectBtn, allProjects);
    }
  }
};
