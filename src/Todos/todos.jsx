import React, { useState, useEffect } from "react";
import { Form } from "../Form/form.jsx"

const LSKEY = "Added";

export const ToDos = () => {
    const initialTodos = ["Learn at BeCode", "Be Important!", "Be cool stay safe!"];
    const [todos, setTodos] = useState(
        JSON.parse(window.localStorage.getItem(LSKEY + ".todos")) || initialTodos
    );
    function addingTodo(inputIn) {
        const newTodos = [...todos];
        newTodos.push(inputIn);
        setTodos(newTodos);
        
    }
    useEffect(() => {
        window.localStorage.setItem(LSKEY + ".todos", JSON.stringify(todos));
    }, [todos]);
    


    
    return(
        <>
        <div className="form-div">
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