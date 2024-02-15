import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import shmeeterApi from "../../services/shmeeterApi";
import Cookies from "js-cookie";
import { AuthContext } from "../../contexts/AuthContext";

const RegisterForm = () => {
  const { response, error, registerFetch } = shmeeterApi();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { updateAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = async () => {
    await registerFetch(username, email, password);
  };

  useEffect(() => {
    if (response && response.jwt) {
      Cookies.set("token", response.jwt);
      updateAuth();
      navigate("/");
    }
    error && console.log(error);
  }, [response, error]);

  return (
    <form>
      <label>Username:</label>
      <input
        type="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />

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

      <button type="button" onClick={handleRegister}>
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
