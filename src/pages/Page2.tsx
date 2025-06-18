import { Link, useNavigate } from "react-router-dom";

function Page2() {
  const navigate = useNavigate();
  const login = () => {
    navigate("/Page3");
  };
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div id="logo">Legal AI</div>

        <div className="nav-right">
          <ul className="nav-links">
            <li>
              <Link to="/page1">Home</Link>
            </li>
            <li>
              <Link to="/page1">About us</Link>
            </li>
          </ul>
          <Link className="signup" to="/signup">
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Login Form */}
      <div className="login-container">
        <h2 id="welcome">Welcome to Legal AI</h2>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <div className="options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
          <button className="login-btn" onClick={login}>
            Login
          </button>
          <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default Page2;
