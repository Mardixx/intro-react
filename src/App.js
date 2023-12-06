import { React } from "react";
import { ToDos } from "./Todos/todos";
import "./App.css"

function App() {
  return (
    <div className="App-div">
      <h1>My Todo App</h1>
      <ToDos />
    </div>
    
  );
}

export default App;
