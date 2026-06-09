
import "./Auth.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    // Frontend-only login
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", email);

    navigate("/dashboard");
  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        <div className="auth-header">
          <h2>Login</h2>
         
        </div>

        <form onSubmit={handleLogin}>

          <div className="input-group">
            
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />
          </div>

          <div className="input-group">
           
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />
          </div>

          <button
            type="submit"
            className="auth-btn"
          >
            Login
          </button>

        </form>

        <div className="auth-footer">
  <p>
    Don't have an account?{" "}
    <Link to="/register" className="auth-link">
      Create Account
    </Link>
  </p>
</div>

      </div>

    </div>
  );
}