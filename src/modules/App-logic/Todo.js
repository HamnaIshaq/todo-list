// A BLUEPRINT TO CREATE A NEW TODO
import { v4 as uuidv4 } from "uuid";

class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
    this.id = uuidv4();
  }
}

export default Todo;
