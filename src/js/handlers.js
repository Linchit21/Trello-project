import {
  formElement,
  inputDiscriptionTodoElement,
  inputTitleTodoElement,
  modalWindowAddElement,
  selectUserElement,
  spaceTodoElement,
  spaceProgressElement,
  spaceDoneElement,
  modalWindowDeleteAllElement,
  counterInProgressElement,
} from './declaration.js';

import {
  actualCounter,
  addSelectListener,
  buildTemplateTodo,
  deleteTodo,
  editTodo,
  findTodo,
  getActualTime,
} from './helpers.js';
import {getTodos, setTodos} from './store.js';

let isEdit = false;
let todoEditId;

// Добавление задания кнопка плюс
function handleAddNewTask() {
  if (counterInProgressElement.textContent != 2) {
    modalWindowAddElement.classList.toggle('window-hide');
  } else {
    alert('Превышенно максимальное количество дел!!!!!!');
  }
}

// Кнопка отмены в модальном окне на добавление дел
function handleCancelModalAdd() {
  modalWindowAddElement.classList.toggle('window-hide');
  formElement.reset();
}

// Подтверждение TODO и отрисовка
const handleMakeTodo = function () {
  const actualTodos = getTodos();
  const userName = selectUserElement.selectedIndex;

  if (!isEdit) {
    if (inputTitleTodoElement.value !== '' || inputDiscriptionTodoElement.value !== '') {
      const idTask = crypto.randomUUID();
      const idSelect = crypto.randomUUID();
      const time = getActualTime();

      function Todo() {
        this.id = idTask;
        this.selectId = idSelect;
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
      userIndex: userName,
    });

    spaceTodoElement.innerHTML = ''; // Очистка колонки

    actualTodos.forEach(el => {
      if (el.column == 'Todo') {
        buildTemplateTodo(el, spaceTodoElement);
        addSelectListener(el);
      }
    });

    modalWindowAddElement.classList.toggle('window-hide');

    formElement.reset();
    isEdit = false;
  } else if (findTodo(todoEditId).column == 'In progress') {
    console.log('In progress');

    editTodo(todoEditId, {
      text: inputDiscriptionTodoElement.value,
      title: inputTitleTodoElement.value,
      userIndex: userName,
    });

    spaceProgressElement.innerHTML = ''; // Очистка колонки

    actualTodos.forEach(el => {
      if (el.column == 'In progress') {
        buildTemplateTodo(el, spaceProgressElement);
        addSelectListener(el, 'In progress');
      }
    });

    modalWindowAddElement.classList.toggle('window-hide');

    formElement.reset();
    isEdit = false;
  } else if (findTodo(todoEditId).column == 'Done') {
    console.log('Done');

    editTodo(todoEditId, {
      text: inputDiscriptionTodoElement.value,
      title: inputTitleTodoElement.value,
      userIndex: userName,
    });

    spaceDoneElement.innerHTML = ''; // Очистка колонки

    actualTodos.forEach(el => {
      if (el.column == 'Done') {
        buildTemplateTodo(el, spaceDoneElement);
        addSelectListener(el, 'Done');
      }
    });

    modalWindowAddElement.classList.toggle('window-hide');

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

export {
  handleChangingTodoTask,
  handleMakeTodo,
  handleCallModalDelete,
  handleDeleteAllTask,
  handleAddNewTask,
  handleCancelModalAdd,
};
