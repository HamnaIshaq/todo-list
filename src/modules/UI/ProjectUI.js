import Project from "../App-logic/Project";

const ProjectUI = (root, project = "") => {
  const createNewProjectBtn = root.querySelector(".create-new-project-btn");
  const projectNameInput = root.querySelector(".project-name");
  const projectNameContainer = root.querySelector("#project-container");
  const todoContainer = root.querySelector(".todos");

  // create default project
  createProject(project.projectName);
  renderTodosOfProject(project.project);

  createNewProjectBtn.addEventListener("click", addNewProject);

  // create a new Project and add project to UI
  function addNewProject() {
    if (projectNameInput.value === "") {
      console.log("project name is empty");
    } else {
      const newProject = new Project(projectNameInput.value);
      createProject(newProject.projectName);
      resetInputValue(projectNameInput);
    }
  }

  function createProject(projectName) {
    const projectEl = document.createElement("div");
    const projectBtn = document.createElement("button");
    projectBtn.type = "button";
    projectBtn.textContent = projectName;
    projectEl.appendChild(projectBtn);
    projectNameContainer.appendChild(projectEl);
  }

  function resetInputValue(inputEl) {
    inputEl.value = "";
  }

  function renderTodosOfProject([{ title, description, priority, completed }]) {
    console.log(project.project);
    todoContainer.innerHTML = `
      title: ${title}
      description: ${description}
      priority: ${priority}
      completed: ${completed ? "completed" : "In-progress"}
      
    `;
  }
};

export default ProjectUI;
