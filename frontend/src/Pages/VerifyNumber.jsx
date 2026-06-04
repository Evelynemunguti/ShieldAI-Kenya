import "./VerifyNumber.css";

export default function VerifyNumber() {
  return (
    <div className="verify-page">
      <h1>Verify Phone Number</h1>

      <p>
        Check whether a phone number has been reported for scams.
      </p>

      <input
        type="text"
        placeholder="Enter phone number..."
      />

      <button>Verify Number</button>

      <div className="result-card">
        <h2>Verification Result</h2>

        <p>Phone Number: 0712345678</p>

        <p>Reports: 17</p>

        <p className="high-risk">
          Risk Level: HIGH
        </p>
      </div>
    </div>
  );
}