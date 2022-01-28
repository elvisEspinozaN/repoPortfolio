import { useState } from "react";
import "./Edit.css";

const Edit = (props) => {
  const id = props.match.params.id;
  const repo = props.repo;
  const repos = repo.find((p) => p._id === id);

  const [edit, setEdit] = useState(repos);

  // handle change
  const changeHandler = (evt) => {
    setEdit((prevState) => ({
      ...prevState,
      [evt.target.name]: evt.target.value,
    }));
  };

  // handle submit
  const submitHandler = (evt) => {
    evt.preventDefault();
    props.updateRepo(edit, repo._id);
    props.history.push("/");
  };

  return (
    <div className="edit-controls form-controls">
      <form onSubmit={submitHandler}>
        <div className="form-control">
          <h1>Edit Your Repo</h1>
          <div className="form-control">
            <label>Author</label>
            <input
              type="text"
              name="author"
              value={edit.author}
              placeholder="author name"
              onChange={changeHandler}
            />
          </div>
          <div className="form-control">
            <label>Project Name</label>
            <input
              type="text"
              name="pName"
              value={edit.pName}
              placeholder="project name"
              onChange={changeHandler}
            />
          </div>
          <div className="form-control">
            <label>Progress</label>
            <input
              type="number"
              name="progress"
              min="0"
              step="0"
              max="100"
              value={edit.progress}
              placeholder="%"
              onChange={changeHandler}
            />
          </div>
          <div className="form-control">
            <label>Repo Link</label>
            <input
              type="text"
              name="url"
              value={edit.url}
              placeholder="repo link"
              onChange={changeHandler}
            />
          </div>
        </div>
        <div className="form-action">
          <button className="button" type="submit">
            Edit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
