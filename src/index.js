import Project from "./modules/App-logic/Project";
import ProjectUI from "./modules/UI/ProjectUI";

const root = document.querySelector("#root");

// INITIALIZE A DEFAULT PROJECT
const defaultProject = new Project("default");

ProjectUI(root, defaultProject);
