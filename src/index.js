//import UI from "./modules/UI";
import "./assets/styles/style.css";

class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
  }

  // change complete flag
  changeCompletedStatus() {
    this.completed = !this.completed;
    return this.completed;
  }

  // change priority
  changePriority(priority) {
    this.priority = priority;
    return this.priority;
  }
}

const todo = new Todo("walk", "fitness", "2023-01-02", "high");
console.log(todo);
console.log(todo.changeCompletedStatus());
console.log(todo.changePriority("low"));
console.log(todo);
