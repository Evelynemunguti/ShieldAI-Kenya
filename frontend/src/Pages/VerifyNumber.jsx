
import { useState } from "react";
import "./VerifyNumber.css";

export default function VerifyNumber() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [result, setResult] = useState(null);

  const checkNumber = () => {
    if (!phoneNumber.trim()) {
      alert("Please enter a phone number");
      return;
    }

    let score = 0;
    let reasons = [];
    let attackType = "Unknown";

    const scamNumbers = [
      "0712345678",
      "0700000000",
      "0799999999",
      "0111111111",
    ];

    const suspiciousPrefixes = [
      "0700",
      "0712",
      "0111",
    ];

    // Known scam number
    if (scamNumbers.includes(phoneNumber)) {
      score += 70;
      reasons.push("Number appears in scam database");
      attackType = "Known Scam Source";
    }

    // Suspicious prefixes
    if (
      suspiciousPrefixes.some(prefix =>
        phoneNumber.startsWith(prefix)
      )
    ) {
      score += 20;
      reasons.push("Suspicious number prefix detected");
    }

    // Invalid format
    if (!/^\d+$/.test(phoneNumber)) {
      score += 30;
      reasons.push("Contains invalid characters");
    }

    // Length analysis
    if (
      phoneNumber.length < 10 ||
      phoneNumber.length > 12
    ) {
      score += 30;
      reasons.push("Abnormal phone number length");
    }

    // Repeated digits
    if (/(\d)\1{5,}/.test(phoneNumber)) {
      score += 40;
      reasons.push("Repeated digit pattern detected");
      attackType = "Spoofed Number";
    }

    // Sequential patterns
    if (
      phoneNumber.includes("123456") ||
      phoneNumber.includes("000000") ||
      phoneNumber.includes("111111")
    ) {
      score += 25;
      reasons.push("Artificial sequence pattern detected");
    }

    if (score > 100) score = 100;

    let verdict = "SAFE";

    if (score >= 75) {
      verdict = "HIGH RISK";
    } else if (score >= 45) {
      verdict = "SUSPICIOUS";
    } else if (score >= 20) {
      verdict = "LOW RISK";
    }

    let explanation = "";

    if (verdict === "HIGH RISK") {
      explanation =
        "This number exhibits multiple indicators commonly associated with scam activity.";
    } else if (verdict === "SUSPICIOUS") {
      explanation =
        "Some unusual patterns were detected. Exercise caution before interacting with this number.";
    } else if (verdict === "LOW RISK") {
      explanation =
        "Minor warning signs were detected, but there is insufficient evidence to classify this number as dangerous.";
    } else {
      explanation =
        "No major risk indicators were detected based on available analysis.";
    }

    setResult({
      number: phoneNumber,
      score,
      verdict,
      attackType,
      explanation,
      reasons,
    });
  };

  return (
    <div className="verify-page">

      <h1>Verify Phone Number</h1>

      <p>
        Analyze a phone number for potential scam indicators.
      </p>

      <input
        type="text"
        placeholder="Enter phone number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />

      <button onClick={checkNumber}>
        Verify Number
      </button>

      {result && (
        <div className="result-card">

          <h2>ShieldAI Analysis</h2>

          <div className="score">
            {result.score}%
          </div>

          <h3>{result.verdict}</h3>

          <p>
            <strong>Attack Type:</strong>{" "}
            {result.attackType}
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