import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <nav className="nav">
      <Link to="/repo">
        <div>repoPortfolio</div>
      </Link>
      <Link to="/repo/create">
        <div>Create</div>
      </Link>
    </nav>
  );
};

export default Header;
