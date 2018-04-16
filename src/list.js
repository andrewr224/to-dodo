import generator from './generator';
import ToDo      from './todo';

class List {
  constructor(params) {
    this.title = params['title'];
    this.todos = [];
  }

  static new(params) {
    return new this(params);
  }

  sayStuff() {
    console.log('quack!');
  }

  addToDo(params) {
    this.todos.push(ToDo.new(params));
  }
}

export default List;
