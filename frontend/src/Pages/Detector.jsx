

import { useState } from "react";
import "./Detector.css";

export default function Detector() {
  const [message, setMessage] = useState("");
  const [result, setResult] = useState(null);

  const analyzeMessage = () => {
    let score = 0;
    const reasons = [];

    const suspiciousWords = [
      "urgent",
      "winner",
      "claim",
      "prize",
      "send money",
      "mpesa",
      "account suspended",
      "click here",
      "verify now",
      "limited time",
      "congratulations",
      "loan approved",
      "password",
    ];

    const lowerMessage = message.toLowerCase();

    suspiciousWords.forEach((word) => {
      if (lowerMessage.includes(word)) {
        score += 10;
        reasons.push(`Suspicious phrase detected: "${word}"`);
      }
    });

    if (message.includes("http://")) {
      score += 20;
      reasons.push("Insecure link detected");
    }

    if (message.length < 20) {
      score += 10;
      reasons.push("Very short message");
    }

    if (score > 100) score = 100;

    let verdict = "SAFE";

    if (score > 80) {
      verdict = "SCAM";
    } else if (score > 50) {
      verdict = "SUSPICIOUS";
    } else if (score > 20) {
      verdict = "LOW RISK";
    }

    setResult({
      score,
      verdict,
      reasons,
    });
  };

  const reportScam = () => {
    alert("Scam reported successfully!");

    console.log({
      reportType: "message",
      content: message,
      score: result?.score,
      verdict: result?.verdict,
      source: "Detector",
    });
  };

  return (
    <div className="detector-page">
      <h1>AI Scam Detector</h1>

      <p>
        Paste a suspicious SMS, email, WhatsApp message,
        or social media message.
      </p>

      <textarea
        placeholder="Paste suspicious message here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button className="analyze-btn" onClick={analyzeMessage}>
        Analyze Scam
      </button>

      {result && (
        <div className="result-card">
          <h2>Scam Shield Score</h2>

          <div className="score">
            {result.score}%
          </div>

          <h3>{result.verdict}</h3>

          <ul>
            {result.reasons.length > 0 ? (
              result.reasons.map((reason, index) => (
                <li key={index}>{reason}</li>
              ))
            ) : (
              <li>No suspicious indicators found.</li>
            )}
          </ul>

          {result.verdict !== "SAFE" && (
            <button
              className="report-btn"
              onClick={reportScam}
            >
              Report This Scam
            </button>
          )}
        </div>
      )}
    </div>
  );
}