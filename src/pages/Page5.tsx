import { useState } from "react";
import { Link } from "react-router-dom";

function Page5() {
  const [rating, setRating] = useState(0);

  const handleStarClick = (index: number) => {
    setRating(index);
  };
  return (
    <>
      <nav className="navbar">
        <div id="logo">Logo Legal Insights</div>
        <ul>
          <li>
            <Link to="/page1">Home</Link>
          </li>
          <li>
            <Link to="/page1" className="about-us-link">
              About Us
              <span className="user-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="16"
                  height="16"
                  fill="white"
                >
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0-0.001-6.001A3 3 0 0 0 8 8z" />
                </svg>
              </span>
            </Link>
          </li>{" "}
        </ul>
      </nav>

      <div className="askquestions">
        <h1>Ask Questions</h1>
        <p>Get specific answers from your uploaded legal judgement.</p>

        <input
          type="text"
          className="input-question"
          placeholder="Type your question here..."
        />
        <input type="button" value="Submit" id="btn" />
        <input type="button" value="Summarize" id="summarize_btn" />
      </div>

      <div className="answer-container">
        <input type="text" className="answer" placeholder="Answer" />
      </div>

      <div className="star-rating-container">
        <h3>Help Us Improve Your Legal Experience</h3>
        <div className="stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={star <= rating ? "star filled" : "star"}
              onClick={() => handleStarClick(star)}
            >
              ★
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

export default Page5;
