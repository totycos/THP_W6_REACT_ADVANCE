import { Link } from "react-router-dom";
import "./index.scss";

const ProfileNavLink = () => {
  return (
    <Link to="/profile" className="profileNavLink">
      Profile
    </Link>
  );
};

export default ProfileNavLink;
