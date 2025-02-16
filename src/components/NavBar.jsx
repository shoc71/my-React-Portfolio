import { Link } from 'react-router-dom';

function NavBar({ isDarkMode, toggleTheme }) {
  return (
    <nav className={`navbar navbar-expand-lg ${isDarkMode ? 'navbar-dark bg-primary' : 'navbar-dark bg-primary'}`}>
      <div className="container-fluid">

        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="https://shorturl.at/lepSy" 
            alt="Logo"
            width="25"
            height="25"
            className="d-inline-block align-top me-2"
          />
          <b>Mystery Orbs</b>
        </Link>

        {/* Mobile Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/portfolio">
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact-me">
                Contact Me
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/resume">
                Resume
              </Link>
            </li>
          </ul>
          <button
            className={`btn ${isDarkMode ? 'btn-light' : 'btn-light'}`}
            onClick={toggleTheme}
          >
            {isDarkMode ? <i className="bi bi-moon"></i> : <i className="bi bi-sun"></i>}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
