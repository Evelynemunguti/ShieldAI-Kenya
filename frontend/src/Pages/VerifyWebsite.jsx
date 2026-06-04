import "./VerifyWebsite.css";

export default function VerifyWebsite() {
  return (
    <div className="website-page">
      <h1>Verify Website</h1>

      <p>
        Check if a website may be unsafe or fraudulent.
      </p>

      <input
        type="text"
        placeholder="Enter website URL..."
      />

      <button>Analyze Website</button>

      <div className="website-result">
        <h2>Website Analysis</h2>

        <p>HTTPS: Yes</p>

        <p>Domain Age: 14 Days</p>

        <p className="warning">
          Risk Score: 82%
        </p>
      </div>
    </div>
  );
}