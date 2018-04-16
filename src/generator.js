const generator = (() => {
  const container = document.querySelector('section');
  const listsBox  = document.querySelector('.lists');
  const toDoBox   = document.querySelector('.todos');

  let buildList = (list) => {
    let box = document.createElement('div');
    box.classList.add('list');
    box.textContent = list.title;

    return box;
  };

  let buildToDo = (todo) => {
    let box = document.createElement('div');
    box.classList.add('todo');

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    let p = document.createElement('p');
    p.textContent = todo.title;

    let star = document.createElement('span');
    star.innerHTML = todo.star ? '&#9733;' : '&#9734;';

    box.appendChild(checkbox);
    box.appendChild(p);
    box.appendChild(star);

    return box;
  };

  let addList = (list) => {
    listsBox.appendChild(buildList(list));
  };

  let addToDo = (todo) => {
    toDoBox.appendChild(buildToDo(todo));
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

  let showList = (list) => {
    clearToDos();
    addHeader(list.title);

    list.todos.forEach(todo => {
      addToDo(todo);
    });
  };

  return { addList, showList };
})();

export default generator;
