import TodoListItem from './TodoListItem';
import './TodoList.scss';

function TodoList({ todos, onRemove, onToggle }) {
  // console.log(todos)
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default TodoList;
