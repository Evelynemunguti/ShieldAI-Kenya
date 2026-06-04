import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        ShieldAI
      </div>

      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/">Detector</a></li>
        <li><a href="/">Verify</a></li>
        <li><a href="/">Academy</a></li>
        <li><a href="/">Report Scam</a></li>
      </ul>

      <div className="nav-buttons">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Get Started</button>
      </div>
    </nav>
  );
}