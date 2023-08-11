import Input from "./Input";
import "./login.css"

function Login() {
    return (
      <body className="login-body">
      <div className="container">
        <h1>Hello</h1>
        <form className="form">
          <Input type="text" placeholder="Username"/>
          <Input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      </div>
      </body>
    );
  }
  
  export default Login;