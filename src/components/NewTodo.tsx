import React, { useRef } from "react";
// style
import "./newTodo.css";
// type
type NewTodoProps = {
  todoAddHandler: (enteredText: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const textinputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textinputRef.current?.value;
    enteredText?.trim() && props.todoAddHandler(enteredText);
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="todo-ext">Todo Text</label>
        <input type="text" id="todo-text" ref={textinputRef} />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
};

export default NewTodo;
