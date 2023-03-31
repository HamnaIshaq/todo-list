import Project from "./App-logic/Project";

export const Initialize = (function () {
  // CREATE A DEFAULT PROJECT CALLED INBOX
  const inbox = new Project("inbox");

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
          class="border-2 border-indigo-800 w-full pt-2 pb-2 bg-indigo-800 text-white rounded"
        >
          ${inbox.projectName}
        </button>
      </li>
    </ul>

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
      <h2 class="text-3xl text-indigo-800">Todo</h2>
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
        <button type="button" class="border-2 border-red-800 pl-2 pr-2 bg-red-800 text-white rounded-full delete-add-todo-container-btn">
          X
        </button>
        <button type="button" class="border-2 border-green-800 pl-2 pr-2 bg-green-800 text-white add-new-todo-btn" data-project-id=${
          inbox.id
        }>
          Add
        </button>
      </div>
    </div>
    <div class="todo-container">
      ${inbox.TodoList.map((todo) => {
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
})();
