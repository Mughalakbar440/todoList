import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todoValue, setTodoValue] = useState("");
  const [todos, setTodos] = useState([]);

  function persistData(newList) {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  }

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
    persistData(newTodoList);
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    setTodos(newTodoList);
    persistData(newTodoList);
  }

  function handleEditTodo(index) {
    const valueToboEdited = todos[index];
    setTodoValue(valueToboEdited);
    handleDeleteTodo(index);
  }

  useEffect(() => {
    if (!localStorage) {
      return;
    }
    let localTodos = localStorage.getItem("todos");
    if (!localTodos) {
      return;
    }
    console.log(localTodos);
    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, []);

  return (
    <>
      <>
        <TodoInput
          handleAddTodos={handleAddTodos}
          todoValue={todoValue}
          setTodoValue={setTodoValue}
        />
        {!todos.length == 0 ? (
          <TodoList
            handleDeleteTodo={handleDeleteTodo}
            handleEditTodo={handleEditTodo}
            todos={todos}
          />
        ) : (
          <p className="todoItem">No data found in Todo List</p>
        )}
      </>
    </>
  );
}

export default App;
