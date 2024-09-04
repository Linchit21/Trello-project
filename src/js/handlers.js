import {
  counterTodoElement,
  formElement,
  inputDiscriptionTodoElement,
  inputTitleTodoElement,
  modalWindowAddElement,
  selectUserElement,
  spaceTodoElement,
  spaceProgressElement,
  spaceDoneElement,
  counterInProgressElement,
  modalWindowDeleteAllElement,
} from './declaration.js';

import {actualCounter, buildTemplateTodo, getActualTime} from './helpers.js';
import {getTodos, setTodos} from './store.js';

let isEdit = false;
let todoEditId;

// Поиск нужного индекса в массиве
function findTodo(id) {
  const actualTodos = getTodos();
  const indexTodo = actualTodos.findIndex(el => el.id == id);
  return actualTodos[indexTodo];
}

// Поиск нужного индекса в массиве, изменение и сохранение
function editTodo(id, newValue) {
  const actualTodos = getTodos();
  const indexTodo = actualTodos.findIndex(el => el.id == id);
  actualTodos[indexTodo] = {...actualTodos[indexTodo], ...newValue};
  setTodos(actualTodos);
}

// Поиск нужного индекса в массиве, удаление из массива и сохранение
function deleteTodo(id) {
  const actualTodos = getTodos();
  const indexTodo = actualTodos.findIndex(el => el.id == id);
  actualTodos.splice(indexTodo, 1);
  setTodos(actualTodos);
}

// Подтверждение TODO и отрисовка
const handleMakeTodo = function () {
  const actualTodos = getTodos();

  function addSelectListener(el, selectValue = 'Todo') {
    const todoElement = document.getElementById(el.id);
    const selectStageElement = todoElement.querySelector('#select-todo');
    selectStageElement.value = selectValue;

    selectStageElement.addEventListener('change', function () {
      switch (selectStageElement.value) {
        case 'Todo':
          todoElement.remove();

          editTodo(el.id, {column: 'Todo'});
          buildTemplateTodo(el, spaceTodoElement);
          addSelectListener(el, selectStageElement.value);
          actualCounter();
          break;
        case 'In progress':
          todoElement.remove();

          editTodo(el.id, {column: 'In progress'});
          buildTemplateTodo(el, spaceProgressElement);
          addSelectListener(el, selectStageElement.value);
          actualCounter();
          break;
        case 'Done':
          todoElement.remove();

          editTodo(el.id, {column: 'Done'});
          buildTemplateTodo(el, spaceDoneElement);
          addSelectListener(el, selectStageElement.value);
          actualCounter();

          break;
        default:
          console.log('Sorry');
      }
    });
  }

  if (!isEdit) {
    if (inputTitleTodoElement.value !== '' || inputDiscriptionTodoElement.value !== '') {
      const newId = crypto.randomUUID();
      const time = getActualTime();
      const userName = selectUserElement.selectedIndex;

      function Todo() {
        this.id = newId;
        this.text = inputDiscriptionTodoElement.value;
        this.title = inputTitleTodoElement.value;
        this.createdAt = time;
        this.userIndex = userName;
        this.column = 'Todo';
      }

      const todo = new Todo();

      actualTodos.push(todo);
      modalWindowAddElement.classList.toggle('window-hide');

      buildTemplateTodo(todo, spaceTodoElement);
      addSelectListener(todo);

      actualCounter();
      setTodos(actualTodos);
      formElement.reset();
      console.log(actualTodos);
    }
  } else if (findTodo(todoEditId).column == 'Todo') {
    console.log('Todo');

    editTodo(todoEditId, {
      text: inputDiscriptionTodoElement.value,
      title: inputTitleTodoElement.value,
      userIndex: selectUserElement.selectedIndex,
    });

    spaceTodoElement.innerHTML = ''; // Очистка колонки

    actualTodos.forEach(el => {
      if (el.column == 'Todo') {
        buildTemplateTodo(el, spaceTodoElement);
        addSelectListener(el);
      }
    });

    modalWindowAddElement.classList.toggle('window-hide');

    // counterTodoElement.textContent = actualTodos.length;
    formElement.reset();
    isEdit = false;
  } else if (findTodo(todoEditId).column == 'In progress') {
    console.log('In progress');

    editTodo(todoEditId, {
      text: inputDiscriptionTodoElement.value,
      title: inputTitleTodoElement.value,
      userIndex: selectUserElement.selectedIndex,
    });

    spaceProgressElement.innerHTML = ''; // Очистка колонки

    actualTodos.forEach(el => {
      if (el.column == 'In progress') {
        buildTemplateTodo(el, spaceProgressElement);
        addSelectListener(el, 'In progress');
      }
    });

    modalWindowAddElement.classList.toggle('window-hide');

    // counterTodoElement.textContent = actualTodos.length;
    formElement.reset();
    isEdit = false;
  } else if (findTodo(todoEditId).column == 'Done') {
    console.log('Done');

    editTodo(todoEditId, {
      text: inputDiscriptionTodoElement.value,
      title: inputTitleTodoElement.value,
      userIndex: selectUserElement.selectedIndex,
    });

    spaceDoneElement.innerHTML = ''; // Очистка колонки

    actualTodos.forEach(el => {
      if (el.column == 'Done') {
        buildTemplateTodo(el, spaceDoneElement);
        addSelectListener(el, 'Done');
      }
    });

    modalWindowAddElement.classList.toggle('window-hide');

    // counterTodoElement.textContent = actualTodos.length;
    formElement.reset();
    isEdit = false;
  }
};

// Делегирование событий на блок TODO task
const handleChangingTodoTask = function () {
  const buttonEditElement = event.target.closest('.todo-work__button_edit');
  const buttonDeleteElement = event.target.closest('.todo-work__button_delete');

  const idElement = event.target.closest('.todo-work')?.getAttribute('id');
  const todo = findTodo(idElement);

  if (buttonEditElement) {
    // Редактирование карточки
    isEdit = true;
    todoEditId = idElement;

    inputTitleTodoElement.value = todo.title;
    inputDiscriptionTodoElement.value = todo.text;

    modalWindowAddElement.classList.toggle('window-hide');
  }

  if (buttonDeleteElement) {
    buttonDeleteElement.closest('.todo-work').remove();
    deleteTodo(idElement);
    actualCounter();
  }
};

const handleCallModalDelete = function () {
  modalWindowDeleteAllElement.classList.toggle('window-hide');
};

const handleDeleteAllTask = function () {
  const actualTodos = getTodos();
  spaceDoneElement.innerHTML = '';

  let newArray = actualTodos.filter(el => el.column !== 'Done');
  setTodos(newArray);
  actualCounter();
  modalWindowDeleteAllElement.classList.toggle('window-hide');
};

export {handleChangingTodoTask, handleMakeTodo, handleCallModalDelete, handleDeleteAllTask};
