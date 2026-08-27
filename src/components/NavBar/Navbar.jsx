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
    </nav>
  );
}

export default Navbar;