import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-dark`}>
      <ul className="navbar-nav mr-auto">
        <li className="logo nav-item nav-link">Davide Di Giovanni</li>
        <li className="nav-item">
          <NavLink className="nav-link" to={"/"}>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={"/about"}>
            About and Contacts
          </NavLink>
        </li>
      </ul>
      <ul className="navbar-nav" style={{ marginRight: 20 }}>
        <li className="nav-item">
          <NavLink className="nav-link" to={"/playground"}>
            ✨ Playground (WIP) ✨
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
