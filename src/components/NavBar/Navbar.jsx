import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/hospitals" className="nav-link">
        Hospitals
      </NavLink>
      <NavLink to="/campaigns" className="nav-link">
        Campaigns
      </NavLink>
      <NavLink to="/about" className="nav-link">
        About
      </NavLink>
      <NavLink to="/contact" className="nav-link">
        Contact
      </NavLink>
    </nav>
  );
}

export default Navbar;