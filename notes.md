# Todo list logic and steps to build logic

- a todo list to track our tasks

- a project hosts multiple todos
- a project todos are seperate from another todos

features included

- view all projects
- view all todos in each project (probably just the title and duedate… perhaps changing color for different priorities)
- expand a single todo to see/edit its details
- delete a todo

approach

main logic

- Project class

  - id : num / uuid
  - projectName : str
  - Todo List : arr of objects

- Todo class
  - id : num / uuid
  - title: str
  - description: str
  - dueDate: str (from a calendar)
  - priority: str (from a select dropdown)
  - completed: bool

Steps

- for 1 project
  1- create a project
  2- show dummy todos from created project
  3- create a new todo
  4- edit a todo
  5- delete a todo
  6- view details of a todo

- implement above for more than 1 project
- use local storage to persist data
