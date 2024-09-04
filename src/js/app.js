import {
  buttonAddTodoElement,
  buttonCancelTodoElement,
  buttonConfirmTodoElement,
  buttonDeleteAllCancelElement,
  buttonDeleteAllConfirmElement,
  buttonDeleteAllElement,
  counterInProgressElement,
  formElement,
  modalWindowAddElement,
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
} from './handlers.js';

// Модальное окно вкл и выкл, кнопка add
buttonAddTodoElement.addEventListener('click', function () {
  if (counterInProgressElement.textContent != 2) {
    modalWindowAddElement.classList.toggle('window-hide');
  } else {
    alert('Превышенно максимальное количество дел!!!!!!');
  }
});

// Спрятать модальное окно и сделать ресет формы, кнопка cancel в модалке
buttonCancelTodoElement.addEventListener('click', function () {
  modalWindowAddElement.classList.toggle('window-hide');
  formElement.reset();
});

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
buttonDeleteAllCancelElement.addEventListener('click', function () {
  modalWindowDeleteAllElement.classList.toggle('window-hide');
});

buttonDeleteAllConfirmElement.addEventListener('click', handleDeleteAllTask);

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
