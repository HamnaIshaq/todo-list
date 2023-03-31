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
  - TodoList : arr of objects

- Todo class
  - id : num / uuid
  - title: str
  - description: str
  - dueDate: str (from a calendar)
  - priority: num (from a select dropdown --> 1-high, 2-medium, 3-low)
  - completed: bool

Steps
1- UI for application ([DONE])
2- Show a default project called "inbox" on page load with some dummy data ([DONE])
3- Create a new todo and show it in dummy inbox project
1- get user data for todo
1- create a modal

- for 1 project
  1- create a project ([])
  2- show dummy todos from created project ([])
  3- show dummy data of selected project ([])
  3- create a new todo ([])
  4- edit a todo ([])
  5- delete a todo ([])
  6- view details of a todo ([])

- implement above for more than 1 project
- use local storage to persist data

30-03-2023
started project from scratch
Tailwind

- Installed tailwind and integrated it with webpack

Initialize.js

- used module pattern to make initial basic layout and render it on 1st page load
- created a default project named "inbox" with dummy data and inserted it on 1st page load

31-03-2023

- add new todo to UI and project array
- delete a todo from UI and project array

todo

- add a new project
- switch between projects
- show selected projects todos
- localstorage
- integrate date-fns package
- clean up code
