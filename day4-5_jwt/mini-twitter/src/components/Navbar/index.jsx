import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useSelector, useDispatch } from "react-redux";
import profile from "../../assets/profile.svg";
import logo from "../../assets/logo.svg";
import home from "../../assets/home.svg";
import logout from "../../assets/logout.svg";
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
      <Link to="/">
        <img className="navbar__logo" src={logo} alt="logo" />
      </Link>
      <Link to="/">
        <img className="navbar__home" src={home} alt="home" />
      </Link>
      {isLogged ? (
        <>
          <Link to="/profile">
            <img className="navbar__profile" src={profile} alt="profile" />
          </Link>
          <div onClick={handleLogout}>
            <img className="navbar__logout" src={logout} alt="" />
          </div>
        </>
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
