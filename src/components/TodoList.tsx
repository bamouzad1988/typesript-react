// css
import "./todoList.css";
// interface
interface TodoListProps {
  items: { id: string; text: string }[];
  todoDeleteHandler: (todoId: string) => void;
}

function TodoList(props: TodoListProps) {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>
          <span>{item.text}</span>
          <button onClick={props.todoDeleteHandler.bind(null, item.id)}>
            DeLETE
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
