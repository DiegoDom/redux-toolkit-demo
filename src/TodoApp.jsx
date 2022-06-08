import { useState } from 'react';
import { Loader } from './components/Loader';
import { useGetTodoQuery, useGetTodosQuery } from './store/apis';

export const TodoApp = () => {
  /* const { data: todos = [], isLoading } = useGetTodosQuery(); */

  const [todoID, setTodoID] = useState(1);
  const { data: todo, isLoading } = useGetTodoQuery(todoID);

  const nextTodo = () => {
    setTodoID(todoID + 1);
  };

  const prevTodo = () => {
    if (todoID === 1) return;
    setTodoID(todoID - 1);
  };

  return (
    <div className="todoapp__contenedor">
      <h1>ToDo's - RTK Query</h1>
      <hr />
      <pre>{JSON.stringify(todo, null, 2)}</pre>
      <button className="btn mr-3 mb-3" onClick={prevTodo}>
        Prev ToDo
      </button>
      <button className="btn mb-3" onClick={nextTodo}>
        Next ToDo
      </button>
      {/* <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}(
            <strong>{todo.completed ? 'COMPLETED' : 'PENDING'}</strong>)
          </li>
        ))}
      </ul> */}
      {isLoading && <Loader />}
    </div>
  );
};
