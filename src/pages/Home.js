import { Link } from "react-router-dom";
import "./Home.css";

const Home = (props) => {
  return (
    <div className="home-container">
      <div className="home">
        <div className="home-title">
          <p>repoPortfolio</p>
        </div>
        <div className="home-p">
          <h3>Welcome, to a public portfolio of repositories.</h3>
          <Link className="home-link" to="/repo">
            <h4>the app</h4>
          </Link>
        </div>
        <section className="home-section">
          <Link className="home-link home-about" to="/about">
            about
          </Link>
          <a
            className="home-link home-git"
            href="https://github.com/elvisEspinozaN"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
          <a
            className="home-link home-linkedin"
            href="https://www.linkedin.com/in/elvis-espinoza/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin
          </a>
        </section>
      </div>
    </div>
  );
};

export default Home;
