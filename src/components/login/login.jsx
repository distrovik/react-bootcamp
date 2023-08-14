import { useState } from "react";
import Input from "./Input";
import "./login.css";

function Login() {
  const dark = { backgroundColor: "black" };

  const [style, setStyle] = useState();

  function handleClick() {
    setStyle(dark);
  }

  return (
    <body className="login-body">
      <div className="container">
        <h1>Hello</h1>
        <form className="form">
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          <button
            type="submit"
            onMouseOver={handleClick}
            onMouseLeave={setStyle}
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
