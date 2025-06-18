import { useNavigate } from "react-router-dom";
import Login from "./Page2";

function Page1() {
  const navigate = useNavigate();
  const login = () => {
    navigate("/Page2");
  };
  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">LegalAI</div>
        <ul className="nav-links">
          <li>About Us</li>
          <li>Contact</li>
          <li>
            <button className="get-started" onClick={login}>
              Get Started
            </button>
          </li>
        </ul>
      </nav>

      <header className="hero">
        <div className="hero-text">
          <h1>Unlock the Essence of Legal Judgments</h1>
          <p>
            Our platform simplifies complex legal documents, providing clear
            summaries and answering your specific questions. Gain insights
            quickly and efficiently.
          </p>
          <img src="./public/images/hero.jpg" alt="Hero" className="hero-img" />
        </div>
      </header>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <p>
          Our platform streamlines the process of understanding legal judgments.
        </p>
        <div className="steps">
          <div className="step">
            <h3>Upload Your Document</h3>
            <p>Securely upload your legal judgment in various formats.</p>
          </div>
          <div className="step">
            <h3>Get a Comprehensive Summary</h3>
            <p>
              Receive a concise and accurate summary highlighting key points.
            </p>
          </div>
          <div className="step">
            <h3>Ask Questions, Get Answers</h3>
            <p>
              Ask specific questions about the judgment and receive precise
              answers.
            </p>
          </div>
        </div>
      </section>

      <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <p>
          Our platform offers unparalleled accuracy and efficiency in legal
          document analysis.
        </p>
        <div className="features">
          <div className="feature">
            <img
              src="./public/images/accuracy.jpg"
              alt="Accuracy"
              className="feature-img"
            />
            <h3>Accuracy</h3>
            <p>Our AI-powered system ensures precise summaries and answers.</p>
          </div>
          <div className="feature">
            <img
              src="/images/efficiency.jpg"
              alt="Efficiency"
              className="feature-img"
            />
            <h3>Efficiency</h3>
            <p>Save time with our rapid analysis and quick insights.</p>
          </div>
          <div className="feature">
            <img
              src="/images/userfriendly.jpg"
              alt="User Friendly"
              className="feature-img"
            />
            <h3>User-Friendly</h3>
            <p>Intuitive interface designed for ease of use.</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to Simplify Your Legal Research?</h2>
        <p>
          Upload your document today and experience the power of AI-driven legal
          analysis.
        </p>
        <button className="get-started" onClick={login}>
          Get Started
        </button>
      </section>

      <footer className="footer">
        <ul>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
          <li>Contact Us</li>
        </ul>
        <p>© 2024 LegalAI. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Page1;
