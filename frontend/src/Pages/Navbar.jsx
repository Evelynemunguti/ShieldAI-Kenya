import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        ShieldAI
      </div>

      <ul className="nav-links">
        {/* <li><a href="/">Home</a></li>
        <li><a href="/">Detector</a></li>
        <li><a href="/">Verify</a></li>
        <li><a href="/">Academy</a></li>
        <li><a href="/">Report Scam</a></li> */}
        import { Link } from "react-router-dom";

<Link to="/">Home</Link>
<Link to="/detector">Detector</Link>
<Link to="/verify-number">Verify Number</Link>
<Link to="/verify-website">Verify Website</Link>
<Link to="/academy">Academy</Link>
      </ul>

      <div className="nav-buttons">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Get Started</button>
      </div>
    </nav>
  );
}