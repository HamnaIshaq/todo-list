import { RenderSelectedProjectName } from "./RenderSelectedProjectName";
import { RenderSelectedProjectTodos } from "./RenderSelectedProjectTodos";
import { AddData } from "../LocalStorage/AddData";

import CalendarDark from "../../assets/images/calendar-dark.svg";
import CalendarLight from "../../assets/images/calendar-img.svg";
import Delete from "../../assets/images/delete.svg";
import DeleteDark from "../../assets/images/delete-dark.svg";

export const SelectProject = (root, allProject) => {
  const projectContainer = root.querySelector(".project-container");

  projectContainer.addEventListener("click", (e) => onClickProject(e));

  function onClickProject(e) {
    if (e.target.getAttribute("data-project-id")) {
      const projectBtns = projectContainer.querySelectorAll(".project-btn");
      projectBtns.forEach((btn) => {
        btn.classList.remove("bg-indigo-500");
        btn.classList.remove("border-indigo-500");
        btn.classList.remove("text-white");
        btn.classList.add("text-slate-900");
        btn.classList.add("border-white");

        const img = btn.children[0];
        img.src = CalendarDark;

        if (btn.children[2]) {
          const deleteBtn = btn.children[2].querySelector("img");
          deleteBtn.src = DeleteDark;
        }
      });

      e.target.classList.add("bg-indigo-500");
      e.target.classList.add("border-indigo-500");
      e.target.classList.add("text-white");
      e.target.classList.remove("text-slate-900");
      e.target.children[0].src = CalendarLight;

      if (e.target.children[2]) {
        e.target.children[2].querySelector("img").src = Delete;
      }

      allProject.forEach((project) => {
        project.active = false;
        if (e.target.getAttribute("data-project-id") === project.id) {
          project.active = true;
          RenderSelectedProjectName(root, project.projectName);
          RenderSelectedProjectTodos(root, project, allProject);
        }
      });

      AddData(allProject);
    }
  }
};
