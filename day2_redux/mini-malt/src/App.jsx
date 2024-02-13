import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import Header from "./components/Header";
import Logo from "./components/Logo";
import HomeNavLink from "./components/HomeNavLink";
import ProfileNavLink from "./components/ProfileNavLink";
import UserName from "./components/UserName";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Logo />
        <div className="navLinkContainer">
          <HomeNavLink />
          <ProfileNavLink />
        </div>
        <UserName />
      </Header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
