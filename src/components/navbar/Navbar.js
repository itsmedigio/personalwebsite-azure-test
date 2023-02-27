import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-dark`}>
      <ul className="navbar-nav">
        <li className="logo nav-item nav-link">Davide Di Giovanni</li>
        <span className="spacer-left"></span>
        <li className="nav-item spacer-left">
          <a className="nav-link" href="/">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="about">
            About and Contacts
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
