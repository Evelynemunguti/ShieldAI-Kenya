// 

import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  // State to manage mobile menu visibility
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        ShieldAI
      </div>

      {/* The active class will slide the menu in when isOpen is true */}
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/detector" onClick={toggleMenu}>Detector</Link></li>
        <li><Link to="/verify-number" onClick={toggleMenu}>Verify Number</Link></li>
        <li><Link to="/verify-website" onClick={toggleMenu}>Verify Website</Link></li>
        <li><Link to="/academy" onClick={toggleMenu}>Academy</Link></li>
        
        {/* Moving buttons inside the list for mobile layout consistency */}
        <li className="mobile-buttons">
          <Link to="/login" onClick={toggleMenu} className="login-btn">Login</Link>
          <Link to="/register" onClick={toggleMenu} className="signup-btn">Get Started</Link>
        </li>
      </ul>

      {/* Desktop-only buttons container */}
      <div className="nav-buttons desktop-only">
         <Link to="/login" className="login-btn">Login</Link>
         <Link to="/register" className="signup-btn">Get Started</Link>
      </div>

      {/* Hamburger Menu Icon */}
      <button className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu} aria-label="Toggle navigation">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </nav>
  );
}