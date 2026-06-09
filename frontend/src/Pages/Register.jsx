
import "./Auth.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (!fullName || !email || !password) {
      alert("Please fill in all fields");
      return;
    }

    // Frontend-only registration
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userName", fullName);
    localStorage.setItem("userEmail", email);

    navigate("/dashboard");
  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        <div className="auth-header">
          <h2>Create Account</h2>

        </div>

        <form onSubmit={handleRegister}>

          <div className="input-group">
            
            <input
              type="text"
              placeholder="John Doe"
              value={fullName}
              onChange={(e) =>
                setFullName(e.target.value)
              }
            />
          </div>

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
              placeholder="Create password"
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
            Create Account
          </button>

        </form>

        <div className="auth-footer">
          <p>
            Already have an account?{" "}
            <Link
              to="/login"
              className="auth-link"
            >
              Login
            </Link>
          </p>
        </div>

      </div>

    </div>
  );
}