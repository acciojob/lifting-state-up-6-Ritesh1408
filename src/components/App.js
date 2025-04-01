import React, { useState } from "react"; // Import useState
import "./../styles/App.css";
import TodoList from "./TodoList";

const App = () => {
  const initialTodos = [
    { id: "1", task: "Learn React", completed: false },
    { id: "2", task: "Build a React App", completed: false },
    { id: "3", task: "Deploy a React App", completed: false },
  ];

  const [todos, setTodos] = useState(initialTodos);

  function handleComplete(id) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      )
    );
  }

  return (
    <div>
      {/* Do not remove the main div */}
      <h1>Parent Component</h1>
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
};

export default App;
