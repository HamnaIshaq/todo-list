// A BLUEPRINT A´TO CREATE NEW PROJECT WHICH HOSTS CREATED TODOS
import { v4 as uuidv4 } from "uuid";

class Project {
  constructor(projectName) {
    this._id = uuidv4(); // UNIQUE ID FOR A PROJECT
    this._projectName = projectName;
    this._project = [
      {
        id: 1,
        title: "walk",
        description: "for 10 min",
        priority: "urgent",
        dueDate: "2023-03-29",
        completed: false,
      },
    ];
  }

  get projectName() {
    return this._projectName;
  }

  set projectName(newProjectName) {
    this._projectName = newProjectName;
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

export default Project;
