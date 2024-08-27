import {selectUserElement} from './declaration.js';

function getActualTime() {
  const date = new Date(); // Data
  const createdAt = `${date.getFullYear()}.${
    date.getMonth() + 1
  }.${date.getDate()}  ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  return createdAt;
}

const buildTemplateTodo = (id, text, title, time, userName) => {
  return `
        <div class="todo-work todo-work_success" id="${id}">
            <div class="todo-work__title">
                <p class="todo-work__text">${title}</p>
                <button type="button" class="btn btn-primary todo-work__button_edit btn-sm">
                  EDIT
                </button>
                <button type="button" class="btn btn-primary todo-work__button_delete btn-sm">
                  DELETE
                </button>
              </div>
              <div class="todo-work__discription">
                <p>${text}</p>
                <button
                  type="button"
                  class="btn btn-primary btn-sm todo-work__button_enter"
                >
                  =>
                </button>
              </div>
              <div class="todo-work__user">
                <p>${selectUserElement.options[userName].value}</p>
                <p>${time}</p>
            </div>
        </div>
      `;
};

const buildTemplateProgress = (id, text, title, time, userName) => {
  return `
<div class="todo-work todo-work_success" id="${id}">
    <div class="todo-work__title">
        <p class="todo-work__text">${title}</p>
        <button type="button" class="btn btn-primary todo-work__button_back btn-sm">
            BACK
        </button>
        <button type="button" class="btn btn-primary todo-work__button_complete btn-sm">
            COMPLETE
        </button>
    </div>
    <div class="todo-work__discription">
        <p>${text}</p>
        <button
            type="button"
            class="btn btn-primary todo-work__button_delete btn-sm todo-work__button_enter"
            >
            =>
        </button>
    </div>
    <div class="todo-work__user">
        <p>${selectUserElement.options[userName].value}</p>
        <p>${time}</p>
    </div>
</div>
        `;
};

export {buildTemplateProgress, buildTemplateTodo, getActualTime};
