import {
  RemoveModalListeners,
  OpenCloseModal,
  CloseModalWithBtn,
} from "./Modal";

import Update from "../../assets/images/update.svg";
import Delete from "../../assets/images/delete.svg";
import Check from "../../assets/images/check.svg";

/*
  RENDER SELECTED PROJECT TODOS LOGIC

  IF SELECTED PROJECT DOES NOT CONTAIN ANY TODOS,
  SHOW A MESSAGE TO USER THAT PROJECT IS EMPTY
  
  IF PROJECT CONTAINS TODOS,
  RENDER THEM ON THE DOM,
  REMOVE ALL EVENT LISTENERS FOR UPDATE TODO BTN AND MODAL
  THAT WERE ATTACHED TO PREVIOUS PROJECT
  ADD NEW EVENT LISTENERS FOR UPDATE TODO BTN AND MODAL
  FOR THE NEWLY RENDERED TODOS
*/
export const RenderSelectedProjectTodos = (root, project) => {
  const emptyProjectMessage = root.querySelector(".empty-todos-container");
  const projectContainer = root.querySelector(".todo-container");

  if (project.TodoList.length) {
    emptyProjectMessage.classList.add("hidden");
    emptyProjectMessage.classList.remove("block");
  } else {
    emptyProjectMessage.classList.remove("hidden");
    emptyProjectMessage.classList.add("block");
  }

  projectContainer.innerHTML = "";
  projectContainer.innerHTML += project.TodoList.map((todo) => {
    return `
    <div class="todo-card">
          <div
            class="bg-white rounded p-3 mb-3 text-lg flex items-center justify-between border-l-4 todo-card-container ${
              todo.priority === 1
                ? "border-l-red-500"
                : todo.priority === 2
                ? "border-l-yellow-500"
                : "border-l-green-500"
            } ${todo.completed ? "line-through text-slate-400" : ""}"
            data-todo-id=${todo.id}
            >
            <div>
              <label for=${todo.id} class="block relative flex items-center">
                <input
                  type="checkbox"
                  id=${todo.id}
                  class="w-4 h-4 m-0 p-0 align-middle todo-status opacity-0 w-0 h-0 absolute peer"
                  ${todo.completed === true ? "checked" : ""}
                />
                <span class="checkmark flex items-middle h-9 w-9 bg-gray-200 rounded-full peer-checked:bg-green-500 -top-1 right-9">
                  <img src=${Check} alt="tick" width="20px" class="mx-auto checkmark-img ${
      todo.completed ? "block" : "hidden"
    }"/>
                </span>
                <span class="todo-title pl-2">${todo.title}</span>
              </label>
            </div>
            <div class="flex">
              <p class="flex items-center todo-due-date">Due: ${
                todo.dueDate
              }</p>
              <button
                type="button"
                class="border-2 border-indigo-500 bg-indigo-500 hover:border-indigo-400 hover:bg-indigo-400 rounded-full px-2 py-2 mx-2 open-modal-btn todo-details-btn updateTodoModalBtn"
                id=${todo.id}
                data-project-id=${project.id}
                data-todo-id=${todo.id}
              >
                <img src=${Update} alt="update" width="20px" class="todo-details-btn"/>
              </button>
              <button
                type="button"
                class="border-2 border-red-500 px-2 bg-red-500 hover:bg-red-400 hover:border-red-400 text-white rounded-full delete-todo-btn"
              >
               <img src=${Delete} alt="delete" width="20px" class="delete-todo-btn" />
              </button>
            </div>
          </div>
        </div>
    `;
  }).join("");

  RemoveModalListeners("updateTodoModal", "updateTodoModalBtn");
  OpenCloseModal("updateTodoModal", "updateTodoModalBtn");
  CloseModalWithBtn("modal-btn");
};
