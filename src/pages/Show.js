const Show = (props) => {
  const id = props.match.params.id;
  const repo = props.repo;
  const repos = repo.find((p) => p._id === id);

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
      <button className="button" onClick={editHandlerAction}>
        Edit
      </button>
      <button className="button" onClick={deleteHandlerAction}>
        Delete
      </button>
    </div>
  );
};

export default Show;
