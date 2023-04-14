import "./assets/styles/style.css";

import { Initialize } from "./modules/Initialize";
import { AddProject } from "./modules/UI/AddProject";
import { DeleteProject } from "./modules/UI/DeleteProject";
import { SelectProject } from "./modules/UI/SelectProject";
import { OpenCloseModal, CloseModalWithCrossBtn } from "./modules/UI/Modal";
import { AddTodo } from "./modules/UI/AddTodo";
import { DeleteTodo } from "./modules/UI/DeleteTodo";
import { TodoDetails } from "./modules/UI/TodoDetails";
import { TodoStatus } from "./modules/UI/TodoStatus";

let allProjects = Initialize;
const root = document.querySelector("#root");

OpenCloseModal("addTodoModal", "addTodoModalBtn");
OpenCloseModal("updateTodoModal", "updateTodoModalBtn");
CloseModalWithCrossBtn("close");

AddProject(root, allProjects);
DeleteProject(root, allProjects);
SelectProject(root, allProjects);
AddTodo(root, allProjects);
DeleteTodo(root, allProjects);
TodoDetails(allProjects);
TodoStatus(root, allProjects);
