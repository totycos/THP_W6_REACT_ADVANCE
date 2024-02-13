import "./index.scss";
import { Link } from "react-router-dom";

const HomeNavLink = () => {
  return (
    <Link to="/" className="homeNavLink">
      Home
    </Link>
  );
};

export default HomeNavLink;
