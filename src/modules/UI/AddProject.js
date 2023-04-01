import Project from "../App-logic/Project";

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
        <button type="button" class="border-2 border-blue-500 w-full pt-2 pb-2 bg-blue-500 text-white rounded project-btn" data-project-id=${newProject.id}>
          ${newProjectTitle.value}
        </button>
      `;
      projectContainer.appendChild(divEl);

      // RESET INPUT VALUE
      newProjectTitle.value = "";
    }
  }
};
