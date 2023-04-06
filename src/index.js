import "./assets/styles/style.css";

import { Initialize } from "./modules/Initialize";
import { AddProject } from "./modules/UI/AddProject";
import { SelectProject } from "./modules/UI/SelectProject";
import { OpenCloseModal, CloseModalWithCrossBtn } from "./modules/UI/Modal";
import { AddTodo } from "./modules/UI/AddTodo";
import { DeleteTodo } from "./modules/UI/DeleteTodo";
import { TodoDetails } from "./modules/UI/TodoDetails";
import { TodoStatus } from "./modules/UI/TodoStatus";

let allProjects = [];
allProjects.push(Initialize);

let selectedProject = Initialize;

const root = document.querySelector("#root");

OpenCloseModal("addTodoModal", "addTodoModalBtn");
CloseModalWithCrossBtn("close");

AddProject(root, allProjects);
SelectProject(root, allProjects, selectedProject);
AddTodo(root, allProjects);
DeleteTodo(root, allProjects);
TodoDetails(allProjects);
TodoStatus(root, allProjects);
