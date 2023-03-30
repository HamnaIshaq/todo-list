# Advanced todo list

# Functionality

([ ]) Dynamically add todo (use factory or class)
([ ]) todo Should have the following properties

- title
- description
- due date
- priority

([ ]) Create projects or seperate list of todos

- On load, there is a default project inside which user can store all their todos
  later on they can create a new project and move their todos

([ ]) Seperate application logic from DOM related stuff
Application logic means

- creating new todos
- setting todos as complete
- changing todo priority etc
  DOM stuff
- updating DOM
- add to DOM
- delete from DOM etc

([ ]) BASIC APP FUNCTIONALITIES
1- view all projects
2- view all todos in each project (probably just the title and duedate… perhaps changing color for different priorities)
3- expand a single todo to see/edit its details
4- delete a todo

use https://date-fns.org/ to format date

# To follow while making this project

1- follow single responsibility principle
2- use classes (do not have alot of practice with them)
3- use draw.io to draw a good app architecture diagram
4- start small and implement small functionalities rathar than big ones
5- use ES-6 modules
6- use webpack, npm, babel

# How to approach this problem

First start small and just create a todo with a class

# Process

create a todo
create a project list from the todo

we will have multiple todos hosted inside project list which contains all todos of 1 single project
we can then delete a single todo by passing its id to the project
and we will also make the instance of todo null

# resources used

https://dev.to/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13

https://www.underthehoodlearning.com/mvc-architectural-design-pattern-with-vanilla-js/
