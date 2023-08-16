import React, { useState } from "react";
import "./ToDoList.css";

function App() {
  const [inputText, setInputText] = useState();

  const [items, setItems] = useState([]);

  function handleChange(event) {
    setInputText(event.target.value);
  }

  function handleClick() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  return (
    <div className="list-container">
      <div className="head-list">
        <h1>To-Do List</h1>
      </div>
      <div className="form-list">
        <input
          type="text"
          placeholder="Add Task"
          name="inputText"
          value={inputText}
          onChange={handleChange}
        />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItems) => (
            <li>{todoItems}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
