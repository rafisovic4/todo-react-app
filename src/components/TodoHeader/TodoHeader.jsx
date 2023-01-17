import { useState } from "react";

const TodoHeader = ({ setTodos }) => {


  const [value, setValue] = useState("");

  //Функция обновления значения из поля
  const onChangeHandle = (event) => {
    setValue(event.target.value);
  };

  //Функция добавления задачи
  const onSubmitHandle = (event) => {
    event.preventDefault();

    setTodos((prevState) => {
      prevState = [...prevState];

      prevState.push({
        id: Date.now(),
        name: value,
        date: new Date(),
        checked: false,
      });

      return prevState;
    });

    setValue("");
  };

  return (
    <div className="todo_header">
      <form onSubmit={(e) => onSubmitHandle(e)} className="todo_form">
        <h2 className="todo_h2">Добавить задачу</h2>
        <input
          className="todo_input"
          type="text"
          placeholder="Купить молоко..."
          onChange={(e) => onChangeHandle(e)}
          value={value}
        />
      </form>
    </div>
  );
};

export default TodoHeader;
