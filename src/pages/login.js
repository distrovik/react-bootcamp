import LoginPage from "../components/login/login";
import RegisterPage from "../components/login/register";
import Navbar from "../components/home/Navbar";

const userIsRegistered = false;

function Login() {
  return (
    <div>
      {!userIsRegistered && <Navbar />}
      {userIsRegistered ? <LoginPage /> : <RegisterPage />}
    </div>
  );
}

export default Login;
