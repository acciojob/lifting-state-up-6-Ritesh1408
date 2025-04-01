import React from "react";

function TodoList({ todos, handleComplete }) {
  return (
    <div>
      <h2>Child Component</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} id={todo.id}>
            <p>{todo.task}</p>
            {!todo.completed && (
              <button onClick={() => handleComplete(todo.id)}>Mark Complete</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
