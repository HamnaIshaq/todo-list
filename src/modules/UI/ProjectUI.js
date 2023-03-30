import Project from "../App-logic/Project";
import AddTodo from "./AddTodo";

const ProjectUI = (root, project = "") => {
  const createNewProjectBtn = root.querySelector(".create-new-project-btn");
  const projectNameInput = root.querySelector(".project-name");
  const projectNameContainer = root.querySelector("#project-container");
  const todoContainer = root.querySelector(".todos");

  // select the active project
  const [activeProject] = project.filter((project) => {
    if (project.active === true) {
      AddTodo(root, project, renderTodosOfProject);
      return project;
    }
  });

  // create default project
  createProject(activeProject.projectName, activeProject.id);
  renderTodosOfProject(activeProject.project);

  console.log(activeProject);

  createNewProjectBtn.addEventListener("click", addNewProject);

  // create a new Project and add project to UI
  function addNewProject() {
    if (projectNameInput.value === "") {
      console.log("project name is empty");
    } else {
      const newProject = new Project(projectNameInput.value);
      createProject(newProject.projectName, newProject.id);
      addProjectToArr(newProject);
      resetInputValue(projectNameInput);
    }
  }

  function createProject(projectName, projectId) {
    const projectEl = document.createElement("div");
    const projectBtn = document.createElement("button");
    projectBtn.type = "button";
    projectBtn.textContent = projectName;
    projectBtn.setAttribute("data-project-id", projectId);

    projectBtn.addEventListener("click", (e) => showClickedProject(e));
    projectEl.appendChild(projectBtn);
    projectNameContainer.appendChild(projectEl);
  }

  function showClickedProject(e) {
    //console.log(e.target);
    console.log(project);
    project.forEach((singleProject) => {
      console.log("single", singleProject);
    });
    /*project.forEach((singleProject) => {
      console.log(singleProject.id);
      console.log(e.target.getAttribute("data-project-id"));
      if (e.target.getAttribute("data-project-id")) {
        singleProject.active = true;
        console.log(singleProject);
        renderTodosOfProject(singleProject.project);
      } else {
        singleProject.active = false;
      }
    });*/
  }

  function addProjectToArr(newProject) {
    project.push(newProject);
  }

  function resetInputValue(inputEl) {
    inputEl.value = "";
  }

  function renderTodosOfProject(todos) {
    todoContainer.innerHTML = "";

    todos.map((todo) => {
      console.log(todo);
      const todoDetails = `
        <p>${todo.title}</p>
        <p>${todo.dueDate}<p>
        <button type="button" class="todo-details-btn">details</button>
        <span>Urgent</span>
        <button type="button" class="todo-delete-btn">X</button>
      `;

      const divEl = document.createElement("div");
      divEl.style.outline = "1px solid gray";
      divEl.setAttribute("data-todo-id", todo.id);
      divEl.innerHTML = todoDetails;

      todoContainer.appendChild(divEl);
    });
  }
};

export default ProjectUI;
