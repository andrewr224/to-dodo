import ToDo from './todo';

class List {
  constructor(params) {
    this.title = params['title'];
    this.todos = [];
    this.dones = [];
  }

  static new(params) {
    return new this(params);
  }

  addToDo(params) {
    this.todos.push(ToDo.new(params));
  }

  destroy(index){
    this.todos.splice(index, 1);
  }

  markDone(index) {
    let todo = this.todos[index];

    todo.markDone();

    this.dones.push(todo);
    this.destroy(index);
  }
}

export default List;
