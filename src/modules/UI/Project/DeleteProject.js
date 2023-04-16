import { RenderSelectedProjectName } from "./RenderSelectedProjectName";
import { RenderSelectedProjectTodos } from "./RenderSelectedProjectTodos";
import { AddData } from "../../LocalStorage/AddData";

import CalendarLight from "../../../assets/images/calendar-img.svg";

/*
  DELETE PROJECT

  CLICK ON THE CROSS ICON
  THIS WILL DELETE THE PROJECT 
  FROM UI AS WELL AS LOCAL STORAGE
  IF SELECTED PROJECT WAS OPEN
  THEN USER IS RE-DIRECTED TO INDEX PROJECT
*/

export const DeleteProject = (root, allProjects, deleteImg) => {
  const projectContainer = root.querySelector(".project-container");
  const inboxProjectBtn = projectContainer.querySelector(".inbox-project-btn");

  //projectContainer.addEventListener("click", (e) => onClickProject(e));

  //function onClickProject(e) {
  //if (e.target.classList.contains("delete-project-btn")) {
  let clickedProject, inboxProject, activeProject;
  clickedProject = deleteImg.parentElement.parentElement;
  const projectId = clickedProject.getAttribute("data-project-id");

  allProjects.forEach((project, index) => {
    if (project.id === projectId) {
      project.active === true ? (activeProject = project) : "";
      allProjects.splice(index, 1);
    }
    if (project.projectName === "Inbox" && !activeProject) {
      inboxProject = project;
    }
  });

  if (activeProject && activeProject.projectName !== "Inbox") {
    inboxProject.active = true;

    inboxProjectBtn.classList.add("bg-indigo-500");
    inboxProjectBtn.classList.add("border-indigo-500");
    inboxProjectBtn.classList.add("text-white");
    inboxProjectBtn.classList.remove("text-slate-900");
    inboxProjectBtn.children[0].src = CalendarLight;
    RenderSelectedProjectName(root, "Inbox");
    RenderSelectedProjectTodos(root, inboxProject);
  }

  AddData(allProjects);

  clickedProject.parentElement.remove();
  //}
  //}
};
