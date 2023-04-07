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
// A BLUEPRINT A´TO CREATE NEW PROJECT WHICH HOSTS CREATED TODOS

class Project {
  constructor(projectName) {
    this._id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])(); // UNIQUE ID FOR A PROJECT
    this._projectName = projectName;
    this._active = false;
    this._TodoList = [];
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
    const [todo] = this._project.filter(todo => {
      if (todo.id === parseInt(id)) {
        return todo;
      }
    });
    return todo;
  }
  updateProjectTodoCompleted(id) {
    const filteredArr = this._TodoList.map(todo => {
      if (todo._id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this._TodoList = filteredArr;
  }
  updateProjectTodoPriority(id, priority) {
    const filteredArr = this._TodoList.map(todo => {
      if (todo._id === id) {
        todo.priority = priority;
      }
      return todo;
    });
    this._TodoList = filteredArr;
  }
  updateProjectTodo(id, title, description, dueDate, priority, completed) {
    const filteredArr = this._TodoList.filter(todo => {
      if (todo._id === id) {
        todo.title = title;
        todo.description = description;
        todo.dueDate = dueDate;
        todo.priority = priority;
        todo.completed = completed;
      }
    });
    this._TodoList = filteredArr;
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

const Initialize = function () {
  // CREATE A DEFAULT PROJECT CALLED INBOX
  const inbox = new _App_logic_Project__WEBPACK_IMPORTED_MODULE_0__["default"]("Inbox");
  inbox.active = true;
  const divContainer = document.createElement("div");
  divContainer.classList.add("flex");
  divContainer.innerHTML = `
    <div></div>
  `;
  const root = document.querySelector("#root");
  root.classList.add("flex");
  const divEl = document.createElement("div");
  divEl.classList.add("w-1/4");
  divEl.classList.add("h-screen");
  divEl.classList.add("pt-2");
  divEl.classList.add("pb-2");
  divEl.classList.add("pl-5");
  divEl.classList.add("pr-5");
  divEl.classList.add("bg-blue-100");
  divEl.innerHTML = `
  <h1 class="text-3xl mt-3 mb-3 text-indigo-800">Todo List</h1>
    <ul class="project-container">
      <li class="mb-2">
        <button
          type="button"
          class="border-2 border-indigo-800 w-full pt-2 pb-2 bg-indigo-800 text-white rounded project-btn"
          data-project-id=${inbox.id}
        >
          ${inbox.projectName}
        </button>
      </li>
    </ul>
    <div>
      <input type="text" id="new-project-title" class="block bg-white w-full border border-slate-300 rounded-md p-2" placeholder="Project title..."/>
    </div>
    <button type="button" class="text-red-600 w-full text-left add-new-project-btn">
      <span class="text-lg">+</span> Add Project
    </button>
  `;
  const divTodoContainerEl = document.createElement("div");
  divTodoContainerEl.classList.add("w-screen");
  divTodoContainerEl.classList.add("pt-2");
  divTodoContainerEl.classList.add("pb-2");
  divTodoContainerEl.classList.add("pl-5");
  divTodoContainerEl.classList.add("pr-5");
  divTodoContainerEl.innerHTML = `
    <div class="flex justify-between mt-3 mb-3">
      <h2 class="text-3xl text-indigo-800 selected-project-name">${inbox.projectName}</h2>
      <button type="button" class="border-2 border-blue-600 bg-blue-600 text-white rounded pl-2 pr-2" 
      >+ Add New</button>
    </div>
    <div class="mt-3 mb-3">
      <div class="bg-white border-2 border-blue-500 rounded p-3 text-lg flex items-center justify-between add-todo-input-container">
        <input type="text" placeholder="Walk the dog" class="border-2 border-indigo-500 new-todo-title" />
        <textarea class="border-2 border-indigo-500 new-todo-description" placeholder="walk for about 30 min..."></textarea>
        <input type="date" class="border-2 border-indigo-500 new-todo-due-date"/>
        <select class="border-2 border-indigo-500 new-todo-priority">
          <option value="" selected disabled>Select Priority</option>
          <option value="1">High</option>
          <option value="2">Medium</option>
          <option value="3">Low</option>
        </select>

        <button type="button" class="border-2 border-green-800 pl-2 pr-2 bg-green-800 text-white add-new-todo-btn" data-project-id=${inbox.id}>
          Add
        </button>
      </div>
    </div>
    <div class="todo-container">
      ${inbox.TodoList.map(todo => {
    return `
        <div
        class="bg-white border-2 border-blue-500 rounded p-3 text-lg flex items-center justify-between border-l-4 todo-card-container"
        data-todo-id=${todo.id}
        >
        <div>
          <input
            type="checkbox"
            id=${todo.id}
            class="w-4 h-4 m-0 p-0 align-middle"
          />
          <label for=${todo.id}>${todo.title}</label>
        </div>
        <div class="flex">
          <p>Due: ${todo.dueDate}</p>
          <button
            type="button"
            class="border-2 border-blue-600 pl-2 pr-2 bg-blue-600 text-white rounded mr-4 ml-4"
          >
            Details
          </button>
          <button
            type="button"
            class="border-2 border-red-800 pl-2 pr-2 bg-red-800 text-white rounded-full delete-todo-btn"
          >
            X
          </button>
        </div>
      </div>
        `;
  })}
    </div>
  `;
  root.appendChild(divEl);
  root.appendChild(divTodoContainerEl);
  return inbox;
}();

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
      const divEl = document.createElement("li");
      divEl.classList.add("mb-2");
      divEl.innerHTML = `
        <button type="button" class="border-2 border-blue-500 w-full pt-2 pb-2 bg-blue-500 text-white rounded project-btn" data-project-id=${newProject.id}>
          ${newProjectTitle.value}
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

const AddTodo = (root, selectedProject) => {
  const todoTitle = root.querySelector(".new-todo-title");
  const todoDescription = root.querySelector(".new-todo-description");
  const todoDueDate = root.querySelector(".new-todo-due-date");
  const todoPriority = root.querySelector(".new-todo-priority");
  const addNewTodoBtn = root.querySelector(".add-new-todo-btn");
  const todoContainer = root.querySelector(".todo-container");
  addNewTodoBtn.addEventListener("click", getUserInputForTodo);
  function getUserInputForTodo() {
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
      selectedProject.addNewTodo(newTodo);
      addNewTodoToUI(newTodo);
    }
  }
  function addNewTodoToUI(newTodo) {
    const newTodoDivEl = document.createElement("div");
    newTodoDivEl.innerHTML = `
      <div class="bg-white border-2 border-blue-500 rounded p-3 text-lg flex items-center justify-between border-l-4 todo-card-container" data-todo-id=${newTodo.id}>
        <div>
          <input type="checkbox" id=${newTodo.id} class="w-4 h-4 m-0 p-0 align-middle">
          <label for=${newTodo.id}>${newTodo.title}</label>
        </div>
        <div class="flex">
          <p>Due: ${newTodo.dueDate}</p>
          <button type="button" class="border-2 border-blue-600 pl-2 pr-2 bg-blue-600 text-white rounded mr-4 ml-4">
            Details
          </button>
          <button type="button" class="border-2 border-red-800 pl-2 pr-2 bg-red-800 text-white rounded-full delete-todo-btn">
            X
          </button>
        </div>
      </div>
    `;
    todoContainer.appendChild(newTodoDivEl);
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
const DeleteTodo = (root, selectedProject) => {
  const todoContainer = root.querySelector(".todo-container");
  todoContainer.addEventListener("click", e => onClickDeleteTodoBtn(e));
  function onClickDeleteTodoBtn(e) {
    if (e.target.classList.contains("delete-todo-btn")) {
      const clickedTodoCard = e.target.parentElement.parentElement;
      const projectId = clickedTodoCard.getAttribute("data-todo-id");
      clickedTodoCard.remove();
      selectedProject.deleteProjectTodo(projectId);
    }
  }
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
const RenderSelectedProjectTodos = (root, project) => {
  const projectContainer = root.querySelector(".todo-container");
  projectContainer.innerHTML = "";
  projectContainer.innerHTML += project.TodoList.map(todo => {
    return `
      <div
      class="bg-white border-2 border-blue-500 rounded p-3 text-lg flex items-center justify-between border-l-4 todo-card-container"
      data-todo-id=${todo.id}
      >
        <div>
          <input
            type="checkbox"
            id=${todo.id}
            class="w-4 h-4 m-0 p-0 align-middle"
          />
          <label for=${todo.id}>${todo.title}</label>
        </div>
        <div class="flex">
          <p>Due: ${todo.dueDate}</p>
          <button
            type="button"
            class="border-2 border-blue-600 pl-2 pr-2 bg-blue-600 text-white rounded mr-4 ml-4"
          >
            Details
          </button>
          <button
            type="button"
            class="border-2 border-red-800 pl-2 pr-2 bg-red-800 text-white rounded-full delete-todo-btn"
          >
            X
          </button>
        </div>
      </div>
    `;
  });
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
/* harmony import */ var _AddTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddTodo */ "./src/modules/UI/AddTodo.js");
/* harmony import */ var _DeleteTodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeleteTodo */ "./src/modules/UI/DeleteTodo.js");
/* harmony import */ var _RenderSelectedProjectName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RenderSelectedProjectName */ "./src/modules/UI/RenderSelectedProjectName.js");
/* harmony import */ var _RenderSelectedProjectTodos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RenderSelectedProjectTodos */ "./src/modules/UI/RenderSelectedProjectTodos.js");




const SelectProject = (root, allProject, selectedProject) => {
  const projectContainer = root.querySelector(".project-container");
  projectContainer.addEventListener("click", e => onClickProject(e));
  function onClickProject(e) {
    if (e.target.getAttribute("data-project-id")) {
      const projectBtns = projectContainer.querySelectorAll("button");
      projectBtns.forEach(btn => {
        btn.classList.remove("border-indigo-800");
        btn.classList.remove("bg-indigo-800");
        btn.classList.add("border-blue-500");
        btn.classList.add("bg-blue-500");
      });
      e.target.classList.remove("border-blue-500");
      e.target.classList.remove("bg-blue-500");
      e.target.classList.add("bg-indigo-800");
      e.target.classList.add("bg-indigo-800");
      allProject.forEach(project => {
        project.active = false;
        if (e.target.getAttribute("data-project-id") === project.id) {
          project.active = true;
          (0,_RenderSelectedProjectName__WEBPACK_IMPORTED_MODULE_2__.RenderSelectedProjectName)(root, project.projectName);
          (0,_RenderSelectedProjectTodos__WEBPACK_IMPORTED_MODULE_3__.RenderSelectedProjectTodos)(root, project);
          selectedProject = project;
        }
      });
      (0,_AddTodo__WEBPACK_IMPORTED_MODULE_0__.AddTodo)(root, selectedProject);
      (0,_DeleteTodo__WEBPACK_IMPORTED_MODULE_1__.DeleteTodo)(root, selectedProject);
    }
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
___CSS_LOADER_EXPORT___.push([module.id, "/*\n! tailwindcss v3.3.0 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n6. Use the user's configured `sans` font-variation-settings by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n  -webkit-font-feature-settings: normal;\n          font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  text-decoration: underline;\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-webkit-input-placeholder, textarea::-webkit-input-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::-ms-input-placeholder, textarea::-ms-input-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::-webkit-backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\r\n.m-0 {\n  margin: 0px;\n}\r\n.mb-2 {\n  margin-bottom: 0.5rem;\n}\r\n.mb-3 {\n  margin-bottom: 0.75rem;\n}\r\n.ml-4 {\n  margin-left: 1rem;\n}\r\n.mr-4 {\n  margin-right: 1rem;\n}\r\n.mt-3 {\n  margin-top: 0.75rem;\n}\r\n.block {\n  display: block;\n}\r\n.flex {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\r\n.h-4 {\n  height: 1rem;\n}\r\n.h-screen {\n  height: 100vh;\n}\r\n.w-1\\/4 {\n  width: 25%;\n}\r\n.w-4 {\n  width: 1rem;\n}\r\n.w-full {\n  width: 100%;\n}\r\n.w-screen {\n  width: 100vw;\n}\r\n.items-center {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\r\n.justify-between {\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\r\n.rounded {\n  border-radius: 0.25rem;\n}\r\n.rounded-full {\n  border-radius: 9999px;\n}\r\n.rounded-md {\n  border-radius: 0.375rem;\n}\r\n.border {\n  border-width: 1px;\n}\r\n.border-2 {\n  border-width: 2px;\n}\r\n.border-l-4 {\n  border-left-width: 4px;\n}\r\n.border-blue-500 {\n  --tw-border-opacity: 1;\n  border-color: rgba(59, 130, 246, 1);\n  border-color: rgb(59 130 246 / var(--tw-border-opacity));\n}\r\n.border-blue-600 {\n  --tw-border-opacity: 1;\n  border-color: rgba(37, 99, 235, 1);\n  border-color: rgb(37 99 235 / var(--tw-border-opacity));\n}\r\n.border-green-800 {\n  --tw-border-opacity: 1;\n  border-color: rgba(22, 101, 52, 1);\n  border-color: rgb(22 101 52 / var(--tw-border-opacity));\n}\r\n.border-indigo-500 {\n  --tw-border-opacity: 1;\n  border-color: rgba(99, 102, 241, 1);\n  border-color: rgb(99 102 241 / var(--tw-border-opacity));\n}\r\n.border-indigo-800 {\n  --tw-border-opacity: 1;\n  border-color: rgba(55, 48, 163, 1);\n  border-color: rgb(55 48 163 / var(--tw-border-opacity));\n}\r\n.border-red-800 {\n  --tw-border-opacity: 1;\n  border-color: rgba(153, 27, 27, 1);\n  border-color: rgb(153 27 27 / var(--tw-border-opacity));\n}\r\n.border-slate-300 {\n  --tw-border-opacity: 1;\n  border-color: rgba(203, 213, 225, 1);\n  border-color: rgb(203 213 225 / var(--tw-border-opacity));\n}\r\n.bg-blue-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(219, 234, 254, 1);\n  background-color: rgb(219 234 254 / var(--tw-bg-opacity));\n}\r\n.bg-blue-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(59, 130, 246, 1);\n  background-color: rgb(59 130 246 / var(--tw-bg-opacity));\n}\r\n.bg-blue-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(37, 99, 235, 1);\n  background-color: rgb(37 99 235 / var(--tw-bg-opacity));\n}\r\n.bg-green-800 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(22, 101, 52, 1);\n  background-color: rgb(22 101 52 / var(--tw-bg-opacity));\n}\r\n.bg-indigo-800 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(55, 48, 163, 1);\n  background-color: rgb(55 48 163 / var(--tw-bg-opacity));\n}\r\n.bg-red-800 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(153, 27, 27, 1);\n  background-color: rgb(153 27 27 / var(--tw-bg-opacity));\n}\r\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgba(255, 255, 255, 1);\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\r\n.p-0 {\n  padding: 0px;\n}\r\n.p-2 {\n  padding: 0.5rem;\n}\r\n.p-3 {\n  padding: 0.75rem;\n}\r\n.pb-2 {\n  padding-bottom: 0.5rem;\n}\r\n.pl-2 {\n  padding-left: 0.5rem;\n}\r\n.pl-5 {\n  padding-left: 1.25rem;\n}\r\n.pr-2 {\n  padding-right: 0.5rem;\n}\r\n.pr-5 {\n  padding-right: 1.25rem;\n}\r\n.pt-2 {\n  padding-top: 0.5rem;\n}\r\n.text-left {\n  text-align: left;\n}\r\n.align-middle {\n  vertical-align: middle;\n}\r\n.text-3xl {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\r\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\r\n.text-indigo-800 {\n  --tw-text-opacity: 1;\n  color: rgba(55, 48, 163, 1);\n  color: rgb(55 48 163 / var(--tw-text-opacity));\n}\r\n.text-red-600 {\n  --tw-text-opacity: 1;\n  color: rgba(220, 38, 38, 1);\n  color: rgb(220 38 38 / var(--tw-text-opacity));\n}\r\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, 1);\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\r\n.outline {\n  outline-style: solid;\n}\r\n.filter {\n  -webkit-filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n          filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\r\n", "",{"version":3,"sources":["webpack://./src/assets/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["@tailwind base;\r\n@tailwind components;\r\n@tailwind utilities;\r\n"],"sourceRoot":""}]);
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




let allProjects = [];
allProjects.push(_modules_Initialize__WEBPACK_IMPORTED_MODULE_1__.Initialize);
let selectedProject = _modules_Initialize__WEBPACK_IMPORTED_MODULE_1__.Initialize;
const root = document.querySelector("#root");
(0,_modules_UI_AddProject__WEBPACK_IMPORTED_MODULE_2__.AddProject)(root, allProjects);
(0,_modules_UI_SelectProject__WEBPACK_IMPORTED_MODULE_3__.SelectProject)(root, allProjects, selectedProject);
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sT0FBTyxNQUFNLEtBQUsscUJBQXFCLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxPQUFPLE1BQU0sS0FBSyxxQkFBcUIsb0JBQW9CLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxpQkFBaUIsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sT0FBTyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxPQUFPLE1BQU0sS0FBSyxvQkFBb0Isb0JBQW9CLE1BQU0sS0FBSyxvQkFBb0Isb0JBQW9CLE1BQU0sS0FBSyxvQkFBb0Isb0JBQW9CLE1BQU0sS0FBSyxvQkFBb0Isb0JBQW9CLE1BQU0sTUFBTSxvQkFBb0Isb0JBQW9CLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxRQUFRLE1BQU0sWUFBWSxvQkFBb0IscUJBQXFCLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sV0FBVyxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZ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QTtXQUNBO1dBQ0EsZUFBZSw0QkFBNEI7V0FDM0MsZUFBZTtXQUNmLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQSw4Q0FBOEM7Ozs7O1dDQTlDO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7O0FDQW1DO0FBRWU7QUFDRztBQUNNO0FBRTNELElBQUkrQixXQUFXLEdBQUcsRUFBRTtBQUNwQkEsV0FBVyxDQUFDMUUsSUFBSSxDQUFDbUIsMkRBQVUsQ0FBQztBQUU1QixJQUFJd0IsZUFBZSxHQUFHeEIsMkRBQVU7QUFFaEMsTUFBTVEsSUFBSSxHQUFHTCxRQUFRLENBQUNNLGFBQWEsQ0FBQyxPQUFPLENBQUM7QUFFNUNJLGtFQUFVLENBQUNMLElBQUksRUFBRStDLFdBQVcsQ0FBQztBQUM3Qk4sd0VBQWEsQ0FBQ3pDLElBQUksRUFBRStDLFdBQVcsRUFBRS9CLGVBQWUsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvQXBwLWxvZ2ljL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvQXBwLWxvZ2ljL1RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvSW5pdGlhbGl6ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9VSS9BZGRQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL1VJL0FkZFRvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvVUkvRGVsZXRlVG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9VSS9SZW5kZXJTZWxlY3RlZFByb2plY3ROYW1lLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL1VJL1JlbmRlclNlbGVjdGVkUHJvamVjdFRvZG9zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL1VJL1NlbGVjdFByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Fzc2V0cy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Fzc2V0cy9zdHlsZXMvc3R5bGUuY3NzPzc3ZGIiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL25hdGl2ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JlZ2V4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQSBCTFVFUFJJTlQgQcK0VE8gQ1JFQVRFIE5FVyBQUk9KRUNUIFdISUNIIEhPU1RTIENSRUFURUQgVE9ET1NcclxuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcclxuXHJcbmNsYXNzIFByb2plY3Qge1xyXG4gIGNvbnN0cnVjdG9yKHByb2plY3ROYW1lKSB7XHJcbiAgICB0aGlzLl9pZCA9IHV1aWR2NCgpOyAvLyBVTklRVUUgSUQgRk9SIEEgUFJPSkVDVFxyXG4gICAgdGhpcy5fcHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZTtcclxuICAgIHRoaXMuX2FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5fVG9kb0xpc3QgPSBbXTtcclxuICB9XHJcblxyXG4gIGdldCBpZCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9pZDtcclxuICB9XHJcblxyXG4gIGdldCBwcm9qZWN0TmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9wcm9qZWN0TmFtZTtcclxuICB9XHJcblxyXG4gIHNldCBwcm9qZWN0TmFtZShuZXdQcm9qZWN0TmFtZSkge1xyXG4gICAgdGhpcy5fcHJvamVjdE5hbWUgPSBuZXdQcm9qZWN0TmFtZTtcclxuICB9XHJcblxyXG4gIGdldCBhY3RpdmUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlO1xyXG4gIH1cclxuXHJcbiAgc2V0IGFjdGl2ZShuZXdBY3RpdmUpIHtcclxuICAgIG5ld0FjdGl2ZSA/ICh0aGlzLl9hY3RpdmUgPSB0cnVlKSA6ICh0aGlzLl9hY3RpdmUgPSBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgVG9kb0xpc3QoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fVG9kb0xpc3Q7XHJcbiAgfVxyXG5cclxuICBzZXQgVG9kb0xpc3QobmV3VG9kbykge1xyXG4gICAgdGhpcy5fVG9kb0xpc3QucHVzaChuZXdUb2RvKTtcclxuICB9XHJcblxyXG4gIGFkZE5ld1RvZG8obmV3VG9kbykge1xyXG4gICAgdGhpcy5fVG9kb0xpc3QucHVzaChuZXdUb2RvKTtcclxuICB9XHJcblxyXG4gIGdldFNpbmdsZVRvZG8oaWQpIHtcclxuICAgIGNvbnN0IFt0b2RvXSA9IHRoaXMuX3Byb2plY3QuZmlsdGVyKCh0b2RvKSA9PiB7XHJcbiAgICAgIGlmICh0b2RvLmlkID09PSBwYXJzZUludChpZCkpIHtcclxuICAgICAgICByZXR1cm4gdG9kbztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHRvZG87XHJcbiAgfVxyXG5cclxuICB1cGRhdGVQcm9qZWN0VG9kb0NvbXBsZXRlZChpZCkge1xyXG4gICAgY29uc3QgZmlsdGVyZWRBcnIgPSB0aGlzLl9Ub2RvTGlzdC5tYXAoKHRvZG8pID0+IHtcclxuICAgICAgaWYgKHRvZG8uX2lkID09PSBpZCkge1xyXG4gICAgICAgIHRvZG8uY29tcGxldGVkID0gIXRvZG8uY29tcGxldGVkO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0b2RvO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLl9Ub2RvTGlzdCA9IGZpbHRlcmVkQXJyO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlUHJvamVjdFRvZG9Qcmlvcml0eShpZCwgcHJpb3JpdHkpIHtcclxuICAgIGNvbnN0IGZpbHRlcmVkQXJyID0gdGhpcy5fVG9kb0xpc3QubWFwKCh0b2RvKSA9PiB7XHJcbiAgICAgIGlmICh0b2RvLl9pZCA9PT0gaWQpIHtcclxuICAgICAgICB0b2RvLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRvZG87XHJcbiAgICB9KTtcclxuICAgIHRoaXMuX1RvZG9MaXN0ID0gZmlsdGVyZWRBcnI7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVQcm9qZWN0VG9kbyhpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGVkKSB7XHJcbiAgICBjb25zdCBmaWx0ZXJlZEFyciA9IHRoaXMuX1RvZG9MaXN0LmZpbHRlcigodG9kbykgPT4ge1xyXG4gICAgICBpZiAodG9kby5faWQgPT09IGlkKSB7XHJcbiAgICAgICAgdG9kby50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRvZG8uZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICB0b2RvLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgICAgIHRvZG8ucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgICAgICB0b2RvLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLl9Ub2RvTGlzdCA9IGZpbHRlcmVkQXJyO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlUHJvamVjdFRvZG8oaWQpIHtcclxuICAgIGNvbnN0IGZpbHRlcmVkQXJyID0gdGhpcy5fVG9kb0xpc3QuZmlsdGVyKCh0b2RvKSA9PiB7XHJcbiAgICAgIGlmICh0b2RvLmlkICE9PSBpZCkge1xyXG4gICAgICAgIHJldHVybiB0b2RvO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMuX1RvZG9MaXN0ID0gZmlsdGVyZWRBcnI7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0O1xyXG4iLCIvLyBBIEJMVUVQUklOVCBUTyBDUkVBVEUgQSBORVcgVE9ET1xyXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xyXG5cclxuY2xhc3MgVG9kbyB7XHJcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLmlkID0gdXVpZHY0KCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2RvO1xyXG4iLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9BcHAtbG9naWMvUHJvamVjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEluaXRpYWxpemUgPSAoZnVuY3Rpb24gKCkge1xyXG4gIC8vIENSRUFURSBBIERFRkFVTFQgUFJPSkVDVCBDQUxMRUQgSU5CT1hcclxuICBjb25zdCBpbmJveCA9IG5ldyBQcm9qZWN0KFwiSW5ib3hcIik7XHJcbiAgaW5ib3guYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgY29uc3QgZGl2Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBkaXZDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImZsZXhcIik7XHJcblxyXG4gIGRpdkNvbnRhaW5lci5pbm5lckhUTUwgPSBgXHJcbiAgICA8ZGl2PjwvZGl2PlxyXG4gIGA7XHJcblxyXG4gIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jvb3RcIik7XHJcblxyXG4gIHJvb3QuY2xhc3NMaXN0LmFkZChcImZsZXhcIik7XHJcbiAgY29uc3QgZGl2RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGRpdkVsLmNsYXNzTGlzdC5hZGQoXCJ3LTEvNFwiKTtcclxuICBkaXZFbC5jbGFzc0xpc3QuYWRkKFwiaC1zY3JlZW5cIik7XHJcbiAgZGl2RWwuY2xhc3NMaXN0LmFkZChcInB0LTJcIik7XHJcbiAgZGl2RWwuY2xhc3NMaXN0LmFkZChcInBiLTJcIik7XHJcbiAgZGl2RWwuY2xhc3NMaXN0LmFkZChcInBsLTVcIik7XHJcbiAgZGl2RWwuY2xhc3NMaXN0LmFkZChcInByLTVcIik7XHJcbiAgZGl2RWwuY2xhc3NMaXN0LmFkZChcImJnLWJsdWUtMTAwXCIpO1xyXG5cclxuICBkaXZFbC5pbm5lckhUTUwgPSBgXHJcbiAgPGgxIGNsYXNzPVwidGV4dC0zeGwgbXQtMyBtYi0zIHRleHQtaW5kaWdvLTgwMFwiPlRvZG8gTGlzdDwvaDE+XHJcbiAgICA8dWwgY2xhc3M9XCJwcm9qZWN0LWNvbnRhaW5lclwiPlxyXG4gICAgICA8bGkgY2xhc3M9XCJtYi0yXCI+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICBjbGFzcz1cImJvcmRlci0yIGJvcmRlci1pbmRpZ28tODAwIHctZnVsbCBwdC0yIHBiLTIgYmctaW5kaWdvLTgwMCB0ZXh0LXdoaXRlIHJvdW5kZWQgcHJvamVjdC1idG5cIlxyXG4gICAgICAgICAgZGF0YS1wcm9qZWN0LWlkPSR7aW5ib3guaWR9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgJHtpbmJveC5wcm9qZWN0TmFtZX1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9saT5cclxuICAgIDwvdWw+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5ldy1wcm9qZWN0LXRpdGxlXCIgY2xhc3M9XCJibG9jayBiZy13aGl0ZSB3LWZ1bGwgYm9yZGVyIGJvcmRlci1zbGF0ZS0zMDAgcm91bmRlZC1tZCBwLTJcIiBwbGFjZWhvbGRlcj1cIlByb2plY3QgdGl0bGUuLi5cIi8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwidGV4dC1yZWQtNjAwIHctZnVsbCB0ZXh0LWxlZnQgYWRkLW5ldy1wcm9qZWN0LWJ0blwiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cInRleHQtbGdcIj4rPC9zcGFuPiBBZGQgUHJvamVjdFxyXG4gICAgPC9idXR0b24+XHJcbiAgYDtcclxuXHJcbiAgY29uc3QgZGl2VG9kb0NvbnRhaW5lckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgZGl2VG9kb0NvbnRhaW5lckVsLmNsYXNzTGlzdC5hZGQoXCJ3LXNjcmVlblwiKTtcclxuICBkaXZUb2RvQ29udGFpbmVyRWwuY2xhc3NMaXN0LmFkZChcInB0LTJcIik7XHJcbiAgZGl2VG9kb0NvbnRhaW5lckVsLmNsYXNzTGlzdC5hZGQoXCJwYi0yXCIpO1xyXG4gIGRpdlRvZG9Db250YWluZXJFbC5jbGFzc0xpc3QuYWRkKFwicGwtNVwiKTtcclxuICBkaXZUb2RvQ29udGFpbmVyRWwuY2xhc3NMaXN0LmFkZChcInByLTVcIik7XHJcblxyXG4gIGRpdlRvZG9Db250YWluZXJFbC5pbm5lckhUTUwgPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gbXQtMyBtYi0zXCI+XHJcbiAgICAgIDxoMiBjbGFzcz1cInRleHQtM3hsIHRleHQtaW5kaWdvLTgwMCBzZWxlY3RlZC1wcm9qZWN0LW5hbWVcIj4ke1xyXG4gICAgICAgIGluYm94LnByb2plY3ROYW1lXHJcbiAgICAgIH08L2gyPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJvcmRlci0yIGJvcmRlci1ibHVlLTYwMCBiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlIHJvdW5kZWQgcGwtMiBwci0yXCIgXHJcbiAgICAgID4rIEFkZCBOZXc8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cIm10LTMgbWItM1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYmctd2hpdGUgYm9yZGVyLTIgYm9yZGVyLWJsdWUtNTAwIHJvdW5kZWQgcC0zIHRleHQtbGcgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGFkZC10b2RvLWlucHV0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiV2FsayB0aGUgZG9nXCIgY2xhc3M9XCJib3JkZXItMiBib3JkZXItaW5kaWdvLTUwMCBuZXctdG9kby10aXRsZVwiIC8+XHJcbiAgICAgICAgPHRleHRhcmVhIGNsYXNzPVwiYm9yZGVyLTIgYm9yZGVyLWluZGlnby01MDAgbmV3LXRvZG8tZGVzY3JpcHRpb25cIiBwbGFjZWhvbGRlcj1cIndhbGsgZm9yIGFib3V0IDMwIG1pbi4uLlwiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgY2xhc3M9XCJib3JkZXItMiBib3JkZXItaW5kaWdvLTUwMCBuZXctdG9kby1kdWUtZGF0ZVwiLz5cclxuICAgICAgICA8c2VsZWN0IGNsYXNzPVwiYm9yZGVyLTIgYm9yZGVyLWluZGlnby01MDAgbmV3LXRvZG8tcHJpb3JpdHlcIj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiBzZWxlY3RlZCBkaXNhYmxlZD5TZWxlY3QgUHJpb3JpdHk8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+SGlnaDwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj5NZWRpdW08L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzXCI+TG93PC9vcHRpb24+XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcblxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYm9yZGVyLTIgYm9yZGVyLWdyZWVuLTgwMCBwbC0yIHByLTIgYmctZ3JlZW4tODAwIHRleHQtd2hpdGUgYWRkLW5ldy10b2RvLWJ0blwiIGRhdGEtcHJvamVjdC1pZD0ke1xyXG4gICAgICAgICAgaW5ib3guaWRcclxuICAgICAgICB9PlxyXG4gICAgICAgICAgQWRkXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwidG9kby1jb250YWluZXJcIj5cclxuICAgICAgJHtpbmJveC5Ub2RvTGlzdC5tYXAoKHRvZG8pID0+IHtcclxuICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICBjbGFzcz1cImJnLXdoaXRlIGJvcmRlci0yIGJvcmRlci1ibHVlLTUwMCByb3VuZGVkIHAtMyB0ZXh0LWxnIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBib3JkZXItbC00IHRvZG8tY2FyZC1jb250YWluZXJcIlxyXG4gICAgICAgIGRhdGEtdG9kby1pZD0ke3RvZG8uaWR9XHJcbiAgICAgICAgPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgaWQ9JHt0b2RvLmlkfVxyXG4gICAgICAgICAgICBjbGFzcz1cInctNCBoLTQgbS0wIHAtMCBhbGlnbi1taWRkbGVcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxsYWJlbCBmb3I9JHt0b2RvLmlkfT4ke3RvZG8udGl0bGV9PC9sYWJlbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleFwiPlxyXG4gICAgICAgICAgPHA+RHVlOiAke3RvZG8uZHVlRGF0ZX08L3A+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICBjbGFzcz1cImJvcmRlci0yIGJvcmRlci1ibHVlLTYwMCBwbC0yIHByLTIgYmctYmx1ZS02MDAgdGV4dC13aGl0ZSByb3VuZGVkIG1yLTQgbWwtNFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIERldGFpbHNcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJib3JkZXItMiBib3JkZXItcmVkLTgwMCBwbC0yIHByLTIgYmctcmVkLTgwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtZnVsbCBkZWxldGUtdG9kby1idG5cIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBYXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuICAgICAgfSl9XHJcbiAgICA8L2Rpdj5cclxuICBgO1xyXG5cclxuICByb290LmFwcGVuZENoaWxkKGRpdkVsKTtcclxuICByb290LmFwcGVuZENoaWxkKGRpdlRvZG9Db250YWluZXJFbCk7XHJcblxyXG4gIHJldHVybiBpbmJveDtcclxufSkoKTtcclxuIiwiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4uL0FwcC1sb2dpYy9Qcm9qZWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgQWRkUHJvamVjdCA9IChyb290LCBhbGxQcm9qZWN0KSA9PiB7XHJcbiAgY29uc3QgYWRkTmV3UHJvamVjdEJ0biA9IHJvb3QucXVlcnlTZWxlY3RvcihcIi5hZGQtbmV3LXByb2plY3QtYnRuXCIpO1xyXG4gIGNvbnN0IG5ld1Byb2plY3RUaXRsZSA9IHJvb3QucXVlcnlTZWxlY3RvcihcIiNuZXctcHJvamVjdC10aXRsZVwiKTtcclxuICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gcm9vdC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY29udGFpbmVyXCIpO1xyXG5cclxuICBhZGROZXdQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvbkNsaWNrQWRkTmV3UHJvamVjdEJ0bik7XHJcblxyXG4gIGZ1bmN0aW9uIG9uQ2xpY2tBZGROZXdQcm9qZWN0QnRuKCkge1xyXG4gICAgaWYgKG5ld1Byb2plY3RUaXRsZS52YWx1ZSA9PT0gXCJcIikge1xyXG4gICAgICBhbGVydChcIlByb2plY3QgdGl0bGUgaXMgZW1wdHkhXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KG5ld1Byb2plY3RUaXRsZS52YWx1ZSk7XHJcbiAgICAgIGFsbFByb2plY3QucHVzaChuZXdQcm9qZWN0KTtcclxuXHJcbiAgICAgIGNvbnN0IGRpdkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICBkaXZFbC5jbGFzc0xpc3QuYWRkKFwibWItMlwiKTtcclxuICAgICAgZGl2RWwuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYm9yZGVyLTIgYm9yZGVyLWJsdWUtNTAwIHctZnVsbCBwdC0yIHBiLTIgYmctYmx1ZS01MDAgdGV4dC13aGl0ZSByb3VuZGVkIHByb2plY3QtYnRuXCIgZGF0YS1wcm9qZWN0LWlkPSR7bmV3UHJvamVjdC5pZH0+XHJcbiAgICAgICAgICAke25ld1Byb2plY3RUaXRsZS52YWx1ZX1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgYDtcclxuICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChkaXZFbCk7XHJcblxyXG4gICAgICAvLyBSRVNFVCBJTlBVVCBWQUxVRVxyXG4gICAgICBuZXdQcm9qZWN0VGl0bGUudmFsdWUgPSBcIlwiO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuIiwiaW1wb3J0IFRvZG8gZnJvbSBcIi4uL0FwcC1sb2dpYy9Ub2RvXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQWRkVG9kbyA9IChyb290LCBzZWxlY3RlZFByb2plY3QpID0+IHtcclxuICBjb25zdCB0b2RvVGl0bGUgPSByb290LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXRvZG8tdGl0bGVcIik7XHJcbiAgY29uc3QgdG9kb0Rlc2NyaXB0aW9uID0gcm9vdC5xdWVyeVNlbGVjdG9yKFwiLm5ldy10b2RvLWRlc2NyaXB0aW9uXCIpO1xyXG4gIGNvbnN0IHRvZG9EdWVEYXRlID0gcm9vdC5xdWVyeVNlbGVjdG9yKFwiLm5ldy10b2RvLWR1ZS1kYXRlXCIpO1xyXG4gIGNvbnN0IHRvZG9Qcmlvcml0eSA9IHJvb3QucXVlcnlTZWxlY3RvcihcIi5uZXctdG9kby1wcmlvcml0eVwiKTtcclxuXHJcbiAgY29uc3QgYWRkTmV3VG9kb0J0biA9IHJvb3QucXVlcnlTZWxlY3RvcihcIi5hZGQtbmV3LXRvZG8tYnRuXCIpO1xyXG4gIGNvbnN0IHRvZG9Db250YWluZXIgPSByb290LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1jb250YWluZXJcIik7XHJcblxyXG4gIGFkZE5ld1RvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdldFVzZXJJbnB1dEZvclRvZG8pO1xyXG5cclxuICBmdW5jdGlvbiBnZXRVc2VySW5wdXRGb3JUb2RvKCkge1xyXG4gICAgaWYgKHRvZG9UaXRsZS52YWx1ZSA9PT0gXCJcIikge1xyXG4gICAgICBhbGVydChcInRpdGxlIGlzIGVtcHR5XCIpO1xyXG4gICAgfSBlbHNlIGlmICh0b2RvRGVzY3JpcHRpb24udmFsdWUgPT09IFwiXCIpIHtcclxuICAgICAgYWxlcnQoXCJkZXNjcmlwdGlvbiBpcyBlbXB0eVwiKTtcclxuICAgIH0gZWxzZSBpZiAodG9kb0R1ZURhdGUudmFsdWUgPT09IFwiXCIpIHtcclxuICAgICAgYWxlcnQoXCJEdWUgZGF0ZSBpcyBlbXB0eVwiKTtcclxuICAgIH0gZWxzZSBpZiAodG9kb1ByaW9yaXR5LnZhbHVlID09PSBcIlwiKSB7XHJcbiAgICAgIGFsZXJ0KFwiUHJpb3JpdHkgaXMgZW1wdHlcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBuZXdUb2RvID0gbmV3IFRvZG8oXHJcbiAgICAgICAgdG9kb1RpdGxlLnZhbHVlLFxyXG4gICAgICAgIHRvZG9EZXNjcmlwdGlvbi52YWx1ZSxcclxuICAgICAgICB0b2RvRHVlRGF0ZS52YWx1ZSxcclxuICAgICAgICBwYXJzZUludCh0b2RvUHJpb3JpdHkudmFsdWUpXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBzZWxlY3RlZFByb2plY3QuYWRkTmV3VG9kbyhuZXdUb2RvKTtcclxuXHJcbiAgICAgIGFkZE5ld1RvZG9Ub1VJKG5ld1RvZG8pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYWRkTmV3VG9kb1RvVUkobmV3VG9kbykge1xyXG4gICAgY29uc3QgbmV3VG9kb0RpdkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICBuZXdUb2RvRGl2RWwuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYmctd2hpdGUgYm9yZGVyLTIgYm9yZGVyLWJsdWUtNTAwIHJvdW5kZWQgcC0zIHRleHQtbGcgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGJvcmRlci1sLTQgdG9kby1jYXJkLWNvbnRhaW5lclwiIGRhdGEtdG9kby1pZD0ke25ld1RvZG8uaWR9PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9JHtuZXdUb2RvLmlkfSBjbGFzcz1cInctNCBoLTQgbS0wIHAtMCBhbGlnbi1taWRkbGVcIj5cclxuICAgICAgICAgIDxsYWJlbCBmb3I9JHtuZXdUb2RvLmlkfT4ke25ld1RvZG8udGl0bGV9PC9sYWJlbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleFwiPlxyXG4gICAgICAgICAgPHA+RHVlOiAke25ld1RvZG8uZHVlRGF0ZX08L3A+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJvcmRlci0yIGJvcmRlci1ibHVlLTYwMCBwbC0yIHByLTIgYmctYmx1ZS02MDAgdGV4dC13aGl0ZSByb3VuZGVkIG1yLTQgbWwtNFwiPlxyXG4gICAgICAgICAgICBEZXRhaWxzXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYm9yZGVyLTIgYm9yZGVyLXJlZC04MDAgcGwtMiBwci0yIGJnLXJlZC04MDAgdGV4dC13aGl0ZSByb3VuZGVkLWZ1bGwgZGVsZXRlLXRvZG8tYnRuXCI+XHJcbiAgICAgICAgICAgIFhcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIGA7XHJcbiAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1RvZG9EaXZFbCk7XHJcbiAgfVxyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgRGVsZXRlVG9kbyA9IChyb290LCBzZWxlY3RlZFByb2plY3QpID0+IHtcclxuICBjb25zdCB0b2RvQ29udGFpbmVyID0gcm9vdC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tY29udGFpbmVyXCIpO1xyXG5cclxuICB0b2RvQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4gb25DbGlja0RlbGV0ZVRvZG9CdG4oZSkpO1xyXG5cclxuICBmdW5jdGlvbiBvbkNsaWNrRGVsZXRlVG9kb0J0bihlKSB7XHJcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGVsZXRlLXRvZG8tYnRuXCIpKSB7XHJcbiAgICAgIGNvbnN0IGNsaWNrZWRUb2RvQ2FyZCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgICAgY29uc3QgcHJvamVjdElkID0gY2xpY2tlZFRvZG9DYXJkLmdldEF0dHJpYnV0ZShcImRhdGEtdG9kby1pZFwiKTtcclxuXHJcbiAgICAgIGNsaWNrZWRUb2RvQ2FyZC5yZW1vdmUoKTtcclxuXHJcbiAgICAgIHNlbGVjdGVkUHJvamVjdC5kZWxldGVQcm9qZWN0VG9kbyhwcm9qZWN0SWQpO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IFJlbmRlclNlbGVjdGVkUHJvamVjdE5hbWUgPSAocm9vdCwgcHJvamVjdE5hbWUpID0+IHtcclxuICBjb25zdCBwcm9qZWN0TmFtZUVsID0gcm9vdC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkLXByb2plY3QtbmFtZVwiKTtcclxuXHJcbiAgcHJvamVjdE5hbWVFbC50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgUmVuZGVyU2VsZWN0ZWRQcm9qZWN0VG9kb3MgPSAocm9vdCwgcHJvamVjdCkgPT4ge1xyXG4gIGNvbnN0IHByb2plY3RDb250YWluZXIgPSByb290LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1jb250YWluZXJcIik7XHJcblxyXG4gIHByb2plY3RDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgcHJvamVjdENvbnRhaW5lci5pbm5lckhUTUwgKz0gcHJvamVjdC5Ub2RvTGlzdC5tYXAoKHRvZG8pID0+IHtcclxuICAgIHJldHVybiBgXHJcbiAgICAgIDxkaXZcclxuICAgICAgY2xhc3M9XCJiZy13aGl0ZSBib3JkZXItMiBib3JkZXItYmx1ZS01MDAgcm91bmRlZCBwLTMgdGV4dC1sZyBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gYm9yZGVyLWwtNCB0b2RvLWNhcmQtY29udGFpbmVyXCJcclxuICAgICAgZGF0YS10b2RvLWlkPSR7dG9kby5pZH1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgaWQ9JHt0b2RvLmlkfVxyXG4gICAgICAgICAgICBjbGFzcz1cInctNCBoLTQgbS0wIHAtMCBhbGlnbi1taWRkbGVcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxsYWJlbCBmb3I9JHt0b2RvLmlkfT4ke3RvZG8udGl0bGV9PC9sYWJlbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleFwiPlxyXG4gICAgICAgICAgPHA+RHVlOiAke3RvZG8uZHVlRGF0ZX08L3A+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICBjbGFzcz1cImJvcmRlci0yIGJvcmRlci1ibHVlLTYwMCBwbC0yIHByLTIgYmctYmx1ZS02MDAgdGV4dC13aGl0ZSByb3VuZGVkIG1yLTQgbWwtNFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIERldGFpbHNcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJib3JkZXItMiBib3JkZXItcmVkLTgwMCBwbC0yIHByLTIgYmctcmVkLTgwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtZnVsbCBkZWxldGUtdG9kby1idG5cIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBYXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gIH0pO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBBZGRUb2RvIH0gZnJvbSBcIi4vQWRkVG9kb1wiO1xyXG5pbXBvcnQgeyBEZWxldGVUb2RvIH0gZnJvbSBcIi4vRGVsZXRlVG9kb1wiO1xyXG5pbXBvcnQgeyBSZW5kZXJTZWxlY3RlZFByb2plY3ROYW1lIH0gZnJvbSBcIi4vUmVuZGVyU2VsZWN0ZWRQcm9qZWN0TmFtZVwiO1xyXG5pbXBvcnQgeyBSZW5kZXJTZWxlY3RlZFByb2plY3RUb2RvcyB9IGZyb20gXCIuL1JlbmRlclNlbGVjdGVkUHJvamVjdFRvZG9zXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU2VsZWN0UHJvamVjdCA9IChyb290LCBhbGxQcm9qZWN0LCBzZWxlY3RlZFByb2plY3QpID0+IHtcclxuICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gcm9vdC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY29udGFpbmVyXCIpO1xyXG4gIHByb2plY3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiBvbkNsaWNrUHJvamVjdChlKSk7XHJcblxyXG4gIGZ1bmN0aW9uIG9uQ2xpY2tQcm9qZWN0KGUpIHtcclxuICAgIGlmIChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaWRcIikpIHtcclxuICAgICAgY29uc3QgcHJvamVjdEJ0bnMgPSBwcm9qZWN0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIik7XHJcbiAgICAgIHByb2plY3RCdG5zLmZvckVhY2goKGJ0bikgPT4ge1xyXG4gICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiYm9yZGVyLWluZGlnby04MDBcIik7XHJcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJiZy1pbmRpZ28tODAwXCIpO1xyXG4gICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiYm9yZGVyLWJsdWUtNTAwXCIpO1xyXG4gICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiYmctYmx1ZS01MDBcIik7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcImJvcmRlci1ibHVlLTUwMFwiKTtcclxuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcImJnLWJsdWUtNTAwXCIpO1xyXG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYmctaW5kaWdvLTgwMFwiKTtcclxuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImJnLWluZGlnby04MDBcIik7XHJcblxyXG4gICAgICBhbGxQcm9qZWN0LmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgICAgICBwcm9qZWN0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaWRcIikgPT09IHByb2plY3QuaWQpIHtcclxuICAgICAgICAgIHByb2plY3QuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgIFJlbmRlclNlbGVjdGVkUHJvamVjdE5hbWUocm9vdCwgcHJvamVjdC5wcm9qZWN0TmFtZSk7XHJcbiAgICAgICAgICBSZW5kZXJTZWxlY3RlZFByb2plY3RUb2Rvcyhyb290LCBwcm9qZWN0KTtcclxuICAgICAgICAgIHNlbGVjdGVkUHJvamVjdCA9IHByb2plY3Q7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIEFkZFRvZG8ocm9vdCwgc2VsZWN0ZWRQcm9qZWN0KTtcclxuICAgICAgRGVsZXRlVG9kbyhyb290LCBzZWxlY3RlZFByb2plY3QpO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKlxcbiEgdGFpbHdpbmRjc3MgdjMuMy4wIHwgTUlUIExpY2Vuc2UgfCBodHRwczovL3RhaWx3aW5kY3NzLmNvbVxcbiovLypcXG4xLiBQcmV2ZW50IHBhZGRpbmcgYW5kIGJvcmRlciBmcm9tIGFmZmVjdGluZyBlbGVtZW50IHdpZHRoLiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy80KVxcbjIuIEFsbG93IGFkZGluZyBhIGJvcmRlciB0byBhbiBlbGVtZW50IGJ5IGp1c3QgYWRkaW5nIGEgYm9yZGVyLXdpZHRoLiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kY3NzL3RhaWx3aW5kY3NzL3B1bGwvMTE2KVxcbiovXFxuXFxuKixcXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgYm9yZGVyLXdpZHRoOiAwOyAvKiAyICovXFxuICBib3JkZXItc3R5bGU6IHNvbGlkOyAvKiAyICovXFxuICBib3JkZXItY29sb3I6ICNlNWU3ZWI7IC8qIDIgKi9cXG59XFxuXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICAtLXR3LWNvbnRlbnQ6ICcnO1xcbn1cXG5cXG4vKlxcbjEuIFVzZSBhIGNvbnNpc3RlbnQgc2Vuc2libGUgbGluZS1oZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbjIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbjMuIFVzZSBhIG1vcmUgcmVhZGFibGUgdGFiIHNpemUuXFxuNC4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBgc2Fuc2AgZm9udC1mYW1pbHkgYnkgZGVmYXVsdC5cXG41LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBzYW5zYCBmb250LWZlYXR1cmUtc2V0dGluZ3MgYnkgZGVmYXVsdC5cXG42LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBzYW5zYCBmb250LXZhcmlhdGlvbi1zZXR0aW5ncyBieSBkZWZhdWx0LlxcbiovXFxuXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS41OyAvKiAxICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG4gIC1tb3otdGFiLXNpemU6IDQ7IC8qIDMgKi9cXG4gIC1vLXRhYi1zaXplOiA0O1xcbiAgICAgdGFiLXNpemU6IDQ7IC8qIDMgKi9cXG4gIGZvbnQtZmFtaWx5OiB1aS1zYW5zLXNlcmlmLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIFNlZ29lIFVJLCBSb2JvdG8sIFVidW50dSwgQ2FudGFyZWxsLCBOb3RvIFNhbnMsIHNhbnMtc2VyaWYsIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBBcmlhbCwgXFxcIk5vdG8gU2Fuc1xcXCIsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiLCBcXFwiTm90byBDb2xvciBFbW9qaVxcXCI7IC8qIDQgKi9cXG4gIC13ZWJraXQtZm9udC1mZWF0dXJlLXNldHRpbmdzOiBub3JtYWw7XFxuICAgICAgICAgIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogbm9ybWFsOyAvKiA1ICovXFxuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogbm9ybWFsOyAvKiA2ICovXFxufVxcblxcbi8qXFxuMS4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbjIuIEluaGVyaXQgbGluZS1oZWlnaHQgZnJvbSBgaHRtbGAgc28gdXNlcnMgY2FuIHNldCB0aGVtIGFzIGEgY2xhc3MgZGlyZWN0bHkgb24gdGhlIGBodG1sYCBlbGVtZW50LlxcbiovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qXFxuMS4gQWRkIHRoZSBjb3JyZWN0IGhlaWdodCBpbiBGaXJlZm94LlxcbjIuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIG9mIGJvcmRlciBjb2xvciBpbiBGaXJlZm94LiAoaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTkwNjU1KVxcbjMuIEVuc3VyZSBob3Jpem9udGFsIHJ1bGVzIGFyZSB2aXNpYmxlIGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG5ociB7XFxuICBoZWlnaHQ6IDA7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7IC8qIDMgKi9cXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4qL1xcblxcbmFiYnI6d2hlcmUoW3RpdGxlXSkge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgZGVmYXVsdCBmb250IHNpemUgYW5kIHdlaWdodCBmb3IgaGVhZGluZ3MuXFxuKi9cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLypcXG5SZXNldCBsaW5rcyB0byBvcHRpbWl6ZSBmb3Igb3B0LWluIHN0eWxpbmcgaW5zdGVhZCBvZiBvcHQtb3V0LlxcbiovXFxuXFxuYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gRWRnZSBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLypcXG4xLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBtb25vYCBmb250IGZhbWlseSBieSBkZWZhdWx0LlxcbjIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAsXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiB1aS1tb25vc3BhY2UsIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXFxcIkxpYmVyYXRpb24gTW9ub1xcXCIsIFxcXCJDb3VyaWVyIE5ld1xcXCIsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKlxcblByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLypcXG4xLiBSZW1vdmUgdGV4dCBpbmRlbnRhdGlvbiBmcm9tIHRhYmxlIGNvbnRlbnRzIGluIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTk5MDg4LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjAxMjk3KVxcbjIuIENvcnJlY3QgdGFibGUgYm9yZGVyIGNvbG9yIGluaGVyaXRhbmNlIGluIGFsbCBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTkzNTcyOSwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE5NTAxNilcXG4zLiBSZW1vdmUgZ2FwcyBiZXR3ZWVuIHRhYmxlIGJvcmRlcnMgYnkgZGVmYXVsdC5cXG4qL1xcblxcbnRhYmxlIHtcXG4gIHRleHQtaW5kZW50OiAwOyAvKiAxICovXFxuICBib3JkZXItY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IC8qIDMgKi9cXG59XFxuXFxuLypcXG4xLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4yLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuMy4gUmVtb3ZlIGRlZmF1bHQgcGFkZGluZyBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0OyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIG1hcmdpbjogMDsgLyogMiAqL1xcbiAgcGFkZGluZzogMDsgLyogMyAqL1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSBhbmQgRmlyZWZveC5cXG4qL1xcblxcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qXFxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4yLiBSZW1vdmUgZGVmYXVsdCBidXR0b24gc3R5bGVzLlxcbiovXFxuXFxuYnV0dG9uLFxcblt0eXBlPSdidXR0b24nXSxcXG5bdHlwZT0ncmVzZXQnXSxcXG5bdHlwZT0nc3VibWl0J10ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiAyICovXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lOyAvKiAyICovXFxufVxcblxcbi8qXFxuVXNlIHRoZSBtb2Rlcm4gRmlyZWZveCBmb2N1cyBzdHlsZSBmb3IgYWxsIGZvY3VzYWJsZSBlbGVtZW50cy5cXG4qL1xcblxcbjotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiBhdXRvO1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgYWRkaXRpb25hbCBgOmludmFsaWRgIHN0eWxlcyBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvZ2Vja28tZGV2L2Jsb2IvMmY5ZWFjZDlkM2Q5OTVjOTM3YjQyNTFhNTU1N2Q5NWQ0OTRjOWJlMS9sYXlvdXQvc3R5bGUvcmVzL2Zvcm1zLmNzcyNMNzI4LUw3MzcpXFxuKi9cXG5cXG46LW1vei11aS1pbnZhbGlkIHtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUgYW5kIEZpcmVmb3guXFxuKi9cXG5cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qXFxuQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gU2FmYXJpLlxcbiovXFxuXFxuOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qXFxuMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuKi9cXG5cXG5bdHlwZT0nc2VhcmNoJ10ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiovXFxuXFxuOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbjIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4qL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4qL1xcblxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKlxcblJlbW92ZXMgdGhlIGRlZmF1bHQgc3BhY2luZyBhbmQgYm9yZGVyIGZvciBhcHByb3ByaWF0ZSBlbGVtZW50cy5cXG4qL1xcblxcbmJsb2NrcXVvdGUsXFxuZGwsXFxuZGQsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxuaHIsXFxuZmlndXJlLFxcbnAsXFxucHJlIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuZmllbGRzZXQge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxubGVnZW5kIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbm9sLFxcbnVsLFxcbm1lbnUge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qXFxuUHJldmVudCByZXNpemluZyB0ZXh0YXJlYXMgaG9yaXpvbnRhbGx5IGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IHZlcnRpY2FsO1xcbn1cXG5cXG4vKlxcbjEuIFJlc2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIG9wYWNpdHkgaW4gRmlyZWZveC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGxhYnMvdGFpbHdpbmRjc3MvaXNzdWVzLzMzMDApXFxuMi4gU2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIGNvbG9yIHRvIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBncmF5IDQwMCBjb2xvci5cXG4qL1xcblxcbmlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICBvcGFjaXR5OiAxOyAvKiAxICovXFxuICBjb2xvcjogIzljYTNhZjsgLyogMiAqL1xcbn1cXG5cXG5pbnB1dDo6LW1vei1wbGFjZWhvbGRlciwgdGV4dGFyZWE6Oi1tb3otcGxhY2Vob2xkZXIge1xcbiAgb3BhY2l0eTogMTsgLyogMSAqL1xcbiAgY29sb3I6ICM5Y2EzYWY7IC8qIDIgKi9cXG59XFxuXFxuaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyLCB0ZXh0YXJlYTotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgb3BhY2l0eTogMTsgLyogMSAqL1xcbiAgY29sb3I6ICM5Y2EzYWY7IC8qIDIgKi9cXG59XFxuXFxuaW5wdXQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciwgdGV4dGFyZWE6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICBvcGFjaXR5OiAxOyAvKiAxICovXFxuICBjb2xvcjogIzljYTNhZjsgLyogMiAqL1xcbn1cXG5cXG5pbnB1dDo6cGxhY2Vob2xkZXIsXFxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXG4gIG9wYWNpdHk6IDE7IC8qIDEgKi9cXG4gIGNvbG9yOiAjOWNhM2FmOyAvKiAyICovXFxufVxcblxcbi8qXFxuU2V0IHRoZSBkZWZhdWx0IGN1cnNvciBmb3IgYnV0dG9ucy5cXG4qL1xcblxcbmJ1dHRvbixcXG5bcm9sZT1cXFwiYnV0dG9uXFxcIl0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKlxcbk1ha2Ugc3VyZSBkaXNhYmxlZCBidXR0b25zIGRvbid0IGdldCB0aGUgcG9pbnRlciBjdXJzb3IuXFxuKi9cXG46ZGlzYWJsZWQge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4vKlxcbjEuIE1ha2UgcmVwbGFjZWQgZWxlbWVudHMgYGRpc3BsYXk6IGJsb2NrYCBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNClcXG4yLiBBZGQgYHZlcnRpY2FsLWFsaWduOiBtaWRkbGVgIHRvIGFsaWduIHJlcGxhY2VkIGVsZW1lbnRzIG1vcmUgc2Vuc2libHkgYnkgZGVmYXVsdC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9qZW5zaW1tb25zL2Nzc3JlbWVkeS9pc3N1ZXMvMTQjaXNzdWVjb21tZW50LTYzNDkzNDIxMClcXG4gICBUaGlzIGNhbiB0cmlnZ2VyIGEgcG9vcmx5IGNvbnNpZGVyZWQgbGludCBlcnJvciBpbiBzb21lIHRvb2xzIGJ1dCBpcyBpbmNsdWRlZCBieSBkZXNpZ24uXFxuKi9cXG5cXG5pbWcsXFxuc3ZnLFxcbnZpZGVvLFxcbmNhbnZhcyxcXG5hdWRpbyxcXG5pZnJhbWUsXFxuZW1iZWQsXFxub2JqZWN0IHtcXG4gIGRpc3BsYXk6IGJsb2NrOyAvKiAxICovXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAvKiAyICovXFxufVxcblxcbi8qXFxuQ29uc3RyYWluIGltYWdlcyBhbmQgdmlkZW9zIHRvIHRoZSBwYXJlbnQgd2lkdGggYW5kIHByZXNlcnZlIHRoZWlyIGludHJpbnNpYyBhc3BlY3QgcmF0aW8uIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxcbiovXFxuXFxuaW1nLFxcbnZpZGVvIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyogTWFrZSBlbGVtZW50cyB3aXRoIHRoZSBIVE1MIGhpZGRlbiBhdHRyaWJ1dGUgc3RheSBoaWRkZW4gYnkgZGVmYXVsdCAqL1xcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiosIDo6YmVmb3JlLCA6OmFmdGVyIHtcXG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteDogMDtcXG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteTogMDtcXG4gIC0tdHctdHJhbnNsYXRlLXg6IDA7XFxuICAtLXR3LXRyYW5zbGF0ZS15OiAwO1xcbiAgLS10dy1yb3RhdGU6IDA7XFxuICAtLXR3LXNrZXcteDogMDtcXG4gIC0tdHctc2tldy15OiAwO1xcbiAgLS10dy1zY2FsZS14OiAxO1xcbiAgLS10dy1zY2FsZS15OiAxO1xcbiAgLS10dy1wYW4teDogIDtcXG4gIC0tdHctcGFuLXk6ICA7XFxuICAtLXR3LXBpbmNoLXpvb206ICA7XFxuICAtLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3M6IHByb3hpbWl0eTtcXG4gIC0tdHctb3JkaW5hbDogIDtcXG4gIC0tdHctc2xhc2hlZC16ZXJvOiAgO1xcbiAgLS10dy1udW1lcmljLWZpZ3VyZTogIDtcXG4gIC0tdHctbnVtZXJpYy1zcGFjaW5nOiAgO1xcbiAgLS10dy1udW1lcmljLWZyYWN0aW9uOiAgO1xcbiAgLS10dy1yaW5nLWluc2V0OiAgO1xcbiAgLS10dy1yaW5nLW9mZnNldC13aWR0aDogMHB4O1xcbiAgLS10dy1yaW5nLW9mZnNldC1jb2xvcjogI2ZmZjtcXG4gIC0tdHctcmluZy1jb2xvcjogcmdiYSg1OSwgMTMwLCAyNDYsIDAuNSk7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCk7XFxuICAtLXR3LXJpbmctc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcXG4gIC0tdHctc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcXG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMCByZ2JhKDAsMCwwLDApO1xcbiAgLS10dy1ibHVyOiAgO1xcbiAgLS10dy1icmlnaHRuZXNzOiAgO1xcbiAgLS10dy1jb250cmFzdDogIDtcXG4gIC0tdHctZ3JheXNjYWxlOiAgO1xcbiAgLS10dy1odWUtcm90YXRlOiAgO1xcbiAgLS10dy1pbnZlcnQ6ICA7XFxuICAtLXR3LXNhdHVyYXRlOiAgO1xcbiAgLS10dy1zZXBpYTogIDtcXG4gIC0tdHctZHJvcC1zaGFkb3c6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWJsdXI6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3M6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWNvbnRyYXN0OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1ncmF5c2NhbGU6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGU6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWludmVydDogIDtcXG4gIC0tdHctYmFja2Ryb3Atb3BhY2l0eTogIDtcXG4gIC0tdHctYmFja2Ryb3Atc2F0dXJhdGU6ICA7XFxuICAtLXR3LWJhY2tkcm9wLXNlcGlhOiAgO1xcbn1cXG5cXG46Oi13ZWJraXQtYmFja2Ryb3Age1xcbiAgLS10dy1ib3JkZXItc3BhY2luZy14OiAwO1xcbiAgLS10dy1ib3JkZXItc3BhY2luZy15OiAwO1xcbiAgLS10dy10cmFuc2xhdGUteDogMDtcXG4gIC0tdHctdHJhbnNsYXRlLXk6IDA7XFxuICAtLXR3LXJvdGF0ZTogMDtcXG4gIC0tdHctc2tldy14OiAwO1xcbiAgLS10dy1za2V3LXk6IDA7XFxuICAtLXR3LXNjYWxlLXg6IDE7XFxuICAtLXR3LXNjYWxlLXk6IDE7XFxuICAtLXR3LXBhbi14OiAgO1xcbiAgLS10dy1wYW4teTogIDtcXG4gIC0tdHctcGluY2gtem9vbTogIDtcXG4gIC0tdHctc2Nyb2xsLXNuYXAtc3RyaWN0bmVzczogcHJveGltaXR5O1xcbiAgLS10dy1vcmRpbmFsOiAgO1xcbiAgLS10dy1zbGFzaGVkLXplcm86ICA7XFxuICAtLXR3LW51bWVyaWMtZmlndXJlOiAgO1xcbiAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XFxuICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XFxuICAtLXR3LXJpbmctaW5zZXQ6ICA7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XFxuICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xcbiAgLS10dy1yaW5nLWNvbG9yOiByZ2JhKDU5LCAxMzAsIDI0NiwgMC41KTtcXG4gIC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcXG4gIC0tdHctcmluZy1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xcbiAgLS10dy1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAwIHJnYmEoMCwwLDAsMCk7XFxuICAtLXR3LWJsdXI6ICA7XFxuICAtLXR3LWJyaWdodG5lc3M6ICA7XFxuICAtLXR3LWNvbnRyYXN0OiAgO1xcbiAgLS10dy1ncmF5c2NhbGU6ICA7XFxuICAtLXR3LWh1ZS1yb3RhdGU6ICA7XFxuICAtLXR3LWludmVydDogIDtcXG4gIC0tdHctc2F0dXJhdGU6ICA7XFxuICAtLXR3LXNlcGlhOiAgO1xcbiAgLS10dy1kcm9wLXNoYWRvdzogIDtcXG4gIC0tdHctYmFja2Ryb3AtYmx1cjogIDtcXG4gIC0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzczogIDtcXG4gIC0tdHctYmFja2Ryb3AtY29udHJhc3Q6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWdyYXlzY2FsZTogIDtcXG4gIC0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZTogIDtcXG4gIC0tdHctYmFja2Ryb3AtaW52ZXJ0OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1vcGFjaXR5OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1zYXR1cmF0ZTogIDtcXG4gIC0tdHctYmFja2Ryb3Atc2VwaWE6ICA7XFxufVxcblxcbjo6YmFja2Ryb3Age1xcbiAgLS10dy1ib3JkZXItc3BhY2luZy14OiAwO1xcbiAgLS10dy1ib3JkZXItc3BhY2luZy15OiAwO1xcbiAgLS10dy10cmFuc2xhdGUteDogMDtcXG4gIC0tdHctdHJhbnNsYXRlLXk6IDA7XFxuICAtLXR3LXJvdGF0ZTogMDtcXG4gIC0tdHctc2tldy14OiAwO1xcbiAgLS10dy1za2V3LXk6IDA7XFxuICAtLXR3LXNjYWxlLXg6IDE7XFxuICAtLXR3LXNjYWxlLXk6IDE7XFxuICAtLXR3LXBhbi14OiAgO1xcbiAgLS10dy1wYW4teTogIDtcXG4gIC0tdHctcGluY2gtem9vbTogIDtcXG4gIC0tdHctc2Nyb2xsLXNuYXAtc3RyaWN0bmVzczogcHJveGltaXR5O1xcbiAgLS10dy1vcmRpbmFsOiAgO1xcbiAgLS10dy1zbGFzaGVkLXplcm86ICA7XFxuICAtLXR3LW51bWVyaWMtZmlndXJlOiAgO1xcbiAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XFxuICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XFxuICAtLXR3LXJpbmctaW5zZXQ6ICA7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XFxuICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xcbiAgLS10dy1yaW5nLWNvbG9yOiByZ2JhKDU5LCAxMzAsIDI0NiwgMC41KTtcXG4gIC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcXG4gIC0tdHctcmluZy1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xcbiAgLS10dy1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAwIHJnYmEoMCwwLDAsMCk7XFxuICAtLXR3LWJsdXI6ICA7XFxuICAtLXR3LWJyaWdodG5lc3M6ICA7XFxuICAtLXR3LWNvbnRyYXN0OiAgO1xcbiAgLS10dy1ncmF5c2NhbGU6ICA7XFxuICAtLXR3LWh1ZS1yb3RhdGU6ICA7XFxuICAtLXR3LWludmVydDogIDtcXG4gIC0tdHctc2F0dXJhdGU6ICA7XFxuICAtLXR3LXNlcGlhOiAgO1xcbiAgLS10dy1kcm9wLXNoYWRvdzogIDtcXG4gIC0tdHctYmFja2Ryb3AtYmx1cjogIDtcXG4gIC0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzczogIDtcXG4gIC0tdHctYmFja2Ryb3AtY29udHJhc3Q6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWdyYXlzY2FsZTogIDtcXG4gIC0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZTogIDtcXG4gIC0tdHctYmFja2Ryb3AtaW52ZXJ0OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1vcGFjaXR5OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1zYXR1cmF0ZTogIDtcXG4gIC0tdHctYmFja2Ryb3Atc2VwaWE6ICA7XFxufVxcclxcbi5tLTAge1xcbiAgbWFyZ2luOiAwcHg7XFxufVxcclxcbi5tYi0yIHtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxyXFxuLm1iLTMge1xcbiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcXG59XFxyXFxuLm1sLTQge1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxufVxcclxcbi5tci00IHtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxyXFxuLm10LTMge1xcbiAgbWFyZ2luLXRvcDogMC43NXJlbTtcXG59XFxyXFxuLmJsb2NrIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXHJcXG4uZmxleCB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxyXFxuLmgtNCB7XFxuICBoZWlnaHQ6IDFyZW07XFxufVxcclxcbi5oLXNjcmVlbiB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXHJcXG4udy0xXFxcXC80IHtcXG4gIHdpZHRoOiAyNSU7XFxufVxcclxcbi53LTQge1xcbiAgd2lkdGg6IDFyZW07XFxufVxcclxcbi53LWZ1bGwge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcclxcbi53LXNjcmVlbiB7XFxuICB3aWR0aDogMTAwdnc7XFxufVxcclxcbi5pdGVtcy1jZW50ZXIge1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXHJcXG4uanVzdGlmeS1iZXR3ZWVuIHtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXHJcXG4ucm91bmRlZCB7XFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbn1cXHJcXG4ucm91bmRlZC1mdWxsIHtcXG4gIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcXG59XFxyXFxuLnJvdW5kZWQtbWQge1xcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XFxufVxcclxcbi5ib3JkZXIge1xcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XFxufVxcclxcbi5ib3JkZXItMiB7XFxuICBib3JkZXItd2lkdGg6IDJweDtcXG59XFxyXFxuLmJvcmRlci1sLTQge1xcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDRweDtcXG59XFxyXFxuLmJvcmRlci1ibHVlLTUwMCB7XFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDU5LCAxMzAsIDI0NiwgMSk7XFxuICBib3JkZXItY29sb3I6IHJnYig1OSAxMzAgMjQ2IC8gdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXG59XFxyXFxuLmJvcmRlci1ibHVlLTYwMCB7XFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDM3LCA5OSwgMjM1LCAxKTtcXG4gIGJvcmRlci1jb2xvcjogcmdiKDM3IDk5IDIzNSAvIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XFxufVxcclxcbi5ib3JkZXItZ3JlZW4tODAwIHtcXG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuICBib3JkZXItY29sb3I6IHJnYmEoMjIsIDEwMSwgNTIsIDEpO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjIgMTAxIDUyIC8gdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXG59XFxyXFxuLmJvcmRlci1pbmRpZ28tNTAwIHtcXG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuICBib3JkZXItY29sb3I6IHJnYmEoOTksIDEwMiwgMjQxLCAxKTtcXG4gIGJvcmRlci1jb2xvcjogcmdiKDk5IDEwMiAyNDEgLyB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcbn1cXHJcXG4uYm9yZGVyLWluZGlnby04MDAge1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSg1NSwgNDgsIDE2MywgMSk7XFxuICBib3JkZXItY29sb3I6IHJnYig1NSA0OCAxNjMgLyB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcbn1cXHJcXG4uYm9yZGVyLXJlZC04MDAge1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgxNTMsIDI3LCAyNywgMSk7XFxuICBib3JkZXItY29sb3I6IHJnYigxNTMgMjcgMjcgLyB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcbn1cXHJcXG4uYm9yZGVyLXNsYXRlLTMwMCB7XFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDIwMywgMjEzLCAyMjUsIDEpO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjAzIDIxMyAyMjUgLyB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcbn1cXHJcXG4uYmctYmx1ZS0xMDAge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTksIDIzNCwgMjU0LCAxKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTkgMjM0IDI1NCAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxyXFxuLmJnLWJsdWUtNTAwIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTksIDEzMCwgMjQ2LCAxKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1OSAxMzAgMjQ2IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXHJcXG4uYmctYmx1ZS02MDAge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNywgOTksIDIzNSwgMSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzcgOTkgMjM1IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXHJcXG4uYmctZ3JlZW4tODAwIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIsIDEwMSwgNTIsIDEpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyIDEwMSA1MiAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxyXFxuLmJnLWluZGlnby04MDAge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1NSwgNDgsIDE2MywgMSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTUgNDggMTYzIC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXHJcXG4uYmctcmVkLTgwMCB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1MywgMjcsIDI3LCAxKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTMgMjcgMjcgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcclxcbi5iZy13aGl0ZSB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSAyNTUgMjU1IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXHJcXG4ucC0wIHtcXG4gIHBhZGRpbmc6IDBweDtcXG59XFxyXFxuLnAtMiB7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcclxcbi5wLTMge1xcbiAgcGFkZGluZzogMC43NXJlbTtcXG59XFxyXFxuLnBiLTIge1xcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXG59XFxyXFxuLnBsLTIge1xcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxufVxcclxcbi5wbC01IHtcXG4gIHBhZGRpbmctbGVmdDogMS4yNXJlbTtcXG59XFxyXFxuLnByLTIge1xcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xcbn1cXHJcXG4ucHItNSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxLjI1cmVtO1xcbn1cXHJcXG4ucHQtMiB7XFxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xcbn1cXHJcXG4udGV4dC1sZWZ0IHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcclxcbi5hbGlnbi1taWRkbGUge1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxyXFxuLnRleHQtM3hsIHtcXG4gIGZvbnQtc2l6ZTogMS44NzVyZW07XFxuICBsaW5lLWhlaWdodDogMi4yNXJlbTtcXG59XFxyXFxuLnRleHQtbGcge1xcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xcbn1cXHJcXG4udGV4dC1pbmRpZ28tODAwIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYmEoNTUsIDQ4LCAxNjMsIDEpO1xcbiAgY29sb3I6IHJnYig1NSA0OCAxNjMgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxyXFxuLnRleHQtcmVkLTYwMCB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2JhKDIyMCwgMzgsIDM4LCAxKTtcXG4gIGNvbG9yOiByZ2IoMjIwIDM4IDM4IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcclxcbi50ZXh0LXdoaXRlIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XFxuICBjb2xvcjogcmdiKDI1NSAyNTUgMjU1IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcclxcbi5vdXRsaW5lIHtcXG4gIG91dGxpbmUtc3R5bGU6IHNvbGlkO1xcbn1cXHJcXG4uZmlsdGVyIHtcXG4gIC13ZWJraXQtZmlsdGVyOiB2YXIoLS10dy1ibHVyKSB2YXIoLS10dy1icmlnaHRuZXNzKSB2YXIoLS10dy1jb250cmFzdCkgdmFyKC0tdHctZ3JheXNjYWxlKSB2YXIoLS10dy1odWUtcm90YXRlKSB2YXIoLS10dy1pbnZlcnQpIHZhcigtLXR3LXNhdHVyYXRlKSB2YXIoLS10dy1zZXBpYSkgdmFyKC0tdHctZHJvcC1zaGFkb3cpO1xcbiAgICAgICAgICBmaWx0ZXI6IHZhcigtLXR3LWJsdXIpIHZhcigtLXR3LWJyaWdodG5lc3MpIHZhcigtLXR3LWNvbnRyYXN0KSB2YXIoLS10dy1ncmF5c2NhbGUpIHZhcigtLXR3LWh1ZS1yb3RhdGUpIHZhcigtLXR3LWludmVydCkgdmFyKC0tdHctc2F0dXJhdGUpIHZhcigtLXR3LXNlcGlhKSB2YXIoLS10dy1kcm9wLXNoYWRvdyk7XFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Q0FBYyxDQUFkOzs7Q0FBYzs7QUFBZDs7O0VBQUEsOEJBQWM7VUFBZCxzQkFBYyxFQUFkLE1BQWM7RUFBZCxlQUFjLEVBQWQsTUFBYztFQUFkLG1CQUFjLEVBQWQsTUFBYztFQUFkLHFCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztFQUFBLGdCQUFjO0FBQUE7O0FBQWQ7Ozs7Ozs7Q0FBYzs7QUFBZDtFQUFBLGdCQUFjLEVBQWQsTUFBYztFQUFkLDhCQUFjLEVBQWQsTUFBYztFQUFkLGdCQUFjLEVBQWQsTUFBYztFQUFkLGNBQWM7S0FBZCxXQUFjLEVBQWQsTUFBYztFQUFkLHdSQUFjLEVBQWQsTUFBYztFQUFkLHFDQUFjO1VBQWQsNkJBQWMsRUFBZCxNQUFjO0VBQWQsK0JBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkO0VBQUEsU0FBYyxFQUFkLE1BQWM7RUFBZCxvQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7OztDQUFjOztBQUFkO0VBQUEsU0FBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVBQWQsTUFBYztFQUFkLHFCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsMEJBQWM7RUFBZCx5Q0FBYztVQUFkLGlDQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7Ozs7OztFQUFBLGtCQUFjO0VBQWQsb0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGNBQWM7RUFBZCx3QkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLG1CQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkOzs7O0VBQUEsK0dBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGNBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxjQUFjO0VBQWQsY0FBYztFQUFkLGtCQUFjO0VBQWQsd0JBQWM7QUFBQTs7QUFBZDtFQUFBLGVBQWM7QUFBQTs7QUFBZDtFQUFBLFdBQWM7QUFBQTs7QUFBZDs7OztDQUFjOztBQUFkO0VBQUEsY0FBYyxFQUFkLE1BQWM7RUFBZCxxQkFBYyxFQUFkLE1BQWM7RUFBZCx5QkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7OztDQUFjOztBQUFkOzs7OztFQUFBLG9CQUFjLEVBQWQsTUFBYztFQUFkLGVBQWMsRUFBZCxNQUFjO0VBQWQsb0JBQWMsRUFBZCxNQUFjO0VBQWQsb0JBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7RUFBZCxTQUFjLEVBQWQsTUFBYztFQUFkLFVBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsb0JBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7Ozs7RUFBQSwwQkFBYyxFQUFkLE1BQWM7RUFBZCw2QkFBYyxFQUFkLE1BQWM7RUFBZCxzQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGFBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGdCQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSx3QkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLFlBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7RUFBQSw2QkFBYyxFQUFkLE1BQWM7RUFBZCxvQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLHdCQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkO0VBQUEsMEJBQWMsRUFBZCxNQUFjO0VBQWQsYUFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGtCQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7Ozs7Ozs7Ozs7Ozs7RUFBQSxTQUFjO0FBQUE7O0FBQWQ7RUFBQSxTQUFjO0VBQWQsVUFBYztBQUFBOztBQUFkO0VBQUEsVUFBYztBQUFBOztBQUFkOzs7RUFBQSxnQkFBYztFQUFkLFNBQWM7RUFBZCxVQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxnQkFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDtFQUFBLFVBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDtFQUFBLFVBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDtFQUFBLFVBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDtFQUFBLFVBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7RUFBQSxVQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsZUFBYztBQUFBOztBQUFk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QUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEseUJBQW1CO01BQW5CLHNCQUFtQjtVQUFuQjtBQUFtQjtBQUFuQjtFQUFBLHlCQUFtQjtNQUFuQixzQkFBbUI7VUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSxzQkFBbUI7RUFBbkIsbUNBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsc0JBQW1CO0VBQW5CLGtDQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLHNCQUFtQjtFQUFuQixrQ0FBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxzQkFBbUI7RUFBbkIsbUNBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsc0JBQW1CO0VBQW5CLGtDQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLHNCQUFtQjtFQUFuQixrQ0FBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxzQkFBbUI7RUFBbkIsb0NBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CLHdDQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQix1Q0FBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkIsc0NBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CLHNDQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQixzQ0FBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkIsc0NBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CLHdDQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSxtQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxtQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkIsMkJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CLDJCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQiw2QkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLHlMQUFtQjtVQUFuQjtBQUFtQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdGFpbHdpbmQgYmFzZTtcXHJcXG5AdGFpbHdpbmQgY29tcG9uZW50cztcXHJcXG5AdGFpbHdpbmQgdXRpbGl0aWVzO1xcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IHJhbmRvbVVVSUQgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8ucmFuZG9tVVVJRCAmJiBjcnlwdG8ucmFuZG9tVVVJRC5iaW5kKGNyeXB0byk7XG5leHBvcnQgZGVmYXVsdCB7XG4gIHJhbmRvbVVVSURcbn07IiwiZXhwb3J0IGRlZmF1bHQgL14oPzpbMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMS01XVswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDApJC9pOyIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuIEluIHRoZSBicm93c2VyIHdlIHRoZXJlZm9yZVxuLy8gcmVxdWlyZSB0aGUgY3J5cHRvIEFQSSBhbmQgZG8gbm90IHN1cHBvcnQgYnVpbHQtaW4gZmFsbGJhY2sgdG8gbG93ZXIgcXVhbGl0eSByYW5kb20gbnVtYmVyXG4vLyBnZW5lcmF0b3JzIChsaWtlIE1hdGgucmFuZG9tKCkpLlxubGV0IGdldFJhbmRvbVZhbHVlcztcbmNvbnN0IHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm5nKCkge1xuICAvLyBsYXp5IGxvYWQgc28gdGhhdCBlbnZpcm9ubWVudHMgdGhhdCBuZWVkIHRvIHBvbHlmaWxsIGhhdmUgYSBjaGFuY2UgdG8gZG8gc29cbiAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAvLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG8gaW1wbGVtZW50YXRpb24uXG4gICAgZ2V0UmFuZG9tVmFsdWVzID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKTtcblxuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59IiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG5cbmNvbnN0IGJ5dGVUb0hleCA9IFtdO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zbGljZSgxKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gIC8vIE5vdGU6IEJlIGNhcmVmdWwgZWRpdGluZyB0aGlzIGNvZGUhICBJdCdzIGJlZW4gdHVuZWQgZm9yIHBlcmZvcm1hbmNlXG4gIC8vIGFuZCB3b3JrcyBpbiB3YXlzIHlvdSBtYXkgbm90IGV4cGVjdC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZC9wdWxsLzQzNFxuICByZXR1cm4gKGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dKS50b0xvd2VyQ2FzZSgpO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gIGNvbnN0IHV1aWQgPSB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQpOyAvLyBDb25zaXN0ZW5jeSBjaGVjayBmb3IgdmFsaWQgVVVJRC4gIElmIHRoaXMgdGhyb3dzLCBpdCdzIGxpa2VseSBkdWUgdG8gb25lXG4gIC8vIG9mIHRoZSBmb2xsb3dpbmc6XG4gIC8vIC0gT25lIG9yIG1vcmUgaW5wdXQgYXJyYXkgdmFsdWVzIGRvbid0IG1hcCB0byBhIGhleCBvY3RldCAobGVhZGluZyB0b1xuICAvLyBcInVuZGVmaW5lZFwiIGluIHRoZSB1dWlkKVxuICAvLyAtIEludmFsaWQgaW5wdXQgdmFsdWVzIGZvciB0aGUgUkZDIGB2ZXJzaW9uYCBvciBgdmFyaWFudGAgZmllbGRzXG5cbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICByZXR1cm4gdXVpZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5OyIsImltcG9ydCBuYXRpdmUgZnJvbSAnLi9uYXRpdmUuanMnO1xuaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgeyB1bnNhZmVTdHJpbmdpZnkgfSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIGlmIChuYXRpdmUucmFuZG9tVVVJRCAmJiAhYnVmICYmICFvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5hdGl2ZS5yYW5kb21VVUlEKCk7XG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgY29uc3Qgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7IC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcblxuICBybmRzWzZdID0gcm5kc1s2XSAmIDB4MGYgfCAweDQwO1xuICBybmRzWzhdID0gcm5kc1s4XSAmIDB4M2YgfCAweDgwOyAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcblxuICBpZiAoYnVmKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuXG4gIHJldHVybiB1bnNhZmVTdHJpbmdpZnkocm5kcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHY0OyIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcblxuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vYXNzZXRzL3N0eWxlcy9zdHlsZS5jc3NcIjtcclxuXHJcbmltcG9ydCB7IEluaXRpYWxpemUgfSBmcm9tIFwiLi9tb2R1bGVzL0luaXRpYWxpemVcIjtcclxuaW1wb3J0IHsgQWRkUHJvamVjdCB9IGZyb20gXCIuL21vZHVsZXMvVUkvQWRkUHJvamVjdFwiO1xyXG5pbXBvcnQgeyBTZWxlY3RQcm9qZWN0IH0gZnJvbSBcIi4vbW9kdWxlcy9VSS9TZWxlY3RQcm9qZWN0XCI7XHJcblxyXG5sZXQgYWxsUHJvamVjdHMgPSBbXTtcclxuYWxsUHJvamVjdHMucHVzaChJbml0aWFsaXplKTtcclxuXHJcbmxldCBzZWxlY3RlZFByb2plY3QgPSBJbml0aWFsaXplO1xyXG5cclxuY29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcm9vdFwiKTtcclxuXHJcbkFkZFByb2plY3Qocm9vdCwgYWxsUHJvamVjdHMpO1xyXG5TZWxlY3RQcm9qZWN0KHJvb3QsIGFsbFByb2plY3RzLCBzZWxlY3RlZFByb2plY3QpO1xyXG4iXSwibmFtZXMiOlsidjQiLCJ1dWlkdjQiLCJQcm9qZWN0IiwiY29uc3RydWN0b3IiLCJwcm9qZWN0TmFtZSIsIl9pZCIsIl9wcm9qZWN0TmFtZSIsIl9hY3RpdmUiLCJfVG9kb0xpc3QiLCJpZCIsIm5ld1Byb2plY3ROYW1lIiwiYWN0aXZlIiwibmV3QWN0aXZlIiwiVG9kb0xpc3QiLCJuZXdUb2RvIiwicHVzaCIsImFkZE5ld1RvZG8iLCJnZXRTaW5nbGVUb2RvIiwidG9kbyIsIl9wcm9qZWN0IiwiZmlsdGVyIiwicGFyc2VJbnQiLCJ1cGRhdGVQcm9qZWN0VG9kb0NvbXBsZXRlZCIsImZpbHRlcmVkQXJyIiwibWFwIiwiY29tcGxldGVkIiwidXBkYXRlUHJvamVjdFRvZG9Qcmlvcml0eSIsInByaW9yaXR5IiwidXBkYXRlUHJvamVjdFRvZG8iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZHVlRGF0ZSIsImRlbGV0ZVByb2plY3RUb2RvIiwiVG9kbyIsIkluaXRpYWxpemUiLCJpbmJveCIsImRpdkNvbnRhaW5lciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImlubmVySFRNTCIsInJvb3QiLCJxdWVyeVNlbGVjdG9yIiwiZGl2RWwiLCJkaXZUb2RvQ29udGFpbmVyRWwiLCJhcHBlbmRDaGlsZCIsIkFkZFByb2plY3QiLCJhbGxQcm9qZWN0IiwiYWRkTmV3UHJvamVjdEJ0biIsIm5ld1Byb2plY3RUaXRsZSIsInByb2plY3RDb250YWluZXIiLCJhZGRFdmVudExpc3RlbmVyIiwib25DbGlja0FkZE5ld1Byb2plY3RCdG4iLCJ2YWx1ZSIsImFsZXJ0IiwibmV3UHJvamVjdCIsIkFkZFRvZG8iLCJzZWxlY3RlZFByb2plY3QiLCJ0b2RvVGl0bGUiLCJ0b2RvRGVzY3JpcHRpb24iLCJ0b2RvRHVlRGF0ZSIsInRvZG9Qcmlvcml0eSIsImFkZE5ld1RvZG9CdG4iLCJ0b2RvQ29udGFpbmVyIiwiZ2V0VXNlcklucHV0Rm9yVG9kbyIsImFkZE5ld1RvZG9Ub1VJIiwibmV3VG9kb0RpdkVsIiwiRGVsZXRlVG9kbyIsImUiLCJvbkNsaWNrRGVsZXRlVG9kb0J0biIsInRhcmdldCIsImNvbnRhaW5zIiwiY2xpY2tlZFRvZG9DYXJkIiwicGFyZW50RWxlbWVudCIsInByb2plY3RJZCIsImdldEF0dHJpYnV0ZSIsInJlbW92ZSIsIlJlbmRlclNlbGVjdGVkUHJvamVjdE5hbWUiLCJwcm9qZWN0TmFtZUVsIiwidGV4dENvbnRlbnQiLCJSZW5kZXJTZWxlY3RlZFByb2plY3RUb2RvcyIsInByb2plY3QiLCJTZWxlY3RQcm9qZWN0Iiwib25DbGlja1Byb2plY3QiLCJwcm9qZWN0QnRucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiYnRuIiwiYWxsUHJvamVjdHMiXSwic291cmNlUm9vdCI6IiJ9