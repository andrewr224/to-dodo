import ToDo from './todo';

class List {
  constructor(params) {
    this.title     = params['title'];
    this.todos     = [];
    this.dones     = [];
    this.protected = params['protected'];
  }

  static new(params) {
    return new this(params);
  }

  addToDo(params) {
    this.todos.push(ToDo.new(params));
  }
}

export default List;
