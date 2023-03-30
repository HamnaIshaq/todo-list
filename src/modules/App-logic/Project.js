// A BLUEPRINT A´TO CREATE NEW PROJECT WHICH HOSTS CREATED TODOS
import { v4 as uuidv4 } from "uuid";

class Project {
  constructor(projectName) {
    this._id = uuidv4(); // UNIQUE ID FOR A PROJECT
    this._projectName = projectName;
    this._active = false;
    this._project = [
      {
        id: 1,
        title: "walk",
        description: "for 10 min",
        priority: "medium",
        dueDate: "2023-03-29",
        completed: false,
      },
      {
        id: 2,
        title: "get groceries",
        description: "milk, eggs, fruits",
        priority: "high",
        dueDate: "2023-03-29",
        completed: false,
      },
    ];
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

  get project() {
    return this._project;
  }

  set project(newTodo) {
    this._project.push(newTodo);
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
    const filteredArr = this._project.map((todo) => {
      if (todo._id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this._project = filteredArr;
  }

  updateProjectTodoPriority(id, priority) {
    const filteredArr = this._project.map((todo) => {
      if (todo._id === id) {
        todo.priority = priority;
      }
      return todo;
    });
    this._project = filteredArr;
  }

  updateProjectTodo(id, title, description, dueDate, priority, completed) {
    const filteredArr = this._project.filter((todo) => {
      if (todo._id === id) {
        todo.title = title;
        todo.description = description;
        todo.dueDate = dueDate;
        todo.priority = priority;
        todo.completed = completed;
      }
    });
    this._project = filteredArr;
  }

  deleteProjectTodo(id) {
    const filteredArr = this._project.filter((todo) => {
      if (todo.id !== parseInt(id)) {
        return todo;
      }
    });
    this._project = filteredArr;
  }
}

export default Project;
