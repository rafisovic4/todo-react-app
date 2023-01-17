import { useState, useEffect } from "react";
import TodoHeader from "./components/TodoHeader/TodoHeader";
import TodoItem from "./components/TodoItem/TodoItem";


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


  return (
    <div className="todo">
      <TodoHeader setTodos={setTodos}/>
      <div className="todo_bottom">
        {todos.map((todo) => <TodoItem setTodos={setTodos} todo={todo}/>)}
      </div>
    </div>
  );
};

export default App;
