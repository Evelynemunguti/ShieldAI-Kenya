import "./Auth.css";

export default function Register() {
  return (
    <div className="auth-page">

      <div className="auth-card">

        <h2>Create Account</h2>

        <input
          type="text"
          placeholder="Full Name"
        />

        <input
          type="email"
          placeholder="Email"
        />

        <input
          type="password"
          placeholder="Password"
        />

        <button>Register</button>

      </div>

    </div>
  );
}