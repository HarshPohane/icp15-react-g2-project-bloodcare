import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Navbar.css";

function Navbar() {
  const { isAuthenticated, logout } = useAuth(); 

  const handleLogout = () => {
    logout();
    navigate("/"); 
  };
  return (
    <nav className="navbar">
      <div className="nav-container">

        <Link to="/" className="logo">
          <span className="logo-icon">❤</span>
          <span>Blood<span>Care</span></span>
        </Link>

        <div className="nav-links">

          <NavLink to="/" className="nav-link">
            Home
          </NavLink>

          <NavLink to="/about" className="nav-link">
            About
          </NavLink>

          <NavLink to="/find-blood" className="nav-link">
            Find Blood
          </NavLink>

          <NavLink to="/donors" className="nav-link">
            Donors
          </NavLink>

            <NavLink to="/hospitals" className="nav-link">
            Hospitals
          </NavLink>

          <NavLink to="/bloodbanks" className="nav-link">
            Blood Banks
          </NavLink>

          <NavLink to="/campaigns" className="nav-link">
            Campaigns
          </NavLink>

          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>

        </div>

        <div className="nav-actions">
          {isAuthenticated ? (
            <button onClick={handleLogout} className="signup-btn">Logout</button>
          ) : (
            <Link to="/login" className="login-btn">
              Login
            </Link>
          )}
          <Link to="/signup" className="signup-btn">
            Signup
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;