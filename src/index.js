import Project from "./modules/App-logic/Project";
import ProjectUI from "./modules/UI/ProjectUI";
import AddTodo from "./modules/UI/AddTodo";

const root = document.querySelector("#root");

// INITIALIZE A DEFAULT PROJECT
const defaultProject = new Project("default");

defaultProject.active = true;

let data = [];
data.push(defaultProject);

function updateProjectData(updatedData) {
  data.push(updatedData);
}

ProjectUI(root, data, updateProjectData);
