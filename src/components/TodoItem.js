import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { BiCheckCircle } from 'react-icons/bi';

const Todo = ({ todo, completeTodo, removeTodo, importantTodo }) => {
  return (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      style={todo.important ? { background: "orange" } : {}}
    >
      {todo.text}
      <div className='iconsContainer'>
        <button onClick={() => importantTodo(todo.id)} className="important-btn">!</button>
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className='icon'
          style={{ marginRight: 5 }}
        />
        <BiCheckCircle className="icon" onClick={() => completeTodo(todo.id)}/>
      </div>
    </div>
  );
};

export default Todo;
