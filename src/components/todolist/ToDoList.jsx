import React, { useState } from "react";
import List from "./List";
import Input from "./Input";
import "./ToDoList.css";

function App() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="list-container">
      <div className="head-list">
        <h1>To-Do List</h1>
      </div>
      <Input onAdd={addItem} />
      <div>
        <ul>
          {items.map((todoItems, index) => (
            <List
              key={index}
              id={index}
              list={todoItems}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
