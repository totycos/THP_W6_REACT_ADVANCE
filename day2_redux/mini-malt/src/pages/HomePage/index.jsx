import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h1>Bienvenue</h1>
      <p>
        Veuillez remplir <Link to="/profile">votre profile</Link> pour
        continuer.
      </p>
    </>
  );
};

export default HomePage;
