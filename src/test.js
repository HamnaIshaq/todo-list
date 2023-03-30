//import UI from "./modules/UI";
import "./assets/styles/style.css";
let id = 1;
class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
    this.id = id;
  }

  updateTitle(newTitle) {
    this._title = newTitle;
  }

  updateDescription(newDescription) {
    this._description = newDescription;
  }

  updateDueDate(newDueDate) {
    this._dueDate = newDueDate;
  }

  updateCompleted() {
    this._completed = !this._completed;
  }

  updatePriority(newPriority) {
    this._priority = newPriority;
  }
}

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

  deleteTodo(id) {
    const filteredArr = this._project.filter((todo) => {
      return todo._id !== id;
    });
    this._project = filteredArr;
  }

  updateTodoCompleted(id) {
    const filteredArr = this._project.map((todo) => {
      if (todo._id === id) {
        todo._completed = !todo._completed;
      }
      return todo;
    });
    this._project = filteredArr;
  }
  updateTodoPriority(id, priority) {
    const filteredArr = this._project.map((todo) => {
      if (todo._id === id) {
        todo._priority = priority;
      }
      return todo;
    });
    this._project = filteredArr;
  }
}

//let todo = new Todo("walk", "fitness", "2023-01-02", "high");

//project.project = { todo: todo };

id = id + 1;
let todo1 = new Todo("run", "fitness", "2023-01-02", "low");
console.log(todo1);
const project = new Project("projectName");
project.project = todo1;
console.log(project);
//project.project = todo1.getTodo;

//console.log(todo1);

//project.project[0].todo.completed = true;

//console.log(project);

// delete selected todo from project and make that specific instance null
//project.deleteTodo(todo._id);
//todo = null;

//project.updateTodoCompleted(1);
//project.updateTodoPriority(1, "moderate");

//console.log(project);

/*
  get id() {
    return this._id;
  }

  get title() {
    return this._title;
  }

  get description() {
    return this._description;
  }

  get dueDate() {
    return this._dueDate;
  }

  get priority() {
    return this._priority;
  }

  get completed() {
    return this._completed;
  }

  set id(updatedId) {
    this._id = updatedId;
  }

  set title(updatedTitle) {
    this._title = updatedTitle;
  }

  set description(updatedDescription) {
    this._description = updatedDescription;
  }

  set priority(updatedPriority) {
    this._priority = updatedPriority;
  }

  set completed(updatedCompleted) {
    this._completed = updatedCompleted;
  }

  set dueDate(updatedDueDate) {
    this._dueDate = updatedDueDate;
  }

  get getTodo() {
    let todoList = {};
    for (let [key, value] of Object.entries(this)) {
      todoList[key] = value;
    }

    return todoList;
  }
 */
