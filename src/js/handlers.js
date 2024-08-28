import {
  counterTodoElement,
  formElement,
  inputDiscriptionTodoElement,
  inputTitleTodoElement,
  modalWindowElement,
  selectUserElement,
  spaceTodoElement,
  spaceProgressElement,
  spaceDoneElement,
} from './declaration.js';

import {buildTemplateTodo, getActualTime} from './helpers.js';
import {getTodos, setTodos} from './store.js';

let isEdit = false;
let todoEditId;

function findTodo(id) {
  const actualTodos = getTodos();
  const indexTodo = actualTodos.findIndex(el => el.id == id);
  return actualTodos[indexTodo];
}

function editTodo(id, newValue) {
  const actualTodos = getTodos();
  const indexTodo = actualTodos.findIndex(el => el.id == id);
  actualTodos[indexTodo] = {...actualTodos[indexTodo], ...newValue};
  setTodos(actualTodos);
}

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
          counterTodoElement.textContent = actualTodos.length; //

          editTodo(el.id, {column: 'Todo'});
          buildTemplateTodo(el, spaceTodoElement);
          addSelectListener(el, selectStageElement.value);
          break;
        case 'In progress':
          todoElement.remove();
          counterTodoElement.textContent = actualTodos.length;

          editTodo(el.id, {column: 'In progress'});
          buildTemplateTodo(el, spaceProgressElement);
          addSelectListener(el, selectStageElement.value);
          console.log(actualTodos);
          break;
        case 'Done':
          todoElement.remove();
          counterTodoElement.textContent = actualTodos.length;

          editTodo(el.id, {column: 'Done'});
          buildTemplateTodo(el, spaceDoneElement);
          addSelectListener(el, selectStageElement.value);
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
      modalWindowElement.classList.toggle('window-hide');

      buildTemplateTodo(todo, spaceTodoElement);
      addSelectListener(todo);

      counterTodoElement.textContent = actualTodos.length;
      setTodos(actualTodos);
      formElement.reset();
      console.log(actualTodos);
    }
  } else {
    editTodo(todoEditId, {
      text: inputDiscriptionTodoElement.value,
      title: inputTitleTodoElement.value,
      userIndex: selectUserElement.selectedIndex,
    });

    spaceTodoElement.innerHTML = ''; // Очистка колонки

    actualTodos.forEach(el => {
      buildTemplateTodo(el, spaceTodoElement);
      addSelectListener(el);
    });

    modalWindowElement.classList.toggle('window-hide');

    counterTodoElement.textContent = actualTodos.length;
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

    modalWindowElement.classList.toggle('window-hide');
  }

  if (buttonDeleteElement) {
    // Удаление карточки
    buttonDeleteElement.closest('.todo-work').remove();
    deleteTodo(idElement);
    // counterTodoElement.textContent = actualTodos.length;
  }
};

export {handleChangingTodoTask, handleMakeTodo};
