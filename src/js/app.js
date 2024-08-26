const buttonAddTodoElement = document.querySelector('#add-todo');
const modalWindowElement = document.querySelector('#window');
const buttonConfirmTodoElement = document.querySelector('#add-confirm');
const buttonCancelTodoElement = document.querySelector('#cancel');
const inputTitleTodoElement = document.querySelector('#todo-title');
const inputDiscriptionTodoElement = document.querySelector('#todo-discription');
const todoBlockElement = document.querySelector('#task');
const inProgressElement = document.querySelector('#in-progress');
const selectUserElement = document.querySelector('#users');
const formElement = document.querySelector('.modals');
const counterTodoElement = document.querySelector('.todo-header__number');

let isEdit = false;
let dataId;

let user = [];

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
buttonAddTodoElement.addEventListener('click', function () {
  // Окно вкл и выкл
  modalWindowElement.classList.toggle('window-hide');
});

const handleMakeTodo = function () {
  // Подтверждение TODO и отрисовка
  if (!isEdit) {
    if (inputTitleTodoElement.value !== '' || inputDiscriptionTodoElement.value !== '') {
      // починить сравнение !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
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
        buildTemplateTodo(
          newId,
          inputDiscriptionTodoElement.value,
          inputTitleTodoElement.value,
          time,
          userName
        )
      );
      counterTodoElement.textContent = user.length;
      formElement.reset();
    }
  } else {
    const currentTodo = user[dataId];
    const userName = selectUserElement.selectedIndex;

    function Todo() {
      this.id = currentTodo.id;
      this.text = inputDiscriptionTodoElement.value;
      this.title = inputTitleTodoElement.value;
      this.createdAt = currentTodo.createdAt;
      this.userIndex = userName;
    }

    user.splice(dataId, 1, new Todo());
    todoBlockElement.innerHTML = ''; // Очистка колонки

    user.forEach(el => {
      // Ререндер
      todoBlockElement.insertAdjacentHTML(
        'beforeend',
        buildTemplateTodo(el.id, el.text, el.title, el.createdAt, el.userIndex)
      );
    });

    modalWindowElement.classList.toggle('window-hide');

    counterTodoElement.textContent = user.length;
    formElement.reset();
    isEdit = false;
  }
};

buttonConfirmTodoElement.addEventListener('click', handleMakeTodo);

buttonCancelTodoElement.addEventListener('click', function () {
  modalWindowElement.classList.toggle('window-hide');
  formElement.reset();
});

todoBlockElement.addEventListener('click', function () {
  const buttonEditElement = event.target.closest('.todo-work__button_edit');
  const buttonDeleteElement = event.target.closest('.todo-work__button_delete');
  const buttonEnterElement = event.target.closest('.todo-work__button_enter');
  const idElement = event.target.closest('.todo-work')?.getAttribute('id');
  const todoIndex = user.findIndex(el => el.id == idElement);

  if (buttonEditElement) {
    // перезапись карточки!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    isEdit = true;
    dataId = todoIndex;

    inputTitleTodoElement.value = user[todoIndex].title;
    inputDiscriptionTodoElement.value = user[todoIndex].text;

    modalWindowElement.classList.toggle('window-hide');
  }

  if (buttonDeleteElement) {
    // удаление карточки
    buttonDeleteElement.closest('.todo-work').remove();
    user.splice(todoIndex, 1);
    counterTodoElement.textContent = user.length;
  }

  if (buttonEnterElement) {
    // Подтверждение карточки и перенос в следующий блок

    buttonEnterElement.closest('.todo-work').remove();
    counterTodoElement.textContent = user.length;

    inProgressElement.insertAdjacentHTML(
      'beforeend',
      buildTemplateProgress(
        user[todoIndex].id,
        user[todoIndex].text,
        user[todoIndex].title,
        user[todoIndex].createdAt,
        user[todoIndex].userIndex
      )
    );
  }
});

{
  /* <div class="todo-work todo-work_success">
    <div class="todo-work__title">
        <p class="todo-work__text">Title</p>
        <button type="button" class="btn btn-primary todo-work__button_back btn-sm">
            BACK
        </button>
        <button type="button" class="btn btn-primary todo-work__button_complete btn-sm">
            COMPLETE
        </button>
    </div>
    <div class="todo-work__discription">
        <p>Discription</p>
        <button
            type="button"
            class="btn btn-primary todo-work__button_delete btn-sm todo-work__button_enter"
            >
            =>
        </button>
    </div>
    <div class="todo-work__user">
        <p>User</p>
        <p>Time</p>
    </div>
</div> */
}
