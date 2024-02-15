import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import shmeeterApi from "../../services/shmeeterApi";
import { AuthContext } from "../../contexts/AuthContext";
import Cookies from "js-cookie";

const LoginForm = () => {
  const { response, error, loginFetch } = shmeeterApi();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { updateAuth } = useContext(AuthContext);

  const handleLogin = async () => {
    await loginFetch(email, password);
  };

  useEffect(() => {
    console.log(response);
    if (response && response.jwt) {
      Cookies.set("token", response.jwt);
      updateAuth();
      navigate("/");
    }
    error && console.log(error);
  }, [response, error]);

  return (
    <form>
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button type="button" onClick={handleLogin}>
        Login
      </button>
    </form>
  );
};

export default LoginForm;
