import Todo from "../App-logic/Todo";
import {
  CloseModalWithBtn,
  RemoveModalListeners,
  OpenCloseModal,
} from "./Modal";

import Update from "../../assets/images/update.svg";
import Delete from "../../assets/images/delete.svg";
import Check from "../../assets/images/check.svg";

/*
  ADD TODO LOGIC

  CHECK FOR EMPTY INPUTS; TITLE, DESCRIPTION, DUE DATE AND PRIORITY
  IF ANY 1 IS EMPTY, ASK FOR USER INPUT AGAIN

  IF ALL INPUTS ARE FILLED,
  CREATE A NEW TODO IN THE SELECTED PROJECT
  REMOVE PREVIOUS EVENT LISTENERS FOR ALL UPDATE TODO BTNS AND MODAL
  ADD EVENT LISTENERS FOR ALL UPDATE TODO BTNS AND MODAL
  ADD TODO TO THE DOM
  RESET ADD TODO MODAL INPUTS
*/

export const AddTodo = (root, allProjects) => {
  const todoTitle = root.querySelector(".new-todo-title");
  const todoDescription = root.querySelector(".new-todo-description");
  const todoDueDate = root.querySelector(".new-todo-due-date");
  const todoPriority = root.querySelector(".new-todo-priority");

  const addNewTodoBtn = root.querySelector(".add-new-todo-btn");
  const todoContainer = root.querySelector(".todo-container");
  const emptyTodoMessage = root.querySelector(".empty-todos-container");

  let selectedProject;

  addNewTodoBtn.addEventListener("click", getUserInputForTodo);
  function getUserInputForTodo(e) {
    e.stopPropagation();
    if (todoTitle.value === "") {
      alert("title is empty");
    } else if (todoDescription.value === "") {
      alert("description is empty");
    } else if (todoDueDate.value === "") {
      alert("Due date is empty");
    } else if (todoPriority.value === "") {
      alert("Priority is empty");
    } else {
      const newTodo = new Todo(
        todoTitle.value,
        todoDescription.value,
        todoDueDate.value,
        parseInt(todoPriority.value)
      );

      allProjects.forEach((project) => {
        if (project.active === true) {
          selectedProject = project;
        }
      });

      selectedProject.addNewTodo(newTodo);

      addNewTodoToUI(newTodo);
      RemoveModalListeners("updateTodoModal", "updateTodoModalBtn");
      OpenCloseModal("updateTodoModal", "updateTodoModalBtn");
      CloseModalWithBtn("modal-btn");
    }
  }

  function addNewTodoToUI(newTodo) {
    const newTodoDivEl = document.createElement("div");
    newTodoDivEl.classList.add("todo-card");

    emptyTodoMessage.classList.add("hidden");

    newTodoDivEl.innerHTML = `
      <div
        class="bg-white rounded p-3 mb-3 text-lg flex items-center justify-between border-l-4 todo-card-container ${
          newTodo.priority === 1
            ? "border-l-red-500"
            : newTodo.priority === 2
            ? "border-l-yellow-500"
            : "border-l-green-500"
        }"
        data-todo-id=${newTodo.id}
        >
        <div>
          <label for=${newTodo.id} class="block relative flex items-center">
            <input
              type="checkbox"
              id=${newTodo.id}
              class="w-4 h-4 m-0 p-0 align-middle todo-status opacity-0 w-0 h-0 absolute peer"
              ${newTodo.completed === true ? "checked" : ""}
            />
            <span class="checkmark flex items-middle h-9 w-9 bg-gray-200 rounded-full peer-checked:bg-green-500 -top-1 right-9">
              <img src=${Check} alt="tick" width="20px" class="mx-auto checkmark-img 
              ${newTodo.completed ? "block" : "hidden"}"/>
            </span>
            <span class="todo-title pl-2">${newTodo.title}</span>
          </label>
        </div>
        <div class="flex">
          <p class="flex items-center todo-due-date">Due: ${newTodo.dueDate}</p>
          <button
            type="button"
            class="border-2 border-indigo-500 bg-indigo-500 hover:border-indigo-400 hover:bg-indigo-400 rounded-full px-2 py-2 mx-2 open-modal-btn todo-details-btn updateTodoModalBtn"
            id=${newTodo.id}
            data-project-id=${selectedProject.id}
            data-todo-id=${newTodo.id}
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
          
    `;
    todoContainer.appendChild(newTodoDivEl);

    // RESET INPUTS
    todoTitle.value = "";
    todoDescription.value = "";
    todoDueDate.value = "";
    todoPriority.value = "";
  }
};
