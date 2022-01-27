import { Link } from "react-router-dom";

const Index = (props) => {
  const loaded = () => {
    return props.repo.map((repo) => (
      <div key={repo._id} className="repo">
        <h4>repo.author</h4>
        <h3>repo.pName</h3>
        <Link to={`/repo/${repo._id}`}>
          <h3>repo.url</h3>
        </Link>
        <h3>repo.progress</h3>
      </div>
    ));
  };
};

export default Index;
