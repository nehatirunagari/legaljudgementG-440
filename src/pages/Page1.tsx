import { Link, useNavigate } from "react-router-dom";
import "../components/Page1.css";

function Home() {
  const navigate = useNavigate();
  const login = () => {
    navigate("/Page2");
  };
  return (
    <div className="home">
      <header className="navbar">
        <div className="logo">Legal Insights</div>
        <nav className="nav-links">
          <a href="#">About Us</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
          <Link to="/Page2" className="nav-button">
            Get Started
          </Link>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>Unlock the Essence of Legal Judgments</h1>
          <p>
            Our platform simplifies complex legal documents, providing clear
            summaries and answering your specific questions. Gain insights
            quickly and efficiently.
          </p>
        </div>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <p>
          Our platform streamlines the process of understanding legal judgments.
        </p>
        <div className="steps">
          <div className="step-card">
            <div className="step-title">Upload Your Document</div>
            <p>Securely upload your legal judgment in various formats.</p>
          </div>
          <div className="step-card">
            <div className="step-title">Get a Comprehensive Summary</div>
            <p>
              Receive a concise and accurate summary highlighting key points.
            </p>
          </div>
          <div className="step-card">
            <div className="step-title">Ask Questions, Get Answers</div>
            <p>
              Ask specific questions about the judgment and receive precise
              answers.
            </p>
          </div>
        </div>
      </section>

      <section className="why-us">
        <h2>Why Choose Us?</h2>
        <p>
          Our platform offers unparalleled accuracy and efficiency in legal
          document analysis.
        </p>
        <div className="features">
          <div className="feature">
            <img src="/images/accuracy.jpg" alt="Accuracy" />
            <h3>Accuracy</h3>
            <p>Our AI-powered system ensures precise summaries and answers.</p>
          </div>
          <div className="feature">
            <img src="/images/efficiency.jpg" alt="Efficiency" />
            <h3>Efficiency</h3>
            <p>Save time with our rapid analysis and quick insights.</p>
          </div>
          <div className="feature">
            <img src="/images/userfriendly.jpg" alt="User-Friendly" />
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
        <button className="cta-button" onClick={login}>
          Get Started
        </button>
      </section>

      <footer className="footer">
        <div className="footer-links">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Contact Us</a>
        </div>
        <p>© 2024 Legal Insights. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
