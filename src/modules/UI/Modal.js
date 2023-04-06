// EVENT LISTENERS TO OPEN/ CLOSE MODALS

export const OpenCloseModal = (modalClass, btnClass) => {
  document
    .querySelectorAll(`.${modalClass}`)
    .forEach((item) => item.addEventListener("click", (e) => CloseModal(e)));
  document
    .querySelectorAll(`.${btnClass}`)
    .forEach((item) =>
      item.addEventListener("click", () => OpenModal(modalClass))
    );
};

export const RemoveModalListeners = (modalClass, btnClass) => {
  document
    .querySelectorAll(`.${modalClass}`)
    .forEach((item) => item.removeEventListener("click", (e) => CloseModal(e)));
  document
    .querySelectorAll(`.${btnClass}`)
    .forEach((item) =>
      item.removeEventListener("click", () => OpenModal(modalClass))
    );
};

export const AttachOpenCloseModal = (todoId) => {
  document
    .getElementById(`${todoId}updateTodo`)
    .addEventListener("click", () => {
      document.querySelector("#updateTodoModal").style.display = "flex";
    });
};

const CloseModal = (event) => {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
  }
};

const OpenModal = (modalClass) => {
  document.querySelector(`.${modalClass}`).style.display = "flex";
};

export const CloseModalWithBtn = (btnClass) => {
  document.querySelectorAll(`.${btnClass}`).forEach((closeBtn) => {
    closeBtn.closest(".modal").style.display = "none";
  });
};

export const CloseModalWithCrossBtn = (btnClass) => {
  document.querySelectorAll(`.${btnClass}`).forEach((closeBtn) => {
    closeBtn.addEventListener("click", () => {
      closeBtn.closest(".modal").style.display = "none";
    });
  });
};
