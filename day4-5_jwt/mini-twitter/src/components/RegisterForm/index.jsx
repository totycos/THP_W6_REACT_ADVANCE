import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authApi from "../../services/authApi";
import Cookies from "js-cookie";
import { useSelector, useDispatch } from "react-redux";

const RegisterForm = () => {
  const { response, error, registerFetch } = authApi();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isLogged = useSelector((state) => state.auth.isLogged);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updateAuth = (newAuthValue) => {
    dispatch({ type: "UPDATE_AUTH", payload: newAuthValue });
  };

  const handleRegister = async () => {
    await registerFetch(username, email, password);
  };

  useEffect(() => {
    if (response && response.jwt) {
      Cookies.set("token", response.jwt);
      updateAuth(true);
      console.log("isLogged after register: ", isLogged);
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
