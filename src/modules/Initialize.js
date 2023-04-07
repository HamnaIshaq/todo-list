import Project from "./App-logic/Project";

import Logo from "../assets/images/homework.png";
import Calendar from "../assets/images/calendar-img.svg";
import Update from "../assets/images/update.svg";
import Delete from "../assets/images/delete.svg";
import Check from "../assets/images/check.svg";

// SHOW BASIC DOM ELEMENTS WITH AN EMPTY DEFAULT PROJECT NAMED 'INDEX'
export const Initialize = (function () {
  // CREATE A DEFAULT PROJECT CALLED INBOX
  const inbox = new Project("Inbox");
  inbox.active = true;

  const root = document.querySelector("#root");

  const divContainerContent = document.createElement("div");

  divContainerContent.classList.add("flex");

  divContainerContent.innerHTML = `
    <!--  SIDEBAR  -->
    <div class="w-1/4 h-screen bg-white border-r-2 border-slate-100">
      <h1 class="text-3xl mt-3 mb-3 text-indigo-800 flex py-2 px-5">
        <img src=${Logo} alt="" style="width:40px;"/>
        Todo List
      </h1>
      <ul class="project-container mr-5">
        <li class="mb-2">
          <button
            type="button"
            class="flex items-center border-indigo-500 bg-indigo-500 hover:bg-indigo-400 hover:border-indigo-400 w-full py-2 rounded-r-3xl text-white text-left pl-6 ml-0 project-btn"
            data-project-id=${inbox.id}
          >
            <img src=${Calendar} alt="" width="30px" class="mr-3"/>
            <span>${inbox.projectName}</span>
          </button>
        </li>
      </ul>
      <div class="py-2 px-5">
        <input type="text" id="new-project-title" class="block bg-white w-full border border-slate-300 rounded-md p-2 focus:outline-none focus:border-sky-500 focus:ring-1" placeholder="Project title..."/>
      </div>
      <button type="button" class="text-red-600 w-full text-left py-2 px-5 add-new-project-btn">
        <span class="text-lg">+</span> Add Project
      </button>
    </div>


    <!-- MAIN CONTENT -->
    <div class="w-screen bg-slate-100">
      <!-- TOP SECTION -->
      <div class="flex justify-between bg-white pt-4 pb-4 pl-5 pr-5">
        <h2 class="text-3xl text-indigo-800 selected-project-name">${
          inbox.projectName
        }</h2>
        <button type="button" class="addTodoModalBtn border-2 border-indigo-500 bg-indigo-500 hover:bg-indigo-400 hover:border-indigo-400 px-7 py-3 leading-5 rounded-3xl text-white text-white rounded open-modal-btn " id="addTodoModalBtn"
        >Add Todo</button>
      </div>

      <!-- ADD TODO MODAL -->  
      <div id="addTodoModal" class="addTodoModal fixed z-10 top-0 left-0 w-full h-full bg-stone-950/50 flex items-center overflow-y-scroll modal" style="display: none;">
        <div class="mx-auto lg:w-1/3 md:w-2/3 sm:w-full w-full pl-5 pr-5">
          <div class="bg-white rounded add-todo-input-container">
            <div class="text-2xl p-4 border-b-2 border-slate-150 flex justify-between items-center">
              <h3>Add Todo</h3>
              <button type="button" class="close text-3xl">&times;</button>
            </div>
            <div class="mt-2 mb-2 p-4">
              <form>
                <div>
                  <label for="title" class="block font-medium text-slate-700 mb-1">Title</label>
                  <input type="text" id="title" placeholder="Walk the dog" class="block bg-white w-full border border-slate-300 rounded-md p-2 focus:outline-none focus:border-sky-500 focus:ring-1 new-todo-title" />
                </div>
                <div class="mt-3">
                  <label for="description" class="block font-medium text-slate-700 mb-1">Description</label>
                  <textarea id="description" class="block bg-white w-full border border-slate-300 rounded-md p-2 focus:outline-none focus:border-sky-500 focus:ring-1 new-todo-description" placeholder="walk for about 30 min..."></textarea>
                </div>
                <div class="mt-3">
                  <label for="due-date" class="block font-medium text-slate-700 mb-1">Due Date</label>
                  <input type="date" id="due-date" class="block bg-white w-full border border-slate-300 rounded-md p-2 focus:outline-none focus:border-sky-500 focus:ring-1 new-todo-due-date"/>
                </div>
                <div class="mt-3">
                  <label for="priority" class="block font-medium text-slate-700 mb-1">Priority</label>
                  <select id="priority" class="block bg-white w-full border border-slate-300 rounded-md p-2 focus:outline-none focus:border-sky-500 focus:ring-1 new-todo-priority">
                    <option value="" selected disabled>Select Priority</option>
                    <option value="1">High</option>
                    <option value="2">Medium</option>
                    <option value="3">Low</option>
                  </select>
                </div>
              </form>
            </div>

            <div class="mt-3 p-4 text-right border-t-2 border-slate-150">
              <button type="button" class="modal-btn add-new-todo-btn bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-md text-white" data-project-id=${
                inbox.id
              }>
                Add
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- UPDATE TODO MODAL -->
      <div id="updateTodoModal" class="updateTodoModal fixed z-10 top-0 left-0 w-full h-full bg-stone-950/50 flex items-center overflow-y-scroll modal" style="display: none;">
          <div class="mx-auto lg:w-1/3 md:w-2/3 sm:w-full w-full pl-5 pr-5">
            <div class="bg-white rounded add-todo-input-container">
              <div class="text-2xl p-4 border-b-2 border-slate-150 flex justify-between">
                <h3>Todo Details</h3>
                <button type="button" class="close">&times;</button>
              </div>
              <div class="mt-2 mb-2 p-4">
                <form>
                  <div>
                    <label for="detail-title" class="block font-medium text-slate-700 mb-1">Title</label>
                    <input type="text" id="detail-title" placeholder="Walk the dog" class="block bg-white w-full border border-slate-300 rounded-md p-2 focus:outline-none focus:border-sky-500 focus:ring-1 detail-todo-title" />
                  </div>
                  <div class="mt-3">
                    <label for="detail-description" class="block font-medium text-slate-700 mb-1">Description</label>
                    <textarea id="detail-description" class="block bg-white w-full border border-slate-300 rounded-md p-2 focus:outline-none focus:border-sky-500 focus:ring-1 detail-todo-description" placeholder="walk for about 30 min..."></textarea>
                  </div>
                  <div class="mt-3">
                    <label for="detail-due-date" class="block font-medium text-slate-700 mb-1">Due Date</label>
                    <input type="date" id="detail-due-date" class="block bg-white w-full border border-slate-300 rounded-md p-2 focus:outline-none focus:border-sky-500 focus:ring-1 detail-todo-due-date"/>
                  </div>
                  <div class="mt-3">
                    <label for="detail-priority" class="block font-medium text-slate-700 mb-1">Priority</label>
                    <select id="detail-priority" class="block bg-white w-full border border-slate-300 rounded-md p-2 focus:outline-none focus:border-sky-500 focus:ring-1 detail-todo-priority">
                      <option value="" selected disabled>Select Priority</option>
                      <option value="1">High</option>
                      <option value="2">Medium</option>
                      <option value="3">Low</option>
                    </select>
                  </div>
                  <div class="mt-3">
                    <label for="detail-status" class="block font-medium text-slate-700 mb-1">Status</label>
                    <select id="detail-status" class="block bg-white w-full border border-slate-300 rounded-md p-2 focus:outline-none focus:border-sky-500 focus:ring-1 detail-todo-completed">
                      <option value="" selected disabled>Select Status</option>
                      <option value="1">Complete</option>
                      <option value="0">In-complete</option>
                      
                    </select>
                  </div>
                </form>
              </div>

              <div class="mt-3 p-4 text-right border-t-2 border-slate-150">
                <button type="button" class="modal-btn update-todo-btn bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-md text-white" data-project-id=${
                  inbox.id
                }>
                  Update
                </button>
              </div>
            </div>
        </div>
      </div>
      
      <!-- EMPTY PROJECT MESSAGE -->
      <div class="text-2xl text-indigo-800 pt-4 pb-4 pl-5 pr-5 empty-todos-container ${
        inbox.TodoList.length === 0 ? "block" : "hidden"
      }">
      <p>No todos here...</p>
      </div>

      <!-- TODOS CONTAINER --> 
      <div class="todo-container pt-4 pb-4 pl-5 pr-5">
        
        ${inbox.TodoList.map((todo) => {
          return `
          <div class="todo-card">
            <div
              class="bg-white rounded p-3 mb-3 text-lg flex items-center justify-between border-l-4 todo-card-container ${
                todo.priority === 1
                  ? "border-l-red-500"
                  : todo.priority === 2
                  ? "border-l-yellow-500"
                  : "border-l-green-500"
              }"
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
                  id="updateTodoModalBtn"
                  data-project-id=${inbox.id}
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
        }).join("")}
      </div>
    </div>
  `;

  root.appendChild(divContainerContent);

  return inbox;
})();
