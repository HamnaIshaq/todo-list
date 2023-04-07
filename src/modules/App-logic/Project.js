import { v4 as uuidv4 } from "uuid";

// A BLUEPRINT TO CREATE NEW PROJECT WHICH HOSTS CREATED TODOS
class Project {
  constructor(projectName, id = "", active = false, TodoList = []) {
    this._id = id ? id : uuidv4(); // UNIQUE ID FOR A PROJECT
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
    newActive ? (this._active = true) : (this._active = false);
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
    const [todo] = this._TodoList.filter((todo) => {
      if (todo.id === id) {
        return todo;
      }
    });

    return todo;
  }

  updateProjectTodoCompleted(id) {
    const filteredArr = this._TodoList.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this._TodoList = filteredArr;
  }

  updateProjectTodo(id, title, description, dueDate, priority, completed) {
    this._TodoList.forEach((todo) => {
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
    const filteredArr = this._TodoList.filter((todo) => {
      if (todo.id !== id) {
        return todo;
      }
    });
    this._TodoList = filteredArr;
  }
}

export default Project;
