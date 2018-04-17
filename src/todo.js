class ToDo {
  constructor(params) {
    this.title = params['title'];
    this.star  = params['star'];
    this.done  = false;
  }

  static new(params) {
    return new this(params);
  }

  toggleStar() {
    this.star = !this.star;
  }

  markDone() {
    this.done = true;
  }

  removeDueDate() {
    this.dueDate = '';
  }
}

export default ToDo;
