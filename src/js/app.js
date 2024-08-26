const addTodoElement = document.querySelector('#add-todo');
const modalWindowElement = document.querySelector('#window');
const confirmTodoElement = document.querySelector('#add-confirm');
const inputTitleTodoElement = document.querySelector('#todo-title');
const inputDiscriptionTodoElement = document.querySelector('#todo-discription');
const todoBlockElement = document.querySelector('#task');
const selectUserElement = document.querySelector('#users');

const user = [];

function getActualTime() {
  const date = new Date(); // Data
  const createdAt = `${date.getFullYear()}.${
    date.getMonth() + 1
  }.${date.getDate()}  ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  return createdAt;
}

const buildTemplate = (id, text, title, time, userName) => {
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

addTodoElement.addEventListener('click', function () {
  modalWindowElement.classList.toggle('window-hide');
});

confirmTodoElement.addEventListener('click', function () {
  if (inputTitleTodoElement !== '' || inputDiscriptionTodoElement !== '') {
    // починить сравнение
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

    user.push(new Todo());
    modalWindowElement.classList.toggle('window-hide');
    console.log(user);

    todoBlockElement.insertAdjacentHTML(
      'beforeend',
      buildTemplate(
        newId,
        inputDiscriptionTodoElement.value,
        inputTitleTodoElement.value,
        time,
        userName
      )
    );
  }
});
