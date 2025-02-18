import { Route, Routes } from "react-router-dom"
import { useState, useEffect } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/styles/App.css';

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import HomePage from "./pages/homePage";
import ErrorPage from "./pages/errorPage";
import ContactMePage from "./pages/contactMePage";
import PortfolioPage from "./pages/portfolioPage";
import ResumePage from "./pages/resumePage";
import AboutMePage from "./pages/aboutMePage.jsx"

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  const toggleTheme = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", newMode); // Save to localStorage
      return newMode;
    });
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <div style={{
      backgroundColor: isDarkMode ? 'black' : 'white',
      minHeight: '100vh',
      color: isDarkMode ? 'white' : 'black'
    }}>
      <NavBar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutMePage />} />
        <Route path='/contact-me' element={<ContactMePage />} />
        <Route path='/portfolio' element={<PortfolioPage />} />
        <Route path='/resume' element={<ResumePage />} />

        {/* Wildcard route to catch unmatched paths */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
