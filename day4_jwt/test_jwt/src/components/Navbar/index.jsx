import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { AuthContext } from "../../contexts/AuthContext";
import "./index.scss";

const Navbar = () => {
  const { auth, updateAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    if (auth) {
      Cookies.remove("token");
      updateAuth();
      console.log(auth);
      navigate(`/`);
    }
  };

  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      {auth ? (
        <div>
          <Link to="/profile">Profile</Link>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
