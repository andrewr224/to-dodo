import List            from './list';
import todosController from './todos_controller';

const listsController = (() => {
  const listsBox  = document.querySelector('.lists');

  if(!localStorage['lists']) {
    setup();
  }

  const lists = JSON.parse(localStorage.getItem('lists'));
  const inbox = lists[0];


  let index = () => {
    listsBox.textContent = '';
    listsBox.appendChild(buildLogo());

    if(lists.length > 0) {
      lists.forEach(list => {
        listsBox.appendChild(buildList(list));
      });
    }

    listsBox.appendChild(buildListForm());

    show(inbox);
  };

  let show = (list) => {
    highlight(lists.indexOf(list));

    todosController.index({
      'title': list.title,
      'todos': list.todos,
      'dones': list.dones
    });
  };


  let buildLogo = () => {
    let header = document.createElement('header');
    let img    = document.createElement('img');
    let h1     = document.createElement('h1');

    img.src = 'assets/icon.png';
    h1.textContent = 'To DoDo';
    header.appendChild(img);
    header.appendChild(h1);

    return header;
  };

  let buildList = (list) => {
    let box = document.createElement('div');
    box.classList.add('list');
    box.dataset.value = lists.indexOf(list);

    let title = document.createElement('p');
    title.textContent = list.title;
    title.addEventListener('click', select);

    box.appendChild(title);

    if(!list.protected) {
      let trash = document.createElement('span');
      trash.addEventListener('click', destroy);
      trash.innerHTML = '&#128465;';
      box.appendChild(trash);
    }

    return box;
  };

  let buildListForm = () => {
    let input = document.createElement('input');
    let msg   = 'Add new list';

    input.addEventListener('keydown', addList);
    input.value = msg;
    input.addEventListener('focus', () => { if(input.value == msg) { input.value=''; } });
    input.addEventListener('focusout', () => { if(!input.value) { input.value = msg; } });

    return input;
  };

  let highlight = (i) => {
    dehighlightOld();

    document.querySelector(`[data-value='${i}']`).classList.add('active');
  };

  function destroy() {
    if(!confirm('Delete List? This will delete all todos in this list.')) { return; }

    let listNum = this.parentNode.getAttribute('data-value');
    lists.splice(listNum, 1);

    localStorage.setItem('lists', JSON.stringify(lists));

    index();
  };

  let dehighlightOld = () => {
    let oldActive = document.querySelector('.active');
    if (oldActive) { oldActive.classList.remove('active'); }
  };

  function select() {
    let listNum = this.parentNode.getAttribute('data-value');

    show(lists[listNum]);
  };

  function addList() {
    if (event.keyCode == 13) {
      let title   = this.value;

      if(!title) { return; }

      let list = List.new({'title': title});
      lists.push(list);

      localStorage.setItem('lists', JSON.stringify(lists));

      index();
      show(list);
    }
  };

  function setup() {
    let inbox     = List.new({ 'title': 'Inbox', 'protected': true });
    let tutorial  = List.new({ 'title': 'To DoDo Tut' });
    tutorial.addToDo({'title': 'Type your task in the field above to add it', 'star': false});
    tutorial.addToDo({'title': 'Mark tasks as complete by clicking on a checkbox', 'star': true});
    tutorial.addToDo({'title': 'You can make task a priority by clicking on a star!', 'star': true});
    tutorial.addToDo({'title': 'Click on a trash icon to delete your task', 'star': false});
    tutorial.addToDo({'title': "Click on a list to see it's tasks", 'star': true});

    let defaultLists = [inbox, tutorial];
    localStorage.setItem('lists', JSON.stringify(defaultLists));
  };

  return { index };
})();

export default listsController;
