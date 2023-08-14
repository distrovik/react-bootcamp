import React, { useState } from "react";
import Input from "./Input";
import "./login.css";

function Register() {
  const [mouseOver, setMouseOver] = useState();

  function handleMouseOver() {
    setMouseOver(true);
  }
  function handleMouseLeave() {
    setMouseOver(false);
  }
  return (
    <body className="login-body">
      <div className="container">
        <h1>Get Started</h1>
        <form className="form">
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          <Input type="password" placeholder="Confirm Password" />
          <button
            type="submit"
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            style={{ backgroundColor: mouseOver ? "black" : "white" }}
          >
            Register
          </button>
        </form>
      </div>
    </body>
  );
}

export default Register;
