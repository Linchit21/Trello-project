import {
  counterDoneElement,
  counterInProgressElement,
  counterTodoElement,
  selectUserElement,
  spaceDoneElement,
  spaceProgressElement,
  spaceTodoElement,
  todosKey,
} from './declaration.js';
import {getTodos, setTodos} from './store.js';

function getActualTime() {
  const date = new Date(); // Data
  const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  const seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  const createdAt = `${date.getHours()}:${minutes}:${seconds}`;
  return createdAt;
}

// Обновляемый счетчик в каждой колонке
function actualCounter() {
  const actualTodos = getTodos();
  let count1 = 0;
  let count2 = 0;
  let count3 = 0;

  counterTodoElement.textContent = 0;
  counterInProgressElement.textContent = 0;
  counterDoneElement.textContent = 0;

  actualTodos.forEach(el => {
    if (el.column == 'Todo') {
      count1 = count1 + 1;
      counterTodoElement.textContent = count1;
    } else if (el.column == 'In progress') {
      count2 = count2 + 1;
      counterInProgressElement.textContent = count2;
    } else if (el.column == 'Done') {
      count3 = count3 + 1;
      counterDoneElement.textContent = count3;
    }
  });
}

const buildTemplateTodo = (todo, columnElement) => {
  const {id, selectId, text, title, createdAt, userIndex} = todo;
  columnElement.insertAdjacentHTML(
    'afterbegin',
    `<div class="todo-work" id="${id}">
        <div class="todo-work__title">
          <p>Title:</p>
          <p>${title}</p>
        </div>
        <div class="todo-work__discription">
          <p>Discription:</p>
          <p>${text}</p>
        </div>
        <div class="todo-work__user">
          <p>User:</p>
          <p>${userIndex}</p>
        </div>
         <div class="todo-work__time">
          <p>Time:</p>
          <p>${createdAt}</p>
        </div>
        <div class="todo-work__buttons">
          <button type="button" class="btn btn-primary todo-work__button_edit btn-sm">EDIT</button>
          <select class="form-select-sm" name="" id="${selectId}">
            <option value="Todo">Todo</option>
            <option value="In progress">In progress</option>
            <option value="Done">Done</option>
          </select>          
          <button type="button" class="btn btn-danger todo-work__button_delete btn-sm">
            DELETE
          </button>
        </div>
    </div>`
  );
};

// Поиск нужного индекса в массиве, удаление из массива и сохранение
function deleteTodo(id) {
  const actualTodos = getTodos();
  const indexTodo = actualTodos.findIndex(el => el.id == id);
  actualTodos.splice(indexTodo, 1);
  setTodos(actualTodos);
}

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

// Ререндер заданий с помощью селекта
function addSelectListener(el, selectValue = 'Todo') {
  const todoElement = document.getElementById(el.id);
  const selectStageElement = document.getElementById(el.selectId);
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

function renderTodos() {
  // отрисовка todo из localStorage
  const actualTodos = JSON.parse(localStorage.getItem(todosKey) || '[]');

  actualTodos.forEach(el => {
    if (el.column == 'Done') {
      buildTemplateTodo(el, spaceDoneElement);
      addSelectListener(el, 'Done');
      actualCounter();
    } else if (el.column == 'In progress') {
      buildTemplateTodo(el, spaceProgressElement);
      addSelectListener(el, 'In progress');
      actualCounter();
    } else if (el.column == 'Todo') {
      buildTemplateTodo(el, spaceTodoElement);
      addSelectListener(el, 'Todo');
      actualCounter();
    }
  });
  setTodos(actualTodos);
}

export {
  buildTemplateTodo,
  getActualTime,
  actualCounter,
  deleteTodo,
  findTodo,
  editTodo,
  addSelectListener,
  renderTodos,
};
