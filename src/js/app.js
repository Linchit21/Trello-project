import {
  buttonAddTodoElement,
  buttonCancelTodoElement,
  buttonConfirmTodoElement,
  buttonDeleteAllCancelElement,
  buttonDeleteAllConfirmElement,
  buttonDeleteAllElement,
  buttonWarningOkElement,
  modalWindowDeleteAllElement,
  todoBlockElement,
  todoDoneElement,
  todoInProgressElement,
} from './declaration.js';

import {
  handleChangingTodoTask,
  handleCallModalDelete,
  handleMakeTodo,
  handleDeleteAllTask,
  handleCancelModalAdd,
  handleAddNewTask,
  handleHideWarningWindow,
} from './handlers.js';

import {actualCounter, renderTodos} from './helpers.js';

// Модальное окно вкл и выкл, кнопка (иконка плюса)
buttonAddTodoElement.addEventListener('click', handleAddNewTask);

// Спрятать модальное окно и сделать ресет формы, кнопка cancel в модалке
buttonCancelTodoElement.addEventListener('click', handleCancelModalAdd);

// Подтверждение и рендеринг TODO, кнопка confirm
buttonConfirmTodoElement.addEventListener('click', handleMakeTodo);

// Делегирование на блок TODO Task, кнопки: Edit, Delete, Select
todoBlockElement.addEventListener('click', handleChangingTodoTask);

// Делегирование на блок In progress, кнопки: Edit, Delete, Select
todoInProgressElement.addEventListener('click', handleChangingTodoTask);

// Делегирование на блок In progress, кнопки: Edit, Delete, Select
todoDoneElement.addEventListener('click', handleChangingTodoTask);

// Вызов модальное окна на удаление
buttonDeleteAllElement.addEventListener('click', handleCallModalDelete);

// Отмена удаление дел
buttonDeleteAllCancelElement.addEventListener('click', handleCallModalDelete);

// Подтверждение удаления всех дел
buttonDeleteAllConfirmElement.addEventListener('click', handleDeleteAllTask);

// Подтверждение на модальное окно, лимит
buttonWarningOkElement.addEventListener('click', handleHideWarningWindow);

renderTodos();
actualCounter();
window.onload = function () {
  setInterval(function () {
    // Seconds
    var seconds = new Date().getSeconds();
    document.getElementById('seconds').innerHTML = (seconds < 10 ? '0' : '') + seconds;

    // Minutes
    var minutes = new Date().getMinutes();
    document.getElementById('minutes').innerHTML = (minutes < 10 ? '0' : '') + minutes;

    // Hours
    var hours = new Date().getHours();
    document.getElementById('hours').innerHTML = (hours < 10 ? '0' : '') + hours;
  }, 1000);
};
