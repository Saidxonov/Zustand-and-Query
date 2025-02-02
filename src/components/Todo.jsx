import React, { useState } from "react";
import useTodoStore from "../store/useTodoStore";

const TodoList = () => {
  const { todos, addTodo, removeTodo, toggleTodo } = useTodoStore();
  const [text, setText] = useState("");

  const handleAddTodo = () => {
    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  };

  return (
    <div className="p-5 cont w-[500px]  bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold mb-4 text-center ">Todo List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="focus:outline-0 flex-1 cursor-none p-2 border rounded-l"
          placeholder="Todo kiriting..."
        />
        <button
          onClick={handleAddTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded-r"
        >
          Qo‘shish
        </button>
      </div>

      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center p-2 border-b"
          >
            <span
              onClick={() => toggleTodo(todo.id)}
              className={`truncate ${
                todo.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {todo.text}
            </span>
            <button
              onClick={() => removeTodo(todo.id)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              O‘chirish
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
