import ToDo from './todo';

const todosController = (() => {
  const toDoBox = document.querySelector('.todos');
  const lists   = JSON.parse(localStorage.getItem('lists'));

  let index = (params = {}) => {
    let title = params['title'];
    let todos = params['todos'];
    let dones = params['dones'];

    clearToDos();

    toDoBox.appendChild(buildTitle(title));
    toDoBox.appendChild(buildToDoForm());

    if(todos.length > 0) {
      todos.forEach(todo => {
        toDoBox.appendChild(buildToDo(todo, todos.indexOf(todo)));
      });
    }

    if(dones.length == 0) { return; }

    toDoBox.appendChild(buildCompleted());

    dones.forEach(done => {
      toDoBox.appendChild(buildDone(done));
    });

  };

  let buildCompleted = () => {
    let completed = document.createElement('p');
    completed.classList.add('completed');
    completed.textContent = 'Completed Todos';

    return completed;
  };

  let clearToDos = () => {
    toDoBox.textContent = '';
  };

  let buildTitle = (title) => {
    let header = document.createElement('header');
    let h3     = document.createElement('h3');

    h3.textContent = title;
    header.appendChild(h3);

    return header;
  };

  let buildToDoForm = () => {
    let form = document.createElement('div');
    form.classList.add('input-group');

    let msg = 'Enter your task';

    let title = document.createElement('input');
    title.addEventListener('keydown', addToDo);
    title.type = 'text';
    title.value = msg;
    title.addEventListener('focus', () => { if(title.value == msg) { title.value=''; } });
    title.addEventListener('focusout', () => { if(!title.value) { title.value = msg; } });

    let star = document.createElement('input');
    star.classList.add('star');
    star.type = 'checkbox';

    form.appendChild(title);
    form.appendChild(star);

    return form;
  };

  let buildToDo = (todo, index) => {
    let box = document.createElement('div');
    box.dataset.todo = index;
    box.classList.add('todo');

    let checkbox = document.createElement('input');
    checkbox.addEventListener('click', markDone);
    checkbox.type = 'checkbox';

    let title = document.createElement('p');
    title.textContent = todo.title;

    let trash = document.createElement('span');
    trash.addEventListener('click', destroy);
    trash.innerHTML = '&#128465;';

    let star = document.createElement('span');
    star.addEventListener('click', toggleStar);
    star.innerHTML = todo.star ? '&#9733;' : '&#9734;';

    box.appendChild(checkbox);
    box.appendChild(title);
    box.appendChild(trash);
    box.appendChild(star);

    return box;
  };

  let buildDone = (done) => {
    let box = document.createElement('div');
    box.classList.add('done');

    let checkbox = document.createElement('input');
    checkbox.checked = true;
    checkbox.disabled = true;
    checkbox.type = 'checkbox';

    let p = document.createElement('p');
    p.textContent = done.title;

    let star = document.createElement('span');
    star.innerHTML = done.star ? '&#9733;' : '&#9734;';

    box.appendChild(checkbox);
    box.appendChild(p);
    box.appendChild(star);

    return box;
  };

  function addToDo(e) {
    if (event.keyCode == 13) {
      let title = this.value;

      if(!title) { return; }

      let listNum = document.querySelector('.active').getAttribute('data-value');
      let star    = document.querySelector('.star').checked;

      let list = lists[listNum];

      let todo = ToDo.new({
        'title': title,
        'star': star,
        'done': false
      });

      list.todos.push(todo);

      localStorage.setItem('lists', JSON.stringify(lists));

      index({
        'title': list.title,
        'todos': list.todos,
        'dones': list.dones
      });
    }
  }

  function markDone() {
    let listNum = document.querySelector('.active').getAttribute('data-value');
    let list    = lists[listNum];
    let index   = this.parentNode.getAttribute('data-todo');

    let todo = list.todos[index];
    todo.done = true;

    list.dones.push(todo);
    list.todos.splice(index, 1);

    localStorage.setItem('lists', JSON.stringify(lists));

    let completed = document.querySelector('.completed');

    if(!completed) {
      toDoBox.appendChild(buildCompleted());
    }

    this.parentNode.remove();
    toDoBox.appendChild(buildDone(todo));
  }

  function destroy() {
    if(!confirm('Delete Item?')) { return; }

    let listNum = document.querySelector('.active').getAttribute('data-value');
    let list    = lists[listNum];
    let index   = this.parentNode.getAttribute('data-todo');

    list.todos.splice(index, 1);
    this.parentNode.remove();
    localStorage.setItem('lists', JSON.stringify(lists));
  };

  function toggleStar() {
    let listNum = document.querySelector('.active').getAttribute('data-value');
    let list    = lists[listNum];
    let index   = this.parentNode.getAttribute('data-todo');
    let todo    = list.todos[index];

    todo.star = !todo.star;
    localStorage.setItem('lists', JSON.stringify(lists));

    toDoBox.replaceChild(buildToDo(todo), this.parentNode);
  };

  return { index };
})();

export default todosController;
