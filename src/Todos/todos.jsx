import { useState } from "react";

export const ToDos = () => {
    const initialTodos = ["Learn at BeCode", "Be Important!"];
    const [todos, setTodos] = useState(initialTodos);
    return(
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
    )
}