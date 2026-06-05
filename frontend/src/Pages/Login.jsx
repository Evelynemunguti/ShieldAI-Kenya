import "./Auth.css";

export default function Login() {
  return (
    <div className="auth-page">

      <div className="auth-card">

        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
        />

        <input
          type="password"
          placeholder="Password"
        />

        <button>Login</button>

      </div>

    </div>
  );
}