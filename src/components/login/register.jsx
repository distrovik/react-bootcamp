import Input from "./Input";
import "./login.css";

function Register() {
  return (
    <body className="login-body">
      <div className="container">
        <h1>Get Started</h1>
        <form className="form">
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          <Input type="password" placeholder="Confirm Password"/>
          <button type="submit">Register</button>
        </form>
      </div>
    </body>
  );
}

export default Register;