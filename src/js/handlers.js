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
let dataId;

// Подтверждение TODO и отрисовка
const handleMakeTodo = function () {
  const actualTodos = getTodos();

  function addSelectListener(el) {
    const todoElement = document.getElementById(el.id);
    const selectStageElement = todoElement.querySelector('#select-todo');

    selectStageElement.addEventListener('change', function () {
      switch (selectStageElement.value) {
        case 'Todo':
          todoElement.remove();
          counterTodoElement.textContent = actualTodos.length; //

          buildTemplateTodo(el, spaceTodoElement);
          addSelectListener(el);
          break;
        case 'In progress':
          todoElement.remove();
          counterTodoElement.textContent = actualTodos.length;

          buildTemplateTodo(el, spaceProgressElement);
          addSelectListener(el);
          break;
        case 'Done':
          todoElement.remove();
          counterTodoElement.textContent = actualTodos.length;

          buildTemplateTodo(el, spaceDoneElement);
          addSelectListener(el);
          break;
        default:
          console.log('Sorry');
      }
    });
  }

  if (!isEdit) {
    if (inputTitleTodoElement.value !== '' || inputDiscriptionTodoElement.value !== '') {
      // починить сравнение !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      const newId = crypto.randomUUID();
      const time = getActualTime();
      const userName = selectUserElement.selectedIndex;

      function Todo() {
        this.id = newId;
        this.text = inputDiscriptionTodoElement.value;
        this.title = inputTitleTodoElement.value;
        this.createdAt = time;
        this.userIndex = userName;
      }

      const todo = new Todo();

      actualTodos.push(todo);
      modalWindowElement.classList.toggle('window-hide');

      // spaceTodoElement.insertAdjacentHTML(
      //   'beforeend',
      //   buildTemplateTodo(
      //     newId,
      //     inputDiscriptionTodoElement.value,
      //     inputTitleTodoElement.value,
      //     time,
      //     userName
      //   )
      // );

      buildTemplateTodo(todo, spaceTodoElement);
      addSelectListener(todo);

      counterTodoElement.textContent = actualTodos.length;
      setTodos(actualTodos);
      formElement.reset();
      console.log(actualTodos);
    }
  } else {
    const currentTodo = actualTodos[dataId];
    const userName = selectUserElement.selectedIndex;

    function Todo() {
      this.id = currentTodo.id;
      this.text = inputDiscriptionTodoElement.value;
      this.title = inputTitleTodoElement.value;
      this.createdAt = currentTodo.createdAt;
      this.userIndex = userName;
    }

    actualTodos.splice(dataId, 1, new Todo());
    spaceTodoElement.innerHTML = ''; // Очистка колонки

    actualTodos.forEach(el => {
      buildTemplateTodo(el, spaceTodoElement);
      addSelectListener(el);
    });

    modalWindowElement.classList.toggle('window-hide');

    counterTodoElement.textContent = actualTodos.length;
    formElement.reset();
    setTodos(actualTodos);
    isEdit = false;
  }
};

// Делегирование событий на блок TODO task
const handleChangingTodoTask = function () {
  const buttonEditElement = event.target.closest('.todo-work__button_edit');
  const buttonDeleteElement = event.target.closest('.todo-work__button_delete');
  const buttonEnterElement = event.target.closest('.todo-work__button_enter');
  const actualTodos = getTodos();
  const idElement = event.target.closest('.todo-work')?.getAttribute('id');
  const todoIndex = actualTodos.findIndex(el => el.id == idElement);

  if (buttonEditElement) {
    // Редактирование карточки
    isEdit = true;
    dataId = todoIndex;

    inputTitleTodoElement.value = actualTodos[todoIndex].title;
    inputDiscriptionTodoElement.value = actualTodos[todoIndex].text;

    modalWindowElement.classList.toggle('window-hide');
  }

  if (buttonDeleteElement) {
    // Удаление карточки
    buttonDeleteElement.closest('.todo-work').remove();
    actualTodos.splice(todoIndex, 1);
    counterTodoElement.textContent = actualTodos.length;
  }

  // if (selectStageElement) {
  // Подтверждение карточки и перенос в следующий блок
  //   buttonEnterElement.closest('.todo-work').remove();
  //   counterTodoElement.textContent = actualTodos.length;
  //   spaceProgressElement.insertAdjacentHTML(
  //     'beforeend',
  //     buildTemplateTodo(
  //       actualTodos[todoIndex].id,
  //       actualTodos[todoIndex].text,
  //       actualTodos[todoIndex].title,
  //       actualTodos[todoIndex].createdAt,
  //       actualTodos[todoIndex].userIndex
  //     )
  //   );
  // }
  // }
};

export {handleChangingTodoTask, handleMakeTodo};
