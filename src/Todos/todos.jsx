import React, { useState } from "react";
import { Form } from "../Form/form.jsx"

export const ToDos = () => {
    const initialTodos = ["Learn at BeCode", "Be Important!", "Be cool stay safe!"];
    const [todos, setTodos] = useState(initialTodos);
    function addingTodo(inputIn) {
        const newTodos = [...todos];
        newTodos.push(inputIn);
        setTodos(newTodos);
    }
    return(
        <>
        <div>
            <Form addingTodo={addingTodo} />
        </div>
        <div className="view-tasks">
                <h2>ToDos</h2>
                <ul className="tasks">
                    {todos.map((todo) => (
                        <li className="task" key={todo}>
                            <input type="checkbox" /> {todo}
                        </li>
                    ))}
                </ul>
            </div>
        </> 
    )
}