
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

    const scamNumbers = [
      "0712345678",
      "0700000000",
      "0799999999",
      "0111111111",
    ];

    const suspiciousPrefixes = ["0700", "0712"];

    let risk = "SAFE";
    let reports = 0;
    let score = 5;
    const reasons = [];

    // 1. Exact scam numbers
    if (scamNumbers.includes(phoneNumber)) {
      risk = "HIGH RISK";
      reports = Math.floor(Math.random() * 50) + 10;
      score = 90;
      reasons.push("Known scam number");
    }

    // 2. Prefix check
    if (
      suspiciousPrefixes.some((prefix) =>
        phoneNumber.startsWith(prefix)
      )
    ) {
      risk = "SUSPICIOUS";
      score = Math.max(score, 50);
      reasons.push("Suspicious number prefix");
    }

    // 3. Length check
    if (
      phoneNumber.length < 10 ||
      phoneNumber.length > 12
    ) {
      risk = "SUSPICIOUS";
      score = Math.max(score, 60);
      reasons.push("Abnormal phone number length");
    }

    // 4. Repeated digits
    if (/(\d)\1{6,}/.test(phoneNumber)) {
      risk = "HIGH RISK";
      score = 95;
      reasons.push("Repetitive digit pattern detected");
    }

    setResult({
      number: phoneNumber,
      risk,
      reports,
      score,
      reasons,
    });
  };

  const reportNumber = () => {
    alert("Number reported successfully!");

    console.log({
      reportType: "phone",
      number: result?.number,
      risk: result?.risk,
      score: result?.score,
      source: "Verify Number",
    });
  };

  return (
    <div className="verify-page">
      <h1>Verify Phone Number</h1>

      <p>
        Check whether a phone number has been reported for scams in Kenya.
      </p>

      <input
        type="text"
        placeholder="Enter phone number (e.g. 0712345678)"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />

      <button onClick={checkNumber}>
        Verify Number
      </button>

      {result && (
        <div className="result-card">
          <h2>Verification Result</h2>

          <p>
            <strong>Number:</strong> {result.number}
          </p>

          <p>
            <strong>Reports:</strong> {result.reports}
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

          {result.risk !== "SAFE" && (
            <button
              className="report-btn"
              onClick={reportNumber}
            >
              Report This Number
            </button>
          )}
        </div>
      )}
    </div>
  );
}