import "./assets/styles/style.css";

import { Initialize } from "./modules/Initialize";
import { AddProject } from "./modules/UI/AddProject";
import { SelectProject } from "./modules/UI/SelectProject";

let allProjects = [];
allProjects.push(Initialize);

let selectedProject = Initialize;

const root = document.querySelector("#root");

AddProject(root, allProjects);
SelectProject(root, allProjects, selectedProject);
