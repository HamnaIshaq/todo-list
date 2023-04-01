export const RenderSelectedProjectTodos = (root, project) => {
  const projectContainer = root.querySelector(".todo-container");

  projectContainer.innerHTML = "";

  projectContainer.innerHTML += project.TodoList.map((todo) => {
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
