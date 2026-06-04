import "./Home.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <h1>ShieldAI Kenya</h1>

          <h3>Detect. Verify. Protect.</h3>

          <p>
            AI-powered scam detection,
            website verification,
            and digital safety education.
          </p>

          <div className="hero-buttons">
            <button>Check a Scam</button>
            <button className="secondary-btn">
              Learn AI
            </button>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="stats">
        <div className="stat-card">
          <h2>12,500+</h2>
          <p>Scams Detected</p>
        </div>

        <div className="stat-card">
          <h2>8,200+</h2>
          <p>Users Protected</p>
        </div>

        <div className="stat-card">
          <h2>3,000+</h2>
          <p>Reports Submitted</p>
        </div>

        <div className="stat-card">
          <h2>95%</h2>
          <p>Detection Accuracy</p>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <h2>Our Features</h2>

        <div className="feature-grid">

          <div className="feature-card">
            🛡
            <h3>Scam Detector</h3>
          </div>

          <div className="feature-card">
            📞
            <h3>Phone Verification</h3>
          </div>

          <div className="feature-card">
            🌐
            <h3>Website Checker</h3>
          </div>

          <div className="feature-card">
            🎓
            <h3>AI Academy</h3>
          </div>

          <div className="feature-card">
            🚨
            <h3>Report Scam</h3>
          </div>

          <div className="feature-card">
            🤖
            <h3>AI Assistant</h3>
          </div>

        </div>
      </section>

      {/* Scam Alerts */}
      <section className="alerts">

        <h2>Latest Scam Alerts</h2>

        <div className="alert-card">
          Fake KRA SMS Campaign
        </div>

        <div className="alert-card">
          M-Pesa Reversal Scam
        </div>

        <div className="alert-card">
          Fake Job Offers
        </div>

      </section>

      <Footer />
    </>
  );
}