let todos = [];

function getTodos() {
  // Возвращаем акутальный массив
  return todos;
}

function setTodos(value) {
  // Обновление массива и запись в localStorage
  todos = value;
  window.todos = todos;
  //   localStorage.setItem(todosKey, JSON.stringify(todos));
}

export {getTodos, setTodos};
