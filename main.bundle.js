/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/App-logic/Project.js":
/*!******************************************!*\
  !*** ./src/modules/App-logic/Project.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");


// A BLUEPRINT TO CREATE NEW PROJECT WHICH HOSTS CREATED TODOS
class Project {
  constructor(projectName) {
    let id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    let active = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    let TodoList = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
    this._id = id ? id : (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])(); // UNIQUE ID FOR A PROJECT
    this._projectName = projectName;
    this._active = active;
    this._TodoList = TodoList;
  }
  get id() {
    return this._id;
  }
  get projectName() {
    return this._projectName;
  }
  set projectName(newProjectName) {
    this._projectName = newProjectName;
  }
  get active() {
    return this._active;
  }
  set active(newActive) {
    newActive ? this._active = true : this._active = false;
  }
  get TodoList() {
    return this._TodoList;
  }
  set TodoList(newTodo) {
    this._TodoList.push(newTodo);
  }
  addNewTodo(newTodo) {
    this._TodoList.push(newTodo);
  }
  getSingleTodo(id) {
    const [todo] = this._TodoList.filter(todo => {
      if (todo.id === id) {
        return todo;
      }
    });
    return todo;
  }
  updateProjectTodoCompleted(id) {
    const filteredArr = this._TodoList.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this._TodoList = filteredArr;
  }
  updateProjectTodo(id, title, description, dueDate, priority, completed) {
    this._TodoList.forEach(todo => {
      if (todo.id === id) {
        todo.title = title;
        todo.description = description;
        todo.dueDate = dueDate;
        todo.priority = priority;
        todo.completed = completed;
      }
    });
  }
  deleteProjectTodo(id) {
    const filteredArr = this._TodoList.filter(todo => {
      if (todo.id !== id) {
        return todo;
      }
    });
    this._TodoList = filteredArr;
  }
}
/* harmony default export */ __webpack_exports__["default"] = (Project);

/***/ }),

/***/ "./src/modules/App-logic/Todo.js":
/*!***************************************!*\
  !*** ./src/modules/App-logic/Todo.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
// A BLUEPRINT TO CREATE A NEW TODO

class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
    this.id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])();
  }
}
/* harmony default export */ __webpack_exports__["default"] = (Todo);

/***/ }),

/***/ "./src/modules/Initialize.js":
/*!***********************************!*\
  !*** ./src/modules/Initialize.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Initialize": function() { return /* binding */ Initialize; }
/* harmony export */ });
/* harmony import */ var _App_logic_Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App-logic/Project */ "./src/modules/App-logic/Project.js");
/* harmony import */ var _LocalStorage_GetData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LocalStorage/GetData */ "./src/modules/LocalStorage/GetData.js");
/* harmony import */ var _LocalStorage_AddData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LocalStorage/AddData */ "./src/modules/LocalStorage/AddData.js");
/* harmony import */ var _assets_images_homework_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/homework.png */ "./src/assets/images/homework.png");
/* harmony import */ var _assets_images_calendar_img_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/calendar-img.svg */ "./src/assets/images/calendar-img.svg");
/* harmony import */ var _assets_images_calendar_dark_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/images/calendar-dark.svg */ "./src/assets/images/calendar-dark.svg");
/* harmony import */ var _assets_images_update_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/images/update.svg */ "./src/assets/images/update.svg");
/* harmony import */ var _assets_images_delete_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/images/delete.svg */ "./src/assets/images/delete.svg");
/* harmony import */ var _assets_images_check_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/images/check.svg */ "./src/assets/images/check.svg");










/*
  INITIALIZE PROJECT
  GET ALL PROJECTS FROM LOCAL STORAGE
  IF LOCAL STORAGE IS EMPTY
  CREATE A DEFAULT PROJECT NAMED "INDEX" AND SET IT TO ACTIVE
  OTHERWISE GET ALL THE PROJECTS SAVED IN LOCAL STORAGE
  AND SHOW THE 1 THAT WAS LAST ACTIVE 
*/
const Initialize = function () {
  let allProjects = (0,_LocalStorage_GetData__WEBPACK_IMPORTED_MODULE_1__.GetData)("projects");
  if (!allProjects) {
    const inbox = new _App_logic_Project__WEBPACK_IMPORTED_MODULE_0__["default"]("Inbox");
    inbox.active = true;
    (0,_LocalStorage_AddData__WEBPACK_IMPORTED_MODULE_2__.AddData)([inbox]);
  }
  allProjects = (0,_LocalStorage_GetData__WEBPACK_IMPORTED_MODULE_1__.GetData)("projects");
  let activeProject;
  const newProjects = allProjects.map(project => {
    const proj = new _App_logic_Project__WEBPACK_IMPORTED_MODULE_0__["default"](project._projectName, project._id, project._active, project._TodoList);
    if (proj.active) {
      activeProject = proj;
    }
    return proj;
  });
  const root = document.querySelector("#root");
  const divContainerContent = document.createElement("div");
  divContainerContent.classList.add("flex");
  divContainerContent.innerHTML = `
    <!--  SIDEBAR  -->
    <div class="w-1/4 h-screen bg-white border-r-2 border-slate-100">
      <h1 class="text-3xl mt-3 mb-3 text-indigo-800 flex py-2 px-5">
        <img src=${_assets_images_homework_png__WEBPACK_IMPORTED_MODULE_3__} alt="" style="width:40px;"/>
        Todo List
      </h1>
      <ul class="project-container mr-5">
      ${newProjects.map(project => {
    return project._active ? `
          <li class="mb-2">
            <button
              type="button"
              class="flex items-center border-indigo-500 bg-indigo-500 hover:bg-indigo-400 hover:border-indigo-400 w-full py-2 rounded-r-3xl text-white text-left pl-6 ml-0 project-btn"
              data-project-id=${project.id}
            >
              <img src=${_assets_images_calendar_img_svg__WEBPACK_IMPORTED_MODULE_4__} alt="" width="30px" class="mr-3"/>
              <span>${project.projectName}</span>
            </button>
          </li>
          ` : `
            <li class="mb-2">
              <button 
                type="button" 
                class="flex items-center hover:bg-indigo-400 hover:border-indigo-400 ext-left pl-6 rounded-r-3xl w-full py-2 text-slate-900 project-btn" 
                data-project-id=${project.id}>
              <img src=${_assets_images_calendar_dark_svg__WEBPACK_IMPORTED_MODULE_5__} alt="" width="30px" class="mr-3"/>
              <span>${project.projectName}</span>
              </button>
            </li>
          `;
  }).join("")}
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
        <h2 class="text-3xl text-indigo-800 selected-project-name">
          ${activeProject.projectName}
        </h2>
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
              <button type="button" class="modal-btn add-new-todo-btn bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-md text-white" data-project-id=${activeProject.id}>
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
                <button type="button" class="modal-btn update-todo-btn bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-md text-white" data-project-id=${activeProject.id}>
                  Update
                </button>
              </div>
            </div>
        </div>
      </div>
      
      <!-- EMPTY PROJECT MESSAGE -->
      <div class="text-2xl text-indigo-800 pt-4 pb-4 pl-5 pr-5 empty-todos-container ${activeProject.TodoList.length === 0 ? "block" : "hidden"}">
      <p>No todos here...</p>
      </div>

      <!-- TODOS CONTAINER --> 
      <div class="todo-container pt-4 pb-4 pl-5 pr-5">
        
        ${activeProject.TodoList.map(todo => {
    return `
          <div class="todo-card">
            <div
              class="bg-white rounded p-3 mb-3 text-lg flex items-center justify-between border-l-4 todo-card-container ${todo.priority === 1 ? "border-l-red-500" : todo.priority === 2 ? "border-l-yellow-500" : "border-l-green-500"}"
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
                    <img src=${_assets_images_check_svg__WEBPACK_IMPORTED_MODULE_8__} alt="tick" width="20px" class="mx-auto checkmark-img ${todo.completed ? "block" : "hidden"}"/>
                  </span>
                  <span class="todo-title pl-2">${todo.title}</span>
                </label>
              </div>
              <div class="flex">
                <p class="flex items-center todo-due-date">Due: ${todo.dueDate}</p>
                <button
                  type="button"
                  class="border-2 border-indigo-500 bg-indigo-500 hover:border-indigo-400 hover:bg-indigo-400 rounded-full px-2 py-2 mx-2 open-modal-btn todo-details-btn updateTodoModalBtn"
                  id="updateTodoModalBtn"
                  data-project-id=${activeProject.id}
                  data-todo-id=${todo.id}
                >
                  <img src=${_assets_images_update_svg__WEBPACK_IMPORTED_MODULE_6__} alt="update" width="20px" class="todo-details-btn"/>
                </button>
                <button
                  type="button"
                  class="border-2 border-red-500 px-2 bg-red-500 hover:bg-red-400 hover:border-red-400 text-white rounded-full delete-todo-btn"
                >
                <img src=${_assets_images_delete_svg__WEBPACK_IMPORTED_MODULE_7__} alt="delete" width="20px" class="delete-todo-btn" />
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
  return newProjects;
}();

/***/ }),

/***/ "./src/modules/LocalStorage/AddData.js":
/*!*********************************************!*\
  !*** ./src/modules/LocalStorage/AddData.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddData": function() { return /* binding */ AddData; }
/* harmony export */ });
const AddData = data => {
  localStorage.setItem("projects", JSON.stringify(data));
};

/***/ }),

/***/ "./src/modules/LocalStorage/GetData.js":
/*!*********************************************!*\
  !*** ./src/modules/LocalStorage/GetData.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetData": function() { return /* binding */ GetData; }
/* harmony export */ });
const GetData = key => {
  const data = localStorage.getItem(key);
  if (!data) {
    return localStorage.setItem(key, "[]");
  } else {
    return JSON.parse(localStorage.getItem(key));
  }
};

/***/ }),

/***/ "./src/modules/UI/AddProject.js":
/*!**************************************!*\
  !*** ./src/modules/UI/AddProject.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddProject": function() { return /* binding */ AddProject; }
/* harmony export */ });
/* harmony import */ var _App_logic_Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../App-logic/Project */ "./src/modules/App-logic/Project.js");
/* harmony import */ var _LocalStorage_AddData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../LocalStorage/AddData */ "./src/modules/LocalStorage/AddData.js");
/* harmony import */ var _assets_images_calendar_dark_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/calendar-dark.svg */ "./src/assets/images/calendar-dark.svg");




/*
  ADD PROJECT LOGIC

  CHECK IF PROJECT NAME IS EMPTY
  IF EMPTY, ASK FOR USER INPUT AGAIN

  IF PROJECT NAME IS NOT EMPTY,
  CREATE A NEW PROJECT WITH EMPTY TODOS
*/
const AddProject = (root, allProject) => {
  const addNewProjectBtn = root.querySelector(".add-new-project-btn");
  const newProjectTitle = root.querySelector("#new-project-title");
  const projectContainer = root.querySelector(".project-container");
  addNewProjectBtn.addEventListener("click", onClickAddNewProjectBtn);
  function onClickAddNewProjectBtn() {
    if (newProjectTitle.value === "") {
      alert("Project title is empty!");
    } else {
      const newProject = new _App_logic_Project__WEBPACK_IMPORTED_MODULE_0__["default"](newProjectTitle.value);
      allProject.push(newProject);
      (0,_LocalStorage_AddData__WEBPACK_IMPORTED_MODULE_1__.AddData)(allProject);
      const divEl = document.createElement("li");
      divEl.classList.add("mb-2");
      divEl.innerHTML = `
        <button type="button" class="flex items-center hover:bg-indigo-400 hover:border-indigo-400 ext-left pl-6 rounded-r-3xl w-full py-2 text-slate-900 project-btn" data-project-id=${newProject.id}>
          <img src=${_assets_images_calendar_dark_svg__WEBPACK_IMPORTED_MODULE_2__} alt="" width="30px" class="mr-3"/>
          <span>${newProjectTitle.value}</span>
        </button>
      `;
      projectContainer.appendChild(divEl);

      // RESET INPUT VALUE
      newProjectTitle.value = "";
    }
  }
};

/***/ }),

/***/ "./src/modules/UI/AddTodo.js":
/*!***********************************!*\
  !*** ./src/modules/UI/AddTodo.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddTodo": function() { return /* binding */ AddTodo; }
/* harmony export */ });
/* harmony import */ var _App_logic_Todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../App-logic/Todo */ "./src/modules/App-logic/Todo.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal */ "./src/modules/UI/Modal.js");
/* harmony import */ var _LocalStorage_AddData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../LocalStorage/AddData */ "./src/modules/LocalStorage/AddData.js");
/* harmony import */ var _assets_images_update_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/images/update.svg */ "./src/assets/images/update.svg");
/* harmony import */ var _assets_images_delete_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/images/delete.svg */ "./src/assets/images/delete.svg");
/* harmony import */ var _assets_images_check_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/images/check.svg */ "./src/assets/images/check.svg");







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

const AddTodo = (root, allProjects) => {
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
      const newTodo = new _App_logic_Todo__WEBPACK_IMPORTED_MODULE_0__["default"](todoTitle.value, todoDescription.value, todoDueDate.value, parseInt(todoPriority.value));
      allProjects.forEach(project => {
        if (project.active === true) {
          selectedProject = project;
        }
      });
      selectedProject.addNewTodo(newTodo);
      (0,_LocalStorage_AddData__WEBPACK_IMPORTED_MODULE_2__.AddData)(allProjects);
      addNewTodoToUI(newTodo);
      (0,_Modal__WEBPACK_IMPORTED_MODULE_1__.RemoveModalListeners)("updateTodoModal", "updateTodoModalBtn");
      (0,_Modal__WEBPACK_IMPORTED_MODULE_1__.OpenCloseModal)("updateTodoModal", "updateTodoModalBtn");
      (0,_Modal__WEBPACK_IMPORTED_MODULE_1__.CloseModalWithBtn)("modal-btn");
    }
  }
  function addNewTodoToUI(newTodo) {
    const newTodoDivEl = document.createElement("div");
    newTodoDivEl.classList.add("todo-card");
    emptyTodoMessage.classList.add("hidden");
    newTodoDivEl.innerHTML = `
      <div
        class="bg-white rounded p-3 mb-3 text-lg flex items-center justify-between border-l-4 todo-card-container ${newTodo.priority === 1 ? "border-l-red-500" : newTodo.priority === 2 ? "border-l-yellow-500" : "border-l-green-500"}"
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
              <img src=${_assets_images_check_svg__WEBPACK_IMPORTED_MODULE_5__} alt="tick" width="20px" class="mx-auto checkmark-img 
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
            <img src=${_assets_images_update_svg__WEBPACK_IMPORTED_MODULE_3__} alt="update" width="20px" class="todo-details-btn"/>
          </button>
          <button
            type="button"
            class="border-2 border-red-500 px-2 bg-red-500 hover:bg-red-400 hover:border-red-400 text-white rounded-full delete-todo-btn"
          >
          <img src=${_assets_images_delete_svg__WEBPACK_IMPORTED_MODULE_4__} alt="delete" width="20px" class="delete-todo-btn" />
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

/***/ }),

/***/ "./src/modules/UI/DeleteTodo.js":
/*!**************************************!*\
  !*** ./src/modules/UI/DeleteTodo.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteTodo": function() { return /* binding */ DeleteTodo; }
/* harmony export */ });
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal */ "./src/modules/UI/Modal.js");
/* harmony import */ var _LocalStorage_AddData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../LocalStorage/AddData */ "./src/modules/LocalStorage/AddData.js");



/*
  DELETE TODO LOGIC

  ON CLICKING DELETE BTN
  DELETE THE CLICKED TODO FROM SELECTED PROJECT
  REMOVE PREVIOUS EVENT LISTENERS FOR ALL UPDATE TODO BTNS AND MODAL
  ADD EVENT LISTENERS FOR ALL UPDATE TODO BTNS AND MODAL
  DELETE TODO ON THE DOM
*/

const DeleteTodo = (root, allProjects) => {
  const todoContainer = root.querySelector(".todo-container");
  const emptyTodoMessage = root.querySelector(".empty-todos-container");
  todoContainer.addEventListener("click", e => onClickDeleteTodoBtn(e));
  function onClickDeleteTodoBtn(e) {
    if (e.target.classList.contains("delete-todo-btn")) {
      let clickedTodoCard;
      e.target.tagName.toLowerCase() === "img" ? clickedTodoCard = e.target.parentElement.parentElement.parentElement : clickedTodoCard = e.target.parentElement.parentElement;
      const projectId = clickedTodoCard.getAttribute("data-todo-id");
      clickedTodoCard.parentElement.remove();
      if (todoContainer.children.length === 0) {
        emptyTodoMessage.classList.remove("hidden");
        emptyTodoMessage.classList.add("block");
      }
      let selectedProject;
      allProjects.forEach(project => {
        if (project.active === true) {
          selectedProject = project;
        }
      });
      selectedProject.deleteProjectTodo(projectId);
      (0,_LocalStorage_AddData__WEBPACK_IMPORTED_MODULE_1__.AddData)(allProjects);
      (0,_Modal__WEBPACK_IMPORTED_MODULE_0__.RemoveModalListeners)("updateTodoModal", "updateTodoModalBtn");
      (0,_Modal__WEBPACK_IMPORTED_MODULE_0__.OpenCloseModal)("updateTodoModal", "updateTodoModalBtn");
    }
  }
};

/***/ }),

/***/ "./src/modules/UI/Modal.js":
/*!*********************************!*\
  !*** ./src/modules/UI/Modal.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttachOpenCloseModal": function() { return /* binding */ AttachOpenCloseModal; },
/* harmony export */   "CloseModalWithBtn": function() { return /* binding */ CloseModalWithBtn; },
/* harmony export */   "CloseModalWithCrossBtn": function() { return /* binding */ CloseModalWithCrossBtn; },
/* harmony export */   "OpenCloseModal": function() { return /* binding */ OpenCloseModal; },
/* harmony export */   "RemoveModalListeners": function() { return /* binding */ RemoveModalListeners; }
/* harmony export */ });
// EVENT LISTENERS TO OPEN/ CLOSE MODALS

const OpenCloseModal = (modalClass, btnClass) => {
  document.querySelectorAll(`.${modalClass}`).forEach(item => item.addEventListener("click", e => CloseModal(e)));
  document.querySelectorAll(`.${btnClass}`).forEach(item => item.addEventListener("click", () => OpenModal(modalClass)));
};
const RemoveModalListeners = (modalClass, btnClass) => {
  document.querySelectorAll(`.${modalClass}`).forEach(item => item.removeEventListener("click", e => CloseModal(e)));
  document.querySelectorAll(`.${btnClass}`).forEach(item => item.removeEventListener("click", () => OpenModal(modalClass)));
};
const AttachOpenCloseModal = todoId => {
  document.getElementById(`${todoId}updateTodo`).addEventListener("click", () => {
    document.querySelector("#updateTodoModal").style.display = "flex";
  });
};
const CloseModal = event => {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
  }
};
const OpenModal = modalClass => {
  document.querySelector(`.${modalClass}`).style.display = "flex";
};
const CloseModalWithBtn = btnClass => {
  document.querySelectorAll(`.${btnClass}`).forEach(closeBtn => {
    closeBtn.closest(".modal").style.display = "none";
  });
};
const CloseModalWithCrossBtn = btnClass => {
  document.querySelectorAll(`.${btnClass}`).forEach(closeBtn => {
    closeBtn.addEventListener("click", () => {
      closeBtn.closest(".modal").style.display = "none";
    });
  });
};

/***/ }),

/***/ "./src/modules/UI/RenderSelectedProjectName.js":
/*!*****************************************************!*\
  !*** ./src/modules/UI/RenderSelectedProjectName.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RenderSelectedProjectName": function() { return /* binding */ RenderSelectedProjectName; }
/* harmony export */ });
const RenderSelectedProjectName = (root, projectName) => {
  const projectNameEl = root.querySelector(".selected-project-name");
  projectNameEl.textContent = projectName;
};

/***/ }),

/***/ "./src/modules/UI/RenderSelectedProjectTodos.js":
/*!******************************************************!*\
  !*** ./src/modules/UI/RenderSelectedProjectTodos.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RenderSelectedProjectTodos": function() { return /* binding */ RenderSelectedProjectTodos; }
/* harmony export */ });
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal */ "./src/modules/UI/Modal.js");
/* harmony import */ var _assets_images_update_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/update.svg */ "./src/assets/images/update.svg");
/* harmony import */ var _assets_images_delete_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/delete.svg */ "./src/assets/images/delete.svg");
/* harmony import */ var _assets_images_check_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/images/check.svg */ "./src/assets/images/check.svg");





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
const RenderSelectedProjectTodos = (root, project) => {
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
  projectContainer.innerHTML += project.TodoList.map(todo => {
    return `
    <div class="todo-card">
          <div
            class="bg-white rounded p-3 mb-3 text-lg flex items-center justify-between border-l-4 todo-card-container ${todo.priority === 1 ? "border-l-red-500" : todo.priority === 2 ? "border-l-yellow-500" : "border-l-green-500"}"
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
                  <img src=${_assets_images_check_svg__WEBPACK_IMPORTED_MODULE_3__} alt="tick" width="20px" class="mx-auto checkmark-img ${todo.completed ? "block" : "hidden"}"/>
                </span>
                <span class="todo-title pl-2">${todo.title}</span>
              </label>
            </div>
            <div class="flex">
              <p class="flex items-center todo-due-date">Due: ${todo.dueDate}</p>
              <button
                type="button"
                class="border-2 border-indigo-500 bg-indigo-500 hover:border-indigo-400 hover:bg-indigo-400 rounded-full px-2 py-2 mx-2 open-modal-btn todo-details-btn updateTodoModalBtn"
                id=${todo.id}
                data-project-id=${project.id}
                data-todo-id=${todo.id}
              >
                <img src=${_assets_images_update_svg__WEBPACK_IMPORTED_MODULE_1__} alt="update" width="20px" class="todo-details-btn"/>
              </button>
              <button
                type="button"
                class="border-2 border-red-500 px-2 bg-red-500 hover:bg-red-400 hover:border-red-400 text-white rounded-full delete-todo-btn"
              >
               <img src=${_assets_images_delete_svg__WEBPACK_IMPORTED_MODULE_2__} alt="delete" width="20px" class="delete-todo-btn" />
              </button>
            </div>
          </div>
        </div>
    `;
  }).join("");
  (0,_Modal__WEBPACK_IMPORTED_MODULE_0__.RemoveModalListeners)("updateTodoModal", "updateTodoModalBtn");
  (0,_Modal__WEBPACK_IMPORTED_MODULE_0__.OpenCloseModal)("updateTodoModal", "updateTodoModalBtn");
  (0,_Modal__WEBPACK_IMPORTED_MODULE_0__.CloseModalWithBtn)("modal-btn");
};

/***/ }),

/***/ "./src/modules/UI/SelectProject.js":
/*!*****************************************!*\
  !*** ./src/modules/UI/SelectProject.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectProject": function() { return /* binding */ SelectProject; }
/* harmony export */ });
/* harmony import */ var _RenderSelectedProjectName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RenderSelectedProjectName */ "./src/modules/UI/RenderSelectedProjectName.js");
/* harmony import */ var _RenderSelectedProjectTodos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RenderSelectedProjectTodos */ "./src/modules/UI/RenderSelectedProjectTodos.js");
/* harmony import */ var _assets_images_calendar_dark_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/calendar-dark.svg */ "./src/assets/images/calendar-dark.svg");
/* harmony import */ var _assets_images_calendar_img_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/images/calendar-img.svg */ "./src/assets/images/calendar-img.svg");




const SelectProject = (root, allProject) => {
  const projectContainer = root.querySelector(".project-container");
  projectContainer.addEventListener("click", e => onClickProject(e));
  function onClickProject(e) {
    if (e.target.getAttribute("data-project-id")) {
      const projectBtns = projectContainer.querySelectorAll(".project-btn");
      projectBtns.forEach(btn => {
        btn.classList.remove("bg-indigo-500");
        btn.classList.remove("border-indigo-500");
        btn.classList.remove("text-white");
        btn.classList.add("text-slate-900");
        btn.classList.add("border-white");
        const img = btn.children[0];
        img.src = _assets_images_calendar_dark_svg__WEBPACK_IMPORTED_MODULE_2__;
      });
      e.target.classList.add("bg-indigo-500");
      e.target.classList.add("border-indigo-500");
      e.target.classList.add("text-white");
      e.target.classList.remove("text-slate-900");
      e.target.children[0].src = _assets_images_calendar_img_svg__WEBPACK_IMPORTED_MODULE_3__;
      allProject.forEach(project => {
        project.active = false;
        if (e.target.getAttribute("data-project-id") === project.id) {
          project.active = true;
          (0,_RenderSelectedProjectName__WEBPACK_IMPORTED_MODULE_0__.RenderSelectedProjectName)(root, project.projectName);
          (0,_RenderSelectedProjectTodos__WEBPACK_IMPORTED_MODULE_1__.RenderSelectedProjectTodos)(root, project);
        }
      });
    }
  }
};

/***/ }),

/***/ "./src/modules/UI/TodoDetails.js":
/*!***************************************!*\
  !*** ./src/modules/UI/TodoDetails.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodoDetails": function() { return /* binding */ TodoDetails; }
/* harmony export */ });
/* harmony import */ var _UpdateTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UpdateTodo */ "./src/modules/UI/UpdateTodo.js");

/*
  TODO DETAILS LOGIC

  TODO DETAILS
  WHEN EDIT BUTTON IS CLICKED,
  SHOW DETAILS OF CLICKED TODO IN A MODAL
  IF UPDATE BUTTON IS CLICKED
  UPDATE TODO MODULE IS CALLED

*/
const TodoDetails = allProjects => {
  const todoContainer = document.querySelector(".todo-container");
  const todoTitle = document.querySelector(".detail-todo-title");
  const todoDescription = document.querySelector(".detail-todo-description");
  const todoDueDate = document.querySelector(".detail-todo-due-date");
  const todoPriority = document.querySelector(".detail-todo-priority");
  const todoCompleted = document.querySelector(".detail-todo-completed");
  const updateTodoBtn = document.querySelector(".update-todo-btn");
  todoContainer.addEventListener("click", e => onClickTodoDetailsBtn(e));
  let clickedTodoCard, todoId, selectedProject;
  function onClickTodoDetailsBtn(e) {
    if (e.target.classList.contains("todo-details-btn")) {
      e.target.tagName.toLowerCase() === "img" ? clickedTodoCard = e.target.parentElement.parentElement.parentElement : clickedTodoCard = e.target.parentElement.parentElement;
      todoId = clickedTodoCard.getAttribute("data-todo-id");
      allProjects.forEach(project => {
        if (project.active === true) {
          selectedProject = project;
        }
      });
      const details = selectedProject.getSingleTodo(todoId);
      todoTitle.value = details.title;
      todoDescription.value = details.description;
      todoDueDate.value = details.dueDate;
      todoPriority.value = details.priority;
      todoCompleted.value = details.completed ? "1" : "0";
      (0,_UpdateTodo__WEBPACK_IMPORTED_MODULE_0__.UpdateTodo)(clickedTodoCard, todoId, selectedProject, allProjects);
    }
  }
};

/***/ }),

/***/ "./src/modules/UI/TodoStatus.js":
/*!**************************************!*\
  !*** ./src/modules/UI/TodoStatus.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodoStatus": function() { return /* binding */ TodoStatus; }
/* harmony export */ });
/*
  UPDATE STATUS OF TODO LOGIC

  WHEN TODO TITLE/ CHECKBOX IS CLICKED
  CHANGE THE STATUS OF TODO TO COMPLETED/IN COMPLETE
  DEPENDING ON THE PREVIOUS STATE
*/
const TodoStatus = (root, allProjects) => {
  const todoContainer = root.querySelector(".todo-container");
  todoContainer.addEventListener("click", e => changeTodoStatus(e));
  function changeTodoStatus(e) {
    if (e.target.classList.contains("todo-status")) {
      let selectedProject;
      const todoId = e.target.parentElement.parentElement.parentElement.getAttribute("data-todo-id");
      allProjects.forEach(project => {
        if (project.active === true) {
          selectedProject = project;
        }
      });
      selectedProject.updateProjectTodoCompleted(todoId);
      const checkmarkImg = e.target.parentElement.querySelector(".checkmark-img");
      if (e.target.checked) {
        checkmarkImg.classList.remove("hidden");
        checkmarkImg.classList.add("block");
      } else {
        checkmarkImg.classList.remove("block");
        checkmarkImg.classList.add("hidden");
      }
    }
  }
};

/***/ }),

/***/ "./src/modules/UI/UpdateTodo.js":
/*!**************************************!*\
  !*** ./src/modules/UI/UpdateTodo.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateTodo": function() { return /* binding */ UpdateTodo; }
/* harmony export */ });
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal */ "./src/modules/UI/Modal.js");
/* harmony import */ var _LocalStorage_AddData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../LocalStorage/AddData */ "./src/modules/LocalStorage/AddData.js");



/*
  TODO UPDATE LOGIC

  WHEN UPDATE BUTTON IS CLICKED IN THE MODAL
  UPDATE THE TODO WITH THE NEWLY ENTERED DATA
  AND CLOSE THE MODAL
*/
const UpdateTodo = (clickedTodoCard, todoId, selectedProject, allProjects) => {
  const todoTitle = document.querySelector(".detail-todo-title");
  const todoDescription = document.querySelector(".detail-todo-description");
  const todoDueDate = document.querySelector(".detail-todo-due-date");
  const todoPriority = document.querySelector(".detail-todo-priority");
  const todoCompleted = document.querySelector(".detail-todo-completed");
  const updateTodoBtn = document.querySelector(".update-todo-btn");
  updateTodoBtn.addEventListener("click", updateTodo);
  function updateTodo() {
    selectedProject.updateProjectTodo(todoId, todoTitle.value, todoDescription.value, todoDueDate.value, parseInt(todoPriority.value), todoCompleted.value === "1" ? true : false);
    const todo = selectedProject.getSingleTodo(todoId);
    const todoPriorityEl = clickedTodoCard;
    const todoTitleEl = clickedTodoCard.querySelector(".todo-title");
    const todoInput = clickedTodoCard.querySelector(".todo-status");
    const tickImg = clickedTodoCard.querySelector(".checkmark-img");
    const todoDueDateEl = clickedTodoCard.querySelector(".todo-due-date");
    todoTitleEl.textContent = todo.title;
    if (todo.priority === 1) {
      todoPriorityEl.classList.add("border-l-red-500");
      todoPriorityEl.classList.remove("border-l-yellow-500");
      todoPriorityEl.classList.remove("border-l-green-500");
    } else if (todo.priority === 2) {
      todoPriorityEl.classList.remove("border-l-red-500");
      todoPriorityEl.classList.add("border-l-yellow-500");
      todoPriorityEl.classList.remove("border-l-green-500");
    } else {
      todoPriorityEl.classList.remove("border-l-red-500");
      todoPriorityEl.classList.remove("border-l-yellow-500");
      todoPriorityEl.classList.add("border-l-green-500");
    }
    todoInput.checked = todo.completed;
    if (todo.completed) {
      tickImg.classList.remove("hidden");
      tickImg.classList.add("block");
    } else {
      tickImg.classList.remove("block");
      tickImg.classList.add("hidden");
    }
    todoDueDateEl.textContent = `Due: ${todo.dueDate}`;
    (0,_Modal__WEBPACK_IMPORTED_MODULE_0__.CloseModalWithBtn)("modal-btn");
    (0,_LocalStorage_AddData__WEBPACK_IMPORTED_MODULE_1__.AddData)(allProjects);
  }
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/assets/styles/style.css":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/assets/styles/style.css ***!
  \*********************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n! tailwindcss v3.3.0 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n6. Use the user's configured `sans` font-variation-settings by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n  -webkit-font-feature-settings: normal;\n          font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  text-decoration: underline;\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-webkit-input-placeholder, textarea::-webkit-input-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::-ms-input-placeholder, textarea::-ms-input-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::-webkit-backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\r\n.fixed {\n  position: fixed;\n}\r\n.absolute {\n  position: absolute;\n}\r\n.relative {\n  position: relative;\n}\r\n.-top-1 {\n  top: -0.25rem;\n}\r\n.left-0 {\n  left: 0px;\n}\r\n.right-9 {\n  right: 2.25rem;\n}\r\n.top-0 {\n  top: 0px;\n}\r\n.z-10 {\n  z-index: 10;\n}\r\n.m-0 {\n  margin: 0px;\n}\r\n.mx-2 {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\r\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\r\n.mb-1 {\n  margin-bottom: 0.25rem;\n}\r\n.mb-2 {\n  margin-bottom: 0.5rem;\n}\r\n.mb-3 {\n  margin-bottom: 0.75rem;\n}\r\n.ml-0 {\n  margin-left: 0px;\n}\r\n.mr-3 {\n  margin-right: 0.75rem;\n}\r\n.mr-5 {\n  margin-right: 1.25rem;\n}\r\n.mt-2 {\n  margin-top: 0.5rem;\n}\r\n.mt-3 {\n  margin-top: 0.75rem;\n}\r\n.block {\n  display: block;\n}\r\n.flex {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\r\n.hidden {\n  display: none;\n}\r\n.h-0 {\n  height: 0px;\n}\r\n.h-4 {\n  height: 1rem;\n}\r\n.h-9 {\n  height: 2.25rem;\n}\r\n.h-full {\n  height: 100%;\n}\r\n.h-screen {\n  height: 100vh;\n}\r\n.w-0 {\n  width: 0px;\n}\r\n.w-1\\/4 {\n  width: 25%;\n}\r\n.w-4 {\n  width: 1rem;\n}\r\n.w-9 {\n  width: 2.25rem;\n}\r\n.w-full {\n  width: 100%;\n}\r\n.w-screen {\n  width: 100vw;\n}\r\n.items-center {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\r\n.justify-between {\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\r\n.overflow-y-scroll {\n  overflow-y: scroll;\n}\r\n.rounded {\n  border-radius: 0.25rem;\n}\r\n.rounded-3xl {\n  border-radius: 1.5rem;\n}\r\n.rounded-full {\n  border-radius: 9999px;\n}\r\n.rounded-md {\n  border-radius: 0.375rem;\n}\r\n.rounded-r-3xl {\n  border-top-right-radius: 1.5rem;\n  border-bottom-right-radius: 1.5rem;\n}\r\n.border {\n  border-width: 1px;\n}\r\n.border-2 {\n  border-width: 2px;\n}\r\n.border-b-2 {\n  border-bottom-width: 2px;\n}\r\n.border-l-4 {\n  border-left-width: 4px;\n}\r\n.border-r-2 {\n  border-right-width: 2px;\n}\r\n.border-t-2 {\n  border-top-width: 2px;\n}\r\n.border-indigo-500 {\n  --tw-border-opacity: 1;\n  border-color: rgba(99, 102, 241, 1);\n  border-color: rgb(99 102 241 / var(--tw-border-opacity));\n}\r\n.border-red-500 {\n  --tw-border-opacity: 1;\n  border-color: rgba(239, 68, 68, 1);\n  border-color: rgb(239 68 68 / var(--tw-border-opacity));\n}\r\n.border-slate-100 {\n  --tw-border-opacity: 1;\n  border-color: rgba(241, 245, 249, 1);\n  border-color: rgb(241 245 249 / var(--tw-border-opacity));\n}\r\n.border-slate-300 {\n  --tw-border-opacity: 1;\n  border-color: rgba(203, 213, 225, 1);\n  border-color: rgb(203 213 225 / var(--tw-border-opacity));\n}\r\n.border-white {\n  --tw-border-opacity: 1;\n  border-color: rgba(255, 255, 255, 1);\n  border-color: rgb(255 255 255 / var(--tw-border-opacity));\n}\r\n.border-l-green-500 {\n  --tw-border-opacity: 1;\n  border-left-color: rgba(34, 197, 94, 1);\n  border-left-color: rgb(34 197 94 / var(--tw-border-opacity));\n}\r\n.border-l-red-500 {\n  --tw-border-opacity: 1;\n  border-left-color: rgba(239, 68, 68, 1);\n  border-left-color: rgb(239 68 68 / var(--tw-border-opacity));\n}\r\n.border-l-yellow-500 {\n  --tw-border-opacity: 1;\n  border-left-color: rgba(234, 179, 8, 1);\n  border-left-color: rgb(234 179 8 / var(--tw-border-opacity));\n}\r\n.bg-gray-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(229, 231, 235, 1);\n  background-color: rgb(229 231 235 / var(--tw-bg-opacity));\n}\r\n.bg-indigo-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(99, 102, 241, 1);\n  background-color: rgb(99 102 241 / var(--tw-bg-opacity));\n}\r\n.bg-red-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(239, 68, 68, 1);\n  background-color: rgb(239 68 68 / var(--tw-bg-opacity));\n}\r\n.bg-sky-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(14, 165, 233, 1);\n  background-color: rgb(14 165 233 / var(--tw-bg-opacity));\n}\r\n.bg-slate-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(241, 245, 249, 1);\n  background-color: rgb(241 245 249 / var(--tw-bg-opacity));\n}\r\n.bg-stone-950\\/50 {\n  background-color: rgba(12, 10, 9, 0.5);\n}\r\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgba(255, 255, 255, 1);\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\r\n.p-0 {\n  padding: 0px;\n}\r\n.p-2 {\n  padding: 0.5rem;\n}\r\n.p-3 {\n  padding: 0.75rem;\n}\r\n.p-4 {\n  padding: 1rem;\n}\r\n.px-2 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\r\n.px-5 {\n  padding-left: 1.25rem;\n  padding-right: 1.25rem;\n}\r\n.px-7 {\n  padding-left: 1.75rem;\n  padding-right: 1.75rem;\n}\r\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\r\n.py-2\\.5 {\n  padding-top: 0.625rem;\n  padding-bottom: 0.625rem;\n}\r\n.py-3 {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\r\n.pb-4 {\n  padding-bottom: 1rem;\n}\r\n.pl-2 {\n  padding-left: 0.5rem;\n}\r\n.pl-5 {\n  padding-left: 1.25rem;\n}\r\n.pl-6 {\n  padding-left: 1.5rem;\n}\r\n.pr-5 {\n  padding-right: 1.25rem;\n}\r\n.pt-4 {\n  padding-top: 1rem;\n}\r\n.text-left {\n  text-align: left;\n}\r\n.text-right {\n  text-align: right;\n}\r\n.align-middle {\n  vertical-align: middle;\n}\r\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\r\n.text-3xl {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\r\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\r\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\r\n.font-medium {\n  font-weight: 500;\n}\r\n.leading-5 {\n  line-height: 1.25rem;\n}\r\n.text-indigo-800 {\n  --tw-text-opacity: 1;\n  color: rgba(55, 48, 163, 1);\n  color: rgb(55 48 163 / var(--tw-text-opacity));\n}\r\n.text-red-600 {\n  --tw-text-opacity: 1;\n  color: rgba(220, 38, 38, 1);\n  color: rgb(220 38 38 / var(--tw-text-opacity));\n}\r\n.text-slate-700 {\n  --tw-text-opacity: 1;\n  color: rgba(51, 65, 85, 1);\n  color: rgb(51 65 85 / var(--tw-text-opacity));\n}\r\n.text-slate-900 {\n  --tw-text-opacity: 1;\n  color: rgba(15, 23, 42, 1);\n  color: rgb(15 23 42 / var(--tw-text-opacity));\n}\r\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, 1);\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\r\n.opacity-0 {\n  opacity: 0;\n}\r\n.filter {\n  -webkit-filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n          filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\r\n.hover\\:border-indigo-400:hover {\n  --tw-border-opacity: 1;\n  border-color: rgba(129, 140, 248, 1);\n  border-color: rgb(129 140 248 / var(--tw-border-opacity));\n}\r\n.hover\\:border-red-400:hover {\n  --tw-border-opacity: 1;\n  border-color: rgba(248, 113, 113, 1);\n  border-color: rgb(248 113 113 / var(--tw-border-opacity));\n}\r\n.hover\\:bg-indigo-400:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgba(129, 140, 248, 1);\n  background-color: rgb(129 140 248 / var(--tw-bg-opacity));\n}\r\n.hover\\:bg-red-400:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgba(248, 113, 113, 1);\n  background-color: rgb(248 113 113 / var(--tw-bg-opacity));\n}\r\n.hover\\:bg-sky-700:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgba(3, 105, 161, 1);\n  background-color: rgb(3 105 161 / var(--tw-bg-opacity));\n}\r\n.focus\\:border-sky-500:focus {\n  --tw-border-opacity: 1;\n  border-color: rgba(14, 165, 233, 1);\n  border-color: rgb(14 165 233 / var(--tw-border-opacity));\n}\r\n.focus\\:outline-none:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\r\n.focus\\:ring-1:focus {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  -webkit-box-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color), 0 0 rgba(0,0,0,0);\n          box-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color), 0 0 rgba(0,0,0,0);\n  -webkit-box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n          box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\r\n.peer:checked ~ .peer-checked\\:bg-green-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(34, 197, 94, 1);\n  background-color: rgb(34 197 94 / var(--tw-bg-opacity));\n}\r\n@media (min-width: 640px) {\n\n  .sm\\:w-full {\n    width: 100%;\n  }\n}\r\n@media (min-width: 768px) {\n\n  .md\\:w-2\\/3 {\n    width: 66.666667%;\n  }\n}\r\n@media (min-width: 1024px) {\n\n  .lg\\:w-1\\/3 {\n    width: 33.333333%;\n  }\n}\r\n", "",{"version":3,"sources":["webpack://./src/assets/styles/style.css","<no source>"],"names":[],"mappings":"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","sourcesContent":["@tailwind base;\r\n@tailwind components;\r\n@tailwind utilities;\r\n",null],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ (function(module) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ (function(module) {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/styles/style.css":
/*!*************************************!*\
  !*** ./src/assets/styles/style.css ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/assets/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ (function(module) {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ (function(module) {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ (function(module) {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ (function(module) {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ (function(module) {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ __webpack_exports__["default"] = ({
  randomUUID
});

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ rng; }
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "unsafeStringify": function() { return /* binding */ unsafeStringify; }
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ __webpack_exports__["default"] = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/esm-browser/native.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");




function v4(options, buf, offset) {
  if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
    return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}

/* harmony default export */ __webpack_exports__["default"] = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ __webpack_exports__["default"] = (validate);

/***/ }),

/***/ "./src/assets/images/calendar-dark.svg":
/*!*********************************************!*\
  !*** ./src/assets/images/calendar-dark.svg ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fb1f2f6ef3ff4d3a22b2.svg";

/***/ }),

/***/ "./src/assets/images/calendar-img.svg":
/*!********************************************!*\
  !*** ./src/assets/images/calendar-img.svg ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fa6d4d1ff86d4a2c25f6.svg";

/***/ }),

/***/ "./src/assets/images/check.svg":
/*!*************************************!*\
  !*** ./src/assets/images/check.svg ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b5255f2fd3bdd26cc224.svg";

/***/ }),

/***/ "./src/assets/images/delete.svg":
/*!**************************************!*\
  !*** ./src/assets/images/delete.svg ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f2974119bb872b571dd4.svg";

/***/ }),

/***/ "./src/assets/images/homework.png":
/*!****************************************!*\
  !*** ./src/assets/images/homework.png ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "654609c81a80bf3dd9dd.png";

/***/ }),

/***/ "./src/assets/images/update.svg":
/*!**************************************!*\
  !*** ./src/assets/images/update.svg ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5cdf4bb75ce037e505e1.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	!function() {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/styles/style.css */ "./src/assets/styles/style.css");
/* harmony import */ var _modules_Initialize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Initialize */ "./src/modules/Initialize.js");
/* harmony import */ var _modules_UI_AddProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/UI/AddProject */ "./src/modules/UI/AddProject.js");
/* harmony import */ var _modules_UI_SelectProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/UI/SelectProject */ "./src/modules/UI/SelectProject.js");
/* harmony import */ var _modules_UI_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/UI/Modal */ "./src/modules/UI/Modal.js");
/* harmony import */ var _modules_UI_AddTodo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/UI/AddTodo */ "./src/modules/UI/AddTodo.js");
/* harmony import */ var _modules_UI_DeleteTodo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/UI/DeleteTodo */ "./src/modules/UI/DeleteTodo.js");
/* harmony import */ var _modules_UI_TodoDetails__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/UI/TodoDetails */ "./src/modules/UI/TodoDetails.js");
/* harmony import */ var _modules_UI_TodoStatus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/UI/TodoStatus */ "./src/modules/UI/TodoStatus.js");









let allProjects = _modules_Initialize__WEBPACK_IMPORTED_MODULE_1__.Initialize;
const root = document.querySelector("#root");
(0,_modules_UI_Modal__WEBPACK_IMPORTED_MODULE_4__.OpenCloseModal)("addTodoModal", "addTodoModalBtn");
(0,_modules_UI_Modal__WEBPACK_IMPORTED_MODULE_4__.CloseModalWithCrossBtn)("close");
(0,_modules_UI_AddProject__WEBPACK_IMPORTED_MODULE_2__.AddProject)(root, allProjects);
(0,_modules_UI_SelectProject__WEBPACK_IMPORTED_MODULE_3__.SelectProject)(root, allProjects);
(0,_modules_UI_AddTodo__WEBPACK_IMPORTED_MODULE_5__.AddTodo)(root, allProjects);
(0,_modules_UI_DeleteTodo__WEBPACK_IMPORTED_MODULE_6__.DeleteTodo)(root, allProjects);
(0,_modules_UI_TodoDetails__WEBPACK_IMPORTED_MODULE_7__.TodoDetails)(allProjects);
(0,_modules_UI_TodoStatus__WEBPACK_IMPORTED_MODULE_8__.TodoStatus)(root, allProjects);
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sT0FBTyxNQUFNLFFBQVEscUJBQXFCLG9CQUFvQixNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sUUFBUSxNQUFNLEtBQUssb0JBQW9CLHFCQUFxQixxQkFBcUIsTUFBTSxRQUFRLE1BQU0sU0FBUyxxQkFBcUIsb0JBQW9CLHFCQUFxQixxQkFBcUIsb0JBQW9CLG9CQUFvQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sT0FBTyxNQUFNLFFBQVEscUJBQXFCLHFCQUFxQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sT0FBTyxNQUFNLEtBQUsscUJBQXFCLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxPQUFPLE1BQU0sS0FBSyxxQkFBcUIsb0JBQW9CLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxpQkFBaUIsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sT0FBTyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxPQUFPLE1BQU0sS0FBSyxvQkFBb0Isb0JBQW9CLE1BQU0sS0FBSyxvQkFBb0Isb0JBQW9CLE1BQU0sS0FBSyxvQkFBb0Isb0JBQW9CLE1BQU0sS0FBSyxvQkFBb0Isb0JBQW9CLE1BQU0sTUFBTSxvQkFBb0Isb0JBQW9CLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxRQUFRLE1BQU0sWUFBWSxvQkFBb0IscUJBQXFCLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sV0FBVyxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLFdBQVcs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Q0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQW1DO0FBRWU7QUFDRztBQUNNO0FBQ2lCO0FBQzdCO0FBQ007QUFDRTtBQUNGO0FBRXJELElBQUlBLFdBQVcsR0FBR0QsMkRBQVU7QUFDNUIsTUFBTU8sSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxPQUFPLENBQUM7QUFFNUM2QixpRUFBYyxDQUFDLGNBQWMsRUFBRSxpQkFBaUIsQ0FBQztBQUNqRDJDLHlFQUFzQixDQUFDLE9BQU8sQ0FBQztBQUUvQnhELGtFQUFVLENBQUNsQixJQUFJLEVBQUVOLFdBQVcsQ0FBQztBQUM3QnVGLHdFQUFhLENBQUNqRixJQUFJLEVBQUVOLFdBQVcsQ0FBQztBQUNoQ3NDLDREQUFPLENBQUNoQyxJQUFJLEVBQUVOLFdBQVcsQ0FBQztBQUMxQnFELGtFQUFVLENBQUMvQyxJQUFJLEVBQUVOLFdBQVcsQ0FBQztBQUM3QjhGLG9FQUFXLENBQUM5RixXQUFXLENBQUM7QUFDeEJtRyxrRUFBVSxDQUFDN0YsSUFBSSxFQUFFTixXQUFXLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL0FwcC1sb2dpYy9Qcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL0FwcC1sb2dpYy9Ub2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL0luaXRpYWxpemUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvTG9jYWxTdG9yYWdlL0FkZERhdGEuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvTG9jYWxTdG9yYWdlL0dldERhdGEuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvVUkvQWRkUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9VSS9BZGRUb2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL1VJL0RlbGV0ZVRvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvVUkvTW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvVUkvUmVuZGVyU2VsZWN0ZWRQcm9qZWN0TmFtZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9VSS9SZW5kZXJTZWxlY3RlZFByb2plY3RUb2Rvcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9VSS9TZWxlY3RQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL1VJL1RvZG9EZXRhaWxzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL1VJL1RvZG9TdGF0dXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvVUkvVXBkYXRlVG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXRzL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXRzL3N0eWxlcy9zdHlsZS5jc3M/NzdkYiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvbmF0aXZlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcmVnZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3ZhbGlkYXRlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcclxuXHJcbi8vIEEgQkxVRVBSSU5UIFRPIENSRUFURSBORVcgUFJPSkVDVCBXSElDSCBIT1NUUyBDUkVBVEVEIFRPRE9TXHJcbmNsYXNzIFByb2plY3Qge1xyXG4gIGNvbnN0cnVjdG9yKHByb2plY3ROYW1lLCBpZCA9IFwiXCIsIGFjdGl2ZSA9IGZhbHNlLCBUb2RvTGlzdCA9IFtdKSB7XHJcbiAgICB0aGlzLl9pZCA9IGlkID8gaWQgOiB1dWlkdjQoKTsgLy8gVU5JUVVFIElEIEZPUiBBIFBST0pFQ1RcclxuICAgIHRoaXMuX3Byb2plY3ROYW1lID0gcHJvamVjdE5hbWU7XHJcbiAgICB0aGlzLl9hY3RpdmUgPSBhY3RpdmU7XHJcbiAgICB0aGlzLl9Ub2RvTGlzdCA9IFRvZG9MaXN0O1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lkO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHByb2plY3ROYW1lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Byb2plY3ROYW1lO1xyXG4gIH1cclxuXHJcbiAgc2V0IHByb2plY3ROYW1lKG5ld1Byb2plY3ROYW1lKSB7XHJcbiAgICB0aGlzLl9wcm9qZWN0TmFtZSA9IG5ld1Byb2plY3ROYW1lO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGFjdGl2ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9hY3RpdmU7XHJcbiAgfVxyXG5cclxuICBzZXQgYWN0aXZlKG5ld0FjdGl2ZSkge1xyXG4gICAgbmV3QWN0aXZlID8gKHRoaXMuX2FjdGl2ZSA9IHRydWUpIDogKHRoaXMuX2FjdGl2ZSA9IGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGdldCBUb2RvTGlzdCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9Ub2RvTGlzdDtcclxuICB9XHJcblxyXG4gIHNldCBUb2RvTGlzdChuZXdUb2RvKSB7XHJcbiAgICB0aGlzLl9Ub2RvTGlzdC5wdXNoKG5ld1RvZG8pO1xyXG4gIH1cclxuXHJcbiAgYWRkTmV3VG9kbyhuZXdUb2RvKSB7XHJcbiAgICB0aGlzLl9Ub2RvTGlzdC5wdXNoKG5ld1RvZG8pO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2luZ2xlVG9kbyhpZCkge1xyXG4gICAgY29uc3QgW3RvZG9dID0gdGhpcy5fVG9kb0xpc3QuZmlsdGVyKCh0b2RvKSA9PiB7XHJcbiAgICAgIGlmICh0b2RvLmlkID09PSBpZCkge1xyXG4gICAgICAgIHJldHVybiB0b2RvO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdG9kbztcclxuICB9XHJcblxyXG4gIHVwZGF0ZVByb2plY3RUb2RvQ29tcGxldGVkKGlkKSB7XHJcbiAgICBjb25zdCBmaWx0ZXJlZEFyciA9IHRoaXMuX1RvZG9MaXN0Lm1hcCgodG9kbykgPT4ge1xyXG4gICAgICBpZiAodG9kby5pZCA9PT0gaWQpIHtcclxuICAgICAgICB0b2RvLmNvbXBsZXRlZCA9ICF0b2RvLmNvbXBsZXRlZDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdG9kbztcclxuICAgIH0pO1xyXG4gICAgdGhpcy5fVG9kb0xpc3QgPSBmaWx0ZXJlZEFycjtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVByb2plY3RUb2RvKGlkLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjb21wbGV0ZWQpIHtcclxuICAgIHRoaXMuX1RvZG9MaXN0LmZvckVhY2goKHRvZG8pID0+IHtcclxuICAgICAgaWYgKHRvZG8uaWQgPT09IGlkKSB7XHJcbiAgICAgICAgdG9kby50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRvZG8uZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICB0b2RvLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgICAgIHRvZG8ucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgICAgICB0b2RvLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVQcm9qZWN0VG9kbyhpZCkge1xyXG4gICAgY29uc3QgZmlsdGVyZWRBcnIgPSB0aGlzLl9Ub2RvTGlzdC5maWx0ZXIoKHRvZG8pID0+IHtcclxuICAgICAgaWYgKHRvZG8uaWQgIT09IGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRvZG87XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5fVG9kb0xpc3QgPSBmaWx0ZXJlZEFycjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7XHJcbiIsIi8vIEEgQkxVRVBSSU5UIFRPIENSRUFURSBBIE5FVyBUT0RPXHJcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XHJcblxyXG5jbGFzcyBUb2RvIHtcclxuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuaWQgPSB1dWlkdjQoKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZG87XHJcbiIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL0FwcC1sb2dpYy9Qcm9qZWN0XCI7XHJcbmltcG9ydCB7IEdldERhdGEgfSBmcm9tIFwiLi9Mb2NhbFN0b3JhZ2UvR2V0RGF0YVwiO1xyXG5pbXBvcnQgeyBBZGREYXRhIH0gZnJvbSBcIi4vTG9jYWxTdG9yYWdlL0FkZERhdGFcIjtcclxuXHJcbmltcG9ydCBMb2dvIGZyb20gXCIuLi9hc3NldHMvaW1hZ2VzL2hvbWV3b3JrLnBuZ1wiO1xyXG5pbXBvcnQgQ2FsZW5kYXIgZnJvbSBcIi4uL2Fzc2V0cy9pbWFnZXMvY2FsZW5kYXItaW1nLnN2Z1wiO1xyXG5pbXBvcnQgQ2FsZW5kYXJEYXJrIGZyb20gXCIuLi9hc3NldHMvaW1hZ2VzL2NhbGVuZGFyLWRhcmsuc3ZnXCI7XHJcbmltcG9ydCBVcGRhdGUgZnJvbSBcIi4uL2Fzc2V0cy9pbWFnZXMvdXBkYXRlLnN2Z1wiO1xyXG5pbXBvcnQgRGVsZXRlIGZyb20gXCIuLi9hc3NldHMvaW1hZ2VzL2RlbGV0ZS5zdmdcIjtcclxuaW1wb3J0IENoZWNrIGZyb20gXCIuLi9hc3NldHMvaW1hZ2VzL2NoZWNrLnN2Z1wiO1xyXG5cclxuLypcclxuICBJTklUSUFMSVpFIFBST0pFQ1RcclxuICBHRVQgQUxMIFBST0pFQ1RTIEZST00gTE9DQUwgU1RPUkFHRVxyXG4gIElGIExPQ0FMIFNUT1JBR0UgSVMgRU1QVFlcclxuICBDUkVBVEUgQSBERUZBVUxUIFBST0pFQ1QgTkFNRUQgXCJJTkRFWFwiIEFORCBTRVQgSVQgVE8gQUNUSVZFXHJcbiAgT1RIRVJXSVNFIEdFVCBBTEwgVEhFIFBST0pFQ1RTIFNBVkVEIElOIExPQ0FMIFNUT1JBR0VcclxuICBBTkQgU0hPVyBUSEUgMSBUSEFUIFdBUyBMQVNUIEFDVElWRSBcclxuKi9cclxuZXhwb3J0IGNvbnN0IEluaXRpYWxpemUgPSAoZnVuY3Rpb24gKCkge1xyXG4gIGxldCBhbGxQcm9qZWN0cyA9IEdldERhdGEoXCJwcm9qZWN0c1wiKTtcclxuXHJcbiAgaWYgKCFhbGxQcm9qZWN0cykge1xyXG4gICAgY29uc3QgaW5ib3ggPSBuZXcgUHJvamVjdChcIkluYm94XCIpO1xyXG4gICAgaW5ib3guYWN0aXZlID0gdHJ1ZTtcclxuICAgIEFkZERhdGEoW2luYm94XSk7XHJcbiAgfVxyXG5cclxuICBhbGxQcm9qZWN0cyA9IEdldERhdGEoXCJwcm9qZWN0c1wiKTtcclxuICBsZXQgYWN0aXZlUHJvamVjdDtcclxuXHJcbiAgY29uc3QgbmV3UHJvamVjdHMgPSBhbGxQcm9qZWN0cy5tYXAoKHByb2plY3QpID0+IHtcclxuICAgIGNvbnN0IHByb2ogPSBuZXcgUHJvamVjdChcclxuICAgICAgcHJvamVjdC5fcHJvamVjdE5hbWUsXHJcbiAgICAgIHByb2plY3QuX2lkLFxyXG4gICAgICBwcm9qZWN0Ll9hY3RpdmUsXHJcbiAgICAgIHByb2plY3QuX1RvZG9MaXN0XHJcbiAgICApO1xyXG5cclxuICAgIGlmIChwcm9qLmFjdGl2ZSkge1xyXG4gICAgICBhY3RpdmVQcm9qZWN0ID0gcHJvajtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcHJvajtcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcm9vdFwiKTtcclxuXHJcbiAgY29uc3QgZGl2Q29udGFpbmVyQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gIGRpdkNvbnRhaW5lckNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImZsZXhcIik7XHJcblxyXG4gIGRpdkNvbnRhaW5lckNvbnRlbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgPCEtLSAgU0lERUJBUiAgLS0+XHJcbiAgICA8ZGl2IGNsYXNzPVwidy0xLzQgaC1zY3JlZW4gYmctd2hpdGUgYm9yZGVyLXItMiBib3JkZXItc2xhdGUtMTAwXCI+XHJcbiAgICAgIDxoMSBjbGFzcz1cInRleHQtM3hsIG10LTMgbWItMyB0ZXh0LWluZGlnby04MDAgZmxleCBweS0yIHB4LTVcIj5cclxuICAgICAgICA8aW1nIHNyYz0ke0xvZ299IGFsdD1cIlwiIHN0eWxlPVwid2lkdGg6NDBweDtcIi8+XHJcbiAgICAgICAgVG9kbyBMaXN0XHJcbiAgICAgIDwvaDE+XHJcbiAgICAgIDx1bCBjbGFzcz1cInByb2plY3QtY29udGFpbmVyIG1yLTVcIj5cclxuICAgICAgJHtuZXdQcm9qZWN0c1xyXG4gICAgICAgIC5tYXAoKHByb2plY3QpID0+IHtcclxuICAgICAgICAgIHJldHVybiBwcm9qZWN0Ll9hY3RpdmVcclxuICAgICAgICAgICAgPyBgXHJcbiAgICAgICAgICA8bGkgY2xhc3M9XCJtYi0yXCI+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIGJvcmRlci1pbmRpZ28tNTAwIGJnLWluZGlnby01MDAgaG92ZXI6YmctaW5kaWdvLTQwMCBob3Zlcjpib3JkZXItaW5kaWdvLTQwMCB3LWZ1bGwgcHktMiByb3VuZGVkLXItM3hsIHRleHQtd2hpdGUgdGV4dC1sZWZ0IHBsLTYgbWwtMCBwcm9qZWN0LWJ0blwiXHJcbiAgICAgICAgICAgICAgZGF0YS1wcm9qZWN0LWlkPSR7cHJvamVjdC5pZH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPSR7Q2FsZW5kYXJ9IGFsdD1cIlwiIHdpZHRoPVwiMzBweFwiIGNsYXNzPVwibXItM1wiLz5cclxuICAgICAgICAgICAgICA8c3Bhbj4ke3Byb2plY3QucHJvamVjdE5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICBgXHJcbiAgICAgICAgICAgIDogYFxyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJtYi0yXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIgaG92ZXI6YmctaW5kaWdvLTQwMCBob3Zlcjpib3JkZXItaW5kaWdvLTQwMCBleHQtbGVmdCBwbC02IHJvdW5kZWQtci0zeGwgdy1mdWxsIHB5LTIgdGV4dC1zbGF0ZS05MDAgcHJvamVjdC1idG5cIiBcclxuICAgICAgICAgICAgICAgIGRhdGEtcHJvamVjdC1pZD0ke3Byb2plY3QuaWR9PlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPSR7Q2FsZW5kYXJEYXJrfSBhbHQ9XCJcIiB3aWR0aD1cIjMwcHhcIiBjbGFzcz1cIm1yLTNcIi8+XHJcbiAgICAgICAgICAgICAgPHNwYW4+JHtwcm9qZWN0LnByb2plY3ROYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIGA7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuam9pbihcIlwiKX1cclxuICAgICAgPC91bD5cclxuICAgICAgPGRpdiBjbGFzcz1cInB5LTIgcHgtNVwiPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmV3LXByb2plY3QtdGl0bGVcIiBjbGFzcz1cImJsb2NrIGJnLXdoaXRlIHctZnVsbCBib3JkZXIgYm9yZGVyLXNsYXRlLTMwMCByb3VuZGVkLW1kIHAtMiBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLXNreS01MDAgZm9jdXM6cmluZy0xXCIgcGxhY2Vob2xkZXI9XCJQcm9qZWN0IHRpdGxlLi4uXCIvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJ0ZXh0LXJlZC02MDAgdy1mdWxsIHRleHQtbGVmdCBweS0yIHB4LTUgYWRkLW5ldy1wcm9qZWN0LWJ0blwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1sZ1wiPis8L3NwYW4+IEFkZCBQcm9qZWN0XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcblxyXG5cclxuICAgIDwhLS0gTUFJTiBDT05URU5UIC0tPlxyXG4gICAgPGRpdiBjbGFzcz1cInctc2NyZWVuIGJnLXNsYXRlLTEwMFwiPlxyXG4gICAgICA8IS0tIFRPUCBTRUNUSU9OIC0tPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gYmctd2hpdGUgcHQtNCBwYi00IHBsLTUgcHItNVwiPlxyXG4gICAgICAgIDxoMiBjbGFzcz1cInRleHQtM3hsIHRleHQtaW5kaWdvLTgwMCBzZWxlY3RlZC1wcm9qZWN0LW5hbWVcIj5cclxuICAgICAgICAgICR7YWN0aXZlUHJvamVjdC5wcm9qZWN0TmFtZX1cclxuICAgICAgICA8L2gyPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYWRkVG9kb01vZGFsQnRuIGJvcmRlci0yIGJvcmRlci1pbmRpZ28tNTAwIGJnLWluZGlnby01MDAgaG92ZXI6YmctaW5kaWdvLTQwMCBob3Zlcjpib3JkZXItaW5kaWdvLTQwMCBweC03IHB5LTMgbGVhZGluZy01IHJvdW5kZWQtM3hsIHRleHQtd2hpdGUgdGV4dC13aGl0ZSByb3VuZGVkIG9wZW4tbW9kYWwtYnRuIFwiIGlkPVwiYWRkVG9kb01vZGFsQnRuXCJcclxuICAgICAgICA+QWRkIFRvZG88L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8IS0tIEFERCBUT0RPIE1PREFMIC0tPiAgXHJcbiAgICAgIDxkaXYgaWQ9XCJhZGRUb2RvTW9kYWxcIiBjbGFzcz1cImFkZFRvZG9Nb2RhbCBmaXhlZCB6LTEwIHRvcC0wIGxlZnQtMCB3LWZ1bGwgaC1mdWxsIGJnLXN0b25lLTk1MC81MCBmbGV4IGl0ZW1zLWNlbnRlciBvdmVyZmxvdy15LXNjcm9sbCBtb2RhbFwiIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibXgtYXV0byBsZzp3LTEvMyBtZDp3LTIvMyBzbTp3LWZ1bGwgdy1mdWxsIHBsLTUgcHItNVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJnLXdoaXRlIHJvdW5kZWQgYWRkLXRvZG8taW5wdXQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LTJ4bCBwLTQgYm9yZGVyLWItMiBib3JkZXItc2xhdGUtMTUwIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxoMz5BZGQgVG9kbzwvaDM+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZSB0ZXh0LTN4bFwiPiZ0aW1lczs8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdC0yIG1iLTIgcC00XCI+XHJcbiAgICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidGl0bGVcIiBjbGFzcz1cImJsb2NrIGZvbnQtbWVkaXVtIHRleHQtc2xhdGUtNzAwIG1iLTFcIj5UaXRsZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidGl0bGVcIiBwbGFjZWhvbGRlcj1cIldhbGsgdGhlIGRvZ1wiIGNsYXNzPVwiYmxvY2sgYmctd2hpdGUgdy1mdWxsIGJvcmRlciBib3JkZXItc2xhdGUtMzAwIHJvdW5kZWQtbWQgcC0yIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItc2t5LTUwMCBmb2N1czpyaW5nLTEgbmV3LXRvZG8tdGl0bGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZGVzY3JpcHRpb25cIiBjbGFzcz1cImJsb2NrIGZvbnQtbWVkaXVtIHRleHQtc2xhdGUtNzAwIG1iLTFcIj5EZXNjcmlwdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cImRlc2NyaXB0aW9uXCIgY2xhc3M9XCJibG9jayBiZy13aGl0ZSB3LWZ1bGwgYm9yZGVyIGJvcmRlci1zbGF0ZS0zMDAgcm91bmRlZC1tZCBwLTIgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1za3ktNTAwIGZvY3VzOnJpbmctMSBuZXctdG9kby1kZXNjcmlwdGlvblwiIHBsYWNlaG9sZGVyPVwid2FsayBmb3IgYWJvdXQgMzAgbWluLi4uXCI+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm10LTNcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImR1ZS1kYXRlXCIgY2xhc3M9XCJibG9jayBmb250LW1lZGl1bSB0ZXh0LXNsYXRlLTcwMCBtYi0xXCI+RHVlIERhdGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cImR1ZS1kYXRlXCIgY2xhc3M9XCJibG9jayBiZy13aGl0ZSB3LWZ1bGwgYm9yZGVyIGJvcmRlci1zbGF0ZS0zMDAgcm91bmRlZC1tZCBwLTIgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1za3ktNTAwIGZvY3VzOnJpbmctMSBuZXctdG9kby1kdWUtZGF0ZVwiLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm10LTNcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInByaW9yaXR5XCIgY2xhc3M9XCJibG9jayBmb250LW1lZGl1bSB0ZXh0LXNsYXRlLTcwMCBtYi0xXCI+UHJpb3JpdHk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwicHJpb3JpdHlcIiBjbGFzcz1cImJsb2NrIGJnLXdoaXRlIHctZnVsbCBib3JkZXIgYm9yZGVyLXNsYXRlLTMwMCByb3VuZGVkLW1kIHAtMiBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLXNreS01MDAgZm9jdXM6cmluZy0xIG5ldy10b2RvLXByaW9yaXR5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIHNlbGVjdGVkIGRpc2FibGVkPlNlbGVjdCBQcmlvcml0eTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+SGlnaDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+TWVkaXVtPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj5Mb3c8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm10LTMgcC00IHRleHQtcmlnaHQgYm9yZGVyLXQtMiBib3JkZXItc2xhdGUtMTUwXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJtb2RhbC1idG4gYWRkLW5ldy10b2RvLWJ0biBiZy1za3ktNTAwIGhvdmVyOmJnLXNreS03MDAgcHgtNSBweS0yLjUgdGV4dC1zbSBsZWFkaW5nLTUgcm91bmRlZC1tZCB0ZXh0LXdoaXRlXCIgZGF0YS1wcm9qZWN0LWlkPSR7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVQcm9qZWN0LmlkXHJcbiAgICAgICAgICAgICAgfT5cclxuICAgICAgICAgICAgICAgIEFkZFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDwhLS0gVVBEQVRFIFRPRE8gTU9EQUwgLS0+XHJcbiAgICAgIDxkaXYgaWQ9XCJ1cGRhdGVUb2RvTW9kYWxcIiBjbGFzcz1cInVwZGF0ZVRvZG9Nb2RhbCBmaXhlZCB6LTEwIHRvcC0wIGxlZnQtMCB3LWZ1bGwgaC1mdWxsIGJnLXN0b25lLTk1MC81MCBmbGV4IGl0ZW1zLWNlbnRlciBvdmVyZmxvdy15LXNjcm9sbCBtb2RhbFwiIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJteC1hdXRvIGxnOnctMS8zIG1kOnctMi8zIHNtOnctZnVsbCB3LWZ1bGwgcGwtNSBwci01XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiZy13aGl0ZSByb3VuZGVkIGFkZC10b2RvLWlucHV0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LTJ4bCBwLTQgYm9yZGVyLWItMiBib3JkZXItc2xhdGUtMTUwIGZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICA8aDM+VG9kbyBEZXRhaWxzPC9oMz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIj4mdGltZXM7PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm10LTIgbWItMiBwLTRcIj5cclxuICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkZXRhaWwtdGl0bGVcIiBjbGFzcz1cImJsb2NrIGZvbnQtbWVkaXVtIHRleHQtc2xhdGUtNzAwIG1iLTFcIj5UaXRsZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJkZXRhaWwtdGl0bGVcIiBwbGFjZWhvbGRlcj1cIldhbGsgdGhlIGRvZ1wiIGNsYXNzPVwiYmxvY2sgYmctd2hpdGUgdy1mdWxsIGJvcmRlciBib3JkZXItc2xhdGUtMzAwIHJvdW5kZWQtbWQgcC0yIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItc2t5LTUwMCBmb2N1czpyaW5nLTEgZGV0YWlsLXRvZG8tdGl0bGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm10LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZGV0YWlsLWRlc2NyaXB0aW9uXCIgY2xhc3M9XCJibG9jayBmb250LW1lZGl1bSB0ZXh0LXNsYXRlLTcwMCBtYi0xXCI+RGVzY3JpcHRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cImRldGFpbC1kZXNjcmlwdGlvblwiIGNsYXNzPVwiYmxvY2sgYmctd2hpdGUgdy1mdWxsIGJvcmRlciBib3JkZXItc2xhdGUtMzAwIHJvdW5kZWQtbWQgcC0yIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItc2t5LTUwMCBmb2N1czpyaW5nLTEgZGV0YWlsLXRvZG8tZGVzY3JpcHRpb25cIiBwbGFjZWhvbGRlcj1cIndhbGsgZm9yIGFib3V0IDMwIG1pbi4uLlwiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkZXRhaWwtZHVlLWRhdGVcIiBjbGFzcz1cImJsb2NrIGZvbnQtbWVkaXVtIHRleHQtc2xhdGUtNzAwIG1iLTFcIj5EdWUgRGF0ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJkZXRhaWwtZHVlLWRhdGVcIiBjbGFzcz1cImJsb2NrIGJnLXdoaXRlIHctZnVsbCBib3JkZXIgYm9yZGVyLXNsYXRlLTMwMCByb3VuZGVkLW1kIHAtMiBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLXNreS01MDAgZm9jdXM6cmluZy0xIGRldGFpbC10b2RvLWR1ZS1kYXRlXCIvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm10LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZGV0YWlsLXByaW9yaXR5XCIgY2xhc3M9XCJibG9jayBmb250LW1lZGl1bSB0ZXh0LXNsYXRlLTcwMCBtYi0xXCI+UHJpb3JpdHk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJkZXRhaWwtcHJpb3JpdHlcIiBjbGFzcz1cImJsb2NrIGJnLXdoaXRlIHctZnVsbCBib3JkZXIgYm9yZGVyLXNsYXRlLTMwMCByb3VuZGVkLW1kIHAtMiBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLXNreS01MDAgZm9jdXM6cmluZy0xIGRldGFpbC10b2RvLXByaW9yaXR5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgc2VsZWN0ZWQgZGlzYWJsZWQ+U2VsZWN0IFByaW9yaXR5PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPkhpZ2g8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+TWVkaXVtPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiM1wiPkxvdzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm10LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZGV0YWlsLXN0YXR1c1wiIGNsYXNzPVwiYmxvY2sgZm9udC1tZWRpdW0gdGV4dC1zbGF0ZS03MDAgbWItMVwiPlN0YXR1czwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cImRldGFpbC1zdGF0dXNcIiBjbGFzcz1cImJsb2NrIGJnLXdoaXRlIHctZnVsbCBib3JkZXIgYm9yZGVyLXNsYXRlLTMwMCByb3VuZGVkLW1kIHAtMiBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLXNreS01MDAgZm9jdXM6cmluZy0xIGRldGFpbC10b2RvLWNvbXBsZXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIHNlbGVjdGVkIGRpc2FibGVkPlNlbGVjdCBTdGF0dXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+Q29tcGxldGU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIwXCI+SW4tY29tcGxldGU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm10LTMgcC00IHRleHQtcmlnaHQgYm9yZGVyLXQtMiBib3JkZXItc2xhdGUtMTUwXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIm1vZGFsLWJ0biB1cGRhdGUtdG9kby1idG4gYmctc2t5LTUwMCBob3ZlcjpiZy1za3ktNzAwIHB4LTUgcHktMi41IHRleHQtc20gbGVhZGluZy01IHJvdW5kZWQtbWQgdGV4dC13aGl0ZVwiIGRhdGEtcHJvamVjdC1pZD0ke1xyXG4gICAgICAgICAgICAgICAgICBhY3RpdmVQcm9qZWN0LmlkXHJcbiAgICAgICAgICAgICAgICB9PlxyXG4gICAgICAgICAgICAgICAgICBVcGRhdGVcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgICA8IS0tIEVNUFRZIFBST0pFQ1QgTUVTU0FHRSAtLT5cclxuICAgICAgPGRpdiBjbGFzcz1cInRleHQtMnhsIHRleHQtaW5kaWdvLTgwMCBwdC00IHBiLTQgcGwtNSBwci01IGVtcHR5LXRvZG9zLWNvbnRhaW5lciAke1xyXG4gICAgICAgIGFjdGl2ZVByb2plY3QuVG9kb0xpc3QubGVuZ3RoID09PSAwID8gXCJibG9ja1wiIDogXCJoaWRkZW5cIlxyXG4gICAgICB9XCI+XHJcbiAgICAgIDxwPk5vIHRvZG9zIGhlcmUuLi48L3A+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPCEtLSBUT0RPUyBDT05UQUlORVIgLS0+IFxyXG4gICAgICA8ZGl2IGNsYXNzPVwidG9kby1jb250YWluZXIgcHQtNCBwYi00IHBsLTUgcHItNVwiPlxyXG4gICAgICAgIFxyXG4gICAgICAgICR7YWN0aXZlUHJvamVjdC5Ub2RvTGlzdC5tYXAoKHRvZG8pID0+IHtcclxuICAgICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9kby1jYXJkXCI+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzcz1cImJnLXdoaXRlIHJvdW5kZWQgcC0zIG1iLTMgdGV4dC1sZyBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gYm9yZGVyLWwtNCB0b2RvLWNhcmQtY29udGFpbmVyICR7XHJcbiAgICAgICAgICAgICAgICB0b2RvLnByaW9yaXR5ID09PSAxXHJcbiAgICAgICAgICAgICAgICAgID8gXCJib3JkZXItbC1yZWQtNTAwXCJcclxuICAgICAgICAgICAgICAgICAgOiB0b2RvLnByaW9yaXR5ID09PSAyXHJcbiAgICAgICAgICAgICAgICAgID8gXCJib3JkZXItbC15ZWxsb3ctNTAwXCJcclxuICAgICAgICAgICAgICAgICAgOiBcImJvcmRlci1sLWdyZWVuLTUwMFwiXHJcbiAgICAgICAgICAgICAgfVwiXHJcbiAgICAgICAgICAgICAgZGF0YS10b2RvLWlkPSR7dG9kby5pZH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9JHt0b2RvLmlkfSBjbGFzcz1cImJsb2NrIHJlbGF0aXZlIGZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9JHt0b2RvLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidy00IGgtNCBtLTAgcC0wIGFsaWduLW1pZGRsZSB0b2RvLXN0YXR1cyBvcGFjaXR5LTAgdy0wIGgtMCBhYnNvbHV0ZSBwZWVyXCJcclxuICAgICAgICAgICAgICAgICAgICAke3RvZG8uY29tcGxldGVkID09PSB0cnVlID8gXCJjaGVja2VkXCIgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNoZWNrbWFyayBmbGV4IGl0ZW1zLW1pZGRsZSBoLTkgdy05IGJnLWdyYXktMjAwIHJvdW5kZWQtZnVsbCBwZWVyLWNoZWNrZWQ6YmctZ3JlZW4tNTAwIC10b3AtMSByaWdodC05XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9JHtDaGVja30gYWx0PVwidGlja1wiIHdpZHRoPVwiMjBweFwiIGNsYXNzPVwibXgtYXV0byBjaGVja21hcmstaW1nICR7XHJcbiAgICAgICAgICAgIHRvZG8uY29tcGxldGVkID8gXCJibG9ja1wiIDogXCJoaWRkZW5cIlxyXG4gICAgICAgICAgfVwiLz5cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRvZG8tdGl0bGUgcGwtMlwiPiR7dG9kby50aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIHRvZG8tZHVlLWRhdGVcIj5EdWU6ICR7XHJcbiAgICAgICAgICAgICAgICAgIHRvZG8uZHVlRGF0ZVxyXG4gICAgICAgICAgICAgICAgfTwvcD5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYm9yZGVyLTIgYm9yZGVyLWluZGlnby01MDAgYmctaW5kaWdvLTUwMCBob3Zlcjpib3JkZXItaW5kaWdvLTQwMCBob3ZlcjpiZy1pbmRpZ28tNDAwIHJvdW5kZWQtZnVsbCBweC0yIHB5LTIgbXgtMiBvcGVuLW1vZGFsLWJ0biB0b2RvLWRldGFpbHMtYnRuIHVwZGF0ZVRvZG9Nb2RhbEJ0blwiXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwidXBkYXRlVG9kb01vZGFsQnRuXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1wcm9qZWN0LWlkPSR7YWN0aXZlUHJvamVjdC5pZH1cclxuICAgICAgICAgICAgICAgICAgZGF0YS10b2RvLWlkPSR7dG9kby5pZH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9JHtVcGRhdGV9IGFsdD1cInVwZGF0ZVwiIHdpZHRoPVwiMjBweFwiIGNsYXNzPVwidG9kby1kZXRhaWxzLWJ0blwiLz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJib3JkZXItMiBib3JkZXItcmVkLTUwMCBweC0yIGJnLXJlZC01MDAgaG92ZXI6YmctcmVkLTQwMCBob3Zlcjpib3JkZXItcmVkLTQwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtZnVsbCBkZWxldGUtdG9kby1idG5cIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9JHtEZWxldGV9IGFsdD1cImRlbGV0ZVwiIHdpZHRoPVwiMjBweFwiIGNsYXNzPVwiZGVsZXRlLXRvZG8tYnRuXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgYDtcclxuICAgICAgICB9KS5qb2luKFwiXCIpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIGA7XHJcblxyXG4gIHJvb3QuYXBwZW5kQ2hpbGQoZGl2Q29udGFpbmVyQ29udGVudCk7XHJcblxyXG4gIHJldHVybiBuZXdQcm9qZWN0cztcclxufSkoKTtcclxuIiwiZXhwb3J0IGNvbnN0IEFkZERhdGEgPSAoZGF0YSkgPT4ge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgR2V0RGF0YSA9IChrZXkpID0+IHtcclxuICBjb25zdCBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcclxuICBpZiAoIWRhdGEpIHtcclxuICAgIHJldHVybiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIFwiW11cIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpO1xyXG4gIH1cclxufTtcclxuIiwiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4uL0FwcC1sb2dpYy9Qcm9qZWN0XCI7XHJcbmltcG9ydCB7IEFkZERhdGEgfSBmcm9tIFwiLi4vTG9jYWxTdG9yYWdlL0FkZERhdGFcIjtcclxuXHJcbmltcG9ydCBDYWxlbmRhckRhcmsgZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvY2FsZW5kYXItZGFyay5zdmdcIjtcclxuXHJcbi8qXHJcbiAgQUREIFBST0pFQ1QgTE9HSUNcclxuXHJcbiAgQ0hFQ0sgSUYgUFJPSkVDVCBOQU1FIElTIEVNUFRZXHJcbiAgSUYgRU1QVFksIEFTSyBGT1IgVVNFUiBJTlBVVCBBR0FJTlxyXG5cclxuICBJRiBQUk9KRUNUIE5BTUUgSVMgTk9UIEVNUFRZLFxyXG4gIENSRUFURSBBIE5FVyBQUk9KRUNUIFdJVEggRU1QVFkgVE9ET1NcclxuKi9cclxuZXhwb3J0IGNvbnN0IEFkZFByb2plY3QgPSAocm9vdCwgYWxsUHJvamVjdCkgPT4ge1xyXG4gIGNvbnN0IGFkZE5ld1Byb2plY3RCdG4gPSByb290LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLW5ldy1wcm9qZWN0LWJ0blwiKTtcclxuICBjb25zdCBuZXdQcm9qZWN0VGl0bGUgPSByb290LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LXByb2plY3QtdGl0bGVcIik7XHJcbiAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IHJvb3QucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWNvbnRhaW5lclwiKTtcclxuXHJcbiAgYWRkTmV3UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb25DbGlja0FkZE5ld1Byb2plY3RCdG4pO1xyXG5cclxuICBmdW5jdGlvbiBvbkNsaWNrQWRkTmV3UHJvamVjdEJ0bigpIHtcclxuICAgIGlmIChuZXdQcm9qZWN0VGl0bGUudmFsdWUgPT09IFwiXCIpIHtcclxuICAgICAgYWxlcnQoXCJQcm9qZWN0IHRpdGxlIGlzIGVtcHR5IVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChuZXdQcm9qZWN0VGl0bGUudmFsdWUpO1xyXG4gICAgICBhbGxQcm9qZWN0LnB1c2gobmV3UHJvamVjdCk7XHJcblxyXG4gICAgICBBZGREYXRhKGFsbFByb2plY3QpO1xyXG5cclxuICAgICAgY29uc3QgZGl2RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgIGRpdkVsLmNsYXNzTGlzdC5hZGQoXCJtYi0yXCIpO1xyXG4gICAgICBkaXZFbC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBob3ZlcjpiZy1pbmRpZ28tNDAwIGhvdmVyOmJvcmRlci1pbmRpZ28tNDAwIGV4dC1sZWZ0IHBsLTYgcm91bmRlZC1yLTN4bCB3LWZ1bGwgcHktMiB0ZXh0LXNsYXRlLTkwMCBwcm9qZWN0LWJ0blwiIGRhdGEtcHJvamVjdC1pZD0ke25ld1Byb2plY3QuaWR9PlxyXG4gICAgICAgICAgPGltZyBzcmM9JHtDYWxlbmRhckRhcmt9IGFsdD1cIlwiIHdpZHRoPVwiMzBweFwiIGNsYXNzPVwibXItM1wiLz5cclxuICAgICAgICAgIDxzcGFuPiR7bmV3UHJvamVjdFRpdGxlLnZhbHVlfTwvc3Bhbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgYDtcclxuICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChkaXZFbCk7XHJcblxyXG4gICAgICAvLyBSRVNFVCBJTlBVVCBWQUxVRVxyXG4gICAgICBuZXdQcm9qZWN0VGl0bGUudmFsdWUgPSBcIlwiO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuIiwiaW1wb3J0IFRvZG8gZnJvbSBcIi4uL0FwcC1sb2dpYy9Ub2RvXCI7XHJcbmltcG9ydCB7XHJcbiAgQ2xvc2VNb2RhbFdpdGhCdG4sXHJcbiAgUmVtb3ZlTW9kYWxMaXN0ZW5lcnMsXHJcbiAgT3BlbkNsb3NlTW9kYWwsXHJcbn0gZnJvbSBcIi4vTW9kYWxcIjtcclxuaW1wb3J0IHsgQWRkRGF0YSB9IGZyb20gXCIuLi9Mb2NhbFN0b3JhZ2UvQWRkRGF0YVwiO1xyXG5cclxuaW1wb3J0IFVwZGF0ZSBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlcy91cGRhdGUuc3ZnXCI7XHJcbmltcG9ydCBEZWxldGUgZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvZGVsZXRlLnN2Z1wiO1xyXG5pbXBvcnQgQ2hlY2sgZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvY2hlY2suc3ZnXCI7XHJcblxyXG4vKlxyXG4gIEFERCBUT0RPIExPR0lDXHJcblxyXG4gIENIRUNLIEZPUiBFTVBUWSBJTlBVVFM7IFRJVExFLCBERVNDUklQVElPTiwgRFVFIERBVEUgQU5EIFBSSU9SSVRZXHJcbiAgSUYgQU5ZIDEgSVMgRU1QVFksIEFTSyBGT1IgVVNFUiBJTlBVVCBBR0FJTlxyXG5cclxuICBJRiBBTEwgSU5QVVRTIEFSRSBGSUxMRUQsXHJcbiAgQ1JFQVRFIEEgTkVXIFRPRE8gSU4gVEhFIFNFTEVDVEVEIFBST0pFQ1RcclxuICBSRU1PVkUgUFJFVklPVVMgRVZFTlQgTElTVEVORVJTIEZPUiBBTEwgVVBEQVRFIFRPRE8gQlROUyBBTkQgTU9EQUxcclxuICBBREQgRVZFTlQgTElTVEVORVJTIEZPUiBBTEwgVVBEQVRFIFRPRE8gQlROUyBBTkQgTU9EQUxcclxuICBBREQgVE9ETyBUTyBUSEUgRE9NXHJcbiAgUkVTRVQgQUREIFRPRE8gTU9EQUwgSU5QVVRTXHJcbiovXHJcblxyXG5leHBvcnQgY29uc3QgQWRkVG9kbyA9IChyb290LCBhbGxQcm9qZWN0cykgPT4ge1xyXG4gIGNvbnN0IHRvZG9UaXRsZSA9IHJvb3QucXVlcnlTZWxlY3RvcihcIi5uZXctdG9kby10aXRsZVwiKTtcclxuICBjb25zdCB0b2RvRGVzY3JpcHRpb24gPSByb290LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXRvZG8tZGVzY3JpcHRpb25cIik7XHJcbiAgY29uc3QgdG9kb0R1ZURhdGUgPSByb290LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXRvZG8tZHVlLWRhdGVcIik7XHJcbiAgY29uc3QgdG9kb1ByaW9yaXR5ID0gcm9vdC5xdWVyeVNlbGVjdG9yKFwiLm5ldy10b2RvLXByaW9yaXR5XCIpO1xyXG5cclxuICBjb25zdCBhZGROZXdUb2RvQnRuID0gcm9vdC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1uZXctdG9kby1idG5cIik7XHJcbiAgY29uc3QgdG9kb0NvbnRhaW5lciA9IHJvb3QucXVlcnlTZWxlY3RvcihcIi50b2RvLWNvbnRhaW5lclwiKTtcclxuICBjb25zdCBlbXB0eVRvZG9NZXNzYWdlID0gcm9vdC5xdWVyeVNlbGVjdG9yKFwiLmVtcHR5LXRvZG9zLWNvbnRhaW5lclwiKTtcclxuXHJcbiAgbGV0IHNlbGVjdGVkUHJvamVjdDtcclxuXHJcbiAgYWRkTmV3VG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ2V0VXNlcklucHV0Rm9yVG9kbyk7XHJcbiAgZnVuY3Rpb24gZ2V0VXNlcklucHV0Rm9yVG9kbyhlKSB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgaWYgKHRvZG9UaXRsZS52YWx1ZSA9PT0gXCJcIikge1xyXG4gICAgICBhbGVydChcInRpdGxlIGlzIGVtcHR5XCIpO1xyXG4gICAgfSBlbHNlIGlmICh0b2RvRGVzY3JpcHRpb24udmFsdWUgPT09IFwiXCIpIHtcclxuICAgICAgYWxlcnQoXCJkZXNjcmlwdGlvbiBpcyBlbXB0eVwiKTtcclxuICAgIH0gZWxzZSBpZiAodG9kb0R1ZURhdGUudmFsdWUgPT09IFwiXCIpIHtcclxuICAgICAgYWxlcnQoXCJEdWUgZGF0ZSBpcyBlbXB0eVwiKTtcclxuICAgIH0gZWxzZSBpZiAodG9kb1ByaW9yaXR5LnZhbHVlID09PSBcIlwiKSB7XHJcbiAgICAgIGFsZXJ0KFwiUHJpb3JpdHkgaXMgZW1wdHlcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBuZXdUb2RvID0gbmV3IFRvZG8oXHJcbiAgICAgICAgdG9kb1RpdGxlLnZhbHVlLFxyXG4gICAgICAgIHRvZG9EZXNjcmlwdGlvbi52YWx1ZSxcclxuICAgICAgICB0b2RvRHVlRGF0ZS52YWx1ZSxcclxuICAgICAgICBwYXJzZUludCh0b2RvUHJpb3JpdHkudmFsdWUpXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBhbGxQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgICAgaWYgKHByb2plY3QuYWN0aXZlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICBzZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0O1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzZWxlY3RlZFByb2plY3QuYWRkTmV3VG9kbyhuZXdUb2RvKTtcclxuXHJcbiAgICAgIEFkZERhdGEoYWxsUHJvamVjdHMpO1xyXG5cclxuICAgICAgYWRkTmV3VG9kb1RvVUkobmV3VG9kbyk7XHJcbiAgICAgIFJlbW92ZU1vZGFsTGlzdGVuZXJzKFwidXBkYXRlVG9kb01vZGFsXCIsIFwidXBkYXRlVG9kb01vZGFsQnRuXCIpO1xyXG4gICAgICBPcGVuQ2xvc2VNb2RhbChcInVwZGF0ZVRvZG9Nb2RhbFwiLCBcInVwZGF0ZVRvZG9Nb2RhbEJ0blwiKTtcclxuICAgICAgQ2xvc2VNb2RhbFdpdGhCdG4oXCJtb2RhbC1idG5cIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBhZGROZXdUb2RvVG9VSShuZXdUb2RvKSB7XHJcbiAgICBjb25zdCBuZXdUb2RvRGl2RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbmV3VG9kb0RpdkVsLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWNhcmRcIik7XHJcblxyXG4gICAgZW1wdHlUb2RvTWVzc2FnZS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG5cclxuICAgIG5ld1RvZG9EaXZFbC5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzcz1cImJnLXdoaXRlIHJvdW5kZWQgcC0zIG1iLTMgdGV4dC1sZyBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gYm9yZGVyLWwtNCB0b2RvLWNhcmQtY29udGFpbmVyICR7XHJcbiAgICAgICAgICBuZXdUb2RvLnByaW9yaXR5ID09PSAxXHJcbiAgICAgICAgICAgID8gXCJib3JkZXItbC1yZWQtNTAwXCJcclxuICAgICAgICAgICAgOiBuZXdUb2RvLnByaW9yaXR5ID09PSAyXHJcbiAgICAgICAgICAgID8gXCJib3JkZXItbC15ZWxsb3ctNTAwXCJcclxuICAgICAgICAgICAgOiBcImJvcmRlci1sLWdyZWVuLTUwMFwiXHJcbiAgICAgICAgfVwiXHJcbiAgICAgICAgZGF0YS10b2RvLWlkPSR7bmV3VG9kby5pZH1cclxuICAgICAgICA+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbCBmb3I9JHtuZXdUb2RvLmlkfSBjbGFzcz1cImJsb2NrIHJlbGF0aXZlIGZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgaWQ9JHtuZXdUb2RvLmlkfVxyXG4gICAgICAgICAgICAgIGNsYXNzPVwidy00IGgtNCBtLTAgcC0wIGFsaWduLW1pZGRsZSB0b2RvLXN0YXR1cyBvcGFjaXR5LTAgdy0wIGgtMCBhYnNvbHV0ZSBwZWVyXCJcclxuICAgICAgICAgICAgICAke25ld1RvZG8uY29tcGxldGVkID09PSB0cnVlID8gXCJjaGVja2VkXCIgOiBcIlwifVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNoZWNrbWFyayBmbGV4IGl0ZW1zLW1pZGRsZSBoLTkgdy05IGJnLWdyYXktMjAwIHJvdW5kZWQtZnVsbCBwZWVyLWNoZWNrZWQ6YmctZ3JlZW4tNTAwIC10b3AtMSByaWdodC05XCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9JHtDaGVja30gYWx0PVwidGlja1wiIHdpZHRoPVwiMjBweFwiIGNsYXNzPVwibXgtYXV0byBjaGVja21hcmstaW1nIFxyXG4gICAgICAgICAgICAgICR7bmV3VG9kby5jb21wbGV0ZWQgPyBcImJsb2NrXCIgOiBcImhpZGRlblwifVwiLz5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRvZG8tdGl0bGUgcGwtMlwiPiR7bmV3VG9kby50aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4XCI+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIHRvZG8tZHVlLWRhdGVcIj5EdWU6ICR7bmV3VG9kby5kdWVEYXRlfTwvcD5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwiYm9yZGVyLTIgYm9yZGVyLWluZGlnby01MDAgYmctaW5kaWdvLTUwMCBob3Zlcjpib3JkZXItaW5kaWdvLTQwMCBob3ZlcjpiZy1pbmRpZ28tNDAwIHJvdW5kZWQtZnVsbCBweC0yIHB5LTIgbXgtMiBvcGVuLW1vZGFsLWJ0biB0b2RvLWRldGFpbHMtYnRuIHVwZGF0ZVRvZG9Nb2RhbEJ0blwiXHJcbiAgICAgICAgICAgIGlkPSR7bmV3VG9kby5pZH1cclxuICAgICAgICAgICAgZGF0YS1wcm9qZWN0LWlkPSR7c2VsZWN0ZWRQcm9qZWN0LmlkfVxyXG4gICAgICAgICAgICBkYXRhLXRvZG8taWQ9JHtuZXdUb2RvLmlkfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz0ke1VwZGF0ZX0gYWx0PVwidXBkYXRlXCIgd2lkdGg9XCIyMHB4XCIgY2xhc3M9XCJ0b2RvLWRldGFpbHMtYnRuXCIvPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICBjbGFzcz1cImJvcmRlci0yIGJvcmRlci1yZWQtNTAwIHB4LTIgYmctcmVkLTUwMCBob3ZlcjpiZy1yZWQtNDAwIGhvdmVyOmJvcmRlci1yZWQtNDAwIHRleHQtd2hpdGUgcm91bmRlZC1mdWxsIGRlbGV0ZS10b2RvLWJ0blwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICA8aW1nIHNyYz0ke0RlbGV0ZX0gYWx0PVwiZGVsZXRlXCIgd2lkdGg9XCIyMHB4XCIgY2xhc3M9XCJkZWxldGUtdG9kby1idG5cIiAvPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgXHJcbiAgICBgO1xyXG4gICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdUb2RvRGl2RWwpO1xyXG5cclxuICAgIC8vIFJFU0VUIElOUFVUU1xyXG4gICAgdG9kb1RpdGxlLnZhbHVlID0gXCJcIjtcclxuICAgIHRvZG9EZXNjcmlwdGlvbi52YWx1ZSA9IFwiXCI7XHJcbiAgICB0b2RvRHVlRGF0ZS52YWx1ZSA9IFwiXCI7XHJcbiAgICB0b2RvUHJpb3JpdHkudmFsdWUgPSBcIlwiO1xyXG4gIH1cclxufTtcclxuIiwiaW1wb3J0IHsgUmVtb3ZlTW9kYWxMaXN0ZW5lcnMsIE9wZW5DbG9zZU1vZGFsIH0gZnJvbSBcIi4vTW9kYWxcIjtcclxuaW1wb3J0IHsgQWRkRGF0YSB9IGZyb20gXCIuLi9Mb2NhbFN0b3JhZ2UvQWRkRGF0YVwiO1xyXG5cclxuLypcclxuICBERUxFVEUgVE9ETyBMT0dJQ1xyXG5cclxuICBPTiBDTElDS0lORyBERUxFVEUgQlROXHJcbiAgREVMRVRFIFRIRSBDTElDS0VEIFRPRE8gRlJPTSBTRUxFQ1RFRCBQUk9KRUNUXHJcbiAgUkVNT1ZFIFBSRVZJT1VTIEVWRU5UIExJU1RFTkVSUyBGT1IgQUxMIFVQREFURSBUT0RPIEJUTlMgQU5EIE1PREFMXHJcbiAgQUREIEVWRU5UIExJU1RFTkVSUyBGT1IgQUxMIFVQREFURSBUT0RPIEJUTlMgQU5EIE1PREFMXHJcbiAgREVMRVRFIFRPRE8gT04gVEhFIERPTVxyXG4qL1xyXG5cclxuZXhwb3J0IGNvbnN0IERlbGV0ZVRvZG8gPSAocm9vdCwgYWxsUHJvamVjdHMpID0+IHtcclxuICBjb25zdCB0b2RvQ29udGFpbmVyID0gcm9vdC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tY29udGFpbmVyXCIpO1xyXG4gIGNvbnN0IGVtcHR5VG9kb01lc3NhZ2UgPSByb290LnF1ZXJ5U2VsZWN0b3IoXCIuZW1wdHktdG9kb3MtY29udGFpbmVyXCIpO1xyXG5cclxuICB0b2RvQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4gb25DbGlja0RlbGV0ZVRvZG9CdG4oZSkpO1xyXG5cclxuICBmdW5jdGlvbiBvbkNsaWNrRGVsZXRlVG9kb0J0bihlKSB7XHJcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGVsZXRlLXRvZG8tYnRuXCIpKSB7XHJcbiAgICAgIGxldCBjbGlja2VkVG9kb0NhcmQ7XHJcblxyXG4gICAgICBlLnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwiaW1nXCJcclxuICAgICAgICA/IChjbGlja2VkVG9kb0NhcmQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudClcclxuICAgICAgICA6IChjbGlja2VkVG9kb0NhcmQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQpO1xyXG5cclxuICAgICAgY29uc3QgcHJvamVjdElkID0gY2xpY2tlZFRvZG9DYXJkLmdldEF0dHJpYnV0ZShcImRhdGEtdG9kby1pZFwiKTtcclxuXHJcbiAgICAgIGNsaWNrZWRUb2RvQ2FyZC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xyXG5cclxuICAgICAgaWYgKHRvZG9Db250YWluZXIuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgZW1wdHlUb2RvTWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIGVtcHR5VG9kb01lc3NhZ2UuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgc2VsZWN0ZWRQcm9qZWN0O1xyXG5cclxuICAgICAgYWxsUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICAgIGlmIChwcm9qZWN0LmFjdGl2ZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgc2VsZWN0ZWRQcm9qZWN0ID0gcHJvamVjdDtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgc2VsZWN0ZWRQcm9qZWN0LmRlbGV0ZVByb2plY3RUb2RvKHByb2plY3RJZCk7XHJcblxyXG4gICAgICBBZGREYXRhKGFsbFByb2plY3RzKTtcclxuXHJcbiAgICAgIFJlbW92ZU1vZGFsTGlzdGVuZXJzKFwidXBkYXRlVG9kb01vZGFsXCIsIFwidXBkYXRlVG9kb01vZGFsQnRuXCIpO1xyXG4gICAgICBPcGVuQ2xvc2VNb2RhbChcInVwZGF0ZVRvZG9Nb2RhbFwiLCBcInVwZGF0ZVRvZG9Nb2RhbEJ0blwiKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcbiIsIi8vIEVWRU5UIExJU1RFTkVSUyBUTyBPUEVOLyBDTE9TRSBNT0RBTFNcclxuXHJcbmV4cG9ydCBjb25zdCBPcGVuQ2xvc2VNb2RhbCA9IChtb2RhbENsYXNzLCBidG5DbGFzcykgPT4ge1xyXG4gIGRvY3VtZW50XHJcbiAgICAucXVlcnlTZWxlY3RvckFsbChgLiR7bW9kYWxDbGFzc31gKVxyXG4gICAgLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiBDbG9zZU1vZGFsKGUpKSk7XHJcbiAgZG9jdW1lbnRcclxuICAgIC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtidG5DbGFzc31gKVxyXG4gICAgLmZvckVhY2goKGl0ZW0pID0+XHJcbiAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IE9wZW5Nb2RhbChtb2RhbENsYXNzKSlcclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUmVtb3ZlTW9kYWxMaXN0ZW5lcnMgPSAobW9kYWxDbGFzcywgYnRuQ2xhc3MpID0+IHtcclxuICBkb2N1bWVudFxyXG4gICAgLnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke21vZGFsQ2xhc3N9YClcclxuICAgIC5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4gQ2xvc2VNb2RhbChlKSkpO1xyXG4gIGRvY3VtZW50XHJcbiAgICAucXVlcnlTZWxlY3RvckFsbChgLiR7YnRuQ2xhc3N9YClcclxuICAgIC5mb3JFYWNoKChpdGVtKSA9PlxyXG4gICAgICBpdGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBPcGVuTW9kYWwobW9kYWxDbGFzcykpXHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEF0dGFjaE9wZW5DbG9zZU1vZGFsID0gKHRvZG9JZCkgPT4ge1xyXG4gIGRvY3VtZW50XHJcbiAgICAuZ2V0RWxlbWVudEJ5SWQoYCR7dG9kb0lkfXVwZGF0ZVRvZG9gKVxyXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdXBkYXRlVG9kb01vZGFsXCIpLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgQ2xvc2VNb2RhbCA9IChldmVudCkgPT4ge1xyXG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibW9kYWxcIikpIHtcclxuICAgIGV2ZW50LnRhcmdldC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgT3Blbk1vZGFsID0gKG1vZGFsQ2xhc3MpID0+IHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHttb2RhbENsYXNzfWApLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBDbG9zZU1vZGFsV2l0aEJ0biA9IChidG5DbGFzcykgPT4ge1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2J0bkNsYXNzfWApLmZvckVhY2goKGNsb3NlQnRuKSA9PiB7XHJcbiAgICBjbG9zZUJ0bi5jbG9zZXN0KFwiLm1vZGFsXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBDbG9zZU1vZGFsV2l0aENyb3NzQnRuID0gKGJ0bkNsYXNzKSA9PiB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7YnRuQ2xhc3N9YCkuZm9yRWFjaCgoY2xvc2VCdG4pID0+IHtcclxuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGNsb3NlQnRuLmNsb3Nlc3QoXCIubW9kYWxcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBSZW5kZXJTZWxlY3RlZFByb2plY3ROYW1lID0gKHJvb3QsIHByb2plY3ROYW1lKSA9PiB7XHJcbiAgY29uc3QgcHJvamVjdE5hbWVFbCA9IHJvb3QucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RlZC1wcm9qZWN0LW5hbWVcIik7XHJcblxyXG4gIHByb2plY3ROYW1lRWwudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcclxufTtcclxuIiwiaW1wb3J0IHtcclxuICBSZW1vdmVNb2RhbExpc3RlbmVycyxcclxuICBPcGVuQ2xvc2VNb2RhbCxcclxuICBDbG9zZU1vZGFsV2l0aEJ0bixcclxufSBmcm9tIFwiLi9Nb2RhbFwiO1xyXG5cclxuaW1wb3J0IFVwZGF0ZSBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlcy91cGRhdGUuc3ZnXCI7XHJcbmltcG9ydCBEZWxldGUgZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvZGVsZXRlLnN2Z1wiO1xyXG5pbXBvcnQgQ2hlY2sgZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvY2hlY2suc3ZnXCI7XHJcblxyXG4vKlxyXG4gIFJFTkRFUiBTRUxFQ1RFRCBQUk9KRUNUIFRPRE9TIExPR0lDXHJcblxyXG4gIElGIFNFTEVDVEVEIFBST0pFQ1QgRE9FUyBOT1QgQ09OVEFJTiBBTlkgVE9ET1MsXHJcbiAgU0hPVyBBIE1FU1NBR0UgVE8gVVNFUiBUSEFUIFBST0pFQ1QgSVMgRU1QVFlcclxuICBcclxuICBJRiBQUk9KRUNUIENPTlRBSU5TIFRPRE9TLFxyXG4gIFJFTkRFUiBUSEVNIE9OIFRIRSBET00sXHJcbiAgUkVNT1ZFIEFMTCBFVkVOVCBMSVNURU5FUlMgRk9SIFVQREFURSBUT0RPIEJUTiBBTkQgTU9EQUxcclxuICBUSEFUIFdFUkUgQVRUQUNIRUQgVE8gUFJFVklPVVMgUFJPSkVDVFxyXG4gIEFERCBORVcgRVZFTlQgTElTVEVORVJTIEZPUiBVUERBVEUgVE9ETyBCVE4gQU5EIE1PREFMXHJcbiAgRk9SIFRIRSBORVdMWSBSRU5ERVJFRCBUT0RPU1xyXG4qL1xyXG5leHBvcnQgY29uc3QgUmVuZGVyU2VsZWN0ZWRQcm9qZWN0VG9kb3MgPSAocm9vdCwgcHJvamVjdCkgPT4ge1xyXG4gIGNvbnN0IGVtcHR5UHJvamVjdE1lc3NhZ2UgPSByb290LnF1ZXJ5U2VsZWN0b3IoXCIuZW1wdHktdG9kb3MtY29udGFpbmVyXCIpO1xyXG4gIGNvbnN0IHByb2plY3RDb250YWluZXIgPSByb290LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1jb250YWluZXJcIik7XHJcblxyXG4gIGlmIChwcm9qZWN0LlRvZG9MaXN0Lmxlbmd0aCkge1xyXG4gICAgZW1wdHlQcm9qZWN0TWVzc2FnZS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgZW1wdHlQcm9qZWN0TWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKFwiYmxvY2tcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIGVtcHR5UHJvamVjdE1lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICAgIGVtcHR5UHJvamVjdE1lc3NhZ2UuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIpO1xyXG4gIH1cclxuXHJcbiAgcHJvamVjdENvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIHByb2plY3RDb250YWluZXIuaW5uZXJIVE1MICs9IHByb2plY3QuVG9kb0xpc3QubWFwKCh0b2RvKSA9PiB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgPGRpdiBjbGFzcz1cInRvZG8tY2FyZFwiPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzcz1cImJnLXdoaXRlIHJvdW5kZWQgcC0zIG1iLTMgdGV4dC1sZyBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gYm9yZGVyLWwtNCB0b2RvLWNhcmQtY29udGFpbmVyICR7XHJcbiAgICAgICAgICAgICAgdG9kby5wcmlvcml0eSA9PT0gMVxyXG4gICAgICAgICAgICAgICAgPyBcImJvcmRlci1sLXJlZC01MDBcIlxyXG4gICAgICAgICAgICAgICAgOiB0b2RvLnByaW9yaXR5ID09PSAyXHJcbiAgICAgICAgICAgICAgICA/IFwiYm9yZGVyLWwteWVsbG93LTUwMFwiXHJcbiAgICAgICAgICAgICAgICA6IFwiYm9yZGVyLWwtZ3JlZW4tNTAwXCJcclxuICAgICAgICAgICAgfVwiXHJcbiAgICAgICAgICAgIGRhdGEtdG9kby1pZD0ke3RvZG8uaWR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPSR7dG9kby5pZH0gY2xhc3M9XCJibG9jayByZWxhdGl2ZSBmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgIGlkPSR7dG9kby5pZH1cclxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ3LTQgaC00IG0tMCBwLTAgYWxpZ24tbWlkZGxlIHRvZG8tc3RhdHVzIG9wYWNpdHktMCB3LTAgaC0wIGFic29sdXRlIHBlZXJcIlxyXG4gICAgICAgICAgICAgICAgICAke3RvZG8uY29tcGxldGVkID09PSB0cnVlID8gXCJjaGVja2VkXCIgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2hlY2ttYXJrIGZsZXggaXRlbXMtbWlkZGxlIGgtOSB3LTkgYmctZ3JheS0yMDAgcm91bmRlZC1mdWxsIHBlZXItY2hlY2tlZDpiZy1ncmVlbi01MDAgLXRvcC0xIHJpZ2h0LTlcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9JHtDaGVja30gYWx0PVwidGlja1wiIHdpZHRoPVwiMjBweFwiIGNsYXNzPVwibXgtYXV0byBjaGVja21hcmstaW1nICR7XHJcbiAgICAgIHRvZG8uY29tcGxldGVkID8gXCJibG9ja1wiIDogXCJoaWRkZW5cIlxyXG4gICAgfVwiLz5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidG9kby10aXRsZSBwbC0yXCI+JHt0b2RvLnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXhcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIHRvZG8tZHVlLWRhdGVcIj5EdWU6ICR7XHJcbiAgICAgICAgICAgICAgICB0b2RvLmR1ZURhdGVcclxuICAgICAgICAgICAgICB9PC9wPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJib3JkZXItMiBib3JkZXItaW5kaWdvLTUwMCBiZy1pbmRpZ28tNTAwIGhvdmVyOmJvcmRlci1pbmRpZ28tNDAwIGhvdmVyOmJnLWluZGlnby00MDAgcm91bmRlZC1mdWxsIHB4LTIgcHktMiBteC0yIG9wZW4tbW9kYWwtYnRuIHRvZG8tZGV0YWlscy1idG4gdXBkYXRlVG9kb01vZGFsQnRuXCJcclxuICAgICAgICAgICAgICAgIGlkPSR7dG9kby5pZH1cclxuICAgICAgICAgICAgICAgIGRhdGEtcHJvamVjdC1pZD0ke3Byb2plY3QuaWR9XHJcbiAgICAgICAgICAgICAgICBkYXRhLXRvZG8taWQ9JHt0b2RvLmlkfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPSR7VXBkYXRlfSBhbHQ9XCJ1cGRhdGVcIiB3aWR0aD1cIjIwcHhcIiBjbGFzcz1cInRvZG8tZGV0YWlscy1idG5cIi8+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImJvcmRlci0yIGJvcmRlci1yZWQtNTAwIHB4LTIgYmctcmVkLTUwMCBob3ZlcjpiZy1yZWQtNDAwIGhvdmVyOmJvcmRlci1yZWQtNDAwIHRleHQtd2hpdGUgcm91bmRlZC1mdWxsIGRlbGV0ZS10b2RvLWJ0blwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICA8aW1nIHNyYz0ke0RlbGV0ZX0gYWx0PVwiZGVsZXRlXCIgd2lkdGg9XCIyMHB4XCIgY2xhc3M9XCJkZWxldGUtdG9kby1idG5cIiAvPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICB9KS5qb2luKFwiXCIpO1xyXG5cclxuICBSZW1vdmVNb2RhbExpc3RlbmVycyhcInVwZGF0ZVRvZG9Nb2RhbFwiLCBcInVwZGF0ZVRvZG9Nb2RhbEJ0blwiKTtcclxuICBPcGVuQ2xvc2VNb2RhbChcInVwZGF0ZVRvZG9Nb2RhbFwiLCBcInVwZGF0ZVRvZG9Nb2RhbEJ0blwiKTtcclxuICBDbG9zZU1vZGFsV2l0aEJ0bihcIm1vZGFsLWJ0blwiKTtcclxufTtcclxuIiwiaW1wb3J0IHsgUmVuZGVyU2VsZWN0ZWRQcm9qZWN0TmFtZSB9IGZyb20gXCIuL1JlbmRlclNlbGVjdGVkUHJvamVjdE5hbWVcIjtcclxuaW1wb3J0IHsgUmVuZGVyU2VsZWN0ZWRQcm9qZWN0VG9kb3MgfSBmcm9tIFwiLi9SZW5kZXJTZWxlY3RlZFByb2plY3RUb2Rvc1wiO1xyXG5cclxuaW1wb3J0IENhbGVuZGFyRGFyayBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9jYWxlbmRhci1kYXJrLnN2Z1wiO1xyXG5pbXBvcnQgQ2FsZW5kYXJMaWdodCBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9jYWxlbmRhci1pbWcuc3ZnXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU2VsZWN0UHJvamVjdCA9IChyb290LCBhbGxQcm9qZWN0KSA9PiB7XHJcbiAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IHJvb3QucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWNvbnRhaW5lclwiKTtcclxuXHJcbiAgcHJvamVjdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IG9uQ2xpY2tQcm9qZWN0KGUpKTtcclxuXHJcbiAgZnVuY3Rpb24gb25DbGlja1Byb2plY3QoZSkge1xyXG4gICAgaWYgKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pZFwiKSkge1xyXG4gICAgICBjb25zdCBwcm9qZWN0QnRucyA9IHByb2plY3RDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0LWJ0blwiKTtcclxuICAgICAgcHJvamVjdEJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJiZy1pbmRpZ28tNTAwXCIpO1xyXG4gICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiYm9yZGVyLWluZGlnby01MDBcIik7XHJcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJ0ZXh0LXdoaXRlXCIpO1xyXG4gICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwidGV4dC1zbGF0ZS05MDBcIik7XHJcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJib3JkZXItd2hpdGVcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IGltZyA9IGJ0bi5jaGlsZHJlblswXTtcclxuICAgICAgICBpbWcuc3JjID0gQ2FsZW5kYXJEYXJrO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJiZy1pbmRpZ28tNTAwXCIpO1xyXG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYm9yZGVyLWluZGlnby01MDBcIik7XHJcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LXdoaXRlXCIpO1xyXG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwidGV4dC1zbGF0ZS05MDBcIik7XHJcbiAgICAgIGUudGFyZ2V0LmNoaWxkcmVuWzBdLnNyYyA9IENhbGVuZGFyTGlnaHQ7XHJcblxyXG4gICAgICBhbGxQcm9qZWN0LmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgICAgICBwcm9qZWN0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaWRcIikgPT09IHByb2plY3QuaWQpIHtcclxuICAgICAgICAgIHByb2plY3QuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgIFJlbmRlclNlbGVjdGVkUHJvamVjdE5hbWUocm9vdCwgcHJvamVjdC5wcm9qZWN0TmFtZSk7XHJcbiAgICAgICAgICBSZW5kZXJTZWxlY3RlZFByb2plY3RUb2Rvcyhyb290LCBwcm9qZWN0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuIiwiaW1wb3J0IHsgVXBkYXRlVG9kbyB9IGZyb20gXCIuL1VwZGF0ZVRvZG9cIjtcclxuLypcclxuICBUT0RPIERFVEFJTFMgTE9HSUNcclxuXHJcbiAgVE9ETyBERVRBSUxTXHJcbiAgV0hFTiBFRElUIEJVVFRPTiBJUyBDTElDS0VELFxyXG4gIFNIT1cgREVUQUlMUyBPRiBDTElDS0VEIFRPRE8gSU4gQSBNT0RBTFxyXG4gIElGIFVQREFURSBCVVRUT04gSVMgQ0xJQ0tFRFxyXG4gIFVQREFURSBUT0RPIE1PRFVMRSBJUyBDQUxMRURcclxuXHJcbiovXHJcbmV4cG9ydCBjb25zdCBUb2RvRGV0YWlscyA9IChhbGxQcm9qZWN0cykgPT4ge1xyXG4gIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tY29udGFpbmVyXCIpO1xyXG4gIGNvbnN0IHRvZG9UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGV0YWlsLXRvZG8tdGl0bGVcIik7XHJcbiAgY29uc3QgdG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXRhaWwtdG9kby1kZXNjcmlwdGlvblwiKTtcclxuICBjb25zdCB0b2RvRHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGV0YWlsLXRvZG8tZHVlLWRhdGVcIik7XHJcbiAgY29uc3QgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXRhaWwtdG9kby1wcmlvcml0eVwiKTtcclxuICBjb25zdCB0b2RvQ29tcGxldGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXRhaWwtdG9kby1jb21wbGV0ZWRcIik7XHJcblxyXG4gIGNvbnN0IHVwZGF0ZVRvZG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVwZGF0ZS10b2RvLWJ0blwiKTtcclxuXHJcbiAgdG9kb0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IG9uQ2xpY2tUb2RvRGV0YWlsc0J0bihlKSk7XHJcbiAgbGV0IGNsaWNrZWRUb2RvQ2FyZCwgdG9kb0lkLCBzZWxlY3RlZFByb2plY3Q7XHJcblxyXG4gIGZ1bmN0aW9uIG9uQ2xpY2tUb2RvRGV0YWlsc0J0bihlKSB7XHJcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidG9kby1kZXRhaWxzLWJ0blwiKSkge1xyXG4gICAgICBlLnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwiaW1nXCJcclxuICAgICAgICA/IChjbGlja2VkVG9kb0NhcmQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudClcclxuICAgICAgICA6IChjbGlja2VkVG9kb0NhcmQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQpO1xyXG5cclxuICAgICAgdG9kb0lkID0gY2xpY2tlZFRvZG9DYXJkLmdldEF0dHJpYnV0ZShcImRhdGEtdG9kby1pZFwiKTtcclxuXHJcbiAgICAgIGFsbFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgICAgICBpZiAocHJvamVjdC5hY3RpdmUgPT09IHRydWUpIHtcclxuICAgICAgICAgIHNlbGVjdGVkUHJvamVjdCA9IHByb2plY3Q7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGRldGFpbHMgPSBzZWxlY3RlZFByb2plY3QuZ2V0U2luZ2xlVG9kbyh0b2RvSWQpO1xyXG5cclxuICAgICAgdG9kb1RpdGxlLnZhbHVlID0gZGV0YWlscy50aXRsZTtcclxuICAgICAgdG9kb0Rlc2NyaXB0aW9uLnZhbHVlID0gZGV0YWlscy5kZXNjcmlwdGlvbjtcclxuICAgICAgdG9kb0R1ZURhdGUudmFsdWUgPSBkZXRhaWxzLmR1ZURhdGU7XHJcbiAgICAgIHRvZG9Qcmlvcml0eS52YWx1ZSA9IGRldGFpbHMucHJpb3JpdHk7XHJcbiAgICAgIHRvZG9Db21wbGV0ZWQudmFsdWUgPSBkZXRhaWxzLmNvbXBsZXRlZCA/IFwiMVwiIDogXCIwXCI7XHJcblxyXG4gICAgICBVcGRhdGVUb2RvKGNsaWNrZWRUb2RvQ2FyZCwgdG9kb0lkLCBzZWxlY3RlZFByb2plY3QsIGFsbFByb2plY3RzKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcbiIsIi8qXHJcbiAgVVBEQVRFIFNUQVRVUyBPRiBUT0RPIExPR0lDXHJcblxyXG4gIFdIRU4gVE9ETyBUSVRMRS8gQ0hFQ0tCT1ggSVMgQ0xJQ0tFRFxyXG4gIENIQU5HRSBUSEUgU1RBVFVTIE9GIFRPRE8gVE8gQ09NUExFVEVEL0lOIENPTVBMRVRFXHJcbiAgREVQRU5ESU5HIE9OIFRIRSBQUkVWSU9VUyBTVEFURVxyXG4qL1xyXG5leHBvcnQgY29uc3QgVG9kb1N0YXR1cyA9IChyb290LCBhbGxQcm9qZWN0cykgPT4ge1xyXG4gIGNvbnN0IHRvZG9Db250YWluZXIgPSByb290LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1jb250YWluZXJcIik7XHJcblxyXG4gIHRvZG9Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiBjaGFuZ2VUb2RvU3RhdHVzKGUpKTtcclxuXHJcbiAgZnVuY3Rpb24gY2hhbmdlVG9kb1N0YXR1cyhlKSB7XHJcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidG9kby1zdGF0dXNcIikpIHtcclxuICAgICAgbGV0IHNlbGVjdGVkUHJvamVjdDtcclxuICAgICAgY29uc3QgdG9kb0lkID1cclxuICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICBcImRhdGEtdG9kby1pZFwiXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgIGFsbFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgICAgICBpZiAocHJvamVjdC5hY3RpdmUgPT09IHRydWUpIHtcclxuICAgICAgICAgIHNlbGVjdGVkUHJvamVjdCA9IHByb2plY3Q7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHNlbGVjdGVkUHJvamVjdC51cGRhdGVQcm9qZWN0VG9kb0NvbXBsZXRlZCh0b2RvSWQpO1xyXG5cclxuICAgICAgY29uc3QgY2hlY2ttYXJrSW1nID1cclxuICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hlY2ttYXJrLWltZ1wiKTtcclxuXHJcbiAgICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XHJcbiAgICAgICAgY2hlY2ttYXJrSW1nLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgY2hlY2ttYXJrSW1nLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjaGVja21hcmtJbWcuY2xhc3NMaXN0LnJlbW92ZShcImJsb2NrXCIpO1xyXG4gICAgICAgIGNoZWNrbWFya0ltZy5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgeyBDbG9zZU1vZGFsV2l0aEJ0biB9IGZyb20gXCIuL01vZGFsXCI7XHJcbmltcG9ydCB7IEFkZERhdGEgfSBmcm9tIFwiLi4vTG9jYWxTdG9yYWdlL0FkZERhdGFcIjtcclxuXHJcbi8qXHJcbiAgVE9ETyBVUERBVEUgTE9HSUNcclxuXHJcbiAgV0hFTiBVUERBVEUgQlVUVE9OIElTIENMSUNLRUQgSU4gVEhFIE1PREFMXHJcbiAgVVBEQVRFIFRIRSBUT0RPIFdJVEggVEhFIE5FV0xZIEVOVEVSRUQgREFUQVxyXG4gIEFORCBDTE9TRSBUSEUgTU9EQUxcclxuKi9cclxuZXhwb3J0IGNvbnN0IFVwZGF0ZVRvZG8gPSAoXHJcbiAgY2xpY2tlZFRvZG9DYXJkLFxyXG4gIHRvZG9JZCxcclxuICBzZWxlY3RlZFByb2plY3QsXHJcbiAgYWxsUHJvamVjdHNcclxuKSA9PiB7XHJcbiAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXRhaWwtdG9kby10aXRsZVwiKTtcclxuICBjb25zdCB0b2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRldGFpbC10b2RvLWRlc2NyaXB0aW9uXCIpO1xyXG4gIGNvbnN0IHRvZG9EdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXRhaWwtdG9kby1kdWUtZGF0ZVwiKTtcclxuICBjb25zdCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRldGFpbC10b2RvLXByaW9yaXR5XCIpO1xyXG4gIGNvbnN0IHRvZG9Db21wbGV0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRldGFpbC10b2RvLWNvbXBsZXRlZFwiKTtcclxuXHJcbiAgY29uc3QgdXBkYXRlVG9kb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXBkYXRlLXRvZG8tYnRuXCIpO1xyXG5cclxuICB1cGRhdGVUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB1cGRhdGVUb2RvKTtcclxuXHJcbiAgZnVuY3Rpb24gdXBkYXRlVG9kbygpIHtcclxuICAgIHNlbGVjdGVkUHJvamVjdC51cGRhdGVQcm9qZWN0VG9kbyhcclxuICAgICAgdG9kb0lkLFxyXG4gICAgICB0b2RvVGl0bGUudmFsdWUsXHJcbiAgICAgIHRvZG9EZXNjcmlwdGlvbi52YWx1ZSxcclxuICAgICAgdG9kb0R1ZURhdGUudmFsdWUsXHJcbiAgICAgIHBhcnNlSW50KHRvZG9Qcmlvcml0eS52YWx1ZSksXHJcbiAgICAgIHRvZG9Db21wbGV0ZWQudmFsdWUgPT09IFwiMVwiID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHRvZG8gPSBzZWxlY3RlZFByb2plY3QuZ2V0U2luZ2xlVG9kbyh0b2RvSWQpO1xyXG5cclxuICAgIGNvbnN0IHRvZG9Qcmlvcml0eUVsID0gY2xpY2tlZFRvZG9DYXJkO1xyXG4gICAgY29uc3QgdG9kb1RpdGxlRWwgPSBjbGlja2VkVG9kb0NhcmQucXVlcnlTZWxlY3RvcihcIi50b2RvLXRpdGxlXCIpO1xyXG4gICAgY29uc3QgdG9kb0lucHV0ID0gY2xpY2tlZFRvZG9DYXJkLnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1zdGF0dXNcIik7XHJcbiAgICBjb25zdCB0aWNrSW1nID0gY2xpY2tlZFRvZG9DYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuY2hlY2ttYXJrLWltZ1wiKTtcclxuICAgIGNvbnN0IHRvZG9EdWVEYXRlRWwgPSBjbGlja2VkVG9kb0NhcmQucXVlcnlTZWxlY3RvcihcIi50b2RvLWR1ZS1kYXRlXCIpO1xyXG5cclxuICAgIHRvZG9UaXRsZUVsLnRleHRDb250ZW50ID0gdG9kby50aXRsZTtcclxuXHJcbiAgICBpZiAodG9kby5wcmlvcml0eSA9PT0gMSkge1xyXG4gICAgICB0b2RvUHJpb3JpdHlFbC5jbGFzc0xpc3QuYWRkKFwiYm9yZGVyLWwtcmVkLTUwMFwiKTtcclxuICAgICAgdG9kb1ByaW9yaXR5RWwuY2xhc3NMaXN0LnJlbW92ZShcImJvcmRlci1sLXllbGxvdy01MDBcIik7XHJcbiAgICAgIHRvZG9Qcmlvcml0eUVsLmNsYXNzTGlzdC5yZW1vdmUoXCJib3JkZXItbC1ncmVlbi01MDBcIik7XHJcbiAgICB9IGVsc2UgaWYgKHRvZG8ucHJpb3JpdHkgPT09IDIpIHtcclxuICAgICAgdG9kb1ByaW9yaXR5RWwuY2xhc3NMaXN0LnJlbW92ZShcImJvcmRlci1sLXJlZC01MDBcIik7XHJcbiAgICAgIHRvZG9Qcmlvcml0eUVsLmNsYXNzTGlzdC5hZGQoXCJib3JkZXItbC15ZWxsb3ctNTAwXCIpO1xyXG4gICAgICB0b2RvUHJpb3JpdHlFbC5jbGFzc0xpc3QucmVtb3ZlKFwiYm9yZGVyLWwtZ3JlZW4tNTAwXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdG9kb1ByaW9yaXR5RWwuY2xhc3NMaXN0LnJlbW92ZShcImJvcmRlci1sLXJlZC01MDBcIik7XHJcbiAgICAgIHRvZG9Qcmlvcml0eUVsLmNsYXNzTGlzdC5yZW1vdmUoXCJib3JkZXItbC15ZWxsb3ctNTAwXCIpO1xyXG4gICAgICB0b2RvUHJpb3JpdHlFbC5jbGFzc0xpc3QuYWRkKFwiYm9yZGVyLWwtZ3JlZW4tNTAwXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZG9JbnB1dC5jaGVja2VkID0gdG9kby5jb21wbGV0ZWQ7XHJcbiAgICBpZiAodG9kby5jb21wbGV0ZWQpIHtcclxuICAgICAgdGlja0ltZy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgICB0aWNrSW1nLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRpY2tJbWcuY2xhc3NMaXN0LnJlbW92ZShcImJsb2NrXCIpO1xyXG4gICAgICB0aWNrSW1nLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgdG9kb0R1ZURhdGVFbC50ZXh0Q29udGVudCA9IGBEdWU6ICR7dG9kby5kdWVEYXRlfWA7XHJcblxyXG4gICAgQ2xvc2VNb2RhbFdpdGhCdG4oXCJtb2RhbC1idG5cIik7XHJcblxyXG4gICAgQWRkRGF0YShhbGxQcm9qZWN0cyk7XHJcbiAgfVxyXG59O1xyXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qXFxuISB0YWlsd2luZGNzcyB2My4zLjAgfCBNSVQgTGljZW5zZSB8IGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tXFxuKi8vKlxcbjEuIFByZXZlbnQgcGFkZGluZyBhbmQgYm9yZGVyIGZyb20gYWZmZWN0aW5nIGVsZW1lbnQgd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzQpXFxuMi4gQWxsb3cgYWRkaW5nIGEgYm9yZGVyIHRvIGFuIGVsZW1lbnQgYnkganVzdCBhZGRpbmcgYSBib3JkZXItd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRjc3MvdGFpbHdpbmRjc3MvcHVsbC8xMTYpXFxuKi9cXG5cXG4qLFxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBib3JkZXItd2lkdGg6IDA7IC8qIDIgKi9cXG4gIGJvcmRlci1zdHlsZTogc29saWQ7IC8qIDIgKi9cXG4gIGJvcmRlci1jb2xvcjogI2U1ZTdlYjsgLyogMiAqL1xcbn1cXG5cXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gIC0tdHctY29udGVudDogJyc7XFxufVxcblxcbi8qXFxuMS4gVXNlIGEgY29uc2lzdGVudCBzZW5zaWJsZSBsaW5lLWhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuMy4gVXNlIGEgbW9yZSByZWFkYWJsZSB0YWIgc2l6ZS5cXG40LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBzYW5zYCBmb250LWZhbWlseSBieSBkZWZhdWx0LlxcbjUuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgYHNhbnNgIGZvbnQtZmVhdHVyZS1zZXR0aW5ncyBieSBkZWZhdWx0LlxcbjYuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgYHNhbnNgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzIGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG5odG1sIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7IC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbiAgLW1vei10YWItc2l6ZTogNDsgLyogMyAqL1xcbiAgLW8tdGFiLXNpemU6IDQ7XFxuICAgICB0YWItc2l6ZTogNDsgLyogMyAqL1xcbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgU2Vnb2UgVUksIFJvYm90bywgVWJ1bnR1LCBDYW50YXJlbGwsIE5vdG8gU2Fucywgc2Fucy1zZXJpZiwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEFyaWFsLCBcXFwiTm90byBTYW5zXFxcIiwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCIsIFxcXCJOb3RvIENvbG9yIEVtb2ppXFxcIjsgLyogNCAqL1xcbiAgLXdlYmtpdC1mb250LWZlYXR1cmUtc2V0dGluZ3M6IG5vcm1hbDtcXG4gICAgICAgICAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBub3JtYWw7IC8qIDUgKi9cXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBub3JtYWw7IC8qIDYgKi9cXG59XFxuXFxuLypcXG4xLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gSW5oZXJpdCBsaW5lLWhlaWdodCBmcm9tIGBodG1sYCBzbyB1c2VycyBjYW4gc2V0IHRoZW0gYXMgYSBjbGFzcyBkaXJlY3RseSBvbiB0aGUgYGh0bWxgIGVsZW1lbnQuXFxuKi9cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG4xLiBBZGQgdGhlIGNvcnJlY3QgaGVpZ2h0IGluIEZpcmVmb3guXFxuMi4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2Ugb2YgYm9yZGVyIGNvbG9yIGluIEZpcmVmb3guIChodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTA2NTUpXFxuMy4gRW5zdXJlIGhvcml6b250YWwgcnVsZXMgYXJlIHZpc2libGUgYnkgZGVmYXVsdC5cXG4qL1xcblxcbmhyIHtcXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDsgLyogMyAqL1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYWJicjp3aGVyZShbdGl0bGVdKSB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBkZWZhdWx0IGZvbnQgc2l6ZSBhbmQgd2VpZ2h0IGZvciBoZWFkaW5ncy5cXG4qL1xcblxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2IHtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcbn1cXG5cXG4vKlxcblJlc2V0IGxpbmtzIHRvIG9wdGltaXplIGZvciBvcHQtaW4gc3R5bGluZyBpbnN0ZWFkIG9mIG9wdC1vdXQuXFxuKi9cXG5cXG5hIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBFZGdlIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKlxcbjEuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgYG1vbm9gIGZvbnQgZmFtaWx5IGJ5IGRlZmF1bHQuXFxuMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCxcXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6IHVpLW1vbm9zcGFjZSwgU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcXFwiTGliZXJhdGlvbiBNb25vXFxcIiwgXFxcIkNvdXJpZXIgTmV3XFxcIiwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qXFxuUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKlxcbjEuIFJlbW92ZSB0ZXh0IGluZGVudGF0aW9uIGZyb20gdGFibGUgY29udGVudHMgaW4gQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05OTkwODgsIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yMDEyOTcpXFxuMi4gQ29ycmVjdCB0YWJsZSBib3JkZXIgY29sb3IgaW5oZXJpdGFuY2UgaW4gYWxsIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTM1NzI5LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTk1MDE2KVxcbjMuIFJlbW92ZSBnYXBzIGJldHdlZW4gdGFibGUgYm9yZGVycyBieSBkZWZhdWx0LlxcbiovXFxuXFxudGFibGUge1xcbiAgdGV4dC1pbmRlbnQ6IDA7IC8qIDEgKi9cXG4gIGJvcmRlci1jb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgLyogMyAqL1xcbn1cXG5cXG4vKlxcbjEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbjIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4zLiBSZW1vdmUgZGVmYXVsdCBwYWRkaW5nIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMSAqL1xcbiAgbWFyZ2luOiAwOyAvKiAyICovXFxuICBwYWRkaW5nOiAwOyAvKiAzICovXFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlIGFuZCBGaXJlZm94LlxcbiovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbjIuIFJlbW92ZSBkZWZhdWx0IGJ1dHRvbiBzdHlsZXMuXFxuKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9J2J1dHRvbiddLFxcblt0eXBlPSdyZXNldCddLFxcblt0eXBlPSdzdWJtaXQnXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIDIgKi9cXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5Vc2UgdGhlIG1vZGVybiBGaXJlZm94IGZvY3VzIHN0eWxlIGZvciBhbGwgZm9jdXNhYmxlIGVsZW1lbnRzLlxcbiovXFxuXFxuOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IGF1dG87XFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBhZGRpdGlvbmFsIGA6aW52YWxpZGAgc3R5bGVzIGluIEZpcmVmb3guIChodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9nZWNrby1kZXYvYmxvYi8yZjllYWNkOWQzZDk5NWM5MzdiNDI1MWE1NTU3ZDk1ZDQ5NGM5YmUxL2xheW91dC9zdHlsZS9yZXMvZm9ybXMuY3NzI0w3MjgtTDczNylcXG4qL1xcblxcbjotbW96LXVpLWludmFsaWQge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSBhbmQgRmlyZWZveC5cXG4qL1xcblxcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLypcXG5Db3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBTYWZhcmkuXFxuKi9cXG5cXG46Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4yLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4qL1xcblxcblt0eXBlPSdzZWFyY2gnXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5SZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuKi9cXG5cXG46Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKlxcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiovXFxuXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qXFxuUmVtb3ZlcyB0aGUgZGVmYXVsdCBzcGFjaW5nIGFuZCBib3JkZXIgZm9yIGFwcHJvcHJpYXRlIGVsZW1lbnRzLlxcbiovXFxuXFxuYmxvY2txdW90ZSxcXG5kbCxcXG5kZCxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5ocixcXG5maWd1cmUsXFxucCxcXG5wcmUge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5maWVsZHNldCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5sZWdlbmQge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxub2wsXFxudWwsXFxubWVudSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLypcXG5QcmV2ZW50IHJlc2l6aW5nIHRleHRhcmVhcyBob3Jpem9udGFsbHkgYnkgZGVmYXVsdC5cXG4qL1xcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxufVxcblxcbi8qXFxuMS4gUmVzZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgb3BhY2l0eSBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kbGFicy90YWlsd2luZGNzcy9pc3N1ZXMvMzMwMClcXG4yLiBTZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgY29sb3IgdG8gdGhlIHVzZXIncyBjb25maWd1cmVkIGdyYXkgNDAwIGNvbG9yLlxcbiovXFxuXFxuaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIsIHRleHRhcmVhOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gIG9wYWNpdHk6IDE7IC8qIDEgKi9cXG4gIGNvbG9yOiAjOWNhM2FmOyAvKiAyICovXFxufVxcblxcbmlucHV0OjotbW96LXBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlciB7XFxuICBvcGFjaXR5OiAxOyAvKiAxICovXFxuICBjb2xvcjogIzljYTNhZjsgLyogMiAqL1xcbn1cXG5cXG5pbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIsIHRleHRhcmVhOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICBvcGFjaXR5OiAxOyAvKiAxICovXFxuICBjb2xvcjogIzljYTNhZjsgLyogMiAqL1xcbn1cXG5cXG5pbnB1dDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gIG9wYWNpdHk6IDE7IC8qIDEgKi9cXG4gIGNvbG9yOiAjOWNhM2FmOyAvKiAyICovXFxufVxcblxcbmlucHV0OjpwbGFjZWhvbGRlcixcXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcbiAgb3BhY2l0eTogMTsgLyogMSAqL1xcbiAgY29sb3I6ICM5Y2EzYWY7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5TZXQgdGhlIGRlZmF1bHQgY3Vyc29yIGZvciBidXR0b25zLlxcbiovXFxuXFxuYnV0dG9uLFxcbltyb2xlPVxcXCJidXR0b25cXFwiXSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qXFxuTWFrZSBzdXJlIGRpc2FibGVkIGJ1dHRvbnMgZG9uJ3QgZ2V0IHRoZSBwb2ludGVyIGN1cnNvci5cXG4qL1xcbjpkaXNhYmxlZCB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi8qXFxuMS4gTWFrZSByZXBsYWNlZCBlbGVtZW50cyBgZGlzcGxheTogYmxvY2tgIGJ5IGRlZmF1bHQuIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxcbjIuIEFkZCBgdmVydGljYWwtYWxpZ246IG1pZGRsZWAgdG8gYWxpZ24gcmVwbGFjZWQgZWxlbWVudHMgbW9yZSBzZW5zaWJseSBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL2plbnNpbW1vbnMvY3NzcmVtZWR5L2lzc3Vlcy8xNCNpc3N1ZWNvbW1lbnQtNjM0OTM0MjEwKVxcbiAgIFRoaXMgY2FuIHRyaWdnZXIgYSBwb29ybHkgY29uc2lkZXJlZCBsaW50IGVycm9yIGluIHNvbWUgdG9vbHMgYnV0IGlzIGluY2x1ZGVkIGJ5IGRlc2lnbi5cXG4qL1xcblxcbmltZyxcXG5zdmcsXFxudmlkZW8sXFxuY2FudmFzLFxcbmF1ZGlvLFxcbmlmcmFtZSxcXG5lbWJlZCxcXG5vYmplY3Qge1xcbiAgZGlzcGxheTogYmxvY2s7IC8qIDEgKi9cXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5Db25zdHJhaW4gaW1hZ2VzIGFuZCB2aWRlb3MgdG8gdGhlIHBhcmVudCB3aWR0aCBhbmQgcHJlc2VydmUgdGhlaXIgaW50cmluc2ljIGFzcGVjdCByYXRpby4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvMTQpXFxuKi9cXG5cXG5pbWcsXFxudmlkZW8ge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKiBNYWtlIGVsZW1lbnRzIHdpdGggdGhlIEhUTUwgaGlkZGVuIGF0dHJpYnV0ZSBzdGF5IGhpZGRlbiBieSBkZWZhdWx0ICovXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuKiwgOjpiZWZvcmUsIDo6YWZ0ZXIge1xcbiAgLS10dy1ib3JkZXItc3BhY2luZy14OiAwO1xcbiAgLS10dy1ib3JkZXItc3BhY2luZy15OiAwO1xcbiAgLS10dy10cmFuc2xhdGUteDogMDtcXG4gIC0tdHctdHJhbnNsYXRlLXk6IDA7XFxuICAtLXR3LXJvdGF0ZTogMDtcXG4gIC0tdHctc2tldy14OiAwO1xcbiAgLS10dy1za2V3LXk6IDA7XFxuICAtLXR3LXNjYWxlLXg6IDE7XFxuICAtLXR3LXNjYWxlLXk6IDE7XFxuICAtLXR3LXBhbi14OiAgO1xcbiAgLS10dy1wYW4teTogIDtcXG4gIC0tdHctcGluY2gtem9vbTogIDtcXG4gIC0tdHctc2Nyb2xsLXNuYXAtc3RyaWN0bmVzczogcHJveGltaXR5O1xcbiAgLS10dy1vcmRpbmFsOiAgO1xcbiAgLS10dy1zbGFzaGVkLXplcm86ICA7XFxuICAtLXR3LW51bWVyaWMtZmlndXJlOiAgO1xcbiAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XFxuICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XFxuICAtLXR3LXJpbmctaW5zZXQ6ICA7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XFxuICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xcbiAgLS10dy1yaW5nLWNvbG9yOiByZ2JhKDU5LCAxMzAsIDI0NiwgMC41KTtcXG4gIC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcXG4gIC0tdHctcmluZy1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xcbiAgLS10dy1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAwIHJnYmEoMCwwLDAsMCk7XFxuICAtLXR3LWJsdXI6ICA7XFxuICAtLXR3LWJyaWdodG5lc3M6ICA7XFxuICAtLXR3LWNvbnRyYXN0OiAgO1xcbiAgLS10dy1ncmF5c2NhbGU6ICA7XFxuICAtLXR3LWh1ZS1yb3RhdGU6ICA7XFxuICAtLXR3LWludmVydDogIDtcXG4gIC0tdHctc2F0dXJhdGU6ICA7XFxuICAtLXR3LXNlcGlhOiAgO1xcbiAgLS10dy1kcm9wLXNoYWRvdzogIDtcXG4gIC0tdHctYmFja2Ryb3AtYmx1cjogIDtcXG4gIC0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzczogIDtcXG4gIC0tdHctYmFja2Ryb3AtY29udHJhc3Q6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWdyYXlzY2FsZTogIDtcXG4gIC0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZTogIDtcXG4gIC0tdHctYmFja2Ryb3AtaW52ZXJ0OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1vcGFjaXR5OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1zYXR1cmF0ZTogIDtcXG4gIC0tdHctYmFja2Ryb3Atc2VwaWE6ICA7XFxufVxcblxcbjo6LXdlYmtpdC1iYWNrZHJvcCB7XFxuICAtLXR3LWJvcmRlci1zcGFjaW5nLXg6IDA7XFxuICAtLXR3LWJvcmRlci1zcGFjaW5nLXk6IDA7XFxuICAtLXR3LXRyYW5zbGF0ZS14OiAwO1xcbiAgLS10dy10cmFuc2xhdGUteTogMDtcXG4gIC0tdHctcm90YXRlOiAwO1xcbiAgLS10dy1za2V3LXg6IDA7XFxuICAtLXR3LXNrZXcteTogMDtcXG4gIC0tdHctc2NhbGUteDogMTtcXG4gIC0tdHctc2NhbGUteTogMTtcXG4gIC0tdHctcGFuLXg6ICA7XFxuICAtLXR3LXBhbi15OiAgO1xcbiAgLS10dy1waW5jaC16b29tOiAgO1xcbiAgLS10dy1zY3JvbGwtc25hcC1zdHJpY3RuZXNzOiBwcm94aW1pdHk7XFxuICAtLXR3LW9yZGluYWw6ICA7XFxuICAtLXR3LXNsYXNoZWQtemVybzogIDtcXG4gIC0tdHctbnVtZXJpYy1maWd1cmU6ICA7XFxuICAtLXR3LW51bWVyaWMtc3BhY2luZzogIDtcXG4gIC0tdHctbnVtZXJpYy1mcmFjdGlvbjogIDtcXG4gIC0tdHctcmluZy1pbnNldDogIDtcXG4gIC0tdHctcmluZy1vZmZzZXQtd2lkdGg6IDBweDtcXG4gIC0tdHctcmluZy1vZmZzZXQtY29sb3I6ICNmZmY7XFxuICAtLXR3LXJpbmctY29sb3I6IHJnYmEoNTksIDEzMCwgMjQ2LCAwLjUpO1xcbiAgLS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xcbiAgLS10dy1yaW5nLXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCk7XFxuICAtLXR3LXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCk7XFxuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDAgcmdiYSgwLDAsMCwwKTtcXG4gIC0tdHctYmx1cjogIDtcXG4gIC0tdHctYnJpZ2h0bmVzczogIDtcXG4gIC0tdHctY29udHJhc3Q6ICA7XFxuICAtLXR3LWdyYXlzY2FsZTogIDtcXG4gIC0tdHctaHVlLXJvdGF0ZTogIDtcXG4gIC0tdHctaW52ZXJ0OiAgO1xcbiAgLS10dy1zYXR1cmF0ZTogIDtcXG4gIC0tdHctc2VwaWE6ICA7XFxuICAtLXR3LWRyb3Atc2hhZG93OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1ibHVyOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1jb250cmFzdDogIDtcXG4gIC0tdHctYmFja2Ryb3AtZ3JheXNjYWxlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1odWUtcm90YXRlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1pbnZlcnQ6ICA7XFxuICAtLXR3LWJhY2tkcm9wLW9wYWNpdHk6ICA7XFxuICAtLXR3LWJhY2tkcm9wLXNhdHVyYXRlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1zZXBpYTogIDtcXG59XFxuXFxuOjpiYWNrZHJvcCB7XFxuICAtLXR3LWJvcmRlci1zcGFjaW5nLXg6IDA7XFxuICAtLXR3LWJvcmRlci1zcGFjaW5nLXk6IDA7XFxuICAtLXR3LXRyYW5zbGF0ZS14OiAwO1xcbiAgLS10dy10cmFuc2xhdGUteTogMDtcXG4gIC0tdHctcm90YXRlOiAwO1xcbiAgLS10dy1za2V3LXg6IDA7XFxuICAtLXR3LXNrZXcteTogMDtcXG4gIC0tdHctc2NhbGUteDogMTtcXG4gIC0tdHctc2NhbGUteTogMTtcXG4gIC0tdHctcGFuLXg6ICA7XFxuICAtLXR3LXBhbi15OiAgO1xcbiAgLS10dy1waW5jaC16b29tOiAgO1xcbiAgLS10dy1zY3JvbGwtc25hcC1zdHJpY3RuZXNzOiBwcm94aW1pdHk7XFxuICAtLXR3LW9yZGluYWw6ICA7XFxuICAtLXR3LXNsYXNoZWQtemVybzogIDtcXG4gIC0tdHctbnVtZXJpYy1maWd1cmU6ICA7XFxuICAtLXR3LW51bWVyaWMtc3BhY2luZzogIDtcXG4gIC0tdHctbnVtZXJpYy1mcmFjdGlvbjogIDtcXG4gIC0tdHctcmluZy1pbnNldDogIDtcXG4gIC0tdHctcmluZy1vZmZzZXQtd2lkdGg6IDBweDtcXG4gIC0tdHctcmluZy1vZmZzZXQtY29sb3I6ICNmZmY7XFxuICAtLXR3LXJpbmctY29sb3I6IHJnYmEoNTksIDEzMCwgMjQ2LCAwLjUpO1xcbiAgLS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xcbiAgLS10dy1yaW5nLXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCk7XFxuICAtLXR3LXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCk7XFxuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDAgcmdiYSgwLDAsMCwwKTtcXG4gIC0tdHctYmx1cjogIDtcXG4gIC0tdHctYnJpZ2h0bmVzczogIDtcXG4gIC0tdHctY29udHJhc3Q6ICA7XFxuICAtLXR3LWdyYXlzY2FsZTogIDtcXG4gIC0tdHctaHVlLXJvdGF0ZTogIDtcXG4gIC0tdHctaW52ZXJ0OiAgO1xcbiAgLS10dy1zYXR1cmF0ZTogIDtcXG4gIC0tdHctc2VwaWE6ICA7XFxuICAtLXR3LWRyb3Atc2hhZG93OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1ibHVyOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1jb250cmFzdDogIDtcXG4gIC0tdHctYmFja2Ryb3AtZ3JheXNjYWxlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1odWUtcm90YXRlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1pbnZlcnQ6ICA7XFxuICAtLXR3LWJhY2tkcm9wLW9wYWNpdHk6ICA7XFxuICAtLXR3LWJhY2tkcm9wLXNhdHVyYXRlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1zZXBpYTogIDtcXG59XFxyXFxuLmZpeGVkIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG59XFxyXFxuLmFic29sdXRlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxyXFxuLnJlbGF0aXZlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxyXFxuLi10b3AtMSB7XFxuICB0b3A6IC0wLjI1cmVtO1xcbn1cXHJcXG4ubGVmdC0wIHtcXG4gIGxlZnQ6IDBweDtcXG59XFxyXFxuLnJpZ2h0LTkge1xcbiAgcmlnaHQ6IDIuMjVyZW07XFxufVxcclxcbi50b3AtMCB7XFxuICB0b3A6IDBweDtcXG59XFxyXFxuLnotMTAge1xcbiAgei1pbmRleDogMTA7XFxufVxcclxcbi5tLTAge1xcbiAgbWFyZ2luOiAwcHg7XFxufVxcclxcbi5teC0yIHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG59XFxyXFxuLm14LWF1dG8ge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcclxcbi5tYi0xIHtcXG4gIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XFxufVxcclxcbi5tYi0yIHtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxyXFxuLm1iLTMge1xcbiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcXG59XFxyXFxuLm1sLTAge1xcbiAgbWFyZ2luLWxlZnQ6IDBweDtcXG59XFxyXFxuLm1yLTMge1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjc1cmVtO1xcbn1cXHJcXG4ubXItNSB7XFxuICBtYXJnaW4tcmlnaHQ6IDEuMjVyZW07XFxufVxcclxcbi5tdC0yIHtcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXG59XFxyXFxuLm10LTMge1xcbiAgbWFyZ2luLXRvcDogMC43NXJlbTtcXG59XFxyXFxuLmJsb2NrIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXHJcXG4uZmxleCB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxyXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXHJcXG4uaC0wIHtcXG4gIGhlaWdodDogMHB4O1xcbn1cXHJcXG4uaC00IHtcXG4gIGhlaWdodDogMXJlbTtcXG59XFxyXFxuLmgtOSB7XFxuICBoZWlnaHQ6IDIuMjVyZW07XFxufVxcclxcbi5oLWZ1bGwge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXHJcXG4uaC1zY3JlZW4ge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxyXFxuLnctMCB7XFxuICB3aWR0aDogMHB4O1xcbn1cXHJcXG4udy0xXFxcXC80IHtcXG4gIHdpZHRoOiAyNSU7XFxufVxcclxcbi53LTQge1xcbiAgd2lkdGg6IDFyZW07XFxufVxcclxcbi53LTkge1xcbiAgd2lkdGg6IDIuMjVyZW07XFxufVxcclxcbi53LWZ1bGwge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcclxcbi53LXNjcmVlbiB7XFxuICB3aWR0aDogMTAwdnc7XFxufVxcclxcbi5pdGVtcy1jZW50ZXIge1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXHJcXG4uanVzdGlmeS1iZXR3ZWVuIHtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXHJcXG4ub3ZlcmZsb3cteS1zY3JvbGwge1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXHJcXG4ucm91bmRlZCB7XFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbn1cXHJcXG4ucm91bmRlZC0zeGwge1xcbiAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xcbn1cXHJcXG4ucm91bmRlZC1mdWxsIHtcXG4gIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcXG59XFxyXFxuLnJvdW5kZWQtbWQge1xcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XFxufVxcclxcbi5yb3VuZGVkLXItM3hsIHtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxLjVyZW07XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMS41cmVtO1xcbn1cXHJcXG4uYm9yZGVyIHtcXG4gIGJvcmRlci13aWR0aDogMXB4O1xcbn1cXHJcXG4uYm9yZGVyLTIge1xcbiAgYm9yZGVyLXdpZHRoOiAycHg7XFxufVxcclxcbi5ib3JkZXItYi0yIHtcXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcXG59XFxyXFxuLmJvcmRlci1sLTQge1xcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDRweDtcXG59XFxyXFxuLmJvcmRlci1yLTIge1xcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAycHg7XFxufVxcclxcbi5ib3JkZXItdC0yIHtcXG4gIGJvcmRlci10b3Atd2lkdGg6IDJweDtcXG59XFxyXFxuLmJvcmRlci1pbmRpZ28tNTAwIHtcXG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuICBib3JkZXItY29sb3I6IHJnYmEoOTksIDEwMiwgMjQxLCAxKTtcXG4gIGJvcmRlci1jb2xvcjogcmdiKDk5IDEwMiAyNDEgLyB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcbn1cXHJcXG4uYm9yZGVyLXJlZC01MDAge1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgyMzksIDY4LCA2OCwgMSk7XFxuICBib3JkZXItY29sb3I6IHJnYigyMzkgNjggNjggLyB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcbn1cXHJcXG4uYm9yZGVyLXNsYXRlLTEwMCB7XFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIDEpO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjQxIDI0NSAyNDkgLyB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcbn1cXHJcXG4uYm9yZGVyLXNsYXRlLTMwMCB7XFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDIwMywgMjEzLCAyMjUsIDEpO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjAzIDIxMyAyMjUgLyB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcbn1cXHJcXG4uYm9yZGVyLXdoaXRlIHtcXG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XFxuICBib3JkZXItY29sb3I6IHJnYigyNTUgMjU1IDI1NSAvIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XFxufVxcclxcbi5ib3JkZXItbC1ncmVlbi01MDAge1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2JhKDM0LCAxOTcsIDk0LCAxKTtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2IoMzQgMTk3IDk0IC8gdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXG59XFxyXFxuLmJvcmRlci1sLXJlZC01MDAge1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2JhKDIzOSwgNjgsIDY4LCAxKTtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2IoMjM5IDY4IDY4IC8gdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXG59XFxyXFxuLmJvcmRlci1sLXllbGxvdy01MDAge1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2JhKDIzNCwgMTc5LCA4LCAxKTtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2IoMjM0IDE3OSA4IC8gdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXG59XFxyXFxuLmJnLWdyYXktMjAwIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI5LCAyMzEsIDIzNSwgMSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI5IDIzMSAyMzUgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcclxcbi5iZy1pbmRpZ28tNTAwIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTksIDEwMiwgMjQxLCAxKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5OSAxMDIgMjQxIC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXHJcXG4uYmctcmVkLTUwMCB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzOSwgNjgsIDY4LCAxKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzkgNjggNjggLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcclxcbi5iZy1za3ktNTAwIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQsIDE2NSwgMjMzLCAxKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNCAxNjUgMjMzIC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXHJcXG4uYmctc2xhdGUtMTAwIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgMSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxIDI0NSAyNDkgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcclxcbi5iZy1zdG9uZS05NTBcXFxcLzUwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTIsIDEwLCA5LCAwLjUpO1xcbn1cXHJcXG4uYmctd2hpdGUge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUgMjU1IDI1NSAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxyXFxuLnAtMCB7XFxuICBwYWRkaW5nOiAwcHg7XFxufVxcclxcbi5wLTIge1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXHJcXG4ucC0zIHtcXG4gIHBhZGRpbmc6IDAuNzVyZW07XFxufVxcclxcbi5wLTQge1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxyXFxuLnB4LTIge1xcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XFxufVxcclxcbi5weC01IHtcXG4gIHBhZGRpbmctbGVmdDogMS4yNXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDEuMjVyZW07XFxufVxcclxcbi5weC03IHtcXG4gIHBhZGRpbmctbGVmdDogMS43NXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDEuNzVyZW07XFxufVxcclxcbi5weS0yIHtcXG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcbn1cXHJcXG4ucHktMlxcXFwuNSB7XFxuICBwYWRkaW5nLXRvcDogMC42MjVyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMC42MjVyZW07XFxufVxcclxcbi5weS0zIHtcXG4gIHBhZGRpbmctdG9wOiAwLjc1cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDAuNzVyZW07XFxufVxcclxcbi5wYi00IHtcXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbn1cXHJcXG4ucGwtMiB7XFxuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG59XFxyXFxuLnBsLTUge1xcbiAgcGFkZGluZy1sZWZ0OiAxLjI1cmVtO1xcbn1cXHJcXG4ucGwtNiB7XFxuICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcXG59XFxyXFxuLnByLTUge1xcbiAgcGFkZGluZy1yaWdodDogMS4yNXJlbTtcXG59XFxyXFxuLnB0LTQge1xcbiAgcGFkZGluZy10b3A6IDFyZW07XFxufVxcclxcbi50ZXh0LWxlZnQge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxyXFxuLnRleHQtcmlnaHQge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcclxcbi5hbGlnbi1taWRkbGUge1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxyXFxuLnRleHQtMnhsIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDJyZW07XFxufVxcclxcbi50ZXh0LTN4bCB7XFxuICBmb250LXNpemU6IDEuODc1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDIuMjVyZW07XFxufVxcclxcbi50ZXh0LWxnIHtcXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxuICBsaW5lLWhlaWdodDogMS43NXJlbTtcXG59XFxyXFxuLnRleHQtc20ge1xcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xcbn1cXHJcXG4uZm9udC1tZWRpdW0ge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxyXFxuLmxlYWRpbmctNSB7XFxuICBsaW5lLWhlaWdodDogMS4yNXJlbTtcXG59XFxyXFxuLnRleHQtaW5kaWdvLTgwMCB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2JhKDU1LCA0OCwgMTYzLCAxKTtcXG4gIGNvbG9yOiByZ2IoNTUgNDggMTYzIC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcclxcbi50ZXh0LXJlZC02MDAge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiYSgyMjAsIDM4LCAzOCwgMSk7XFxuICBjb2xvcjogcmdiKDIyMCAzOCAzOCAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXHJcXG4udGV4dC1zbGF0ZS03MDAge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiYSg1MSwgNjUsIDg1LCAxKTtcXG4gIGNvbG9yOiByZ2IoNTEgNjUgODUgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxyXFxuLnRleHQtc2xhdGUtOTAwIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYmEoMTUsIDIzLCA0MiwgMSk7XFxuICBjb2xvcjogcmdiKDE1IDIzIDQyIC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcclxcbi50ZXh0LXdoaXRlIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XFxuICBjb2xvcjogcmdiKDI1NSAyNTUgMjU1IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcclxcbi5vcGFjaXR5LTAge1xcbiAgb3BhY2l0eTogMDtcXG59XFxyXFxuLmZpbHRlciB7XFxuICAtd2Via2l0LWZpbHRlcjogdmFyKC0tdHctYmx1cikgdmFyKC0tdHctYnJpZ2h0bmVzcykgdmFyKC0tdHctY29udHJhc3QpIHZhcigtLXR3LWdyYXlzY2FsZSkgdmFyKC0tdHctaHVlLXJvdGF0ZSkgdmFyKC0tdHctaW52ZXJ0KSB2YXIoLS10dy1zYXR1cmF0ZSkgdmFyKC0tdHctc2VwaWEpIHZhcigtLXR3LWRyb3Atc2hhZG93KTtcXG4gICAgICAgICAgZmlsdGVyOiB2YXIoLS10dy1ibHVyKSB2YXIoLS10dy1icmlnaHRuZXNzKSB2YXIoLS10dy1jb250cmFzdCkgdmFyKC0tdHctZ3JheXNjYWxlKSB2YXIoLS10dy1odWUtcm90YXRlKSB2YXIoLS10dy1pbnZlcnQpIHZhcigtLXR3LXNhdHVyYXRlKSB2YXIoLS10dy1zZXBpYSkgdmFyKC0tdHctZHJvcC1zaGFkb3cpO1xcbn1cXHJcXG4uaG92ZXJcXFxcOmJvcmRlci1pbmRpZ28tNDAwOmhvdmVyIHtcXG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuICBib3JkZXItY29sb3I6IHJnYmEoMTI5LCAxNDAsIDI0OCwgMSk7XFxuICBib3JkZXItY29sb3I6IHJnYigxMjkgMTQwIDI0OCAvIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XFxufVxcclxcbi5ob3ZlclxcXFw6Ym9yZGVyLXJlZC00MDA6aG92ZXIge1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNDgsIDExMywgMTEzLCAxKTtcXG4gIGJvcmRlci1jb2xvcjogcmdiKDI0OCAxMTMgMTEzIC8gdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXG59XFxyXFxuLmhvdmVyXFxcXDpiZy1pbmRpZ28tNDAwOmhvdmVyIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI5LCAxNDAsIDI0OCwgMSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI5IDE0MCAyNDggLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcclxcbi5ob3ZlclxcXFw6YmctcmVkLTQwMDpob3ZlciB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0OCwgMTEzLCAxMTMsIDEpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OCAxMTMgMTEzIC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXHJcXG4uaG92ZXJcXFxcOmJnLXNreS03MDA6aG92ZXIge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzLCAxMDUsIDE2MSwgMSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMyAxMDUgMTYxIC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXHJcXG4uZm9jdXNcXFxcOmJvcmRlci1za3ktNTAwOmZvY3VzIHtcXG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuICBib3JkZXItY29sb3I6IHJnYmEoMTQsIDE2NSwgMjMzLCAxKTtcXG4gIGJvcmRlci1jb2xvcjogcmdiKDE0IDE2NSAyMzMgLyB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcbn1cXHJcXG4uZm9jdXNcXFxcOm91dGxpbmUtbm9uZTpmb2N1cyB7XFxuICBvdXRsaW5lOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBvdXRsaW5lLW9mZnNldDogMnB4O1xcbn1cXHJcXG4uZm9jdXNcXFxcOnJpbmctMTpmb2N1cyB7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogdmFyKC0tdHctcmluZy1pbnNldCkgMCAwIDAgdmFyKC0tdHctcmluZy1vZmZzZXQtd2lkdGgpIHZhcigtLXR3LXJpbmctb2Zmc2V0LWNvbG9yKTtcXG4gIC0tdHctcmluZy1zaGFkb3c6IHZhcigtLXR3LXJpbmctaW5zZXQpIDAgMCAwIGNhbGMoMXB4ICsgdmFyKC0tdHctcmluZy1vZmZzZXQtd2lkdGgpKSB2YXIoLS10dy1yaW5nLWNvbG9yKTtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogdmFyKC0tdHctcmluZy1pbnNldCkgMCAwIDAgdmFyKC0tdHctcmluZy1vZmZzZXQtd2lkdGgpIHZhcigtLXR3LXJpbmctb2Zmc2V0LWNvbG9yKSwgdmFyKC0tdHctcmluZy1pbnNldCkgMCAwIDAgY2FsYygxcHggKyB2YXIoLS10dy1yaW5nLW9mZnNldC13aWR0aCkpIHZhcigtLXR3LXJpbmctY29sb3IpLCAwIDAgcmdiYSgwLDAsMCwwKTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tdHctcmluZy1pbnNldCkgMCAwIDAgdmFyKC0tdHctcmluZy1vZmZzZXQtd2lkdGgpIHZhcigtLXR3LXJpbmctb2Zmc2V0LWNvbG9yKSwgdmFyKC0tdHctcmluZy1pbnNldCkgMCAwIDAgY2FsYygxcHggKyB2YXIoLS10dy1yaW5nLW9mZnNldC13aWR0aCkpIHZhcigtLXR3LXJpbmctY29sb3IpLCAwIDAgcmdiYSgwLDAsMCwwKTtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93KSwgdmFyKC0tdHctcmluZy1zaGFkb3cpLCB2YXIoLS10dy1zaGFkb3csIDAgMCAjMDAwMCk7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdyksIHZhcigtLXR3LXJpbmctc2hhZG93KSwgdmFyKC0tdHctc2hhZG93LCAwIDAgIzAwMDApO1xcbn1cXHJcXG4ucGVlcjpjaGVja2VkIH4gLnBlZXItY2hlY2tlZFxcXFw6YmctZ3JlZW4tNTAwIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzQsIDE5NywgOTQsIDEpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM0IDE5NyA5NCAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XFxuXFxuICAuc21cXFxcOnctZnVsbCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG5cXG4gIC5tZFxcXFw6dy0yXFxcXC8zIHtcXG4gICAgd2lkdGg6IDY2LjY2NjY2NyU7XFxuICB9XFxufVxcclxcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcXG5cXG4gIC5sZ1xcXFw6dy0xXFxcXC8zIHtcXG4gICAgd2lkdGg6IDMzLjMzMzMzMyU7XFxuICB9XFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL3N0eWxlLmNzc1wiLFwiPG5vIHNvdXJjZT5cIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0NBQWMsQ0FBZDs7O0NBQWM7O0FBQWQ7OztFQUFBLDhCQUFjO1VBQWQsc0JBQWMsRUFBZCxNQUFjO0VBQWQsZUFBYyxFQUFkLE1BQWM7RUFBZCxtQkFBYyxFQUFkLE1BQWM7RUFBZCxxQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7RUFBQSxnQkFBYztBQUFBOztBQUFkOzs7Ozs7O0NBQWM7O0FBQWQ7RUFBQSxnQkFBYyxFQUFkLE1BQWM7RUFBZCw4QkFBYyxFQUFkLE1BQWM7RUFBZCxnQkFBYyxFQUFkLE1BQWM7RUFBZCxjQUFjO0tBQWQsV0FBYyxFQUFkLE1BQWM7RUFBZCx3UkFBYyxFQUFkLE1BQWM7RUFBZCxxQ0FBYztVQUFkLDZCQUFjLEVBQWQsTUFBYztFQUFkLCtCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDtFQUFBLFNBQWMsRUFBZCxNQUFjO0VBQWQsb0JBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7Ozs7Q0FBYzs7QUFBZDtFQUFBLFNBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7RUFBZCxxQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLDBCQUFjO0VBQWQseUNBQWM7VUFBZCxpQ0FBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOzs7Ozs7RUFBQSxrQkFBYztFQUFkLG9CQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxjQUFjO0VBQWQsd0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxtQkFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDs7OztFQUFBLCtHQUFjLEVBQWQsTUFBYztFQUFk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REFBO0VBQUEsbUJDQUE7RURBQSx5Q0NBQTtFREFBO0NDQUE7QURBQTtFQUFBLG1CQ0FBO0VEQUEseUNDQUE7RURBQTtDQ0FBO0FEQUE7RUFBQSxtQkNBQTtFREFBLHVDQ0FBO0VEQUE7Q0NBQTtBREFBO0VBQUEsdUJDQUE7RURBQSxvQ0NBQTtFREFBO0NDQUE7QURBQTtFQUFBLCtCQ0FBO0VEQUE7Q0NBQTtBREFBO0VBQUEsNEdDQUE7RURBQSwwR0NBQTtFREFBLG1OQ0FBO1VEQUEsMk1DQUE7RURBQSxxR0NBQTtVREFBO0NDQUE7QURBQTtFQUFBLG1CQ0FBO0VEQUEsdUNDQUE7RURBQTtDQ0FBO0FEQUE7O0VBQUE7SUFBQTtHQ0FBO0NBQUE7QURBQTs7RUFBQTtJQUFBO0dDQUE7Q0FBQTtBREFBOztFQUFBO0lBQUE7R0NBQTtDQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB0YWlsd2luZCBiYXNlO1xcclxcbkB0YWlsd2luZCBjb21wb25lbnRzO1xcclxcbkB0YWlsd2luZCB1dGlsaXRpZXM7XFxyXFxuXCIsbnVsbF0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCByYW5kb21VVUlEID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLnJhbmRvbVVVSUQgJiYgY3J5cHRvLnJhbmRvbVVVSUQuYmluZChjcnlwdG8pO1xuZXhwb3J0IGRlZmF1bHQge1xuICByYW5kb21VVUlEXG59OyIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtNV1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwKSQvaTsiLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbmxldCBnZXRSYW5kb21WYWx1ZXM7XG5jb25zdCBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJuZygpIHtcbiAgLy8gbGF6eSBsb2FkIHNvIHRoYXQgZW52aXJvbm1lbnRzIHRoYXQgbmVlZCB0byBwb2x5ZmlsbCBoYXZlIGEgY2hhbmNlIHRvIGRvIHNvXG4gIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLlxuICAgIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0byk7XG5cbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufSIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuXG5jb25zdCBieXRlVG9IZXggPSBbXTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc2xpY2UoMSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgcmV0dXJuIChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICBjb25zdCB1dWlkID0gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0KTsgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZVxuICAvLyBvZiB0aGUgZm9sbG93aW5nOlxuICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgLy8gXCJ1bmRlZmluZWRcIiBpbiB0aGUgdXVpZClcbiAgLy8gLSBJbnZhbGlkIGlucHV0IHZhbHVlcyBmb3IgdGhlIFJGQyBgdmVyc2lvbmAgb3IgYHZhcmlhbnRgIGZpZWxkc1xuXG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgcmV0dXJuIHV1aWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeTsiLCJpbXBvcnQgbmF0aXZlIGZyb20gJy4vbmF0aXZlLmpzJztcbmltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHsgdW5zYWZlU3RyaW5naWZ5IH0gZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBpZiAobmF0aXZlLnJhbmRvbVVVSUQgJiYgIWJ1ZiAmJiAhb3B0aW9ucykge1xuICAgIHJldHVybiBuYXRpdmUucmFuZG9tVVVJRCgpO1xuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGNvbnN0IHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpOyAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG5cbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDsgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG5cbiAgaWYgKGJ1Zikge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICByZXR1cm4gdW5zYWZlU3RyaW5naWZ5KHJuZHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2NDsiLCJpbXBvcnQgUkVHRVggZnJvbSAnLi9yZWdleC5qcyc7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiBSRUdFWC50ZXN0KHV1aWQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vYXNzZXRzL3N0eWxlcy9zdHlsZS5jc3NcIjtcclxuXHJcbmltcG9ydCB7IEluaXRpYWxpemUgfSBmcm9tIFwiLi9tb2R1bGVzL0luaXRpYWxpemVcIjtcclxuaW1wb3J0IHsgQWRkUHJvamVjdCB9IGZyb20gXCIuL21vZHVsZXMvVUkvQWRkUHJvamVjdFwiO1xyXG5pbXBvcnQgeyBTZWxlY3RQcm9qZWN0IH0gZnJvbSBcIi4vbW9kdWxlcy9VSS9TZWxlY3RQcm9qZWN0XCI7XHJcbmltcG9ydCB7IE9wZW5DbG9zZU1vZGFsLCBDbG9zZU1vZGFsV2l0aENyb3NzQnRuIH0gZnJvbSBcIi4vbW9kdWxlcy9VSS9Nb2RhbFwiO1xyXG5pbXBvcnQgeyBBZGRUb2RvIH0gZnJvbSBcIi4vbW9kdWxlcy9VSS9BZGRUb2RvXCI7XHJcbmltcG9ydCB7IERlbGV0ZVRvZG8gfSBmcm9tIFwiLi9tb2R1bGVzL1VJL0RlbGV0ZVRvZG9cIjtcclxuaW1wb3J0IHsgVG9kb0RldGFpbHMgfSBmcm9tIFwiLi9tb2R1bGVzL1VJL1RvZG9EZXRhaWxzXCI7XHJcbmltcG9ydCB7IFRvZG9TdGF0dXMgfSBmcm9tIFwiLi9tb2R1bGVzL1VJL1RvZG9TdGF0dXNcIjtcclxuXHJcbmxldCBhbGxQcm9qZWN0cyA9IEluaXRpYWxpemU7XHJcbmNvbnN0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jvb3RcIik7XHJcblxyXG5PcGVuQ2xvc2VNb2RhbChcImFkZFRvZG9Nb2RhbFwiLCBcImFkZFRvZG9Nb2RhbEJ0blwiKTtcclxuQ2xvc2VNb2RhbFdpdGhDcm9zc0J0bihcImNsb3NlXCIpO1xyXG5cclxuQWRkUHJvamVjdChyb290LCBhbGxQcm9qZWN0cyk7XHJcblNlbGVjdFByb2plY3Qocm9vdCwgYWxsUHJvamVjdHMpO1xyXG5BZGRUb2RvKHJvb3QsIGFsbFByb2plY3RzKTtcclxuRGVsZXRlVG9kbyhyb290LCBhbGxQcm9qZWN0cyk7XHJcblRvZG9EZXRhaWxzKGFsbFByb2plY3RzKTtcclxuVG9kb1N0YXR1cyhyb290LCBhbGxQcm9qZWN0cyk7XHJcbiJdLCJuYW1lcyI6WyJ2NCIsInV1aWR2NCIsIlByb2plY3QiLCJjb25zdHJ1Y3RvciIsInByb2plY3ROYW1lIiwiaWQiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJhY3RpdmUiLCJUb2RvTGlzdCIsIl9pZCIsIl9wcm9qZWN0TmFtZSIsIl9hY3RpdmUiLCJfVG9kb0xpc3QiLCJuZXdQcm9qZWN0TmFtZSIsIm5ld0FjdGl2ZSIsIm5ld1RvZG8iLCJwdXNoIiwiYWRkTmV3VG9kbyIsImdldFNpbmdsZVRvZG8iLCJ0b2RvIiwiZmlsdGVyIiwidXBkYXRlUHJvamVjdFRvZG9Db21wbGV0ZWQiLCJmaWx0ZXJlZEFyciIsIm1hcCIsImNvbXBsZXRlZCIsInVwZGF0ZVByb2plY3RUb2RvIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImR1ZURhdGUiLCJwcmlvcml0eSIsImZvckVhY2giLCJkZWxldGVQcm9qZWN0VG9kbyIsIlRvZG8iLCJHZXREYXRhIiwiQWRkRGF0YSIsIkxvZ28iLCJDYWxlbmRhciIsIkNhbGVuZGFyRGFyayIsIlVwZGF0ZSIsIkRlbGV0ZSIsIkNoZWNrIiwiSW5pdGlhbGl6ZSIsImFsbFByb2plY3RzIiwiaW5ib3giLCJhY3RpdmVQcm9qZWN0IiwibmV3UHJvamVjdHMiLCJwcm9qZWN0IiwicHJvaiIsInJvb3QiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJkaXZDb250YWluZXJDb250ZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImlubmVySFRNTCIsImpvaW4iLCJhcHBlbmRDaGlsZCIsImRhdGEiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImtleSIsImdldEl0ZW0iLCJwYXJzZSIsIkFkZFByb2plY3QiLCJhbGxQcm9qZWN0IiwiYWRkTmV3UHJvamVjdEJ0biIsIm5ld1Byb2plY3RUaXRsZSIsInByb2plY3RDb250YWluZXIiLCJhZGRFdmVudExpc3RlbmVyIiwib25DbGlja0FkZE5ld1Byb2plY3RCdG4iLCJ2YWx1ZSIsImFsZXJ0IiwibmV3UHJvamVjdCIsImRpdkVsIiwiQ2xvc2VNb2RhbFdpdGhCdG4iLCJSZW1vdmVNb2RhbExpc3RlbmVycyIsIk9wZW5DbG9zZU1vZGFsIiwiQWRkVG9kbyIsInRvZG9UaXRsZSIsInRvZG9EZXNjcmlwdGlvbiIsInRvZG9EdWVEYXRlIiwidG9kb1ByaW9yaXR5IiwiYWRkTmV3VG9kb0J0biIsInRvZG9Db250YWluZXIiLCJlbXB0eVRvZG9NZXNzYWdlIiwic2VsZWN0ZWRQcm9qZWN0IiwiZ2V0VXNlcklucHV0Rm9yVG9kbyIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJwYXJzZUludCIsImFkZE5ld1RvZG9Ub1VJIiwibmV3VG9kb0RpdkVsIiwiRGVsZXRlVG9kbyIsIm9uQ2xpY2tEZWxldGVUb2RvQnRuIiwidGFyZ2V0IiwiY29udGFpbnMiLCJjbGlja2VkVG9kb0NhcmQiLCJ0YWdOYW1lIiwidG9Mb3dlckNhc2UiLCJwYXJlbnRFbGVtZW50IiwicHJvamVjdElkIiwiZ2V0QXR0cmlidXRlIiwicmVtb3ZlIiwiY2hpbGRyZW4iLCJtb2RhbENsYXNzIiwiYnRuQ2xhc3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaXRlbSIsIkNsb3NlTW9kYWwiLCJPcGVuTW9kYWwiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiQXR0YWNoT3BlbkNsb3NlTW9kYWwiLCJ0b2RvSWQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiZGlzcGxheSIsImV2ZW50IiwiY2xvc2VCdG4iLCJjbG9zZXN0IiwiQ2xvc2VNb2RhbFdpdGhDcm9zc0J0biIsIlJlbmRlclNlbGVjdGVkUHJvamVjdE5hbWUiLCJwcm9qZWN0TmFtZUVsIiwidGV4dENvbnRlbnQiLCJSZW5kZXJTZWxlY3RlZFByb2plY3RUb2RvcyIsImVtcHR5UHJvamVjdE1lc3NhZ2UiLCJDYWxlbmRhckxpZ2h0IiwiU2VsZWN0UHJvamVjdCIsIm9uQ2xpY2tQcm9qZWN0IiwicHJvamVjdEJ0bnMiLCJidG4iLCJpbWciLCJzcmMiLCJVcGRhdGVUb2RvIiwiVG9kb0RldGFpbHMiLCJ0b2RvQ29tcGxldGVkIiwidXBkYXRlVG9kb0J0biIsIm9uQ2xpY2tUb2RvRGV0YWlsc0J0biIsImRldGFpbHMiLCJUb2RvU3RhdHVzIiwiY2hhbmdlVG9kb1N0YXR1cyIsImNoZWNrbWFya0ltZyIsImNoZWNrZWQiLCJ1cGRhdGVUb2RvIiwidG9kb1ByaW9yaXR5RWwiLCJ0b2RvVGl0bGVFbCIsInRvZG9JbnB1dCIsInRpY2tJbWciLCJ0b2RvRHVlRGF0ZUVsIl0sInNvdXJjZVJvb3QiOiIifQ==