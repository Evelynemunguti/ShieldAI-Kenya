
import "./Dashboard.css";
import { Link } from "react-router-dom";

export default function Dashboard() {

  const stats = {
    totalScans: 127,
    highRisk: 34,
    phoneChecks: 52,
    websiteChecks: 41,
  };

  const recentActivity = [
    {
      type: "Message Scan",
      result: "HIGH RISK",
    },
    {
      type: "Phone Verification",
      result: "SUSPICIOUS",
    },
    {
      type: "Website Verification",
      result: "LOW RISK",
    },
  ];

  return (
    <div className="dashboard">

      <h1>Welcome to ShieldAI</h1>
      <br></br>

      <p>
        Your personal cybersecurity dashboard.
      </p>

      <div className="stats-grid">

        <div className="stat-card">
          <h2>{stats.totalScans}</h2>
          <p>Total Scans</p>
        </div>

        <div className="stat-card">
          <h2>{stats.highRisk}</h2>
          <p>High Risk Alerts</p>
        </div>

        <div className="stat-card">
          <h2>{stats.phoneChecks}</h2>
          <p>Phone Checks</p>
        </div>

        <div className="stat-card">
          <h2>{stats.websiteChecks}</h2>
          <p>Website Checks</p>
        </div>

      </div>

      <h2 className="section-title">
        Quick Actions
      </h2>

      <div className="actions-grid">

        <Link to="/detector" className="action-card">
          🛡 Scan Message
        </Link>

        <Link
          to="/verify-number"
          className="action-card"
        >
          📞 Verify Number
        </Link>

        <Link
          to="/verify-website"
          className="action-card"
        >
          🌐 Verify Website
        </Link>

        <Link
          to="/academy"
          className="action-card"
        >
          🎓 Academy
        </Link>

      </div>

      <h2 className="section-title">
        Recent Activity
      </h2>

      <div className="activity-list">

        {recentActivity.map((item, index) => (
          <div
            key={index}
            className="activity-card"
          >
            <strong>{item.type}</strong>
            <span>{item.result}</span>
          </div>
        ))}

      </div>

    </div>
  );
}