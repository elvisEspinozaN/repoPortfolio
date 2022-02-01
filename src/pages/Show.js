import "./Show.css";
import { useState } from "react";

const Show = (props) => {
  const id = props.match.params.id;
  const repos = props.repo.find((repo) => repo._id === id);

  const [edit, setEdit] = useState(repos);

  const changeHandler = (evt) => {
    setEdit({
      ...edit,
      [evt.target.name]: evt.target.value,
    });
  };

  const submitHandler = (evt) => {
    evt.preventDefault();
    props.updateRepo(edit, id);
    props.history.push("/repo");
  };

  const deleteHandlerAction = (evt) => {
    props.deleteRepo(id);
    props.history.push("/repo");
  };

  return (
    <div className="show-card">
      <div className="show-cont">
        <div className="show-content">
          <h3 id="h3" className="show-h3">
            {repos.pName}
          </h3>
          <p id="p" className="show-p">
            {repos.author}
          </p>
          <p className="show-p show-url">{repos.url}</p>
          <p className="show-p">{repos.progress}</p>
          <div class="show-bar"></div>
        </div>
      </div>
      <div className="show-cont">
        <form onSubmit={submitHandler}>
          <h3 id="h3" className="show-h3">
            Update
          </h3>
          <p className="show-p" id="p">
            Author
          </p>
          <input
            type="text"
            value={edit.author}
            name="author"
            placeholder="author name"
            onChange={changeHandler}
          />
          <p className="show-p">Project Name</p>
          <input
            type="text"
            value={edit.pName}
            name="pName"
            placeholder="project/repo name"
            onChange={changeHandler}
          />
          <p className="show-p">Progress Percentage</p>
          <input
            type="number"
            min="1"
            step="1"
            max="100"
            value={edit.progress}
            name="progress"
            placeholder="percentage"
            onChange={changeHandler}
          />
          <p className="show-p">Project URL</p>
          <input
            type="text"
            value={edit.url}
            name="url"
            placeholder="url"
            onChange={changeHandler}
          />
          <input className="show-button" type="submit" value="Edit" />
        </form>

        <button className="show-button" onClick={deleteHandlerAction}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Show;
