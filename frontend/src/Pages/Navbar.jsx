import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        ShieldAI
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/detector">Detector</Link></li>
        <li><Link to="/verify-number">Verify Number</Link></li>
        <li><Link to="/verify-website">Verify Website</Link></li>
        <li><Link to="/academy">Academy</Link></li>
      </ul>

      <div className="nav-buttons">
         <Link to="/login">
          <button className="login-btn">
            Login
          </button>
        </Link>

        <Link to="/register">
          <button className="signup-btn">
            Get Started
          </button>
        </Link>
      </div>
    </nav>
  );
}