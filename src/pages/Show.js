const Show = (props) => {
  const id = props.match.params.id;
  const repo = props.repo;
  const repos = repo.find((p) => p._id === id);

  return (
    <div className="show-repo">
      <h1>{repos.author}</h1>
      <h2>{repos.pName}</h2>
      <h2>{repos.url}</h2>
      <h2>{repos.progress}</h2>
    </div>
  );
};

export default Show;
