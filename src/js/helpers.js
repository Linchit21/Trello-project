import {selectUserElement} from './declaration.js';

function getActualTime() {
  const date = new Date(); // Data
  const createdAt = `${date.getHours()}:${date.getMinutes()}
  ${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}  `;
  return createdAt;
}

const buildTemplateTodo = (todo, columnElement) => {
  const {id, text, title, createdAt, userIndex} = todo;
  columnElement.insertAdjacentHTML(
    'beforeend',
    `<div class="todo-work" id="${id}">
        <p class="todo-work__title">Title: ${title}</p>
        <p class="todo-work__discription">Discription: ${text}</p>
        <p>${selectUserElement.options[userIndex].value}</p>
        <p>${createdAt}</p>
        <div class="todo-work__buttons">
          <button type="button" class="btn btn-primary todo-work__button_edit btn-sm">EDIT</button>
          <button type="button" class="btn btn-primary btn-sm todo-work__button_enter">
            <select name="" id="select-todo">
              <option value="Todo">Todo</option>
              <option value="In progress">In progress</option>
              <option value="Done">Done</option>
            </select>
          </button>
          <button type="button" class="btn btn-primary todo-work__button_delete btn-sm">
            DELETE
          </button>
        </div>
    </div>`
  );
};

export {buildTemplateTodo, getActualTime};
