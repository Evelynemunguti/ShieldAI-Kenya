import { useState } from "react";
import "./VerifyWebsite.css";

export default function VerifyWebsite() {
  const [website, setWebsite] = useState("");
  const [result, setResult] = useState(null);

  const analyzeWebsite = () => {
    let score = 0;
    let risk = "SAFE";
    const reasons = [];

    const lowerSite = website.toLowerCase();

    if (!lowerSite.startsWith("https://")) {
      score += 30;
      reasons.push("Website is not using HTTPS");
    }

    if (
      lowerSite.includes("free-money") ||
      lowerSite.includes("winner") ||
      lowerSite.includes("claim-prize") ||
      lowerSite.includes("gift")
    ) {
      score += 40;
      reasons.push("Suspicious keywords detected in URL");
    }

    if (
      lowerSite.includes(".xyz") ||
      lowerSite.includes(".tk") ||
      lowerSite.includes(".top")
    ) {
      score += 20;
      reasons.push("High-risk domain extension detected");
    }

    if (score > 80) {
      risk = "HIGH RISK";
    } else if (score > 40) {
      risk = "SUSPICIOUS";
    }

    setResult({
      website,
      score,
      risk,
      reasons,
    });
  };

  return (
    <div className="website-page">
      <h1>Verify Website</h1>

      <p>
        Check whether a website may be unsafe or fraudulent.
      </p>

      <input
        type="text"
        placeholder="Enter website URL..."
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
      />

      <button onClick={analyzeWebsite}>
        Analyze Website
      </button>

      {result && (
        <div className="website-result">

          <h2>Website Analysis</h2>

          <p>
            <strong>Website:</strong> {result.website}
          </p>

          <p>
            <strong>Risk Score:</strong> {result.score}%
          </p>

          <h3
            className={
              result.risk === "HIGH RISK"
                ? "high-risk"
                : result.risk === "SUSPICIOUS"
                ? "medium-risk"
                : "safe"
            }
          >
            {result.risk}
          </h3>

          <ul>
            {result.reasons.map((reason, index) => (
              <li key={index}>{reason}</li>
            ))}
          </ul>

        </div>
      )}
    </div>
  );
}