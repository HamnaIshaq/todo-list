export const AddData = (data) => {
  localStorage.setItem("projects", JSON.stringify(data));
};
