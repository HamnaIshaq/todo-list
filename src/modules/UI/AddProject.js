export const AddProject = (root, allProject) => {
  const addNewProjectBtn = root.querySelector(".add-new-project-btn");

  addNewProjectBtn.addEventListener("click", onClickAddNewProjectBtn);

  function onClickAddNewProjectBtn() {
    console.log("add a new project btn clicked");
    console.log(addNewProjectBtn.parentElement);
  }
};
