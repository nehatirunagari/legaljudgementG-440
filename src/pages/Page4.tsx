function Page4() {
  return (
    <>
      <nav className="navbar">
        <div id="logo">Legal AI</div>
        <ul>
          <li>
            <a href="/Home/">Home</a>
          </li>
          <li>
            <a href="/questionanswer/">QuestionAnswer</a>
          </li>
          <li>
            <a href="/About us/">About us</a>
          </li>
          <li>
            <div>icon</div>
          </li>
        </ul>
      </nav>
      <div className="summary">
        <h1>Summary of Legal Judgement</h1>
        <div className="sum">
          <input
            type="text"
            className="sumout"
            placeholder="generated summary"
          />
        </div>
        <input type="button" value="Download Summary" id="btn" />
      </div>
    </>
  );
}
export default Page4;
// npm run dev
