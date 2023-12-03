import { React } from "react";
import { Input } from "./Input/input";
import { Submit } from "./Submit/submit";
import { ToDos } from "./Todos/todos";
import "./Submit/submit.css";
import "./App.css"

function App() {
  return (
    <div className="App-div">
      <h1>My Todo App</h1>
      <Input />
      <Submit />
      <ToDos />
    </div>
    
  );
}

export default App;
