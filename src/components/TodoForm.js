import React, { useState } from "react";

function TodoForm({onSubmit}) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        placeholder="Add a todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        name="text"
        className="todo-input"
      />
      <button type="submit" className="todo-button">
        Add todo
      </button>
    </form>
  );
}

export default TodoForm;
