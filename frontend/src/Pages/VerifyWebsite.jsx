
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


const url = website.toLowerCase().trim();

let score = 0;
let verdict = "SAFE";
let attackType = "Unknown";
let confidence = "Low";

const reasons = [];

// HTTPS Check
if (!url.startsWith("https://")) {
  score += 25;
  reasons.push("Website is not using HTTPS");
}

// Scam Keywords
const scamKeywords = [
  "winner",
  "claim",
  "prize",
  "gift",
  "bonus",
  "free-money",
  "loan",
  "approve-now",
  "urgent",
  "reward",
  "crypto-profit",
  "investment",
  "double-money",
];

scamKeywords.forEach((keyword) => {
  if (url.includes(keyword)) {
    score += 15;
    reasons.push(`Suspicious keyword detected: "${keyword}"`);
  }
});

// High Risk Domains
const riskyDomains = [
  ".xyz",
  ".tk",
  ".top",
  ".click",
  ".loan",
  ".gq",
  ".buzz",
];

riskyDomains.forEach((domain) => {
  if (url.includes(domain)) {
    score += 20;
    reasons.push(`High-risk domain extension detected: ${domain}`);
  }
});

// URL Tricks
if (url.includes("@")) {
  score += 30;
  reasons.push("Suspicious @ symbol detected");
}

if (url.length > 80) {
  score += 15;
  reasons.push("Very long URL detected");
}

// Excessive Hyphens
const hyphenCount = (url.match(/-/g) || []).length;

if (hyphenCount >= 3) {
  score += 15;
  reasons.push("Excessive hyphen usage detected");
}

// Impersonation Detection
const brands = [
  "mpesa",
  "equity",
  "kcb",
  "paypal",
  "facebook",
  "instagram",
  "google",
  "amazon",
  "microsoft",
];

brands.forEach((brand) => {
  if (
    url.includes(brand) &&
    !url.endsWith(".com") &&
    !url.endsWith(".co.ke")
  ) {
    score += 30;

    attackType = "Brand Impersonation";

    reasons.push(
      `Possible impersonation of ${brand}`
    );
  }
});

// Attack Classification
if (
  url.includes("login") ||
  url.includes("verify") ||
  url.includes("password")
) {
  attackType = "Phishing Website";
}

if (
  url.includes("loan") ||
  url.includes("mpesa")
) {
  attackType = "Financial Scam";
}

if (
  url.includes("winner") ||
  url.includes("prize")
) {
  attackType = "Prize Scam";
}

// Website Format Validation
const validWebsitePattern =
  /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}$/;

if (!validWebsitePattern.test(url)) {
  score += 25;
  reasons.push(
    "Website format appears invalid"
  );
}

// Final Scoring
if (score > 100) score = 100;

if (score >= 75) {
  verdict = "HIGH RISK";
  confidence = "High";
} else if (score >= 45) {
  verdict = "SUSPICIOUS";
  confidence = "Medium";
} else if (score >= 20) {
  verdict = "LOW RISK";
  confidence = "Low";
}

// Explainable AI
let explanation = "";

if (verdict === "HIGH RISK") {
  explanation =
    "This website exhibits multiple indicators commonly associated with phishing, impersonation, or scam campaigns.";
} else if (verdict === "SUSPICIOUS") {
  explanation =
    "Several warning signs were detected. Verify the ownership and legitimacy of this website before interacting with it.";
} else if (verdict === "LOW RISK") {
  explanation =
    "Minor concerns were identified, but there is insufficient evidence to classify this website as malicious.";
} else {
  explanation =
    "No major scam indicators were detected. ShieldAI cannot verify website ownership or existence in frontend-only mode.";
}

setResult({
  website,
  score,
  verdict,
  attackType,
  confidence,
  explanation,
  reasons,
});

};

return ( <div className="website-page"> <h1>Verify Website</h1>

  <p>
    Analyze a website URL for phishing, fraud,
    impersonation, and scam indicators.
  </p>

  <input
    type="text"
    placeholder="Enter website URL"
    value={website}
    onChange={(e) => setWebsite(e.target.value)}
  />

  <button onClick={analyzeWebsite}>
    Analyze Website
  </button>

  {result && (
    <div className="website-result">

      <h2>ShieldAI Analysis</h2>

      <div className="score">
        {result.score}%
      </div>

      <h3>{result.verdict}</h3>

      <p>
        <strong>Attack Type:</strong>{" "}
        {result.attackType}
      </p>

      <p>
        <strong>Confidence:</strong>{" "}
        {result.confidence}
      </p>

      <div className="ai-explanation">
        <h4>AI Explanation</h4>
        <p>{result.explanation}</p>
      </div>

      <h4>Detected Signals</h4>

      <ul>
        {result.reasons.length > 0 ? (
          result.reasons.map((reason, index) => (
            <li key={index}>{reason}</li>
          ))
        ) : (
          <li>No suspicious indicators found.</li>
        )}
      </ul>

    </div>
  )}
</div>

);
}
