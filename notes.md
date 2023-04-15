# Todo list logic and steps to build logic

- a todo list to track our tasks

- a project hosts multiple todos
- a project todos are seperate from another todos

features included

- view all projects
- delete a project
- view all todos in each project (title and duedate… the priority is indicated with border color of card)
- edit single todo details
- delete a todo
- store all data in local storage

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

---

- add new todo to UI and project array - DONE
- delete a todo from UI and project array - DONE

todo

- add a new project - DONE
- switch between projects - DONE
- show selected projects todos - DONE
- localstorage - DONE
- integrate date-fns package - DID NOT INCLUDE THIS
- clean up code (PENDING)

I wanted to use MVC pattern to build this project but decided against it. I wanted to first become a bit better with webpack and just seperating app logic from DOM.

15-04-2023

I think I am done with the project functionalities. The UI code needs to be cleaned up but the functionalities are done

# APP WALKTHROUGH

Default project named Inbox
click add todo button
fill in the modal with your todo details
click on the add button
todo is added in project and also stored in local storage
todo is now visible on the UI

Oh no, you misspelled something in the title?
no problem
click on the pencil icon of your todo
a modal will open that contains all the details of your clicked todo
edit it however you like
but remember you cannot create an empty todo so be sure to fill in all the detail
click on the update button in modal
your todo will be updated in UI and local storage

have you completed your todo?
go ahead and click on the your todo title or the checkbox
your todo will be marked as completed in UI and local storage
of course you can uncheck this as well

want to delete a todo?
just click on the cross icon on the todo card
this will delete your todo in UI and local storage

completed all todos in a project and now you want to delete that project?
just click on the cross icon next to project name in UI and local storage

# bugs

- medium

SOLVED
-->currently targeting the project using parent and event object. individual project button contains image, project name, and delete icon.
when the project name is clicked, that project is not selected.
when the project image is clicked, that project is not selected.
make it so any one of these clicks selects the project

- low
  SOLVED
  --> on hovering the project, the background and text color are too dark and text is not clearly visible
  to show a hovered project, show an outline instead of background color

all other bugs encountered will be written here with a brief description and possible solution
