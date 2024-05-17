import React, { useState } from "react";

const TodoList = () => {

    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    const handleAddTodo = () => {
        if (newTodo.trim() !== "") {
            setTodos([...todos, {text: newTodo.trim(), checked: false}]);
            setNewTodo("");
        }
    };

    const handleDeleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    const handleToggleTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].checked = !newTodos[index].checked;
        setTodos(newTodos);
    }
    return (
        <div>
            <h1>
                To-do List
            </h1>
            <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)}></input>
            <button onClick={handleAddTodo} style={{backgroundColor: "lightgreen"}}>Add</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index} style={{display:"flex"}}>
                        <div style={{display: "flex", alignItems: "center"}}>
                            <input type="checkbox" checked={todo.checked} onChange={() => handleToggleTodo(index)}></input>
                            <span style={{marginRight: "10px", textDecoration: todo.checked ? "line-through" : "none"}}>
                                {todo.text}
                            </span>
                            <button onClick={() => handleDeleteTodo(index)} style={{backgroundColor: "lightblue"}}>
                                Delete
                            </button>
                        </div>
                        
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;