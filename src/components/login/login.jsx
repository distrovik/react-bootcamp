import { useState } from "react";
import Input from "./Input";
import "./login.css";

function Login() {
  const dark = { backgroundColor: "black" };

  const [style, setStyle] = useState();

  function handleClick() {
    setStyle(dark);
  }

  const [name, setName] = useState();
  const [h1Text, setH1Text] = useState();

  function HandleChange(event) {
    setName(event.target.value);
  }

  function click(event) {
    setH1Text(name);

    event.preventDefault();
  }

  return (
    <body className="login-body">
      <div className="container">
        <h1>Hello {h1Text}</h1>
        <form className="form">
          <input
            type="text"
            placeholder="Username"
            value={name}
            onChange={HandleChange}
          />
          <Input type="password" placeholder="Password" />
          <button
            type="submit"
            onMouseOver={handleClick}
            onMouseLeave={setStyle}
            onClick={click}
            style={style}
          >
            Login
          </button>
        </form>
      </div>
    </body>
  );
}

export default Login;
