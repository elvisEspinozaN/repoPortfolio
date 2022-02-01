import { useState } from "react";
import { Link } from "react-router-dom";
import "./Index.css";

const Index = (props) => {
  const [repo, setRepo] = useState([]);

  const [form, setForm] = useState({
    author: "",
    pName: "",
    progress: "",
    url: "",
  });

  const changeHandler = (evt) => {
    if (!props.user) return;
    setForm((prevState) => ({
      ...prevState,
      [evt.target.name]: evt.target.value,
    }));
  };

  const submitHandler = (evt) => {
    if (!props.user) return;
    evt.preventDefault();
    props.createRepo(form);
    setForm({
      author: "",
      pName: "",
      progress: "",
      url: "",
    });
  };

  const loaded = () => {
    return props.repo.map((repo) => (
      <div key={repo._id}>
        <div className="index-card">
          <div className="index-repo">
            <div className="index-desc">
              <Link to={`/repo/${repo._id}`}>
                <h3>{repo.pName}</h3>
              </Link>
              <h3>{repo.author}</h3>
            </div>
            <div className="index-url">{repo.url}</div>
            <div className="index-progress">
              <h4>Progress</h4>
              <h3>{repo.progress}%</h3>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return (
    <section>
      {props.repo ? loaded() : loading()}

      <form onSubmit={submitHandler}>
        <div className="form-cont">
          <div className="form-controls">
            <div className="form-control">
              <label>Author</label>
              <input
                type="text"
                value={form.author}
                name="author"
                placeholder="author name"
                onChange={changeHandler}
              />
            </div>
            <div className="form-control">
              <label>Project Name</label>
              <input
                type="text"
                value={form.pName}
                name="pName"
                placeholder="project/repo name"
                onChange={changeHandler}
              />
            </div>
            <div className="form-control">
              <label>Progress Percentage</label>
              <input
                type="number"
                min="1"
                step="1"
                max="100"
                value={form.progress}
                name="progress"
                placeholder="percentage"
                onChange={changeHandler}
              />
            </div>
            <div className="form-control">
              <label>Project URL</label>
              <input
                type="text"
                value={form.url}
                name="url"
                placeholder="url"
                onChange={changeHandler}
              />
            </div>
            <div className="form-actions">
              <button className="alternative" type="submit">
                Upload
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Index;
