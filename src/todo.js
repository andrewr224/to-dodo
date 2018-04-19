class ToDo {
  constructor(params) {
    this.title = params['title'];
    this.star  = params['star'];
    this.done  = false;
  }

  static new(params) {
    return new this(params);
  }
}

export default ToDo;
