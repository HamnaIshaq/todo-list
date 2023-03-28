//import UI from "./modules/UI";
//import "./assets/styles/style.css";

// A BLUEPRINT TO CREATE A NEW TODO
class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
    this.id = Date.now();
  }
}

// A BLUEPRINT A´TO CREATE NEW PROJECT WHICH HOSTS CREATED TODOS
class Project {
  constructor(projectName) {
    this._projectName = projectName;
    this._project = [];
  }

  get project() {
    return this._project;
  }

  set project(newTodo) {
    this._project.push(newTodo);
  }

  updateProjectTodoCompleted(id) {
    const filteredArr = this._project.map((todo) => {
      if (todo._id === id) {
        todo._completed = !todo._completed;
      }
      return todo;
    });
    this._project = filteredArr;
  }

  updateProjectTodoPriority(id, priority) {
    const filteredArr = this._project.map((todo) => {
      if (todo._id === id) {
        todo._priority = priority;
      }
      return todo;
    });
    this._project = filteredArr;
  }

  updateProjectTodo(id, title, description, dueDate, priority, completed) {
    const filteredArr = this._project.filter((todo) => {
      if (todo._id === id) {
        todo._title = title;
        todo._description = description;
        todo._dueDate = dueDate;
        todo._priority = priority;
        todo._completed = completed;
      }
    });
    this._project = filteredArr;
  }

  deleteProjectTodo(id) {
    const filteredArr = this._project.filter((todo) => {
      return todo._id !== id;
    });
    this._project = filteredArr;
  }
}

/*
let todo1 = new Todo("run", "fitness", "2023-01-02", "low");
console.log(todo1);
const project = new Project("projectName");
project.project = todo1;
console.log(project);
*/
