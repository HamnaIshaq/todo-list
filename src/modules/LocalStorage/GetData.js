export const GetData = (key) => {
  const data = localStorage.getItem(key);
  if (!data) {
    return localStorage.setItem(key, "[]");
  } else {
    return JSON.parse(localStorage.getItem(key));
  }
};
