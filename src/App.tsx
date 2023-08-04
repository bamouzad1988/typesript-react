import React, { useState } from "react";
// interFace
import { Todo } from "./todo.module";
// components
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";

const App: React.FC<{}> = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    // prevTodos=> this garantee last update of state will recive
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text },
    ]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== todoId));
  };

  return (
    <div className="App">
      <NewTodo todoAddHandler={todoAddHandler} />
      <TodoList items={todos} todoDeleteHandler={todoDeleteHandler} />
    </div>
  );
};

export default App;
