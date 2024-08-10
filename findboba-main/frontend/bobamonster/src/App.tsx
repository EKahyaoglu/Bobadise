import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./index.css";
import "./App.css";
import NavBar from "./components/Navbar";
import LoginPage from "./pages/Login";
import Homepage from "./pages/Homepage";
import BobaStorePage from "./pages/BobaStorePage";
import ProfilePage from "./pages/Profile";
import BobamonShop from "./pages/BobamonShop";

const App: React.FC = () => {
  const location = useLocation();

  const showNavBar = location.pathname !== '/';

  return (
    <div>
      {showNavBar && <NavBar />}
      <Routes>
        <Route path="/" element={< LoginPage />} />
        <Route path="pages/Homepage" element={< Homepage />} />
        <Route path="/pages/BobaStorePage" element={< BobaStorePage />} />
        <Route path="/pages/Profile" element={< ProfilePage />} />
        <Route path="/pages/BobamonShop" element={< BobamonShop />} />
      </Routes>
    </div>
  );
};

const AppWithRouter: React.FC = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWithRouter;
