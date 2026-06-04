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
          <p>Learn the fundamentals of AI.</p>
          <button>Start Course</button>
        </div>

        <div className="course-card">
          <h3>Scam Awareness</h3>
          <p>Identify and avoid common scams.</p>
          <button>Start Course</button>
        </div>

        <div className="course-card">
          <h3>Cybersecurity Basics</h3>
          <p>Protect your digital identity.</p>
          <button>Start Course</button>
        </div>

        <div className="course-card">
          <h3>Prompt Engineering</h3>
          <p>Master AI prompting techniques.</p>
          <button>Start Course</button>
        </div>

      </div>

    </div>
  );
}