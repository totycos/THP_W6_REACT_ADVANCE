import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useSelector, useDispatch } from "react-redux";
import "./index.scss";

const Navbar = () => {
  const navigate = useNavigate();
  const isLogged = useSelector((state) => state.auth.isLogged);
  const dispatch = useDispatch();

  const updateAuth = (newAuthValue) => {
    dispatch({ type: "UPDATE_AUTH", payload: newAuthValue });
  };

  const handleLogout = () => {
    if (isLogged) {
      Cookies.remove("token");
      updateAuth(false);
      console.log("isLogged after logout: ", isLogged);
      navigate(`/`);
    }
  };

  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      {isLogged ? (
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
