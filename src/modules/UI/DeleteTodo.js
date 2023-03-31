export const DeleteTodo = (root, selectedProject) => {
  const todoContainer = root.querySelector(".todo-container");

  todoContainer.addEventListener("click", (e) => onClickDeleteTodoBtn(e));

  function onClickDeleteTodoBtn(e) {
    if (e.target.classList.contains("delete-todo-btn")) {
      const clickedTodoCard = e.target.parentElement.parentElement;
      const projectId = clickedTodoCard.getAttribute("data-todo-id");

      clickedTodoCard.remove();

      selectedProject.deleteProjectTodo(projectId);
    }
  }
};
