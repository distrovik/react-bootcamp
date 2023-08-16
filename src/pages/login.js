import LoginPage from "../components/login/login";
import RegisterPage from "../components/login/register";
import Navbar from "../components/home/Navbar";

const userIsRegistered = true;

function Login() {
  return (
    <div>
      {!userIsRegistered && <Navbar />}
      {userIsRegistered ? <LoginPage /> : <RegisterPage />}
    </div>
  );
}

function Register() {
  return (
    <div>
      <Navbar />
      {userIsRegistered ? <RegisterPage /> : <LoginPage />}
    </div>
  );
}

export default Login;
export { Register };
