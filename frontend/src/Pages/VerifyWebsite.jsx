
import { useState } from "react";
import "./VerifyWebsite.css";

export default function VerifyWebsite() {
  const [website, setWebsite] = useState("");
  const [result, setResult] = useState(null);

  const analyzeWebsite = () => {
    if (!website.trim()) {
      alert("Please enter a website URL");
      return;
    }

    let score = 5;
    let risk = "SAFE";
    const reasons = [];

    const lowerSite = website.toLowerCase().trim();

    // 1. HTTPS check
    if (!lowerSite.startsWith("https://")) {
      score += 25;
      reasons.push("Website is not using HTTPS");
    }

    // 2. Scam keyword patterns
    const scamKeywords = [
      "free-money",
      "winner",
      "claim-prize",
      "gift",
      "get-rich",
      "lottery",
      "urgent-offer",
      "bonus",
      "mpesa",
      "loan",
      "approve-now",
    ];

    scamKeywords.forEach((word) => {
      if (lowerSite.includes(word)) {
        score += 15;
        reasons.push(`Suspicious keyword detected: "${word}"`);
      }
    });

    // 3. High-risk domains
    const riskyDomains = [".xyz", ".tk", ".top", ".click", ".loan"];

    riskyDomains.forEach((domain) => {
      if (lowerSite.includes(domain)) {
        score += 20;
        reasons.push(`High-risk domain extension detected: ${domain}`);
      }
    });

    // 4. Fake URL structure detection
    if (lowerSite.includes("@")) {
      score += 30;
      reasons.push("Suspicious URL format (@ detected)");
    }

    if (lowerSite.length > 80) {
      score += 10;
      reasons.push("Unusually long URL (possible phishing)");
    }

    // 5. Final risk classification
    if (score >= 80) {
      risk = "HIGH RISK";
    } else if (score >= 50) {
      risk = "SUSPICIOUS";
    } else {
      risk = "SAFE";
    }

    setResult({
      website,
      score,
      risk,
      reasons,
    });
  };

  const reportWebsite = () => {
    alert("Website reported successfully!");

    console.log({
      reportType: "website",
      website: result?.website,
      risk: result?.risk,
      score: result?.score,
      source: "Verify Website",
    });

    // Later: n8n webhook integration
  };

  return (
    <div className="website-page">
      <h1>Verify Website</h1>

      <p>
        Check whether a website may be unsafe or fraudulent.
      </p>

      <input
        type="text"
        placeholder="Enter website URL (e.g. https://example.com)"
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
            {result.reasons.length > 0 ? (
              result.reasons.map((reason, index) => (
                <li key={index}>{reason}</li>
              ))
            ) : (
              <li>No suspicious indicators found</li>
            )}
          </ul>

          {result.risk !== "SAFE" && (
            <button
              className="report-btn"
              onClick={reportWebsite}
            >
              Report This Website
            </button>
          )}

        </div>
      )}
    </div>
  );
}