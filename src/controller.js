const controller = (() => {
  const container = document.querySelector('section');
  const listsBox  = document.querySelector('.lists');
  const toDoBox   = document.querySelector('.todos');
  const lists     = [];

  let buildList = (list) => {
    let box = document.createElement('div');
    box.classList.add('list');
    box.textContent = list.title;
    box.dataset.value = lists.indexOf(list);
    box.addEventListener('click', select);
    return box;
  };

  let deselectOld = () => {
    let oldActive = document.querySelector('.active');
    if (oldActive) { oldActive.classList.remove('active'); }
  };

  function select() {
    deselectOld();

    let listNum = this.getAttribute('data-value');

    showList(lists[listNum]);
  };

  function done() {
    let listNum = document.querySelector('.active').getAttribute('data-value');
    let list    = lists[listNum];
    let index   = this.parentNode.getAttribute('data-todo');

    list.markDone(index);
    showList(list);
  };

  function toggleStar() {
    let listNum = document.querySelector('.active').getAttribute('data-value');
    let list    = lists[listNum];
    let index   = this.parentNode.getAttribute('data-todo');
    let todo    = list.todos[index];

    todo.toggleStar();
    showList(list);
  };

  function destroy() {
    if(!confirm('Delete Item?')) { return; }

    let listNum = document.querySelector('.active').getAttribute('data-value');
    let list    = lists[listNum];
    let index   = this.parentNode.getAttribute('data-todo');

    list.destroy(index);
    showList(list);
  }

  let buildToDo = (todo) => {
    let listNum = document.querySelector('.active').getAttribute('data-value');
    let list    = lists[listNum];

    let box = document.createElement('div');
    box.dataset.todo = list.todos.indexOf(todo);
    box.classList.add('todo');

    let checkbox = document.createElement('input');
    checkbox.addEventListener('click', done);
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
    let listNum = document.querySelector('.active').getAttribute('data-value');
    let list    = lists[listNum];

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

  let addList = (list) => {
    lists.push(list);

    listsBox.appendChild(buildList(list));
  };

  let renderToDo = (todo) => {
    toDoBox.appendChild(buildToDo(todo));
  };

  let renderDone = (done) => {
    toDoBox.appendChild(buildDone(done));
  };

  let clearToDos = () => {
    toDoBox.textContent = '';
  };

  let addHeader = (title) => {
    let header = document.createElement('header');
    let h3     = document.createElement('h3');

    h3.textContent = title;
    header.appendChild(h3);

    toDoBox.appendChild(header);
  };

  function addToDo(e) {
    if (event.keyCode == 13) {
      let title   = this.value;

      if(!title) { return; }

      let listNum = document.querySelector('.active').getAttribute('data-value');
      let star    = document.querySelector('.star').checked;

      let list = lists[listNum];

      list.addToDo({'title': title, 'star': star});

      showList(list);
    }
  }

  let addInput = () => {
    let msg = 'Enter your task';

    let div = document.createElement('div');
    div.classList.add('input-group');

    let title = document.createElement('input');
    title.addEventListener('keydown', addToDo);
    title.type = 'text';
    title.value = msg;
    title.addEventListener('focus', () => { if(title.value == msg) { title.value=''; } });
    title.addEventListener('focusout', () => { if(!title.value) { title.value = msg; } });

    let star = document.createElement('input');
    star.classList.add('star');
    star.type = 'checkbox';

    div.appendChild(title);
    div.appendChild(star);

    toDoBox.appendChild(div);
  };

  let highlight = (i) => {
    document.querySelector(`[data-value='${i}']`).classList.add('active');
  };

  let showList = (list) => {
    clearToDos();
    addHeader(list.title);
    addInput();
    highlight(lists.indexOf(list));

    list.todos.forEach(todo => {
      renderToDo(todo);
    });

    if(list.dones.length == 0) { return; }

    let completed = document.createElement('p');
    completed.classList.add('completed');
    completed.textContent = 'Completed Todos';

    toDoBox.appendChild(completed);

    list.dones.forEach(done => {
      renderDone(done);
    });
  };

  return { addList, showList };
})();

export default controller;
