import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [theme, setTheme] = useState("dark");

  return (
    <nav className={`navbar navbar-expand-lg navbar-${theme} bg-${theme}`}>
      <ul className="navbar-nav">
        <li className="logo nav-item nav-link">Davide Di Giovanni</li>
        <span className="spacer-left"></span>
        <li className="nav-item spacer-left">
          <a className="nav-link" href="/">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">
            About me
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact">
            Contact me
          </a>
        </li>
      </ul>
      <button
        className="d-block mr-0 ml-auto btn btn-secondary"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <i className="fas fa-lightbulb"></i>
        <il className="spacer-left">Toggle {theme} mode</il>
      </button>
    </nav>
  );
};

export default Navbar;
