// imports

import { Route, Routes } from "react-router-dom"

import 'bootstrap-icons/font/bootstrap-icons.css';

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

import HomePage from "./pages/homePage";
import ErrorPage from "./pages/errorPage";
import ContactMePage from "./pages/contactMePage";
import PortfolioPage from "./pages/portfolioPage";
import ResumePage from "./pages/resumePage";


function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contact-me' element={<ContactMePage />} />
        <Route path='/portfolio' element={<PortfolioPage />} />
        <Route path='/resume' element={<ResumePage />} />
        {/* Wildcard route to catch unmatched paths */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
