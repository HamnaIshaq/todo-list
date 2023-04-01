// A BLUEPRINT A´TO CREATE NEW PROJECT WHICH HOSTS CREATED TODOS
import { v4 as uuidv4 } from "uuid";

class Project {
  constructor(projectName) {
    this._id = uuidv4(); // UNIQUE ID FOR A PROJECT
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
    const [todo] = this._project.filter((todo) => {
      if (todo.id === parseInt(id)) {
        return todo;
      }
    });

    return todo;
  }

  updateProjectTodoCompleted(id) {
    const filteredArr = this._TodoList.map((todo) => {
      if (todo._id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this._TodoList = filteredArr;
  }

  updateProjectTodoPriority(id, priority) {
    const filteredArr = this._TodoList.map((todo) => {
      if (todo._id === id) {
        todo.priority = priority;
      }
      return todo;
    });
    this._TodoList = filteredArr;
  }

  updateProjectTodo(id, title, description, dueDate, priority, completed) {
    const filteredArr = this._TodoList.filter((todo) => {
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
    const filteredArr = this._TodoList.filter((todo) => {
      if (todo.id !== parseInt(id)) {
        return todo;
      }
    });
    this._TodoList = filteredArr;
  }
}

export default Project;
