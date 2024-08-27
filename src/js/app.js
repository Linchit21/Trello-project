import {
  buttonAddTodoElement,
  buttonCancelTodoElement,
  buttonConfirmTodoElement,
  formElement,
  modalWindowElement,
  todoBlockElement,
} from './declaration.js';
import {handleChangingTodoTask, handleMakeTodo} from './handlers.js';

// Модальное окно вкл и выкл, кнопка add
buttonAddTodoElement.addEventListener('click', function () {
  modalWindowElement.classList.toggle('window-hide');
});

// Спрятать модальное окно и сделать ресет формы, кнопка cancel в модалке
buttonCancelTodoElement.addEventListener('click', function () {
  modalWindowElement.classList.toggle('window-hide');
  formElement.reset();
});

// Подтверждение и рендеринг TODO, кнопка confirm
buttonConfirmTodoElement.addEventListener('click', handleMakeTodo);

// Делегирование на блок TODO Task, кнопки: Edit, Delete, Enter
todoBlockElement.addEventListener('click', handleChangingTodoTask);
