import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-dark`}>
      <ul className="navbar-nav">
        <li className="logo nav-item nav-link">Davide Di Giovanni</li>
        <span className="spacer-left"></span>
        <li className="nav-item spacer-left">
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
    </nav>
  );
};

export default Navbar;
