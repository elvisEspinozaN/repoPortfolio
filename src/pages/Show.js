import "./Show.css";

const Show = (props) => {
  const id = props.match.params.id;
  const repos = props.repo.find((repo) => repo._id === id);

  const editHandlerAction = () => {
    props.history.push(`/repo/${id}/edit`);
  };

  const deleteHandlerAction = () => {
    props.deleteRepo(repos._id);
    props.history.push("/");
  };

  return (
    <div className="show-repo">
      <div className="show-repos">
        <h1>{repos.author}</h1>
        <h2>{repos.pName}</h2>
        <h2>{repos.url}</h2>
        <h2>{repos.progress}</h2>
      </div>
      <button className="show-button" onClick={editHandlerAction}>
        Edit
      </button>
      <button className="show-delete-button" onClick={deleteHandlerAction}>
        Delete
      </button>
    </div>
  );
};

export default Show;
