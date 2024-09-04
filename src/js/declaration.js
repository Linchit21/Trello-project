const modalWindowAddElement = document.querySelector('#window-add');
const modalWindowDeleteAllElement = document.querySelector('#window-delete');

const buttonAddTodoElement = document.querySelector('#add-todo');
const buttonConfirmTodoElement = document.querySelector('#add-confirm');
const buttonCancelTodoElement = document.querySelector('#cancel');
const buttonDeleteAllElement = document.querySelector('.todo-work__button_delete-all');
const buttonDeleteAllConfirmElement = document.querySelector('.button-delete-all-confirm');
const buttonDeleteAllCancelElement = document.querySelector('.button-delete-all-cancel');

const inputTitleTodoElement = document.querySelector('#todo-title');
const inputDiscriptionTodoElement = document.querySelector('#todo-discription');

const todoBlockElement = document.querySelector('#task');
const todoInProgressElement = document.querySelector('#in-progress');
const todoDoneElement = document.querySelector('#done');

const selectUserElement = document.querySelector('#users');
const formElement = document.querySelector('.modals');

const counterTodoElement = document.querySelector('#count-tasks');
const counterInProgressElement = document.querySelector('#count-in-progress');
const counterDoneElement = document.querySelector('#count-done');

const spaceTodoElement = document.querySelector('#workspace-task');
const spaceProgressElement = document.querySelector('#workspace-progress');
const spaceDoneElement = document.querySelector('#workspace-done');

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
};
