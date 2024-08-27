let user = [];

function getTodos() {
  // Возвращаем акутальный массив
  return user;
}

function setTodos(value) {
  // Обновление массива и запись в localStorage
  user = value;
  //   localStorage.setItem(todosKey, JSON.stringify(todos));
}

export {getTodos, setTodos};
