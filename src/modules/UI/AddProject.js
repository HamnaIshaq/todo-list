import Project from "../App-logic/Project";

import CalendarDark from "../../assets/images/calendar-dark.svg";

/*
  ADD PROJECT LOGIC

  CHECK IF PROJECT NAME IS EMPTY
  IF EMPTY, ASK FOR USER INPUT AGAIN

  IF PROJECT NAME IS NOT EMPTY,
  CREATE A NEW PROJECT WITH EMPTY TODOS
*/
export const AddProject = (root, allProject) => {
  const addNewProjectBtn = root.querySelector(".add-new-project-btn");
  const newProjectTitle = root.querySelector("#new-project-title");
  const projectContainer = root.querySelector(".project-container");

  addNewProjectBtn.addEventListener("click", onClickAddNewProjectBtn);

  function onClickAddNewProjectBtn() {
    if (newProjectTitle.value === "") {
      alert("Project title is empty!");
    } else {
      const newProject = new Project(newProjectTitle.value);
      allProject.push(newProject);

      const divEl = document.createElement("li");
      divEl.classList.add("mb-2");
      divEl.innerHTML = `
        <button type="button" class="flex items-center hover:bg-indigo-400 hover:border-indigo-400 ext-left pl-6 rounded-r-3xl w-full py-2 text-slate-900 project-btn" data-project-id=${newProject.id}>
          <img src=${CalendarDark} alt="" width="30px" class="mr-3"/>
          <span>${newProjectTitle.value}</span>
        </button>
      `;
      projectContainer.appendChild(divEl);

      // RESET INPUT VALUE
      newProjectTitle.value = "";
    }
  }
};
