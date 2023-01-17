import formatDate from "../../utils/formatDate";

const TodoItem = ({ setTodos, todo }) => {
  const onCheckedToggle = (id) => {
    setTodos((prevState) => {
      prevState = [...prevState];

      prevState = prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            checked: !todo.checked,
          };
        }

        return todo;
      });

      return prevState;
    });
  };
  //Функция удаления todo из массива по ID
  const onDeleteTodoById = (id) => {
    setTodos((prevState) => {
      prevState = [...prevState];

      //.filter()

      prevState = prevState.filter((todo) => todo.id !== id);

      return prevState;
    });
  };

  return (
    <div className="todo_one_elem">
      <h3 className="todo_h3">
        {todo.name} ({formatDate(todo.date)})
      </h3>
      <div className="todo_button">
        <button
          className="button_accept"
          onClick={() => onCheckedToggle(todo.id)}
        >
          {todo.checked ? "Не выполнена" : "Выполнена"}
        </button>
        <button
          className="button_delete"
          onClick={() => onDeleteTodoById(todo.id)}
        >
          Удалить
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
