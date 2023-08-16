import React, { useState } from "react";
import Input from "./Input";
import "./login.css";

function Register() {
  const [fullName, setfullName] = useState({
    firstName: "",
    lastName: "",
    userName: "",
  });

  const [mouseOver, setMouseOver] = useState();

  function handleMouseOver() {
    setMouseOver(true);
  }
  function handleMouseLeave() {
    setMouseOver(false);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setfullName({
      ...fullName,
      [name]: value,
    });
  }

  return (
    <body className="login-body">
      <div className="container">
        <h1>
          Welcome Aboard {fullName.firstName} {fullName.lastName}
        </h1>
        <p>@{fullName.userName}</p>
        <form className="form">
          <input
            name="userName"
            type="text"
            placeholder="Username"
            value={fullName.userName}
            onChange={handleChange}
          />
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            value={fullName.firstName}
            onChange={handleChange}
          />
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            value={fullName.lastName}
            onChange={handleChange}
          />
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
