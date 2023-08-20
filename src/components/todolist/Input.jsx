import React, { useState } from "react";
import "./ToDoList.css";

function Input(props) {
  const [inputText, setInputText] = useState();

  function handleChange(event) {
    setInputText(event.target.value);
  }

  return (
    <div className="form-list">
      <input
        onChange={handleChange}
        type="text"
        value={inputText}
        placeholder="Add Task"
      />
      <button
        onClick={() => {
          props.onAdd(inputText);
          setInputText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default Input;
