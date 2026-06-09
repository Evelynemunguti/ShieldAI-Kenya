
import { useState } from "react";
import "./Detector.css";

export default function Detector() {
  const [message, setMessage] = useState("");
  const [result, setResult] = useState(null);

  const analyzeMessage = () => {
    if (!message.trim()) {
      alert("Please enter a message.");
      return;
    }

    const text = message.toLowerCase();

    let score = 0;
    const reasons = [];
    let attackType = "General Scam";

    // HIGH RISK PHRASES
    const highRiskPhrases = [
      "send money immediately",
      "account suspended",
      "verify your password",
      "claim your prize",
      "you have won",
      "urgent action required",
      "mpesa reversal",
    ];

    highRiskPhrases.forEach((phrase) => {
      if (text.includes(phrase)) {
        score += 30;
        reasons.push(`High-risk phrase: "${phrase}"`);
      }
    });

    // MEDIUM RISK WORDS
    const mediumRiskWords = [
      "urgent",
      "winner",
      "click here",
      "verify now",
      "limited time",
      "password",
      "otp",
      "mpesa",
      "loan approved",
      "congratulations",
    ];

    mediumRiskWords.forEach((word) => {
      if (text.includes(word)) {
        score += 10;
        reasons.push(`Suspicious keyword: "${word}"`);
      }
    });

    // LINK DETECTION
    if (
      text.includes("http://") ||
      text.includes("https://") ||
      text.includes("www.")
    ) {
      score += 20;
      reasons.push("Contains external link");
    }

    // URGENCY DETECTION
    const urgencyWords = ["urgent", "immediately", "now", "today"];

    let urgencyCount = 0;

    urgencyWords.forEach((word) => {
      if (text.includes(word)) urgencyCount++;
    });

    if (urgencyCount >= 2) {
      score += 15;
      reasons.push("Pressure / urgency tactics detected");
    }

    // MONEY REQUEST DETECTION
    const moneyWords = [
      "send money",
      "mpesa",
      "pay",
      "deposit",
      "withdraw",
    ];

    if (moneyWords.some((word) => text.includes(word))) {
      score += 15;
      reasons.push("Financial transaction request detected");
    }

    // SHORT MESSAGE
    if (message.length < 20) {
      score += 10;
      reasons.push("Very short message");
    }

    // ATTACK CLASSIFICATION
    if (
      text.includes("password") ||
      text.includes("login") ||
      text.includes("otp")
    ) {
      attackType = "Phishing Attack";
    } else if (
      text.includes("loan") ||
      text.includes("mpesa") ||
      text.includes("send money")
    ) {
      attackType = "Financial Scam";
    } else if (
      text.includes("winner") ||
      text.includes("congratulations") ||
      text.includes("prize")
    ) {
      attackType = "Fake Prize Scam";
    } else if (
      text.includes("bank") ||
      text.includes("kcb") ||
      text.includes("equity")
    ) {
      attackType = "Impersonation Scam";
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

    // EXPLAINABLE AI
    let explanation = "";

    if (verdict === "HIGH RISK") {
      explanation =
        "This message contains multiple indicators commonly found in scam campaigns.";
    } else if (verdict === "SUSPICIOUS") {
      explanation =
        "Some scam-like patterns were detected. Exercise caution before responding.";
    } else if (verdict === "LOW RISK") {
      explanation =
        "Only minor warning signs were detected, but verification is recommended.";
    } else {
      explanation =
        "No significant scam indicators were detected based on current analysis.";
    }

    setResult({
      score,
      verdict,
      attackType,
      explanation,
      reasons,
    });
  };

  return (
    <div className="detector-page">
      <h1>AI Scam Detector</h1>

      <p>
        Paste a suspicious SMS, email, WhatsApp message
        or social media message.
      </p>

      <textarea
        placeholder="Paste suspicious message here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button
        className="analyze-btn"
        onClick={analyzeMessage}
      >
        Analyze Message
      </button>

      {result && (
        <div className="result-card">

          <h2>Scam Shield Analysis</h2>

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