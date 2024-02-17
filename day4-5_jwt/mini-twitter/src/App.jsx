import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import OtherProfilePage from "./pages/OtherProfilePage";
import Navbar from "./components/Navbar";
import PrivateRoutes from "./utils/PrivateRoutes";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/profile" element={<ProfilePage />} exact />
          </Route>
          <Route path="/user/:username" element={<OtherProfilePage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
