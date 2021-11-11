import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    let id = 1;
    if (todos.length > 0) {
      id = todos[0].id + 1;
    }
    let todo = { id: id, text: text, completed: false };
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  
  const importantTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if(todo.id === id) {
        todo.important = !todo.important
      }
      return todo
    })

    updatedTodos = updatedTodos.sort((a, b) => b.important - a.important)

    setTodos(updatedTodos)
  }

  return (
    <>
      <h1>Todo List</h1>
      <TodoForm onSubmit={addTodo} />
      <hr className="seperator" />
      {todos.map((todo) => {
        return (
          <TodoItem
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            importantTodo={importantTodo}
          />
        );
      })}
    </>
  );
}

export default TodoList;
