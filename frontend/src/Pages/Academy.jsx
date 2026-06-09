import "./Academy.css";

export default function Academy() {
  return (
    <div className="academy-page">

      <h1>ShieldAI Academy</h1>

      <p>
        Learn AI, cybersecurity, and digital safety.
      </p>

     <div className="course-grid">

  <div className="course-card">
    <h3>Introduction to AI</h3>
    <p>Learn the fundamentals of Artificial Intelligence.</p>

    <a
      href="https://www.youtube.com/watch?v=tchN4xa4pfg"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button>Start Course</button>
    </a>
  </div>

  <div className="course-card">
    <h3>Scam Awareness</h3>
    <p>Identify phishing, fraud, and online scams.</p>

    <a
      href="https://www.youtube.com/results?search_query=scam+awareness+cybersecurity"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button>Start Course</button>
    </a>
  </div>

  <div className="course-card">
    <h3>Cybersecurity Basics</h3>
    <p>Protect your digital identity and devices.</p>

    <a
      href="https://www.youtube.com/watch?v=9HOpanT0GRs"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button>Start Course</button>
    </a>
  </div>

  <div className="course-card">
    <h3>Prompt Engineering</h3>
    <p>Master modern AI prompting techniques.</p>

    <a
      href="https://www.youtube.com/watch?v=H4YK_7MAckk"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button>Start Course</button>
    </a>
  </div>

</div>

      </div>

   
  );
}