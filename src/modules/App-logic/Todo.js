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

export default Todo;
