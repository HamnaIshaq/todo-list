export const RenderSelectedProjectName = (root, projectName) => {
  const projectNameEl = root.querySelector(".selected-project-name");

  projectNameEl.textContent = projectName;
};
