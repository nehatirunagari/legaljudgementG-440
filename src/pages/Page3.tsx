import { useNavigate, Link } from "react-router-dom";

function Page3() {
  const navigate = useNavigate();

  const handleAskQuestionsClick = () => {
    navigate("/page5");
  };
  const handleAskSummary = () => {
    navigate("/page4");
  };

  return (
    <>
      <nav className="navbar">
        <div id="logo">Legal AI</div>
        <ul className="nav-links">
          <li>
            <Link to="/page1">About Us</Link>
          </li>
          <li>
            <Link to="/page1">Home</Link>{" "}
          </li>
        </ul>
      </nav>

      <div className="upload-container">
        <div className="upload-section">
          <h2>Unlock the Essence of Legal Documents</h2>
          <p>
            Upload your legal judgement and choose to either get a concise
            summary or ask specific questions to understand its key points
          </p>
          <button className="upload-button">Upload Document</button>

          <div className="action-buttons">
            <button className="summary" onClick={handleAskSummary}>
              Get Summary
            </button>
            <button className="qa" onClick={handleAskQuestionsClick}>
              Ask Questions
            </button>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-links">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">All Rights Reserved</a>
          <a href="#">Contact Us</a>
        </div>
      </footer>
    </>
  );
}

export default Page3;
