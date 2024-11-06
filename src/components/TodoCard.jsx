import React from "react";

const TodoCard = ({ children, handleDeleteTodo, handleEditTodo, index }) => {
  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <i
          className="fa-regular fa-pen-to-square"
          onClick={() => {
            handleEditTodo(index);
          }}
        ></i>
        <i
          className="fa-regular fa-trash-can"
          onClick={() => {
            handleDeleteTodo(index);
          }}
        ></i>
      </div>
    </li>
  );
};

export default TodoCard;
