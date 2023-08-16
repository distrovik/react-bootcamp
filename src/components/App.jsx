import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "../pages/contacts";
import Home from "../pages/home";
import Emojipedia from "../pages/emojipedia";
import Login, { Register } from "../pages/login";
import ToDoList from "../pages/todolist";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/emojipedia" element={<Emojipedia />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/todolist" element={<ToDoList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
