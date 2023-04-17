import "./assets/styles/style.css";

import { Initialize } from "./modules/Initialize";
import { AddProject } from "./modules/UI/Project/AddProject";
import { Project } from "./modules/UI/Project/Project";
import { OpenCloseModal, CloseModalWithCrossBtn } from "./modules/UI/Modal";
import { AddTodo } from "./modules/UI/Todo/AddTodo";
import { Todo } from "./modules/UI/Todo/Todo";

let allProjects = Initialize;
const root = document.querySelector("#root");

OpenCloseModal("addTodoModal", "addTodoModalBtn");
OpenCloseModal("updateTodoModal", "updateTodoModalBtn");
CloseModalWithCrossBtn("close");

AddProject(root, allProjects);
Project(root, allProjects);
AddTodo(root, allProjects);
Todo(root, allProjects);
