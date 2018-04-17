import controller from './controller';
import List       from './list';

let lists = document.querySelectorAll('.list');
let todoField = document.querySelector('.todo-field');

let inbox = List.new({'title': 'Inbox'});
inbox.addToDo({'title': 'Type your task in the field above to add it', 'star': false});
inbox.addToDo({'title': "Click on a list to see it's tasks", 'star': true});
inbox.addToDo({'title': "Click on a task to see it's description", 'star': true});
inbox.addToDo({'title': 'Update your tasks in real time by simply clicking checkbox to mark task as complete, or by clicking on a star to make it a priority', 'star': true});

let flash = List.new({'title': 'FlashMap'});
flash.addToDo({'title': 'Get AWS credentials', 'star': true});
flash.addToDo({'title': 'Deploy to AWS', 'star': true});

let todo = List.new({'title': 'ToDo Project'});
todo.addToDo({'title': 'Pick a nice name', 'star': true});
todo.addToDo({'title': 'Create some dummy markup', 'star': true});
todo.addToDo({'title': 'Add basic styles', 'star': true});
todo.addToDo({'title': 'Add js to rule them all', 'star': true});

controller.addList(inbox);
controller.addList(flash);
controller.addList(todo);
controller.showList(inbox);
