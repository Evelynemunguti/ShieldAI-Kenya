// import "./VerifyNumber.css";

// export default function VerifyNumber() {
//   return (
//     <div className="verify-page">
//       <h1>Verify Phone Number</h1>

//       <p>
//         Check whether a phone number has been reported for scams.
//       </p>

//       <input
//         type="text"
//         placeholder="Enter phone number..."
//       />

//       <button>Verify Number</button>

//       <div className="result-card">
//         <h2>Verification Result</h2>

//         <p>Phone Number: 0712345678</p>

//         <p>Reports: 17</p>

//         <p className="high-risk">
//           Risk Level: HIGH
//         </p>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import "./VerifyNumber.css";

export default function VerifyNumber() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [result, setResult] = useState(null);

  const checkNumber = () => {
    const scamNumbers = [
      "0712345678",
      "0700000000",
      "0799999999",
      "0111111111"
    ];

    const suspiciousPrefixes = [
      "0700",
      "0712"
    ];

    let risk = "SAFE";
    let reports = 0;
    let score = 0;

    if (scamNumbers.includes(phoneNumber)) {
      risk = "HIGH RISK";
      reports = Math.floor(Math.random() * 50) + 10;
      score = 90;
    } else {
      suspiciousPrefixes.forEach((prefix) => {
        if (phoneNumber.startsWith(prefix)) {
          risk = "SUSPICIOUS";
          reports = Math.floor(Math.random() * 10) + 1;
          score = 50;
        }
      });
    }

    setResult({
      number: phoneNumber,
      risk,
      reports,
      score
    });
  };

  return (
    <div className="verify-page">
      <h1>Verify Phone Number</h1>

      <p>
        Check whether a phone number has been reported for scams.
      </p>

      <input
        type="text"
        placeholder="Enter phone number..."
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

        </div>
      )}
    </div>
  );
}