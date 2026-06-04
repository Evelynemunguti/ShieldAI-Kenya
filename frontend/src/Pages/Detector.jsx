import "./Detector.css";

export default function Detector() {
  return (
    <div className="detector-page">

      <h1>AI Scam Detector</h1>

      <p>
        Paste a suspicious SMS, email, WhatsApp message,
        or social media message.
      </p>

      <textarea
        placeholder="Paste suspicious message here..."
      />

      <button>
        Analyze Scam
      </button>

      <div className="result-card">

        <h2>Scam Shield Score</h2>

        <div className="score">
          87%
        </div>

        <ul>
          <li>Urgent language detected</li>
          <li>Money request detected</li>
          <li>Suspicious reward claim</li>
        </ul>

      </div>

    </div>
  );
}