import React, { useState } from "react";

const TodoInput = ({ handleAddTodos, todoValue, setTodoValue }) => {
  return (
    <header>
      <input
        placeholder="Enter todo..."
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          if (todoValue.length === 0) {
            alert("fill the input before add");
          } else {
            handleAddTodos(todoValue);
            setTodoValue("");
          }
        }}
      >
        Add
      </button>
    </header>
  );
};

export default TodoInput;
