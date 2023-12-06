import React, { useRef } from "react"
import "./form.css"

export const Form = ({ addingTodo }) => {

    const inputRef = useRef();
    
    function clickHandler() {
        const inputElement = inputRef.current;
        const newTask = inputElement.value;
        addingTodo(newTask);
        inputElement.value = "";
    }
    return(
            <form className="form-div">
                <div className="input">
                    <input className="input-text" type="text" placeholder="Add new task to ToDo List" ref={inputRef} />
                </div>
                <div className="submit-div">
                    <input className="submit-btn" type="button" value="Add task" onClick={clickHandler} />
                </div>
            </form>
    )
}