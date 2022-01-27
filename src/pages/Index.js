import { Link } from "react-router-dom";

const Index = (props) => {
  const loaded = () => {
    return props.repo.map((repo) => (
      <div key={repo._id} className="repo">
        <Link></Link>
      </div>
    ));
  };
};

export default Index;
