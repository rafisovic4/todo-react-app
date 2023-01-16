import { useState, useEffect } from "react";

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  
  return `${day}.${month}.${year}`;
}

const App = () => {
  //Состояние (данные) задач
  const [todos, setTodos] = useState([
    {
      id: 1,
      name: "Купить продукты",
      date: new Date(),
      checked: false
    },
    {
      id: 2,
      name: "Заправить гранту",
      date: new Date(),
      checked: false
    },
  ]);

  const [value, setValue] = useState('');

  //Функция обновления значения из поля
  const onChangeHandle = (event) => {
    setValue(event.target.value);
  }

  //Функция добавления задачи
  const onSubmitHandle = (event) => {
    event.preventDefault();

    setTodos((prevState) => {
      prevState = [...prevState];
      
      prevState.push({
        id: Date.now(),
        name: value, 
        date: new Date(),
        checked: false
      });

      return prevState;
    });

    setValue('');
  } 

  const onCheckedToggle = (id) => {
    setTodos((prevState) => {
      prevState = [...prevState];

      prevState = prevState.map((todo) => {
        if(todo.id === id) {
          return {
            ...todo,
            checked: !todo.checked
          }
        }

        return todo;
      });

      return prevState; 
    });
  }
  //Функция удаления todo из массива по ID
  const onDeleteTodoById = (id) => {
    setTodos((prevState) => {
      prevState = [...prevState];

      //.filter()

      prevState = prevState.filter((todo) => todo.id !== id);

      return prevState;
    })
  }

  return (
    <div className="todo">
      <div className="todo_header">
        <form onSubmit={(e) => onSubmitHandle(e)} className="todo_form">
          <h2 className="todo_h2">Добавить задачу</h2>
          <input className="todo_input" type="text" placeholder="Купить молоко..." onChange={(e) => onChangeHandle(e)} value={value}/>
        </form>
      </div>
      {/* (//Все задачи */}
      <div className="todo_bottom">
        {/* (//Одна задача) */}
        {todos.map((todo) => {
          return (
            <div className="todo_one_elem">
              <h3 className="todo_h3">{todo.name} ({formatDate(todo.date)})</h3>
              <div className="todo_button">
                <button className="button_accept" onClick={() => onCheckedToggle(todo.id)}>
                  {
                    todo.checked ? "Не выполнена" : "Выполнена"
                  }
                </button>
                <button className="button_delete" onClick={() => onDeleteTodoById(todo.id)}>Удалить</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
