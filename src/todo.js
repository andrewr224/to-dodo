class ToDo {
  constructor(params) {
    this.title = params['title'];
    this.description = params['description'];
    this.dueDate = params['dueDate'];
    this.star = params['star'];
  }

  static new(params) {
    return new this(params);
  }

  sayStuff() {
    console.log('Surprise, motherfucker!');
  }

  toggleStar() {
    this.star = !this.star;
  }

  removeDueDate() {
    this.dueDate = '';
  }
}

export default ToDo;
