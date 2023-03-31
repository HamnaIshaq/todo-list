import "./assets/styles/style.css";

import { Initialize } from "./modules/Initialize";
import { AddTodoUI } from "./modules/UI/AddTodoUI";
import { DeleteTodo } from "./modules/UI/DeleteTodo";
import { AddProject } from "./modules/UI/AddProject";

let allProjects = [];
allProjects.push(Initialize);

const root = document.querySelector("#root");
AddTodoUI(root, Initialize);
DeleteTodo(root, Initialize);
AddProject(root, allProjects);
