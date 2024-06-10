import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo.trim(), checked: false }]);
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleToggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].checked = !newTodos[index].checked;
    setTodos(newTodos);
  };

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  return (
    <div className="lg:w-2/3 w-5/6 text-center p-6 timer-list bg-cardcolor text-white rounded-lg shadow-md overflow-y-auto">
      <h1 className="text-2xl font-bold mb-4">To-do List</h1>
      <div className="mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="w-full p-2 border border-gray-600 bg-[#1A213D] text-[#f2f2f2] rounded mb-2"
          placeholder="Add a new task"
        />
        <button
          onClick={handleAddTodo}
          className="w-full py-2 bg-gradient-to-tr from-green-600 to-green-400 text-[#f2f2f2] rounded"
        >
          Add
        </button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            className="flex items-center justify-between mb-2 p-2 bg-[#222741] rounded"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={todo.checked}
                onChange={() => handleToggleTodo(index)}
                className="mr-2 custom-checkbox"
              />
              <span
                className={`mr-4 ${
                  todo.checked ? "line-through text-gray-500" : ""
                }`}
              >
                {todo.text}
              </span>
            </div>
            {hoverIndex === index && (
              <button
                onClick={() => handleDeleteTodo(index)}
                className="bg-transparent text-red-400 hover:text-red-600"
              >
                <FontAwesomeIcon icon={faTrashAlt} />
              </button>
            )}
          </li>
        ))}
      </ul>
      <style>{`
        .custom-checkbox {
          appearance: none;
          width: 1.5em;
          height: 1.5em;
          border: 2px solid #e2e8f0;
          border-radius: 0.25rem;
          background-color: #1f2937;
          cursor: pointer; /* Corrected */
          transition: background-color 0.3s ease;
        }

        .custom-checkbox:checked {
          background-color: #10b981;
          border-color: #10b981;
        }

        .custom-checkbox:checked:after {
          content: "\\2713";
          font-size: 1em;
          color: #fff;
          display: block;
          text-align: center;
        }

        .custom-checkbox:hover {
          background-color: #374151;
        }
        .timer-list {
          border: 2px rgba(19, 27, 144, 0.28) solid;
        }
      `}</style>
    </div>
  );
};

export default TodoList;
