// Модальные окна
const modalWindowAddElement = document.querySelector('#window-add');
const modalWindowDeleteAllElement = document.querySelector('#window-delete');
const formElement = document.querySelector('.modals');

// Кнопки
const buttonAddTodoElement = document.querySelector('#add-todo');
const buttonConfirmTodoElement = document.querySelector('#add-confirm');
const buttonCancelTodoElement = document.querySelector('#cancel');
const buttonDeleteAllElement = document.querySelector('.todo-work__button_delete-all');
const buttonDeleteAllConfirmElement = document.querySelector('.button-delete-all-confirm');
const buttonDeleteAllCancelElement = document.querySelector('.button-delete-all-cancel');

// Поле ввода
const inputTitleTodoElement = document.querySelector('#todo-title');
const inputDiscriptionTodoElement = document.querySelector('#todo-discription');

// Основные блоки
const todoBlockElement = document.querySelector('#task');
const todoInProgressElement = document.querySelector('#in-progress');
const todoDoneElement = document.querySelector('#done');

// Селект на выбор пользователя
const selectUserElement = document.querySelector('#users');

// Счетчики колонок
const counterTodoElement = document.querySelector('#count-tasks');
const counterInProgressElement = document.querySelector('#count-in-progress');
const counterDoneElement = document.querySelector('#count-done');

// Рабочее пространство для заданий
const spaceTodoElement = document.querySelector('#workspace-task');
const spaceProgressElement = document.querySelector('#workspace-progress');
const spaceDoneElement = document.querySelector('#workspace-done');

// Ключ для localStorage
const todosKey = 'todos';

export {
  buttonAddTodoElement,
  modalWindowAddElement,
  buttonConfirmTodoElement,
  buttonCancelTodoElement,
  inputTitleTodoElement,
  inputDiscriptionTodoElement,
  todoBlockElement,
  todoInProgressElement,
  selectUserElement,
  formElement,
  counterTodoElement,
  spaceTodoElement,
  spaceProgressElement,
  spaceDoneElement,
  todoDoneElement,
  buttonDeleteAllElement,
  counterDoneElement,
  counterInProgressElement,
  modalWindowDeleteAllElement,
  buttonDeleteAllConfirmElement,
  buttonDeleteAllCancelElement,
  todosKey,
};
