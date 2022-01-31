import { Link } from "react-router-dom";
import { login, logout } from "../services/firebase";
import "./Header.css";

const Header = (props) => {
  return (
    <div className="header-header">
      <div className="header-container">
        <Link style={{ textDecoration: "none" }} to="/home">
          <h1>repoPortfolio</h1>
        </Link>
        <nav className="header-nav">
          <ul className="header-navigation">
            <li>
              <Link to="/repo">
                <div>Repos</div>
              </Link>
            </li>
            <li>
              <Link to="/repo/create">
                <div>Create</div>
              </Link>
            </li>
            <li>
              {props.user ? (
                <>
                  <button
                    style={{
                      background: "none",
                      color: "black",
                      border: "none",
                    }}
                    onClick={logout}
                  >
                    <div className="header-logout-button">Logout</div>
                  </button>
                </>
              ) : (
                <button
                  style={{ background: "none", color: "black", border: "none" }}
                  onClick={login}
                >
                  <div className="header-button">Login</div>
                </button>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
